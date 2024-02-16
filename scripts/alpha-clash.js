// function play(){
// //step-1    hide home screen
// const homeScreen = document.getElementById('home-screen');
// const addClasshome = homeScreen.classList.add('hidden');
// console.log(addClasshome);
// // step-2 show playground
// const playGround =document.getElementById('play-ground');
// const removeClassGround= playGround.classList.remove('hidden');
// console.log(removeClassGround);
// }
   

 function keyboardButton(event){
   const playerPressded = event.key;
  

   const expectPress = document.getElementById('current-alphabet');
   const expectPressAlphabet = expectPress.innerText;
   const expectPressCurrentAlphabet =expectPressAlphabet.toLowerCase();
   

   if(playerPressded === expectPressCurrentAlphabet){
    console.log('you won');
 

    const currentScore = getElemenetById('current-score');
const updateScore = currentScore + 1;
setElemenetById('current-score' , updateScore);


    // const currentScore = document.getElementById('current-score');
    // const currentScoreValue = currentScore.innerText;
    // const currentValue = parseInt(currentScoreValue);
    // console.log(currentValue);
// const curretScore = document.getElementById('current-score');
    // const newScore =currentValue+1;
    currentScore.innerText =newScore;

   removeColor(expectPressCurrentAlphabet);
    showGame();
   }
    else{
        console.log('you lost');

        const currenLife = getElemenetById('life');
        const updateLife = currenLife - 1;
        setElemenetById('life' , updateLife);
        // const currentLife = document.getElementById('life');
        // const currentlifeValue = currentLife.innerText;
        // const currentValueText = parseInt(currentlifeValue);

        // const newLife = currentlifeValue-1;

        // currentLife.innerText =newLife;
    }
   
 }

document.addEventListener('keyup',keyboardButton);

function showGame(){
const getAlphabets = getRandomAlphabet();
// console.log(getAlphabets);

const currentAlphabetAll = document.getElementById('current-alphabet');
currentAlphabetAll.innerText = getAlphabets;

highlightColor(getAlphabets);
}

function play(){
    hideElementId('home-screen');
    showElementId('play-ground');
    showGame()
}
 