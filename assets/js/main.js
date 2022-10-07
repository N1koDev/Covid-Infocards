let url = 'https://api.covid19api.com/dayone/country/brazil';

function callAPI(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url, true);
  xhr.onload = function(){
    if(xhr.status === 200){
      callback(xhr.status, xhr.response);
    }
    else {
      alert('Problemas ao conectar com o servidor!')
    }
  }
  xhr.send();
}

const dataAPI = document.querySelector('[data-info="data"]')
const casosAPI = document.querySelector('[data-info="casos"]')
const deathsAPI = document.querySelector('[data-info="deaths"]')

callAPI(url, function(status, data){
  index = (data.length - 1)
  console.log(data[index])

  let date = data[index].Date;
  let dia = new Date(data[index].Date);
  console.log(data[index].Date)
  console.log(dia)
  let mortes = data[index].Deaths;
  let diaEvento = (dia.getDate() + 1) + "/" + (1 + dia.getMonth()) + "/" + dia.getFullYear();
  let casos = data[index].Confirmed;

  dataAPI.textContent = diaEvento;
  casosAPI.textContent = casos;
  deathsAPI.textContent = mortes;

});