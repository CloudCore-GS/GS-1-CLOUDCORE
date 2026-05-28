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