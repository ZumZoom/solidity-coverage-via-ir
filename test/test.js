const { ethers } = require("hardhat");

describe("Test", function () {
  it("Should work", async function () {
    const TestStackError = await ethers.getContractFactory("TestStackError");
    const test = await TestStackError.deploy();
    await test.logArg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  });
});
