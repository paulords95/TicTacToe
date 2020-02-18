const gB = document.querySelector('#gameboard');
const container = document.querySelector('#container');
const score = document.querySelector('#score');
const startGame = document.createElement('button');

function createGame (){
    for (let i = 0; i < 3; i++){
        const fstRow = document.createElement('div'); 
        for (let l = 0; l < 3; l++){
            const scdRow = document.createElement('div');
            scdRow.setAttribute('class', 'boardSlot');
            fstRow.appendChild(scdRow)
        }
        gB.appendChild(fstRow);
    }
}

createGame();


startGame.setAttribute('id', 'start');
startGame.innerHTML = 'START GAME'
score.appendChild(startGame)

const gameboard = document.querySelectorAll('.boardSlot');
let lastPlay = '';
let choice= '';
function playGame(){
    for (let m = 0; m < gameboard.length; m++){
        gameboard[m].addEventListener('click', function(){
            if (lastPlay == '' || lastPlay == playerOne.choice){
                choice = playerTwo.choice;    
            }
            if (lastPlay == playerTwo.choice){
                choice = playerOne.choice;
            }
            if (gameboard[m].innerHTML == ''){
                gameboard[m].innerHTML = choice;
                lastPlay = choice;
            } 
            if (status.innerHTML == 'X won!' || 
                    status.innerHTML == 'O won!') {
                gameboard[m].innerHTML = '#'
                gameboard[m].style.backgroundColor = 'red';
            }

        
            checkWinner (0, 1, 2, 'O');
            checkWinner (3, 4, 5, 'O');
            checkWinner (6, 7, 8, 'O');
            checkWinner (2, 1, 0, 'O');
            checkWinner (5, 4, 3, 'O');
            checkWinner (8, 7, 6, 'O');
            checkWinner (0, 4, 8, 'O');
            checkWinner (8, 4, 0, 'O');
            checkWinner (2, 4, 6, 'O');
            checkWinner (6, 4, 2, 'O');
            checkWinner (0, 3, 6, 'O');
            checkWinner (6, 3, 0, 'O');
            checkWinner (1, 4, 7, 'O');
            checkWinner (1, 4, 7, 'O');
            checkWinner (2, 5, 8, 'O');
            checkWinner (2, 5, 8, 'O');   
        
            checkWinner (0, 1, 2, 'X');
            checkWinner (3, 4, 5, 'X');
            checkWinner (6, 7, 8, 'X');
            checkWinner (2, 1, 0, 'X');
            checkWinner (5, 4, 3, 'X');
            checkWinner (8, 7, 6, 'X');
            checkWinner (0, 4, 8, 'X');
            checkWinner (8, 4, 0, 'X');
            checkWinner (2, 4, 6, 'X');
            checkWinner (6, 4, 2, 'X');
            checkWinner (0, 3, 6, 'X');
            checkWinner (6, 3, 0, 'X');
            checkWinner (1, 4, 7, 'X');
            checkWinner (1, 4, 7, 'X');
            checkWinner (2, 5, 8, 'X');
            checkWinner (2, 5, 8, 'X');
        })
    } 
}

const status = document.createElement('div');
status.setAttribute('id', 'status');
score.appendChild(status);


startGame.addEventListener('click', function(){
    playGame();
    startGame.remove();
    status.innerHTML = 'Playing';
})


const restartGame = document.createElement('button');
restartGame.innerHTML = 'RESTART GAME';
restartGame.setAttribute('id', 'restart');
restartGame.addEventListener('click', function(){
    location.reload();
})

let flagWon = false;

function checkWinner (posOne, posTwo, posThree, choice){
    if(gameboard[posOne].innerHTML == gameboard[posTwo].innerHTML &&
        gameboard[posOne].innerHTML == gameboard[posThree].innerHTML &&
        gameboard[posThree].innerHTML  == choice){
            status.innerHTML = choice + ' won!';
            container.appendChild(restartGame);
            flagWon = true;
        } 
}



