console.log("Cargando navegador.js...");

function inicializar(){
    $("#menu").click(function(){
        gestionarMenu();
    });
    $("#p1").click(function(){
        $("#div1").css("left","10%");
        $("#div2").css("left","-100%");
    });
    $("#p2").click(function(){
        $("#div1").css("left","-100%");
        $("#div2").css("left","10%");
    });
    
    //SELECTOR DE CLASE y Eventos de ratón
    $(".enlace").mouseenter(function(){
        $(this).css("font-size","4em");
    });
    $(".enlace").mouseleave(function(){
        $(this).css("font-size","2em");
    });

    //LO DE LA HOJA QUE SE MUEVE
    var hoja = new Hoja(400,10,50,50,0.5);
    setInterval(function(){
        hoja.mover();
    },16);
}


var visible = false;
function gestionarMenu(){
    if (visible) {
        $("#menu").css("left", "-60%");
        visible = false;
    } else {
        $("#menu").css("left","0px");
        visible = true;
    }
}

/*function gestionarMenu(){
    if (visible) {
        document.getElementById("menu").style.left="-60%";
        visible = false; 
    } else {
        document.getElementById("menu").style.left="0px";
        visible = true;
    }
}*/
