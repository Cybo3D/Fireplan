var day01 = 1;
var day02 = 2;
var day03 = 3;
var day04 = 4;
var day05 = 5;
var day06 = 6;
var day07 = 7;
var MonthIndex;
var NextBack;

var MaxDayNext;
var MaxDayBack = 0;

var Top;///
var Name;///
var Description;///
var Year;///
var Month;///
var Week;///
var Day;///
var WeekDay;///
var Priority;///
var Color;
var Planned;///
var Done;///

var CreateId;//
var GetId;//

var alreadyName;
var alreadyDescription;
var startDay;

var IsEditing = false;
var IsChecking = false;

function SetMonthIndex(){
  if(Month == "Jan"){
    MonthIndex = 1;
  }
  if(Month == "Feb"){
    MonthIndex = 2;
  }
  if(Month == "Mar"){
    MonthIndex = 3;
  }
  if(Month == "Apr"){
    MonthIndex = 4;
  }
  if(Month == "May"){
    MonthIndex = 5;
  }
  if(Month == "Jun"){
    MonthIndex = 6;
  }
  if(Month == "Jul"){
    MonthIndex = 7;
  }
  if(Month == "Aug"){
    MonthIndex = 8;
  }
  if(Month == "Sep"){
    MonthIndex = 9;
  }
  if(Month == "Oct"){
    MonthIndex = 10;
  }
  if(Month == "Nov"){
    MonthIndex = 11;
  }
  if(Month == "Dec"){
    MonthIndex = 12;
  }
}
function GetMonthIndex(){
  if(MonthIndex == 1){
    Month = "Jan";
  }
  if(MonthIndex == 2){
    Month = "Feb";
  }
  if(MonthIndex == 3){
    Month = "Mar";
  }
  if(MonthIndex == 4){
    Month = "Apr";
  }
  if(MonthIndex == 5){
    Month = "May";
  }
  if(MonthIndex == 6){
    Month = "Jun";
  }
  if(MonthIndex == 7){
    Month = "Jul";
  }
  if(MonthIndex == 8){
    Month = "Aug";
  }
  if(MonthIndex == 9){
    Month = "Sep";
  }
  if(MonthIndex == 10){
    Month = "Oct";
  }
  if(MonthIndex == 11){
    Month = "Nov";
  }
  if(MonthIndex == 12){
    Month = "Dec";
  }
}

function SetWeekDays(){
  document.getElementById("Day01Number-0").innerHTML = day01;
  document.getElementById("Day01Number-1").innerHTML = day01;

  document.getElementById("Day02Number-0").innerHTML = day02;
  document.getElementById("Day02Number-1").innerHTML = day02;

  document.getElementById("Day03Number-0").innerHTML = day03;
  document.getElementById("Day03Number-1").innerHTML = day03;

  document.getElementById("Day04Number-0").innerHTML = day04;
  document.getElementById("Day04Number-1").innerHTML = day04;

  document.getElementById("Day05Number-0").innerHTML = day05;
  document.getElementById("Day05Number-1").innerHTML = day05;

  document.getElementById("Day06Number-0").innerHTML = day06;
  document.getElementById("Day06Number-1").innerHTML = day06;

  document.getElementById("Day07Number-0").innerHTML = day07;
  document.getElementById("Day07Number-1").innerHTML = day07;

  document.getElementById("Month").innerHTML = Month;
  document.getElementById("Year").innerHTML = Year;
  //document.getElementById("Week").innerHTML = "Week " + Week;
}

function Edit(){
  if(IsEditing){
    console.log("not editing anymore")

    IsChecking = false;
    IsEditing = false;
  }else{
    console.log("now editing")

    IsChecking = false;
    IsEditing = true;
  }
}

function Check(){
  if(IsChecking){
    console.log("not checking done anymore")

    IsEditing = false;
    IsChecking = false;
  }else{
    console.log("now checking done")

    IsEditing = false;
    IsChecking = true;
  }
}

function CreatePlan(id)
{
    WeekDay = id.split("-")[0];
    Priority = id.split("-")[1];
    Top = id.split("-")[2];

    if(isAlreadyThere(WeekDay, Priority, Top) && !IsChecking && !IsEditing){
      //check what you wrote there and has function to delete it
      alert("Name: " + document.getElementById(WeekDay + "-" + Priority + "-" + Top + "-Name").innerHTML + "\n" + "Description: " + document.getElementById(WeekDay + "-" + Priority + "-" + Top + "-Desc").innerHTML);
      return;
    }else if(IsChecking){

      return;
    }else if(IsEditing){

      return;
    }

    Name = window.prompt("Name:","-");
    if(!Name || Name == "-"){
        alert("⚠️CANCELED⚠️");
        return;
    }
    Description = window.prompt("Description:","-");
    if(!Description || Description == "-"){
        alert("⚠️CANCELED⚠️");
        return;
    }
    //year is already set
    //month is already set
    //week is already set

    //set day
    if(WeekDay == "1") Day = day01;
    if(WeekDay == "2") Day = day02;
    if(WeekDay == "3") Day = day03;
    if(WeekDay == "4") Day = day04;
    if(WeekDay == "5") Day = day05;
    if(WeekDay == "6") Day = day06;
    if(WeekDay == "7") Day = day07;

    // Color = window.prompt("Color?(1 trough 6):","0");
    // if(!Color || Color != "0" && Color != "1" && Color != "2" && Color != "3" && Color != "4" && Color != "5" && Color != "6"){
    //     alert("⚠️CANCELED⚠️");
    //     return;
    // }

    // Planned = window.prompt("Is Planned?(0 no, 1 yes):","0");
    // if(!Planned || Planned != "0" && Planned != "1"){
    //     alert("⚠️CANCELED⚠️");
    //     return;
    // }
    // Done = window.prompt("Is Done?(0 no, 1 yes):","0");
    // if(!Done || Done != "0" && Done != "1"){
    //     alert("⚠️CANCELED⚠️");
    //     return;
    // }

    CreateId = Name + "|" + Description + "|" + WeekDay + "|" + Year + "|" + Month + "|" + Week + "|" + Day + "|" + Priority + "|" + Top + "|" + Planned + "|" + Done + "|" + Color;
    CreatePlanExecute(CreateId);
    window.location.reload();
}


function CreatePlanExecute(creaId) {
  return import('./IndexScript.js') // Dynamic import returns a Promise
    .then(module => {
      // Access the exported function and call it
      module.myFunction(creaId);
    })
    .catch(error => {
      console.error('Error loading module:', error);
    });
}

function WeekNext(){
  var dt = new Date();
  dt = dt.toString(); // Call the toString() method to convert the Date object to a string
  var date = dt.split(" ");

  day01 = CheckMonthEnd(date, day01 + 7, 1);
  day02 = CheckMonthEnd(date, day02 + 7, 2);
  day03 = CheckMonthEnd(date, day03 + 7, 3);
  day04 = CheckMonthEnd(date, day04 + 7, 4);
  day05 = CheckMonthEnd(date, day05 + 7, 5);
  day06 = CheckMonthEnd(date, day06 + 7, 6);
  day07 = CheckMonthEnd(date, day07 + 7, 7);

  Week += 1;

  SetMonth();
  SetWeekDays();
  ResetPlans();
  GetId.forEach(UpdatePlans);
}

function WeekBack() {
  var dt = new Date();
  dt = dt.toString();
  var date = dt.split(" ");

  day07 = CheckMonthEnd(date, day07 - 7, 7);
  day06 = CheckMonthEnd(date, day07 - 1, 6);
  day05 = CheckMonthEnd(date, day06 - 1, 5);
  day04 = CheckMonthEnd(date, day05 - 1, 4);
  day03 = CheckMonthEnd(date, day04 - 1, 3);
  day02 = CheckMonthEnd(date, day03 - 1, 2);
  day01 = CheckMonthEnd(date, day02 - 1, 1);

  Week -= 1;
  NextBack = 0;
  SetMonth();
  SetWeekDays();
  ResetPlans();
  GetId.forEach(UpdatePlans);
}

function CheckMonthEnd(date, Day, DayOfTheWeek) {
  if (Month == "Jan") {
    MaxDayNext = 31;
    MaxDayBack = 31;
  } else if (Month == "Feb") {
    // Check for a leap year
    MaxDayNext = 29;
    MaxDayBack = 31;
  } else if (Month == "Mar") {
    MaxDayNext = 31;
    MaxDayBack = 29;
  } else if (Month == "Apr") {
    MaxDayNext = 30;
    MaxDayBack = 31;
  } else if (Month == "May") {
    MaxDayNext = 31;
    MaxDayBack = 30;
  } else if (Month == "Jun") {
    MaxDayNext = 30;
    MaxDayBack = 31;
  } else if (Month == "Jul") {
    MaxDayNext = 31;
    MaxDayBack = 30;
  } else if (Month == "Aug") {
    MaxDayNext = 31;
    MaxDayBack = 31;
  } else if (Month == "Sep") {
    MaxDayNext = 30;
    MaxDayBack = 31;
  } else if (Month == "Oct") {
    MaxDayNext = 31;
    MaxDayBack = 30;
  } else if (Month == "Nov") {
    MaxDayNext = 30;
    MaxDayBack = 31;
  } else if (Month == "Dec") {
    MaxDayNext = 31;
    MaxDayBack = 30;
  }

  if (Day > MaxDayNext) {
    NextBack = 1;
    return Day - MaxDayNext;
  } else if (Day < 1) {
    NextBack = 0;
    // if (Day == 0) {
    //   return MaxDayBack;
    // } else if (Day == -1) {
    //   if (DayOfTheWeek === 5) { // Friday
    //     return MaxDayBack - 3; // Adjust for Friday
    //   } else if (DayOfTheWeek === 6) { // Saturday
    //     return MaxDayBack - 4; // Adjust for Saturday
    //   } else {
    //     return MaxDayBack - 1;
    //   }
    // } else if (Day == -2) {
    //   if (DayOfTheWeek === 6) { // Saturday
    //     return MaxDayBack - 3; // Adjust for Saturday
    //   } else {
    //     return MaxDayBack - 2;
    //   }
    // } else if (Day == -3) {
    //   if (DayOfTheWeek === 6) { // Saturday
    //     return MaxDayBack - 2; // Adjust for Saturday
    //   } else {
    //     return MaxDayBack - 3;
    //   }
    // } else {
    //   return Day;
    // }

    return MaxDayBack + Day;
  } else {
    return Day;
  }
}


function SetMonth() {
  // Check if both the first day (day01) and the last day (day07) of the displayed week belong to the same month
  if ((!(day01 > MaxDayNext) && !(day02 > MaxDayNext -1)&& !(day03 > MaxDayNext -2)&& !(day04 > MaxDayNext -3)&& !(day05 > MaxDayNext -4)&& !(day06 > MaxDayNext -5)&& !(day07 > MaxDayNext -6)) && day01 <= 7) {

    if (NextBack == 1) {

      MonthIndex += 1;
      if (MonthIndex == 13) {
        MonthIndex = 1;
        Year += 1;
        Week = 1;
      }
    }
    GetMonthIndex();
  }else if(day01 >= MaxDayBack - 6){

    if (NextBack == 0) {
      MonthIndex -= 1;
      if (MonthIndex == 0) {
        MonthIndex = 12;
        Year -= 1;
        Week = 52;
      }
    }
    GetMonthIndex();
  }
}

function SetStartWeek() {
  var dt = new Date();
  dat = dt.toString();
  var date = dat.split(" ");
  var day = parseInt(date[2]);
  var weekDay = date[0];

  // Calculate the starting day of the week based on the current day of the week
  var startingDay;
  switch (weekDay) {
    case "Mon":
      startingDay = day;

      day01 = day;
      day02 = CheckMonthEnd(date, day01 + 1, 1);
      day03 = CheckMonthEnd(date, day02 + 1, 1);
      day04 = CheckMonthEnd(date, day03 + 1, 1);
      day05 = CheckMonthEnd(date, day04 + 1, 1);
      day06 = CheckMonthEnd(date, day05 + 1, 1);
      day07 = CheckMonthEnd(date, day06 + 1, 1);
      break;
    case "Tue":
      startingDay = day - 1;

      day01 = CheckMonthEnd(date, day02 - 1, 1);
      day02 = day;
      day03 = CheckMonthEnd(date, day02 + 1, 1);
      day04 = CheckMonthEnd(date, day03 + 1, 1);
      day05 = CheckMonthEnd(date, day04 + 1, 1);
      day06 = CheckMonthEnd(date, day05 + 1, 1);
      day07 = CheckMonthEnd(date, day06 + 1, 1);

      break;
    case "Wed":
      startingDay = day - 2;

      day01 = CheckMonthEnd(date, day02 - 1, 1);
      day02 = CheckMonthEnd(date, day03 - 1, 1);
      day03 = day;
      day04 = CheckMonthEnd(date, day03 + 1, 1);
      day05 = CheckMonthEnd(date, day04 + 1, 1);
      day06 = CheckMonthEnd(date, day05 + 1, 1);
      day07 = CheckMonthEnd(date, day06 + 1, 1);

      break;
    case "Thu":
      startingDay = day - 3;

      day01 = CheckMonthEnd(date, day02 - 1, 1);
      day02 = CheckMonthEnd(date, day03 - 1, 1);
      day03 = CheckMonthEnd(date, day04 - 1, 1);
      day04 = day;
      day05 = CheckMonthEnd(date, day04 + 1, 1);
      day06 = CheckMonthEnd(date, day05 + 1, 1);
      day07 = CheckMonthEnd(date, day06 + 1, 1);

      break;
    case "Fri":
      startingDay = day - 4;

      day01 = day;
      day02 = CheckMonthEnd(date, day01 + 1, 1);
      day03 = CheckMonthEnd(date, day02 + 1, 1);
      day04 = CheckMonthEnd(date, day03 + 1, 1);
      day05 = CheckMonthEnd(date, day04 + 1, 1);
      day06 = CheckMonthEnd(date, day05 + 1, 1);
      day07 = CheckMonthEnd(date, day06 + 1, 1);

      break;
    case "Sat":
      startingDay = day - 5;

      day01 = CheckMonthEnd(date, day02 - 1, 1);
      day02 = CheckMonthEnd(date, day03 - 1, 1);
      day03 = CheckMonthEnd(date, day04 - 1, 1);
      day04 = CheckMonthEnd(date, day05 - 1, 1);
      day05 = CheckMonthEnd(date, day06 - 1, 1);
      day06 = day;
      day07 = CheckMonthEnd(date, day06 + 1, 1);

      break;
    case "Sun":
      startingDay = day - 6;

      day01 = CheckMonthEnd(date, day02 - 1, 1);
      day02 = CheckMonthEnd(date, day03 - 1, 1);
      day03 = CheckMonthEnd(date, day04 - 1, 1);
      day04 = CheckMonthEnd(date, day05 - 1, 1);
      day05 = CheckMonthEnd(date, day06 - 1, 1);
      day06 = CheckMonthEnd(date, day07 - 1, 1);
      day07 = day;

      break;
    default:
      startingDay = day;
      break;
  }
  startDay = weekDay;
  // Set the days for the week
  day01 = startingDay;
  day02 = CheckMonthEnd(date, startingDay + 1, 2);
  day03 = CheckMonthEnd(date, startingDay + 2, 3);
  day04 = CheckMonthEnd(date, startingDay + 3, 4);
  day05 = CheckMonthEnd(date, startingDay + 4, 5);
  day06 = CheckMonthEnd(date, startingDay + 5, 6);
  day07 = CheckMonthEnd(date, startingDay + 6, 7);

  Month = date[1]; 
  Year = parseInt(date[3]);
  Week = GetWeek();
  SetMonthIndex();
  SetWeekDays();
}

function ResetPlans(){
  //day01
  document.getElementById("1-1-1-Name").innerHTML = "-";
  document.getElementById("1-1-1-Desc").innerHTML = null;

  document.getElementById("1-2-1-Name").innerHTML = "-";
  document.getElementById("1-2-1-Desc").innerHTML = null;

  document.getElementById("1-3-1-Name").innerHTML = "-";
  document.getElementById("1-3-1-Desc").innerHTML = null;
  
  document.getElementById("1-4-1-Name").innerHTML = "-";
  document.getElementById("1-4-1-Desc").innerHTML = null;

  document.getElementById("1-5-1-Name").innerHTML = "-";
  document.getElementById("1-5-1-Desc").innerHTML = null;
  //day02
  document.getElementById("2-1-1-Name").innerHTML = "-";
  document.getElementById("2-1-1-Desc").innerHTML = null;

  document.getElementById("2-2-1-Name").innerHTML = "-";
  document.getElementById("2-2-1-Desc").innerHTML = null;

  document.getElementById("2-3-1-Name").innerHTML = "-";
  document.getElementById("2-3-1-Desc").innerHTML = null;
  
  document.getElementById("2-4-1-Name").innerHTML = "-";
  document.getElementById("2-4-1-Desc").innerHTML = null;

  document.getElementById("2-5-1-Name").innerHTML = "-";
  document.getElementById("2-5-1-Desc").innerHTML = null;
  //day03
  document.getElementById("3-1-1-Name").innerHTML = "-";
  document.getElementById("3-1-1-Desc").innerHTML = null;

  document.getElementById("3-2-1-Name").innerHTML = "-";
  document.getElementById("3-2-1-Desc").innerHTML = null;

  document.getElementById("3-3-1-Name").innerHTML = "-";
  document.getElementById("3-3-1-Desc").innerHTML = null;
  
  document.getElementById("3-4-1-Name").innerHTML = "-";
  document.getElementById("3-4-1-Desc").innerHTML = null;

  document.getElementById("3-5-1-Name").innerHTML = "-";
  document.getElementById("3-5-1-Desc").innerHTML = null;
  //day04
  document.getElementById("4-1-1-Name").innerHTML = "-";
  document.getElementById("4-1-1-Desc").innerHTML = null;

  document.getElementById("4-2-1-Name").innerHTML = "-";
  document.getElementById("4-2-1-Desc").innerHTML = null;

  document.getElementById("4-3-1-Name").innerHTML = "-";
  document.getElementById("4-3-1-Desc").innerHTML = null;
  
  document.getElementById("4-4-1-Name").innerHTML = "-";
  document.getElementById("4-4-1-Desc").innerHTML = null;

  document.getElementById("4-5-1-Name").innerHTML = "-";
  document.getElementById("4-5-1-Desc").innerHTML = null;
  //day05
  document.getElementById("5-1-1-Name").innerHTML = "-";
  document.getElementById("5-1-1-Desc").innerHTML = null;

  document.getElementById("5-2-1-Name").innerHTML = "-";
  document.getElementById("5-2-1-Desc").innerHTML = null;

  document.getElementById("5-3-1-Name").innerHTML = "-";
  document.getElementById("5-3-1-Desc").innerHTML = null;
  
  document.getElementById("5-4-1-Name").innerHTML = "-";
  document.getElementById("5-4-1-Desc").innerHTML = null;

  document.getElementById("5-5-1-Name").innerHTML = "-";
  document.getElementById("5-5-1-Desc").innerHTML = null;
  //day06
  document.getElementById("6-1-1-Name").innerHTML = "-";
  document.getElementById("6-1-1-Desc").innerHTML = null;

  document.getElementById("6-2-1-Name").innerHTML = "-";
  document.getElementById("6-2-1-Desc").innerHTML = null;

  document.getElementById("6-3-1-Name").innerHTML = "-";
  document.getElementById("6-3-1-Desc").innerHTML = null;
  
  document.getElementById("6-4-1-Name").innerHTML = "-";
  document.getElementById("6-4-1-Desc").innerHTML = null;

  document.getElementById("6-5-1-Name").innerHTML = "-";
  document.getElementById("6-5-1-Desc").innerHTML = null;
  //day07
  document.getElementById("7-1-1-Name").innerHTML = "-";
  document.getElementById("7-1-1-Desc").innerHTML = null;

  document.getElementById("7-2-1-Name").innerHTML = "-";
  document.getElementById("7-2-1-Desc").innerHTML = null;

  document.getElementById("7-3-1-Name").innerHTML = "-";
  document.getElementById("7-3-1-Desc").innerHTML = null;
  
  document.getElementById("7-4-1-Name").innerHTML = "-";
  document.getElementById("7-4-1-Desc").innerHTML = null;

  document.getElementById("7-5-1-Name").innerHTML = "-";
  document.getElementById("7-5-1-Desc").innerHTML = null;

  //BOTOM
  //BOTTOM

  //day01
  document.getElementById("1-1-0-Name").innerHTML = "-";
  document.getElementById("1-1-0-Desc").innerHTML = null;
  document.getElementById("1-2-0-Name").innerHTML = "-";
  document.getElementById("1-2-0-Desc").innerHTML = null;
  document.getElementById("1-3-0-Name").innerHTML = "-";
  document.getElementById("1-3-0-Desc").innerHTML = null;  
  document.getElementById("1-4-0-Name").innerHTML = "-";
  document.getElementById("1-4-0-Desc").innerHTML = null;
  document.getElementById("1-5-0-Name").innerHTML = "-";
  document.getElementById("1-5-0-Desc").innerHTML = null;
  //day02
  document.getElementById("2-1-0-Name").innerHTML = "-";
  document.getElementById("2-1-0-Desc").innerHTML = null;
  document.getElementById("2-2-0-Name").innerHTML = "-";
  document.getElementById("2-2-0-Desc").innerHTML = null;
  document.getElementById("2-3-0-Name").innerHTML = "-";
  document.getElementById("2-3-0-Desc").innerHTML = null; 
  document.getElementById("2-4-0-Name").innerHTML = "-";
  document.getElementById("2-4-0-Desc").innerHTML = null;
  document.getElementById("2-5-0-Name").innerHTML = "-";
  document.getElementById("2-5-0-Desc").innerHTML = null;
  //day03
  document.getElementById("3-1-0-Name").innerHTML = "-";
  document.getElementById("3-1-0-Desc").innerHTML = null;
  document.getElementById("3-2-0-Name").innerHTML = "-";
  document.getElementById("3-2-0-Desc").innerHTML = null;
  document.getElementById("3-3-0-Name").innerHTML = "-";
  document.getElementById("3-3-0-Desc").innerHTML = null;  
  document.getElementById("3-4-0-Name").innerHTML = "-";
  document.getElementById("3-4-0-Desc").innerHTML = null;
  document.getElementById("3-5-0-Name").innerHTML = "-";
  document.getElementById("3-5-0-Desc").innerHTML = null;
  //day04
  document.getElementById("4-1-0-Name").innerHTML = "-";
  document.getElementById("4-1-0-Desc").innerHTML = null;
  document.getElementById("4-2-0-Name").innerHTML = "-";
  document.getElementById("4-2-0-Desc").innerHTML = null;
  document.getElementById("4-3-0-Name").innerHTML = "-";
  document.getElementById("4-3-0-Desc").innerHTML = null; 
  document.getElementById("4-4-0-Name").innerHTML = "-";
  document.getElementById("4-4-0-Desc").innerHTML = null;
  document.getElementById("4-5-0-Name").innerHTML = "-";
  document.getElementById("4-5-0-Desc").innerHTML = null;
  //day05
  document.getElementById("5-1-0-Name").innerHTML = "-";
  document.getElementById("5-1-0-Desc").innerHTML = null;
  document.getElementById("5-2-0-Name").innerHTML = "-";
  document.getElementById("5-2-0-Desc").innerHTML = null;
  document.getElementById("5-3-0-Name").innerHTML = "-";
  document.getElementById("5-3-0-Desc").innerHTML = null;
  document.getElementById("5-4-0-Name").innerHTML = "-";
  document.getElementById("5-4-0-Desc").innerHTML = null;
  document.getElementById("5-5-0-Name").innerHTML = "-";
  document.getElementById("5-5-0-Desc").innerHTML = null;
  //day06
  document.getElementById("6-1-0-Name").innerHTML = "-";
  document.getElementById("6-1-0-Desc").innerHTML = null;
  document.getElementById("6-2-0-Name").innerHTML = "-";
  document.getElementById("6-2-0-Desc").innerHTML = null;
  document.getElementById("6-3-0-Name").innerHTML = "-";
  document.getElementById("6-3-0-Desc").innerHTML = null; 
  document.getElementById("6-4-0-Name").innerHTML = "-";
  document.getElementById("6-4-0-Desc").innerHTML = null;
  document.getElementById("6-5-0-Name").innerHTML = "-";
  document.getElementById("6-5-0-Desc").innerHTML = null;
  //day07
  document.getElementById("7-1-0-Name").innerHTML = "-";
  document.getElementById("7-1-0-Desc").innerHTML = null;
  document.getElementById("7-2-0-Name").innerHTML = "-";
  document.getElementById("7-2-0-Desc").innerHTML = null;
  document.getElementById("7-3-0-Name").innerHTML = "-";
  document.getElementById("7-3-0-Desc").innerHTML = null;
  document.getElementById("7-4-0-Name").innerHTML = "-";
  document.getElementById("7-4-0-Desc").innerHTML = null;
  document.getElementById("7-5-0-Name").innerHTML = "-";
  document.getElementById("7-5-0-Desc").innerHTML = null;
}

function isAlreadyThere(weekDay, priority, top){
  if(document.getElementById(weekDay + "-" + priority + "-" + Top + "-Name").innerHTML != "-" && document.getElementById(weekDay + "-" + priority + "-" + Top + "-Desc").innerHTML != "-"){
    return true;
  }else{
    return false;
  }
}

function GetWeek(){
  currentDate = new Date();
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}
function SetPlan(weekDay, name, description, priority, top, planned, done, color){
  document.getElementById(weekDay +"-" + priority + "-" + top + "-Name").innerHTML = name;
  document.getElementById(weekDay +"-" + priority + "-" + top + "-Desc").innerHTML = description;
}
function UpdatePlans(id){
  //console.log(id);
  //Name + "|" + Description + "|" + WeekDay + "|" + Year + "|" + Month + "|" + Week + "|" + Day + "|" + Priority + "|" + Top + "|" + Planned + "|" + Done + "|" + Color
  var GetName = id.split("|")[0];
  var GetDescription = id.split("|")[1];
  var GetWeekDay = id.split("|")[2];
  var GetYear = id.split("|")[3];
  var GetMonth = id.split("|")[4];
  var GetWeek = id.split("|")[5];
  var GetDay = id.split("|")[6];
  var GetPriority = id.split("|")[7];
  var GetTop = id.split("|")[8];
  var GetPlanned = id.split("|")[9];
  var GetDone = id.split("|")[10];
  var GetColor = id.split("|")[11];
  //console.log("Year: " + typeof(Year) + "month: " + typeof(Month) + "Week: " + typeof(Week));
  //console.log("Year: " + typeof(GetYear) + "month: " + typeof(GetMonth) + "Week: " + typeof(GetWeek));
  if (Year != parseInt(GetYear)) return;
  if (Month != GetMonth) return;
  //if (Week != parseInt(GetWeek)) return;
  //console.log("We have a candidate");

  if(day01 == GetDay && GetWeekDay == 1){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day02 == GetDay && GetWeekDay == 2){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day03 == GetDay && GetWeekDay == 3){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day04 == GetDay && GetWeekDay == 4){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day05 == GetDay && GetWeekDay == 5){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day06 == GetDay && GetWeekDay == 6){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else if(day07 == GetDay && GetWeekDay == 7){
    SetPlan(GetWeekDay, GetName, GetDescription, GetPriority, GetTop, GetPlanned, GetDone, GetColor);
  }else{
    //console.error("something gone wrong");
    return;
  }
}
function GetData(planIds) {
  // Your logic to work with the planIds array
  GetId = planIds;
  console.log(GetId);
  GetId.forEach(UpdatePlans);

  WeekBack();
  WeekNext();
}

function onLoad() {
    //some funcitons here...
    console.log('Website Loaded.');
    SetStartWeek();
}
window.onload = onLoad;