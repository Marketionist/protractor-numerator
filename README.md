# protractor-numerator
This module adds readable numeration for elements in Protractor tests

## Installation
`npm install protractor-numerator --save-dev`

## Importing and enabling
I prefer to require protractor-numerator in `onPrepare` block inside `protractor.config.js`:

```javascript
onPrepare: function() {
    var number = require('protractor-numerator');
    // Some other code that needs to be executed before all tests
}
```

## Usage
Elements numeration inside Protractor end-to-end tests can be done like this:

```javascript
let second = number.second('.items li');

expect(second.getText()).toBe('Second');
```
