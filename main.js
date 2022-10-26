const titleEl                = document.querySelector(`#title`);
const titleChangeColorButton = document.querySelector("#title-change-color-button");
const titleChangesizeButton  = document.querySelector("#title-change-size-button");


function changeTitleColor(){
   titleEl.setAttribute("class", "blue-text");
}

function fireColorClick() {
    titleChangeColorButton.addEventListener("click", changeTitleColor);
}


// Button to increase size a new class of 'large-size'
function changeTitleSize(){
    titleEl.setAttribute("class", "large-size");
 }

// Adding event listener to change size of title
function fireSizeClick() {
    titleChangesizeButton.addEventListener("click", changeTitleSize);
}


fireColorClick();
fireSizeClick();