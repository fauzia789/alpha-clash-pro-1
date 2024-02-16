function hideElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');


}

function highlightColor(elementId){
const element=document.getElementById(elementId);
element.classList.add('bg-orange-400');
}
function removeColor(elementId){
const element=document.getElementById(elementId);
element.classList.remove('bg-orange-400');
}

function getElemenetById(elementId){
    const getElements = document.getElementById(elementId);
    const elementValue = getElements.innerText;
    const textValue = parseInt(elementValue);
    return textValue;
}

function setElemenetById(elementId , value){
    const element = document.getElementById(elementId);
   element.innerText = value;
}

function getRandomAlphabet(){
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz'
    const alphbets = alphabetStrings.split('');
  

    const numberRandom = Math.random()*25;
    const index = Math.round(numberRandom);
    

    const getAlphabets =alphbets[index];
  
    return getAlphabets;
}
