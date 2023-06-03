
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
    console.log("saved9am: " + saved9am);
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

  function dayProgression() {
    var currentTime = dayjs().hour();
    console.log('current time is: ' + currentTime);
    function nineAmCheck() {
      if (currentTime < 9) { // before 9 class is future
        $('#hour-9').removeClass("past");
        $('#hour-9').removeClass("present");
        $('#hour-9').addClass('future');
      }
      else if (currentTime === 9) { // at 9 class is present
        $('#hour-9').removeClass("past");
        $('#hour-9').removeClass('future');
        $('#hour-9').addClass("present");
      }
      else if (currentTime > 9) { //after 9 is class past
        $('#hour-9').removeClass("present");
        $('#hour-9').removeClass('future');
        $('#hour-9').addClass("past");
      }

    }
    function tenAmCheck() {
      if (currentTime < 10) { // before 10 class is future
        $('#hour-10').removeClass("past");
        $('#hour-10').removeClass("present");
        $('#hour-10').addClass('future');
      }
      else if (currentTime === 10) { // at 10 class is present
        $('#hour-10').removeClass("past");
        $('#hour-10').removeClass('future');
        $('#hour-10').addClass("present");
      }
      else if (currentTime > 10) { //after 10 is class past
        $('#hour-10').removeClass("present");
        $('#hour-10').removeClass('future');
        $('#hour-10').addClass("past");
      }
    }
    function elevenAmCheck() {
      if (currentTime < 11) { // before 11 class is future
        $('#hour-11').removeClass("past");
        $('#hour-11').removeClass("present");
        $('#hour-11').addClass('future');
      }
      else if (currentTime === 11) { // at 11 class is present
        $('#hour-11').removeClass("past");
        $('#hour-11').removeClass('future');
        $('#hour-11').addClass("present");
      }
      else if (currentTime > 11) { //after 11 is class past
        $('#hour-11').removeClass("present");
        $('#hour-11').removeClass('future');
        $('#hour-11').addClass("past");
      }
    }
    function twelveAmCheck() {
      if (currentTime < 12) { // before 12 class is future
        $('#hour-12').removeClass("past");
        $('#hour-12').removeClass("present");
        $('#hour-12').addClass('future');
      }
      else if (currentTime === 12) { // at 12 class is present
        $('#hour-12').removeClass("past");
        $('#hour-12').removeClass('future');
        $('#hour-12').addClass("present");
      }
      else if (currentTime > 12) { //after 12 is class past
        $('#hour-12').removeClass("present");
        $('#hour-12').removeClass('future');
        $('#hour-12').addClass("past");
      }
    }
    function onePmCheck() {
      if (currentTime < 13) { // before 13 class is future
        $('#hour-13').removeClass("past");
        $('#hour-13').removeClass("present");
        $('#hour-13').addClass('future');
      }
      else if (currentTime === 13) { // at 13 class is present
        $('#hour-13').removeClass("past");
        $('#hour-13').removeClass('future');
        $('#hour-13').addClass("present");
      }
      else if (currentTime > 13) { //after 13 is class past
        $('#hour-13').removeClass("present");
        $('#hour-13').removeClass('future');
        $('#hour-13').addClass("past");
      }
    }
    function twoPmCheck() {
      if (currentTime < 14) { // before 14 class is future
        $('#hour-14').removeClass("past");
        $('#hour-14').removeClass("present");
        $('#hour-14').addClass('future');
      }
      else if (currentTime === 14) { // at 14 class is present
        $('#hour-14').removeClass("past");
        $('#hour-14').removeClass('future');
        $('#hour-14').addClass("present");
      }
      else if (currentTime > 14) { //after 14 is class past
        $('#hour-14').removeClass("present");
        $('#hour-14').removeClass('future');
        $('#hour-14').addClass("past");
      }
    }
    function threePmCheck() {
      if (currentTime < 15) { // before 15 class is future
        $('#hour-15').removeClass("past");
        $('#hour-15').removeClass("present");
        $('#hour-15').addClass('future');
      }
      else if (currentTime === 15) { // at 15 class is present
        $('#hour-15').removeClass("past");
        $('#hour-15').removeClass('future');
        $('#hour-15').addClass("present");
      }
      else if (currentTime > 15) { //after 15 is class past
        $('#hour-15').removeClass("present");
        $('#hour-15').removeClass('future');
        $('#hour-15').addClass("past");
      }
    }
    function fourPmCheck() {
      if (currentTime < 16) { // before 16 class is future
        $('#hour-16').removeClass("past");
        $('#hour-16').removeClass("present");
        $('#hour-16').addClass('future');
      }
      else if (currentTime === 16) { // at 16 class is present
        $('#hour-16').removeClass("past");
        $('#hour-16').removeClass('future');
        $('#hour-16').addClass("present");
      }
      else if (currentTime > 16) { //after 16 is class past
        $('#hour-16').removeClass("present");
        $('#hour-16').removeClass('future');
        $('#hour-16').addClass("past");
      }
    }
    function fivePmCheck() {
      if (currentTime < 17) { // before 17 class is future
        $('#hour-17').removeClass("past");
        $('#hour-17').removeClass("present");
        $('#hour-17').addClass('future');
      }
      else if (currentTime === 17) { // at 17 class is present
        $('#hour-17').removeClass("past");
        $('#hour-17').removeClass('future');
        $('#hour-17').addClass("present");
      }
      else if (currentTime > 17) { //after 17 is class past
        $('#hour-17').removeClass("present");
        $('#hour-17').removeClass('future');
        $('#hour-17').addClass("past");
      }
    }
    nineAmCheck();
    tenAmCheck();
    elevenAmCheck();
    twelveAmCheck();
    onePmCheck();
    twoPmCheck();
    threePmCheck();
    fourPmCheck();
    fivePmCheck();
  }
  dayProgression();
  function dateAndTime() {
    //gets our date and time
    var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(today);
  }
  dateAndTime();
  setInterval(dateAndTime, 1000); // updates date and time by the second
  setInterval(dayProgression, 3600000)//refreshes every hour
});
