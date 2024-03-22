let computerMove='';
let result='';
let score=JSON.parse(localStorage.getItem('score')) ||
{
    Wins:0,
    Losses:0,
    Ties:0
};


function pickComputerMove(){

const randomNumber= Math.random();

    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }
    else{
        computerMove='scissors';
    }

    return computerMove;
}
pickComputerMove();


function playGame(playerMove){

    const computerMove = pickComputerMove();

    if (playerMove==='rock'){

        if(computerMove==='rock'){
            result='Tie';
        }
        else if(computerMove==='paper'){
            result='You lose';
        }else if(computerMove==='scissors'){
            result='You win';
        }
            
    }

    else if(playerMove==='paper'){
            if(computerMove==='rock'){
                result='You win';
            }
            else if(computerMove==='paper'){
                result='Tie';
            }else if (computerMove==='scissors'){
                result='You lose';
            }
                
    }
    else if (playerMove==='scissors'){
                
            if(computerMove==='rock'){
                result='You lose';
            }
            else if(computerMove==='paper'){
                result='You win';
            }else if (computerMove==='scissors'){
                result='Tie';
            }  
    }

    else if (playerMove==='reset'){
        
    };



    if(result==='You win'){
        score.Wins+=1;
    }else if(result==='You lose'){
        score.Losses+=1;
    }else if(result==='Tie'){
        score.Ties+=1;
    };

    localStorage.setItem('score',JSON.stringify(score));
    let finalResult= document.querySelector('.js-result');
    finalResult.innerHTML=`${result}`;
    finalResult.classList.add('same-para');

    let finalResult1= document.querySelector('.js-move');
    finalResult1.innerHTML=`you <img src="/images/${playerMove}.png" class="r-img">
    computer <img src="/images/${computerMove}.png" class="r-img">`;
    finalResult1.classList.add('same-para');
    updateScoreElement();
};

const clickRock = document.getElementById('js-rock-play');
clickRock.addEventListener('click', function(){playGame('rock');});

const clickPaper = document.getElementById('js-paper-play');
clickPaper.addEventListener('click', function(){playGame('paper');});

const clickScissors = document.getElementById('js-scissors-play');
clickScissors.addEventListener('click', function(){playGame('scissors');});

const resetScore = document.getElementById('js-reset-score');
resetScore.addEventListener('click', function(){
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    updateScoreElement();
});

function updateScoreElement(){
    const finalResult2 = document.querySelector('.js-element');
    finalResult2.innerHTML=`Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
    finalResult2.classList.add('same-para');
}
updateScoreElement();

let intervalId;
function autoPlay(){
     intervalId =  setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
    },1000);
};


const autoPlayButton = document.getElementById('js-auto-play');
autoPlayButton.addEventListener('click', function(){
    const stop = document.getElementById('js-auto-play');
    if(stop.innerText === 'Auto Play'){
        autoPlay();
        stop.innerText = 'Stop';
        stop.classList.add('css-stop-btn');
    }else{
        stop.innerText = 'Auto Play';
        clearInterval(intervalId);
    };
});




