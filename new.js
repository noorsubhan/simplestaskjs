//Create 4 variables: firstName, lastName, thisYear, and birthYear take value using prompt Create a 5th variable, greeting, that is constructed from the previous 4(it should contain a greeting with the person's full name and their age) Hint:calculate age using birthyear and this year Print greeting with console.log


var firstName=prompt("enter your  first name");
var lastName =prompt("enter your  last name") ;
var thisYear = prompt("enter  current year") ;
var birthYear = prompt("enter your birthday year");
var age = thisYear - birthYear ;

var greeting= firstName+lastName+"<br/> age :"+age;
document.write(greeting)
