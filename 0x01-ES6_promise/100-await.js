import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
