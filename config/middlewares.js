module.exports = [
  "strapi::errors",
  /* Replace 'strapi::security', with this snippet */
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
            "https: data:",
            "blob:",
            "res.cloudinary.com", // cloudinary images
            "lh3.googleusercontent.com", // google avatars
            "platform-lookaside.fbsbx.com", // facebook avatars
            "dl.airtable.com", // strapi marketplace
            `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
