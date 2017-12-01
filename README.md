# protractor-numerator

[![Build Status](https://travis-ci.org/Marketionist/protractor-numerator.svg?branch=master)](https://travis-ci.org/Marketionist/protractor-numerator)
[![npm version](https://img.shields.io/npm/v/protractor-numerator.svg)](https://www.npmjs.com/package/protractor-numerator)
[![NPM License](https://img.shields.io/npm/l/protractor-numerator.svg)](https://github.com/Marketionist/protractor-numerator/blob/master/LICENSE)

This module gives you readable functions for getting elements by their numbers inside Protractor tests

## Supported versions
[Node.js](http://nodejs.org/):
- 6.x
- 7.x
- 8.x
- 9.x

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
        browserName: 'chrome'
    },

    onPrepare: function () {
        global.numerator = require('protractor-numerator').numerator;
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
    <li>Eleventh</li>
    <li>Twelfth</li>
    <li>Thirteenth</li>
    <li>Fourteenth</li>
    <li>Fifteenth</li>
    <li>Sixteenth</li>
    <li>Seventeenth</li>
    <li>Eighteenth</li>
    <li>Nineteenth</li>
    <li>Twentieth</li>
</ul>
```

Inside your Protractor end-to-end tests you can get any element of this list like this:

```javascript
// Get all <li> elements from the list with class "items" and select one particular element by its number:
let listItemSecond = element.all(by.css('.items li')).second();
let listItemThird = element.all(by.xpath('//li[ancestor::*[@class="items"]]')).third();
let listItemFourth = element.all(by.css('.items li')).fourth();
let listItemFifth = element.all(by.css('.items li')).fifth();
let listItemSixth = element.all(by.css('.items li')).sixth();
let listItemSeventh = element.all(by.css('.items li')).seventh();
let listItemEighth = element.all(by.css('.items li')).eighth();
let listItemNinth = element.all(by.css('.items li')).ninth();
let listItemTenth = element.all(by.css('.items li')).tenth();
let listItemEleventh = element.all(by.css('.items li')).eleventh();
let listItemTwelfth = element.all(by.css('.items li')).twelfth();
let listItemThirteenth = element.all(by.css('.items li')).thirteenth();
let listItemFourteenth = element.all(by.css('.items li')).fourteenth();
let listItemFifteenth = element.all(by.css('.items li')).fifteenth();
let listItemSixteenth = element.all(by.css('.items li')).sixteenth();
let listItemSeventeenth = element.all(by.css('.items li')).seventeenth();
let listItemEighteenth = element.all(by.css('.items li')).eighteenth();
let listItemNineteenth = element.all(by.css('.items li')).nineteenth();
let listItemTwentieth = element.all(by.css('.items li')).twentieth();

// Now you can do whatever you want with any element for example validate its text:
expect(listItemSecond.getText()).toBe('Second');
expect(listItemThird.getText()).toBe('Third');
expect(listItemFourth.getText()).toBe('Fourth');
expect(listItemFifth.getText()).toBe('Fifth');
expect(listItemSixth.getText()).toBe('Sixth');
expect(listItemSeventh.getText()).toBe('Seventh');
expect(listItemEighth.getText()).toBe('Eighth');
expect(listItemNinth.getText()).toBe('Ninth');
expect(listItemTenth.getText()).toBe('Tenth');
expect(listItemEleventh.getText()).toBe('Eleventh');
expect(listItemTwelfth.getText()).toBe('Twelfth');
expect(listItemThirteenth.getText()).toBe('Thirteenth');
expect(listItemFourteenth.getText()).toBe('Fourteenth');
expect(listItemFifteenth.getText()).toBe('Fifteenth');
expect(listItemSixteenth.getText()).toBe('Sixteenth');
expect(listItemSeventeenth.getText()).toBe('Seventeenth');
expect(listItemEighteenth.getText()).toBe('Eighteenth');
expect(listItemNineteenth.getText()).toBe('Nineteenth');
expect(listItemTwentieth.getText()).toBe('Twentieth');
```

## Thanks
If this plugin was helpful for you, please give it a **★ Star** on
[Github](https://github.com/Marketionist/protractor-numerator)
