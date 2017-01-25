$(document).ready(function(){

  var imagenes = ['img/im1.jpg','img/im2.jpg','img/im3.jpg','img/im4.jpg','img/im5.jpg'];

  $(".imgFondo").css('background-image','url('+ imagenes[Math.floor(Math.random()*5)]+ ')');


 $("#mandar").click(function(){

   var direccion = $("#direc").val();




  //document.write(direccion);
  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion +'&key=AIzaSyBKS9Qjy7TmakZ1nG9zejDMmt6jd72XmTA';

  $.ajax({
    dataType: "json",
    url: link,
    success:recibirDatos
  });

  function recibirDatos(json){
    var informacion = json;
    var codigoPostal= informacion.results[0].address_components[6].long_name;

    $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-4"><h6>Tu codigo postal es:   ' +codigoPostal+' </h6></div>')
  }



 });

});
