function timetable ( day , date ,food) {
    this.day = day;
    this.date = date;
    this.food = food;
}

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
        "BreakFast":["Copper water","Apple"],
        "Lunch":[""],
        "Snacks":[],
        "Dinner":[]
    },
    {
        "Day":"Friday",
        "BreakFast":[],
        "Lunch":["Kidney soup" , "Dandellion greens" ,"Iron- fortified rice"],
        "Snack":["pine nuts"],
        "Dinner":["Fried potatoes", "roast m"]
    },
    {
        "Day":"Saturday",
        "BreakFast":[],
        "Lunch":[],
        "Snack":[],
        "Dinner":[]
    },
    {
        "Day":"Sunday",
        "BreakFast":[],
        "Lunch":[],
        "Snack":[],
        "Dinner":[]
    },
]


$(document).ready(function(){
   $("#see").click(function(event){
    event.preventDefault();

    $("form").submit(function(){
        var name = document.getElementById("name").value
        var email = document.getElementById ("email").value
         if (name === "" || email === ""){
             alert ("Kindly fill in your details")
         } else 
          {
            alert("Thank you very much "+ name  +"  your message has been sent.")
         }
         $("form").trigger('reset')
    })
   })

   $(".note").click(function(){
    $(".what_to_note").toggle();
   });
})