const Reader = require("./../../../lib/utils/Reader");
const path = require("path");

describe("Tests for the Reader class", () => {

    test("1. readJsonFile() not be undefined", () => {

        const jsonPath = path.join(__dirname, "..", "..", "..", "explorers.json");
        const explorers = Reader.readJsonFile(jsonPath);

        expect(explorers).not.toBeUndefined();
    });

    test("2. readJsonFile() must be return an object", () => {

        const jsonPath = path.join(__dirname, "..", "..", "..", "explorers.json");
        const explorers = Reader.readJsonFile(jsonPath);

        expect( typeof explorers).toBe("object");
    });
});