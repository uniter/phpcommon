/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('lodash'),
    util = require('util'),
    Exception = require('./Exception');

function PHPError(level, message) {
    Exception.call(this, 'PHP ' + level + ': ' + message);
}

util.inherits(PHPError, Exception);

_.extend(PHPError, {
    E_ERROR: 'Error',
    E_FATAL: 'Fatal error',
    E_NOTICE: 'Notice',
    E_PARSE: 'Parse error',
    E_STRICT: 'Strict standards',
    E_WARNING: 'Warning'
});

module.exports = PHPError;
