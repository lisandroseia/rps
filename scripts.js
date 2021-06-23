let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissor = document.getElementById('s');
let options = ["rock","paper","scissor"];
let userScoreHtml = document.getElementById('userscore');
let cpuScoreHtml = document.getElementById('cpuscore')

let cpuChoice;
let userChoice;
let cpuScore = 0;
let playerScore = 0;
let moves = "";

function cpuMove(){
    const random = Math.floor(Math.random() *3);
    return options[random]
};


function reset(){
    cpuScore = 0;
    playerScore = 0;
    cpuScoreHtml.innerText = cpuScore;
    userScoreHtml.innerText = playerScore;
}

function check(){
    if(cpuScore == 5){
        alert('you lose');
        reset();
    }else if(playerScore == 5){
        alert('you won!');
        reset();
    }
}

function game(userChoice){
    cpuChoice = cpuMove();
    moves = userChoice + cpuChoice;
    if(moves == "rockscissor" || moves == "scissorpaper" || moves == "paperrock"){
        playerScore++;
        userScoreHtml.innerText = playerScore;
        check();
    }else if(moves == "scissorrock" || moves == "paperscissor" || moves == "rockpaper"){
        cpuScore++;
        cpuScoreHtml.innerText = cpuScore;
        check();
    }
    }

    rock.addEventListener('click', ()=> game('rock'));
    paper.addEventListener('click', ()=> game('paper'));
    scissor.addEventListener('click', ()=> game('scissor'));



