/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var PHPError = require('./src/Error/PHPError'),
    PHPFatalError = require('./src/Error/PHPFatalError'),
    PHPParseError = require('./src/Error/PHPParseError');

module.exports = {
    PHPError: PHPError,
    PHPFatalError: PHPFatalError,
    PHPParseError: PHPParseError
};
