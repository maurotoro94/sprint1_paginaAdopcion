var botonHome = document.getElementById('homeBotton');
var botonComment = document.getElementById('commentBotton');
var botonFavorite = document.getElementById('favoriteBotton');
var botonProfile = document.getElementById('profileBotton');

var parrafoHome = document.getElementById('home');
var parrafoComment = document.getElementById('mesagge');
var parrafoFavorite = document.getElementById('favorite');
var parrafoProfile = document.getElementById('profile');

var seccionAnimales = document.getElementById('mascotasDisponibles');

let perros =[];
let gatos =[];

const API_Mascotas = "https://my-json-server.typicode.com/maurotoro94/dbmascotas/db";

function mostrarMascotas(url_api,callback){

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
    
mostrarMascotas(API_Mascotas, function crearAnimales(error,data){

    if(error){
        return console.log(error);
    }

    let numeroAnimales = Object.keys(data.mascotas).length;

    for(i=0; i<numeroAnimales; i++){

        if(data.mascotas[i].categoryId==="category-dogs"){
            perros.push(data.mascotas[i].image);
        }
        else{
            gatos.push(data.mascotas[i].image);
        }
        console.log(data.mascotas[i].image);
        console.log("perros: ",perros[i]);
        
    }
})

function mostrarPerros(){
    seccionAnimales.innerHTML = ""

    for(j=0; j < perros.length;j++){
        seccionAnimales.innerHTML += 
        
        "<div class='row justify-content-center'>"+

                "<div class='col-md-6 col-lg-4 mb-5'>"+
                    "<div class='portfolio-item mx-auto' data-bs-toggle='modal'>"+
                        "<div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>"+
                           "<div class='portfolio-item-caption-content text-center text-white'><i class='fas fa-plus fa-3x'></i></div></div>"+
                        "<img class='img-fluid' src='"+ perros[j]+"' alt='...' />"+
                    "</div>"+
                "</div>"+
        "</div>";

    }

}

function mostrarGatos(){

    seccionAnimales.innerHTML = ""

    for(j=0; j < gatos.length;j++){
        seccionAnimales.innerHTML += 
        
        "<div class='row justify-content-center'>"+

                "<div class='col-md-6 col-lg-4 mb-5'>"+
                    "<div class='portfolio-item mx-auto' data-bs-toggle='modal'>"+
                        "<div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>"+
                           "<div class='portfolio-item-caption-content text-center text-white'><i class='fas fa-plus fa-3x'></i></div></div>"+
                        "<img class='img-fluid' src='"+ gatos[j]+"' alt='...' />"+
                    "</div>"+
                "</div>"+
        "</div>";

    }


}


function clickHome(){

    botonHome.className += " btn-dark";
    parrafoHome.innerText = "Home";

    botonComment.className = "btn";
    parrafoComment.innerText = "";

    botonFavorite.className = "btn";
    parrafoFavorite.innerText = "";

    botonProfile.className = "btn";
    parrafoProfile.innerText = "";

}

function clickComment(){

    botonComment.className += " btn-dark";
    parrafoComment.innerText = "Comentarios";

    botonHome.className = "btn";
    parrafoHome.innerText= "";

    botonFavorite.className = "btn";
    parrafoFavorite.innerText = "";

    botonProfile.className = "btn";
    parrafoProfile.innerText = "";

}

function clickFavorite(){

    botonFavorite.className += " btn-dark";
    parrafoFavorite.innerText = "Favoritos";

    parrafoHome.innerText= "";
    botonHome.className = "btn";

    botonComment.className = "btn";
    parrafoComment.innerText = "";

    botonProfile.className = " btn";
    parrafoProfile.innerText = "";

}

function clickProfile(){

    botonProfile.className += " btn-dark";
    parrafoProfile.innerText = "Perfil";

    parrafoHome.innerText= "";
    botonHome.className = "btn";

    parrafoComment.innerText = "";
    botonComment.className = "btn";

    parrafoFavorite.innerText = "";
    botonFavorite.className= "btn";

}
