
function screenNum(value){
    if(value === 'c'){
        clear();
    }else if(value === '='){
        console.log(`Numm numm ${num}`);
        operate(value,num);
        equalsTo();
    }else{
        nums(value);
    }
}


function clear(){
    num = '';
    screen.value = '';
    histEle.innerText = '';
    numHist = [];
}

function equalsTo(){
    histEle.innerText = '';
    console.log(numHist);
    let accumulator = numHist[0];
    let cValue ;
    let i = 1;
    while(i < numHist.length){
        if(i+1 < numHist.length){
        if(numHist[i] === '+'){
            accumulator += numHist[i+1];
        }else if(numHist[i] === '-'){
            accumulator -= numHist[i+1];
        }else if(numHist[i] === '*'){
            accumulator *= numHist[i+1];
        }else if(numHist[i] === '/'){
            accumulator /= numHist[i+1];
        }else if(numHist[i] === '^'){
            accumulator = accumulator** numHist[i+1];
        }else{
            cValue = numHist[i];
        }
        i += 2;
        console.log(i,numHist[i], accumulator,);
    }else{
        break;
    }
    }

    screen.value = `${accumulator}`;
    theHistory();
}



function nums(v){
    const op = ['+','-','/','*','^'];

    if(op.some((ele)=> ele === v ) != true ){
        num += v ;
        screen.value = num;
    }else{
        console.log(`Operator ${v}`);
        console.log(`Num : ${num}`);
        operate(v,num);
        num = '';
    }
    
}

const operate = function (v,num){
    screen.value = '';
    num = Number(num);
    numHist.push(num);
    if(v !== '='){
    numHist.push(v)
    };
} ;


function theHistory(){
    for(ele of numHist){
        histEle.innerText += ele + ' ';

    }
}

const screen = document.querySelector('#input-screen');
const histEle = document.querySelector('#history h4');
let numHist = [];
let num = '';