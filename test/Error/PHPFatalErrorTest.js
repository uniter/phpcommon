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
    PHPFatalError = require('../../src/Error/PHPFatalError');

describe('PHPFatalError', function () {
    var error;

    beforeEach(function () {
        error = new PHPFatalError('Oh dear!', '/path/to/my/module.php', 432);
    });

    it('should set the correct level', function () {
        expect(error.getLevel()).to.equal(PHPError.E_ERROR);
    });

    it('should set the correct message', function () {
        expect(error.message).to.equal('PHP Fatal error: Oh dear! in /path/to/my/module.php on line 432');
    });

    it('should set the correct original message', function () {
        // Note that file and line information should not be included,
        // as it will be fetched separately via the .getFilePath() and .getLineNumber() methods
        expect(error.getMessage()).to.equal('Oh dear!');
    });

    it('should set the correct file path', function () {
        expect(error.getFilePath()).to.equal('/path/to/my/module.php');
    });

    it('should set the correct line number', function () {
        expect(error.getLineNumber()).to.equal(432);
    });

    it('should extend the PHPError class', function () {
        expect(error).to.be.an.instanceOf(PHPError);
    });
});
