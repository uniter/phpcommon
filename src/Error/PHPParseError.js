/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var util = require('util'),
    PHPError = require('./PHPError');

/**
 * Represents a PHP parse error
 *
 * @param {string} message
 * @param {string|null} filePath
 * @param {number|null} lineNumber
 * @constructor
 */
function PHPParseError(message, filePath, lineNumber) {
    PHPError.call(this, PHPError.E_PARSE, message, filePath, lineNumber);
}

util.inherits(PHPParseError, PHPError);

module.exports = PHPParseError;
