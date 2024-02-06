module.exports = [
  "strapi::errors",
  /* Beginning of snippet */
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "project-cruise.s3.eu-west-2.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "project-cruise.s3.eu-west-2.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: ["*"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
