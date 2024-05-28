function somarNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado = numero1+numero2
    //alert(resultado)
    var teste = document.getElementById("resultadoSoma")
    teste.innerHTML=resultado
}

function subitrairNumeros(){
    var numero3 = parseInt(document.getElementById("num3").value);
    var numero4 = parseInt(document.getElementById("num4").value);
    var resultado = numero3-numero4
    //alert(resultado)
    var teste = document.getElementById("resultadoSubitracao")
    teste.innerHTML=resultado
}

function multiplicarNumeros(){
    var numero5 = parseInt(document.getElementById("num5").value);
    var numero6 = parseInt(document.getElementById("num6").value);
    var resultado = numero5*numero6
    //alert(resultado)
    var teste = document.getElementById("resultadoMultiplicacao")
    teste.innerHTML=resultado
}

function dividirNumeros(){
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var resultado = numero7/numero8
    //alert(resultado)
    var teste = document.getElementById("resultadoDivisao")
    teste.innerHTML=resultado
}
