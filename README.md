# Entre pausas · Setembro Amarelo

Aplicação web acadêmica de conscientização, apoio emocional e valorização da vida, desenvolvida em HTML5, CSS3 e JavaScript puro.

## Identificação

- Aluno(a): Rafael Rocha Rolim
- Turma: 3Ano A
- Disciplina: Desenvolvimento de Sistemas
- Site publicado: https://rrrolim.github.io/Setembro-Amarelo/

## Ideia do projeto

O nome “Entre pausas” representa um espaço para interromper a correria, encontrar uma escuta e conhecer caminhos de cuidado. A identidade usa verde suave e amarelo discreto, com letras legíveis e contraste entre texto e fundo.

O recurso interativo é uma pausa guiada de 40 segundos: cinco ciclos, cada um com quatro segundos para inspirar e quatro para expirar. É possível pausar, continuar e reiniciar. Ao sair da aba, a atividade pausa automaticamente. Não há cadastro nem armazenamento de dados pessoais.

## Requisitos atendidos

| Requisito | Implementação |
| --- | --- |
| Acesso destacado ao CVV | Link de ligação no cabeçalho e faixa de destaque com acesso ao site oficial |
| Recurso interativo de apoio | Respiração guiada com círculo, instruções, contagem e controles |
| Mapeamento de apoio | Informações sobre UBS, CAPS, clínicas-escola e instituição de ensino |
| Interface empática e responsiva | Cores suaves; layout adaptável; navegação por teclado; alternativa para menos movimento |
| Aviso obrigatório | Rodapé identifica o projeto acadêmico e informa que não substitui atendimento profissional |

## Arquivos

```text
setembro-amarelo/
├── index.html  → estrutura e conteúdo
├── style.css   → cores, organização, responsividade e animação
├── script.js   → lógica da respiração e eventos dos botões
└── README.md   → apresentação e instruções
```

## Como abrir

Baixe a pasta completa e abra `index.html` em um navegador. Mantenha o HTML, o CSS e o JavaScript juntos. Não é necessário instalar pacotes ou usar servidor. Os links externos precisam de internet. A ligação depende de um dispositivo ou aplicativo compatível com chamadas.

## Como o JavaScript funciona

1. `querySelector` encontra os elementos da página.
2. As constantes definem a duração de cada fase e o número de ciclos.
3. `estado` indica se o exercício está pronto, executando, pausado ou concluído.
4. `iniciar()` registra o horário e ativa o temporizador.
5. `atualizar()` calcula o tempo decorrido, alterna inspiração/expiração e atualiza o círculo e o progresso.
6. `pausar()` guarda o avanço; `reiniciar()` volta ao início.
7. `addEventListener` conecta os botões às funções e detecta quando a aba fica oculta.

O cálculo usa `performance.now()` para que pequenos atrasos do temporizador não se acumulem. O círculo acompanha a fase; as instruções em texto continuam funcionando quando a preferência de movimento reduzido está ativada.

## Publicação no GitHub Pages

1. Crie um repositório público chamado `setembro-amarelo`.
2. Envie os quatro arquivos desta pasta para a raiz do repositório. O `index.html` deve aparecer na primeira lista de arquivos.
3. Acesse **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch**. Em **Branch**, escolha **main** e **/ (root)**. Clique em **Save**.
5. Aguarde a publicação e copie o endereço indicado pelo GitHub.

Referências: [guia rápido do GitHub Pages](https://docs.github.com/en/pages/quickstart) e [criação de um site](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Verificação antes da entrega

- Preencha nome, turma e link publicado neste README.
- Leia e personalize o projeto para conseguir explicar suas escolhas.
- Confira a página no computador e no celular.
- Teste os controles da respiração e o acesso ao site do CVV.
- Abra o link publicado em uma janela anônima.
- Registre suas alterações com commits que descrevam o trabalho realizado.

## Referências de conteúdo

- [Ministério da Saúde — prevenção do suicídio](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao).
- [Ministério da Saúde — CAPS e Atenção Básica](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps).
- [CVV](https://www.cvv.org.br/?oai_link_source=model_response_hotline).
- [Exemplo de clínica-escola — UFC](https://psicologia.ufc.br/pt/graduacao/clinica-escola/).
- [Exemplo de acolhimento estudantil — UFC](https://prae.ufc.br/pt/dae/acolhimento/).

As ofertas de clínicas-escola e instituições variam; a página orienta a consultar os serviços locais, sem prometer vagas ou atendimento específico.

## Aviso

Este é um projeto acadêmico de conscientização. Não substitui atendimento psicológico, psiquiátrico ou de outro profissional de saúde mental. A atividade de respiração é opcional e não constitui tratamento.
