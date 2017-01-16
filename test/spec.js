describe('protractor-numerator tests', function () {
    let selectorLinkCSS = '.site-footer-links > li > a';
    let selectorLinkXPath = '//a[ancestor::*[li[ancestor::*[contains(@class, "site-footer-links")]]]]';

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

    it('should get the fourth link from the Github main page footer', function () {
        let linkFooterShop = element.all(by.css(selectorLinkCSS)).fourth();

        expect(linkFooterShop.getText()).toBe('Shop');
    });

    it('should get the fifth link from the Github main page footer', function () {
        let linkFooterBlog = element.all(by.css(selectorLinkCSS)).fifth();

        expect(linkFooterBlog.getText()).toBe('Blog');
    });

    it('should get the sixth link from the Github main page footer', function () {
        let linkFooterAbout = element.all(by.css(selectorLinkCSS)).sixth();

        expect(linkFooterAbout.getText()).toBe('About');
    });

    it('should get the seventh link from the Github main page footer', function () {
        let linkFooterTerms = element.all(by.css(selectorLinkCSS)).seventh();

        expect(linkFooterTerms.getText()).toBe('Terms');
    });

    it('should get the eighth link from the Github main page footer', function () {
        let linkFooterPrivacy = element.all(by.css(selectorLinkCSS)).eighth();

        expect(linkFooterPrivacy.getText()).toBe('Privacy');
    });

    it('should get the ninth link from the Github main page footer', function () {
        let linkFooterSecurity = element.all(by.css(selectorLinkCSS)).ninth();

        expect(linkFooterSecurity.getText()).toBe('Security');
    });

    it('should get the tenth link from the Github main page footer', function () {
        let linkFooterStatus = element.all(by.css(selectorLinkCSS)).tenth();

        expect(linkFooterStatus.getText()).toBe('Status');
    });

});
