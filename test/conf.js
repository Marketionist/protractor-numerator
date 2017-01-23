/* global numerator */

exports.config = {
    directConnect: true,

    framework: 'jasmine2',

    specs: [
        'spec.js'
    ],

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        global.numerator = require('../index.js').numerator;
        protractor.ElementArrayFinder.prototype = Object.assign(
            protractor.ElementArrayFinder.prototype, numerator);
        // Some other code that needs to be executed before all tests
    }
};
