"use strict";

// Cada ciclo tem 4 segundos para inspirar e 4 para expirar, sem retenção do ar.
const SEGUNDOS_POR_FASE = 4;
const TOTAL_CICLOS = 5;
const DURACAO = SEGUNDOS_POR_FASE * 2 * TOTAL_CICLOS;

const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoReiniciar = document.querySelector("#botao-reiniciar");
const circulo = document.querySelector("#circulo");
const faseVisual = document.querySelector("#fase-visual");
const contagem = document.querySelector("#contagem");
const statusRespiracao = document.querySelector("#status-respiracao");
const barra = document.querySelector("#barra-progresso");
const progresso = document.querySelector(".progress");
const ciclo = document.querySelector("#ciclo");
const tempoRestante = document.querySelector("#tempo-restante");

let estado = "pronto"; // pronto, executando, pausado ou concluido
let segundosDecorridos = 0;
let inicio = 0;
let intervalo = null;
let ultimaFase = -1;

// O relógio mede o tempo real para evitar o acúmulo de atrasos do temporizador.
function atualizar() {
  segundosDecorridos = Math.min((performance.now() - inicio) / 1000, DURACAO);
  const fase = Math.floor(segundosDecorridos / SEGUNDOS_POR_FASE);
  const inspirando = fase % 2 === 0;
  const fracao = (segundosDecorridos % SEGUNDOS_POR_FASE) / SEGUNDOS_POR_FASE;
  const cicloAtual = Math.min(Math.floor(fase / 2) + 1, TOTAL_CICLOS);

  barra.style.width = `${(segundosDecorridos / DURACAO) * 100}%`;
  progresso.setAttribute("aria-valuenow", String(Math.floor(segundosDecorridos)));
  tempoRestante.textContent = `${Math.ceil(DURACAO - segundosDecorridos)} s`;
  ciclo.textContent = `Ciclo ${cicloAtual} de ${TOTAL_CICLOS}`;

  if (segundosDecorridos >= DURACAO) {
    clearInterval(intervalo);
    intervalo = null;
    estado = "concluido";
    faseVisual.textContent = "Sua pausa";
    contagem.textContent = "Um momento de cuidado.";
    statusRespiracao.textContent = "Pausa concluída. Volte à sua respiração natural.";
    botaoIniciar.textContent = "Recomeçar pausa";
    circulo.style.setProperty("--breath-scale", ".88");
    return;
  }

  faseVisual.textContent = inspirando ? "Inspire" : "Expire";
  contagem.textContent = `${SEGUNDOS_POR_FASE - Math.floor(segundosDecorridos % SEGUNDOS_POR_FASE)} segundos`;
  circulo.style.setProperty("--breath-scale", String(.78 + .22 * (inspirando ? fracao : 1 - fracao)));

  // Leitores de tela recebem só a mudança de fase, sem anunciar cada contagem.
  if (fase !== ultimaFase) {
    statusRespiracao.textContent = `${inspirando ? "Inspire" : "Expire"} suavemente. Ciclo ${cicloAtual} de ${TOTAL_CICLOS}.`;
    ultimaFase = fase;
  }
}

function pausar() {
  atualizar();
  if (estado !== "executando") return; // Pode ter concluído no último instante.
  clearInterval(intervalo);
  intervalo = null;
  estado = "pausado";
  faseVisual.textContent = "Sem pressa";
  contagem.textContent = "Respire no seu ritmo.";
  statusRespiracao.textContent = "Atividade pausada. Continue quando quiser.";
  botaoIniciar.textContent = "Continuar pausa";
}

function iniciar() {
  if (estado === "concluido") segundosDecorridos = 0;
  estado = "executando";
  ultimaFase = -1;
  inicio = performance.now() - segundosDecorridos * 1000;
  botaoIniciar.textContent = "Pausar";
  botaoReiniciar.disabled = false;
  atualizar();
  intervalo = setInterval(atualizar, 100);
}

function reiniciar() {
  clearInterval(intervalo);
  intervalo = null;
  estado = "pronto";
  segundosDecorridos = 0;
  ultimaFase = -1;
  faseVisual.textContent = "No seu ritmo";
  contagem.textContent = "Inspire. Expire.";
  statusRespiracao.textContent = "Uma pausa de 5 ciclos. Comece quando quiser.";
  barra.style.width = "0%";
  progresso.setAttribute("aria-valuenow", "0");
  circulo.style.setProperty("--breath-scale", ".78");
  ciclo.textContent = "5 ciclos de respiração";
  tempoRestante.textContent = "40 s";
  botaoIniciar.textContent = "Começar pausa";
  botaoReiniciar.disabled = true;
  botaoIniciar.focus();
}

botaoIniciar.disabled = false;
botaoIniciar.addEventListener("click", () => {
  if (estado === "executando") pausar();
  else iniciar();
});
botaoReiniciar.addEventListener("click", reiniciar);

// A pausa automática evita que o exercício avance quando a aba fica oculta.
document.addEventListener("visibilitychange", () => {
  if (document.hidden && estado === "executando") pausar();
});
