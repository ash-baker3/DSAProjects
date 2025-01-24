//my implementation
function reverseString1(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    //do nothing
    console.log(str + " is Not a string");
    return str;
  }

  console.log("Given String is: " + str); //O(1)
  const charArray = str.split(""); //O(1)
  const length = charArray.length; //O(1)
  const reverseArray = []; //O(1)
  for (let i = 0; i < length; i++) {
    //O(n)
    reverseArray[i] = charArray.pop(); //O(n)
  }
  const reversedString = reverseArray.join(""); //O(1)
  console.log("Reversed String is: " + reversedString); //O(1)
  return reversedString;
}

const str = "Hi My Name is Ash";
reverseString3(str);

//Andrei's implementation
function reverseString2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    //do nothing
    console.log(str + " is Not a string");
    return str;
  }
  console.log("Given String is: " + str);
  const reverse = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reverse.push(str[i]);
  }
  console.log("Reversed String is: " + reverse.join(""));
  return reverse;
}

//Most Efficient implementation
function reverseString3(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    //do nothing
    console.log(str + " is Not a string");
    return str;
  }
  console.log("Given String is: " + str);
  const reverseString = str.split("").reverse().join("");
  console.log("Reversed String is: " + reverseString);
}

//One-line Function
const reverseString = (str) => str.split("").reverse().join("");
console.log("Reversed String is: " + reverseString("Hi My Name is Ash"));
