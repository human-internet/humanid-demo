const express = require("express"),
    config = require("./config"),
    humanID = require("./human-id");

// Init app
const app = express();
app.set("view engine", "ejs");

// Init router
app.get("/", (req, res) => {
    humanID
        .getWebLoginUrl()
        .then((resp) => {
            res.render("home", {
                appName: config.DEMO_APP_NAME,
                logoUrl: config.DEMO_APP_LOGO_URL,
                redirectUrl: resp.data.webLoginUrl,
            });
        })
        .catch((err) => {
            res.render("failed", {
                appName: config.DEMO_APP_NAME,
                logoUrl: config.DEMO_APP_LOGO_URL,
                errMessage: humanID.getErrorResponse(err),
            });
        });
});

app.get("/success", (req, res) => {
    humanID
        .verifyExchangeToken(req.query.et)
        .then((resp) => {
            res.render("success", {
                appName: config.DEMO_APP_NAME,
                logoUrl: config.DEMO_APP_LOGO_URL,
                userCountry: resp.data.countryCode,
                userId: resp.data.appUserId,
            });
        })
        .catch((err) => {
            // Get error message from response
            res.render("failed", {
                appName: config.DEMO_APP_NAME,
                logoUrl: config.DEMO_APP_LOGO_URL,
                errMessage: humanID.getErrorResponse(err),
            });
        });
});

app.get("/failed", (req, res) => {
    res.render("failed", {
        appName: config.DEMO_APP_NAME,
        logoUrl: config.DEMO_APP_LOGO_URL,
        errMessage: `[${req.query.code}] ${req.query.message}`,
    });
});

// Start serve
app.listen(config.PORT, () => {
    console.log(`  > Serving on http://localhost:${config.PORT}`);
});
