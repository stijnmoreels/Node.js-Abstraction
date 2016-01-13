/* =============================================================================
 * @project: Node.js Abstraction
 * @author: Stijn Moreels
 * @language: Node.js
 * @purpose: Generic Middleware
 =============================================================================*/
 
 module.exports = (function (func) {
    return function (request, response, next) {
        var id = request.params.id || request.body._id;
        func(id, function (error, doc) {
            if (error) { throw error; }
            else request.model = doc;
            next();
        });
    };
});
