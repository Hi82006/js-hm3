const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
let double = [];
function doubleNumbers(){
    for(let i=0; i<arrRandomNumbers.length; i++){
        if(arrRandomNumbers[i] >= 10){
            double.push(arrRandomNumbers[i])
        }
    }
}
doubleNumbers(arrRandomNumbers);
console.log(double);

let single = []

function singleNumbers(){
    let singleRandom = []
    for(let i=0; i<arrRandomNumbers.length; i++){
        if(arrRandomNumbers[i] < 10){
            singleRandom.push(arrRandomNumbers[i])
        }
    }
    single = singleRandom.sort()
}
singleNumbers(arrRandomNumbers);
console.log(single);

let multiplyTwo = []
function multiply(){
    for(let i=0; i<arrRandomNumbers.length; i++){
        multiplyTwo.push(arrRandomNumbers[i]*2);
    }
}
multiply()
console.log(multiplyTwo)

function calculator(){
let a = parseInt(prompt ('Введите первое число'));
let math = prompt('Введите математическое действие');
let c = parseInt(prompt ('Введите второе число'));
let result = 0
 if(math == '+'){
    result == (a+c);
 }
    else if(math == '-'){
    result = (a-c); 
}
    else if(math == '*'){
        result = (a*c); 
}
    else if(math == '/'){
        result = a/c; 
}
    else{
        alert('Введите правильное действие')
}
    alert(result)
    // console.log(a);
    // console.log(math);
    // console.log(c);
}
calculator()


const boolArr = ['aaa', true, 'ccc', false, 'false'];

function withoutBoolean(){
    let stringArr = []
    for(let i=0; i<boolArr.length; i++){
        if(boolArr[i] != false && boolArr[i] != true){
            stringArr.push(boolArr[i])
        }
    }
    console.log(stringArr);
}

withoutBoolean();

const smile = [':)', '=)',':)', '=)',':)', '=)'];

function changeSmile(){
    let newSmile = []
    for(let i=0; i<smile.length; i++){
        if(smile[i] == '=)'){
            newSmile.push(';)')
        }
        else{
            newSmile.push(smile[i])
        }
    }
    console.log(newSmile)
}
changeSmile()

const farmArray = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let choice = prompt('Введите last или first');
let newFarm = [];
function changeFarm(arg1, arg2){
    if(arg2 == 'last'){
        newFarm.push(arg1.pop());
    }
    else if(arg2 == 'first'){ 
        newFarm.push(arg1.shift())
    }    
    console.log(newFarm)
}
changeFarm(farmArray, choice);

