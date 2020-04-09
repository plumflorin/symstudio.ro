// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import produse controller
var produseController = require('./produseController');
// produse routes
router.route('/produse')
    .get(produseController.index)
    .post(produseController.new);
// router.route('/produse/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// Export API routes
module.exports = router;