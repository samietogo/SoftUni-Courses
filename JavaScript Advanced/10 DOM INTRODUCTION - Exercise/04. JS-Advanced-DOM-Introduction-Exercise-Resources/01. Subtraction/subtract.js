function subtract() {
    const numOne = Number(document.getElementById('firstNumber').value);
    const numTwo = Number(document.getElementById('secondNumber').value);
    let result = numOne - numTwo;
    return document.getElementById('result').textContent = result;
}