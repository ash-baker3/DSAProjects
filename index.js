
const array1 = ["a", "b", true , 'a-b'];
const array2 = ["q", 'a+b', "m", false];

// a=true b=true c=true x=true
function containsCommon2(array1, array2) {
  let map={};
  for(let i=0; i<array1.length; i++) {
    const item = array1[i];
    if(!map[item]) {
      map[item] = true; //setting properties to items in first array
    }
  }
  for(let j=0; j<array2.length; j++) {
    if(map[array2[j]]) {
      console.log("True");
      return true;
    }
  }
  console.log("False");
  return false;
}

containsCommon2(array1, array2);