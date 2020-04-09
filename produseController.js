// Import preturi model
Preturi = require('./preturiModel');
// Handle index actions
exports.index = function (req, res) {
    Preturi.get(function (err, preturi) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "preturi retrieved successfully",
            data: preturi
        });
    });
};
// Handle create preturi actions
exports.new = function (req, res) {
    var preturi = new Preturi();
    preturi.nume = req.body.nume;
    preturi.pret = req.body.pret;
    preturi.categorie = req.body.categorie;
// save the preturi and check for errors
    preturi.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: 'New preturi created!',
            data: preturi
        });
    });
};
// Handle view preturi info
exports.view = function (req, res) {
    Preturi.findById(req.params.contact_id, function (err, preturi) {
        if (err)
            res.send(err);
        res.json({
            message: 'Preturi details loading..',
            data: preturi
        });
    });
};
// Handle update preturi info
exports.update = function (req, res) {
Preturi.findById(req.params.contact_id, function (err, preturi) {
        if (err)
            res.send(err);
preturi.name = req.body.name ? req.body.name : preturi.name;
        preturi.gender = req.body.gender;
        preturi.email = req.body.email;
        preturi.phone = req.body.phone;
// save the preturi and check for errors
        preturi.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Preturi Info updated',
                data: preturi
            });
        });
    });
};
// Handle delete preturi
exports.delete = function (req, res) {
    Preturi.remove({
        _id: req.params.contact_id
    }, function (err, preturi) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Preturi deleted'
        });
    });
};