let input;
let randomSelection;



const btns = document.querySelectorAll('.middle > .player_side > .content >button.btn_player');
const output_div = document.querySelector('#output');
const output = document.querySelector('#output > div.round_output');
const player_score = document.querySelector('#output > div.player_score');
const computer_score = document.querySelector('#output >div.computer_score');
const reload_btn = document.querySelector('.middle > button.hidden');

game();
function choice(){
    if (this.id === 'rock') {
     input = 1;
        
    }
    else if (this.id === 'paper'){
     input = 2;
        
    }
    else if (this.id === 'scissors'){
     input = 3;

    }
    else {
    console.log('another button pressed!');
    }

    computer_selection();
    compare();
}

function game(){
    playerScore = 0;
    computerScore = 0;

    btns.forEach(btn => btn.addEventListener('click', choice));
    computer_score.textContent = 'Computer Score: ' + computerScore;
    player_score.textContent = 'Player Score: ' + playerScore;

}

function computer_selection(){
    randomSelection = Math.floor(Math.random() * 3) + 1;
    return randomSelection;
}

function compare(){
    const output = document.querySelector('#output > div.round_output');
    if (input === randomSelection){
        console.log('tie');
        output.textContent= 'TIE!';
    }
    else if ((input == 1 && randomSelection == 2) || (input == 2 && randomSelection == 3) || (input == 3 && randomSelection == 1)){
        console.log('computer win');
        computerScore ++;
        output.textContent = 'COMPUTER WIN!';
        computer_score.textContent = 'Computer Score: ' + computerScore;

    }
    else{
        console.log('player win');
        playerScore ++;
        output.textContent = 'PLAYER WIN!';
        player_score.textContent = 'Player Score: ' + playerScore;

    }
    winner();
}

function winner(){
    if (computerScore === 5){
        console.log('Computer wins by first to 5 points');
        computer_score.textContent = 'Computer wins by first to 5 points';
        btns.forEach(btn => btn.disabled = true);
        reload_btn.classList.toggle('hidden');
    }
    else if (playerScore === 5){
        console.log('Player wins by first to 5 points');
        player_score.textContent = 'Player wins by first to 5 points';
        btns.forEach(btn => btn.disabled = true);
        reload_btn.classList.toggle('hidden');
    }
    else {
    console.log('player score: '+ playerScore);
    console.log('computer score: ' + computerScore);

    }
}

