var task = [];

///  Code to display current day
var rightNow = moment().format("dddd, h:mm A");
$("#currentDay").append(rightNow);

//Code to set display base on the time of the day.
var tracker = moment().hour();

$("textarea").each(function (index, element) {
  if ($(element).attr("id") < tracker) {
    $(element).removeClass("future");
    $(element).removeClass("present");
    $(element).addClass("past");
  } else if ($(element).attr("id") > tracker) {
    $(element).addClass("future");
    $(element).removeClass("present");
    $(element).removeClass("past");
  }
});

//Save the data to localstorage
$(".saveBtn").click(function () {
  var textValEl = $(this).parent().siblings("div").children()[0];
  task.push({
    id: $(textValEl).attr("id"),
    value: $(textValEl).val(),
  });
  localStorage.setItem("taskInfo", JSON.stringify(task));
});

//Load the data from localstorage
var loadTask = function () {
  task = JSON.parse(localStorage.getItem("taskInfo")) || [];
  $("textarea").each(function (index, element) {
    for (var i = 0; i < task.length; i++) {
      if ($(element).attr("id") === task[i].id) {
        $(element).val(task[i].value);
      }
    }
  });
};
loadTask();

$(".clearbtn").click(function () {
  localStorage.clear();
});
