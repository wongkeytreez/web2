let clickedyes = false;
function moveDiv() {
    if(Math.random()<0.3) return changediv();

    var moveableDiv = document.getElementById('notachoice');
    var screenWidth = window.innerWidth - 100; // Adjust for div width
    var screenHeight = window.innerHeight - 100; // Adjust for div height

    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    moveableDiv.style.left = randomX + 'px';
    moveableDiv.style.top = randomY + 'px';
    
}
function changediv(){
   var choice = document.getElementById('choice1');
   var nochoice = document.getElementById('notachoice');
   var choicex = choice.getBoundingClientRect().left;
   var choicey = choice.getBoundingClientRect().top;
   choice.style.left = nochoice.getBoundingClientRect().left+ 'px';
   choice.style.top = nochoice.getBoundingClientRect().top+ 'px';
   nochoice.style.left = choicex+"px";
   nochoice.style.top = choicey+"px"
    nochoice.classList.toggle('enlarge');
    choice.classList.toggle('enlarge');

    // Remove the 'enlarge' class after the transition is complete
    setTimeout(() => {
        nochoice.classList.remove('enlarge');
        choice.classList.remove('enlarge');
    }, 300); // 
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function yes(){
    if(clickedyes==true) return;
    clickedyes=true;
    var moveableDiv = document.getElementById('notachoice');
    setTimeout(() => {
    
    var screenWidth = window.innerWidth - 100; // Adjust for div width
    var screenHeight = window.innerHeight - 100; // Adjust for div height

    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    moveableDiv.style.left = randomX + 'px';
    moveableDiv.style.top = randomY + 'px';
    }, 600);
    setTimeout(() => {
    
    moveableDiv.remove();
  

    }, 2000);
    var nochoice = document.getElementById('choice1');
    var headingElement = nochoice.querySelector("p");
    
    words = ["... ","‎wh- ","‎what? ","‎huh? ","‎you werent supposed to do that..."]
    headingElement.textContent = "";
  for(x=0;x<words.length;x++){

    wordsnow = words[x].split("")
    for(y=0;y<wordsnow.length;y++){
      await  sleep(70)
    headingElement.textContent = headingElement.textContent + wordsnow[y]
    if(headingElement.textContent.split("").length>10)
   // console.log(headingElement.textContent.split(""))
    headingElement.textContent =headingElement.textContent.slice( 1 )
   }
   while(wordsnow.length<headingElement.textContent.length){await  sleep(70)
    headingElement.textContent =headingElement.textContent.slice( 1 )}
 
   await sleep(1200)
  }

}