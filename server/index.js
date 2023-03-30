const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { auth } = require("express-oauth2-jwt-bearer");
const app = express();

//Configure JWT
const jwtCheck = auth({
  audience: "https://www.express-api.com/api/v2",
  issuerBaseURL: "https://dev-6qobyaiq8x8ne6k4.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

//Middlewares
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);
app.use(jwtCheck);

//Routes
app.get("/", (req, res) => {
  res.send("Hello this is index route");
});
app.get("/protected", (req, res) => {
  res.send("Hello this Protected route");
});

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(status).send(message);
});

//Server Setup
app.listen(8080, () => console.log(`Server running on PORT:8080`));
