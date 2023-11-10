export default class Ball{
	check(computerInputNumbers, userInputNumbersArr){
        let count = 0;

        for(let i in userInputNumbersArr){
            if(computerInputNumbers.includes(parseInt(userInputNumbersArr[i]))){
                count += this.isBall(computerInputNumbers, parseInt(userInputNumbersArr[i]), i);   
            }
        }
        return count;
    }

    isBall(computerInputNumbers, userInputNumber, index){
        if(computerInputNumbers[index] !== userInputNumber){
            return 1;
        }
        return 0;
    }
}