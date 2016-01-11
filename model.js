/* =============================================================================
 * @project: Node.js Abstraction
 * @author: Stijn Moreels
 * @language: Node.js
 * @purpose: Generic Model
 =============================================================================*/

module.exports = (function (name, schemaPath) {
    var mongoose = require('mongoose'),
        schema = null,
        schemePath = schemaPath === undefined ? 
            "./scheme/" + name + "Scheme.js" : schemaPath;
    if (require.resolve(schemePath)) {
        scheme = require(schemePath);
    }
    return mongoose.model(name, scheme, name);
});
