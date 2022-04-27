class ExplorerService {

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountExplorers = explorers.filter((explorer) => explorer.mission == mission);

        return amountExplorers.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

        return usernamesInNode;
    }
}

module.exports = ExplorerService;