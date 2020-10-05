$(document).ready(function(){
// Make a day planner
var currentDate = moment().format('LLLL');  
var dateEl =(".todayIs"); 
var todoInput =$(".todo").value;
//document.querySelector(".todo".value);

console.log(todoInput) ;
$(dateEl).text(currentDate);

// planner app knows the current day 
    function clock (){
        var timeEl = currentDate.update
        var blockTime = ("h3").text.parseint
        if (blockTime === timeEl){
            (".this").background(purple);


        }else if (blockTime > timeEl) {
            (".this").background(greem);
        //change to future color
        
        }else if (blockTime < TimeEl){
            (".this").background(blue);
        //change to past color  
        }; 
    };


         
          
    
        
        //way to save it - save button
        $(".saveBtn").on("click", function(e){
            e.preventDefault();
            console.log("click");
        //   var userString = JSON.stringify(todoInput);
            // var userString = todoInput.text
            localStorage.setItem(".input", todoInput);

         //display saved content onto page

            var todoSave = localStorage.setItem(".input", todoInput);
            $(".this").textContent.todoSave;

    

        });
   

        
       
});


//deleted things

 // var userInput= document.querySelector(".todo".value);




