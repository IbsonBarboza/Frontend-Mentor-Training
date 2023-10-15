const circles = document.querySelectorAll('.rating_circle')
const rating = document.querySelector('.rating_choice')
const submit = document.querySelector('.submit')


//Trocar de Pagina
function pag2click() {
    window.location.href = './pags/pag2.html'   
}

//Indentificar Botão
function identifyClickedButton(event) {
    const buttonClick = event.target.textContent;
    //Armazena o botão que foi clicado
    localStorage.setItem("buttonClick", buttonClick);
}

circles.forEach(function(circles) {
    circles.addEventListener("click", identifyClickedButton);
})

//Recupera o botão clicado que foi armazenado
const buttonClick = localStorage.getItem("buttonClick")
    if (buttonClick) {
        rating.innerHTML = `You selected ${buttonClick} out of 5`
    }
