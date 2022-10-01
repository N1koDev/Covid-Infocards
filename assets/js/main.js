let url = 'https://api.covid19api.com/dayone/country/brazil';

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.status >= 200) {
      callback(xhr.response);
    } else {
      console.log("erro:" + xhr.status)
    }
  }
  xhr.send();
}

function retornaDados(data) {
  console.log(data[0]);
}

getJSON(url, retornaDados);