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
  for (let index = 0; index < data.length; index += 30) {
    console.log(data[index])
    let dia = new Date(data[index].Date);
    mortes = data[index].Deaths;
    diaEvento = dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear();
    casos = data[index].Confirmed;
    saida = `Mortes:${mortes} data:${diaEvento} Casos confirmados:${casos} <BR> <BR>`;
    cartoes.push(saida)

  };
  html.innerHTML = cartoes;
}




getJSON(url, retornaDados); //puxar com um botão