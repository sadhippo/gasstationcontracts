const { expect } = require("chai");
const hre = require("hardhat");
const { parseEther } = hre.ethers.utils;

describe("TokenLocker", function () {

    let owner;
    let alice;
    let locker;
    let tokenA;

    beforeEach(async function () {
        const Locker = await ethers.getContractFactory("Locker");
        [owner, alice] = await ethers.getSigners();
        const ERC20Mock = await ethers.getContractFactory("ERC20Mock");
        tokenA = await ERC20Mock.deploy("tokenA", "A", 10000);
        [owner, alice, bob, feesReceiver] = await ethers.getSigners();
        locker = await Locker.deploy();
      });
  describe("Token contract", function () {
  it(" should Deploy", async function () {
    const [owner] = await ethers.getSigners();

    const Locker = await ethers.getContractFactory("Locker");

      await locker.deployed();
  });
  it("should lock a erc20 token", async function () {
    const [owner] = await ethers.getSigners();
    const ERC20Mock = await ethers.getContractFactory("ERC20Mock");

    const Locker = await ethers.getContractFactory("Locker");
    tokenA = await ERC20Mock.deploy("tokenA", "A", 10000);

    await tokenA.approve(locker.address, 10000)

      await locker.lock(1000000000000, tokenA.address, 1000)
      const lockedTokens = await tokenA.balanceOf(locker.address)
      expect(lockedTokens).to.equal(1000)
    });
    it("should lock a native currency", async function () {
      const [owner] = await ethers.getSigners();
      const ERC20Mock = await ethers.getContractFactory("ERC20Mock");

      const Locker = await ethers.getContractFactory("Locker");


        await locker.lockNativeCurrency(1000000000000)
      //  const lockedTokens = await tokenA.balanceOf(locker.address)
      //  expect(lockedTokens).to.equal(1000)
      });
      it("should extendlocktime", async function () {
        const [owner] = await ethers.getSigners();
        const ERC20Mock = await ethers.getContractFactory("ERC20Mock");

        const Locker = await ethers.getContractFactory("Locker");
        tokenA = await ERC20Mock.deploy("tokenA", "A", 10000);

        await tokenA.approve(locker.address, 10000)

          await locker.lock(1000000000000, tokenA.address, 1000)
          const lockedTokens = await tokenA.balanceOf(locker.address)
          await locker.extendLockTime(0, 2000000000000)
          expect(lockedTokens).to.equal(1000)
        });

        //claimByVaultId(vaultId)
  });
});

// function lock(
//     uint256 targetTimestamp,
//     address tokenContract,
//     uint256 tokenCount
// )
