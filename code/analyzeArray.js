export default function analyzeArray(array) {
  let average = getAverage(array);
  let min = getMin(array);
  let max = getMax(array);
  let length = array.length;

  return { 
    average, 
    min, 
    max, 
    length 
  }
}

function getAverage(array) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }

  res /= array.length;

  return res;
}

function getMin(array) {
  let res = Math.min(...array);

  return res;
}

function getMax(array) {
  let res = Math.max(...array);

  return res;
}