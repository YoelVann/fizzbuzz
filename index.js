const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');

const explorers = Reader.readJsonFile("explorers.json");
const explorersMission = ExplorerService.filterByMission(explorers, "node");
const amountExplorersMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// console.log(explorersMission);
// console.log("-------------")
// console.log(amountExplorersMission);
console.log(explorersInNode)