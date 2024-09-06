const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como o uso das redes sociais influencia a maneira como os estudantes interagem com seus colegas?"
        alternativas: [
            {
                texto: " Facilita a comunicação e o estabelecimento de amizades, permitindo interações mais frequentes e diversificada"
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Pode criar barreiras para interações presenciais, substituindo o tempo que poderia ser gasto em atividades sociais no mundo real"
            
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Qual é o impacto dos aplicativos de mensagens instantâneas na dinâmica dos grupos de estudo?"

        
        alternativas: [
            {
                texto: "Melhora a coordenação e o compartilhamento de informações, facilitando a colaboração e a resolução de dúvidas..",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Pode levar a distrações e a conversas paralelas que afetam a produtividade e o foco do grupo.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "De que forma a tecnologia afeta o equilíbrio entre o tempo dedicado aos estudos e ao lazer para os estudantes?",
        alternativas: [
            {
                texto: "Permite que os estudantes acessem recursos educacionais e de entretenimento simultaneamente, ajudando a gerenciar melhor o tempo.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Pode provocar procrastinação e reduzir o tempo efetivo de estudo, com maior envolvimento em atividades de lazer online."
                
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Como as plataformas de aprendizado online afetam as relações sociais entre estudantes?"
        alternativas: [
            {
                texto: "Oferece oportunidades para interação com colegas de diferentes escolas e regiões, ampliando as redes sociais dos estudantes.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: " Reduz o contato físico e a formação de laços pessoais profundos, limitando as experiências sociais diretas.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Qual é o efeito da exposição constante a conteúdo digital na saúde mental e nas relações sociais dos estudantes?",
        alternativas: [
            {
                texto: ". Pode promover uma maior conexão com amigos e suporte emocional, contribuindo para uma rede de apoio.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: " Pode levar a sentimentos de isolamento, ansiedade e comparação social, prejudicando a saúde mental e as relações pessoais.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
