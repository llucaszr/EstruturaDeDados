const diaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
const dias = 30;

let calendario = "";
for (let i = 0; i < diaSemana.length; i++) {
  calendario += diaSemana[i] + " ";
}
calendario += "\n";

for (let i = 1; i <= dias; i++) {
  if (i < 10) {
    calendario += " " + i + " ";
  } else {
    calendario += i + " ";
  }

  if (i % 7 === 0) {
    calendario += "\n";
  }
}
console.log(calendario);
