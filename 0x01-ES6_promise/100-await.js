import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  return {
    photo: await uploadPhoto(),
    user: await createUser(),
  };
}
