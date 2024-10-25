const UserSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "The username of the user",
      example: "john_doe"
    },
    password: {
      type: "string",
      description: "The password of the user",
      example: "securepassword"
    }
  },
  required: ["username", "password"]
};

module.exports = {
  UserSchema
};
