let input;
let randomSelection;

game();
function choice(){
    if (this.className === 'rock') {
        input == 1;
        
    }
    else if (this.className === 'paper'){
        input == 2;
        
    
    }
    else if (this.className === 'scissors'){
        input == 3;

    }
    else {
    console.log('another button pressed!');
    }

}

function game(){
    playerScore = 0;
    computerScore = 0;
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.addEventListener('click', choice));
    computer_selection();
    console.log(input);
    console.log(randomSelection);
}

function computer_selection(){
    randomSelection = Math.floor(Math.random() * 3) + 1;
    return randomSelection;
}

