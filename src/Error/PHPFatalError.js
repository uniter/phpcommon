/*
 * PHPCommon - Common tools for PHP environments
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpcommon/
 *
 * Released under the MIT license
 * https://github.com/uniter/phpcommon/raw/master/MIT-LICENSE.txt
 */

'use strict';

var MESSAGE_PREFIXES = {
        1: 'Unsupported operand types',
        2: 'Call to undefined function ${name}()',
        3: 'Class \'${name}\' not found',
        4: 'Call to undefined method ${className}::${methodName}()',
        5: '\'goto\' into loop or switch statement is disallowed',
        6: '${name}() must take exactly 1 argument',
        7: 'Class name must be a valid object or a string',
        8: 'Access to undeclared static property: ${className}::$${propertyName}',
        9: 'Call to undefined method ${className}::${methodName}()',
        10: 'Cannot access self:: when no class scope is active',
        11: 'Undefined constant \'${name}\'',
        12: 'Uncaught exception \'${name}\'',
        13: 'Cannot access ${visibility} property ${className}::$${propertyName}',
        14: 'Function name must be a string',
        15: 'Undefined class constant \'${name}\'',
        16: 'Interfaces may not include member variables',
        17: 'Interface function ${className}::${methodName}() cannot contain body',
        18: 'Cannot use ${source} as ${alias} because the name is already in use',
        19: 'Call to a member function ${name}() on a non-object'
    },
    _ = require('microdash'),
    templateString = require('template-string'),
    util = require('util'),
    PHPError = require('./PHPError');

function PHPFatalError(code, variables) {
    PHPError.call(this, PHPError.E_FATAL, templateString(MESSAGE_PREFIXES[code], variables));
}

util.inherits(PHPFatalError, PHPError);

_.extend(PHPFatalError, {
    UNSUPPORTED_OPERAND_TYPES: 1,
    CALL_TO_UNDEFINED_FUNCTION: 2,
    CLASS_NOT_FOUND: 3,
    UNDEFINED_METHOD: 4,
    GOTO_DISALLOWED: 5,
    EXPECT_EXACTLY_1_ARG: 6,
    CLASS_NAME_NOT_VALID: 7,
    UNDECLARED_STATIC_PROPERTY: 8,
    CALL_TO_UNDEFINED_METHOD: 9,
    SELF_WHEN_NO_ACTIVE_CLASS: 10,
    UNDEFINED_CONSTANT: 11,
    UNCAUGHT_EXCEPTION: 12,
    CANNOT_ACCESS_PROPERTY: 13,
    FUNCTION_NAME_MUST_BE_STRING: 14,
    UNDEFINED_CLASS_CONSTANT: 15,
    INTERFACE_PROPERTY_NOT_ALLOWED: 16,
    INTERFACE_METHOD_BODY_NOT_ALLOWED: 17,
    NAME_ALREADY_IN_USE: 18,
    NON_OBJECT_METHOD_CALL: 19
});

module.exports = PHPFatalError;
