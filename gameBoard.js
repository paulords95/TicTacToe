const gB = document.querySelector('#gameboard')
const container = document.querySelector('#container')
const score = document.querySelector('#score')
const startGame = document.createElement('button')
let flagWon = 0
let flagWonCPU = 0
const players = document.querySelector('#players')

function createGame (){
    for (let i = 0; i < 3; i++){
        const fstRow = document.createElement('div')
        for (let l = 0; l < 3; l++){
            const scdRow = document.createElement('div')
            scdRow.setAttribute('class', 'boardSlot')
            fstRow.appendChild(scdRow)
        }
        gB.appendChild(fstRow)
    }
}

createGame()



const gameboard = document.querySelectorAll('.boardSlot')
let lastPlay = ''
let choice= ''




let computerPlay = (oper) => {
    let cpuChoice = oper  
    let randNumber = Math.floor(Math.random(0) * 8)
    if (gameboard[randNumber].innerHTML == '' && status.innerHTML == 'Playing!'){
        gameboard[randNumber].innerHTML = cpuChoice;
    } else if (status.innerHTML == '"X" won!') {
        return
    }
    
    else if (flagWonCPU < 5){
        computerPlay(oper)
    } 
    return (cpuChoice)
}


function playGame(player1, player2){

    for (let m = 0; m < gameboard.length; m++){
        gameboard[m].addEventListener('click', function(){
            if (lastPlay == player2.choice){
                choice = player1.choice
                flagWon++
            }
            if (lastPlay == '' || lastPlay == player1.choice){
                choice = player2.choice
                flagWon++
            }
            if (gameboard[m].innerHTML == ''){
                gameboard[m].innerHTML = choice
                lastPlay = choice
            } 
            if (status.innerHTML == '"X" won!' || 
                status.innerHTML == '"O" won!') {
                gameboard[m].innerHTML = '#'
                gameboard[m].style.backgroundColor = 'red'
            }
        
            checkWinner (0, 1, 2, 'O')
            checkWinner (3, 4, 5, 'O')
            checkWinner (6, 7, 8, 'O')
            checkWinner (0, 4, 8, 'O')
            checkWinner (2, 4, 6, 'O')
            checkWinner (0, 3, 6, 'O')
            checkWinner (1, 4, 7, 'O')
            checkWinner (2, 5, 8, 'O')
        
            checkWinner (0, 1, 2, 'X')
            checkWinner (3, 4, 5, 'X')
            checkWinner (6, 7, 8, 'X')
            checkWinner (0, 4, 8, 'X')
            checkWinner (2, 4, 6, 'X')
            checkWinner (0, 3, 6, 'X')
            checkWinner (1, 4, 7, 'X')
            checkWinner (2, 5, 8, 'X')
        })
    }
}





function playGameVsCPU (player1){
    function setPyrMark (pos){
        gameboard[pos].innerHTML = player1.choice
        flagWonCPU++
    }

    for (let m = 0; m < gameboard.length; m++){
                 
        gameboard[m].addEventListener('click', function(){
            if (gameboard[m].innerHTML == ''){
                setPyrMark(m);
                lastPlay = player1.choice
            } 
      
            if (flagWonCPU < 5 && status.innerHTML == 'Playing!' && lastPlay == player1.choice){
                setTimeout(function(){
                    computerPlay('O');
                    lastPlay == 'O'
                    checkWinner (0, 1, 2, 'O')
                    checkWinner (3, 4, 5, 'O')
                    checkWinner (6, 7, 8, 'O')
                    checkWinner (0, 4, 8, 'O')
                    checkWinner (2, 4, 6, 'O')
                    checkWinner (0, 3, 6, 'O')
                    checkWinner (1, 4, 7, 'O')
                    checkWinner (2, 5, 8, 'O')
                
                }, 400);
            } 
            console.log(flagWonCPU)
            if (status.innerHTML == '"X" won!' || 
                status.innerHTML == '"O" won!' || status.innerHTML == 'Draw!') {
                gameboard[m].innerHTML = '#'
                gameboard[m].style.backgroundColor = 'red'
            }
        
            checkWinner (0, 1, 2, 'X')
            checkWinner (3, 4, 5, 'X')
            checkWinner (6, 7, 8, 'X')
            checkWinner (0, 4, 8, 'X')
            checkWinner (2, 4, 6, 'X')
            checkWinner (0, 3, 6, 'X')
            checkWinner (1, 4, 7, 'X')
            checkWinner (2, 5, 8, 'X')
        })
    }
}




const status = document.createElement('div')
status.setAttribute('id', 'status');
status.innerHTML = 'Choose an opponent!'
status.style.fontSize = '30px'
status.style.marginTop = '15px'
score.appendChild(status);



const vsCPU = document.createElement('button')
vsCPU.innerHTML = 'Player vs Computer'
vsCPU.setAttribute('class', 'vsCPUvsPlyr')
players.appendChild(vsCPU)

const vsPlyr = document.createElement('button')
vsPlyr.innerHTML = 'Player vs Player'
vsPlyr.setAttribute('class', 'vsCPUvsPlyr')
players.appendChild(vsPlyr)


vsPlyr.addEventListener('click', function(){
    vsPlyr.style.backgroundColor = 'grey'
    vsPlyr.style.borderColor = 'grey'
    playGame(playerOne, playerTwo)
    startGame.remove()
    status.innerHTML = 'Playing!'
})

vsCPU.addEventListener('click', function(){
    vsCPU.style.backgroundColor = 'grey'
    vsCPU.style.borderColor = 'grey'
    playGameVsCPU(playerOne)
    startGame.remove()
    status.innerHTML = 'Playing!'
})



const restartGame = document.createElement('button')
restartGame.innerHTML = 'RESTART GAME'
restartGame.setAttribute('id', 'restart')
restartGame.addEventListener('click', function(){
    location.reload()
})

let isThereAWin = false;

function checkWinner (posOne, posTwo, posThree, choice){
    if(gameboard[posOne].innerHTML == gameboard[posTwo].innerHTML &&
        gameboard[posOne].innerHTML == gameboard[posThree].innerHTML &&
        gameboard[posThree].innerHTML  == choice){
            gameboard[posOne].style.backgroundColor = 'orange'
            gameboard[posTwo].style.backgroundColor = 'orange'
            gameboard[posThree].style.backgroundColor = 'orange'
            status.innerHTML = '"'+ choice +'"' + ' won!'
            isThereAWin = true
            container.appendChild(restartGame)
        } else if (flagWon == 9 || flagWonCPU == 5) {
            status.innerHTML = 'Draw!'
            container.appendChild(restartGame)
        }
}


