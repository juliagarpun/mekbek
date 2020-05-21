/*trigger mi cuenta*/
$("span.micuent").click(function(){
  console.log("click");
  $("p.welcome em a").trigger("click");
  console.log($("p.welcome em a.logueado").attr("href"))  
  

  
});



/*cambiar link a mi-cuenta si esta logueado*/
/*var link = $("p.welcome em a").attr('href');

if (link=="/no-cache/user/logout") {
	console.log("tiene link")
	$("p.welcome em a").attr('href',"/mi-cuenta");
}else{
	console.log("no tiene link")

}*/

jQuery(document).ready(function($){
	agregarcheck();
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {

        // mobile code here
    console.log("si es ios");
        $(".dividir.dos .box-banner a").attr('href',"https://apps.apple.com/mx/app/oster-m%C3%A9xico/id1479885555");
        $(".dividir.dos .box-banner a").attr('target',"_blank");
        $("footer .compromiso .container a").attr('href',"https://apps.apple.com/mx/app/oster-m%C3%A9xico/id1479885555");
        $("footer .compromiso .container a").attr('target',"_blank");
 
    }else{
        console.log("no es ios");
        // $(".dividir.dos .box-banner a").attr('href',"https://play.google.com/store/apps/details?id=com.lebensoftware.oster");
        // $(".dividir.dos .box-banner a").attr('target',"_blank");
        // $("footer .compromiso .container a").attr('href',"https://play.google.com/store/apps/details?id=com.lebensoftware.oster");
        // $("footer .compromiso .container a").attr('target',"_blank");
        var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false; 
            if(isMacLike){
                $(".dividir.dos .box-banner a").attr('href',"https://apps.apple.com/mx/app/oster-m%C3%A9xico/id1479885555");
                $(".dividir.dos .box-banner a").attr('target',"_blank");
                $("footer .compromiso .container a").attr('href',"https://apps.apple.com/mx/app/oster-m%C3%A9xico/id1479885555");
                $("footer .compromiso .container a").attr('target',"_blank"); 
            }else{
                $(".dividir.dos .box-banner a").attr('href',"https://play.google.com/store/apps/details?id=com.lebensoftware.oster");
                $(".dividir.dos .box-banner a").attr('target',"_blank");
                $("footer .compromiso .container a").attr('href',"https://play.google.com/store/apps/details?id=com.lebensoftware.oster");
                $("footer .compromiso .container a").attr('target',"_blank");
            }       
    }
    
});

function agregarcheck() {


  if ($('#vtexIdUI-email-confirmation').length == 1){

        $('.form-vertical').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
        $('.form-vertical').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")
        $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
        $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")
    

  }


}


    /*owlCarousel*/

    //para banners
    $('.owl-banner').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:7000,
        nav: false,
        dots: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // para items
    $('.owl-mas-buscados').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 3,
                autoWidth: false
            },
            350: {
                items: 3
            },
            609: {
                items: 4
            }
        }
    });



/*carrusel productos*/
$('.helperComplement').remove();

$(".destacados .itemProduct ul").addClass("owl-theme owl-carousel owl-destacados");

$('.owl-destacados').owlCarousel({
    loop:false,
   margin:10,
   responsive:{
       0:{
           items:1, 
         nav: false,
         dots: true
       },
       600:{
           items:2,
         nav: false,
         dots: true
       },
       900:{
           items:3,
         dots: false,
         nav: true
       },
       1200:{
           items:4,
         dots: false,
         nav: true
       }
   }
});



    /*cerrar owlCarousel*/




    //menu mobile nuevo
    var clase_antigua = "";
    var cambiaso = 0;


    function myFunction() {
        var elemento = document.getElementById("menuMobl");
        console.log(elemento.className);
        console.log(cambiaso);

        if(cambiaso != 1){

            clase_antigua = elemento.className;
            cambiaso = 1;
            elemento.className += " nmobile";
        }else{
            cambiaso = 0;
            elemento.className = "";
            elemento.className += clase_antigua;
            clase_antigua = "";
        }
    }
    //menu mobile nuevo



/*MOVER PAISES*/
    var clase_antigua2 = "";
    var cambiaso2 = 0;

    //menu mobile nuevo
    function myFunction2() {
        var elemento2 = document.getElementById("d_paises");
        console.log(elemento2.className);
        console.log(cambiaso2);

        if(cambiaso2 != 1){

            clase_antigua2 = elemento2.className;
            cambiaso2 = 1;
            elemento2.className += " mostrar";
        }else{
            cambiaso2 = 0;
            elemento2.className = "";
            elemento2.className += clase_antigua2;
            clase_antigua2 = "";
        }
    }
/*MOVER PAISES*/


/*MENU MOBILE*/
function cambiarDiv(id){
    console.log("gaaa"+id);

    var valor=id;
    console.log("valor--"+valor);

    if (valor=="1") {
        document.getElementById("mostrar1").style.display = "block";
        document.getElementById("mostrar2").style.display = "none";
        document.getElementById("mostrar3").style.display = "none";
        document.getElementById("mostrar4").style.display = "none";
        document.getElementById("mostrar5").style.display = "none";
        document.getElementById("mostrar6").style.display = "none";
    } else if (valor=="2") {
        document.getElementById("mostrar2").style.display = "block";
        document.getElementById("mostrar1").style.display = "none";
        document.getElementById("mostrar3").style.display = "none";
        document.getElementById("mostrar4").style.display = "none";
        document.getElementById("mostrar5").style.display = "none";
        document.getElementById("mostrar6").style.display = "none";

    } else if (valor=="3") {
        document.getElementById("mostrar3").style.display = "block";
        document.getElementById("mostrar1").style.display = "none";
        document.getElementById("mostrar2").style.display = "none";
        document.getElementById("mostrar4").style.display = "none";
        document.getElementById("mostrar5").style.display = "none";
        document.getElementById("mostrar6").style.display = "none";

    } else if (valor=="4") {
        document.getElementById("mostrar4").style.display = "block";
        document.getElementById("mostrar1").style.display = "none";
        document.getElementById("mostrar3").style.display = "none";
        document.getElementById("mostrar2").style.display = "none";
        document.getElementById("mostrar5").style.display = "none";
        document.getElementById("mostrar6").style.display = "none";

    } else if (valor=="5") {
        document.getElementById("mostrar5").style.display = "block";
        document.getElementById("mostrar1").style.display = "none";
        document.getElementById("mostrar3").style.display = "none";
        document.getElementById("mostrar4").style.display = "none";
        document.getElementById("mostrar2").style.display = "none";
        document.getElementById("mostrar6").style.display = "none";

    } else if (valor=="6") {
        document.getElementById("mostrar6").style.display = "block";
        document.getElementById("mostrar1").style.display = "none";
        document.getElementById("mostrar3").style.display = "none";
        document.getElementById("mostrar4").style.display = "none";
        document.getElementById("mostrar5").style.display = "none";
        document.getElementById("mostrar2").style.display = "none";

    } else {

    }

}

 $(".contenedor .b").click(function(){  
        $(".menupadre.b").toggleClass("muestra");  
         $(".contenedor .b").toggleClass("menos");
 });  
 $(".contenedor .g").click(function(){  
        $(".menupadre.g").toggleClass("muestra"); 
        $(".contenedor .g").toggleClass("menos");
 }); 
 $(".contenedor .i").click(function(){  
        $(".menupadre.i").toggleClass("muestra");
        $(".contenedor .i").toggleClass("menos");
 }); 

$('.busca .fulltext-search-box').val("Buscar");
$(".paises .close").click(function(){
  $(".paises").removeClass("mostrar");
});

$( ".busca .fulltext-search-box" ).click(function() {
     $('.busca .fulltext-search-box').val("");
  console.log("demo");
});

/*filtro*/
$(".modulo.listado .col-2 .main .sub .orderBy select").val("seleccione");