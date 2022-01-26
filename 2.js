
function screenNum(value){
    if(value === 'c'){
        clear();
    }else if(value === '='){
        equalsTo();
    }else{
        nums(value);
    }
}

const screen = document.querySelector('#input-screen');
const histEle = document.querySelector('#history h4');

function clear(){
    screen.value = '';
    histEle.innerText = '';
    numHist = [];
}

function equalsTo(){
    console.log(numHist);
    let accumulator = numHist[0];
    let cValue ;
    let i = 1;
    while(i < numHist.length){
        if(numHist[i] === '+'){
            accumulator += numHist[i+1];
        }else if(numHist[i] === '-'){
            accumulator *= numHist[i+1];

        }else if(numHist[i] === '*'){
            accumulator *= numHist[i+1];
        }else if(numHist[i] === '/'){
            accumulator /= numHist[i+1];
        }else if(numHist[i] === '^'){
            accumulator = accumulator** numHist[i+1];
        }else{
            cValue = numHist[i];
        }
        i++;
        console.log(i, accumulator);
    }

    screen.value = `${accumulator}`;
    theHistory();
}

let numHist = [];
function nums(v){
    screen.value = v ;
    numHist.push(Number(v));
}

function operate(v){
    numHist.push(v);
    console.log(v)
}

function theHistory(){
    for(ele of numHist){
        histEle.innerText += ele + ' ';

    }
}