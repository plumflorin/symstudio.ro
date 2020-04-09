var mongoose = require('mongoose');
// Setup schema
var produseSchema = mongoose.Schema({
    nume: String,
    pret: String,
    categorie: String
    
}, { collection: 'produse' });
// Export Contact model
var Produse = module.exports = mongoose.model('produse', produseSchema);
module.exports.get = function (callback, limit) {
    Produse.find(callback).limit(limit);
}