const bodyParser = require("body-parser");
const express = require("express");
const basicAuth = require("express-basic-auth");
// const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(
  basicAuth({
    users: { admin: "admin" },
    unauthorizedResponse: { message: "Unauthorized" },
  })
);

app.get("/login", (req, res) => {
  res.send(`Welcome`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
