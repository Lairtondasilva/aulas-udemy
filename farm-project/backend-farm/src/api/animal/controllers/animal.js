"use strict";

/**
 * animal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::animal.animal", ({ strapi }) => {
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
