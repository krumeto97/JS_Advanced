const { expect } = require("chai");
const sum = require("./1.SubSum");

describe("Sub sum lab task", () => {
    it("Sub sum is a function", () => {
        expect(typeof sum).to.equal("function");
    });
    it("Sub sum computes [1,1]=>2", () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it("Sub sum computes [1,1,1]=>2", () => {
        expect(sum([1, 1, 1], 1)).to.equal(2);
    });
    it("Sub sum computes [1,1,1,1]=>2", () => {
        expect(sum([1, 1, 1, 1], 1, 2)).to.equal(2);
    });
});