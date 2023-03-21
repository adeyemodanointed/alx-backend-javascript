export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const str of array) {
    newArr.push(appendString + str);
  }

  return newArr;
}
