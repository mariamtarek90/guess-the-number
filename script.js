const randamvalue=document.querySelector('.number');
const checkbtn=document.querySelector('.check');
const inputvalue=document.querySelector('.guess');
const message=document.querySelector('.message');
const scorevalue=document.querySelector('.score');
const highscorevalue=document.querySelector('.highscore');
const againbtn=document.querySelector('.again');

let randamnum=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

function compare(){
  score--;
  scorevalue.textContent=score;
  if(randamnum===Number(inputvalue.value)){
    document.body.style.backgroundColor='green';
    message.textContent='You Win';
    randamvalue.textContent=randamnum;
    if(score>highscore){
      highscore=score;
      highscorevalue.textContent=highscore;
    }
  }
  else if(randamnum>Number(inputvalue.value)){
    message.textContent='too low';
  }
  else{
    message.textContent='too high';
  }   

}

function again(){
  score=20;
  scorevalue.textContent=score;
  message.textContent='Start guessing...';
  randamvalue.textContent='?';
  inputvalue.value='';
  document.body.style.backgroundColor='#222';
  randamnum=Math.trunc(Math.random()*20)+1;
}

checkbtn.addEventListener('click',compare)
againbtn.addEventListener('click',again)