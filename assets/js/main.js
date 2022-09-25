const url = "https://api.covid19api.com/dayone/country/brazil";




function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Dados Rebidos com sucesso!')
      callback(xhr.response);
    }
    else {
      console.log('Problema ao conectar com a API: ' + xhr.status);
    }

    xhr.send();
  }

  getJSON(url, function (data) {

  })

  getJSON(url, function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  })
}