/*
  PRIMERA PARTE
  ejercicio que comprueba jQuery este bien linkeado

if(jQuery){
  alert("JQuery esta Instalado")
}

*/


//HACIENDO REFERENCIA A ELEMENTOS DENTRO DE JS


/*
$(".circulo").click(function(){

  alert("Clickeaste un circulo");

});

*/
/*
$("#cuadrado").click(function(){

  alert("Clickeaste un cuadrado");

});
*/

/*

$("div").click(function(){

  alert("Clickeaste un div");

});

*/

/*
//OBTENIENDO CONTENIDO DE ETIQUETAS HTML

$(".circulo").click(function(){
  alert("algo");
  $("p").html("otro texto");
});

*/

/*

  UTILIZANDO UN HOVER

$(".circulo").hover(function(){

  $("p").html("otro texto");
});

*/

/*

//ACCEDEMOS A LOS VALORES DE LOS ATRIBUTOS DE ETIQUETAS

$(".circulo").hover(function(){

  $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
});

*/

/*

CSS ELEMENTS

$("div").click(function(){
  //$(this).css("width","400px");
  //$(this).hide();
  $(this).fadeOut();
})


*/

/*

//ACCION CUANDO TERMINA CIERTA FUNCION

$("div").click(function(){
  $(this).fadeOut(function(){
    alert("termino el fadeOut")
  });
})

*/

/*


*/



$(".circulo").click(function(){

  $(this).animate({
    width:"300px",
    height:"300px"
  },1200);
});
