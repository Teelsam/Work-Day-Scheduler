// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
//HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

$(function () {
  var saveButton1 = $("#saveBtn1"); //first hour save button
  var saveButton2 = $("#saveBtn2"); //second hour  save button
  var saveButton3 = $("#saveBtn3"); //third hour  save button
  var saveButton4 = $("#saveBtn4"); //fourth hour  save button
  var saveButton5 = $("#saveBtn5"); //fifth hour  save button
  var saveButton6 = $("#saveBtn6"); //sixth hour  save button
  var saveButton7 = $("#saveBtn7"); //seventh hour  save button
  var saveButton8 = $("#saveBtn8"); //eighth hour  save button
  var saveButton9 = $("#saveBtn9"); //nineth hour  save button

  var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");

  saveButton1.on("click", function () {
    //saves 9am content
    var saved9am = $("#9amPlans").val();
    localStorage.setItem("saved9am", saved9am);
    console.log("saved9am: at button " + saved9am);
  });
  saveButton2.on("click", function () {
    //saves 10 am content
    var saved10am = $("#10amPlans").val();
    console.log("saved10am: " + saved10am);
    localStorage.setItem("saved10am", saved10am);
  });
  saveButton3.on("click", function () {
    var saved11am = $("#11amPlans").val();
    console.log("saved11am: " + saved11am);
    localStorage.setItem("saved11am", saved11am);
  });
  saveButton4.on("click", function () {
    var saved12pm = $("#12pmPlans").val();
    console.log("saved12pm: " + saved12pm);
    localStorage.setItem("saved12pm", saved12pm);
  });
  saveButton5.on("click", function () {
    var saved1pm = $("#1pmPlans").val();
    console.log("saved1pm: " + saved1pm);
    localStorage.setItem("saved1pm", saved1pm);
  });
  saveButton6.on("click", function () {
    var saved2pm = $("#2pmPlans").val();
    console.log("saved2pm: " + saved2pm);
    localStorage.setItem("saved2pm", saved2pm);
  });
  saveButton7.on("click", function () {
    var saved3pm = $("#3pmPlans").val();
    console.log("saved2pm: " + saved3pm);
    localStorage.setItem("saved3pm", saved3pm);
  });
  saveButton8.on("click", function () {
    var saved4pm = $("#4pmPlans").val();
    console.log("saved4pm: " + saved4pm);
    localStorage.setItem("saved4pm", saved4pm);
  });
  saveButton9.on("click", function () {
    var saved5pm = $("#5pmPlans").val();
    console.log("saved5pm: " + saved5pm);
    localStorage.setItem("saved5pm", saved5pm);
  });

  function loadSchedule() {
    //loads locally stored plans
    var nineAmAct = localStorage.getItem("saved9am");
    console.log("nineAmAct:  at loadschedule " + nineAmAct);
    $("#9amPlans").val(nineAmAct);

    var tenAmAct = localStorage.getItem("saved10am");
    $("#10amPlans").val(tenAmAct);

    var elevenAmAct = localStorage.getItem("saved11am");
    $("#11amPlans").val(elevenAmAct);

    var twelveAmAct = localStorage.getItem("saved12pm");
    $("#12pmPlans").val(twelveAmAct);

    var onePmAct = localStorage.getItem("saved1pm");
    $("#1pmPlans").val(onePmAct);

    var twoPmAct = localStorage.getItem("saved2pm");
    $("#2pmPlans").val(twoPmAct);

    var threePmAct = localStorage.getItem("saved3pm");
    $("#3pmPlans").val(threePmAct);

    var fourPmAct = localStorage.getItem("saved4pm");
    $("#4pmPlans").val(fourPmAct);

    var fivePmAct = localStorage.getItem("saved5pm");
    $("#5pmPlans").val(fivePmAct);
  }
  loadSchedule();
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function dayProgression() {
    var time;






  }
  dayProgression();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. **DONE**

  function dateAndTime() {
    //gets our date and time
    var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(today);
  }
  dateAndTime();
  setInterval(dateAndTime, 1000); // updates date and time by the second
});
