module.exports.handleError = function (error, req, res, next) {
  res.send(`Error: Check the user ID.`);
};
