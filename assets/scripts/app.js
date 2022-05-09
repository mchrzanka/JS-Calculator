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

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult + enteredNumber; //any input into the browser is treated as a string, so for things like math we have to convert the input into a number. parseInt returns whole numbers, whereas parseFloat returns both whole and decimals. '+' is the only operator that converts into string.
	//another way to write line 18: currentResult += enteredNumber
	createAndWriteOutput('+', initialResult, enteredNumber);

	//write to object log
	writeToLog('ADD', initialResult, enteredNumber, currentResult);

	console.log(typeof enteredNumber); //check the type of the data you're working with
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	//another way: currentResult -= enteredNumber
	createAndWriteOutput('-', initialResult, enteredNumber);

	//write to object log
	writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult * enteredNumber;
	//currentResult *= enteredNumber
	createAndWriteOutput('*', initialResult, enteredNumber);

	//write to object log
	writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult / enteredNumber;
	//currentResult /= enteredNumber
	createAndWriteOutput('/', initialResult, enteredNumber);

	//write to object log
	writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); //'add()' calls the function immediately. We don't want the function to run when the script is read, only when the button is clicked. So we write it as 'add'.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
