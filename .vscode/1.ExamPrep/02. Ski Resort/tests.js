let SkiResort = require('./solution');
let assert = require("assert");
describe('SkiResort', function () {
    let stringifyCompare = (a, b) => assert.deepEqual(JSON.stringify(a), JSON.stringify(b));
    let resortName = "a"
    let skiResort;
    beforeEach(function () {
        skiResort = new SkiResort(resortName);
    })

    describe("Constructor function of class", function () {
        it("check constructor", function () {
            assert.deepEqual(skiResort.name, resortName);
            stringifyCompare(skiResort.hotels, []);
            assert.deepEqual(skiResort.voters, 0);
        });
    });

    describe("bessHotel prop", function () {
        it("No voters case", function () {
            assert.deepEqual(skiResort.bestHotel, "No votes yet");
        });
        it("voters case", function () {

        });
    });

    describe("Build hotel function", function () {
        it("should throw new error", function () {
            assert.rejects(() => {
                skiResort.build()
            }, Error);
            assert.rejects(() => {
                skiResort.build("", 11)
            }, Error);
            assert.rejects(() => {
                skiResort.build("ivan", 0)
            }, Error);
        });
        it("add hotel", function () {
            assert.deepEqual(skiResort.build("ivan", 10), `Successfully built new hotel - ivan`)
            stringifyCompare(skiResort.hotels, [{
                name: "ivan",
                beds: 10,
                points: 0
            }]);
        })
    })
});