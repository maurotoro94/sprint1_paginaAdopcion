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
    "<div id='botonVolver' class='card-img-overlay h-100 d-flex flex-column justify-content-top'><a href='info2.html'><i class='fas fa-arrow-circle-left'></i></a></div>";
    
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
      "<p class='card-text'>"+descripcion+"</p>";

    detalleAnimales.innerHTML+=  "</div>"+
    "</div>";
 
}

verDetalle();





