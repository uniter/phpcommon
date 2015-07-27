/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('lodash');

function PHPError(level, message) {
    this.message = 'PHP ' + level + ': ' + message;
}

_.extend(PHPError, {
    E_ERROR: 'Error',
    E_FATAL: 'Fatal error',
    E_NOTICE: 'Notice',
    E_PARSE: 'Parse error',
    E_STRICT: 'Strict standards',
    E_WARNING: 'Warning'
});

module.exports = PHPError;
