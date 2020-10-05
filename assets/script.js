$(document).ready(function(){
// Make a day planner
var currentDate = moment().format('LLLL');  
var dateEl =(".todayIs"); 
var todoInput =document.querySelector(".todo");
var userInput= document.querySelector(".todo".value);

 



console.log(currentDate) ;
$(dateEl).text(currentDate);



// planner app knows the current day 
     function clock (){
        currentDate.update
     }
    //api current day 

// planner app know the current time
    //api current time
   
   
    // // blocks change color to indicate time 
    // if (blockTime === currentTime){
    //    //change background color

    // }else if (blockTime > currentTime) {
    //     //change to future color
    
    // }else (blockTime < currentTime) {
    //     //change to past color  
    // }

        
       // need a blockTime variable to hold time for each block (an array?)

       //need current time variable to know current time
    
            //get what is typed in todo 
        // console.log($(".todo").value);
          
    
        
        //way to save it - save button
        $(".saveBtn").on("click", function(e){
            e.preventDefault();
            console.log("click");
           
          localStorage.setItem("userInput", userInput);
            
        })

        function renderLastRegistered(){
            var todoSave = localStorage.getItem("userInput");
        }

        
        //display saved content onto page
})




