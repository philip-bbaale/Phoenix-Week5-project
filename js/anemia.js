var Day = new Date();
var anemicDiet = [
    {
        "Day":"Monday",
        "BreakFast":["Tumeric Yoghurt", "Boiled eggs"],
        "Lunch":[ "Iron-Fortified rice", "Fried Liver" , "Steamed spinach"],
        "Snack":["Cashew nuts"],
        "Dinner":["chicken curry" ,"Fortified rice", "Fried broccoli" ]
    },
    {
        "Day":"Tuesday",
        "BreakFast":[" Iron-Fortified orange juice"],
        "Lunch":["A sandwich with roast beef and watercress on iron-enriched bread."],
        "Snack":["Banana"],
        "Dinner":["Iron-Fortified pasta" ,"soya beans" ,"Fried Kales"]
    },
    {
        "Day":"Whenesday",
        "BreakFast":["Iron-Fortified cereals" , "raw milk"],
        "Lunch":[ "A bagel with smoked salmon" ,"cream cheese" ,"Collard Greens"],
        "Snacks":["Raisins"],
        "Dinner":[ " Boiled potatoes","Lamb chops","Steamed broccoli"]
    },
    {
        "Day":"Thursday",
        "BreakFast":["Copper water","Fruit salad"],
        "Lunch":["pumpkin soup" ,"fried liver" ,"swiss chard"],
        "Snacks":["Peanut Butter Cup Chia Pudding"],
        "Dinner":[" Grilled Lean Red Meat","Quinoa","fried potatoes"]
    },
    {
        "Day":"Friday",
        "BreakFast":["Organic eggs","Beetroot juice"],
        "Lunch":["Kidney soup" , "Dandellion greens" ,"Iron- fortified rice"],
        "Snack":["pine nuts"],
        "Dinner":["Fried potatoes", "roast meat", "Fried dandelion greens"]
    },
    {
        "Day":"Saturday",
        "BreakFast":["Roasted Root Veggie Breakfast Tacos with black beans"],
        "Lunch":["tuna" ,"kale","stuffed sweet potatoes"],
        "Snack":["dark chocolate"],
        "Dinner":["steak" , "fortified ugali","fried spinach"]
    },
    {
        "Day":"Sunday",
        "BreakFast":["Stir Fried Asparagus With Bell Peppers and Cashew Nuts"],
        "Lunch":["turnip greens","Iron-fortified-pasta"," Grilled boneless chiken"],
        "Snack":["Peanut Butter Cup Chia Pudding"],
        "Dinner":["fat-steamed sukumawiki" ,"fortified chapati" ,"kidney beans soup",]
    },
]
function showMeals(){
    var  DayOfWeeks = anemicDiet[Day.getDay()];
    //document.getElementById("meals_show").innerHTML = normalDiet[Day.getDay()];
    const entries = Object.entries(DayOfWeeks)
    console.log(entries)
    for([fruit, count] of entries) {
        var node = document.createElement("LI")
        var tnode = document.createTextNode(fruit + ":" + count + ".")
        node.appendChild(tnode)
        console.log(`${fruit}: ${count}.`)
        document.getElementById("meals_show").append( node)
        anemicDiet=0;
    }
}
$(document).ready(function(){
    
    $("#send").click(function(){
        var name = document.getElementById("name").val();
        var email = document.getElementById ("email").val();
        
        
         $("form").trigger('reset');
    })

    $(".note").click(function(){
        $(".what_to_note").toggle();
       });
})
