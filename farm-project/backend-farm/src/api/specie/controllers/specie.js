"use strict";

/**
 * specie controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::specie.specie", ({ strapi }) => {
  return {
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      const response = data.map(({ id, attributes }) => {
        return { id, ...attributes };
      });
      return { data: response, meta };
    },
  };
});
