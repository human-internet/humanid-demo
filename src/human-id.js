const config = require("./config"),
    got = require("got");

// Init modules
const humanID = {
    getBaseUrl: (isProduction) => {
        if (isProduction) {
            return "https://api.human-id.org/v1";
        }
        return "https://s-api.human-id.org/v1";
    },
    getWebLoginUrl: async () => {
        const url = `${humanID.getBaseUrl(config.HUMANID_PRODUCTION)}/server/users/web-login`;
        const resp = await got.post(url, {
            headers: {
                "client-id": config.HUMANID_CLIENT_ID,
                "client-secret": config.HUMANID_CLIENT_SECRET,
            },
        });
        return JSON.parse(resp.body);
    },
    verifyExchangeToken: async (exchangeToken) => {
        const url = `${humanID.getBaseUrl(config.HUMANID_PRODUCTION)}/server/users/exchange`;
        const resp = await got.post(url, {
            headers: {
                "client-id": config.HUMANID_CLIENT_ID,
                "client-secret": config.HUMANID_CLIENT_SECRET,
            },
            json: {
                exchangeToken,
            },
        });
        return JSON.parse(resp.body);
    },
    getErrorResponse: (err) => {
        if (!err.response) {
            return err.message;
        }

        if (!err.response.body) {
            return err.message;
        }

        try {
            const body = JSON.parse(err.response.body);
            return `[${body.code}] ${body.message}`;
        } catch (jErr) {
            console.log(`  > ERROR: Failed to parse Error response json. Error = ${jErr}`);
            return err.message;
        }
    },
};

module.exports = humanID;
