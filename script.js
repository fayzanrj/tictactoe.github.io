let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let value = 'X'
let turn = "player1"
let xWinner 
let oWinner

const populatingbtn = (variable) => {
    variable.addEventListener('click', () => {

        variable.innerHTML = value;
        variable.setAttribute('disabled', 'true')
        let result = checkingResult();
            
        // changing VALUES
        if (value == 'X') {
            value = 'O'
        } else {
            value = 'X'
        }
        
        // CHANGING PLAYER Turn
        if (turn == "player1") {
            infoDisplay.innerHTML = player1Name + "'s turn  "+value
            turn = "player2"
        } else {
            infoDisplay.innerHTML = player2Name + "'s turn " + value
            turn = "player1"
        }

        //result showing 
        resultToShow(result)
    })
}

populatingbtn(btn1)
populatingbtn(btn2)
populatingbtn(btn3)
populatingbtn(btn4)
populatingbtn(btn5)
populatingbtn(btn6)
populatingbtn(btn7)
populatingbtn(btn8)
populatingbtn(btn9)


// result showing function
const resultToShow = (result)=>{
    if (result == 'XP1') {
        infoDisplay.innerHTML = player1Name.toUpperCase() + " won!!!<br> (Press reset to start again)"
        value = 'X'
    } else if (result == "XP2") {
        infoDisplay.innerHTML = player2Name.toUpperCase()  + " won!!!<br> (Press reset to start again)"
        value = "X"
    } else if(result == "OP1"){
        infoDisplay.innerHTML = player1Name.toUpperCase() + " won!!!<br> (Press reset to start again)"
        value = 'X'
    } else if(result == "OP2"){
        infoDisplay.innerHTML = player2Name.toUpperCase() + " won!!!<br> (Press reset to start again)"
        value = 'X'
    }else if (result == "draw") {
        infoDisplay.innerHTML = "Oh- , so basically, yk...<br>it's a DRAW <br> (Press reset to start again)"
        value = "X"
    }
}

// function for disabling all buttons on result
const disablingBtns = () => {
    btn1.setAttribute('disabled', 'true')
    btn2.setAttribute('disabled', 'true')
    btn3.setAttribute('disabled', 'true')
    btn4.setAttribute('disabled', 'true')
    btn5.setAttribute('disabled', 'true')
    btn6.setAttribute('disabled', 'true')
    btn7.setAttribute('disabled', 'true')
    btn8.setAttribute('disabled', 'true')
    btn9.setAttribute('disabled', 'true')
}

// function for checking result if there is any winner
const checkingResult = () => {
    if (btn1.innerHTML == "X" && btn2.innerHTML == "X" && btn3.innerHTML == "X" ||
        btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X" ||
        btn3.innerHTML == "X" && btn6.innerHTML == "X" && btn9.innerHTML == "X" ||
        btn7.innerHTML == "X" && btn8.innerHTML == "X" && btn9.innerHTML == "X" ||
        btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X" ||
        btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "X" ||
        btn1.innerHTML == "X" && btn5.innerHTML == "X" && btn9.innerHTML == "X" ||
        btn3.innerHTML == "X" && btn5.innerHTML == "X" && btn7.innerHTML == "X") {
        disablingBtns();
        return xWinner
    } else if (
        btn1.innerHTML == "O" && btn2.innerHTML == "O" && btn3.innerHTML == "O" ||
        btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O" ||
        btn3.innerHTML == "O" && btn6.innerHTML == "O" && btn9.innerHTML == "O" ||
        btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "O" ||
        btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O" ||
        btn4.innerHTML == "O" && btn5.innerHTML == "O" && btn6.innerHTML == "O" ||
        btn1.innerHTML == "O" && btn5.innerHTML == "O" && btn9.innerHTML == "O" ||
        btn3.innerHTML == "O" && btn5.innerHTML == "O" && btn7.innerHTML == "O") {
        disablingBtns();
        return oWinner
    } else if (
        btn1.innerHTML != "" && btn2.innerHTML != "" && btn3.innerHTML != "" &&
        btn6.innerHTML != "" && btn5.innerHTML != "" && btn6.innerHTML != "" &&
        btn7.innerHTML != "" && btn8.innerHTML != "" && btn9.innerHTML != "") {
        return "draw"
    }
}


// Other functions of interactionns
let player1Name
let player2Name
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let entername1 = document.getElementById("entername")
let entername2 = document.getElementById("entername2")
let infoDisplay = document.getElementById("info-display")
let reset = document.getElementById("reset")
let start = document.getElementById("start")
let hardreset = document.getElementById("hardreset")
let gameBoxes = document.getElementById('game-boxes')

// inputting names on click
entername1.addEventListener('click', () => {
    if (player1.value == "") {
        player1.setAttribute("placeholder", "Enter name of Player 1 to start")
    } else {
        player1Name = player1.value
        player1.style.display = 'none'
        player2.style.display = "inline"
        player2.focus()

        entername1.style.display = 'none'
        entername2.style.display = "inline"
    }
})

entername2.addEventListener('click', () => {
    if (player2.value == "") {
        player2.setAttribute("placeholder", "Enter name of Player 2 to start")
    } else {
        player2Name = player2.value
        player2.style.display = "none"
        entername2.style.display = "none"
        hardreset.style.display = "inline"
        infoDisplay.style.display = "flex"
        infoDisplay.innerHTML = player1Name + " and " + player2Name + ". Are you ready? <br> (Press start to start)"

        start.style.display = "inline"
    }
})

// start game on click
start.addEventListener('click', () => {
    if (player1.value == "" || player2.value == "") {
        infoDisplay.innerHTML = "Enter names to play"
    } else {
        btn1.removeAttribute('disabled')
        btn2.removeAttribute('disabled')
        btn3.removeAttribute('disabled')
        btn4.removeAttribute('disabled')
        btn5.removeAttribute('disabled')
        btn6.removeAttribute('disabled')
        btn7.removeAttribute('disabled')
        btn8.removeAttribute('disabled')
        btn9.removeAttribute('disabled')

        // generating random player's turn
        let num = Math.floor(Math.random() * 100)
        if(num%2 == 0){
            turn = "player1"
            xWinner = "XP1"
            oWinner = "OP2"
        } else {
            turn = "player2"
            xWinner = "XP2"
            oWinner = "OP1"
        }

        if (turn == "player1") {
            infoDisplay.innerHTML = player1Name + "'s turn  "+value
            turn = "player2"
        } else {
            infoDisplay.innerHTML = player2Name + "'s turn " + value
            turn = "player1"
        }
        reset.style.display = "inline"
        start.style.display = 'none'
        gameBoxes.style.opacity = '1'
    }
})

//reset function
const resetFunction = () => {
    btn1.innerHTML = ""
    btn2.innerHTML = ""
    btn3.innerHTML = ""
    btn4.innerHTML = ""
    btn5.innerHTML = ""
    btn6.innerHTML = ""
    btn7.innerHTML = ""
    btn8.innerHTML = ""
    btn9.innerHTML = ""
}

// reset game on click
reset.addEventListener('click', () => {
    resetFunction();
    start.style.display = "inline"
    reset.style.display = "none"
    gameBoxes.style.opacity = '0'
    infoDisplay.innerHTML = player1Name + " and " + player2Name + ". Are you ready? <br> (Press start to start)"
    value = "X"
})

// reset game to full starting
hardreset.addEventListener('click', () => {
    hardreset.style.display = "none"
    player1.style.display = 'inline'
    player1.focus()
    entername1.style.display = 'inline'

    infoDisplay.innerHTML = ""
    infoDisplay.style.display = "none"

    resetFunction();
    reset.style.display = "none"
    start.style.display = "none"
    gameBoxes.style.opacity = '0'
    value = "X"
})
