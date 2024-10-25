const { userAuthSchema } = require("../validators/userValidator")

const validate =
    (schema, source = "body") =>
        (req, res, next) => {
            let data;
            // Determine the source of validation data (body, params, or query)
            switch (source) {
                case "body":
                    data = req.body;
                    break;
                case "params":
                    data = req.params;
                    break;
                case "query":
                    data = req.query;
                    break;
                default:
                    data = req.body;
            }
            const { error } = schema.validate(data, { convert: true });

            if (error) {
                return res.status(400).json({
                    status: "error",
                    message: error.details[0].message
                });
            }
            next();
        };

module.exports = {
    userAuthSchemaValidate : validate(userAuthSchema , "body")
};
