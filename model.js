/* =============================================================================
 * @project: Node.js Abstraction
 * @author: Stijn Moreels
 * @language: Node.js
 * @purpose: Generic Model
 =============================================================================*/

module.exports = (function (name) {
    var mongoose = require('mongoose'),
        schemePath = "./scheme/" + name + "Scheme.js",
        scheme = null;
    if (require.resolve(schemePath)) {
        scheme = require(schemePath);
    }
    return mongoose.model(name, scheme, name);
});
