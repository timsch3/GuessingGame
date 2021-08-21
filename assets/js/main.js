let totalRounds = 4
let round = 0
let randomNumber
let customRoundsInput = document.getElementById('customRoundsInput')
let optionsWrapper = document.getElementById('optionsWrapper')
let roundOutput = document.getElementById('roundOutput')
let resultOutput = document.getElementById('resultOutput')
let won = false

function showCustomRounds() {
    document.getElementById('radioCustomRounds').checked ? customRoundsInput.style.display = 'block' : customRoundsInput.style.display = 'none'
}

function setTotalRounds() {
    if (document.getElementById('radio4Rounds').checked) {
        totalRounds = 4
    }
    if (document.getElementById('radio5Rounds').checked) {
        totalRounds = 5
    }
    if (document.getElementById('radio6Rounds').checked) {
        totalRounds = 6
    }
    if (document.getElementById('radioCustomRounds').checked) {
        totalRounds = Number(document.getElementById('customRoundsInput').value)
    }
}

function takeGuess() {
    let input = document.getElementById('guessInput').value
    if (input > 0 && input < 101) {
        if (round == 0) {
            randomNumber = getRandomIntInclusive(1, 100)
            optionsWrapper.style.display = 'none'
            roundOutput.style.display = 'block'
        }
        if (input == randomNumber) {
            round++
            resultOutput.innerHTML += 'Round ' + round + ' – ' + "Congratulations, " + input + " is the right number, you win! <a href='index.html'>Play again!</a>"
            document.getElementById('guessButton').style.display = 'none'
            won = true
        }
        else if (input != randomNumber) {
            round++
            if (input < randomNumber) {
                resultOutput.innerHTML += 'Round ' + round + ' – ' + 'The number is higher than ' + input + ', guess again!<br>'
            }
            else if (input > randomNumber) {
                resultOutput.innerHTML += 'Round ' + round + ' – ' + 'The number is lower than ' + input + ', guess again!<br>'
            }
        }
        roundOutput.innerHTML = round + ' / ' + totalRounds
        if (round == totalRounds && !won) {
            resultOutput.innerHTML += "That's " + totalRounds + " rounds, you lose! The number was " + randomNumber + ". <a href='index.html'>Play again!</a>"
            document.getElementById('guessButton').style.display = 'none'
        }
    }
    else {
        alert('Invalid guess')
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}