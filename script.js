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
const legendaSlide = document.querySelector('#legenda-slide')
const btnAnterior = document.querySelector('#btn-anterior')
const btnProximo = document.querySelector ('#btn-proximo')

imgSlide.src = imagens[0]
imgSlide.alt = legendas[0]
legendaSlide.textContent = legendas[0]

btnProximo.addEventListener('click', function() {
    indiceSlide = indiceSlide + 1
    if (indiceSlide === imagens.length) {
        indiceSlide = 0
    }
    imgSlide.src = imagens [indiceSlide]
    imgSlide.alt = legendas [indiceSlide]
    legendaSlide.textContent = legendas[indiceSlide]
})

btnAnterior.addEventListener('click', function() {
    indiceSlide = indiceSlide - 1
    if (indiceSlide < 0) {
        indiceSlide = imagens.length - 1
    }
    imgSlide.src = imagens[indiceSlide]
    imgSlide.alt = legendas[indiceSlide]
    legendaSlide.textContent = legendas[indiceSlide]
})

const btnEnviar = document.querySelector('#btn-enviar')
const feedbackForm = document.querySelector('#feedback-form')

btnEnviar.addEventListener('click', function() {
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const mensagem = document.querySelector('#mensagem').value

    if (nome === '' || email === '' || mensagem === '') {
        let camposVazios = []

        if (nome === '') camposVazios.push ('Nome')
        if (email === '') camposVazios.push('E-mail')
        if (mensagem === '') camposVazios.push('Mensagem')

        feedbackForm.textContent = 'Preencha os campos: ' + camposVazios.join(', ')
        feedbackForm.style.color = 'red'
        return
    }

    feedbackForm.textContent = 'Mensagem enviada com sucesso!'
    feedbackForm.style.color = 'green'
})

const perguntas = [
    {
        pergunta: 'Qual agência espacial opera o satélite Landsat, usado para monitoramento ambiental?',
        opcoes: ['ESA', 'NASA', 'INPE', 'SpaceX'],
        correta: 1
    },
    {
        pergunta: 'O que é sensoriamento remoto?',
        opcoes: ['Controle de satélites à distância','Coleta de dados sem contato direto com o objeto', 'Comunicação entre satélites', 'Monitoramento de temperatura'],
        correta: 1
    },
    {
        pergunta: 'Qual instituto brasileiro opera satélites de monitoramento ambiental?',
        opcoes: ['IBGE', 'INPE', 'EMBRAPA', 'ANVISA'],
        correta: 1
    },
    {
        pergunta: 'Qual fenômeno climático pode ser monitorado por satélite para emitir alertas de enchentes?',
        opcoes: ['Terremetos', 'Chuvas intensas', 'Maremotos', 'Erupções vulcânicas'],
        correta: 1
    },
    {
        pergunta: 'O que significa a sigla ODS?',
        opcoes: ['Objetivos de Desenvolvimento Sustentável', 'Organização de Dados Satelitais', 'Operação de Sistemas', 'Objetivos de Defesa Social'],
        correta: 0
    },
    {
        pergunta: 'Qual ODS está diretamente relacionado à ação climática?',
        opcoes: ['ODS 1', 'ODS 7', 'ODS 13', 'ODS 17'],
        correta: 2
    },
    {
        pergunta: 'Qual é a principal vantagem do monitoramento por satélite em áreas remotas?',
        opcoes: ['Menor custo de internet', 'Cobertura de regiões sem infraestrutura terrestre', 'Maior velocidade de Dados', 'Melhor qualidade de imagem'],
        correta: 1
    },
    {
        pergunta: 'Qual empresa opera a maior constelação de satélites atualmente?',
        opcoes: ['NASA', 'Blue Origin', 'SpaceX', 'Boeing'],
        correta: 2
    },
    {
        pergunta: 'O que são dados orbitais?',
        opcoes: ['Dados coletados por sensores em satélites em órbita', 'Dados de voos comerciais', 'Informações sobre órbitas de planetas', 'Registros de lançamentos de foguetes'],
        correta: 0
    },
    {
        pergunta: 'Qual tecnologia permite conectar regiões remotas à internet via satélites?',
        opcoes: ['Fibra óptica', 'LEO Satellite Internet', '5G', 'Cabo submarino'],
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

    atual.opcoes.forEach(function(opcao, i) {
        const btn = document.createElement('button')
        btn.textContent = opcao
        btn.addEventListener ('click', function() {
            if (i === atual.correta) {
                acertos = acertos + 1
                resultadoEl.textContent = 'Correto!'
                resultadoEl.style.color = 'green'
            } else {
                resultadoEl.textContent = 'Errado!'
                resultadoEl.style.color = 'red'
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
        resultadoEl.style.color = 'black'
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