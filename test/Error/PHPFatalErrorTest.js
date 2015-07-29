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
    PHPFatalError = require('../../src/Error/PHPFatalError');

describe('PHPFatalError', function () {
    it('should set the correct message for a call to undefined function error', function () {
        var error = new PHPFatalError(PHPFatalError.CALL_TO_UNDEFINED_FUNCTION, {
            name: 'aMissingFunction'
        });

        expect(error.message).to.equal('PHP Fatal error: Call to undefined function aMissingFunction()');
    });
});
