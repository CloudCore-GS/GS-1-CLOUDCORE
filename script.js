// TROCA DO TEMA
const temaClaroBtn = document.querySelector("#tema-claro")
const temaEscuroBtn = document.querySelector("#tema-escuro")
const temaEspacialBtn = document.querySelector("#tema-espacial")

// Aplica o tema claro ao clicar 
temaClaroBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#ffffff'
    document.querySelector('body').style.color = '#000000'
})

// Aplica o tema escuro ao cliclar
temaEscuroBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#1a1a1a'
    document.querySelector('body').style.color = '#ffffff'
})

// Aplicar o tema espacial ao clicar
temaEspacialBtn.addEventListener('click', function() {
    document.querySelector('body').style.background = '#0a0a2e'
    document.querySelector('body').style.color = '#00ffff'
})

// SLIDESHOW
// Array com os caminhos das imagens do slideshow
const imagens = [
    'imagens/slide1.jpg',
    'imagens/slide2.jpg',
    'imagens/slide3.jpg'
]

// Array com as lagendas correspondentes a cada imagem
const legendas = [
    'Enchente monitorada por satélite',
    'Queimada monitorada por satélite',
    'Satélites em órbita terrestre'
]

let indiceSlide = 0

// Seleciona os elementos do slideshow no HTML
const imgSlide = document.querySelector('#imagem-slide')
const legendaSlide = document.querySelector('#legenda-slide')
const btnAnterior = document.querySelector('#btn-anterior')
const btnProximo = document.querySelector ('#btn-proximo')

imgSlide.src = imagens[0]
imgSlide.alt = legendas[0]
legendaSlide.textContent = legendas[0]

function atualizarSlide() {
    imgSlide.style.opacity = '0'
    setTimeout(function() {
        imgSlide.src = imagens[indiceSlide]
        imgSlide.alt = legendas[indiceSlide]
        legendaSlide.textContent = legendas[indiceSlide]
        imgSlide.style.opacity = '1'
    }, 500)
}

btnProximo.addEventListener('click', function() {
    indiceSlide = indiceSlide + 1
    if (indiceSlide === imagens.length) {
        indiceSlide = 0
    }
    atualizarSlide()
})

btnAnterior.addEventListener('click', function() {
    indiceSlide = indiceSlide - 1
    if (indiceSlide < 0) {
        indiceSlide = imagens.length - 1
    }
    atualizarSlide()
})

//Troce de slide automaticamente a cada 5 segundos
setInterval(function() {
    indiceSlide = indiceSlide + 1
    if (indiceSlide === imagens.length) {
        indiceSlide = 0
    }
    atualizarSlide()
}, 3000)

// FORMULÁRIO COM VALIDAÇÃO
const btnEnviar = document.querySelector('#btn-enviar')
const feedbackForm = document.querySelector('#feedback-form')

btnEnviar.addEventListener('click', function() {
    const nome = document.querySelector('#nome').value.trim()
    const email = document.querySelector('#email').value.trim()
    const mensagem = document.querySelector('#mensagem').value.trim()

    if (nome === '' || email === '' || mensagem === '') {
        let camposVazios = []

        if (nome === '') camposVazios.push ('Nome')
        if (email === '') camposVazios.push('E-mail')
        if (mensagem === '') camposVazios.push('Mensagem')

        feedbackForm.textContent = 'Preencha os campos: ' + camposVazios.join(', ')
        feedbackForm.style.color = 'red'
        return
    }

    if (!email.includes('@') || !email.includes('.')) {
        feedbackForm.textContent = 'Digite um e-mail válido.'
        feedbackForm.style.color = 'red'
        return
    }

    feedbackForm.textContent = 'Mensagem enviada com sucesso!'
    feedbackForm.style.color = 'green'
})

// Seleciona os elementso do diagnóstico NDVI
const btnDiagnostico = document.querySelector('#btn-diagnostico')
const resultadoDiagnostico = document.querySelector('#resultado-diagnostico')

//Processa o diganóstico com base no valor NDVI informado
btnDiagnostico.addEventListener('click', function () {
    const regiao = document.querySelector('#regiao').value.trim()
    const ndviInput = document.querySelector('#ndvi').value.trim()

    // Verifica se os campos estão preenchidos 
    if (regiao === '' || ndviInput === '') {
        resultadoDiagnostico.textContent = 'Preencha todos os campos do diagnóstico.'
        resultadoDiagnostico.style.color = 'red'
        return
    }

    const ndvi = parseFloat(ndviInput)

    if(isNaN(ndvi) || ndvi < 0 || ndvi > 1) {
        resultadoDiagnostico.textContent = 'O índice NDVI deve ser um número entre 0.0 e 1.0'
        resultadoDiagnostico.style.color = 'red'
        return
    }

    //Exibição do diagnóstico com base no valor NDVI
    if(ndvi >= 0 && ndvi <= 0.4) {
        resultadoDiagnostico.textContent = '⚠️ ' + regiao + ': RISCO CRÍTICO. Vegetação extremamente seca.'
        resultadoDiagnostico.style.color =  '#ea580c'  
    } else if (ndvi > 0.4 && ndvi < 0.6) {
        resultadoDiagnostico.textContent = '⚠️ ' + regiao + ': ALERTA. Estresse hídrico moderado detectado.'
        resultadoDiagnostico.style.color = '#eab308'
    } else {
        resultadoDiagnostico.textContent = '✔️ ' + regiao + ': SEGURO. Vegetação densa e saudável.'
        resultadoDiagnostico.style.color = '#16a34a'
    }
})

// QUIZ
// Array de objetos com as perguntas, opções e índice da resposta correta

const perguntas = [
    {
        pergunta: 'Qual índice avalia a saúde da vegetação via satélite?',
        opcoes: ['NDVI', 'GPS', 'Fahrenheit', 'Celsius'],
        correta: 0
    },
    {
        pergunta: 'Quais satélites europeus ajudam na observação terrestre?',
        opcoes: ['Apollo', 'Sentinel', 'Sputnik', 'Hubble'],
        correta: 1
    },
    {
        pergunta: 'O que o sensoriamento remoto espacial mede nas plantas?',
        opcoes: ['Cheiro', 'Refletividade da luz', 'Sabor', 'Peso'],
        correta: 1
    },
    {
        pergunta: 'O desmatamento ilegal pode ser monitorado mesmo com nuvens usando...',
        opcoes: ['Telescópios ópticos', 'Radares SAR', 'Drones simples', 'Termômetros'],
        correta: 1
    },
    {
        pergunta: 'A agricultura de precisão usa satélites para evitar o desperdício de...',
        opcoes: ['Sementes sintéticas', 'Água e insumos', 'Tratores', 'Luz solar'],
        correta: 1
    },
    {
        pergunta: 'Satélites meteorológicos geoestacionários ficam...',
        opcoes: ['Fixos sobre o mesmo ponto da Terra', 'Mudando de órbita a cada hora', 'Pousados na Lua', 'Fora do sistema solar'],
        correta: 0
    },
    {
        pergunta: 'Qual ODS está diretamente relacionado à ação climática?',
        opcoes: ['ODS 1', 'ODS 7', 'ODS 13', 'ODS 17'],
        correta: 2
    },
    {
        pergunta: 'Qual instituto brasileiro opera satélites de monitoramento ambiental?',
        opcoes: ['IBGE', 'INPE', 'EMBRAPA', 'ANVISA'],
        correta: 1
    },
    {
        pergunta: 'O que os satélites de órbita baixa LEO fornecem para áreas isoladas?',
        opcoes: ['Combustível', 'Internet banda larga', 'Energia eólica', 'Sementes'],
        correta: 1
    },
    {
        pergunta: 'Qual agência espacial opera o satélite Landsat usado para monitoramento ambiental?',
        opcoes: ['ESA', 'NASA', 'INPE', 'SpaceX'],
        correta: 1
    }
]

let indicePergunta = 0
let acertos = 0

const perguntaEL = document.querySelector('#pergunta')
const opcoesEl = document.querySelector('#opcoes')
const resultadoEl = document.querySelector('#resultado-quiz')
const btnProximaPergunta = document.querySelector('#btn-proximo-pergunta')
const btnReiniciar = document.querySelector('#btn-reiniciar')

function carregarPergunta() {
    const atual = perguntas[indicePergunta]
    perguntaEL.textContent = (indicePergunta + 1) + '. ' + atual.pergunta
    opcoesEl.innerHTML = ''

    // Cria um botão para cada opção de resposta
    atual.opcoes.forEach(function(opcao, i) {
        const btn = document.createElement('button')
        btn.textContent = opcao
        btn.addEventListener ('click', function() {
            if (i === atual.correta) {
                acertos = acertos + 1
                resultadoEl.textContent = 'Correto!'
                resultadoEl.style.color = 'green'
                btn.style.background = 'green'
                btn.style.color = 'white'
            } else {
                resultadoEl.textContent = 'Errado!'
                resultadoEl.style.color = 'red'
                btn.style.background = 'red'
                btn.style.color = 'white'
            }

            const botoes = document.querySelectorAll('#opcoes button')
            botoes.forEach(function(b) {
                b.disabled = true
            })
            btnProximaPergunta.style.display = 'inline'
        })
        opcoesEl.appendChild(btn)
    })
}

btnProximaPergunta.addEventListener('click', function() {
    indicePergunta = indicePergunta + 1

    if (indicePergunta === perguntas.length) {
        perguntaEL.textContent = 'Quiz finalizado!'
        opcoesEl.innerHTML = ''
        resultadoEl.textContent = 'Você acertou ' + acertos + ' de ' + perguntas.length + ' perguntas.'
        resultadoEl.style.color = ''
        btnProximaPergunta.style.display = 'none'
        btnReiniciar.style.display = 'inline'
        return
    }

    resultadoEl.textContent = ''
    btnProximaPergunta.style.display = 'none'
    carregarPergunta()
})

carregarPergunta()

btnReiniciar.addEventListener('click', function() {
    indicePergunta = 0
    acertos = 0
    resultadoEl.textContent = ''
    btnReiniciar.style.display = 'none'
    btnProximaPergunta.style.display = 'none'
    carregarPergunta()
})