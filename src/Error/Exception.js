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
    util = require('util');

function Exception(message) {
    this.message = message;
}

util.inherits(Exception, Error);

_.extend(Exception.prototype, {
    'type': 'Exception'
});

module.exports = Exception;
