import { CreaId } from "/IndexScript.js"

var date = luxon.DateTime.now();
var day01 = 1;
var day02 = 2;
var day03 = 3;
var day04 = 4;
var day05 = 5;
var day06 = 6;
var day07 = 7;
var MonthIndex;
var NextBack;

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

export function createPlan(id)
{
    WeekDay = id.split("-")[0];
    Priority = id.split("-")[1];
    Top = id.split("-")[2];

    if(isAlreadyThere(WeekDay, Priority, Top)){
      //check what you wrote there and has function to delete it
      alert("Name: " + document.getElementById(WeekDay + "-" + Priority + "-" + Top + "-Name").innerHTML + "\n" + "Description: " + document.getElementById(WeekDay + "-" + Priority + "-" + Top + "-Desc").innerHTML);
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

    CreateId = Name + "|" + Description + "|" + WeekDay + "|" + Year + "|" + date.toFormat("LLL") + "|" + Week + "|" + Day + "|" + Priority + "|" + Top + "|" + Planned + "|" + Done + "|" + Color;
    CreaId(CreateId);
    window.location.reload();
}
weekNext.addEventListener('click',(e) => {
  WeekNext();
});
weekBack.addEventListener('click',(e) => {
  WeekBack();
});
function WeekNext(){
  date = date.plus({ days: 7 });
  SetStart();
  ResetPlans();
  GetId.forEach(UpdatePlans);
}

function WeekBack() {
  date = date.minus({ days: 7 });
  SetStart();
  ResetPlans();
  GetId.forEach(UpdatePlans);
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
  if (date.toFormat("LLL") != GetMonth) return;
  //if (Week != parseInt(GetWeek)) return;
  //console.log("We have a candidate");
  console.log("pass1")
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
    console.error("something gone wrong");
    return;
  }
}
export function GetData(planIds) {
  // Your logic to work with the planIds array
  GetId = planIds;
  GetId.forEach(UpdatePlans);
}
function SetWeekDays(){

  if(date.weekday == 1){
    date = date
  }
  if(date.weekday == 2){
    date = date.minus({ days: 1 })
  }
  if(date.weekday == 3){
    date = date.minus({ days: 2 })
  }
  if(date.weekday == 4){
    date = date.minus({ days: 3 })
  }
  if(date.weekday == 5){
    date = date.minus({ days: 4 })
  }
  if(date.weekday == 6){
    date = date.minus({ days: 5 })
  }
  if(date.weekday == 7){
    date = date.minus({ days: 6 })
  }

  day01 = date.day
  day02 = date.plus({ days: 1 }).day
  day03 = date.plus({ days: 2 }).day
  day05 = date.plus({ days: 4 }).day
  day04 = date.plus({ days: 3 }).day
  day07 = date.plus({ days: 6 }).day
  day06 = date.plus({ days: 5 }).day
}
function SetStart(){
  //set the current year
  document.getElementById("Year").innerHTML = date.year;
  //set the current month
  document.getElementById("Month").innerHTML = date.toFormat("LLL");
  //set the current weekdays
  SetWeekDays();

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
}
export function onLoad() {
    //some funcitons here...
    //console.log(moment().format('ddd'));
    //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    date = luxon.DateTime.now();
    Month = date.month;
    Year = date.year;
    console.log(date.toString())
    SetStart();
    console.log('Website Loaded.');
}
window.onload = onLoad;