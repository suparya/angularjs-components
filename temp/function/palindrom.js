// function that checks whether a passed string is palindrome or not
function checkPalindrom(str){
 console.log(str); 
  var splitString=str.split("").reverse().join("");
   console.log(splitString);
    if(str==splitString){
     console.log('palindrom');
    }
}

checkPalindrom('madam');