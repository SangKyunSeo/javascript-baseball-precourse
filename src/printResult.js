export default class PrintResult{
    
    resultCheck(ballCount, strikeCount){
        if(ballCount === 0 && strikeCount === 0){
            return this.printNothing();
        }
        return this.printAnything(ballCount, strikeCount);
    }

    printNothing(){
        return `낫싱`;
    }
    printAnything(ballCount, strikeCount){
        if(strikeCount === 3){
            return this.printRight();
        }
        return this.printState(ballCount, strikeCount);
    }

    printRight(){
        return 'right';
    }

    printState(ballCount, strikeCount){
        if(ballCount === 0){
            return `${strikeCount}스트라이크`;
        }
        if(strikeCount === 0){
            return `${ballCount}볼`;
        }
        return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
}