var mainView=document.querySelector('#mainView');
var gameView=document.querySelector('#gameView');
var startBtn=document.querySelector('#startBtn');
var name1=document.querySelector('#name1');
var name2=document.querySelector('#name2');
var score1=document.querySelector('#score1');
var score2=document.querySelector('#score2');
var rolle1Btn=document.querySelector('#rolle1Btn');
var rolle2Btn=document.querySelector('#rolle2Btn');
var heading=document.querySelector('#heading');
var counter1=document.querySelector('#counter1');
var counter2=document.querySelector('#counter2');
var pl1Div=document.querySelector('#pl1Div');
var pl2Div=document.querySelector('#pl2Div');
var footer=document.querySelector('#footer');


var scorePl1=0;
var scorePl2=0;
var count1=0;
var count2=0;


startBtn.addEventListener('click',startGame);
rolle1Btn.addEventListener('click',rollingDice1);
rolle2Btn.addEventListener('click',rollingDice2);
footer.addEventListener('click',startAgain);


function startGame(){
    var player1=prompt('Enter player 1');
    var player2=prompt('Enter player 2');
    name1.innerHTML=player1;
    name2.innerHTML=player2;
    mainView.style.display='none';
    gameView.style.display='block';
    score1.innerHTML=0;
    score2.innerHTML=0;
}

function rollingDice1(){
    var d1=Math.ceil(Math.random()*6);
    score1.innerHTML=d1;
    scorePl1+=d1;
    heading.innerHTML=`Total score  ${scorePl1} : ${scorePl2}`;
    rolle1Btn.className="btnDisabled";
    rolle1Btn.setAttribute('disabled','true');
    rolle2Btn.removeAttribute('disabled');
    rolle2Btn.className="";
    count1++;
    counter1.innerHTML=parseInt(count1);
    if(count1===5 && count2===5){
        winner();
        footer.style.display='block';
    }
}

function rollingDice2(){
    var d2=Math.ceil(Math.random()*6);
    score2.innerHTML=d2;
    scorePl2+=d2;
    heading.innerHTML=`Total score  ${scorePl1} : ${scorePl2}`;
    rolle2Btn.className="btnDisabled";
    rolle2Btn.setAttribute('disabled','true');
    rolle1Btn.removeAttribute('disabled');
    rolle1Btn.className="";
    count2++;
    counter2.innerHTML=parseInt(count2);
    if(count2===5 && count1===5){
        winner();
        footer.style.display='block';
    }
}

function winner(){
    rolle1Btn.setAttribute('disabled','true');
    rolle2Btn.setAttribute('disabled','true');
    rolle1Btn.className="btnDisabled";
    rolle2Btn.className="btnDisabled";
    if (scorePl1>scorePl2){
        pl1Div.style.background="rgb(12, 156, 12)";
    } else if(scorePl2>scorePl1){
        pl2Div.style.background="rgb(12, 156, 12)";
    } else {
        pl1Div.style.background="tomato";
        pl2Div.style.background="tomato";
    }
}

function startAgain(){
    mainView.style.display='block';
    gameView.style.display='none';
    scorePl1=0;
    scorePl2=0;
    count1=0;
    count2=0;
    footer.style.display="none";
    heading.innerHTML=`Total score  ${scorePl1} : ${scorePl2}`;
    counter1.innerHTML=parseInt(count1);
    counter2.innerHTML=parseInt(count2);
    rolle1Btn.removeAttribute('disabled');
    rolle2Btn.removeAttribute('disabled');
    rolle1Btn.className="";
    rolle2Btn.className="";
    pl1Div.style.background="transparent";
    pl2Div.style.background="transparent";
}






