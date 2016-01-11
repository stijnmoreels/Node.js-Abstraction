/* =============================================================================
 * @project: Node.js Abstraction
 * @author: Stijn Moreels
 * @language: Node.js
 * @purpose: Generic Repository
 =============================================================================*/
 
 module.exports = (function (model) {
    var argsEmpty = { sort: null, where: null };

    function getAll(args, callback) {
        if (typeof args === 'function') {
            callback = args;
            args = argsEmpty;
        }
        model.find({}).where(args.where).sort(args.sort).exec(function (error, docs) {
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
        update: updateDocument,
        argsEmpty: argsEmpty
    };
});
