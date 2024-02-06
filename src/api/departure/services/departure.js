'use strict';

/**
 * departure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::departure.departure');
