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
        var error = new PHPError(PHPError.E_DEPRECATED, 'Going soon', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Deprecated: Going soon in /my/module.php on line 123');
    });

    it('should set the correct message for a fatal error', function () {
        var error = new PHPError(PHPError.E_ERROR, 'Nice seein\' ya', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Fatal error: Nice seein\' ya in /my/module.php on line 123');
    });

    it('should set the correct message for a parse error', function () {
        var error = new PHPError(PHPError.E_PARSE, 'What does that even say?', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Parse error: What does that even say? in /my/module.php on line 123');
    });

    it('should set the correct message for a notice', function () {
        var error = new PHPError(PHPError.E_NOTICE, 'No rave music after 10pm', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Notice: No rave music after 10pm in /my/module.php on line 123');
    });

    it('should set the correct message for a strict standards warning', function () {
        var error = new PHPError(PHPError.E_STRICT, 'Being a bit picky, but', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Strict standards: Being a bit picky, but in /my/module.php on line 123');
    });

    it('should set the correct message for a warning', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear', '/my/module.php', 123);

        expect(error.message).to.equal('PHP Warning: Oh dear in /my/module.php on line 123');
    });

    it('should set the correct message when file and line are omitted', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear');

        expect(error.message).to.equal('PHP Warning: Oh dear in (unknown) on line (unknown)');
    });

    it('should extend the Exception class', function () {
        expect(new PHPError()).to.be.an.instanceOf(Exception);
    });

    it('should set the correct level', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear', '/my/module.php', 123);

        expect(error.getLevel()).to.equal(PHPError.E_WARNING);
    });

    it('should set the correct original message', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear', '/my/module.php', 123);

        // Note that file and line information should not be included,
        // as it will be fetched separately via the .getFilePath() and .getLineNumber() methods
        expect(error.getMessage()).to.equal('Oh dear');
    });

    it('should set the correct file path', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear', '/my/module.php', 123);

        expect(error.getFilePath()).to.equal('/my/module.php');
    });

    it('should set the correct line number', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear', '/my/module.php', 123);

        expect(error.getLineNumber()).to.equal(123);
    });
});
