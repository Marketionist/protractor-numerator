'use strict';

import {} from 'jasmine';
import { browser, element, by } from 'protractor';
const nodeTestingServer = require('node-testing-server').nodeTestingServer;

/* eslint spaced-comment: 1, eol-last: 1, quotes: 1, max-len:1, newline-after-var: 0 */

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

        listItemFirst.getText().then((text: string) => {
            expect(text).toBe('First');
        });
    });

    it('should get the second list item from the test server page', function () {
        let listItemSecond = element.all(by.xpath(selectorLinkXPath)).second();

        listItemSecond.getText().then((text: string) => {
            expect(text).toBe('Second');
        });
    });

    it('should get the third list item from the test server page', function () {
        let listItemThird = element.all(by.css(selectorLinkCSS)).third();

        listItemThird.getText().then((text: string) => {
            expect(text).toBe('Third');
        });
    });

    it('should get the fourth list item from the test server page', function () {
        let listItemFourth = element.all(by.css(selectorLinkCSS)).fourth();

        listItemFourth.getText().then((text: string) => {
            expect(text).toBe('Fourth');
        });
    });

    it('should get the fifth list item from the test server page', function () {
        let listItemFifth = element.all(by.css(selectorLinkCSS)).fifth();

        listItemFifth.getText().then((text: string) => {
            expect(text).toBe('Fifth');
        });
    });

    it('should get the sixth list item from the test server page', function () {
        let listItemSixth = element.all(by.css(selectorLinkCSS)).sixth();

        listItemSixth.getText().then((text: string) => {
            expect(text).toBe('Sixth');
        });
    });

    it('should get the seventh list item from the test server page', function () {
        let listItemSeventh = element.all(by.css(selectorLinkCSS)).seventh();

        listItemSeventh.getText().then((text: string) => {
            expect(text).toBe('Seventh');
        });
    });

    it('should get the eighth list item from the test server page', function () {
        let listItemEighth = element.all(by.css(selectorLinkCSS)).eighth();

        listItemEighth.getText().then((text: string) => {
            expect(text).toBe('Eighth');
        });
    });

    it('should get the ninth list item from the test server page', function () {
        let listItemNinth = element.all(by.css(selectorLinkCSS)).ninth();

        listItemNinth.getText().then((text: string) => {
            expect(text).toBe('Ninth');
        });
    });

    it('should get the tenth list item from the test server page', function () {
        let listItemTenth = element.all(by.css(selectorLinkCSS)).tenth();

        listItemTenth.getText().then((text: string) => {
            expect(text).toBe('Tenth');
        });
    });

    it('should get the eleventh list item from the test server page', function () {
        let listItemEleventh = element.all(by.css(selectorLinkCSS)).eleventh();

        listItemEleventh.getText().then((text: string) => {
            expect(text).toBe('Eleventh');
        });
    });

    it('should get the twelfth list item from the test server page', function () {
        let listItemTwelfth = element.all(by.css(selectorLinkCSS)).twelfth();

        listItemTwelfth.getText().then((text: string) => {
            expect(text).toBe('Twelfth');
        });
    });

    it('should get the thirteenth list item from the test server page', function () {
        let listItemThirteenth = element.all(by.css(selectorLinkCSS)).thirteenth();

        listItemThirteenth.getText().then((text: string) => {
            expect(text).toBe('Thirteenth');
        });
    });

    it('should get the fourteenth list item from the test server page', function () {
        let listItemFourteenth = element.all(by.css(selectorLinkCSS)).fourteenth();

        listItemFourteenth.getText().then((text: string) => {
            expect(text).toBe('Fourteenth');
        });
    });

    it('should get the fifteenth list item from the test server page', function () {
        let listItemFifteenth = element.all(by.css(selectorLinkCSS)).fifteenth();

        listItemFifteenth.getText().then((text: string) => {
            expect(text).toBe('Fifteenth');
        });
    });

    it('should get the sixteenth list item from the test server page', function () {
        let listItemSixteenth = element.all(by.css(selectorLinkCSS)).sixteenth();

        listItemSixteenth.getText().then((text: string) => {
            expect(text).toBe('Sixteenth');
        });
    });

    it('should get the seventeenth list item from the test server page', function () {
        let listItemSeventeenth = element.all(by.css(selectorLinkCSS)).seventeenth();

        listItemSeventeenth.getText().then((text: string) => {
            expect(text).toBe('Seventeenth');
        });
    });

    it('should get the eighteenth list item from the test server page', function () {
        let listItemEighteenth = element.all(by.css(selectorLinkCSS)).eighteenth();

        listItemEighteenth.getText().then((text: string) => {
            expect(text).toBe('Eighteenth');
        });
    });

    it('should get the nineteenth list item from the test server page', function () {
        let listItemNineteenth = element.all(by.css(selectorLinkCSS)).nineteenth();

        listItemNineteenth.getText().then((text: string) => {
            expect(text).toBe('Nineteenth');
        });
    });

    it('should get the twentieth list item from the test server page', function () {
        let listItemTwentieth = element.all(by.css(selectorLinkCSS)).twentieth();

        listItemTwentieth.getText().then((text: string) => {
            expect(text).toBe('Twentieth');
        });
    });

});
