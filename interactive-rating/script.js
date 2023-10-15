const circles = document.querySelectorAll('.rating_circle')
const rating = document.querySelector('.rating_choice')
const submit = document.querySelector('.submit')


//Identify Button
function identifyClickedButton(event) {
    const buttonClick = event.target.textContent;
    //Stores the button that was clicked
    localStorage.setItem("buttonClick", buttonClick);
}

circles.forEach(function(circles) {
    circles.addEventListener("click", identifyClickedButton);
})

//Retrieves the clicked button that was stored
const buttonClick = localStorage.getItem("buttonClick")
    if (buttonClick) {
        rating.innerHTML = `You selected ${buttonClick} out of 5`
    }
