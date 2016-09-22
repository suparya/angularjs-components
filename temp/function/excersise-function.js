//to reverse a string
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join('');
console.log(strReverse);

//to reverse a number
var reverseString = function(num) {
    console.log(num);
    num = num + ""; //converting into a string by concat with a empty sapace, we cant directly split a number
    var temp = num.split("");
    console.log(temp.reverse().join(""));

}
reverseString(24391);

 
// revers digit of the given number(in array format)
var num = 24391;
var tmp = [];
while (num >= 1) {
    tmp.push(num % 10);
    // console.log(num); 
    num = parseInt((num / 10));
    // num =(num / 10)
    console.log(num);
}
tmp = tmp.reverse();
console.log("The value of tmp is : ", tmp);


// short a string//str="!@#$%^&*()_+-Lizum24"//result=!#$%&()*+-24@L^_imuz
var str = 'asdfghjkl';
var strReverse = str.split('').sort().join('');
console.log(strReverse);


//function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
var str='the quick brown fox';
var temp =str.split(" ");
for(var i=0;i<temp.length;i+=1){
  //temp[i] = (temp[i]).toUpperCase();//o/p-["THE","QUICK","BROWN","FOX"]
  var splitTemp=temp[i].split("");
  splitTemp[0] = (splitTemp[0]).toUpperCase()
  temp[i]=splitTemp.join("");
  console.log(temp[i]);  
}
console.log(temp);//o/p-["The","Quick","Brown","Fox"]