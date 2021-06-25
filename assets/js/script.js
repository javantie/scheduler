var task = {};
var container = $(".container");
var textAreaEl = document.querySelector("textarea")
var miltaryhours=[9,10,11,12,13,14,15,16,17]
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var miltaryhours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Time and date display on page header
var rightNow = moment().format("dddd hh:mm A");
$("#currentDay").append(rightNow);

//for loop to create each time block
for (var i = 0; i < hours.length; i++) {
  container.append(` 
  <div class="row main-container ">
  <div class="col-sm-1 hour time-block">${hours[i]}</div>
   <div class="col-sm-9 "><textarea  class="form-control h-100 w-100 p-0 past present future"></textarea></div>
  <div class="col-sm-2 col-space"> <button class="saveBtn h-100  "><i class="far fa-save"></i></button></div>
 </div>`);
}

//Load the data from localstorage
var loadTask = function () {
  task = JSON.parse(localStorage.getItem("taskInfo"));
  if (!task) {
    return;
  }
  $("textarea").text(task);
  console.log(task);
};
loadTask();



//Save task to local storage
$(".saveBtn").click(function () {
 var oldTask = []
 var txt = $("textarea").val();
      var newTask = txt;
      oldTask.push(newTask)
  localStorage.setItem("taskInfo", JSON.stringify(oldTask));
});
  





































