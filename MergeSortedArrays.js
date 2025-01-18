//Sorted Array Implementation
function mergeSortedArrays(array1, array2) {
  if (!array1 || !array2) {
    console.log("Invalid Input");
  } else if (array1.length === 0) {
    console.log("Array1 doest exist" + array2);
    return array2;
  } else if (array2.length === 0) {
    console.log("Array1 doest exist" + array1);
    return array1;
  } else {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
      if (array2Item === undefined || array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
    }
    console.log(mergedArray);
  }
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
mergeSortedArrays(array1, array2);
