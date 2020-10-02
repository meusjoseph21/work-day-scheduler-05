
//GIVEN I am using a daily planner to create a schedule


 
$(document).ready(function(){

    
        // Global variable section

        var date = dayjs().format('dddd, MMMM DD YYYY hh:m A')
        console.log(date)
        var hours = ["8 a.m.", "9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
        var calendar = document.querySelector(".container")

        var row 
        var timeColumns



        //this function calls todays date at the top of the page!
        function today(){
            var today  = $("#currentDay").text(date)
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
        var row = $("<div>").addClass( "row col-12")
        var timeColumns = $("<div>").text(hours[i]).addClass( "hour col-1").attr("id","hourChange")
        var inputColumn = $("<input>").attr("placeholder", "enter note here").addClass("description time-block col-10")
        var savebtn = $("<button>").addClass("btn btn-primary saveBtn col-1").text("save")
        $(row).append(timeColumns).append(inputColumn).append(savebtn)
        $("#timeblock").append(row)

        }

        function currentHour(){
            var currentTime = dayjs().format('hh:mm')
             var currentTime2 = dayjs().isAfter(currentTime, 'hour')
            console.log(currentTime)
            
            

            $(".time-block").each(function(){

                var divTime = ($(this).val())
                console.log(divTime)

                if (divTime < currentTime2){
                    $(this).addClass("past")
                } if (divTime == currentTime2){
                    $(this).removeClass("past").addClass("present")
                } if (divTime > currentTime2){
                    $(this).removeClass("present past").addClass("future")
                }


            })

            
        }
        currentHour()
    }

    })











