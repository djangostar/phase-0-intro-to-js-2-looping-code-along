// Code your solutions in this file
const writeCards = (arrName, event) => {
  // create new array of names
  const newArrName = [];
  // loop through the original array of names
  for (let i = 0; i < arrName.length; i++) {
    // add the names to the new array in each iteration
    // console.log the message
    newArrName.push(
      `Thank you, ${arrName[i]}, for the wonderful ${event} gift!`
    );
  }
  // return the new array
  return newArrName;
};

const countDown = (integer) => {
  // while the integer is greater than zero, log the integer value
  while (integer > 0) {
    console.log(integer);
    // minus one through each iteration until zero is reached
    integer -= 1;
  }
  // console log the integer value
  console.log(integer);
};
