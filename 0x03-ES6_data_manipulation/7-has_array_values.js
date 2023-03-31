export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  for (const elem of arraySet) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
