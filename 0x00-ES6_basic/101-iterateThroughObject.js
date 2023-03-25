export default function iterateThroughObject(reportWithIterator) {
  let returnValue = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    returnValue += reportWithIterator[i];
    if (i !== reportWithIterator.length - 1) {
      returnValue += ' | ';
    }
  }
  return returnValue;
}
