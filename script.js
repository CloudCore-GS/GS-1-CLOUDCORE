const temaClaroBtn = document.querySelector("#tema-claro")
const temaEscuroBtn = document.querySelector("#tema-escuro")
const temaEspacialBtn = document.querySelector("#tema-espacial")

temaClaroBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#ffffff'
    document.querySelector('body').style.color = '#000000'
})

temaEscuroBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#1a1a1a'
    document.querySelector('body').style.color = '#ffffff'
})

temaEspacialBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#0a0a2e'
    document.querySelector('body').style.color = '#00ffff'
})

const imagens = [
    'imagens/slide1.jpg',
    'imagens/slide2.jpg',
    'imagens/slide3.jpg'
]

const legendas = [
    'Enchente monitorada por satélite',
    'Queimada monitorada por satélite',
    'Satélites em órbita terrestre'
]

let indiceSlide = 0

const imgSlide = document.querySelector('#imagem-slide')
const btnAnterior = document.querySelector('#btn-anterior')
const btnProximo = document.querySelector ('#btn-proximo')

imgSlide.src = imagens[0]
imgSlide.alt = legendas[0]

btnProximo.addEventListener('click', function() {
    indiceSlide = indiceSlide + 1
    if (indiceSlide === imagens.length) {
        indiceSlide = 0
    }
    imgSlide.src = imagens [indiceSlide]
    imgSlide.alt = legendas [indiceSLide]
})

btnAnterior.addEventListener('click', function() {
    indiceSlide = indiceSlide - 1
    if (indiceSlide < 0) {
        indiceSlide = imagens.length - 1
    }
    imgSlide.src = imagens[indiceSlide]
    imgSlide.alt = legendas[indiceSlide]
})


