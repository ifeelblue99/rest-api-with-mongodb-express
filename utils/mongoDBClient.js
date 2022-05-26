const { MongoClient } = require("mongodb");

const state = { db: null };

module.exports.connectDB = async function (url, dbName) {
  try {
    if (state.db) return;

    const client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    await client.connect();
    state.db = client.db(dbName);
  } catch (error) {
    console.error(error);
  }
};

module.exports.getDB = () => state.db;
