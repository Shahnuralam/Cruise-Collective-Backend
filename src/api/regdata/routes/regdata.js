module.exports = {
  routes: [
    {
      method: "GET",
      path: "/regdata",
      handler: "regdata.find",
      config: {
        // Allow public access
        auth: false,
      },
    },
  ],
};
