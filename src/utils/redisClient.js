const redis = require("redis");
const config = require("../config/config");

// Initialize Redis client with error handling
const client = redis.createClient({
  socket: {
    host: config.redis.host || "redis",
    port: config.redis.port || 6379
  }
  // password: config.redis.password || null,
});

// Connect to Redis asynchronously
(async () => {
  try {
    await client.connect();
    console.info("Connected to Redis");
  } catch (error) {
    console.error("Redis connection error:", error);
  }
})();

// Handle Redis client errors after connection
client.on("error", err => {
  console.error("Redis client error:", err);
});

module.exports = client;