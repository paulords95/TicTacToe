const gB = document.querySelector('#gameboard');

function createGame (){
    for (let i = 0; i < 3; i++){
        const fstRow = document.createElement('div');
        fstRow.setAttribute('class', 'boardCol');
        for (let l = 0; l < 3; l++){
            const scdRow = document.createElement('div');
            scdRow.setAttribute('class', 'boardSlot');
            scdRow.innerHTML = 'O';
            fstRow.appendChild(scdRow)
        }
        gB.appendChild(fstRow)
    }
}
createGame();