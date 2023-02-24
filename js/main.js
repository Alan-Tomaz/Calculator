function insertValue(value) {
    let result = document.getElementById("result");
    let calculation = document.getElementById("calculation");
    calculation.innerHTML += value;

}

function insertOperator(value) {
    let result = document.getElementById("result");
    let calculation = document.getElementById("calculation");
    calculation.innerHTML += value;
}

function clean() {
    let calculation = document.getElementById("calculation");
    let result = document.getElementById("result");
    result.innerHTML = '';
    calculation.innerHTML = '';
}

function back() {
    let result = document.getElementById("result");
    result.innerHTML = '';
    let calculation = document.getElementById("calculation").innerHTML;
    document.getElementById('calculation').innerHTML = calculation.substring(0, calculation.length - 1);
}

function toCalculate() {
    let result = document.getElementById("result");
    let calculation = document.getElementById("calculation");
    result.innerHTML = eval(calculation.innerHTML);
}