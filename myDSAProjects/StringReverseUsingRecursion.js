function reverseString(str) {

    const length = str.length; 
    const reverseArray = [];
    for(let i = length - 1; i >= 0 ; i--) {
        reverseArray.push(str[i]);
    }
    const reversedString = reverseArray.join("");
    console.log("Reversed String is: " + reversedString);
      return reversedString;
    }
    
    reverseString("yoyo master");
    
    function reverseStringRecursive(str) {
    
        const reverseArray = [];
        if (str === "") {
            return "";
          }
          return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
    
    console.log(reverseStringRecursive("yoyo master"));
    