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
    $("form").submit(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        alert('Thank you for reaching out. '+name);
        $("form").trigger('reset');
    });
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
