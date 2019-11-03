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
    util = require('util'),
    Exception = require('./Exception');

/**
 * Represents any kind of PHP error (warning, notice, parse, fatal)
 *
 * @param {string} level
 * @param {string} message
 * @param {string|null=} filePath
 * @param {number|null=} lineNumber
 * @constructor
 */
function PHPError(level, message, filePath, lineNumber) {
    // Form a readable string for the error, for when the library is used outside PHPCore
    // (as inside PHPCore, these errors will be intercepted and inspected using the getter methods below)
    Exception.call(
        this,
        'PHP ' + level + ': ' + message + ' in ' + (filePath || '(unknown)') + ' on line ' + (lineNumber || '(unknown)')
    );

    /**
     * @type {string|null} Path to the file the error occurred in
     */
    this.filePath = filePath;
    /**
     * @type {string}
     */
    this.level = level;
    /**
     * @type {number|null} Which line the error occurred on, if known
     */
    this.lineNumber = lineNumber;
    /**
     * @type {string} Original message without level prefix
     */
    this.originalMessage = message;
}

util.inherits(PHPError, Exception);

_.extend(PHPError, {
    E_DEPRECATED: 'Deprecated',
    E_ERROR: 'Fatal error',
    E_NOTICE: 'Notice',
    E_PARSE: 'Parse error',
    E_STRICT: 'Strict standards',
    E_WARNING: 'Warning'
});

_.extend(PHPError.prototype, {
    /**
     * Fetches the PHP module file the error occurred in if known, otherwise returns null
     *
     * @return {string|null}
     */
    getFilePath: function () {
        return this.filePath;
    },

    /**
     * Fetches the level of the error (E_DEPRECATED, E_WARNING etc.)
     *
     * @return {string}
     */
    getLevel: function () {
        return this.level;
    },

    /**
     * Fetches the line the error occurred on if known, otherwise returns null
     *
     * @return {number|null}
     */
    getLineNumber: function () {
        return this.lineNumber;
    },

    /**
     * Fetches the message for the error, without the level prefix
     *
     * @return {string}
     */
    getMessage: function () {
        return this.originalMessage;
    }
});

module.exports = PHPError;
