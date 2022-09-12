const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //array to keep track of calculations

//Gets input from input field
function getUserNumberInput() {
	return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //template literal.
	outputResult(currentResult, calcDescription); //from vendor.js
}

function writeToLog(operationIdentifier, prevResult, enteredNumber, newResult) {
	//create an object (grouped data, structured in key-value pairs).
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		valueAdded: enteredNumber,
		result: newResult,
	};

	logEntries.push(logEntry); //add our object to the empty array we created

	console.log(logEntries);
	console.log(logEntry.operation); //access a property in an object
}

function calculateResult(calculationType){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;

	if (calculationType === 'ADD'){
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT'){
		currentResult -= enteredNumber;
		mathOperator = '-'
	} else if (calculationType === 'MULTIPLY'){
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);

	//write to object log
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
calculateResult('ADD');
}

function subtract() {
calculateResult('SUBTRACT');
}

function multiply() {
calculateResult('MULTIPLY');
}

function divide() {
calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add); //'add()' calls the function immediately. We don't want the function to run when the script is read, only when the button is clicked. So we write it as 'add'.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
