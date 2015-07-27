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
    PHPError = require('../../src/Error/PHPError');

describe('PHPError', function () {
    it('should set the correct message for a warning', function () {
        var error = new PHPError(PHPError.E_WARNING, 'Oh dear');

        expect(error.message).to.equal('PHP Warning: Oh dear');
    });
});
