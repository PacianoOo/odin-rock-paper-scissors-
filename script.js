let input;
let randomSelection;



const btns = document.querySelectorAll('.middle > .player_side > .content >button.btn_player');
const output_div = document.querySelector('#output');
const output = document.querySelector('#output > div.round_output');
const player_score = document.querySelector('#output > div.player_score');
const computer_score = document.querySelector('#output >div.computer_score');
const reload_btn = document.querySelector('.middle > button.hidden');
const p_img_transition_rock = document.querySelector('.middle > .player_side > .images > img.player_rock');
const p_img_transition_paper = document.querySelector('.middle > .player_side > .images > img.player_paper');
const p_img_transition_scissors = document.querySelector('.middle > .player_side > .images > img.player_scissors');

const c_img_transition_rock = document.querySelector('.middle > .computer_side > .images > img.computer_rock');
const c_img_transition_paper = document.querySelector('.middle > .computer_side > .images > img.computer_paper');
const c_img_transition_scissors = document.querySelector('.middle > .computer_side > .images > img.computer_scissors');
game();
function choice(){
    if (this.id === 'rock') {
    input = 1;
    p_img_transition_rock.classList.add('hover');
    p_img_transition_paper.classList.remove('hover');
    p_img_transition_scissors.classList.remove('hover');
    }
    else if (this.id === 'paper'){
     input = 2;
     p_img_transition_rock.classList.remove('hover');
     p_img_transition_paper.classList.add('hover');
     p_img_transition_scissors.classList.remove('hover');
    }
    else if (this.id === 'scissors'){
     input = 3;
     p_img_transition_rock.classList.remove('hover');
     p_img_transition_paper.classList.remove('hover');
     p_img_transition_scissors.classList.add('hover');
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
    if (randomSelection === 1){
        c_img_transition_rock.classList.add('hover');
        c_img_transition_paper.classList.remove('hover');
        c_img_transition_scissors.classList.remove('hover');
    }
    else if (randomSelection === 2){
        c_img_transition_rock.classList.remove('hover');
        c_img_transition_paper.classList.add('hover');
        c_img_transition_scissors.classList.remove('hover');
    }
    else if (randomSelection === 3){
        c_img_transition_rock.classList.remove('hover');
        c_img_transition_paper.classList.remove('hover');
        c_img_transition_scissors.classList.add('hover');
    }
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

