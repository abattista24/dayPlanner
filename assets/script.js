$(document).ready(function(){
// Make a day planner
var currentDate = moment().format('LLLL');  
var dateEl =(".todayIs"); 
var todoInput =$(".todo").value;
//document.querySelector(".todo".value);

console.log(todoInput);ith 
$(dateEl).text(currentDate);

// planner app knows the current day 
    function clock (){
        var currentTime = moment().hours();
        console.log (currentTime)
        $(".bodyRow").each(function(){
            var timeBlock = $(this).attr("id");
            console.log(timeBlock);
            if (timeBlock < currentTime){
                $(this).attr("class","row bodyRow past");
                //change to past color  
    
            }else if (timeBlock > currentTime) {
                $(this).attr("class","row bodyRow future");
                //change to future color
            
            }else {
               $(this).attr("class","row bodyRow present");
            //change to current color  
            } 

        });
        // var timeEl = currentDate.update
        // var blockTime = ("h3").text.parseint
       
    };

clock();
         
          
    
        
        //way to save it - save button
        $(".saveBtn").on("click", function(e){
            e.preventDefault();
            console.log("click");
            var inputValue = $(this).siblings(".description").val(); 
            var time = $(this).parent().attr("id")

        //   var userString = JSON.stringify(todoInput);
            // var userString = todoInput.text
            localStorage.setItem(time,inputValue);

         //display saved content onto page

            // var todoSave = localStorage.setItem(".input", todoInput);
            // $(".this").textContent.todoSave;

    

        });
   
        $("#8 .description").val(localStorage.getItem("8"));
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"))
        $("#15 .description").val(localStorage.getItem("15")) 
        $("#16 .description").val(localStorage.getItem("16")) 
        $("#17 .description").val(localStorage.getItem("17"))
       
});


//deleted things

 // var userInput= document.querySelector(".todo".value);




