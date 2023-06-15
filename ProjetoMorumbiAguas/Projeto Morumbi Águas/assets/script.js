/* VARIÁVEIS */
let tamanhoTela = document.querySelector("body").clientWidth
let fornecedoresContainer = document.querySelector(".fornecedores-container")
let indexSlideAtual = 0



/* FUNÇÕES */
function ativarSlide(){
    fornecedoresContainer.style.marginLeft = `calc(-100vw*0.75*${indexSlideAtual})`
    indexSlideAtual < 5 ? indexSlideAtual++ : indexSlideAtual = 0
}



if(tamanhoTela < 770){
    setInterval(ativarSlide, 1500)
}



/* EVENTOS */
