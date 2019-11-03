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
    PHPParseError = require('../../src/Error/PHPParseError');

describe('PHPParseError', function () {
    var error;

    beforeEach(function () {
        error = new PHPParseError('syntax error, unexpected <something>', '/path/to/your/module.php', 21);
    });

    it('should set the correct level', function () {
        expect(error.getLevel()).to.equal(PHPError.E_PARSE);
    });

    it('should set the correct message', function () {
        expect(error.message).to.equal(
            'PHP Parse error: syntax error, unexpected <something> in /path/to/your/module.php on line 21'
        );
    });

    it('should set the correct original message', function () {
        // Note that file and line information should not be included,
        // as it will be fetched separately via the .getFilePath() and .getLineNumber() methods
        expect(error.getMessage()).to.equal('syntax error, unexpected <something>');
    });

    it('should set the correct file path', function () {
        expect(error.getFilePath()).to.equal('/path/to/your/module.php');
    });

    it('should set the correct line number', function () {
        expect(error.getLineNumber()).to.equal(21);
    });

    it('should extend the PHPError class', function () {
        expect(error).to.be.an.instanceOf(PHPError);
    });
});
