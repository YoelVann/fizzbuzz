const FizzbuzzService = require('../../../lib/services/FizzbuzzService');
const Reader = require('../../../lib/utils/Reader');
const path = require('path');

describe("Tests for FizzbuzzService class", () => { 

    const jsonPath = path.join(__dirname, '..', '..', '..', 'explorers.json');
    const explorers = Reader.readJsonFile(jsonPath);

    test('1. Test in applyValidationInExplorer(), need to add "trick" property with BUZZ value given an explorer with score = 3', () => { 

        const explorer1 = {name: "Explorer1", score: 3};
        const validateExplorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(validateExplorer).toHaveProperty('trick');
    });
});