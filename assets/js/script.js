$(function(){
///globos en btn///
  $('[title]').tooltip();

//btn-cambio de color/
  $("#btn-cambiarColor").click(function () {
   $("li").toggleClass("modo-color");
   });
   //btn-abrir y cerrar///
   $("#btn-esconder").click(function () {
    if ($('li').is(':visible')) {
      $('li').hide(1200);
      $("#btn-esconder").text("mostrar filas");
      
    } else {
      $('li').show(1200);
      $("#btn-esconder").text("esconder");
      
    }
  });
  /*desaparecer h1*/
  $("h1").hover(function  () {
    $("h1").fadeOut(8000);
  });
    $("p").hover(function () {
    if (!$(this).data("textoOriginal")) {
      $(this).data("textoOriginal", $(this).text());
    }
    $(this).text("dulce o truco 🎃");
  },
    function () {
      $(this).text($(this).data("textoOriginal"));
    }
  );

  //agregar parrafo
   $("#btn-agregar").click(function(){
    $("ul").append("<li>soy un parrafo </li>");
  });



});