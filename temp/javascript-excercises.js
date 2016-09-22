// JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
var a = 5;
var b = 6;
var c = 7;
var s = (a + b + c) / 2;
console.log(s)
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);

// determine whether a given year is a leap year
// <input type="text"ng-model="$ctrl.year" patchHolder="enter a year">
var year = window.prompt("enter a year");
console.log(year);
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);

//to pick a random number
var num = window.prompt("enter a number");
var temp=Math.ceil(Math.random()*10);
console.log(temp);
if(num===temp){
  alert('matched');
}else{
  alert('Not matched');
}

