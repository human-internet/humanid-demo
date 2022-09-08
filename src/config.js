module.exports = {
    PORT: process.env.PORT || 3000,
    HUMANID_PRODUCTION: process.env.HUMANID_PRODUCTION === "true",
    HUMANID_CLIENT_ID: process.env.HUMANID_CLIENT_ID,
    HUMANID_CLIENT_SECRET: process.env.HUMANID_CLIENT_SECRET,
    DEMO_APP_NAME: process.env.DEMO_APP_NAME,
    DEMO_APP_LOGO_URL: process.env.DEMO_APP_LOGO_URL,
};
