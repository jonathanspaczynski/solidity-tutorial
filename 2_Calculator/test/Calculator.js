const assert = require("assert");
const { expect } = require("chai");

describe("Calculator basic functions test", function () {
  beforeEach(async function () {
    factory = await ethers.getContractFactory("Calculator");
    contract = await factory.deploy();
  });

  it("Test addition", async function () {
    assert.equal(await contract.addition(2, 3), 5);
  });

  it("Test subtraction with negative result", async function () {
    assert.equal(await contract.subtraction(2, 3), -1);
  });

  it("Test subtraction with positive result", async function () {
    assert.equal(await contract.subtraction(3, 2), 1);
  });

  it("Test multiplication", async function () {
    assert.equal(await contract.multiplication(15, 3), 45);
  });

  it("Test division", async function () {
    assert.equal(await contract.division(15, 2), 75);
  });

  it("Test division with divisor 0", async function () {
    await expect(contract.division(15, 0)).to.be.revertedWith(
      "Can't divide by 0!"
    );
  });
});
