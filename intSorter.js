function cleanData(data) {
  //accepts a string of line separated data
  let arr = data.split("\n"); //splits the string on \n and stores in an array
  let cleanArr = []; //an empty array to store a new set of numbers with no repeats
  for (let i = 0; i < arr.length; i++) {
    // a loop that converts the elements into integers if possible
    // checks if they are already in the new array
    //and if both criteria are met, adds it to the "clean" array
    if (Number(arr[i]) != NaN && !cleanArr.includes(Number(arr[i]))) {
      cleanArr.push(Number(arr[i]));
    }
  }
  cleanArr.sort(); // sort in ascending order
  return cleanArr.slice(0, 3); //return the lowest 3
}

module.exports = cleanData;
