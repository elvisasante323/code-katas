/**
 * @param {number[]} arrayOfNumbers
 */
function randomiseNumbers(arrayOfNumbers) {
    for (var i = arrayOfNumbers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = arrayOfNumbers[i];
        arrayOfNumbers[i] = arrayOfNumbers[j];
        arrayOfNumbers[j] = temp;
    }

    return arrayOfNumbers;
}

/**
 * @param {number} duration
 * @param {*} display
 */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function slide (event) {
	// Obtain text of buttons
	var btn1 = document.querySelector('#btn1').textContent;
	var btn2 = document.querySelector('#btn2').textContent;
	var btn3 = document.querySelector('#btn3').textContent;
	var btn4 = document.querySelector('#btn4').textContent;
	var btn5 = document.querySelector('#btn5').textContent;
	var btn6 = document.querySelector('#btn6').textContent;
	var btn7 = document.querySelector('#btn7').textContent;
	var btn8 = document.querySelector('#btn8').textContent;
	var btn9 = document.querySelector('#btn9').textContent;
	var btn10 = document.querySelector('#btn10').textContent;
	var btn11 = document.querySelector('#btn11').textContent;
	var btn12 = document.querySelector('#btn12').textContent;
	var btn13 = document.querySelector('#btn13').textContent;
	var btn14 = document.querySelector('#btn14').textContent;
	var btn15 = document.querySelector('#btn15').textContent;
	var emptyBtn = document.querySelector('#emptyBtn').textContent;

// Create first row and first column
	var firstRow = [ btn13, btn14, btn15, emptyBtn ];
	var firstColumn = [ btn4, btn8, btn12, emptyBtn ];

// Create second row and second column
	var secondRow = [ btn9, btn10, btn11, btn12 ];
	var secondColumn = [ btn3, btn7, btn11, btn15 ];

// Create third row and third column
	var thirdRow = [ btn5, btn6, btn7, btn8 ];
	var thirdColumn = [ btn2, btn6, btn10, btn14 ];

// Create fourth row and fourth column
	var fourthRow = [ btn1, btn2, btn3, btn4 ];
	var fourthColumn = [ btn1, btn5, btn9, btn13 ];

    var clickedBtnText = event.target.innerHTML;
    var clickedBtnID = event.target.attributes[0].nodeValue;

    // Slide numbers
    if (
        firstRow.includes(clickedBtnText)  ||
        firstColumn.includes(clickedBtnText)  ||
        secondRow.includes(clickedBtnText)  ||
        secondColumn.includes(clickedBtnText)  ||
        thirdRow.includes(clickedBtnText)  ||
        thirdColumn.includes(clickedBtnText)  ||
        fourthRow.includes(clickedBtnText)  ||
        fourthColumn.includes(clickedBtnText)
    ) {
        document.querySelector('#emptyBtn').textContent = clickedBtnText;
        document.querySelector('#emptyBtn').setAttribute('id', clickedBtnID);

        event.target.setAttribute('id', 'emptyBtn');
        event.target.innerText = '';
    }
}

document.querySelector('.card').style.visibility = 'hidden'; // Hides timer

// When the start button is clicked
document.getElementById('startGame').addEventListener('click', function () {
    var buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var shuffleNumbers = randomiseNumbers(buttons);

    /**
     * Shuffles button text with randomise numbers
     */
    document.querySelector('#btn1').innerHTML = shuffleNumbers[0];
    document.querySelector('#btn2').innerHTML = shuffleNumbers[1];
    document.querySelector('#btn3').innerHTML = shuffleNumbers[2];
    document.querySelector('#btn4').innerHTML = shuffleNumbers[3];
    document.querySelector('#btn5').innerHTML = shuffleNumbers[4];
    document.querySelector('#btn6').innerHTML = shuffleNumbers[5];
    document.querySelector('#btn7').innerHTML = shuffleNumbers[6];
    document.querySelector('#btn8').innerHTML = shuffleNumbers[7];
    document.querySelector('#btn9').innerHTML = shuffleNumbers[8];
    document.querySelector('#btn10').innerHTML = shuffleNumbers[9];
    document.querySelector('#btn11').innerHTML = shuffleNumbers[10];
    document.querySelector('#btn12').innerHTML = shuffleNumbers[11];
    document.querySelector('#btn13').innerHTML = shuffleNumbers[12];
    document.querySelector('#btn14').innerHTML = shuffleNumbers[13];
    document.querySelector('#btn15').innerHTML = shuffleNumbers[14];

    /**
     * Show timer
     */
    var twoMinutes = 120;
    var display = document.querySelector('#timer');
    startTimer(twoMinutes, display);

    document.querySelector('.card').style.visibility = 'visible'; // Show timer
    document.getElementById('startGame').style.visibility = 'hidden';

    setTimeout(function () {
    	document.querySelector('#innerText').innerHTML = 'Game Over !';
        document.querySelector('#btn15').disabled = true;
        document.querySelector('#btn14').disabled = true;
        document.querySelector('#btn13').disabled = true;

        document.querySelector('#btn12').disabled = true;
        document.querySelector('#btn11').disabled = true;
        document.querySelector('#btn10').disabled = true;

        document.querySelector('#btn9').disabled = true;
        document.querySelector('#btn8').disabled = true;
        document.querySelector('#btn7').disabled = true;

        document.querySelector('#btn6').disabled = true;
        document.querySelector('#btn5').disabled = true;
        document.querySelector('#btn4').disabled = true;

        document.querySelector('#btn3').disabled = true;
        document.querySelector('#btn2').disabled = true;
        document.querySelector('#btn1').disabled = true;
    }, 120000);
});

// When a button is clicked
document.querySelector('#btn15').addEventListener('click', slide);
document.querySelector('#btn14').addEventListener('click', slide);
document.querySelector('#btn13').addEventListener('click', slide);

document.querySelector('#btn12').addEventListener('click', slide);
document.querySelector('#btn11').addEventListener('click', slide);
document.querySelector('#btn10').addEventListener('click', slide);

document.querySelector('#btn9').addEventListener('click', slide);
document.querySelector('#btn8').addEventListener('click', slide);
document.querySelector('#btn7').addEventListener('click', slide);

document.querySelector('#btn6').addEventListener('click', slide);
document.querySelector('#btn5').addEventListener('click', slide);
document.querySelector('#btn4').addEventListener('click', slide);

document.querySelector('#btn3').addEventListener('click', slide);
document.querySelector('#btn2').addEventListener('click', slide);
document.querySelector('#btn1').addEventListener('click', slide);

