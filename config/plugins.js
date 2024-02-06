module.exports = ({ env }) => ({
  ckeditor: true,
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },
  "vercel-deploy": {
    enabled: false,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: [],
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "hello@cruise-collective.com",
        defaultReplyTo: "no-reply@cruise-collective.com",
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::offer.offer",
          draft: {
            url: "https://www.cruise-collective.com/cruise-line-offer/{slug}?preview=true",
            query: {
              type: "page",
              slug: "{slug}",
            },
            openTarget: "_blank",
          },
          published: {
            url: "https://www.cruise-collective.com/cruise-line-offer/{slug}",
            openTarget: "_blank",
          },
        },
         {
          uid: "api::competition.competition",
          draft: {
            url: "https://www.cruise-collective.com/competition/{slug}?preview=true",
            query: {
              type: "page",
              slug: "{slug}",
            },
            openTarget: "_blank",
          },
          published: {
            url: "https://www.cruise-collective.com/competition/{slug}",
            openTarget: "_blank",
          },
        },
           {
          uid: "api::insipration.insipration",
          draft: {
            url: "https://www.cruise-collective.com/inspiration/{slug}?preview=true",
            query: {
              type: "page",
              slug: "{slug}",
            },
            openTarget: "_blank",
          },
          published: {
            url: "https://www.cruise-collective.com/inspiration/{slug}",
            openTarget: "_blank",
          },
        },
            {
          uid: "api::travel-partner-offer.travel-partner-offer",
          draft: {
            url: "https://www.cruise-collective.com/travel-partner/{slug}?preview=true",
            query: {
              type: "page",
              slug: "{slug}",
            },
            openTarget: "_blank",
          },
          published: {
            url: "https://www.cruise-collective.com/travel-partner/{slug}",
            openTarget: "_blank",
          },
        },
      ],
    },
  },
  sitemap: {
    enabled: true,
    config: {
      cron: "0 0 0 * * *",
      limit: 45000,
      xsl: true,
      autoGenerate: true,
      caching: true,
      allowedFields: ["id", "uid", "slug"],
      excludedTypes: [],
    },
  },
});
