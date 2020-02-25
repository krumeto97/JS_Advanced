let Parser = require("./solution.js");
let assert = require("chai").assert;
describe("MyTests", () => {
    let stringifyCompare = (a, b) => assert.deepEqual(JSON.stringify(a), JSON.stringify(b));
    let data = '[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]';
    let parser;
    beforeEach(function () {
        parser = new Parser(data);
    })
    describe("First task", function () {
        it("constructor", function () {
            stringifyCompare(parser._log, []);
            assert.deepEqual(parser._data, JSON.parse(data));
            assert.deepEqual(parser._addToLog(), 'Added to log');
        });
    });
    describe("Second task", function () {
        it("Get data", function () {
            stringifyCompare(parser.data, [{
                "Nancy": "architect"
            }, {
                "John": "developer"
            }, {
                "Kate": "HR"
            }]);
        });
        it("Check _log", function () {
            parser.data;
            assert.deepEqual(parser._log.shift(), "0: getData");
        })
    });
    describe("Third task", function () {
        it("fucntion print", function () {
            assert.deepEqual(parser.print(),
                'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR');
        })
        it("Check _log", function () {
            parser.print();
            assert.deepEqual(parser._log.shift(), '0: print');
        });
    });
    describe("Fourth task", function () {
        it("Check addEntries func", function () {
            assert(parser.addEntries("a"), "Entries added!");
        });
        it("Check _log", function () {
            parser.addEntries("a");
            assert.deepEqual(parser._log.shift(), '0: addEntries');
        });
        it("Check _data", function () {
            parser.addEntries("Steven:tech-support");
            stringifyCompare(parser._data, [{
                "Nancy": "architect"
            }, {
                "John": "developer"
            }, {
                "Kate": "HR"
            }, {
                "Steven": "tech-support"
            }])
        })
    });
    describe("Fifth task", function () {
        //parser.addEntries("Steven:tech-support");
        //assert.deepEqual(parser.removeEntry("Steve"), "Removed correctly!")
    })
});