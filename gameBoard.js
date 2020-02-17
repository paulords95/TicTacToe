const gB = document.querySelector('#gameboard');
const container = document.querySelector('#container');
let played = [[0],[1],[2]];

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

for (let m = 0; m < gameboard.length; m++){
    gameboard[m].addEventListener('click', function(){
        if (lastPlay == '' || lastPlay == playerOne.choice){
            choice = playerTwo.choice;
            if (played[0].length < 4){
                played[0].push(choice)
            } else {
                played[2].push(choice)
            }
            
        }
        if (lastPlay == playerTwo.choice){
            choice = playerOne.choice;
            if (played[1].length < 4){
                played[1].push(choice)
            } else {
                played[2].push(choice)
            }
        }
        if (gameboard[m].innerHTML == ''){
            gameboard[m].innerHTML = choice;
            lastPlay = choice;
        } else {
            console.log('lugar já preenchido')
        }
    })
}


for (let g = 0; g < gameboard.length; g++){
   // gameboard[g].innerHTML = g;
}




