'use strict';

/*
 * Created by marketionist on 31.12.2016
 */

// #############################################################################

exports.numerator = {

    /**
     * Get the second matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).second()
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
     * let second = element.all(by.css('.items li')).second();
     * expect(second.getText()).toBe('Second');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let second = $$('.items li').second();
     * expect(second.getText()).toBe('Second');
     *
     * @returns {ElementFinder} finder representing the second matching element
     */
    second() {
        return this.get(1);
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
     * let third = element.all(by.css('.items li')).third();
     * expect(third.getText()).toBe('Third');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let third = $$('.items li').third();
     * expect(third.getText()).toBe('Third');
     *
     * @returns {ElementFinder} finder representing the third matching element
     */
    third() {
        return this.get(2);
    }

};
