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
    Exception = require('../../src/Error/Exception');

describe('Exception', function () {
    it('should set the message', function () {
        var error = new Exception('Argh');

        expect(error.message).to.equal('Argh');
    });

    it('should extend the built-in Error class', function () {
        expect(new Exception()).to.be.an.instanceOf(Error);
    });
});
