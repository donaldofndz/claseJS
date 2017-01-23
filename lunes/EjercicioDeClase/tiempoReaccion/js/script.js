
document.getElementById("inicia").onclick=function(){

  //document.getElementById("inicio").style.display="none";

  var clickBoton = Date.now();

  function colorRandom(){
    var posibilidades = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += posibilidades[Math.floor((Math.random()*15))]
    }
    return color;
  }

  function alturaRandom(){

    resultado = Math.floor((Math.random()*600));
    return resultado;
  }

  function largoRandom(){

    resultado = Math.floor((Math.random()*95));
    return resultado;
  }

  function cambiaforma(){

    var numero = Math.floor((Math.random()*10));

    if(numero < 5){
      document.getElementById("objetivo").style.borderRadius = "50px";
    }

  }

  function cambiarTamano(){

    var numero = (Math.random()*3);

    document.getElementById("objetivo").style.transform = "scale("+numero+","+numero+")";

  }


  var largo = largoRandom();

  var altura = alturaRandom();

  var color = colorRandom();


  document.getElementById("objetivo").style.cssText = "background-color:" + color +";top:"+altura+"px;left:"+largo+"%;";

  cambiaforma();

  cambiarTamano();


  document.getElementById("objetivo").onclick=function(){

    var clickCuadrito = Date.now();

    var tiempoTardado = clickCuadrito - clickBoton;

    document.getElementById("tiempoReaccion").innerHTML= "Tu tiempo fue de: "+ tiempoTardado/1000 + "segundos";

    this.onclick = null;
  }


}
