const ExplorerService = require("../../../lib/controllers/ExplorerController");

describe("Tests in ExplorerService class", () => {
    const explorer1 = {mission: "node", score: 1};
    const fizzbuzz = ExplorerService.getExplorerWithFizzbuzzValidation(explorer1);

    test("1. test getExplorerWithFizzbuzzValidation()", () => {  
        expect(fizzbuzz.trick).toBe(1);
    });
});