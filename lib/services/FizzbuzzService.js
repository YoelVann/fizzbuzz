class FizzbuzzService {

    static applyValidationInExplorer(explorer){
        
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        
        if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }

        if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
        
    }

    static applyValidationInNumber(number){
        
        if(number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ";
        }
        
        if(number%3 === 0){
            return "FIZZ"; 
        }

        if(number%5 === 0){
            return "BUZZ";
        }else{
            return number;
        }
    }
}

module.exports = FizzbuzzService;