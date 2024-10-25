// swaggerGenerate.js
const swaggerAutogen = require("swagger-autogen")();
const userDefinitions = require("/home/navgurukul/chat-app/src/swagger/definitions/userDefinitions.js");

const PORT = 3000; // Set your desired port

const doc = {
  info: {
    title: "AFE APIs",
    description: "This is the API documentation for the chat project",
  },
  host: `localhost:${PORT}`,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  definitions: {
    ...userDefinitions,
  },
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "JWT Authorization header using the Bearer scheme.",
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
};

// Specify the output file and the endpoint files
const outputFile = "./src/swagger/swagger.json"; // Adjust the path if necessary
const endpointsFiles = ["./server.js"]; // Ensure this path is correct

// Generate Swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully!');
});
