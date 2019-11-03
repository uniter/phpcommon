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
    phpCommon = require('..'),
    PHPError = require('../src/Error/PHPError'),
    PHPFatalError = require('../src/Error/PHPFatalError'),
    PHPParseError = require('../src/Error/PHPParseError'),
    Translator = require('../src/Translator');

describe('Public API', function () {
    it('should export the PHPError class', function () {
        expect(phpCommon.PHPError).to.equal(PHPError);
    });

    it('should export the PHPFatalError class', function () {
        expect(phpCommon.PHPFatalError).to.equal(PHPFatalError);
    });

    it('should export the PHPParseError class', function () {
        expect(phpCommon.PHPParseError).to.equal(PHPParseError);
    });

    it('should export the Translator class', function () {
        expect(phpCommon.Translator).to.equal(Translator);
    });
});
