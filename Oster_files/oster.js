  /* Uploaded on: 20 Dic, 2017 - 4:25pm */
/* cookie */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(a){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(void 0!==f&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)&&(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
//--*
//-- Smartresearch
var presaleProducts = {}
$(window).load(function(){

  agregarcheck();

/*agregar checks*/




    //Boton regresar al inicio pop-up
    $('#vtexIdContainer').append('<a href="/" class="overlayMicuenta"></a>');
    $('.vtexIdUI-providers-list').append('<a href="/" class="regHome"><i class="fa fa-home" aria-hidden="true"></i> Regresar al inicio</a>');
    $('#la-multi-oster br').css('display','none')
    $('#la-xp-oster-7003 br').css('display','none')

    /*eliminar vista rapida*/
    $(".thickbox").remove();
    console.log("holis");

    //cambiar link y target en primer banner
    //$(".box-banner.slick-slide:nth-child(1) a").attr("href","http://www.osterfest.mx");
    //$(".box-banner.slick-slide:nth-child(1) a").attr("target", "_blank");
    
});
$(document).ready(function(){




  //   $("input#notifymeClientName").attr("placeholder","Digita tu nombre");
  //   $("input#notifymeClientEmail").attr("placeholder","Digita tu email");
  // // set name to input
  // $('footer form input[type=email]').attr('name', 'email');
  // $('footer form input[type=submit]').attr('name', 'submit');
  //   // ---
  //   // Testing newsletter form
  //   $( "footer form" ).submit(function( event ) {
  //     var newsForm = $('footer form').serialize();
      
      
  //     // ok run ajax.
  //     $.ajax({
  //       url: 'https://www.oxford.com.ar/oster/sync/syncVtexMxNewsletter.php',
  //       async: !1,
  //       type: "GET",
  //       crossDomain: !0,
  //       dataType: "json",
  //       data: newsForm,
  //       success: function(data) {
  //         console.log(data);
  //         if (data == 400) {
  //           // alert("Error on submit");
  //         }
  //       },
  //       error: function(data) {
  //        // alert("Error on submit");
  //       }
  //     })

  //     // event.preventDefault();
  //     window.location="/";
  //   });
  
  
  // agregarcheck();


  
    carrusel_pdp();
    fichaproducto();
    //addTemp();
    PopUpIni();
    popUpSuscribete(); 
    /*Manual y Recetas*/
    var manualUsuario = $('.value-field.Manual').html();
    var receta = $('.value-field.Recetas').html();
    if (manualUsuario) {
        $(".modulo.producto .col-2 .left .row.manual").css("display", "block");
        $(".modulo.producto .col-2 .left .row.manual a.buy-button.buy-button-ref.manual").removeClass("hide");
        $(".modulo.producto .col-2 .left .row.manual a.buy-button.buy-button-ref.manual").attr('href', manualUsuario).attr('target', '_blank')
    }
    if(receta){
        $(".modulo.producto .col-2 .left .row.manual").css("display", "block");
        $(".modulo.producto .col-2 .left .row.manual a.buy-button.buy-button-ref.recetas").removeClass("hide");
        $(".modulo.producto .col-2 .left .row.manual a.buy-button.buy-button-ref.recetas").attr('href', receta).attr('target', '_blank')
    }
    /*Fin Manual y Recetas*/
  
    //$.cookie('PopUpIni', 'true', { expires: 1000});

    $('.helperComplement').remove();

    //-- Mobile - Desktop
    var $window   = $(window),
    $html     = $('body'),
    $toggle   = false,
    rtime,
    timeout   = false,
    delta     = 200;

    $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
      }
    }).trigger('resize');

    function agregarClase() {
        // $( ".itemProduct.n15colunas ul").addClass("owl-carousel owl-theme owl-carrusel-sugeridos");
        
        $( ".row.carrusel.sugeridos ul").addClass("owl-carousel owl-theme owl-carrusel-sugeridos");
    };

    function carruselSugeridos() {
        $('.owl-carrusel-sugeridos').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
    };
    function resizeend() {
      if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
      } else {
        timeout = false;
        if (($window.width() >= 320) && ($window.width() <= 680)) {
            $('body').addClass('os_mobile');
            $('body').removeClass('os_desktop');
            //nav
            $('.btn-bar').click(function(){
                $('.menu').slideToggle()
            });
            //-->
            $('.menu nav ul li.wH').click(function(){
                $(this).find('.btn').removeAttr('href');
                $(this).children('.wHoverNav').slideToggle()
            });
            //Filtro
            $('.modulo.listado .col-1 .search-single-navigator').removeAttr('style').addClass('imp');
            $('.search-multiple-navigator h3 a').removeAttr('href');
            $('.search-multiple-navigator h3').click(function(){
                $('body.departamento .modulo.listado .col-1 .search-single-navigator').toggleClass('imp');
                $('body.categoria .modulo.listado .col-1 .search-single-navigator').slideToggle();
            });
            $toggle = true;
        } else {
            $('body').removeClass('os_mobile');
            $('body').addClass('os_desktop');
            //Nav
            $('nav ul li.wH').hoverIntent(function(){
               $(this).toggleClass('active');
               $(this).children('.wHoverNav').fadeToggle(100);
            });
        }
      }
    }
    //--*

    //-- Pre load 
    $('#ajaxBusy > p').css('width','100%');
    $('#ajaxBusy > p').each(function() {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth")
            }, 1200);
    });
    //--*

    //Minicard
    $.miniCart();
    $('header .btn-cart .pre-cart').hide();
    $('.btn-cart').click(function(){  
        $('header .btn-cart .pre-cart, header .btn-cart:after').fadeToggle(100);
        if($('header .btn-cart .info.vcenter span.value').html() == '0.00'){
            $('.empty-cart').show(); 
        }else{
            $('.wrap-scroll, .row.resumen, .head-mobile.res-mobile').show();
        }   
    });
    //--*

    //-- Selector de país
    $('.selector-pais, .locales-ui .close').click(function(e){
        $('.locales').slideToggle();
    });
    //--*

    //-- Carrusel
    //--> principal inicio
    // $('.fade  ul').slick({
    //     dots: true,
    //     autoplay: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     slide: 'div',
    //     cssEase: 'linear'
    // });
    //--> productos
    // $('.products ul').slick({
    //     dots: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     slide: 'li',
    //     infinite: true,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }]
    // });
    //--> sugeridos
    // $('.sugeridos ul').slick({
    //     dots: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     slide: 'li',
    //     infinite: true,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }]
    // });

    //-- Página departamento
    $('.search-multiple-navigator h5').click(function(){
        $(this).toggleClass('show');
        $(this).next().slideToggle();
    });
    $('body.departamento .modulo.listado .col-1 .search-single-navigator h4').click(function(){
        $(this).toggleClass('show');
        $(this).next().slideToggle();
    });
    $('body.departamento .modulo.listado .col-1 .search-single-navigator h4 a, body.departamento .modulo.listado .col-1 .search-single-navigator ul li a').each(function(){
        var rTitle    = $(this).attr('title');
        $(this).html(rTitle);
    });
    $('body.departamento .modulo.listado .col-1 .search-single-navigator ul').filter(function(){ 
        return $(this).children("li").length > 1 ? '' : $(this).hide() && $(this).prev().addClass('none');
    });
    //--*

    //-- Video producto
    // var video = $('.value-field.Video').html();
    // if(video){
    //     $('.value-field.Descripcion').prepend('<iframe width="700" height="315" src="https://www.youtube.com/embed/'+video+'" frameborder="0" allowfullscreen="" allowtransparency="true"></iframe>');
    //     $('#include').append('<div class="cont_video" style="display:none;"><iframe width="410" height="410" src="https://www.youtube.com/embed/'+video+'" frameborder="0" allowfullscreen="" allowtransparency="true"></iframe></div>');
    //     $('.value-field.Video').each(function() {
    //         var pegasrc = $(this).attr('src');
    //         $('.thumbs').append('<li class="trigger-video" style="cursor:pointer;"><a id="botaoZoom" href="javascript:void(0);" class="thumbnail"><i red="'+ pegasrc +'" class="fa fa-play" aria-hidden="true"></i></a></li>');
    //     });
    //     $('li.trigger-video').bind("click", function() {
    //         $('#include div#image').hide();
    //         var pegarel = $(this).find('img').attr('rel');
    //         $('#include .cont_video').fadeIn();
    //     });
    // };

  //-- Video producto
  var video = $('.value-field.Video-1').html();
  if (video) {
    $('.value-field.Descripcion').prepend('<iframe width="700" height="315" src="https://www.youtube.com/embed/' + video + '" frameborder="0" allowfullscreen="" allowtransparency="true"></iframe>');
    
    var a = 0;
    var b = 0;
    $('.group.Descripcion tr td[class*="Video-"]').each(function() {
      a = a + 1;
      var video1 = $(this).html();
      if (a != 1) {
        $('#include').append('<div class="cont_video-' + a + '" style="display: none;" ><iframe width="410" height="410" src="https://www.youtube.com/embed/' + video1 + '" frameborder="0" allowfullscreen="" allowtransparency="true"></iframe></div>');
        var pegasrc = $(this).attr('src');
        $('.thumbs').append('<li class="trigger-video-' + a + '" data-vide="' + a + '" style="cursor:pointer;"><a id="botaoZoom" href="javascript:void(0);" class="thumbnail"><i red="' + pegasrc + '" class="fa fa-play" aria-hidden="true"></i></a></li>');
      }
    })
    
    $('li[class*="trigger-video-"]').click(function() {
      $(this).each(function() {
        b = b + 1;
        //console.log("valor: "+b);
        var cont_video = $(this).attr('data-vide');
        //console.log('cont_video:'+cont_video);
        $('#include div#image').hide();
        var pegarel = $(this).find('img').attr('rel');
        $('#include [class*="cont_video-"]').hide();
        $('#include .cont_video-' + cont_video + '').fadeIn();
      });
      
    });
    $('.thumbs li a[title="Zoom"]').click(function() {
      $('#include [class*="cont_video-"]').hide();
      $('#include div#image').fadeIn();
    })
  }
  ;//--*

    $('.search-multiple-navigator h3 a').each(function(){
        var nomSubCat = $(this).html();
        $('body').addClass(nomSubCat);
    });

    //Donde comprar
    if($('body').hasClass('soporte-pagina')){
        $('.modulo.pagina .left .contenedor').append('<a class="btnOsAcc" href="https://osterserviciomacrocentro.com/" target="_blank"><img src="/arquivos/bn-acc-MEX.jpg"/></a>')
    };

    //-- Otros
    $('#divCompreJunto table .buy').addClass('cj-buy').removeClass('buy');
    $('.searchResultsTime').eq(0).addClass('top');
    $('.searchResultsTime').eq(1).addClass('bottom');
    $('.orderBy select option[value="OrderByBestDiscountDESC"]').html('Mejor descuento');
    $('#newsletterClientName').attr('value', 'Digite su nombre...');
    $('#newsletterClientEmail').attr('value', 'Digite su e-mail...');
    $('.portal-notify-me-ref .notifyme.sku-notifyme .btn-ok').val('NOTIFICARME');
    $('.newsletter-button-ok').val('+');
    $('.newsletter-button-ok').live('click', function(){ $('.bt-voltar').val('<'); });
    $('.bt-voltar').live('click', function(){ $('.newsletter-button-ok').val('+'); });
    $('.newsletter-button-ok').val('+');
    $('.modulo.breadcrumb .bread-crumb ul li a').each(function(){ 
        if ($(this).attr('title') == 'bioceramic') { 
            $('.search-single-navigator').addClass('off'); 
        } 
    });
    if($('.modulo.producto .col-2 .right').html() == ''){ $('.modulo.producto .col-2 .left').addClass('full'); }
    $('html meta').each(function(){ 
        if ($(this).attr('content') == 'Ofertas') { 
            $('.search-single-navigator').addClass('Ofertas'); 
        } 
    });
    //--*

    //-- acordion departamento / categoria
    if($('.question-accordion').length){
      $('.question-accordion h3').click(function(e) {
        $(this).hasClass("open") ? $(this).removeClass('open').next().slideToggle() : $(this).addClass('open').next().slideToggle();
      });
    }
    //--*

    if($('.sku-notifyme').is(":visible")){
        console.log('es visible');
        $('.modulo.producto .col-2 .left .Cantidad, .modulo.producto .col-2 .left .row .buy-button.buy-button-ref').addClass('hideNotificame');
    };

    //-- Tiendas
    if($('body').hasClass('centros-servicios')){
      var map,
        markerData = [{
                lat: 19.0411655,
                lng: -98.2212871, 
                zoom: 15,
                name: "PUEBLA",
                centroComercial: "<p>B y L Electrodomésticos</p>",
                direccion: "<p>Puebla, Puebla, 44 Norte # 1825 Local 3</p>",
                mail: " - ",    
                telefono: '<p>2234 3195</p>'
            }, {
                lat: 19.4024393,
                lng: -99.2359358,  
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Casa García</p>",
                direccion: "<p>México, D.F., CDMX, Patriotismo 875 B</p>", 
                mail: " - ",
                telefono: '<p>5563 8723 / 5615 1856</p>'
            }, {
                lat: 19.4136094,
                lng: -99.0599777,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Casa Huerta</p>",
                direccion: "<p>México, D.F., CDMX, Av. Lopez Mateos N° 150, Col. Metropolitana, Cd. Neza</p>",
                mail: " - ",
                telefono: '<p>5797 8131</p>' 
            }, {
                lat: 19.3212162,
                lng: -99.22358455,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Casa León</p>",
                direccion: "<p>México, D.F., CDMX, Av. Contreras 386 L.10</p>",
                mail: " - ",
                telefono: '<p>5595 9296</p>'
            }, {
                lat: 19.703006,
                lng: -101.1917842,
                zoom: 15,
                name: "MORELIA",
                centroComercial: "<p>Casa Mary</p>",
                direccion: "<p>Morelia, Michoacán, Alvaro Obregón # 22 Col. Centro</p>",
                mail: " - ",
                telefono: '<p>01-44-33-12-54-15</p>' 
            }, {
                lat: 18.117095,
                lng: -94.470414,
                zoom: 15,
                name: "COATZACOALCOS",
                centroComercial: "<p>Casa Montoya</p>",
                direccion: "<p>Coatzacoalcos, Veracruz, Carranza 104 Col. Centro entre Malpica e Hidalgo</p>",
                mail: " - ",
                telefono: '<p>0199 3272 0143 </p>'
            }, {
                lat: 25.7187593,
                lng: -100.3417255,
                zoom: 15,
                name: "MONTERREY",
                centroComercial: "<p>Centro Doméstico</p>",
                direccion: "<p>Monterrey, Nuevo León, Fidel Velázquez 1513</p>",
                mail: " - ",
                telefono: '<p>18183717373</p>'
            }, {
                lat: 22.2201327,
                lng: -97.8571047,
                zoom: 15,
                name: "TAMPICO",
                centroComercial: "<p>Comercializadora Allende</p>",
                direccion: "<p>Tampico, Tamaulipas, Fray Andres de Olmos 602, Centro</p>",
                mail: " - ",
                telefono: '<p>8332 1906 62</p>'
            }, {
                lat: 16.7504675,
                lng: -93.1542673,
                zoom: 15,
                name: "TUXTLA GUTIERREZ",
                centroComercial: "<p>COPARE</p>",
                direccion: "<p>Chiapas,2 da Poniente Sur No.590 Col Centro</p>",
                mail: " - ",
                telefono: '<p>8332 1906 62</p>' 
            }, {
                lat: 31.7353493,
                lng: -106.4296008,
                zoom: 15,
                name: "CD. JUÁREZ",
                centroComercial: "<p>Distribuidora TURMIX</p>",
                direccion: "<p>Cd. Juárez, Chihuahua, Av. Triunfo de la república 5298</p>",
                mail: " - ",
                telefono: '<p>5178030</p>' 
            }, {
                lat: 21.8892718,
                lng: -102.2977859,
                zoom: 15,
                name: "AGUASCALIENTES",
                centroComercial: "<p>Doméstica Muñoz</p>",
                direccion: "<p>Aguascalientes, Aguascalientes, Plan de Ayutla no.628 col. Sn pablo</p>",
                mail: " - ",
                telefono: '<p>0144 99-15-25-60</p>' 
            }, {
                lat: 19.5225656,
                lng: -99.1630528,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Doméstica Norte</p>",
                direccion: "<p>México, D.F., CDMX, Camino a Santiaguito # 113</p>",
                mail: " - ",
                telefono: '<p>5392 7651</p>' 

            }, {
                lat: 19.5256204,
                lng: -96.9159995, 
                zoom: 15,
                name: "XALAPA",
                centroComercial: "<p>Doméstica Tapia</p>",
                direccion: "<p>Xalapa, Veracruz, Av. Rafael Murillo Vidal 3-F Centro, Fracc. Ensueño</p>",
                mail: " - ",
                telefono: '<p>2288 1887 59</p>'
            }, {
                lat: 19.4323633,
                lng: -99.1448366,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Econohogar</p>",
                direccion: "<p>México, D.F., CDMX,  Art. 123 N° 21-B Centro</p>",
                mail: " - ",
                telefono: '<p>5512 8006</p>'
            }, {
                lat: 19.4201982,
                lng: -102.0680038,
                zoom: 15,
                name: "URUAPAN",
                centroComercial: "<p>El Surtidor del Hogar</p>",
                direccion: "<p>Uruapan, Michoacán, Madero 3-A Col. Centro</p>",
                mail: " - ",
                telefono: '<p>01-45-25-24-29-26 / 01-452-5238484</p>' 
            }, {
                lat: 22.7431817,
                lng: -98.9767575,
                zoom: 15,
                name: "CD. MANTE",
                centroComercial: "<p>Electrocentro del Mante</p>",
                direccion: "<p>Cd. Mante, Tamaulipas, Guerrero 306 Pte</p>",
                mail: " - ",
                telefono: '<p>83 1232 2018</p>'
            }, {
                lat: 19.1935098,
                lng: -96.1509085,
                zoom: 15,
                name: "VERACRUZ",
                centroComercial: "<p>Electrodoméstica del Puerto</p>",
                direccion: "<p>Veracruz, Veracruz, Zamora 1479 centro</p>",
                mail: " - ",
                telefono: '<p>9382 154</p>' 

            }, {
                lat: 20.5663701,
                lng: -100.3868516,
                zoom: 15,
                name: "QUERETARO",
                centroComercial: "<p>Electrodomésticos Corregidora</p>",
                direccion: "<p>Queretaro, Queretaro, Av. Presidentes s/n Local 177 y 178 Col. Presidentes</p>",
                mail: " - ",
                telefono: '<p>442 - 2228550 / 4972997 / 2144349 </p>'
            }, {
                lat: 20.521113,
                lng: -100.812117,
                zoom: 15,
                name: "CELAYA",
                centroComercial: "<p>Electrodomésticos del Bajío</p>",
                direccion: "<p>Celaya, Guanajuato, Morelos # 143 Col. Centro</p>",
                mail: " - ",
                telefono: '<p>4616161934</p>' 
            }, {
                lat: 19.21043,
                lng: -103.8086985, 
                zoom: 15,
                name: "COQUIMATLÁN",
                centroComercial: "<p>Electrodomésticos San José</p>",
                direccion: "<p>Coquimatlán, Colima, B. Juárez 440A  </p>", 
                mail: " - ",
                telefono: '<p>01 31 23 23 18 58 </p>'
            }, {
                lat: 18.0840808,
                lng: -96.1270761, 
                zoom: 15,
                name: "TUXTEPEC",
                centroComercial: "<p>Electromecánica y Refrigeración    </p>",
                direccion: "<p>Tuxtepec, Oaxaca, Av. Libertad 1003  </p>",
                mail: " - ",
                telefono: '<p>01 287 875 0979   </p>'

            }, {
                lat: 25.676815,
                lng: -100.314612,
                zoom: 15,
                name: "MONTERREY",
                centroComercial: "<p>Fernando Sepulveda</p>", 
                direccion: "<p>Monterrey, Nuevo León, Ruperto Martinez # 238    </p>",
                mail: " - ",
                telefono: '<p>18183440026   </p>'
                        
            }, {
                lat: 17.5506166,
                lng: -99.5022175,
                zoom: 15,
                name: "CHILPANCINGO",
                centroComercial: "<p>Gasel</p>",
                direccion: "<p>Chilpancingo, Guerrero, Av. Álvarez Sur No. 26, Col. Centro</p>",
                mail: " - ",
                telefono: '<p>01-74-74-72-95-52</p>'
            }, {
                lat: 20.6991912,
                lng: -103.3564465,
                zoom: 15,
                name: "GUADALAJARA",
                centroComercial: "<p>Implementos y Refacciones</p>",
                direccion: "<p>Guadalajara, Jalisco, Manuel Avila Camacho 1280  </p>",
                mail: " - ",
                telefono: '<p>01-33-38-23-19-27 </p>'
                            
            }, {
                lat: 20.9551644,
                lng: -97.403495,
                zoom: 15,
                name: "TUXPAN",
                centroComercial: "<p>Linea Blanca, Tuxpan</p>",
                direccion: "<p>Tuxpan, Veracruz, Arteaga 1, Centro  </p>",
                mail: " - ",
                telefono: '<p>783 834 5953  </p>'
            }, {
                lat: 19.5322796,
                lng: -99.2095538,
                zoom: 15,
                name: "TLALNEPANTLA",
                centroComercial: "<p>Macrocentro</p>",
                direccion: "<p>Tlalnepantla, Estado de México, Gustavo Baz 236 planta baja Fracc La Loma</p>",
                mail: " - ",
                telefono: '<p>5362 2997</p>' 
            }, {
                lat: 23.2126664,
                lng: -106.4183734,
                zoom: 15,
                name: "MAZATLÁN",
                centroComercial: "<p>Magnetos y Refacciones</p>",
                direccion: "<p>H. Mazatlán, Sinaloa, Av. Juan Carrasco # 912 Col. Montuosa</p>",
                mail: " - ",
                telefono: '<p>9-82-84-73</p>'
            }, {
                lat: 24.7959916,
                lng: -107.409252,
                zoom: 15,
                name: "CULIACÁN",
                centroComercial: "<p>Magnetos y Refacciones S.A. de C.V.</p>",
                direccion: "<p>Culiacán, Sinaloa, Gabino Vázques 840-1C, Los Pinos, CP. 80128</p>",
                mail: " - ",
                telefono: '<p>667-7173051</p>'
            }, {
                lat: 20.6682771,
                lng: -103.349647,
                zoom: 15,
                name: "GUADALAJARA",
                centroComercial: "<p>Magnetos y Refaciones</p>",
                direccion: "<p>Guadalajara, Jalisco, Av. La Paz # 80 Col . Mexicaltzingo</p>",
                mail: " - ",
                telefono: '<p>01-33-36-13-41-16</p>'
            },{
                lat: 18.9264529,
                lng: -99.2394233,
                zoom: 15,
                name: "CENTRO CUERNAVACA",
                centroComercial: "<p>Mecánica Doméstica Idn. Y Fea</p>",
                direccion: "<p>Centro Cuernavaca, Morelos, Matamoros 38</p>",
                mail: " - ",
                telefono: '<p>777 312 4612</p>' 
            }, {
                lat: 18.849222,
                lng: -97.107927,
                zoom: 15,
                name: "ORIZABA",
                centroComercial: "<p>MS-Multiservicios</p>",
                direccion: "<p>Orizaba, Veracruz, Poniente 2 N° 38, Centro</p>",
                mail: " - ",
                telefono: '<p>7254 497 Ext. 124 </p>'
            }, {
                lat: 25.8516992,
                lng: -97.5376482,
                zoom: 15,
                name: "H. MATAMOROS",
                centroComercial: "<p>Multiservicios del Golfo</p>",
                direccion: "<p>H. Matamoros, Tamaulipas, Valle desierto N° 40, Fracc. Valle R. </p>",
                mail: " - ",
                telefono: '<p>868 825 8937</p>'
            }, {
                lat: 25.8004863,
                lng: -108.9807267,
                zoom: 15,
                name: "LOS MOCHIS",
                centroComercial: "<p>Nuevo Japón de los Mochis</p>",
                direccion: "<p>Los Mochis, Sinaloa, Av. B. Juarez No. 430 PTE.</p>",
                mail: " - ",
                telefono: '<p>668 812-5850</p>'
            }, {
                lat: 22.1438681,
                lng: -101.0052432,
                zoom: 15,
                name: "SAN LUIS POTOSI",
                centroComercial: "<p>PC Electrodomésticos</p>",
                direccion: "<p>Valentin Amador esq. Michoacan No.627 col. Ferrocarrilera</p>",
                mail: " - ",
                telefono: '<p>8026385 / 8115808</p>' 
            }, {
                lat: 18.8918644,
                lng: -96.9379858,
                zoom: 15,
                name: "CORDOBA",
                centroComercial: "<p>Pulser</p>",
                direccion: "<p>Cordoba, Veracruz, Av. 7 N° 316 B, Centro    </p>",
                mail: " - ",
                telefono: '<p>27 1714 1241</p>'
            }, {
                lat: 20.9595916,
                lng: -89.6103201,
                zoom: 15,
                name: "MÉRIDA",
                centroComercial: "<p>Refaccionaria Del Hogar</p>",
                direccion: "<p>Mérida, Yucatán, Calle 67 # 511  </p>",
                mail: " - ",
                telefono: '<p>999 923 5652  </p>'
            }, {
                lat: 21.984482,
                lng: -99.016923,
                zoom: 15,
                name: "VALLESS",
                centroComercial: "<p>Refaccionaria del Hogar de Valles</p>",
                direccion: "<p>Valles, San Luis Potosi, Abasolo # 510</p>",
                mail: " - ",
                telefono: '<p>3821148</p>'
            }, {
                lat: 16.7455916,
                lng: -93.141794,
                zoom: 15,
                name: "SAN CRISTOBAL DE LAS CASAS",
                centroComercial: "<p>REFACCIONARIA ELECTRIHOGAR</p>",
                direccion: "<p> Chiapas, Av. 20 de NOVIEMBRE 17A. CENTRO</p>",
                mail: " - ",
                telefono: '<p>9676781137</p>'
            }, {
                lat: 20.5292303,
                lng: -97.4649783,
                zoom: 15,
                name: "POZA RICA",
                centroComercial: "<p>Refaccionaria Internacional    </p>",
                direccion: "<p>Poza Rica, Veracruz, Mariano Arista, Col. Tajín</p>",
                mail: " - ",
                telefono: '<p>0178 2823 5119</p>' ,
            }, {
                lat: 20.3404501,
                lng: -102.0262907,
                zoom: 15,
                name: "LA PIEDAD",
                centroComercial: "<p>Refrigeración Calderón</p>",
                direccion: "<p>La piedad, Michoacán, Vicente Guerrero # 88 Col Centro</p>",
                mail: " - ",
                telefono: '<p>01-35-25-22-15-04</p>' ,

            }, {
                lat: 32.4987971,
                lng: -116.8969223,
                zoom: 15,
                name: "TIJUANA",
                centroComercial: "<p>REFRIGERACION DEL SUR</p>",
                direccion: "<p>TIJUANA, Baja California, RUTA INDEPENDENCIA #5102 LOCAL 10 COL. LAS AMERICAS </p>",
                mail: " - ",
                telefono: '<p>01-664 250 2014   </p>' 
            }, {
                lat: 19.5542088,
                lng: -99.0826015,
                zoom: 15,
                name: "ECATEPEC",
                centroComercial: "<p>Regrigeracion Hergar</p>",
                direccion: "<p>Ecatepec, Estado de México, Vía Morelos Ltc 26 Mza 1, Col. Nuevo Laredo</p>",
                mail: " - ",
                telefono: '<p>5787 7536</p>'
            }, {
                lat: 10.389830,
                lng: -75.482165,
                zoom: 15,
                name: "LEON",
                centroComercial: "<p>Reparaciones Frausto</p>",
                direccion: "<p>Leon, Guanajuato, Constitución # 112-A Col. Centro</p>",
                mail: " - ",
                telefono: '<p>01-47-77-16-03-43</p>'
            }, {
                lat: 21.118519,
                lng: -101.6863207,
                zoom: 15,
                name: "PACHUCA",
                centroComercial: "<p>Reparaciones y Servicios de Hidalgo </p>",
                direccion: "<p>Pachuca, Hidalgo, Fernando Soto # 102</p>",
                mail: " - ",
                telefono: '<p>0177 1715 1037</p>'
            }, {
                lat: 19.3355368,
                lng: -99.0730173,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Reparadora del Hogar Tlahuac   </p>",
                direccion: "<p>México, D.F., CDMX, Av. F.F.C.C. San Rafael Atlixco # 1 </p>",
                mail: " - ",
                telefono: '<p>58429489</p>' 
            },  {
                lat: 20.6720489,
                lng: -101.3496849,
                zoom: 15,
                name: "IRAPUATO",
                centroComercial: "<p>Ryse Irapuato  </p>",
                direccion: "<p>Irapuato, Guanajuato, Ramón Corona No. 137, Col. Centro </p>",
                mail: " - ",
                telefono: '<p>01-462 - 6264446 / 6276767</p>' 
            }, {
                lat: 25.536474,
                lng: -103.45883,
                zoom: 15,
                name: "TORREÓN",
                centroComercial: "<p>Ryspado Santa Lucia S.A. de C.V </p>",
                direccion: "<p>Torreón, Coahuila, Av. Pte. Carranza # 655 Pte. Centro   </p>",
                mail: " - ",
                telefono: '<p>8717 1651 89 / 8717 1111 01</p>'
            }, {
                lat: 19.2945822,
                lng: -99.1166949,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Servicio Doméstico del Sur</p>",
                direccion: "<p>México, D.F., CDMX, Av. Cafetales 190-F, Coyoacan </p>",
                mail: " - ",
                telefono: '<p>5608 2313 / 5695 6735</p>'
            }, {
                lat: 17.0643937,
                lng: -96.7380049,
                zoom: 15,
                name: "OAXACA",
                centroComercial: "<p> Servicio Eléctrico Aparicio   </p>",
                direccion: "<p>Oaxaca, Oaxaca, Periferico Sur 111, Col. Postal  </p>",
                mail: " - ",
                telefono: '<p01 951 513 6277</p>'
            }, {
                lat: 24.0257678,
                lng: -104.6567989,
                zoom: 15,
                name: "DURANGO",
                centroComercial: "<p>Servicio Esparza   </p>",
                direccion: "<p>Durango, Durango, 5 DE FEBRERO No. 702 C </p>",
                mail: " - ",
                telefono: '<p>618 101 3736 </p>'
                        
            }, {
                lat: 19.3212776,
                lng: -99.1318491,
                zoom: 15,
                name: "MÉXICO, D.F",
                centroComercial: "<p>Servicio Técnico Miramontes</p>",
                direccion: "<p>México, D.F  CDMX, Pedro Sainz de Baranda N°16 Local 7 </p>",
                mail: " - ",
                telefono: '<p>5678 5693 / 5923 4772</p>' 
            }, {
                lat: 20.6814343,
                lng: -103.3715436,
                zoom: 15,
                name: "GUADALAJARA",
                centroComercial: "<p>Servicio y Mantenimiento Castillo  </p>",
                direccion: "<p>Guadalajara, Jalisco, Garibaldi 1450</p>",
                mail: " - ",
                telefono: '<p>01 33 38 25 34 80</p>'
            }, {
                lat: 19.4330695,
                lng: -99.1517268,
                zoom: 15,
                name: "MÉXICO, D.F",
                centroComercial: "<p>Servicio y Mantenimiento del Hogar </p>",
                direccion: "<p>México D.F., CDMX, Art. 123 N° 124 Col. Centro</p>",
                mail: " - ",
                telefono: '<p>5510 3758</p>' ,
            }, {
                lat: 25.4192873,
                lng: -101.0360574,
                zoom: 15,
                name: "SALTILLO",
                centroComercial: "<p>Servicio y Refacciones Electricidad y Novedades    </p>",
                direccion: "<p>Saltillo, Coahuila,  Morelos #199    </p>",
                mail: " - ",
                telefono: '<p>884 4412 4231</p>' 
            }, {
                lat: 17.9953497,
                lng: -92.9252981,
                zoom: 15,
                name: "VILLAHERMOSA",
                centroComercial: "<p>Servicio y Refacciones Frias   </p>",
                direccion: "<p>Villahermosa,Tabasco, Sanchez Magallanes 918, Centro</p>",
                mail: " - ",
                telefono: '<p>0199 3312 7002</p>' 
            }, {
                lat: 19.2964563,
                lng: -99.6555358,
                zoom: 15,
                name: "TOLUCA",
                centroComercial: "<p>Servicio y Refacciones Maralb  </p>",
                direccion: "<p>Toluca, Estado de México, Ignacio Lopez Rayon Rayon Nte 206-D</p>",
                mail: " - ",
                telefono: '<p>0172 2214 141</p>'
            }, {
                lat: 20.662595,
                lng: -103.3225503,
                zoom: 15,
                name: "GUADALAJARA",
                centroComercial: "<p>Servicio y Venta de Refacciones</p>",
                direccion: "<p>Guadalajara, Jalisco, Medrano No. 1344 Col. Olímpica </p>",
                mail: " - ",
                telefono: '<p>01-33-36-17-62-15</p>' 
            }, {
                lat: 18.4613902,
                lng: -97.4103815,
                zoom: 15,
                name: "TEHUACÁN",
                centroComercial: "<p>SERVICIOS AVANZADOS EN ELECTRONICA </p>",
                direccion: "<p>Tehuacán, Puebla, 3 PTE #1810 COL ARCADIA    </p>",
                mail: " - ",
                telefono: '<p>01-2383-84-7130</p>'
            }, {
                lat: 29.126625,
                lng: -111.0228997,
                zoom: 15,
                name: "HERMOSILLO",
                centroComercial: "<p>Servicios Integrales Electrodomésticos</p>",
                direccion: "<p>Hermosillo, Sonora, Presa del Fuerte # 4</p>",
                mail: " - ",
                telefono: '<p>662 217 1600 / 21386271</p>'
            }, {
                lat: 19.4809931,
                lng: -99.106299,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Servitec   </p>",
                direccion: "<p>México, D.F., CDMX, Palomas #152, Nicolas Romwro </p>",
                mail: " - ",
                telefono: '<p>5827 0324 / 5827 8001</p>'
            }, {
                lat: 19.2907009,
                lng: -99.0430975,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Servixpres</p>",
                direccion: "<p>México, D.F., CDMX , Calle Deodato # 326 Esq. Guillermo Prieto</p>",
                mail: " - ",
                telefono: '<p>55866 9626 / 5841 83281</p>'
            }, {
                lat: 27.0756261,
                lng: -109.4538701,
                zoom: 15,
                name: "NANOJAO",
                centroComercial: "<p>SIM SERVICIO ELECTRÓNICO</p>",
                direccion: "<p>Navojoa, Sonora, Talamante # 505</p>",
                mail: " - ",
                telefono: '<p>01 642 422 7886</p>' 
            }, {
                lat: 21.4801582,
                lng: -104.8942739,
                zoom: 15,
                name: "TEPIC, NAYARIT",
                centroComercial: "<p>TECNO HOGAR</p>",
                direccion: "<p>TEPIC, Nayarit, BLVD TEPIC-XALISCO #1944 COL. PREDIO SAN MARTIN  </p>",
                mail: " - ",
                telefono: '<p>(311) 2121936</p>' 
            }, {
                lat: 16.8588166,
                lng: -99.8982401,
                zoom: 15,
                name: "ACAPULCO DE JUÁREZ",
                centroComercial: "<p>TELEVICENTRO</p>",
                direccion: "<p>Acapulco de Juárez, Guerrero, Av. Cuauhtemoc No. 134, Col. Centro    </p>",
                mail: " - ",
                telefono: '<p>744 - 4860181 / 4867247</p>'
            }, {
                lat: 19.323306,
                lng: -99.134156,
                zoom: 15,
                name: "MÉXICO, D.F.",
                centroComercial: "<p>Servicio Técnico Miramontes </p>",
                direccion: "<p>Pedro Sainz de Baranda No. 16 Local 7, Esq. Miramontes Col. Avante Ciudad de México </p>",
                mail: " - ",
                telefono: '<p>56785693 / 59234772</p>'
            }

        ],
        markerProvincias = [
            { lat: 21.891784, lng: -102.297566, zoom: 12, name: "AGUASCALIENTES" }, 
            { lat: 16.8354129, lng: -100.0023936, zoom: 12, name: "ACAPULCO DE JUÁREZ" },
            { lat: 28.677621, lng: -106.140328, zoom: 12, name: "BAHIAS DE HUATULCO" },  
            { lat: 18.129321, lng: -94.468526, zoom: 12, name: "COATZACOALCOS" },
            { lat: 31.735971, lng: -106.42989, zoom: 12, name: "CD. JUÁREZ" }, 
            { lat: 22.738196, lng: -98.980261, zoom: 13, name: "CD. MANTE" }, 
            { lat: 20.524367, lng: -100.810063, zoom: 12, name: "CELAYA" },  
            { lat: 17.549671, lng: -99.501965 , zoom: 13, name: "CHILPANCINGO" },   
            { lat: 19.208453, lng: -103.810268, zoom: 14, name: "COQUIMATLÁN" }, 
            { lat: 24.8049008, lng: -107.4935258, zoom: 12, name: "CULIACÁN" },  
            { lat: 18.9318684, lng: -99.3107767, zoom: 12, name: "CENTRO CUERNAVACA" },   
            { lat: 21.1213284, lng: -86.9194451, zoom: 12, name: "CANCÚN" },  
            { lat: 18.8901707, lng: -96.9751965, zoom: 12, name: "CORDOBA" }, 
            { lat: 28.6709132, lng: -106.1346581, zoom: 12, name: "CHIHUAHUA" },  
            { lat: 19.3271724, lng: -91.9162418, zoom: 12, name: "CAMPECHE" },  
            { lat: 24.0226824, lng: -104.7177648, zoom: 12, name: "DURANGO" },  
            { lat: 19.5718455, lng: -99.107745, zoom: 12, name: "ECATEPEC" },   
            { lat: 20.6737776, lng: -103.4056249, zoom: 12, name: "GUADALAJARA" }, 
            { lat: 25.8433786, lng: -97.585156, zoom: 12, name: "H. MATAMOROS " },  
            { lat: 29.082137, lng: -111.0590267, zoom: 12, name: "HERMOSILLO" },  
            { lat: 20.6774938, lng: -101.3768225, zoom: 12, name: "IRAPUATO" },  
            { lat: 25.7837968, lng: -109.0256312, zoom: 12, name: "LOS MOCHIS" },   
            { lat: 20.330736, lng: -102.0618947, zoom: 12, name: "LA PIEDAD" },  
            { lat: 21.1218994, lng: -101.7360515, zoom: 12, name: "LEON" },   
            { lat: 19.425328, lng: -99.141905, zoom: 11, name: "MÉXICO, D.F." }, 
            { lat: 19.703803, lng: -101.195827, zoom: 12, name: "MORELIA" }, 
            { lat: 25.693905, lng: -100.326451, zoom: 12, name: "MONTERREY" },
            { lat: 20.9800512, lng: -89.7031301, zoom: 12, name: "MÉRIDA" },              
            { lat: 23.2467282, lng: -106.4924889, zoom: 12, name: "MAZATLÁN" },  
            { lat: 27.0679196, lng: -109.4868181, zoom: 12, name: "NANOJAO" },  
            { lat: 17.0812951, lng: -96.770751, zoom: 12, name: "OAXACA" }, 
            { lat: 18.8590902, lng: -97.1143188, zoom: 12, name: "ORIZABA" },   
            { lat: 19.038898, lng: -98.21082, zoom: 12, name: "PUEBLA" }, 
            { lat: 20.5347952, lng: -97.4799282, zoom: 12, name: "POZA RICA" },  
            { lat: 20.0825056, lng: -98.826818, zoom: 12, name: "PACHUCA" },
            { lat: 20.568092, lng: -100.390822, zoom: 12, name: "QUERETARO" }, 
            { lat: 16.7312816, lng: -92.6775049, zoom: 12, name: "SAN CRISTOBAL DE LAS CASAS" }, 
            { lat: 25.4303723, lng: -101.0537849, zoom: 12, name: "SALTILLO" },  
            { lat: 22.1235043, lng: -101.0262812, zoom: 12, name: "SAN LUIS POTOSI" },  
            { lat: 22.222384, lng: -97.863392, zoom: 13, name: "TAMPICO" }, 
            { lat: 16.749273, lng: -93.15103, zoom: 13, name: "TUXTLA GUTIERREZ" }, 
            { lat: 14.911604, lng: -92.26689, zoom: 13, name: "TAPACHULA" },   
            { lat: 18.079282, lng: -96.131329, zoom: 13, name: "TUXTEPEC" },  
            { lat: 20.9596561, lng: -97.4159624, zoom: 12, name: "TUXPAN" },    
            { lat: 19.5463998, lng: -99.2350529, zoom: 12, name: "TLALNEPANTLA" },
            { lat: 32.4966818, lng: -117.0878907, zoom: 12, name: "TIJUANA" },
            { lat: 19.294099, lng: -99.7012537, zoom: 12, name: "TOLUCA" },  
            { lat: 18.462191, lng: -97.4437332, zoom: 12, name: "TEHUACÁN" },  
            { lat: 21.5009712, lng: -104.9469447, zoom: 12, name: "TEPIC, NAYARIT" }, 
            { lat: 25.548597, lng: -103.4719559, zoom: 12, name: "TORREÓN" }, 
            { lat: 19.41669, lng: -102.069049, zoom: 13, name: "URUAPAN" },  
            { lat: 19.188491, lng: -96.15752, zoom: 12, name: "VERACRUZ" },                 
            { lat: 19.6666655, lng: -99.0175525, zoom: 12, name: "VALLES" },            
            { lat: 17.992517, lng: -93.0231613, zoom: 12, name: "VILLAHERMOSA" },              
            { lat: 19.530388, lng: -96.919414, zoom: 13, name: "XALAPA" }
          ],
          lookup = {};
       
      function initialize() {
        map = new google.maps.Map(document.getElementById('viewMap'), {
          zoom: 5,
          center: {lat:24.097477, lng: -103.489864}, 
        });
        markerData.forEach(function(data) {
          var newmarker= new google.maps.Marker({
              map:map,
              position:{lat:data.lat, lng:data.lng},
              title: data.name,
          });
        });
        markerProvincias.forEach(function(data) {
          jQuery("#dwfrm_storelocator_city").append('<option value="'+[data.lat, data.lng, data.zoom, data.name].join('|')+'">'+data.name+'</option>');
        });
      }

      function htmlSetDireccion(nombre){
        htmlDireccion  = '<div class="store-locator-header">';
        htmlDireccion +=    'Todas las localidades en <span>'+nombre+'</span>';
        htmlDireccion +=  '</div>';
        htmlDireccion +=  '<div class="store-border">';
        htmlDireccion +=    '<table class="item-list" id="store-location-results">';
        htmlDireccion +=      '<thead>';
        htmlDireccion +=      '<tr>';
        htmlDireccion +=        '<th class="section-header">Nombre de la tienda</th>';
        htmlDireccion +=        '<th class="section-header">Dirección</th>';
        htmlDireccion +=        '<th class="section-header">Teléfono</th>';
        htmlDireccion +=      '</tr>';
        htmlDireccion +=      '</thead>';
        htmlDireccion +=      '<tbody>';
        markerData.forEach(function (el, i, arr) {
          if(nombre == el.name){
            htmlDireccion +=        '<tr>';
            htmlDireccion +=          '<td class="store-information">';
            htmlDireccion +=            '<div class="store-email"><a>'+ el.centroComercial +'</a></div>';
            htmlDireccion +=          '</td>';
            htmlDireccion +=          '<td class="store-address">';
            htmlDireccion +=            el.direccion;
            htmlDireccion +=          '</td>';
            htmlDireccion +=          '<td class="store-address">';
            htmlDireccion +=            el.telefono;
            htmlDireccion +=          '</td>';
            htmlDireccion +=        '</tr>';
          }
        });
        htmlDireccion +=      '</tbody>';
        htmlDireccion +=    '</table> ';
        htmlDireccion +=  '</div>';
        return htmlDireccion;
      }

      function showDirecciones(nombre){
        var generaHtml = '';
        markerData.forEach(function (el, i, arr) {
          if(nombre == el.name){
            generaHtml = htmlSetDireccion(nombre, el.centroComercial, el.direccion, el.mail, el.telefono);
          }
        });
        return generaHtml;
      }

      google.maps.event.addDomListener(window, 'load', initialize);

      jQuery(document).on('change','#dwfrm_storelocator_city',function() {
        var latlngzoom = jQuery(this).val().split('|'),
            newzoom = 1*latlngzoom[2],
            newlat = 1*latlngzoom[0],
            newlng = 1*latlngzoom[1],
            nameDrc = latlngzoom[3];
        var setHtmlDireccion = htmlSetDireccion(nameDrc);
        map.setZoom(newzoom);
        map.setCenter({lat:newlat, lng:newlng});
        $('.international-search .direccion').html(setHtmlDireccion);        
        /*********************************/
      });
    }
    //-- *

    agregarClase();

    carruselSugeridos();
    
});
$(document).ajaxStop(function(){

  // agregarcheck();


    var link = $("p.welcome em a").attr('href');

if (link=="/no-cache/user/logout") {
    console.log("tiene link")
    $("p.welcome em a").attr('href',"/mi-cuenta");
    $("p.welcome em a").addClass('logueado');

    $(".micuent").append("<a class='loginexito' href='/_secure/mi-cuenta#/orders'>Mi cuenta</a>");
    $(".micuent").addClass("userlogin");

}else{
    console.log("no tiene link")

}



    //addTemp();
    $('#suscribeteOs .newsletter-button-ok').val('Enviar'); 
    $('#suscribeteOs .newsletter-button-ok').live('click', function(){ $('#suscribeteOs .bt-voltar').prop('value','Volver'); });
});
function PopUpIni(){
    $('.newsletter input[type=button]').prop('disabled', true);
    //$('.newsletter input[type=text]').prop('disabled', true);
    var iTerminos     = '<input id="chTerminos" type="checkbox" name="chTerminos" class="chTerminos">';
    var iMayor        = '<input id="chMayor" type="checkbox" name="chMayor" class="chMayor">';
    var getTerTxt     = $('#suscribeteOs .txtTer').html();
    var getMayTxt     = $('#suscribeteOs .txtMay').html();
    var iNewTerminos  = iTerminos + getTerTxt;
    var iNewMayor     = iMayor + getMayTxt;
    $('#suscribeteOs .txtMay').html(iNewMayor).promise().done(function(){
        $('.txtMay').on('change', ':checkbox', function(){
          if($(this).is(':checked')){
            $('.newsletter input[type=button]').prop('disabled', false);
          }else{
            $('.newsletter input[type=button]').prop('disabled', true);
          }
        });
    });
    $('#suscribeteOs .txtTer').html(iNewTerminos).promise().done(function(){
        $('.txtTer').on('change', ':checkbox', function(){
          if($(this).is(':checked')){
            $('.newsletter input[type=text]').prop('disabled', false);
          }else{
            //$('.newsletter input[type=text]').prop('disabled', true);
          }
        });
    });
    //-- Footer
    var getTerTxtFoo     = $('#suscribeteOs .txtTer').html();
    var iNewTerminosFoo  = iTerminos + getTerTxtFoo;
    $('.txtMail .txtTer').html(iNewTerminos).promise().done(function(){
        $('.txtTer').on('change', ':checkbox', function(){
          if($(this).is(':checked')){
            $('.newsletter input[type=text]').prop('disabled', false);
            $('.newsletter input[type=button]').prop('disabled', false);
          }else{
            //$('.newsletter input[type=text]').prop('disabled', true);
            $('.newsletter input[type=button]').prop('disabled', true);
          }
        });
    }); 

    //Reemplazar url Vista previa producto
    if($('#QuickView .modulo.producto .col-2 .left .productName').length){
        setTimeout(
            function(){
              timeSecond = true;
                var nomProPopUp = $('#QuickView .modulo.producto .col-2 .left .productName').html();
                nomProPopUp = nomProPopUp.replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-').replace(' ','-');
                nomProPopUp = nomProPopUp.replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','');
                nomProPopUp = nomProPopUp.replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','').replace('®','');
                nomProPopUp = nomProPopUp.replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','').replace('™','');
                nomProPopUp = nomProPopUp.replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a').replace(/[áàäâå]/, 'a');
                nomProPopUp = nomProPopUp.replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e').replace(/[éèëê]/, 'e');
                nomProPopUp = nomProPopUp.replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i').replace(/[íìïî]/, 'i');
                nomProPopUp = nomProPopUp.replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o').replace(/[óòöô]/, 'o');
                nomProPopUp = nomProPopUp.replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u').replace(/[úùüû]/, 'u');
                nomProPopUpURL = '/'+nomProPopUp+'/p';
                console.log(nomProPopUpURL);
                //$('#QuickView .modulo.producto .col-2 .left .row .buy-button.buy-button-ref').attr('href', nomProPopUpURL);
                $('#QuickView .modulo.producto .col-2 .left .productDescription').append('<a target="_parent" href='+nomProPopUpURL+' style="display:inline-block;color: #063166;text-decoration: underline;margin: 2px 0 0 0;">Ver todos los detalles</a>');
            }, 1000);
        };
};

/*function addTemp(){
    //-- Precio
    $('.skuPrice, .newPrice, .skuListPrice, .economia, .cj-price, .bestPrice .ex-precio').each(function(){
        var strA    = $(this).html();
        var resA    = strA.split(',')[0];
        $(this).html(resA);
    });
    //--*
    //-- Reto oster
    var preMini = parseFloat($('.btn-cart .info.vcenter span.value').html());
    if(preMini > 149){
        $('table tr td p.precio, .btn-cart .info.vcenter span.value').each(function(){
            var strB    = $(this).html();
            var resB    = strB.split('.')[0];
            $(this).html(resB);
        });
        $('#divCompreJunto').show();
    }else{
        $('#divCompreJunto').hide();
    };
    //--*
};*/
function popUpSuscribete(){
  //if(!$.cookie('popUpSuscribete')){
    if($('body').hasClass('home')){
        $.fancybox("#suscribeteOs");
        $('.fancybox-close').trigger('click');
        $('.ltkmodal-close').click(function(e){
            e.preventDefault();
            $('.fancybox-close').trigger('click');
        });
    };
  //}
};
/* Slider */ /* !function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.hidden="hidden",n.paused=!1,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,s,o),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0),n.checkResponsive(!0)}var t=0;return e}(),e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.asNavFor=function(e){var t=this,o=t.options.asNavFor;o&&null!==o&&(o=i(o).not(t.$slider)),null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&i.paused!==!0&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this;i.options.infinite===!1?1===i.direction?(i.currentSlide+1===i.slideCount-1&&(i.direction=0),i.slideHandler(i.currentSlide+i.options.slidesToScroll)):(i.currentSlide-1===0&&(i.direction=1),i.slideHandler(i.currentSlide-i.options.slidesToScroll)):i.slideHandler(i.currentSlide+i.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(e.options.centerMode===!0||e.options.swipeToSlide===!0)&&(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;s>i;i++){var a=document.createElement("div");for(e=0;e<l.options.rows;e++){var d=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&d.appendChild(n.get(c))}a.appendChild(d)}o.appendChild(a)}l.$slider.html(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,a=r.$slider.width(),d=window.innerWidth||i(window).width();if("window"===r.respondTo?n=d:"slider"===r.respondTo?n=a:"min"===r.respondTo&&(n=Math.min(d,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.target);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var a=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide),e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).off("mouseenter.slick",i.proxy(e.setPaused,e,!0)).off("mouseleave.slick",i.proxy(e.setPaused,e,!1))),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.$list.off("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.html(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=s.options.vertical===!1?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,s.options.variableWidth===!0&&(o=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=s.options.rtl===!0?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,s.options.centerMode===!0&&(o=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=s.options.rtl===!0?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);i>t;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s=this;return o=s.options.centerMode===!0?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,s.options.swipeToSlide===!0?(s.$slideTrack.find(".slick-slide").each(function(e,n){return n.offsetLeft-o+i(n).outerWidth()/2>-1*s.swipeLeft?(t=n,!1):void 0}),e=Math.abs(i(t).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.setPaused,e,!0)).on("mouseleave.slick",i.proxy(e.setPaused,e,!1))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.$list.on("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),i.options.autoplay===!0&&i.autoPlay()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")})})},o.src=t})}var t,o,s,n,r=this;r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=s+r.options.slidesToShow,r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.paused=!1,i.autoPlay()},e.prototype.postSlide=function(i){var e=this;e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay(),e.options.accessibility===!0&&e.initADA()},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,t,o=this;e=i("img[data-lazy]",o.$slider).length,e>0&&(t=i("img[data-lazy]",o.$slider).first(),t.attr("src",null),t.attr("src",t.attr("data-lazy")).removeClass("slick-loading").load(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad(),o.options.adaptiveHeight===!0&&o.setPosition()}).error(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad()}))},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,s.options.infinite||(s.slideCount<=s.options.slidesToShow?s.currentSlide=0:s.currentSlide>o&&(s.currentSlide=o)),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,t=n[e].breakpoint,n.hasOwnProperty(e)){for(;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),e.$slider.trigger("reInit",[e]),e.options.autoplay===!0&&e.focusHandler()},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,o.slideCount<1||0>i||i>o.slideCount-1?!1:(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(e,t,o){var s,n,r=this;if("responsive"===e&&"array"===i.type(t))for(n in t)if("array"!==i.type(r.options.responsive))r.options.responsive=[t[n]];else{for(s=r.options.responsive.length-1;s>=0;)r.options.responsive[s].breakpoint===t[n].breakpoint&&r.options.responsive.splice(s,1),s--;r.options.responsive.push(t[n])}else r.options[e]=t;o===!0&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0?(e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.setPaused=function(i){var e=this;e.options.autoplay===!0&&e.options.pauseOnHover===!0&&(e.paused=i,i?e.autoPlayClear():e.autoPlay())},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?(t.setSlideClasses(s),void t.asNavFor(s)):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l=null,a=this;return e=e||!1,a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i||a.slideCount<=a.options.slidesToShow?void 0:(e===!1&&a.asNavFor(i),o=i,l=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(0>i||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0?a.animateSlide(r,function(){a.postSlide(o); */
/*}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(0>i||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay===!0&&clearInterval(a.autoPlayTimer),s=0>o?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0?a.animateSlide(l,function(){a.postSlide(s)}):a.postSlide(s))))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?s.options.rtl===!1?"left":"right":360>=o&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&225>=o?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&135>=o?"left":"right":"vertical"},e.prototype.swipeEnd=function(i){var e,t=this;if(t.dragging=!1,t.shouldClick=t.touchObject.swipeLength>10?!1:!0,void 0===t.touchObject.curX)return!1;if(t.touchObject.edgeHit===!0&&t.$slider.trigger("edge",[t,t.swipeDirection()]),t.touchObject.swipeLength>=t.touchObject.minSwipe)switch(t.swipeDirection()){case"left":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide+t.getSlideCount()):t.currentSlide+t.getSlideCount(),t.slideHandler(e),t.currentDirection=0,t.touchObject={},t.$slider.trigger("swipe",[t,"left"]);break;case"right":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide-t.getSlideCount()):t.currentSlide-t.getSlideCount(),t.slideHandler(e),t.currentDirection=1,t.touchObject={},t.$slider.trigger("swipe",[t,"right"])}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),t.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!r.dragging||n&&1!==n.length?!1:(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,r.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),t=r.swipeDirection(),"vertical"!==t?(void 0!==i.originalEvent&&r.touchObject.swipeLength>4&&i.preventDefault(),s=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),o=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===t||r.currentSlide>=r.getDotCount()&&"left"===t)&&(o=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.options.vertical===!1?r.swipeLeft=e+o*s:r.swipeLeft=e+o*(r.$list.height()/r.listWidth)*s,r.options.verticalSwiping===!0&&(r.swipeLeft=e+o*s),r.options.fade===!0||r.options.touchMove===!1?!1:r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft)):void 0)},e.prototype.swipeStart=function(i){var e,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;document[i.hidden]?(i.paused=!0,i.autoPlayClear()):i.options.autoplay===!0&&(i.paused=!1,i.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){i(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+t})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(t){i(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+t,id:"slick-slide"+e.instanceUid+t})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.focusHandler=function(){var e=this;e.$slider.on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.isPlay&&(o.is(":focus")?(e.autoPlayClear(),e.paused=!0):(e.paused=!1,e.autoPlay()))},0)})},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;r>i;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});
/* Hover */ !function(e){e.fn.hoverIntent=function(t,n,o){var r={interval:100,sensitivity:6,timeout:0};r="object"==typeof t?e.extend(r,t):e.isFunction(n)?e.extend(r,{over:t,out:n,selector:o}):e.extend(r,{over:t,out:t,selector:n});var v,i,u,s,h=function(e){v=e.pageX,i=e.pageY},I=function(t,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.sqrt((u-v)*(u-v)+(s-i)*(s-i))<r.sensitivity?(e(n).off("mousemove.hoverIntent",h),n.hoverIntent_s=!0,r.over.apply(n,[t])):(u=v,s=i,n.hoverIntent_t=setTimeout(function(){I(t,n)},r.interval),void 0)},a=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,r.out.apply(t,[e])},c=function(t){var n=e.extend({},t),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===t.type?(u=n.pageX,s=n.pageY,e(o).on("mousemove.hoverIntent",h),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){I(n,o)},r.interval))):(e(o).off("mousemove.hoverIntent",h),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){a(n,o)},r.timeout)))};return this.on({"mouseenter.hoverIntent":c,"mouseleave.hoverIntent":c},r.selector)}}(jQuery);


/* !function(t){t.miniCartRd=function(e,o){var i=this;i.settings={};var n=function(){var e='<div id="my_popup" class="rdPopup" style="display:none;">Producto agregado al carrito!<button class="my_popup_close">X</button></div>';t("body").prepend(e),i.setCart(),t(document).on("click",".pre-cart .eliminar",i.removeCartItem).on("click",".buy",i.addCartItem)};i.setCart=function(){var e=t(".pre-cart"),o=e.find("tbody"),n=t(".btn.carrito");vtexjs.checkout.getOrderForm().done(function(s){var p=s,d=p.items,r=p.value;d.length>0?(e.find(".wrap-scroll").show(),e.find(".resumen").show(),e.find(".empty-cart").hide(),e.removeClass("empty"),o.empty(),t.each(d,function(t,e){var n=e;o.append(i.setCartItem(n,t)),t+1<d.length&&o.append('<tr class="linea"><td colspan="4"><p></p></td></tr>')})):(e.find(".wrap-scroll").hide(),e.find(".resumen").hide(),e.find(".empty-cart").show(),e.addClass("empty")),n.find(".num p").text(d.length).parent().fadeIn(250),n.find(".precio .value").text(a(r/100,",",".",2)).parent().slideDown(250),e.find(".total .numero").text(a(r/100,",",".",2,!0))})},i.setCartItem=function(t,e){var o=t.id,i=t.name,n=t.additionalInfo.brandName,s=t.imageUrl,p=t.quantity,d=t.price,r=a(d/100,",",".",2,!0),l='<tr class="item item-desktop"><td data-id="'+o+'"><div class="item"><img src="'+s+'" class="img"/><div class="info"><h3>'+i+"</h3><p>"+n+'</p></div></div></td><td><p class="cantidad">'+p+'</p></td><td><p class="precio"> '+r+' </p></td><td><p class="icono eliminar" data-index="'+e+'"> X </p></td></tr>';return l},i.addCartItem=function(e){e.preventDefault();var o,n,a,s,p;if(a=new RegExp(/sku=.+?&/g),s=a.test(t(this).parents(".row").find(".buy-button-normal a").attr("href")))n=t(this).parents(".row").find(".buy-button-normal a").attr("href").match(/sku=.+?&/g).toString().replace(/\D/g,""),p=t(this).parents(".row").find(".buy-button-normal a").attr("href").match(/seller=.+?&/g).toString().replace(/\D/g,""),o={id:n,quantity:1,seller:p},vtexjs.checkout.addToCart([o]).done(function(e){i.setCart(),t("#my_popup").popup({autoopen:!0})});else{var d=t(this).parents(".row").find(".buy-button-normal a").attr("href");window.location=d}},i.removeCartItem=function(){var e=t(this),o=e.data("index"),n=e.parents(".item");n.addClass("removing"),vtexjs.checkout.getOrderForm().then(function(t){var e=t.items[o];return e.index=o,vtexjs.checkout.removeItems([e])}).done(i.setCart)};var a=function(t,e,o,i,n){n=n===!0&&this.currency?this.currency:"string"==typeof n?n:"",i="number"!=typeof i?2:i;var a="\\d(?=(\\d{3})+"+(i>0?"\\D":"$")+")",t=(1*t).toFixed(Math.max(0,~~i));return n+t.replace(".",o||",").replace(new RegExp(a,"g"),"$&"+(e||"."))};n()}}(jQuery),!function(t){var e,o,i=t(window),n={},a=[],s=[],p=null,d="_open",r="_close",l=[],c=null,u=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),f="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",h={_init:function(e){var o=t(e),i=o.data("popupoptions");s[e.id]=!1,a[e.id]=0,o.data("popup-initialized")||(o.attr("data-popup-initialized","true"),h._initonce(e)),i.autoopen&&setTimeout(function(){h.show(e,0)},0)},_initonce:function(o){var i,n,a=t(o),s=t("body"),r=a.data("popupoptions");if(p=parseInt(s.css("margin-right"),10),c=void 0!==document.body.style.webkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition||void 0!==document.body.style.OTransition||void 0!==document.body.style.transition,"tooltip"==r.type&&(r.background=!1,r.scrolllock=!1),r.backgroundactive&&(r.background=!1,r.blur=!1,r.scrolllock=!1),r.scrolllock){var l,f;"undefined"==typeof e&&(l=t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),f=l.children(),e=f.innerWidth()-f.height(99).innerWidth(),l.remove())}if(a.attr("id")||a.attr("id","j-popup-"+parseInt(1e8*Math.random(),10)),a.addClass("popup_content"),s.prepend(o),a.wrap('<div id="'+o.id+'_wrapper" class="popup_wrapper" />'),i=t("#"+o.id+"_wrapper"),i.css({opacity:0,visibility:"hidden",position:"absolute"}),u&&i.css("cursor","pointer"),"overlay"==r.type&&i.css("overflow","auto"),a.css({opacity:0,visibility:"hidden",display:"inline-block"}),r.setzindex&&!r.autozindex&&i.css("z-index","100001"),r.outline||a.css("outline","none"),r.transition&&(a.css("transition",r.transition),i.css("transition",r.transition)),a.attr("aria-hidden",!0),r.background&&!t("#"+o.id+"_background").length){s.prepend('<div id="'+o.id+'_background" class="popup_background"></div>');var v=t("#"+o.id+"_background");v.css({opacity:0,visibility:"hidden",backgroundColor:r.color,position:"fixed",top:0,right:0,bottom:0,left:0}),r.setzindex&&!r.autozindex&&v.css("z-index","100000"),r.transition&&v.css("transition",r.transition)}"overlay"==r.type&&(a.css({textAlign:"left",position:"relative",verticalAlign:"middle"}),n={position:"fixed",width:"100%",height:"100%",top:0,left:0,textAlign:"center"},r.backgroundactive&&(n.position="relative",n.height="0",n.overflow="visible"),i.css(n),i.append('<div class="popup_align" />'),t(".popup_align").css({display:"inline-block",verticalAlign:"middle",height:"100%"})),a.attr("role","dialog");var m=r.openelement?r.openelement:"."+o.id+d;t(m).each(function(e,o){t(o).attr("data-popup-ordinal",e),o.id||t(o).attr("id","open_"+parseInt(1e8*Math.random(),10))}),a.attr("aria-labelledby")||a.attr("aria-label")||a.attr("aria-labelledby",t(m).attr("id")),"hover"==r.action?(r.keepfocus=!1,t(m).on("mouseenter",function(e){h.show(o,t(this).data("popup-ordinal"))}),t(m).on("mouseleave",function(t){h.hide(o)})):t(document).on("click",m,function(e){e.preventDefault();var i=t(this).data("popup-ordinal");setTimeout(function(){h.show(o,i)},0)}),r.closebutton&&h.addclosebutton(o),r.detach?a.hide().detach():i.hide()},show:function(n,d){var u=t(n);if(!u.data("popup-visible")){u.data("popup-initialized")||h._init(n),u.attr("data-popup-initialized","true");var f=t("body"),m=u.data("popupoptions"),b=t("#"+n.id+"_wrapper"),g=t("#"+n.id+"_background");if(v(n,d,m.beforeopen),s[n.id]=d,setTimeout(function(){l.push(n.id)},0),m.autozindex){for(var y=document.getElementsByTagName("*"),k=y.length,_=0,w=0;k>w;w++){var x=t(y[w]).css("z-index");"auto"!==x&&(x=parseInt(x,10),x>_&&(_=x))}a[n.id]=_,m.background&&a[n.id]>0&&t("#"+n.id+"_background").css({zIndex:a[n.id]+1}),a[n.id]>0&&b.css({zIndex:a[n.id]+2})}m.detach?(b.prepend(n),u.show()):b.show(),o=setTimeout(function(){b.css({visibility:"visible",opacity:1}),t("html").addClass("popup_visible").addClass("popup_visible_"+n.id),b.addClass("popup_wrapper_visible")},20),m.scrolllock&&(f.css("overflow","hidden"),f.height()>i.height()&&f.css("margin-right",p+e)),m.backgroundactive&&u.css({top:(i.height()-(u.get(0).offsetHeight+parseInt(u.css("margin-top"),10)+parseInt(u.css("margin-bottom"),10)))/2+"px"}),u.css({visibility:"visible",opacity:1}),m.background&&(g.css({visibility:"visible",opacity:m.opacity}),setTimeout(function(){g.css({opacity:m.opacity})},0)),u.data("popup-visible",!0),h.reposition(n,d),u.data("focusedelementbeforepopup",document.activeElement),m.keepfocus&&(u.attr("tabindex",-1),setTimeout(function(){"closebutton"===m.focuselement?t("#"+n.id+" ."+n.id+r+":first").focus():m.focuselement?t(m.focuselement).focus():u.focus()},m.focusdelay)),t(m.pagecontainer).attr("aria-hidden",!0),u.attr("aria-hidden",!1),v(n,d,m.onopen),c?b.one("transitionend",function(){v(n,d,m.opentransitionend)}):v(n,d,m.opentransitionend)}},hide:function(e,i){var n=t.inArray(e.id,l);if(-1!==n){o&&clearTimeout(o);var a=t("body"),d=t(e),r=d.data("popupoptions"),u=t("#"+e.id+"_wrapper"),f=t("#"+e.id+"_background");d.data("popup-visible",!1),1===l.length?t("html").removeClass("popup_visible").removeClass("popup_visible_"+e.id):t("html").hasClass("popup_visible_"+e.id)&&t("html").removeClass("popup_visible_"+e.id),l.splice(n,1),u.hasClass("popup_wrapper_visible")&&u.removeClass("popup_wrapper_visible"),r.keepfocus&&!i&&setTimeout(function(){t(d.data("focusedelementbeforepopup")).is(":visible")&&d.data("focusedelementbeforepopup").focus()},0),u.css({visibility:"hidden",opacity:0}),d.css({visibility:"hidden",opacity:0}),r.background&&f.css({visibility:"hidden",opacity:0}),t(r.pagecontainer).attr("aria-hidden",!1),d.attr("aria-hidden",!0),v(e,s[e.id],r.onclose),c&&"0s"!==d.css("transition-duration")?d.one("transitionend",function(t){d.data("popup-visible")||(r.detach?d.hide().detach():u.hide()),r.scrolllock&&setTimeout(function(){a.css({overflow:"visible","margin-right":p})},10),v(e,s[e.id],r.closetransitionend)}):(r.detach?d.hide().detach():u.hide(),r.scrolllock&&setTimeout(function(){a.css({overflow:"visible","margin-right":p})},10),v(e,s[e.id],r.closetransitionend))}},toggle:function(e,o){t(e).data("popup-visible")?h.hide(e):setTimeout(function(){h.show(e,o)},0)},reposition:function(e,o){var n=t(e),a=n.data("popupoptions"),s=t("#"+e.id+"_wrapper");if(t("#"+e.id+"_background"),o=o||0,"tooltip"==a.type){s.css({position:"absolute"});var p;p=a.tooltipanchor?t(a.tooltipanchor):a.openelement?t(a.openelement).filter('[data-popup-ordinal="'+o+'"]'):t("."+e.id+d+'[data-popup-ordinal="'+o+'"]');var r=p.offset();"right"==a.horizontal?s.css("left",r.left+p.outerWidth()+a.offsetleft):"leftedge"==a.horizontal?s.css("left",r.left+p.outerWidth()-p.outerWidth()+a.offsetleft):"left"==a.horizontal?s.css("right",i.width()-r.left-a.offsetleft):"rightedge"==a.horizontal?s.css("right",i.width()-r.left-p.outerWidth()-a.offsetleft):s.css("left",r.left+p.outerWidth()/2-n.outerWidth()/2-parseFloat(n.css("marginLeft"))+a.offsetleft),"bottom"==a.vertical?s.css("top",r.top+p.outerHeight()+a.offsettop):"bottomedge"==a.vertical?s.css("top",r.top+p.outerHeight()-n.outerHeight()+a.offsettop):"top"==a.vertical?s.css("bottom",i.height()-r.top-a.offsettop):"topedge"==a.vertical?s.css("bottom",i.height()-r.top-n.outerHeight()-a.offsettop):s.css("top",r.top+p.outerHeight()/2-n.outerHeight()/2-parseFloat(n.css("marginTop"))+a.offsettop)}else"overlay"==a.type&&(a.horizontal?s.css("text-align",a.horizontal):s.css("text-align","center"),a.vertical?n.css("vertical-align",a.vertical):n.css("vertical-align","middle"))},addclosebutton:function(e){var o;o=t(e).data("popupoptions").closebuttonmarkup?t(n.closebuttonmarkup).addClass(e.id+"_close"):'<button class="popup_close '+e.id+'_close" title="Close" aria-label="Close"><span aria-hidden="true">Ãƒâ€”</span></button>',$el.data("popup-initialized")&&$el.append(o)}},v=function(e,o,i){var n=t(e).data("popupoptions"),a=n.openelement?n.openelement:"."+e.id+d,s=t(a+'[data-popup-ordinal="'+o+'"]');"function"==typeof i&&i.call(t(e),e,s)};t(document).on("keydown",function(e){if(l.length){var o=l[l.length-1],i=document.getElementById(o);t(i).data("popupoptions").escape&&27==e.keyCode&&h.hide(i)}}),t(document).on("click",function(e){if(l.length){var o=l[l.length-1],i=document.getElementById(o),n=t(i).data("popupoptions").closeelement?t(i).data("popupoptions").closeelement:"."+i.id+r;t(e.target).closest(n).length&&(e.preventDefault(),h.hide(i)),t(i).data("popupoptions").blur&&!t(e.target).closest("#"+o).length&&2!==e.which&&t(e.target).is(":visible")&&(t(i).data("popupoptions").background?(h.hide(i),e.preventDefault()):h.hide(i,!0))}}),t(document).on("keydown",function(e){if(l.length&&9==e.which){var o=l[l.length-1],i=document.getElementById(o),n=t(i).find("*"),a=n.filter(f).filter(":visible"),s=t(":focus"),p=a.length,d=a.index(s);0===p?(t(i).focus(),e.preventDefault()):e.shiftKey?0===d&&(a.get(p-1).focus(),e.preventDefault()):d==p-1&&(a.get(0).focus(),e.preventDefault())}}),t.fn.popup=function(e){return this.each(function(){var o=t(this);if("object"==typeof e){var i=t.extend({},t.fn.popup.defaults,e,o.data("popupoptions"));o.data("popupoptions",i),n=o.data("popupoptions"),h._init(this)}else"string"==typeof e?(o.data("popupoptions")||(o.data("popupoptions",t.fn.popup.defaults),n=o.data("popupoptions")),h[e].call(this,this)):(o.data("popupoptions")||(o.data("popupoptions",t.fn.popup.defaults),n=o.data("popupoptions")),h._init(this))})},t.fn.popup.defaults={type:"overlay",autoopen:!1,background:!0,backgroundactive:!1,color:"black",opacity:"0.5",horizontal:"center",vertical:"middle",offsettop:0,offsetleft:0,escape:!0,blur:!0,setzindex:!0,autozindex:!1,scrolllock:!1,closebutton:!1,closebuttonmarkup:null,keepfocus:!0,focuselement:null,focusdelay:50,outline:!1,pagecontainer:null,detach:!1,openelement:null,closeelement:null,transition:null,tooltipanchor:null,beforeopen:null,onclose:null,onopen:null,opentransitionend:null,closetransitionend:null}}(jQuery);  */
  
  

  /*----------------------------------------------------------------------------------------------------------------------------------- */
  /*NUEVO 23-10-19*/
  function carrusel_pdp(){
                $('.carruselito').owlCarousel({
                loop: true,
                margin: 10,
                dots: false,
                nav: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }



                })
            }

            

function fichaproducto(){

                //funcion recargar ficha producto
                $("input[name=pcolor]").click(function () {    
                    //alert("La edad seleccionada es: " + $('input:radio[name=pcolor]:checked').val());
                    //alert("La edad seleccionada es: " + $(this).val());

                    var colorselect = $(this).val();
                    console.log(colorselect);


                    if (colorselect === "crojo") {  
                     
                       $('.ficha_img').css('background-image','url("https://ostercl.vteximg.com.br/arquivos/rojo2.jpg")');
                       //CAMBIAR LINK DONDE COMPRAR
                       $(".ficha_eleccion .btn_comprar .btn a").attr("href","/checkout/cart/add?sku=378&qty=1&seller=1&redirect=true&sc=1");

                      console.log("rojito");
                     
                    }else if (colorselect === "cnegro-accesorios") {  
                     
                       $('.ficha_img').css('background-image','url("https://ostermx.vteximg.com.br/arquivos/licuadora-gris-accesorios.jpg")');
                       //CAMBIAR LINK DONDE COMPRAR
                       $(".ficha_eleccion .btn_comprar .btn a").attr("href","/checkout/cart/add?sku=386&qty=1&seller=1&redirect=true&sc=1");

                      console.log("negro accesorios");
                     
                    }
                    else {
                      
                       $('.ficha_img').css('background-image','url("https://ostercl.vteximg.com.br/arquivos/negro2.jpg")');
                       //CAMBIAR LINK DONDE COMPRAR
                       $(".ficha_eleccion .btn_comprar .btn a").attr("href","/checkout/cart/add?sku=377&qty=1&seller=1&redirect=true&sc=1");
                      console.log("negrito");
                    }

                });

            };    






function agregarcheck() {

// $("ul.vtexIdUI-providers-list li button").click(function(){


//             $('.form-vertical').append("<label class='checkbox newsletter-label uno' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
//             $('.form-vertical').append("<label class='checkbox newsletter-label dos' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")
            
//             $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label uno' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
//             $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label dos' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")



// });

  $("div#vtexIdContainer").click(function(){
      console.log("demo")
  });


  setTimeout(function(){

    if ($('#vtexIdUI-email-confirmation').length > 0){
          $(".form-vertical label.checkbox").empty();
          // $('.modal-body:eq(2)').empty();
          $('.form-vertical').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
          $('.form-vertical').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")
          $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>He leído y acepto los <a href='/servicio-y-soporte/informacion-legal/terminos-y-condiciones' target='_blank';>Términos y Condiciones</a> y la <a href='/servicio-y-soporte/informacion-legal/politicas-de-privacidad' target='_blank';>Política de Privacidad</a></span></label>")
          $('.modal-body:eq(2)').append("<label class='checkbox newsletter-label' data-bind='fadeVisible: checkout.canEditData'><input type='checkbox' id='opt-in-newsletter' data-bind='checked: checkout.optinNewsLetter, enable: checkout.saveData' checked><span class='newsletter-text' data-i18n='global.optinNewsLetter'>Acepto recibir ofertas, promociones y encuestas de Oster®</span></label>")
      

    }
  }, 5000);
  


}





//integracion Popup
       function popupHome(){
            $('#form-subscribe').validate({
                rules: {
                    emailPopupHome: {
                        required: true,
                        email: true
                    }
                    
                },
                submitHandler: function() {
                    var actionUrl = '/api/dataentities/FH/documents';
                    var sendMasterData = fn.guardarMasterDataPopup();
                    //console.log(JSON.stringify(sendMasterData));
                    $.ajax({
                        accept: 'application/vnd.vtex.ds.v10+json',
                        contentType: 'application/json; charset=utf-8',
                        crossDomain: !0,
                        data: JSON.stringify(sendMasterData),
                        cache: !1,
                        type: 'POST',
                        url: actionUrl,
                        success: function(data) {
                            if (data != "") {
                                $('#form-subscribe input[type=button]').val('Enviado!'); 
                                $("#form-subscribe")[0].reset()
                            }
                        }
                    })
                }
            })
        };
        function guardarMasterDataPopup(){
            var data = {};

            data.newsletterClientEmail     = $('#form-subscribe #contactenosnombres').val()
            // data.email      = $('#form-subscribe #contactenosemail').val()

            return data
        }
        //integracion Popup




console.log("hola");
$("div#vtexIdContainer").click(function(){
    console.log("demo")
});