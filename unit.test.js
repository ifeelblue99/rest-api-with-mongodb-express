const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
const should = chai.should();

describe("GET all users", () => {
  it("GET all users", async () => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res);
        res.body.should.be.a("array");
      });
  });
});
describe("GET a user", () => {
  it("GET a specific users", async () => {
    const userID = "629094871ddd2098c7edde2f";
    chai
      .request(server)
      .get("/users" + userID)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
      });
  });
});
describe("GET an error", () => {
  it("GET an error message as `Error: Check the user ID.` ", (done) => {
    chai
      .request(server)
      .get("/users/invalid_id")
      .end((err, res) => {
        res.should.have.status(400);
        res.text.should.be.equal("Error: Check the user ID.");
        done();
      });
  });
});
