import {clearUserInput} from './index.js'

export default class Error{
    nullValueError(userValue){
        if(userValue === '' || userValue === null || userValue === undefined){
            alert('숫자를 입력하세요!');
            clearUserInput();
            return true;
        }
        return false;
    }

    lengthValueError(userValue){
        if(userValue.length !== 3){
            alert('숫자는 3자리까지 입력하세요!');
            clearUserInput();
            return true;
        }
        return false;
    }

    duplicatedValueError(userValueMap){
        if(userValueMap.size < 3){
            alert('중복된 값을 입력할 수 없습니다!');
		    clearUserInput();
            return true;
        }
        return false;
    }

    formatValueError(userValueArr){
        if(!userValueArr.every((e) => 1 <= e && e <= 9)){
            alert('숫자만 입력 가능합니다!');
		    clearUserInput();
            return true;
        }
        return false;
    }

}