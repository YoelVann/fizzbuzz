const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

const explorers =  Reader.readJsonFile("explorers.json");

class ExplorerController {
    
    static getExplorersByMission(mission) {
        return  ExplorerService.filterByMission(explorers, mission);
    }
    
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
    static getExplorerWithFizzbuzzValidation(explorer){
        return FizzbuzzService.applyValidationInExplorer(explorer);
    }

    static getFizzbuzzVallue(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;