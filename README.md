# protractor-numerator

[![Build Status](https://travis-ci.org/Marketionist/protractor-numerator.svg?branch=master)](https://travis-ci.org/Marketionist/protractor-numerator)
[![npm version](https://img.shields.io/npm/v/protractor-numerator.svg)](https://www.npmjs.com/package/protractor-numerator)
[![NPM License](https://img.shields.io/npm/l/protractor-numerator.svg)](https://github.com/Marketionist/protractor-numerator/blob/master/LICENSE)

This module adds readable numeration for elements in Protractor tests

## Supported versions
[Node.js](http://nodejs.org/):
- 6.x
- 7.x

[Protractor](https://www.npmjs.com/package/protractor):
- 4.x
- 5.x

## Installation
`npm install protractor-numerator --save-dev`

## Importing and enabling
You can require protractor-numerator in `onPrepare` block inside
`protractor.config.js`. Here is a short config example:

```javascript
exports.config = {
    directConnect: true,

    framework: 'jasmine2',

    specs: [
        'spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function () {
        global.numerator = require('../index.js').numerator;
        protractor.ElementArrayFinder.prototype = Object.assign(
            protractor.ElementArrayFinder.prototype, numerator);
        // Some other code that needs to be executed before all tests
    }
};
```

## Usage
For example let's take a small HTML list:

```html
<ul class="items">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    <li>Fourth</li>
    <li>Fifth</li>
    <li>Sixth</li>
    <li>Seventh</li>
    <li>Eighth</li>
    <li>Ninth</li>
    <li>Tenth</li>
</ul>
```

Elements numeration inside Protractor end-to-end tests for this list can be done
like this:

```javascript
let second = element.all(by.css('.items li')).second();
let third = element.all(by.xpath('//li[ancestor::*[@class="items"]]')).third();
let fourth = element.all(by.css('.items li')).fourth();
let fifth = element.all(by.css('.items li')).fifth();
let sixth = element.all(by.css('.items li')).sixth();
let seventh = element.all(by.css('.items li')).seventh();
let eighth = element.all(by.css('.items li')).eighth();
let ninth = element.all(by.css('.items li')).ninth();
let tenth = element.all(by.css('.items li')).tenth();

expect(second.getText()).toBe('Second');
expect(third.getText()).toBe('Third');
expect(fourth.getText()).toBe('Fourth');
expect(fifth.getText()).toBe('Fifth');
expect(sixth.getText()).toBe('Sixth');
expect(seventh.getText()).toBe('Seventh');
expect(eighth.getText()).toBe('Eighth');
expect(ninth.getText()).toBe('Ninth');
expect(tenth.getText()).toBe('Tenth');
```

## Thanks
If this script was helpful for you, please give it a **Star**
on [github](https://github.com/Marketionist/protractor-numerator) and
[npm](https://www.npmjs.com/package/protractor-numerator)
