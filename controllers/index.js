const db = require("../utils/mongoDBClient");
const { ObjectId } = require("mongodb");
const { developersCollection } = require("../collections/Developers.js");

async function getUsers(_, res, next) {
  try {
    const devs = await (await developersCollection()).find().toArray();
    res.send(devs);
  } catch (error) {
    next(error);
  }
}
async function getUserByID(req, res, next) {
  try {
    const { id } = req.params;
    const user = await (
      await developersCollection()
    ).findOne({ _id: ObjectId(id) });
    res.send(user);
  } catch (error) {
    next(error.message);
  }
}
async function addUser(req, res, next) {
  try {
    res.statusCode = 201;
    await (await developersCollection()).insert(req.body);
    res.send("user saved");
  } catch (error) {
    next(error);
  }
}
async function deleteUserByID(req, res, next) {
  try {
    const { id } = req.params;
    await (await developersCollection()).deleteOne({ _id: ObjectId(id) });
    res.send("user is deleted");
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    await (
      await developersCollection()
    ).updateOne({ _id: ObjectId(id) }, { $set: data });
    res.send("user updated.");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUser,
};
