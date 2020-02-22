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
 * Represents a fatal PHP error
 *
 * @param {string} message
 * @param {string|null} filePath
 * @param {number|null} lineNumber
 * @constructor
 */
function PHPFatalError(message, filePath, lineNumber) {
    PHPError.call(this, PHPError.E_ERROR, message, filePath, lineNumber);
}

util.inherits(PHPFatalError, PHPError);

module.exports = PHPFatalError;
