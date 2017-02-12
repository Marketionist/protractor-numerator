'use strict';

/* eslint valid-jsdoc: 0, no-magic-numbers: 0 */

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
     * @alias element.all(locator).third(locator)
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
    },

    /**
     * Get the fourth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).fourth(locator)
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
     * let fourth = element.all(by.css('.items li')).fourth();
     * expect(fourth.getText()).toBe('Fourth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let fourth = $$('.items li').fourth();
     * expect(fourth.getText()).toBe('Fourth');
     *
     * @returns {ElementFinder} finder representing the fourth matching element
     */
    fourth() {
        return this.get(3);
    },

    /**
     * Get the fifth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).fifth(locator)
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
     * let fifth = element.all(by.css('.items li')).fifth();
     * expect(fifth.getText()).toBe('Fifth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let fifth = $$('.items li').fifth();
     * expect(fifth.getText()).toBe('Fifth');
     *
     * @returns {ElementFinder} finder representing the fifth matching element
     */
    fifth() {
        return this.get(4);
    },

    /**
     * Get the sixth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).sixth(locator)
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
     * let sixth = element.all(by.css('.items li')).sixth();
     * expect(sixth.getText()).toBe('Sixth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let sixth = $$('.items li').sixth();
     * expect(sixth.getText()).toBe('Sixth');
     *
     * @returns {ElementFinder} finder representing the sixth matching element
     */
    sixth() {
        return this.get(5);
    },

    /**
     * Get the seventh matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).seventh(locator)
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
     * let seventh = element.all(by.css('.items li')).seventh();
     * expect(seventh.getText()).toBe('Seventh');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let seventh = $$('.items li').seventh();
     * expect(seventh.getText()).toBe('Seventh');
     *
     * @returns {ElementFinder} finder representing the seventh matching element
     */
    seventh() {
        return this.get(6);
    },

    /**
     * Get the eighth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).eighth(locator)
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
     * let eighth = element.all(by.css('.items li')).eighth();
     * expect(eighth.getText()).toBe('Eighth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let eighth = $$('.items li').eighth();
     * expect(eighth.getText()).toBe('Eighth');
     *
     * @returns {ElementFinder} finder representing the eighth matching element
     */
    eighth() {
        return this.get(7);
    },

    /**
     * Get the ninth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).ninth(locator)
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
     * let ninth = element.all(by.css('.items li')).ninth();
     * expect(ninth.getText()).toBe('Ninth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let ninth = $$('.items li').ninth();
     * expect(ninth.getText()).toBe('Ninth');
     *
     * @returns {ElementFinder} finder representing the ninth matching element
     */
    ninth() {
        return this.get(8);
    },

    /**
     * Get the tenth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).tenth(locator)
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
     * let tenth = element.all(by.css('.items li')).tenth();
     * expect(tenth.getText()).toBe('Tenth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let tenth = $$('.items li').tenth();
     * expect(tenth.getText()).toBe('Tenth');
     *
     * @returns {ElementFinder} finder representing the tenth matching element
     */
    tenth() {
        return this.get(9);
    },

    /**
     * Get the eleventh matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).eleventh(locator)
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
     *   <li>Eleventh</li>
     *   <li>Twelfth</li>
     *   <li>Thirteenth</li>
     *   <li>Fourteenth</li>
     *   <li>Fifteenth</li>
     *   <li>Sixteenth</li>
     *   <li>Seventeenth</li>
     *   <li>Eighteenth</li>
     *   <li>Nineteenth</li>
     *   <li>Twentieth</li>
     * </ul>
     *
     * @example
     * let eleventh = element.all(by.css('.items li')).eleventh();
     * expect(eleventh.getText()).toBe('Eleventh');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let eleventh = $$('.items li').eleventh();
     * expect(eleventh.getText()).toBe('Eleventh');
     *
     * @returns {ElementFinder} finder representing the eleventh matching element
     */
    eleventh() {
        return this.get(10);
    },

    /**
     * Get the twelfth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).twelfth(locator)
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
     *   <li>Eleventh</li>
     *   <li>Twelfth</li>
     *   <li>Thirteenth</li>
     *   <li>Fourteenth</li>
     *   <li>Fifteenth</li>
     *   <li>Sixteenth</li>
     *   <li>Seventeenth</li>
     *   <li>Eighteenth</li>
     *   <li>Nineteenth</li>
     *   <li>Twentieth</li>
     * </ul>
     *
     * @example
     * let twelfth = element.all(by.css('.items li')).twelfth();
     * expect(twelfth.getText()).toBe('Twelfth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let twelfth = $$('.items li').twelfth();
     * expect(twelfth.getText()).toBe('Twelfth');
     *
     * @returns {ElementFinder} finder representing the twelfth matching element
     */
    twelfth() {
        return this.get(11);
    },

    /**
     * Get the thirteenth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).thirteenth(locator)
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
     *   <li>Eleventh</li>
     *   <li>Twelfth</li>
     *   <li>Thirteenth</li>
     *   <li>Fourteenth</li>
     *   <li>Fifteenth</li>
     *   <li>Sixteenth</li>
     *   <li>Seventeenth</li>
     *   <li>Eighteenth</li>
     *   <li>Nineteenth</li>
     *   <li>Twentieth</li>
     * </ul>
     *
     * @example
     * let thirteenth = element.all(by.css('.items li')).thirteenth();
     * expect(thirteenth.getText()).toBe('Thirteenth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let thirteenth = $$('.items li').thirteenth();
     * expect(thirteenth.getText()).toBe('Thirteenth');
     *
     * @returns {ElementFinder} finder representing the thirteenth matching element
     */
    thirteenth() {
        return this.get(12);
    },

    /**
     * Get the fourteenth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).fourteenth(locator)
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
     *   <li>Eleventh</li>
     *   <li>Twelfth</li>
     *   <li>Thirteenth</li>
     *   <li>Fourteenth</li>
     *   <li>Fifteenth</li>
     *   <li>Sixteenth</li>
     *   <li>Seventeenth</li>
     *   <li>Eighteenth</li>
     *   <li>Nineteenth</li>
     *   <li>Twentieth</li>
     * </ul>
     *
     * @example
     * let fourteenth = element.all(by.css('.items li')).fourteenth();
     * expect(fourteenth.getText()).toBe('Fourteenth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let fourteenth = $$('.items li').fourteenth();
     * expect(fourteenth.getText()).toBe('Fourteenth');
     *
     * @returns {ElementFinder} finder representing the fourteenth matching element
     */
    fourteenth() {
        return this.get(13);
    },

    /**
     * Get the fifteenth matching element for the ElementArrayFinder. This does not
     * actually retrieve the underlying element.
     *
     * @alias element.all(locator).fifteenth(locator)
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
     *   <li>Eleventh</li>
     *   <li>Twelfth</li>
     *   <li>Thirteenth</li>
     *   <li>Fourteenth</li>
     *   <li>Fifteenth</li>
     *   <li>Sixteenth</li>
     *   <li>Seventeenth</li>
     *   <li>Eighteenth</li>
     *   <li>Nineteenth</li>
     *   <li>Twentieth</li>
     * </ul>
     *
     * @example
     * let fifteenth = element.all(by.css('.items li')).fifteenth();
     * expect(fifteenth.getText()).toBe('Fifteenth');
     *
     * // Or using the shortcut $$() notation instead of element.all(by.css()):
     *
     * let fifteenth = $$('.items li').fifteenth();
     * expect(fifteenth.getText()).toBe('Fifteenth');
     *
     * @returns {ElementFinder} finder representing the fifteenth matching element
     */
    fifteenth() {
        return this.get(14);
    }

};
