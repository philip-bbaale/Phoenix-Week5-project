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
$(document).ready(function(){

    $(".food_group1").click(function(){
        $(".food_group_img1").toggle();
        $(".food_group_list1").toggle();
    })
    $(".food_group2").click(function(){
        $(".food_group_img2").toggle();
        $(".food_group_list2").toggle();
    })
    $(".food_group3").click(function(){
        $(".food_group_img3").toggle();
        $(".food_group_list3").toggle();
    })
    $(".food_group4").click(function(){
        $(".food_group_img4").toggle();
        $(".food_group_list4").toggle();
    })
    $(".food_group5").click(function(){
        $(".food_group_img5").toggle();
        $(".food_group_list5").toggle();
    })
});
var normalDiet = [
    {
        "Day":"Monday",
        "BreakFast":["Boiled eggs","Bacon","Apple","Toast"],
        "Lunch":["Ham","cheese","Sandwitch with avocado"],
        "Snack":["Greek yogurt"],
        "Dinner":["Cold Lentil salad","Aspargus"]
    },
    {
        "Day":"Tuesday",
        "BreakFast":["Berry smoothie","Chia seeds"],
        "Lunch":["Kale & Tuna salad","Avocado"],
        "Snack":["Berries"],
        "Dinner":["Grilled chicken salad"]
    },
    {
        "Day":"Whenesday",
        "BreakFast":["Broccoli","Egg toast"],
        "Lunch":["Shrimp salad","Sweet potatoes"],
        "Snacks":["Nuts"],
        "Dinner":["Grilled Chicken"]
    },
    {
        "Day":"Thursday",
        "BreakFast":["Avocado banana smoothie"],
        "Lunch":["Pesto shrimp pasta","Pork"],
        "Snacks":["Olive","Cheese"],
        "Dinner":["Flank Steak","Red Wine"]
    },
    {
        "Day":"Friday",
        "BreakFast":["Cinamon oat-meal","Banana"],
        "Lunch":["Turkey wrap"],
        "Snack":["Beries","Grape fruit"],
        "Dinner":["Pecan","Pork chops"]
    },
    {
        "Day":"Saturday",
        "BreakFast":["Whole Wheat Pita","Chia pudding"],
        "Lunch":["Brown Rice","Salmon fillet"],
        "Snack":["Apple"],
        "Dinner":["Green beans","Caesar salad"]
    },
    {
        "Day":"Sunday",
        "BreakFast":["Toast","Protein shake"],
        "Lunch":["Monk fish","Brown rice","Matooke","Mixed green salad with cucumber"],
        "Snack":["Candy"],
        "Dinner":["Grilled Turkey breast","Caesar salad","Green beams"]
    },
]
$(document).ready(function(){
   $(".iron1").click(function(){
    $(".iron").toggle();
   });
   $(".sickle1").click(function(){
    $(".sickle").toggle();
   });
   $(".hemo1").click(function(){
    $(".hemo").toggle();
   });
   $(".apla1").click(function(){
    $(".apla").toggle();
   });
   $(".perni1").click(function(){
    $(".perni").toggle();
   });
});
