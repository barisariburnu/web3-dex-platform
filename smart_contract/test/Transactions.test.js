const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
    let transactions;
    let owner;
    let receiver;
    let addrs;

    beforeEach(async function () {
        // Get signers
        [owner, receiver, ...addrs] = await ethers.getSigners();

        // Deploy the contract
        const Transactions = await ethers.getContractFactory("Transactions");
        transactions = await Transactions.deploy();
        await transactions.deployed();
    });

    describe("Deployment", function () {
        it("Should deploy successfully", async function () {
            expect(transactions.address).to.be.properAddress;
        });
    });

    describe("publishTransaction", function () {
        it("Should emit Transfer event with correct parameters", async function () {
            const amount = 100;
            const message = "Test transaction";
            const keyword = "test";

            await expect(
                transactions.publishTransaction(
                    receiver.address,
                    amount,
                    message,
                    keyword
                )
            )
                .to.emit(transactions, "Transfer")
                .withArgs(
                    owner.address,
                    receiver.address,
                    amount,
                    message,
                    await getBlockTimestamp(),
                    keyword
                );
        });

        it("Should allow multiple transactions", async function () {
            const transactions1 = {
                receiver: receiver.address,
                amount: 100,
                message: "First transaction",
                keyword: "test1",
            };

            const transactions2 = {
                receiver: addrs[0].address,
                amount: 200,
                message: "Second transaction",
                keyword: "test2",
            };

            // First transaction
            await expect(
                transactions.publishTransaction(
                    transactions1.receiver,
                    transactions1.amount,
                    transactions1.message,
                    transactions1.keyword
                )
            ).to.emit(transactions, "Transfer");

            // Second transaction
            await expect(
                transactions.publishTransaction(
                    transactions2.receiver,
                    transactions2.amount,
                    transactions2.message,
                    transactions2.keyword
                )
            ).to.emit(transactions, "Transfer");
        });

        it("Should record transaction from any address", async function () {
            const amount = 50;
            const message = "Transaction from another account";
            const keyword = "transfer";

            await expect(
                transactions
                    .connect(addrs[1])
                    .publishTransaction(receiver.address, amount, message, keyword)
            )
                .to.emit(transactions, "Transfer")
                .withArgs(
                    addrs[1].address,
                    receiver.address,
                    amount,
                    message,
                    await getBlockTimestamp(),
                    keyword
                );
        });

        it("Should accept empty message and keyword", async function () {
            await expect(
                transactions.publishTransaction(receiver.address, 0, "", "")
            ).to.emit(transactions, "Transfer");
        });
    });

    // Helper function to get the next block timestamp
    async function getBlockTimestamp() {
        const blockNum = await ethers.provider.getBlockNumber();
        const block = await ethers.provider.getBlock(blockNum);
        return block.timestamp + 1; // Next block will be +1 second
    }
});
