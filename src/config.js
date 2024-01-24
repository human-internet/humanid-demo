require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    HUMANID_PRODUCTION: process.env.HUMANID_PRODUCTION === "true",
    DEMO_APP_NAME: process.env.DEMO_APP_NAME,
    DEMO_APP_LOGO_URL: process.env.DEMO_APP_LOGO_URL,
    SKIP_SUCCESS_PAGE: process.env.SKIP_SUCCESS_PAGE === "true" || false,
    HUMANID_CLIENT_ID: process.env.HUMANID_CLIENT_ID,
    HUMANID_CLIENT_SECRET: process.env.HUMANID_CLIENT_SECRET,
};
