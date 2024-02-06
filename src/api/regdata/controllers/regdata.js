"use strict";

/**
 * A set of functions called "actions" for `regis`
 */

module.exports = {
  /** Get All interest,destination and cruise lines */
  find: async (ctx) => {
    try {
      const interests = await strapi.entityService.findMany(
        "api::interest.interest",
        {
          fields: ["*"],
          populate: {
            contentSections: {
              populate: "*",
            },
          },
        }
      );
      const departures = await strapi.entityService.findMany(
        "api::departure.departure",
        {
          fields: ["*"],
          populate: {
            contentSections: {
              populate: "*",
            },
          },
        }
      );
      const destinations = await strapi.entityService.findMany(
        "api::destination.destination",
        {
          fields: ["*"],
          populate: {
            contentSections: {
              populate: "*",
            },
          },
        }
      );

      const cruiseLines = await strapi.entityService.findMany(
        "api::cruise-line.cruise-line",
        {
          fields: ["*"],
          populate: {
            contentSections: {
              populate: "*",
            },
          },
        }
      );

      const regions = await strapi.entityService.findMany(
        "api::region.region",
        {
          fields: ["*"],
          populate: {
            contentSections: {
              populate: "*",
            },
          },
        }
      );

      ctx.send({ interests, departures, destinations, cruiseLines, regions});
    } catch (error) {
      ctx.send(error);
    }
  },
};
