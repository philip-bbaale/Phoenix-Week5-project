$(document).ready(function(){
    $(".image1").hover(function(){
        $(".text1").toggle();
    });
    $(".image2").hover(function(){
        $(".text2").toggle();
    });
    $(".image3").hover(function(){
        $(".text3").toggle();
    });
    $(".image4").hover(function(){
        $(".text4").toggle();
    });
    $(".image5").hover(function(){
        $(".text5").toggle();
    });
    $(".image6").hover(function(){
        $(".text6").toggle();
    });
    $(".image7").hover(function(){
        $(".text7").toggle();
    });
    $(".image8").hover(function(){
        $(".text8").toggle();
    }); 
    $(".image9").hover(function(){
        $(".text9").toggle();
    }); 
    $(".image10").hover(function(){
        $(".text10").toggle();
    }); 
    $(".image11").hover(function(){
        $(".text11").toggle();
    }); 
    $(".image12").hover(function(){
        $(".text12").toggle();
    }); 
    $(".image13").hover(function(){
        $(".text13").toggle();
    }); 
    $(".image14").hover(function(){
        $(".text14").toggle();
    }); 
    $(".image15").hover(function(){
        $(".text15").toggle();
    }); 
    $(".image16").hover(function(){
        $(".text16").toggle();
    }); 
    $(".image17").hover(function(){
        $(".text17").toggle();
    }); 
    $(".image18").hover(function(){
        $(".text18").toggle();
    }); 
    $(".image19").hover(function(){
        $(".text19").toggle();
    }); 
});
var Day = new Date();
var diabeticDiet = [
    {
        "DayOfWeek":"Sunday",
        "BreakFast":["Almonds","Fruits"],
        "Lunch":["Veggie stir fry","Brown rice","banana"],
        "Snack":["Greek Yogurt with berries"],
        "Dinner":["Lentil and roasted vegetable salad"]
    },
    {
        "DayOfWeek":"Monday",
        "BreakFast":["Cauliflower oatmeal"],
        "Lunch":["Boiled chicken","Whole grain chapati","watermelon"],
        "Snack":["Hard boiled eggs"],
        "Dinner":["Chicken sausage and peppers","brown rice","greens"]
    },
    {
        "DayOfWeek":"Tuesday",
        "BreakFast":["Pumpkin Pancakes"],
        "Lunch":["Lettuce salad","Smoked Salmon"],
        "Snack":["Peanut butter and celery sticks"],
        "Dinner":["Steamed butternut squash","thyme"]
    },
    {
        "DayOfWeek":"Wednesday",
        "BreakFast":["Avocado toast"],
        "Lunch":["lentil soup","whole grain bread","chilli"],
        "Snacks":["Nuts"],
        "Dinner":["Roasted brussel sprouts","Pork chops"]
    },
    {
        "DayOfWeek":"Thursday",
        "BreakFast":["Mango-spinach smoothie"],
        "Lunch":["Spinach rolls"],
        "Snacks":["Chia seed pudding"],
        "Dinner":["Stuffed chicken breast"]
    },
    {
        "DayOfWeek":"Friday",
        "BreakFast":["veggie omlette"],
        "Lunch":["Lamb chops","Whole grain pasta","Avocado"],
        "Snack":["Roasted Chickpeas"],
        "Dinner":["Matoke","Butter beans","cabbage"]
    },
    {
        "DayOfWeek":"Saturday",
        "BreakFast":["veggie BLT sandwich"],
        "Lunch":[""],
        "Snack":["Turkey pie"],
        "Dinner":["fish","mashed potatoes","watermelon"]
    },
    
]
function showMeals(){
    var  DayOfWeeks = diabeticDiet[Day.getDay()];
    //document.getElementById("meals_show").innerHTML = normalDiet[Day.getDay()];
    const entries = Object.entries(DayOfWeeks)
    console.log(entries)
    for([fruit, count] of entries) {
        var node = document.createElement("LI")
        var tnode = document.createTextNode(fruit + ": " + count+".")
        node.appendChild(tnode)
        document.getElementById("meals_show").append (node)
        diabeticDiet=0;
    }
    
}