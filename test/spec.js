describe('protractor-numerator tests', function () {
    let selectorLinkCSS = '.site-footer-links > li';
    let selectorLinkXPath = '//li[ancestor::*[contains(@class, "site-footer-links")]]';

    beforeAll(function () {
        // Turn off Angular synchronization
        browser.ignoreSynchronization = true;
        // Output some information about current tests process
        console.log(`==> Tests running at: ${process.cwd()}`);
        console.log(`==> With argv: ${process.argv}`);
    });

    beforeEach(function () {
        browser.get('https://github.com/');
    });

    it('should get the first link from the Github main page footer', function () {
        let linkFooterContactGitHub = element.all(by.css(selectorLinkCSS)).first();

        expect(linkFooterContactGitHub.getText()).toBe('Contact GitHub');
    });

    it('should get the second link from the Github main page footer', function () {
        let linkFooterAPI = element.all(by.xpath(selectorLinkXPath)).second();

        expect(linkFooterAPI.getText()).toBe('API');
    });

    it('should get the third link from the Github main page footer', function () {
        let linkFooterTraining = element.all(by.css(selectorLinkCSS)).third();

        expect(linkFooterTraining.getText()).toBe('Training');
    });

});
