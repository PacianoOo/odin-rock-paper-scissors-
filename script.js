let input;
let randomSelection;

game();
function choice(){
    if (this.className === 'rock') {
     input = 1;
        
    }
    else if (this.className === 'paper'){
     input = 2;
        
    }
    else if (this.className === 'scissors'){
     input = 3;

    }
    else {
    console.log('another button pressed!');
    }

    computer_selection();
    compare();
    //console.log(input);
    //console.log(randomSelection);
}

function game(){
    playerScore = 0;
    computerScore = 0;
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.addEventListener('click', choice));
 
}

function computer_selection(){
    randomSelection = Math.floor(Math.random() * 3) + 1;
    return randomSelection;
}

function compare(){
    const output = document.querySelector('#output');
    if (input === randomSelection){
        console.log('tie');
        output.textContent= 'TIE!';
    }
    else if ((input == 1 && randomSelection == 2) || (input == 2 && randomSelection == 3) || (input == 3 && randomSelection == 1)){
        console.log('computer win');
        computerScore ++;
        output.textContent = 'COMPUTER WIN!';
    }
    else{
        console.log('player win');
        playerScore ++;;
        output.textContent = 'PLAYER WIN!';
    }

}