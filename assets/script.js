$(document).ready(function(){
// Make a day planner
var currentDate = moment().format('LLLL');  
var dateEl =(".todayIs") 
 console.log(currentDate)  
$(dateEl).text(currentDate);



// planner app knows the current day 
     
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
    
    //enter event
        //click listener on time blocks
        // $(".todo").on("click", function(){
        //     console.log("clicky slick");
          
        // });
        
        //way to save it - save button
        $(".saveBtn").on("click", function(){
            localStorage.setItem(userinput)
        })
        //display saved content onto page
})




