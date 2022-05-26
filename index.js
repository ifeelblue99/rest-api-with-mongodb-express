const router = require("./routes/index.js");
const express = require("express");
const path = require("path");
const db = require("./utils/mongoDBClient.js");
const { handleError } = require("./utils/errorHandlerMiddleware.js");

require("dotenv").config();
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use("/users", router);
app.use(handleError);

app.get("/*", (_, res) => {
  res.statusCode = 404;
  res.sendFile(path.join(__dirname + "/static/404.html"));
});

async function startServer() {
  await db.connectDB(process.env.MONGODB_URL, "users");

  app.listen(process.env.PORT || 3000, () => {
    console.log("server started...");
  });
}

startServer();
