'use strict';

let nodeTestingServer = require('node-testing-server').nodeTestingServer;

// Settings for node testing server
nodeTestingServer.config = {
    hostname: 'localhost',
    port: 8001,
    logsEnabled: 0,
    pages: {
        '/test.html': `<ul class="items">
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
                    </ul>`
    }
}

describe('protractor-numerator tests', function () {
    // Selectors for tests
    let selectorLinkCSS = '.items li';
    let selectorLinkXPath = '//li[ancestor::*[@class="items"]]';

    beforeAll(function () {
        // Turn off Angular synchronization
        browser.ignoreSynchronization = true;
        // Output some information about current tests process
        console.log(`==> Tests running at: ${process.cwd()}`);
        console.log(`==> With argv: ${process.argv}`);

        // Start node testing server
        nodeTestingServer.start();
    });

    beforeEach(function () {
        browser.get(`http://${nodeTestingServer.config.hostname}:${nodeTestingServer.config.port}/test.html`);
    });

    afterAll(function () {
        // Stop node testing server
        nodeTestingServer.stop();
    });

    it('should get the first list item from the test server page', function () {
        let listItemFirst = element.all(by.css(selectorLinkCSS)).first();

        expect(listItemFirst.getText()).toBe('First');
    });

    it('should get the second list item from the test server page', function () {
        let listItemSecond = element.all(by.xpath(selectorLinkXPath)).second();

        expect(listItemSecond.getText()).toBe('Second');
    });

    it('should get the third list item from the test server page', function () {
        let listItemThird = element.all(by.css(selectorLinkCSS)).third();

        expect(listItemThird.getText()).toBe('Third');
    });

    it('should get the fourth list item from the test server page', function () {
        let listItemFourth = element.all(by.css(selectorLinkCSS)).fourth();

        expect(listItemFourth.getText()).toBe('Fourth');
    });

    it('should get the fifth list item from the test server page', function () {
        let listItemFifth = element.all(by.css(selectorLinkCSS)).fifth();

        expect(listItemFifth.getText()).toBe('Fifth');
    });

    it('should get the sixth list item from the test server page', function () {
        let listItemSixth = element.all(by.css(selectorLinkCSS)).sixth();

        expect(listItemSixth.getText()).toBe('Sixth');
    });

    it('should get the seventh list item from the test server page', function () {
        let listItemSeventh = element.all(by.css(selectorLinkCSS)).seventh();

        expect(listItemSeventh.getText()).toBe('Seventh');
    });

    it('should get the eighth list item from the test server page', function () {
        let listItemEighth = element.all(by.css(selectorLinkCSS)).eighth();

        expect(listItemEighth.getText()).toBe('Eighth');
    });

    it('should get the ninth list item from the test server page', function () {
        let listItemNinth = element.all(by.css(selectorLinkCSS)).ninth();

        expect(listItemNinth.getText()).toBe('Ninth');
    });

    it('should get the tenth list item from the test server page', function () {
        let listItemTenth = element.all(by.css(selectorLinkCSS)).tenth();

        expect(listItemTenth.getText()).toBe('Tenth');
    });

    it('should get the eleventh list item from the test server page', function () {
        let listItemEleventh = element.all(by.css(selectorLinkCSS)).eleventh();

        expect(listItemEleventh.getText()).toBe('Eleventh');
    });

    it('should get the twelfth list item from the test server page', function () {
        let listItemTwelfth = element.all(by.css(selectorLinkCSS)).twelfth();

        expect(listItemTwelfth.getText()).toBe('Twelfth');
    });

    it('should get the thirteenth list item from the test server page', function () {
        let listItemThirteenth = element.all(by.css(selectorLinkCSS)).thirteenth();

        expect(listItemThirteenth.getText()).toBe('Thirteenth');
    });

    it('should get the fourteenth list item from the test server page', function () {
        let listItemFourteenth = element.all(by.css(selectorLinkCSS)).fourteenth();

        expect(listItemFourteenth.getText()).toBe('Fourteenth');
    });

    it('should get the fifteenth list item from the test server page', function () {
        let listItemFifteenth = element.all(by.css(selectorLinkCSS)).fifteenth();

        expect(listItemFifteenth.getText()).toBe('Fifteenth');
    });

    it('should get the sixteenth list item from the test server page', function () {
        let listItemSixteenth = element.all(by.css(selectorLinkCSS)).sixteenth();

        expect(listItemSixteenth.getText()).toBe('Sixteenth');
    });

    it('should get the seventeenth list item from the test server page', function () {
        let listItemSeventeenth = element.all(by.css(selectorLinkCSS)).seventeenth();

        expect(listItemSeventeenth.getText()).toBe('Seventeenth');
    });

    it('should get the eighteenth list item from the test server page', function () {
        let listItemEighteenth = element.all(by.css(selectorLinkCSS)).eighteenth();

        expect(listItemEighteenth.getText()).toBe('Eighteenth');
    });

    it('should get the nineteenth list item from the test server page', function () {
        let listItemNineteenth = element.all(by.css(selectorLinkCSS)).nineteenth();

        expect(listItemNineteenth.getText()).toBe('Nineteenth');
    });

});
