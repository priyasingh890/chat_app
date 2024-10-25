require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8080,
  dbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY || "1d",
  serverUrl: process.env.SERVER_URL || "localhost:3000",

  // AWS Configuration
  AWS: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,

    // AWS Pinpoint Configuration
    pinpointProjectID: process.env.AWS_PINPOINT_PROJECT_ID,
    smsSenderId: process.env.SMS_SENDER_ID,
    smsEntityId: process.env.SMS_ENTITY_ID,
    smsTemplateId: process.env.SMS_TEMPLATE_ID
  },
  // OTP Configuration
  otp: {
    expiry: 60 * 10 // 10 minutes
  },
  redis: {
    host: process.env.REDIS_HOST || "redis",
    port: process.env.REDIS_PORT || 6379
  },
  // Theese following roles are allowed to access the routes for admin dashboard management
  labManagementRoles: ["TIS_ADMIN", "SUPER_ADMIN"],
  //Thisroles arwill be able to create new venue and Programs to them
  superAdminRoles: ["SUPER_ADMIN"]
};