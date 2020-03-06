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

var Day = new Date();
var elderlyDiet = [
    {
        "DayOfWeek":"Sunday",
        "BreakFast":["Toast","Protein shake"],
        "Lunch":["Monk fish","Brown rice","Matooke","Mixed green salad with cucumber"],
        "Snack":["Candy"],
        "Dinner":["Grilled Turkey breast","Caesar salad","Green beams"]
    },
    {
        "DayOfWeek":"Monday",
        "BreakFast":["Boiled eggs","Bacon","Apple","Toast"],
        "Lunch":["Ham","cheese","Sandwitch with avocado"],
        "Snack":["Greek yogurt"],
        "Dinner":["Cold Lentil salad","Aspargus"]
    },
    {
        "DayOfWeek":"Tuesday",
        "BreakFast":["Berry smoothie","Chia seeds"],
        "Lunch":["Kale & Tuna salad","Avocado"],
        "Snack":["Berries"],
        "Dinner":["Grilled chicken salad"]
    },
    {
        "DayOfWeek":"Whenesday",
        "BreakFast":["Broccoli","Egg toast"],
        "Lunch":["Shrimp salad","Sweet potatoes"],
        "Snacks":["Nuts"],
        "Dinner":["Grilled Chicken"]
    },
    {
        "DayOfWeek":"Thursday",
        "BreakFast":["Avocado banana smoothie"],
        "Lunch":["Pesto shrimp pasta","Pork"],
        "Snacks":["Olive","Cheese"],
        "Dinner":["Flank Steak","Red Wine"]
    },
    {
        "DayOfWeek":"Friday",
        "BreakFast":["Cinamon oat-meal","Banana"],
        "Lunch":["Turkey wrap"],
        "Snack":["Beries","Grape fruit"],
        "Dinner":["Pecan","Pork chops"]
    },
    {
        "DayOfWeek":"Saturday",
        "BreakFast":["Whole Wheat Pita","Chia pudding"],
        "Lunch":["Brown Rice","Salmon fillet"],
        "Snack":["Apple"],
        "Dinner":["Green beans","Caesar salad"]
    },
    
]
function showMeals(){
    var  DayOfWeeks = elderlyDiet[Day.getDay()];
    const entries = Object.entries(DayOfWeeks)
    console.log(entries)
    for([fruit, count] of entries) {
        var node = document.createElement("LI")
        var tnode = document.createTextNode(fruit + ": " + count+".")
        node.appendChild(tnode)
        document.getElementById("meals_show").append (node)
        elderlyDiet=0;
    }
    
}