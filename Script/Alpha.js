// function play(){
//         // home hidden
//        const homeSection = document.getElementById('home-screen')
//         homeSection.classList.add('hidden');
//         console.log(homeSection)
    
//   //show the playground
//    const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     console.log(playgroundSection.classList)
//}

function handlekeybordButtonPress(event){
  const playerPressed = event.key;
  console.log('player pressed',playerPressed);

 // stop the game if pressed 'Esc'
  if(playerPressed === 'Escape'){
    gameOver();
}



 
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet  = currentAlphabetElement .innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log (playerPressed,expectedAlphabet );

//check matched or not
if(playerPressed === expectedAlphabet ){
  console.log('you get a point');

  const currentScore = getTextElementValueId('current-score');
  const updatedScore = currentScore + 1;
  setTextElementValueById('current-score', updatedScore);

















//---------------------------------------------------------------------- 
// update score
// 1. get the current score
const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
//const currentScore = parseInt(currentScoreText)
//console.log(currentScore);

//const currentScore = getTextElementValueId('current-score');

 // 2. increase the score by 1
 const newScore = currentScore +1;

 // 3. show the update score
  // currentScoreElement.innerText = newScore

// start a new round  
 // console.log('you have pressed correctly', expectedAlphabet);
 removeBackgroundColorById(expectedAlphabet);
  continueGame();
}
else {
  console.log('you missed. you lost a life');
   
 const currentLife =getTextElementValueId('current-life');
 const updatedLife  = currentLife - 1;
 setTextElementValueById('current-life', updatedLife);
  
 if(updatedLife === 0){
   gameOver();
}

  // step-1 get the current life number
  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText; 
  // const currentLife = parseInt(currentLifeText);

  // // step=2 reduce the life count
  // const newLife = currentLife -1;
  // //step-3 display the update life count
  // currentLifeElement.innerText = newLife;

}

}


// capture keybord key press
document.addEventListener('keyup', handlekeybordButtonPress);


function continueGame(){
  const alphabet =getARandomAlphabet()
  //console.log('your random alphabet', alphabet);

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText=alphabet

addBackgroundColorById(alphabet);


}
  
function play(){
  // hide and show the playgroud
hideelementById('home-screen');
hideelementById('final-score');
showelementById('play-ground');

// reset and life
setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0);

continueGame( );
}
function gameOver(){
  hideelementById('play-ground');
  showelementById('final-score');
  //update final score
  const lastscore = getTextElementValueId('current-score');
  console.log(lastscore);
  setTextElementValueById('game-score', lastscore);
// clear the last selected alphabet highlight

const currentAlphabet =  getElementTextById('current-alphabet');
//console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);

}
