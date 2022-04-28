const Reader = require("../../../lib/utils/Reader");
const ExplorerService = require("../../../lib/services/ExplorerService");
const path = require("path");

describe("Test for ExplorerService class", () => {

    const jsonPath = path.join(__dirname, "..", "..", "..", "explorers.json");
    const explorers = Reader.readJsonFile(jsonPath);

    test("1. filterByMission() must filter explorers by an given mission", () => {

        const explorersInNodeMission = ExplorerService.filterByMission(explorers, "node");
        const explorersInNodeMissionTest = explorersInNodeMission.every(explorer => explorer.mission === "node");

        expect(explorersInNodeMissionTest).toBeTruthy();
    });

    test("2. getAmountOfExplorersByMission() must return a number", () => {
        
        const amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(typeof amountExplorers).toBe("number");
    });

    test("3. getAmountOfExplorersByMission() must return the correct amount", () => {
        
        const amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    
        expect(amountExplorers).toBe(10);
    });
    
    test("4. getExplorersUsernamesByMission() must return the GitHub usernames given a list of explorers and mission", () => {
      
        const explorersInNodeMission = ExplorerService.filterByMission(explorers, "node"); 
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const listUsernames = explorersInNodeMission.map(explorer => explorer.githubUsername);
        
        let usernameContained = [];

        usernames.forEach(username => {
            if(listUsernames.includes(username)){
                usernameContained.push(true);
            }else{
                usernameContained.push(false);
            }
        });

        expect(usernameContained.every( user => user === true)).toBe(true);
    });
});