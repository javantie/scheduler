var task = []

///  Code to display current day
var rightNow = moment().format("dddd, h:mm A");
console.log(rightNow);
$("#currentDay").append(rightNow);

var tracker = moment().hour()
console.log(tracker)

//Save the data to localstorage
$(".saveBtn").click(function () {
  var oldTask = [];
  console.log($(this).parent().siblings("div").children()[0])
  var textValEl = $(this).parent().siblings("div").children()[0];
  console.log($(textValEl).attr("id"));
  task.push({
    id: $(textValEl).attr("id"),
    value: $(textValEl).val()
  });
  console.log(task)
  localStorage.setItem("taskInfo", JSON.stringify(task));
});

//Load the data from localstorage
var loadTask = function () {
  task = JSON.parse(localStorage.getItem("taskInfo")) || [];
  
$("textarea").each(function(index, element){
  console.log(element)
  for(var i = 0; i < task.length; i++){
    if ($(element).attr("id") ===task[i].id){
      $(element).val(task[i].value)
    }
  }
  })
  console.log(task);
};
loadTask();










