import Ball from './ball.js'
import Strike from './strike.js'
import PrintResult from './printResult.js'
import InitGame from './util.js'
import ErrorProcess from './error.js'

const initGame = new InitGame();
const ball = new Ball();
const strike = new Strike();
const printResult = new PrintResult();
const errorProcess = new ErrorProcess();


let gameState = 0;
let computerInputNumbers = [];

export default class BaseballGame {
	play(computerInputNumbers, userInputNumbers) {	
		let result = this.gameStart(computerInputNumbers, userInputNumbers);
		if(result === 'right'){
			gameState = 1;
		}
		return result;
	}

	gameStart(computerInputNumbers, userInputNumbers){
		let ballCount = ball.check(computerInputNumbers, userInputNumbers.split(''));
		let strikeCount = strike.check(computerInputNumbers, userInputNumbers.split(''));
		return printResult.resultCheck(ballCount, strikeCount);
	}

	gameRestart(){
		this.play(initGame.initComputerNumber(),userInputNumbers);
	}
}

const baseballGame = new BaseballGame();

window.addEventListener('load',()=>{
	computerInputNumbers = initGame.initComputerNumber();
	document.getElementById('result').innerHTML = '';
	document.getElementById('game-restart-button').style.display = 'none';
});

const submit = document.getElementById('submit');

export function clearUserInput(){
	document.getElementById('user-input').value = '';
}

submit.addEventListener('click',(event) => {
	event.preventDefault();
	clearHtml();

	const userValue = document.getElementById('user-input').value;
	if(errorProcess.nullValueError(userValue)) return;
	if(errorProcess.lengthValueError(userValue)) return;

	const userValueArr = userValue.split('');
	let userValueMap = new Map();
	userValueArr.forEach((e)=>{
		userValueMap.set(e,'');
	});

	if(errorProcess.duplicatedValueError(userValueMap)) return;
	if(errorProcess.formatValueError(userValueArr)) return;

	let result = baseballGame.play(computerInputNumbers, document.getElementById('user-input').value);
	if(result === 'right') {
		document.getElementById('result').innerHTML = '🎉정답을 맞추셨습니다🎉<br>';
		const textNode = document.createTextNode('게임을 새로 시작하시겠습니까?');
		document.getElementById('result').appendChild(textNode);
		document.getElementById('game-restart-button').style.display = 'block';
	}else{
		document.getElementById('result').innerHTML = result;
		document.getElementById('game-restart-button').style.display = 'none';
	}
});

function clearHtml(){
	document.getElementById('result').innerHTML = '';
	document.getElementById('game-restart-button').style.display = 'none';
}

document.getElementById('game-restart-button').addEventListener('click',()=>{
	clearHtml();
	document.getElementById('user-input').value = '';
	computerInputNumbers = initGame.initComputerNumber();
});

 