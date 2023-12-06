// Code your solutions in this file
const writeCards = (arr, events) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${events} gift!`);
  }
  return newArr;
};

const countDown = (integer) => {
  while (integer > 0) {
    console.log(integer);
    integer -= 1;
  }
  console.log(integer);
};
