// ==================== ACESSIBILIDADE ====================
// Selecionando elementos do DOM
const botaoAcessibilidade = document.getElementById('btn-acessibilidade');
const menuAcessibilidade = document.getElementById('menu-acessibilidade');
const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
const altoContrasteBtn = document.getElementById('alto-contraste');

let tamanhoFonteAtual = 100; // porcentagem

// Abrir/fechar menu de acessibilidade
botaoAcessibilidade.addEventListener('click', () => {
    menuAcessibilidade.classList.toggle('escondido');
});

// Aumentar fonte
aumentarFonteBtn.addEventListener('click', () => {
    if (tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 10;
        document.body.style.fontSize = tamanhoFonteAtual + '%';
    }
});

// Diminuir fonte
diminuirFonteBtn.addEventListener('click', () => {
    if (tamanhoFonteAtual > 70) {
        tamanhoFonteAtual -= 10;
        document.body.style.fontSize = tamanhoFonteAtual + '%';
    }
});

// Alto contraste
altoContrasteBtn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// ==================== FUNCIONALIDADE PRINCIPAL: QUESTIONÁRIO ====================
const botaoAvaliar = document.getElementById('btn-avaliar');
const resultadoDiv = document.getElementById('resultado-questionario');

// Função para calcular a pontuação do usuário
function calcularPontuacao() {
    // Pegando os valores das perguntas (0, 1 ou 2)
    const p1 = parseInt(document.getElementById('pergunta1').value);
    const p2 = parseInt(document.getElementById('pergunta2').value);
    const p3 = parseInt(document.getElementById('pergunta3').value);
    const p4 = parseInt(document.getElementById('pergunta4').value);
    const p5 = parseInt(document.getElementById('pergunta5').value);

    // Verificar se todas as perguntas foram respondidas
    if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4) || isNaN(p5)) {
        alert('Por favor, responda todas as perguntas antes de avaliar!');
        return null;
    }

    const pontuacaoTotal = p1 + p2 + p3 + p4 + p5;
    return pontuacaoTotal;
}

// Função para gerar a mensagem com base na pontuação
function gerarMensagem(pontuacao) {
    if (pontuacao <= 2) {
        return {
            titulo: '🌟 Excelente! Você é um guardião da água!',
            mensagem: 'Parabéns! Seus hábitos são muito sustentáveis. Continue assim e ajude a conscientizar outras pessoas sobre a importância da água.',
            dica: 'Compartilhe suas práticas com vizinhos e familiares.'
        };
    } else if (pontuacao <= 5) {
        return {
            titulo: '💚 Bom trabalho! Mas ainda pode melhorar.',
            mensagem: 'Você já tem alguns cuidados, mas ainda desperdiça água em algumas situações. Com pequenas mudanças, você pode economizar muito!',
            dica: 'Que tal começar fechando a torneira ao escovar os dentes e reduzindo o tempo do banho?'
        };
    } else {
        return {
            titulo: '⚠️ Atenção! Seu consumo de água está alto.',
            mensagem: 'Você desperdiça água com frequência sem perceber. Isso prejudica o meio ambiente e aumenta seus gastos. Está na hora de mudar!',
            dica: 'Verifique vazamentos, reutilize água sempre que possível e reduza o tempo no banho. A natureza agradece!'
        };
    }
}

// Evento do botão para mostrar o resultado
botaoAvaliar.addEventListener('click', () => {
    const pontuacao = calcularPontuacao();
    
    if (pontuacao !== null) {
        const resultado = gerarMensagem(pontuacao);
        
        // Exibir o resultado na tela
        resultadoDiv.style.display = 'block';
        resultadoDiv.innerHTML = `
            <h3>${resultado.titulo}</h3>
            <p>${resultado.mensagem}</p>
            <p><strong>💡 Dica personalizada:</strong> ${resultado.dica}</p>
            <p><small>Sua pontuação: ${pontuacao} de 10 (quanto menor, melhor)</small></p>
        `;
        
        // Rolar suavemente até o resultado
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// ==================== PEQUENO DETALHE: Fechar menu de acessibilidade ao clicar fora (opcional)
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuAcessibilidade.contains(event.target);
    const isClickOnButton = botaoAcessibilidade.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnButton && !menuAcessibilidade.classList.contains('escondido')) {
        menuAcessibilidade.classList.add('escondido');
    }
});

// Mensagem de boas-vindas no console para o desenvolvedor
console.log('Projeto "Água que Alimenta" - Concurso Agrinho 2026');
