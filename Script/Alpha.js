// function play(){
//         // home hidden
//        const homeSection = document.getElementById('home-screen')
//         homeSection.classList.add('hidden');
//         console.log(homeSection)
    
//   //show the playground
//    const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     console.log(playgroundSection.classList)
    
// }
function continueGame(){
  const alphabet =getARandomAlphabet()
  console.log('your random alphabet', alphabet);

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText=alphabet

addBackgroundColorById(alphabet);


}
  
function play(){
hideelementById('home-screen')
showelementById('play-ground')
continueGame( )
}

