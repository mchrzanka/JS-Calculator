const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
function getUserNumberInput() {
	return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //template literal.
	outputResult(currentResult, calcDescription); //from vendor.js
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult + enteredNumber; //any input into the browser is treated as a string, so for things like math we have to convert the input into a number. parseInt returns whole numbers, whereas parseFloat returns both whole and decimals. '+' is the only operator that converts into string.
	createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult * enteredNumber;
	createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult / enteredNumber;
	createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add); //'add()' calls the function immediately. We don't want the function to run when the script is read, only when the button is clicked. So we write it as 'add'.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
