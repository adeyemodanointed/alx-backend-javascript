export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get _name() {
    return this._name;
  }

  get _length() {
    return this._length;
  }

  get _students() {
    return this._students;
  }

  set _name(name) {
    if (typeof name !== 'string') {
      return new Error('Name must be a string');
    } else {
    this._name = name;
    }
  }

  set _length(length) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;
  }

  set _students(students) {
    if (!(students instanceof Array)) {
      throw new Error('Students must be an Array');
    }
    this._students = students;
  }
}
