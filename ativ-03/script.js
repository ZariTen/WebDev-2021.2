let parametros = new URLSearchParams(location.search);
const artista = parametros.get("artista");
const musica = parametros.get("musica");

function xhttpAssincrono(callBackFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Chama a função em callback e passa a resposta da requisição
      callBackFunction(this.responseText);
    }
  };
  // Path para a requisição AJAX.
  var url = "https://api.lyrics.ovh/v1/";
  url += artista + "/" + musica;
  xhttp.open("GET", url, true);
  xhttp.send();
}

xhttpAssincrono(adicionarLetraDiv);
var musicaDiv = document.getElementById("letramusicaDiv");
function adicionarLetraDiv(letra) {
  letraJson = JSON.parse(letra);
  musicaDiv.innerHTML = "<pre>" + letraJson.lyrics + "</pre>";
}
