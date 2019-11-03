/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('microdash'),
    DEFAULT_LOCALE = 'en_GB',
    hasOwn = {}.hasOwnProperty,
    templateString = require('template-string');

/**
 * Stores translations for internal strings in different locales
 *
 * @constructor
 */
function Translator() {
    /**
     * @type {Object.<string, Object.<string, string>>}
     */
    this.cataloguesByLocale = {};
    /**
     * @type {string}
     */
    this.currentLocale = DEFAULT_LOCALE;
}

_.extend(Translator.prototype, {
    /**
     * Adds a translation for a specific key within a given locale
     *
     * @param {string} locale e.g. en_GB
     * @param {string} key e.g. error.my_error.my_sub_msg
     * @param {string} translation
     */
    addTranslation: function (locale, key, translation) {
        var translator = this;

        if (!hasOwn.call(translator.cataloguesByLocale, locale)) {
            translator.cataloguesByLocale[locale] = {};
        }

        this.cataloguesByLocale[locale][key] = translation;
    },

    /**
     * Adds multiple translations, potentially across multiple locales' catalogues
     *
     * @param {Object.<string, object>} structure
     */
    addTranslations: function (structure) {
        var translator = this;

        function add(locale, keyParts, data) {
            if (_.isPlainObject(data)) {
                _.forOwn(data, function (data, keyPart) {
                    add(locale, keyParts.concat([keyPart]), data);
                });
            } else {
                translator.addTranslation(locale, keyParts.join('.'), data);
            }
        }

        _.forOwn(structure, function (data, locale) {
            add(locale, [], data);
        });
    },

    /**
     * Selects which catalogue of messages should be used for translation by locale
     *
     * @param {string} locale
     */
    setLocale: function (locale) {
        this.currentLocale = locale;
    },

    /**
     * Translates the given key for the current locale (falling back to the default locale if not defined)
     * and fills in any placeholders with the given variables
     *
     * @param {string} key
     * @param {Object.<string, string>=} placeholderVariables
     * @returns {string}
     * @throws {Error} When the translation is not defined for the current nor fallback locales
     */
    translate: function (key, placeholderVariables) {
        var translation,
            translator = this;

        if (hasOwn.call(translator.cataloguesByLocale, translator.currentLocale) &&
            hasOwn.call(translator.cataloguesByLocale[translator.currentLocale], key)
        ) {
            // The translation is defined for the current locale - use it
            translation = translator.cataloguesByLocale[translator.currentLocale][key];
        } else {
            // Fall back to the default locale's catalogue

            if (!hasOwn.call(translator.cataloguesByLocale[DEFAULT_LOCALE], key)) {
                throw new Error(
                    'Translation "' + key + '" is not defined for current locale "' + translator.currentLocale +
                    '" nor the default locale "' + DEFAULT_LOCALE + '"'
                );
            }

            translation = translator.cataloguesByLocale[DEFAULT_LOCALE][key];
        }

        return templateString(translation, placeholderVariables);
    }
});

module.exports = Translator;
