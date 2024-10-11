const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Sabeis vós que o mundo contém <span>${pessoasNoMundo} bilhões</span> de almas, e que cerca de <span>${pessoasConectadas} bilhões</span> estão entrelaçadas em alguma rede social, permanecendo, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas?<br>Isso implica que, aproximadamente, <span>${porcentagemConectada}%</span> das gentes se encontram ligadas em alguma rede social.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
