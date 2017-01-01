'use strict';

/*
 * Created by Marketionist on 31.12.2016
 */

// #############################################################################

module.exports.number = {

    _getElements(elem) {
        let selectorIsXpath = elem.indexOf('//');

        if (selectorIsXpath === 0 || selectorIsXpath === 1) {
            return element.all(by.xpath(elem));
        } else {
            return element.all(by.css(elem));
        }
    },

    /**
     * Get the first matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias number.first(locator)
     * @view
     * <ul class="items">
     *   <li>First</li>
     *   <li>Second</li>
     *   <li>Third</li>
     *   <li>Fourth</li>
     *   <li>Fifth</li>
     *   <li>Sixth</li>
     *   <li>Seventh</li>
     *   <li>Eighth</li>
     *   <li>Ninth</li>
     *   <li>Tenth</li>
     * </ul>
     *
     * @example
     * let first = number.first('.items li');
     * expect(first.getText()).toBe('First');
     *
     * @returns {ElementFinder} finder representing the first matching element
     */
    first(elem) {
        return this._getElements(elem).get(0);
    },

    /**
     * Get the second matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias number.second(locator)
     * @view
     * <ul class="items">
     *   <li>First</li>
     *   <li>Second</li>
     *   <li>Third</li>
     *   <li>Fourth</li>
     *   <li>Fifth</li>
     *   <li>Sixth</li>
     *   <li>Seventh</li>
     *   <li>Eighth</li>
     *   <li>Ninth</li>
     *   <li>Tenth</li>
     * </ul>
     *
     * @example
     * let second = number.second('.items li');
     * expect(second.getText()).toBe('Second');
     *
     * @returns {ElementFinder} finder representing the second matching element
     */
    second(elem) {
        return this._getElements(elem).get(1);
    },

    /**
     * Get the third matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias number.third(locator)
     * @view
     * <ul class="items">
     *   <li>First</li>
     *   <li>Second</li>
     *   <li>Third</li>
     *   <li>Fourth</li>
     *   <li>Fifth</li>
     *   <li>Sixth</li>
     *   <li>Seventh</li>
     *   <li>Eighth</li>
     *   <li>Ninth</li>
     *   <li>Tenth</li>
     * </ul>
     *
     * @example
     * let third = number.third('.items li');
     * expect(third.getText()).toBe('Third');
     *
     * @returns {ElementFinder} finder representing the third matching element
     */
    third(elem) {
        return this._getElements(elem).get(2);
    }

};
