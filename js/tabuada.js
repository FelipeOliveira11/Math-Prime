function recebeNumero() {
    var num1 = document.getElementById("num1").value
    var elementoNum = document.getElementById("mostrarNum")
    var pegaSelect = document.getElementById("seletor").value
    elementoNum.innerHTML = num1
    let resultado = ""
    var num1 = parseInt(num1)

    for (i=1; i<=10; i++) {
    
      // resultado = resultado + (num1 + "x" + i + "=" + (num1 * i) + "<br>")
      switch(pegaSelect)  {
        case "valor1":
          resultado = resultado + (num1 + "+" + i + "=" + (num1 + i) + "<br>")                
          ;
        break;

        case "valor2": 
          resultado = resultado + (num1 + "-" + i + "=" + (num1 - i) + "<br>");
        break;
        
        case "valor3":
          resultado = resultado + (num1 + "x" + i + "=" + (num1 * i) + "<br>");
        break;
        
        case "valor4": 
          resultado = resultado + (num1 + "/" + i + "=" + (num1 / i).toFixed(1) + "<br>");
        break;
        
        default:
          resultado = "Você deve selecionar uma operação"
      } 
        
    }

    elementoNum.innerHTML = resultado
}