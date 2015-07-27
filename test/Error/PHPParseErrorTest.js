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
    PHPParseError = require('../../src/Error/PHPParseError');

describe('PHPParseError', function () {
    it('should set the correct message for an unexpected syntax error', function () {
        var error = new PHPParseError(PHPParseError.SYNTAX_UNEXPECTED, {
            what: '<something>',
            file: 'app.php',
            line: 21
        });

        expect(error.message).to.equal('PHP Parse error: syntax error, unexpected <something> in app.php on line 21');
    });
});
