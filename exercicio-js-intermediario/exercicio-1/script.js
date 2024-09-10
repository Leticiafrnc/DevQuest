const btnTrocaCor = document.getElementById('troca-de-cor')
const quadradoAzul = document.querySelector('.quadrado-azul')

btnTrocaCor.addEventListener("click", trocaCor)

function trocaCor() {
    quadradoAzul.classList.remove('quadrado-azul')
    quadradoAzul.classList.add('quadrado-amarelo')
}