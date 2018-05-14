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
    PHPError = require('../../src/Error/PHPError'),
    Exception = require('../../src/Error/Exception');

describe('PHPError', function () {
    it('should set the correct message for a deprecation warning', function () {
        var error = new PHPError(PHPError.E_DEPRECATED, 'Going soon');

        expect(error.message).to.equal('PHP Deprecated: Going soon');
    });

    it('should set the correct message for a fatal error', function () {
        var error = new PHPError(PHPError.E_FATAL, 'Nice seein\' ya');

        expect(error.message).to.equal('PHP Fatal error: Nice seein\' ya');
    });

    it('should set the correct message for an error', function () {
        var error = new PHPError(PHPError.E_ERROR, 'Oh, bang');

        expect(error.message).to.equal('PHP Error: Oh, bang');
    });

    it('should set the correct message for a parse error', function () {
        var error = new PHPError(PHPError.E_PARSE, 'What does that even say?');

        expect(error.message).to.equal('PHP Parse error: What does that even say?');
    });

    it('should set the correct message for a notice', function () {
        var error = new PHPError(PHPError.E_NOTICE, 'No rave music after 10pm');

        expect(error.message).to.equal('PHP Notice: No rave music after 10pm');
    });

    it('should set the correct message for a strict standards warning', function () {
        var error = new PHPError(PHPError.E_STRICT, 'Being a bit picky, but');

        expect(error.message).to.equal('PHP Strict standards: Being a bit picky, but');
    });

    it('should set the correct message for a warning', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear');

        expect(error.message).to.equal('PHP Warning: Oh dear');
    });

    it('should extend the Exception class', function () {
        expect(new PHPError()).to.be.an.instanceOf(Exception);
    });
});
