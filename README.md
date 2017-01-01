# protractor-numerator
This module adds readable numeration for elements in Protractor tests

## Installation
`npm install protractor-numerator --save-dev`

## Importing and enabling
I prefer to require protractor-numerator in `onPrepare` block inside
`protractor.config.js`:

```javascript
onPrepare: function() {
    global.number = require('protractor-numerator').number;
    // Some other code that needs to be executed before all tests
}
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
let first = number.first('.items li');
let second = number.second('.items li');
let third = number.third('.items li');

expect(first.getText()).toBe('First');
expect(second.getText()).toBe('Second');
expect(third.getText()).toBe('Third');
```

## Thanks
If this script was helpful for you, please give it a **Star**
on[github](https://github.com/Marketionist/protractor-numerator) and
[npm](https://www.npmjs.com/package/protractor-numerator)
