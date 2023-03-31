export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const elem of set) {
    if (elem.includes(startString)) {
      arr.push(elem.replace(startString, ''));
    }
  }
  return arr.join('-');
}
