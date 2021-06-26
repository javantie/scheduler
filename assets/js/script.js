var task = {};

///  Code to display current day
var rightNow = moment().format("dddd, h:mm A");
console.log(rightNow);
$("#currentDay").append(rightNow);

//Save the data to localstorage
$(".saveBtn").click(function () {
  var oldTask = [];
  var newTask = $("textarea").val();
  console.log(newTask);
  oldTask.push(newTask);
  localStorage.setItem("taskInfo", JSON.stringify(oldTask));
});

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

//var scheduleTImeEl = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
//   for (let i = 0; i < scheduleTImeEl.length; i++) {
//     if(scheduleTImeEl.note[i]){
//         console.log("index is", i)
//         console.log("index is",scheduleTImeEl[i])
//     }

//   }

var timeBlock = [
  {
    time: "9:00",
    note: "",
  },
  {
    time: "10:00",
    note: "",
  },
  {
    time: "11:00",
    note: "",
  },
  {
    time: "12:00",
    note: "",
  },
  {
    time: "1:00",
    note: "",
  },
  {
    time: "2:00",
    note: "",
  },
  {
    time: "3:00",
    note: "",
  },
  {
    time: "4:00",
    note: "",
  },
  {
    time: "5:00",
    note: "",
  },
];


// for (let i = 0; i < timeBlock.length; i++) {
//   if (timeBlock[i].note) {
//     console.log("index is", i);
//     console.log("index is", timeBlock[i]);
//   }
//   var newEl = document.createElement("tr");
//   newEl.textContent = timeBlock[i].time;
// }

//var striningfield = JSON.stringify(scheduleTImeEl);
