/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('microdash'),
    templateString = require('template-string'),
    util = require('util'),
    PHPError = require('./PHPError'),
    MESSAGE_PREFIXES = {
        1: 'syntax error, unexpected ${what} in ${file} on line ${line}'
    };

function PHPParseError(code, variables) {
    PHPError.call(this, PHPError.E_PARSE, templateString(MESSAGE_PREFIXES[code], variables));
}

util.inherits(PHPParseError, PHPError);

_.extend(PHPParseError, {
    SYNTAX_UNEXPECTED: 1
});

module.exports = PHPParseError;
