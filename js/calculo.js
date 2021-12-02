function calculaMedia() {

    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota1 = parseFloat(nota1)
    var nota2 = parseFloat(nota2)
    var calculaMedia = ((nota1 + nota2)/2).toFixed(2)
    var elementoMedia = document.getElementById("mostrarNota")
    //elementoMedia.innerHTML = calculaMedia
  
    if (calculaMedia >= 5) {
      elementoMedia.innerHTML = "Parabéns, você foi aprovado! Sua média foi: " + calculaMedia
    } else {
      elementoMedia.innerHTML = "Infelizmente você foi reprovado. Sua média é: " + calculaMedia + " Estude a tabuada e depois a raiz quadrada!"
    }
  }