// const nemo = ['nemo'];

// const findNemo = array => {
//   array.forEach(fish => {
//     if(fish === 'nemo') {
//        console.log('Found NEMO!');
//     }
//   })
// }

// const findNemo2 = array => {
//   for(let fish of array) {
//     if(fish === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo(nemo);
// findNemo2(nemo);

// function containsCommonItem(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         console.log("true");
//         return true;
//       }
//     }
//   }
//   console.log("false");
//   return false;
// }
// containsCommonItem(array1, array2);

const array1 = ["a", "b", true, "a-b"];
const array2 = ["q", "a+b", "m", false];

// a=true b=true c=true x=true
function containsCommon2(array1, array2) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    if (!map[item]) {
      map[item] = true; //setting properties to items in first array
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      console.log("True");
      return true;
    }
  }
  console.log("False");
  return false;
}

containsCommon2(array1, array2);
