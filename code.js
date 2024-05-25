function darkmode (){
    icone = document.querySelector('ion-icon.claro');
    icone2 = document.querySelector('ion-icon.escuro');
    elemento = document.querySelector('html');
    elemento.classList.toggle('darkmode');
    icone.classList.toggle('darkmode_btn');
    icone2.classList.toggle('darkmode_btn');
}