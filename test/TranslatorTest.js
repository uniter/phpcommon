/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var expect = require('chai').expect,
    Translator = require('../src/Translator');

describe('Translator', function () {
    var translator;

    beforeEach(function () {
        translator = new Translator();

        translator.addTranslation('en_GB', 'their_name', 'What colour would you like ${name}?');
        translator.addTranslation('en_US', 'their_name', 'What color would you like ${name}?');
    });

    describe('addTranslation()', function () {
        it('should be able to override an existing translation for a given locale', function () {
            translator.addTranslation('en_GB', 'their_name', 'My different text ${name}!');

            expect(translator.translate('their_name', {name: 'Martha'})).to.equal('My different text Martha!');
        });
    });

    describe('addTranslations()', function () {
        it('should be able to add translations with dotted key at the top level', function () {
            translator.setLocale('en_US');

            translator.addTranslations({
                'en_US': {
                    'my_translation': 'My text is "${what}".'
                }
            });

            expect(translator.translate('my_translation', {what: 'here!'})).to.equal('My text is "here!".');
        });

        it('should be able to add translations with nested object structure', function () {
            translator.addTranslations({
                'en_GB': {
                    'my': {
                        'sub': {
                            'stuff': {
                                'text': 'Here is "${what}"'
                            }
                        }
                    }
                }
            });

            expect(translator.translate('my.sub.stuff.text', {what: 'my text!'})).to.equal('Here is "my text!"');
        });
    });

    describe('translate()', function () {
        it('should translate a string added for the fallback locale when using that same locale', function () {
            expect(translator.translate('their_name', {name: 'Fred'})).to.equal('What colour would you like Fred?');
        });

        it('should translate a string added for a different locale when using that locale', function () {
            translator.setLocale('en_US');

            expect(translator.translate('their_name', {name: 'Fred'})).to.equal('What color would you like Fred?');
        });

        it('should throw when the translation does not exist for the current nor fallback locales', function () {
            translator.setLocale('en_US');

            expect(function () {
                translator.translate('undefined_thing');
            }).to.throw(
                'Translation "undefined_thing" is not defined for current locale "en_US" nor the default locale "en_GB"'
            );
        });
    });
});
