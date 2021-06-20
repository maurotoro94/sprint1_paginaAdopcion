

var botonHome = document.getElementById('homeBotton');
var botonComment = document.getElementById('commentBotton');
var botonFavorite = document.getElementById('favoriteBotton');
var botonProfile = document.getElementById('profileBotton');

var parrafoHome = document.getElementById('home');
var parrafoComment = document.getElementById('mesagge');
var parrafoFavorite = document.getElementById('favorite');
var parrafoProfile = document.getElementById('profile');

var seccionAnimales = document.getElementById('mascotasDisponibles');
var detalleAnimales = document.getElementById('cuerpoDetalle');

let perros =[]; //imagenes perros
let gatos =[]; //imagenes gatos
let nombresPerros= []; //nombres perros
let nombresGatos=[]; //nombres gatos
let razaPerros=[];//raza perros
let razaGatos=[];//raza gatos
let descriPerros=[];
let descriGatos=[];
let generoPerros=[];
let generoGatos=[];
let direccionPerros=[];
let direccionGatos=[];
let caracteristicaPerros=[];
let caracteristicasGatos=[];
let personalidadPerros=[];
let personalidadGatos=[];
let nombreAutorPerro=[];
let nombreAutorGato=[];
let imagenAutorPerro=[];
let imagenAutorGato=[];
let edadPerro=[];
let edadGato=[];

const API_Mascotas = "https://my-json-server.typicode.com/maurotoro94/dbmascotas/db";

function obtenerMascotasDatos(url_api,callback){

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",url_api, true);
    xhttp.onreadystatechange= function (event){

        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));}
            
            else{ const error = new Error("Error en la petición"); return callback(error, null);}

        }

    };

    xhttp.send();
}        
    
obtenerMascotasDatos(API_Mascotas, function crearAnimales(error,data){

    if(error){
        return console.log(error);
    }

    let numeroAnimales = Object.keys(data.mascotas).length;

    for(i=0; i<numeroAnimales; i++){

        if(data.mascotas[i].categoryId==="category-dogs"){
            perros.push(data.mascotas[i].image);
            nombresPerros.push(data.mascotas[i].name);
            razaPerros.push(data.mascotas[i].race);
            descriPerros.push(data.mascotas[i].description);
            generoPerros.push(data.mascotas[i].gender);
            direccionPerros.push(data.mascotas[i].address);
            caracteristicaPerros.push(data.mascotas[i].feature);
            personalidadPerros.push(data.mascotas[i].personality);
            nombreAutorPerro.push(data.mascotas[i].author.name);
            imagenAutorPerro.push(data.mascotas[i].author.image);
            edadPerro.push(data.mascotas[i].age);
        }
        else{
            gatos.push(data.mascotas[i].image);
            nombresGatos.push(data.mascotas[i].name);
            razaGatos.push(data.mascotas[i].race);
            descriGatos.push(data.mascotas[i].description);
            generoGatos.push(data.mascotas[i].gender);
            direccionGatos.push(data.mascotas[i].address);
            caracteristicasGatos.push(data.mascotas[i].feature);
            personalidadGatos.push(data.mascotas[i].personality);
            nombreAutorGato.push(data.mascotas[i].author.name);
            imagenAutorGato.push(data.mascotas[i].author.image);
            edadGato.push(data.mascotas[i].age);

        }
        console.log(data.mascotas[i].image);
        console.log("perros: ",perros[i]);
        
    }
})

function mostrarPerros(){
    seccionAnimales.innerHTML = ""

    for(j=0; j < perros.length;j++){

        seccionAnimales.innerHTML += "<div class='card mascotaCard' style='width: 18rem; color:white;' onclick='verDetalle("+j+",0)'>"+
        "<img src='" + perros[j] +"' class='card-img-top'  alt='...'>"+
        "<div class='card-img-overlay h-100 d-flex flex-column justify-content-end'><h4 class='card-title'>"+
        nombresPerros[j]+"</h4><p>"+razaPerros[j]+"</p></div>"+
        "</div>";

    }

}

function mostrarGatos(){

    seccionAnimales.innerHTML = ""

    for(j=0; j < gatos.length;j++){

        seccionAnimales.innerHTML += "<div class='card mascotaCard' style='width: 18rem;  color:white;' onclick='verDetalle("+j+",1)'>"+
        "<img src='" + gatos[j] +"' class='card-img-top' alt='...'>"+
        "<div class='card-img-overlay h-100 d-flex flex-column justify-content-end'><h4 class='card-title'>"+
        nombresGatos[j]+"</h4><p>"+razaGatos[j]+"</p></div>"+
        "</div>";
    }


}

function verDetalle(indice,tipoAnimal){
    // Tipo animal es 0 cuando es perro y 1 cuando es gato
    // window.location.href = "http://www.informaticapc.com/";
    if(tipoAnimal===0){

        let DetalleAnimal={
            nombreAnimal:nombresPerros[indice],
            imagenAnimal:perros[indice],
            razaAnimal:razaPerros[indice],
            descripcionAnimal:descriPerros[indice],
            generoAnimal:generoPerros[indice],
            direccionAnimal:direccionPerros[indice],
            caracteristicasAnimal:caracteristicaPerros[indice],
            personalidadAnimal:personalidadPerros[indice],
            nombreAutor:nombreAutorPerro[indice],
            imagenAutor:imagenAutorPerro[indice],
            edad:edadPerro[indice]
        }

        localStorage.setItem("detalleMascota",JSON.stringify(DetalleAnimal));
    }

    else{
        // let DetalleAnimal{
        
        // }
        let DetalleAnimal={
            nombreAnimal:nombresGatos[indice],
            imagenAnimal:gatos[indice],
            razaAnimal:razaGatos[indice],
            descripcionAnimal:descriGatos[indice],
            generoAnimal:generoGatos[indice],
            direccionAnimal:direccionGatos[indice],
            caracteristicasAnimal:caracteristicasGatos[indice],
            personalidadAnimal:personalidadGatos[indice],
            nombreAutor:nombreAutorGato[indice],
            imagenAutor:imagenAutorGato[indice],
            edad:edadGato[indice]
                
            
        }
        localStorage.setItem("detalleMascota",JSON.stringify(DetalleAnimal));
    }
    window.location.href = "detalleAnimal.html";


}







function clickHome(){

    botonHome.className += " btn-dark";
    parrafoHome.innerHTML = "<i class='fas fa-home'></i>Home";

    botonComment.className = "btn";
    parrafoComment.innerHTML = "<i class='far fa-comment'></i>";

    botonFavorite.className = "btn";
    parrafoFavorite.innerHTML = "<i class='fas fa-heart'></i>";

    botonProfile.className = "btn";
    parrafoProfile.innerHTML = "<i class='fas fa-user-alt'></i>";

}

function clickComment(){

    botonComment.className += " btn-dark";
    parrafoComment.innerHTML =  "<i class='far fa-comment'></i> Comentarios";

    botonHome.className = "btn";
    parrafoHome.innerHTML= "<i class='fas fa-home'></i>";

    botonFavorite.className = "btn";
    parrafoFavorite.innerHTML = "<i class='fas fa-heart'></i>";

    botonProfile.className = "btn";
    parrafoProfile.innerHTML = "<i class='fas fa-user-alt'></i>";

}

function clickFavorite(){

    botonFavorite.className += " btn-dark";
    parrafoFavorite.innerHTML = "<i class='fas fa-heart'></i> Favoritos";

    parrafoHome.innerHTML= "<i class='fas fa-home'></i>";
    botonHome.className = "btn";

    botonComment.className = "btn";
    parrafoComment.innerHTML = "<i class='far fa-comment'></i>";

    botonProfile.className = "btn";
    parrafoProfile.innerHTML = "<i class='fas fa-user-alt'></i>";

}

function clickProfile(){

    botonProfile.className += " btn-dark";
    parrafoProfile.innerHTML = "<i class='fas fa-user-alt'></i> Perfil";

    parrafoHome.innerHTML= "<i class='fas fa-home'></i>";
    botonHome.className = "btn";

    parrafoComment.innerHTML = "<i class='far fa-comment'></i>";
    botonComment.className = "btn";

    parrafoFavorite.innerHTML = "<i class='fas fa-heart'></i>";
    botonFavorite.className = "btn";

}
