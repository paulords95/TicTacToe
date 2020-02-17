const gB = document.querySelector('#gameboard');
const container = document.querySelector('#container');

function createGame (){
    for (let i = 0; i < 3; i++){
        const fstRow = document.createElement('div');
        //fstRow.setAttribute('class', 'boardCol'); 
        for (let l = 0; l < 3; l++){
            const scdRow = document.createElement('div');
            scdRow.setAttribute('class', 'boardSlot');
            fstRow.appendChild(scdRow)
        }
        gB.appendChild(fstRow);
    }
}

createGame();

const gameboard = document.querySelectorAll('.boardSlot');

let lastPlay = '';
let choice= '';
let played = [];

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
        } else {
            console.log('lugar já preenchido')
        }
    })
}



