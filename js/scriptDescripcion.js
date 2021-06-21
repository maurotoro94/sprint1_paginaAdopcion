var detalleAnimales = document.getElementById('cuerpoDetalle');

let imagen =[]; //imagenes perros
let nombres= []; //nombres perros
let raza=[];//raza perros
let descripcion=[];
let genero=[];
let direccion=[];
let caracteristica=[];
let personalidad=[];
let nombreAutor=[];
let imagenAutor=[];
let edadMascota=[];
let textoPersonalidad="";

function verDetalle(){
    var imgGenero = "./imagenes/masculino.PNG";
    var divDescripcion = JSON.parse(localStorage.getItem('detalleMascota'));
    imagen = divDescripcion.imagenAnimal;
    nombreAutor= divDescripcion.nombreAutor;
    nombres = divDescripcion.nombreAnimal;
    raza = divDescripcion.razaAnimal;
    descripcion = divDescripcion.descripcionAnimal;
    genero = divDescripcion.generoAnimal;
    direccion = divDescripcion.direccionAnimal;
    caracteristica = divDescripcion.caracteristicasAnimal;
    personalidad = divDescripcion.personalidadAnimal;
    edadMascota = divDescripcion.edad;
    imagenAutor = divDescripcion.imagenAutor;

    console.log(imagen);
      if(genero==="Female"){
        imgGenero= "./imagenes/femenino.PNG"
      }
    detalleAnimales.innerHTML=
    "<div class='card' id='tarjetaDetalle'>"+
    "<img class='card-img-top' src='"+imagen+"' style='width: 100%;' alt='Card image'>"+
    "<div id='botonVolver' class='card-img-overlay h-100 d-flex flex-column justify-content-top'><a href='info2.html'><i class='fas fa-arrow-circle-left fa-5x'></i></a></div>";
    
    detalleAnimales.innerHTML+=
    "<div class='card-body'>"+
      "<div class='header1'>"+
      "<div class='div1_header1'><h4 class='card-title'>"+nombres+"<img src='"+ imgGenero+"'>"+"</h4></div>"+
      "<div class='div2_header1'><i class='far fa-heart'></i></div>"+
      "</div>"+
      "<div class='desc1'>"+
      "<div class='div1_desc1 card-text'>"+"<img src='"+"./imagenes/raza.PNG" +"'>"+raza+"</div>"+
      "<div class='div2_desc1 card-text'>"+"<img src='"+"./imagenes/edad.PNG" +"'>"+edadMascota+"</div>"+
      "</div>"+
      "<div class='desc1'>"+
      "<div class='div1_desc1 card-text'>"+"<img src='"+"./imagenes/ubicacion.PNG" +"'>"+direccion+"</div>"+
      "</div>"+
      "<div id='divPersonalidad'>"+
      "<div class='div1_desc1 card-text' style='margin-top: 14px;'><h5 class='card-title'>Personalidad</h5></div>"+
      "</div>";
      
      for(i=0;i< personalidad.length;i++){

         if(personalidad[i]==="Juguetón"){
          textoPersonalidad+= "<div class='card card-personalidad justify-content-end'><img class='card-img-center' src='"+ "./imagenes/jugueton.PNG"+"'>"+
          "<div class='card-text justify-content-top'>Juguetón</div>"
          +"</div>";
         } 

         else if(personalidad[i]==="Tierno"){
          textoPersonalidad+= "<div class='card card-personalidad justify-content-end'><img class='card-img-top' src='"+ "./imagenes/tierno.PNG"+"'>"+
          "<div class='card-text'>Tierno</div>"
          +"</div>";
         } 

         else if(personalidad[i]==="Cariñoso"){
          textoPersonalidad+= "<div class='card card-personalidad justify-content-end'><img class='card-img-center' src='"+ "./imagenes/carinoso.PNG"+"'>"+
          "<div class='card-text'>Cariñoso</div>"
          +"</div>";
         } 

         else if(personalidad[i]==="Inquieto"){
          textoPersonalidad+= "<div class='card card-personalidad justify-content-end'><img class='card-img-center' src='"+ "./imagenes/inquieto.PNG"+"'>"+
          "<div class='card-text'>Inquieto</div>"
          +"</div>";
         } 
         console.log(personalidad[i]);         
      }
    detalleAnimales.innerHTML+="<div class='flexPersonalidad'>"+textoPersonalidad+"</div>";
    detalleAnimales.innerHTML+="<div class='card-body' id='HistoriaMascota'>"+
    "<div class='div1_desc1 card-text' style='margin-top: 14px;'><h5 class='card-title'>Historia de "+nombres+"</h5>"+
    "<p class='card-text'>"+descripcion+"</p>"+"</div>"+
    "</div>";
    detalleAnimales.innerHTML+="<div class='desc1' id='InformacionAutor'>"+
    "<div class='div1_desc1 card-text'>"+"<div><img class='imagenRedonda' src='"+imagenAutor+"'></div>"+"<div><p>Publicado por</p>"+nombreAutor+"</div>"+"</div>"+
    "<div class='div2_desc1 card-text'>"+"<a class='btn btn-dark btn-inicio' href='#' role='button'>Contactar</a></div>"+
    "</div>";
    detalleAnimales.innerHTML+="</div>"+
    "</div>";
 
}

verDetalle();





