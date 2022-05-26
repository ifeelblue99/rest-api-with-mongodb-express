const db = require("../utils/mongoDBClient.js");

module.exports.developersCollection = async () => {
  return await db.getDB().collection("developers");
};
