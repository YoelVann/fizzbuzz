require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
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

    static getFizzbuzzValue(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static applyFizzBuzzOnTelegramMessage(){

        const token = process.env.TOKEN;

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);

            if(msg.text.toLowerCase() === "node"){
                const nodeEplorers = ExplorerController.getExplorersByMission("node");
                const nodeExploresNames = nodeEplorers.map(explorer => explorer.githubUsername).toString();

                const responseBot = `Lista de Explores en la mission node ${ nodeExploresNames }`;
                bot.sendMessage(chatId, responseBot);
            } else if(msg.text.toLowerCase() === "java"){
                const javaEplorers = ExplorerController.getExplorersByMission("java");
                
                const javaExploresNames = javaEplorers.map(explorer => explorer.githubUsername).toString();
                const responseBot = `Lista de Explores en la mission java ${ javaExploresNames }`;
                bot.sendMessage(chatId, responseBot);
            }else if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getFizzbuzzValue(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        });
    }
}

module.exports = ExplorerController;