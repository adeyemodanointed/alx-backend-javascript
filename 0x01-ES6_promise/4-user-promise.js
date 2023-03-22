export default function signUpUser(firstName, lastName) {
  return new Promise((onResolve) => {
    onResolve({
      firstName,
      lastName,
    });
  });
}
