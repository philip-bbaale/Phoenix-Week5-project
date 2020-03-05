$(document).ready(function() {
    $("#vitamin").click(function() {
        $("#vitamins").toggle();
    }); 
    $("#protein").click(function() {
        $("#proteins").toggle();
    });
});

function setNewImage2() {

   document.getElementById("vitamin").src = "/images/elderly/vitamins2.jpeg";


}
function setOldImage2() {

   document.getElementById("vitamin").src = "/images/elderly/vitamins.jpeg";

}

function setNewImage1() {

    document.getElementById("protein").src = "/images/elderly/protein.jpeg";

}
function setOldImage1() {

    document.getElementById("protein").src = "/images/elderly/protein3.jpeg";

}

function setNewImage() {

    document.getElementById("carbo").src = "/images/elderly/carbo.jpeg";

}
function setOldImage() {

    document.getElementById("carbo").src = "/images/elderly/carbo2.jpeg";

}
