const FizzbuzzService = require("../../../lib/services/FizzbuzzService");
const Reader = require("../../../lib/utils/Reader");
const path = require("path");

describe("Tests for FizzbuzzService class", () => { 

    const jsonPath = path.join(__dirname, "..", "..", "..", "explorers.json");
    const explorers = Reader.readJsonFile(jsonPath);

    test("1. Test in applyValidationInExplorer(), need to add \"trick\" property given an explorer with score = n*3", () => { 

        const explorer1 = {name: "Explorer1", score: 3};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer).toHaveProperty("trick");
    });
    
    test("2. Test in applyValidationInExplorer(), need to add \"trick\" property with FIZZ value given an explorer with score = n*3", () => { 

        const explorer1 = {name: "Explorer1", score: 6};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer.trick).toBe("FIZZ");
    });

    test("3. Test in applyValidationInExplorer(), need to add \"trick\" property given an explorer with score = n*5", () => { 

        const explorer1 = {name: "Explorer1", score: 5};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer).toHaveProperty("trick");
    });
    
    test("4. Test in applyValidationInExplorer(), need to add \"trick\" property with BUZZ value given an explorer with score = n*5", () => { 

        const explorer1 = {name: "Explorer1", score: 10};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer.trick).toBe("BUZZ");
    });

    test("5. Test in applyValidationInExplorer(), need to add \"trick\" property with FIZZBUZZ value given an explorer with score divisible with n*3 and n*5", () => { 

        const explorer1 = {name: "Explorer1", score: 15};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer.trick).toBe("FIZZBUZZ");
    });

    test("6. Test in applyValidationInExplorer(), need to add \"trick\" property with value equal to score value if score value can´t be divisible by 3, 5 or 3&5", () => { 

        const explorer1 = {name: "Explorer1", score: 1};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer.trick).toBe(1);
    });

});