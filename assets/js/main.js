let saida;
let url = 'https://api.covid19api.com/dayone/country/brazil';
let html = document.getElementById("descricao");

function getJSON(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.status >= 200) {
      retornaDados(xhr.response);
    } else {
      console.log("erro:" + xhr.status)
    }
  }
  xhr.send();
}

let cartoes = []
function retornaDados(data) {
  data.forEach(
    element => {
      saida = "Casos ativos:" + element.Active + "<BR>Mortes:" + element.Deaths + "<BR>Casos confirmados:" + element.Confirmed;
      cartoes.push(saida + "<BR>")
    });
  html.innerHTML = cartoes;
}

getJSON(url, retornaDados); //puxar com um botão