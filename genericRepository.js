/* =============================================================================
 * @project: Node.js Abstraction
 * @author: Stijn Moreels
 * @language: Node.js
 * @purpose: Generic Repository
 =============================================================================*/
 
 module.exports = (function (model) {
    function getAll(wheres, callback) {
        if (typeof wheres == 'function') {
            callback = wheres;
            wheres = null;
        }
        model.find({}).where(wheres).exec(function (error, docs) {
            if (error) { throw error; }
            else callback(null, docs);
        });
    } function getOne(id, callback) {
        model.findById(id, function (error, item) {
            if (error) { throw error; }
            else callback(null, item._doc);
        });
    } function insertDocument(doc) {
        model.insert(doc);
    } function updateDocument(id, update, callback) {
        model.findByIdAndUpdate(id, { $set: update }, callback);
    }
    
    return {
        getAll: getAll,
        getOne: getOne,
        insert: insertDocument,
        update: updateDocument
    };
});
