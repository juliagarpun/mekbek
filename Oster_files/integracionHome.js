var MedialabDos = function(){
    var bodyDos = $('body');

    OsterMxDos = function(){
        fn.documentAjax();
        fn.documentOnload();
        fn.documentReady()
    },
    fn = {
        documentAjax: function(){
            /**/
        },
        documentOnload: function(){
            $(window).load(function(){

            })
        },
        documentReady: function(){
            //llamr codigo
            fn.homePopup()  
            fn.homeFooter()
        },


        //codigo

        //integracion popup

        homePopup: function(){

            console.log("FORMULARIO POPUP");


            $('#form-subscribe').validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    confirm: {
                        required: true
                    }

                },
                submitHandler: function() {
                    var actionUrl = '/api/dataentities/FH/documents';
                    var sendMasterData = fn.guardarMasterDataContactenos();
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
                                //$('#form-subscribe input[type=submit]').val('Enviado!'); 
                                //$("#form-subscribe")[0].reset()

                                $('#contentInfo').addClass('oculto'); 
                                $('.mensajeFinal').addClass('muestra'); 

                                //Envio Dos

                                //var envioEmail = $('#form-subscribe #emailPopupHome').val();
                                var newsForm = $('#form-subscribe').serialize();

                                      $.ajax({
                                        url: 'https://addtest.live/sync/syncVtexMxNewsletter.php',
                                        async: !1,
                                        type: "POST",
                                        crossDomain: !0,
                                        dataType: "jsonp",
                                        data: newsForm,
                                        success: function(data) {
                                          console.log(data);
                                          if (data == 400) {
                                            // alert("Error on submit");
                                          }
                                        },
                                        error: function(data) {
                                         // alert("Error on submit");
                                        }
                                      })

                                //Envio Dos      


                            }
                        }
                    })
                }
            })
        },
        guardarMasterDataContactenos: function(){
            var termino;
            if($('input[name=confirm]').is(':checked')){
                termino = true;
            }else{
                termino = false;
            }

            var data = {};

            data.newsletterClientEmail     = $('#form-subscribe #email').val()
            data.formtermino     = termino
            // data.nombres     = $('#contactenosTopi #contactenosnombres').val()
            // data.email      = $('#contactenosTopi #contactenosemail').val()
            // data.telefono   = $('#contactenosTopi #contactenostelefono').val()
            // data.asunto   = $('#contactenosTopi #contactenosasunto').val()
            // data.mensaje   = $('#contactenosTopi #contactenosMensaje').val()

            return data
        },
        //integracion popup     



        //integracion footer

        homeFooter: function(){

            console.log("FORMULARIO POPUP");


            $('#form-footer').validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    checkmark: {
                        required: true
                    }

                },
                submitHandler: function() {
                    var actionUrl = '/api/dataentities/FH/documents';
                    var sendMasterData = fn.guardarMasterDataFooter();
                    //console.log(JSON.stringify(sendMasterData));


                    if($('input[name=checkmark]').is(':checked')){
                        console.log("paso")

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

                                console.log("envio master data")
                                //$('#form-subscribe input[type=submit]').val('Enviado!'); 
                                //$("#form-subscribe")[0].reset()

                                // $('#contentInfo').addClass('oculto'); 
                                // $('.mensajeFinal').addClass('muestra'); 


                                $("form#form-footer").append("<span class='spangracias'>Gracias por suscribirte</span>")
                                $("footer .dividir3 > div:last-child .envio").css("display", "none");
                                $("footer .dividir3 > div:last-child .check").css("display", "none");
                                $("footer .dividir3 > div:last-child .redes").css("margin-top","60px");

                                //Envio Dos

                                //var envioEmail = $('#form-subscribe #emailPopupHome').val();
                                var newsForm = $('#form-footer').serialize();

                                      $.ajax({
                                        url: 'https://addtest.live/sync/syncVtexMxNewsletter.php',
                                        async: !1,
                                        type: "POST",
                                        crossDomain: !0,
                                        dataType: "jsonp",
                                        data: newsForm,
                                        success: function(data) {
                                          console.log(data);
                                          if (data == 400) {
                                            // alert("Error on submit");

                                            console.log("enviado!");



                                          }
                                        },
                                        error: function(data) {
                                         // alert("Error on submit");
                                        }
                                      })

                                //Envio Dos      


                            }
                        }
                    })


                    }else{
                        console.log("no paso")
                        $("footer .dividir3 > div:last-child .check label").css("color","red")
                    }



                }
            })
        },
        guardarMasterDataFooter: function(){
            var termino;
            if($('input[name=checkmark]').is(':checked')){
                termino = true;
            }else{
                termino = false;
            }

            var data = {};

            data.newsletterClientEmail     = $('#form-footer #email').val()
            data.formtermino     = termino
            // data.nombres     = $('#contactenosTopi #contactenosnombres').val()
            // data.email      = $('#contactenosTopi #contactenosemail').val()
            // data.telefono   = $('#contactenosTopi #contactenostelefono').val()
            // data.asunto   = $('#contactenosTopi #contactenosasunto').val()
            // data.mensaje   = $('#contactenosTopi #contactenosMensaje').val()

            return data
        },
        //integracion footer     


        //codigo


    }
    OsterMxDos()
}(jQuery, window);