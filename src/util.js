export default class initGame{
    initComputerNumber(){
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 9 ,3);
    }
}