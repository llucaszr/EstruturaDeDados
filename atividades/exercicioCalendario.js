const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ano = 2025;

function bissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

if (bissexto(ano)) diasMes[1] = 29;

function gerarLinhasMes(mes) {
  let linhas = [];
  let primeiraSemana = "";
  let primeiroDia = new Date(ano, mes, 1).getDay();

  for (let i = 0; i < primeiroDia; i++) primeiraSemana += "    ";

  for (let dia = 1; dia <= diasMes[mes]; dia++) {
    primeiraSemana += dia.toString().padStart(3, " ") + " ";
    primeiroDia++;
    if (primeiroDia % 7 === 0) {
      linhas.push(primeiraSemana);
      primeiraSemana = "";
    }
  }
  if (primeiraSemana !== "") linhas.push(primeiraSemana);
  return linhas;
}

for (let i = 0; i < 12; i += 2) {
  console.log(`\t\t${meses[i]}${" ".repeat(20)}${meses[i + 1]}`);
  console.log(diasSemana.join(" ") + "    " + diasSemana.join(" "));

  let linhas1 = gerarLinhasMes(i);
  let linhas2 = gerarLinhasMes(i + 1);
  let maxLinhas = Math.max(linhas1.length, linhas2.length);

  for (let j = 0; j < maxLinhas; j++) {
    let l1 = linhas1[j] ? linhas1[j] : "                    ";
    let l2 = linhas2[j] ? linhas2[j] : "";
    console.log(l1 + "    " + l2);
  }
  console.log("\n");
}
