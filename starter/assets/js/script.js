$(document).ready(function(){
  $(".saveBtn").on("click", function(){
    
  
            
    let timeID = $(this).parent().attr("id")
    let value = $(this).siblings(".description").val();

    localStorage.setItem(timeID, value);

    $(".notification").addClass("show");
    setTimeout(function(){
      $(".notification").removeClass("show");
    }, 5000)
  })

    
  })
      
  $("#currentDay").text(moment().format("dddd, Do of MMMM YYYY [at] hh:mm:ss a"));

function hourUpdate() {
  for (let i=0; i < $(".col-a1").length; i++) {
    let currentHour = moment().hours();
     
    let hour = parseInt($(".col-a1")[i].getAttribute("id"));
    
    
    if (hour < currentHour) {
      $(".col-a2")[i].classList.add("past")
    }  
    else if (hour === currentHour) {
      $(".col-a2")[i].classList.remove("past")
      $(".col-a2")[i].classList.add("present")
    }  
    else {
      $(".col-a2")[i].classList.remove("past")
      $(".col-a2")[i].classList.remove("present")
      $(".col-a2")[i].classList.add("future")
    } 
  }       
  
  
}
hourUpdate();
let interval = setInterval(hourUpdate, 15000);


//function storeNotes() {
  
  //let notes8 = document.querySelector("#notes-8");
  //document.querySelector("#saveBtn8").onclick = function(){
    //localStorage.getItem(notes8);
   //console.log(JSON.stringify(notes8)); 
  //};
//}
//storeNotes();
  
$("#notes8.description").val(localStorage.getItem("#notes-8"))
$("#notes-9.description").val(localStorage.getItem("notes-9"))
$("#notes-10.description").val(localStorage.getItem("notes-10"))
$("#notes-11.description").val(localStorage.getItem("notes-11"))
$("#notes-12.description").val(localStorage.getItem("notes-12"))
$("#notes-13.description").val(localStorage.getItem("notes-13"))
$("#notes-14.description").val(localStorage.getItem("notes-14"))
$("#notes-15.description").val(localStorage.getItem("notes-15"))
$("#notes-16.description").val(localStorage.getItem("notes-16"))
$("#notes-17.description").val(localStorage.getItem("notes-17"))
$("#notes-18.description").val(localStorage.getItem("notes-18"))
$("#notes-19.description").val(localStorage.getItem("notes-19"))
$("#notes-20.description").val(localStorage.getItem("notes-20"))
$("#notes-21.description").val(localStorage.getItem("notes-21"))
$("#notes-22.description").val(localStorage.getItem("notes-22"))
$("#notes-23.description").val(localStorage.getItem("notes-23"))    

