'use strict';

/**
 * cruise-line service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cruise-line.cruise-line');
