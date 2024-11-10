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
  //console.log('player pressed',playerPressed);
 
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet  = currentAlphabetElement .innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log (playerPressed,expectedAlphabet );

//check matched or not
if(playerPressed === expectedAlphabet ){
  console.log('you get a point');
// update score
// 1. get the current score
const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText)
console.log(currentScore);
 // 2. increase the score by 1
 const newScore = currentScore +1;

 // 3. show the update score
   currentScoreElement.innerText = newScore;

// start a new round  
 // console.log('you have pressed correctly', expectedAlphabet);
 removeBackgroundColorById(expectedAlphabet);
  continueGame();
}
else {
  console.log('you missed. you lost a life');
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
hideelementById('home-screen')
showelementById('play-ground')
continueGame( )
}

