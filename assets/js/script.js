var task = []


///  Code to display current day
var rightNow = moment().format("dddd, h:mm A");
console.log(rightNow);
$("#currentDay").append(rightNow);

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

















// var TimeEl = [];

// for (let i = 9; i < 8; i++) {
//   var newObj = {
//     time:"i",
//     note: ""
//   }
  
// }

    


// var timeBlock = [
//   {
//     time: "9:00",
//     note: "",
//   },
//   {
//     time: "10:00",
//     note: "",
//   },
//   {
//     time: "11:00",
//     note: "",
//   },
//   {
//     time: "12:00",
//     note: "",
//   },
//   {
//     time: "1:00",
//     note: "",
//   },
//   {
//     time: "2:00",
//     note: "",
//   },
//   {
//     time: "3:00",
//     note: "",
//   },
//   {
//     time: "4:00",
//     note: "",
//   },
//   {
//     time: "5:00",
//     note: "",
//   },
// ];


// for (let i = 0; i < timeBlock.length; i++) {
//   if (timeBlock[i].note) {
//     console.log("index is", i);
//     console.log("index is", timeBlock[i]);
//   }
//   var newEl = document.createElement("tr");
//   newEl.textContent = timeBlock[i].time;
// }

// var striningfield = JSON.stringify(scheduleTImeEl);
