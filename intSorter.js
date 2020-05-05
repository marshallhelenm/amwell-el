//a function that takes in a string and splits in on \n
function cleanData(data) {
  let arr = data.split("\n");
  let cleanArr = []; //an array to store a new set of numbers with no repeats
  for (let i = 0; i < arr.length; i++) {
    // convert elements into integers if possible
    // and also checks if they are already in the new array
    if (Number(arr[i]) != NaN && !cleanArr.includes(Number(arr[i]))) {
      cleanArr.push(Number(arr[i])); // if both criteria are met, we add it to the new array!
    }
  }
  cleanArr.sort(); // sort in ascending order
  return cleanArr.slice(0, 3); //return the lowest 3
}

module.exports = cleanData;

