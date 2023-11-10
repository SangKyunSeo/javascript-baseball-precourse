export default class Strike{
    check(computerInputNumbers, userInputNumbersArr){
        let count = 0;
        for(let i in userInputNumbersArr){
            if(computerInputNumbers.includes(parseInt(userInputNumbersArr[i]))){
                count += this.isStrike(computerInputNumbers, parseInt(userInputNumbersArr[i]), i);
            }
        }
        return count;
    }

    isStrike(computerInputNumbers, userInputNumber, index){
        if(computerInputNumbers[index] === userInputNumber){
            return 1;
        }
        return 0;
    }
}