/*
 * Função AJAX base do tipo assíncrona.
 * type é o tipo de objeto que você quer recuperar.
 * value é o valor do parâmetro para filtrar os resultados dos tipos 2, 3 e 4.
 * [Importante!] Você não pode, em nenhuma hipótese, alterar a função xhttpAssincrono.
 */
function xhttpAssincrono(callBackFunction, type, value) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Chama a função em callback e passa a resposta da requisição
      callBackFunction(this.responseText);
    }
  };
  // Path para a requisição AJAX.
  var url = "http://jsonplaceholder.typicode.com/";
  switch (type) {
    case 1:
      url += "users";
      break;
    case 2:
      url += "posts?userId=" + value;
      break;
    case 3:
      url += "todos?userId=" + value;
      break;
    case 4:
      url += "comments?postId=" + value;
      break;
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}
