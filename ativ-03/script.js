var artista = "";
var musica = "";

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

var musicaDiv = document.getElementById("letramusicaDiv");
function adicionarLetraDiv(letra) {
  letraJson = JSON.parse(letra);
  musicaDiv.innerHTML = "<pre>" + letraJson.lyrics + "</pre>";

  let key = artista.toLowerCase();
  let value = musica.toLowerCase();
  if(localStorage.getItem(key) === null){
     localStorage.setItem(key,value);
  } else {
     let musicas = localStorage.getItem(key);
     if(!musicas.includes(value)){
        localStorage.setItem(key, musicas + " | " + value);
     }

  }
}

const artistaInput = document.getElementById("artistaInput");
const musicaInput = document.getElementById("musicaInput");

function pesquisarLetra(){
  artista = artistaInput.value;
  musica = musicaInput.value;
  if(artista == "" || musica == "") { return;}
  xhttpAssincrono(adicionarLetraDiv);

}
