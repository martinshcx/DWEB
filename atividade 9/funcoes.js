// 1) Recebe três números e retorna o maior
function maiorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

// 2) Recebe três números e retorna em ordem crescente
function ordemCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

// 3) Recebe uma string e retorna se é palíndromo ou não
function ehPalindromo(texto) {
  const limpo = texto.toLowerCase().replace(/\s+/g, "");
  const invertido = limpo.split("").reverse().join("");
  return limpo === invertido ? "É palíndromo" : "Não é palíndromo";
}

// 4) Recebe duas palavras e verifica se a segunda é subconjunto da primeira
function verificaSubconjunto(palavra1, palavra2) {
  const vazia = (p) => p === undefined || p === null || String(p).trim() === "";

  if (vazia(palavra1) || vazia(palavra2)) {
    return "erro";
  }

  const p1 = String(palavra1).trim().toLowerCase();
  const p2 = String(palavra2).trim().toLowerCase();

  return p1.includes(p2) ? "é um subconjunto" : "não é um subconjunto";
}

// 5) Recebe uma data e devolve o dia da semana
// Aceita "AAAA-MM-DD", "DD/MM/AAAA" ou um objeto Date
function diaDaSemana(data) {
  const dias = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira", "sábado",
  ];
  let d;

  if (data instanceof Date) {
    d = data;
  } else if (typeof data === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.trim())) {
    const [ano, mes, dia] = data.trim().split("-").map(Number);
    d = new Date(ano, mes - 1, dia); // data local (evita erro de fuso horário)
  } else if (typeof data === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(data.trim())) {
    const [dia, mes, ano] = data.trim().split("/").map(Number);
    d = new Date(ano, mes - 1, dia);
  } else {
    return "erro";
  }

  if (isNaN(d.getTime())) return "erro";
  return dias[d.getDay()];
}

// ---------- Funções chamadas pelos botões da página ----------
function testarMaior() {
  const a = Number(document.getElementById("n1").value);
  const b = Number(document.getElementById("n2").value);
  const c = Number(document.getElementById("n3").value);
  document.getElementById("res1").textContent = "Maior: " + maiorDeTres(a, b, c);
  document.getElementById("res2").textContent = "Crescente: " + ordemCrescente(a, b, c).join(", ");
}

function testarPalindromo() {
  const t = document.getElementById("texto").value;
  document.getElementById("res3").textContent = ehPalindromo(t);
}

function testarSubconjunto() {
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  document.getElementById("res4").textContent = verificaSubconjunto(p1, p2);
}

function testarDia() {
  const data = document.getElementById("data").value;
  document.getElementById("res5").textContent = diaDaSemana(data);
}
