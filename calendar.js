
//GIVEN I am using a daily planner to create a schedule


 
$(document).ready(function(){

    
        // Global variable section

        var dateMoment = moment().format('dd, MMMM do, YYYY,h:mm a')
        var hours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]

        var row 
        var timeColumns



        //this function calls todays date at the top of the page!
        function today(){
            var today  = $("#currentDay").text(dateMoment)
            timeblocks()
            return today

        }

        today()


       // WHEN I scroll down
        //THEN I am presented with timeblocks for standard business hours
        //todo the div class container will house these timeblocks, they should go from 8 to 5 

        

        //for loop to create timeblocks

        function timeblocks(){
        for (var i=0 ; i < hours.length; i++){
        var row = $("<div>").attr("class", "row")
        var timeColumns =  $("<text-area>").text(hours[i]).attr("class", "hour")
        var inputColumn = $("<input>").attr("placeholder", "enter note here").attr("class","todoInput timeblock")
        savebtn = $("<button>").addClass("btn btn-primary saveBtn").text("save")
        $(row).append(timeColumns).append(inputColumn).append(savebtn)
        $("#calendar").append(row)

        }
    }



    })








//```
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//todo the div class container will house these timeblocks, they should go from 8 to 5 




//