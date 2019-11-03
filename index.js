/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var Exception = require('./src/Error/Exception'),
    PHPError = require('./src/Error/PHPError'),
    PHPFatalError = require('./src/Error/PHPFatalError'),
    PHPParseError = require('./src/Error/PHPParseError'),
    Translator = require('./src/Translator');

module.exports = {
    Exception: Exception,
    PHPError: PHPError,
    PHPFatalError: PHPFatalError,
    PHPParseError: PHPParseError,
    Translator: Translator
};
