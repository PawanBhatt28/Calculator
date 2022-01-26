console.log("inside script.")

const screen = document.querySelector('#input-screen');

const numBtn = document.querySelectorAll('.buttons .numbers .number-btn');

console.log(numBtn);


numBtn.forEach((element) => {

    const numBtnValue = element.value;
    console.log(numBtnValue);

    if (numBtnValue === 'c') {
        element.onclick = clear;
    } else if (numBtnValue === '=') {
        console.log("Equals to =");
    } else {
        element.addEventListener('click', numbers(numBtnValue)) ;
    }

}
)

// numBtn.addEventListener('click', screenscreen);

function numbers(valueValue) {
    screen.value = valueValue;
}


function clear() {
    screen.value = '';
}
