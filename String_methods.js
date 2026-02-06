//Slice method
let str1 = "I want to become a web developer";
console.log(str1.slice(3,8));//substring(start, end);
console.log(str1.substring(3, 8));//substring(start, end);
console.log(str1.substr(3,5));//substring(start, what should length you need);
console.log(str1.replace("web", "software"));//replace(what string you want to change, put new string);
console.log(str1.concat(" & web developer"));// Concat is use to add one string to another string;
let str2 = "      I am a ICT engineer    ";
console.log(str2);
console.log(str2.trim());//remove enpty spaces;
console.log(str2.trimStart());//remove just start empty space not remove end sapce;
console.log(str2.trimEnd());//remove just empty empty space not remove start sapce;
let str3 = "Hello coders!";
console.log(str3.search("o"));//Search any string;
console.log(str3.indexOf("!"));//Search index number.
console.log(str3.lastIndexOf("l"));//Search from last index.
console.log(str3.startsWith("Meow"));//If given string natch to the str3 string the return true, otherwise return false;
let human = "Karim Uddin";
console.log(human.match("din"));//match string to string;
console.log(human.includes("Udd"));//If match string to string then return true, otherwise return false;
console.log(human.startsWith("Uddin"));//return false. cos start Karim;
console.log(human.endsWith("Karim"));//return false. cos end Uddin;
