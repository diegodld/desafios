function formatDate(date) {
  var data = new Date(date);
  var dia = String(data.getDate()).padStart(2, "0");

  var mes = String(data.getMonth() + 1).padStart(2, "0");

  var ano = data.getFullYear();

  var dataAtual = dia + "/" + mes + "/" + ano;
  return dataAtual;
}

function verificaValidade(dataFab, vencimento) {
  var date = new Date(dataFab);
  var dias = parseInt(vencimento.match(/\d/g).join("")); //Pega todos os numeros encontrados.
  date.setDate(date.getDate() + dias);
  if (date > new Date()) {
    console.log("Validade: " + formatDate(date));
    console.log("Produto dentro do prazo de validade");
    return true;
  } else {
    console.log("Validade: " + formatDate(date));
    console.log("Produto vencido");
    return false;
  }
}

const dt = new Date("2021-06-01T00:00:00-03:00");
const validade = "vence em 180 dias após a data de fabricação";

console.log("retorno: " + verificaValidade(dt, validade));
