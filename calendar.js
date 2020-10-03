
//GIVEN I am using a daily planner to create a schedule


 
$(document).ready(function(){

    
        // Global variable section
        var displayHours = ["8 a.m.", "9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]
        var hour = [8,9,10,11,12,13,14,15,16,17]
        
        //date today
        var date = dayjs().format('dddd, MMMM DD YYYY hh:mm A')
        
        $("#currentDay").text(date)




        //object for saving to local storage
        schedule = {
            time8: "",
            time9: "",
            time10: "",
            time11: "",
            time12: "",
            time13: "",
            time14: "",
            time15: "",
            time16: "",
            time17: "",
        }

        var scheduleStor = localStorage.getItem("schedule")
        console.log(scheduleStor)
        if (scheduleStor !==null){
            schedule = JSON.parse(scheduleStor)
            console.log(schedule)
        }

        
        
        //This function will dynamically generate all of the timeblock section of the page.
        function timeblocks(){
            //create hours with loop
            for (i=0; i< hour.length; i++){
                var hourName = "hour" + hour[i]
               
                //timeblock element
                var timeblockDiv = $("<div>")
                timeblockDiv.addClass("row time-block").attr('id',"hour"+hour[i]).attr("value", hour[i])

                //append to page
                $(".container").append(timeblockDiv)
                

                //time element
                var timeCol = $("<div>")
                timeCol.addClass("hour col-1").text(displayHours[i])

                //append to page
                timeblockDiv.append(timeCol)

                //description element
                var descriptionCol = $("<textarea>")
                descriptionCol.addClass("description col-10")

                //append to page
                timeblockDiv.append(descriptionCol)


                //save element
                var saveBtn = $("<button>")
                saveBtn.addClass("saveBtn col-1").text("save")

                //append to page
                timeblockDiv.append(saveBtn)


                // local storage to come up when the page loads
                if(schedule[hourName]){
                    descriptionCol.text(schedule[hourName])
                }
                
              
            }
            currentHour()
        }

        //Update colors based on current time
    function currentHour(){
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){


        //hours in the time block
          blockTime = $(this).attr("value");
         
            //if statements will change the colors of the time blocks
          if (blockTime < currentTime){
            $(this).addClass("past")
          } if (blockTime == currentTime){
            $(this).removeClass("past")
            $(this).addClass("present")
          } if (blockTime > currentTime){
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
          }
    
        })
    }
    

        timeblocks()



    function saveItems (){
        localStorage.setItem("schedule", JSON.stringify(schedule))
    }

     //save button actually works maybe??
     $(".saveBtn").on("click",function(){
        value =$(this).siblings(".description").val()
        key = $(this).parent().attr("id")

        schedule[key] = value
        saveItems()
    })


        

})   
    









