module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    host: env("DATABASE_HOST", "localhost"),
    port: env.int("DATABASE_PORT", 3306),
    database: env("DATABASE_NAME", "strapi"),
    user: env("DATABASE_USERNAME", "strapi"),
    password: env("DATABASE_PASSWORD", "strapi"),
    ssl: {
      ca: env("DATABASE_CA", undefined),
    },
  },
  debug: false,
});
