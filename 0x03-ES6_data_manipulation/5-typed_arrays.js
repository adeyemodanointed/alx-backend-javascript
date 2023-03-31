export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length)
    const view = new DataView(buffer).setInt8(position, value, true);
    return new Int8Array(buffer);
  } catch (error) {
    throw new Error('Position outside range');
  }
}
