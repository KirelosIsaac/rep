window.onload= function()
{
  score= JSON.parse(localStorage.getItem('score'));
  temp=document.getElementById('scoreID');

  if(score)
  {
    temp.textContent='Wins' + score.wins + ', Losses:'+score.losses + ', Draws:'+score.Draw+', Tries:'+score.Tries;
  }
  else
  {
    score={
      wins:0,
      losses:0, 
      Draw:0,
      Tries:0
    };
    temp.textContent='Wins:0, Losses:0, Draws:0, Tries:0';
  }
  }

let score={
  wins :0,
  losses:0,
  Draw:0,
  Tries:0
};

function resetScore()
{
 score.wins=0;
 score.losses=0; 
 score.Draw=0; 
 score.Tries=0;
 
 localStorage.setItem('score',JSON.stringify(score));

 temp=document.getElementById('scoreID');

  temp.textContent='Wins' + score.wins + ', Losses:'+score.losses + ', Draws:'+score.Draw+', Tries:'+score.Tries;
} 

function setVideo(videoID,srcAddress)
{
  const video = document.getElementById(videoID);

    video.src=srcAddress;

    video.load();
    video.play();  
}

function startGame(choise)
{
  /*
    select computer choice
  */
  let computerChoice= ['rock','scissors','paper'];
  let randomChoice = Math.floor((Math.random()*10))%3;

  /*
    select winner
  */
  let result='';

  if(choise==='scissors' && computerChoice[randomChoice]==='rock')
  {
    result= 'You lose'; 
    setVideo("videoID",'scissors rock.mp4'); 
  }
  else if(choise==='paper' && computerChoice[randomChoice]==='rock')
  {
    result='You win';
    setVideo("videoID",'paper rock.mp4'); 

  }
  else if(choise==='rock' && computerChoice[randomChoice]==='scissors')
  {
    result='You win';
    setVideo("videoID",'rock scissors.mp4'); 
  }
  else if(choise==='paper' && computerChoice[randomChoice]==='scissors')
  {
    result='You lose';
    setVideo("videoID",'paper scissors.mp4'); 
  }
  else if(choise==='scissors' && computerChoice[randomChoice]==='paper')
  {
    result='You win';
    setVideo("videoID",'scissors paper.mp4'); 
  }
  else if(choise==='rock' && computerChoice[randomChoice]==='paper')
  {
    result='You lose';
    setVideo("videoID",'rock paper.mp4'); 
  }
  else
  {
    result='Draw';
  }
  score= JSON.parse(localStorage.getItem('score'));
  if(!score) //empty
  {
    score={
      wins:0,
      losses:0, 
      Draw:0,
      Tries:0
    };
  }

  /*update score */
  if(result==='You win')
    {
      score.wins=score.wins+1;
    }
    else if(result==='You lose')
    {
      score.losses=score.losses+1;
    }
    else
    {
      score.Draw=score.Draw+1;
    }
    score.Tries=score.Tries+1;


  /* update display results */
  result='you choose ' +choise+ ' and computer choose ' + computerChoice[randomChoice]+' result:'+ result;
  let temp=document.getElementById('result');

  temp.textContent = result;

  temp=document.getElementById('scoreID');

  temp.textContent='Wins' + score.wins + ', Losses:'+score.losses + ', Draws:'+score.Draw+', Tries:'+score.Tries;

  /*permenant storage */
  localStorage.setItem('score', JSON.stringify(score));
};
