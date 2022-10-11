
var participants = []; //declarar array vacio

function showParticipants(data){ 

    let arrayAuxiliar = []; //let = var

    data.forEach(element => {
        
        arrayAuxiliar.push(element.name);

    });

    $("#users").html("<strong>Participants: </strong>" + arrayAuxiliar);

}

function getWinner(data){

    const aleat = Math.floor(Math.random() * data.length);
    $("#selected").text("Seleccionado: " + data[aleat].name);
}

$(document).ready(function (){

    //jsonplaceholder.typicode.com/users

    $.ajax({

        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        success: function (response){

            participants = response;

            showParticipants(participants);
        },
        error: function(error){

            console.log(error);
            alert(error);
        }

    });

    $(".btn").click(function () {


        getWinner(participants);

    });

});