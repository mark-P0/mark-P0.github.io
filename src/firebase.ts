/**
 * As detailed in the official guides
 * https://firebase.google.com/docs/web/setup
 * https://firebase.google.com/docs/web/alt-setup
 */

import { initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { child, get, getDatabase, push, ref, set } from 'firebase/database';
import { getBlob, getStorage, ref as storageRef } from 'firebase/storage';

/**
 * It is fine to publicly expose configuration settings
 * https://stackoverflow.com/a/37484053/
 */
const firebaseConfig = {
  apiKey: 'AIzaSyBlnNJGBI4O-dYjzUOIR6PiMgT58M3bYbQ', // cspell:disable-line
  authDomain: 'mark-p0-a7b34.firebaseapp.com',
  projectId: 'mark-p0-a7b34',
  storageBucket: 'mark-p0-a7b34.appspot.com',
  messagingSenderId: '34801138848',
  appId: '1:34801138848:web:273eb8cf48af8d8f0b1dc5',
  databaseURL:
    'https://mark-p0-a7b34-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeY0-IiAAAAAPrzzMMEAasUOdrh_As6QdXdcD_l'), // cspell:disable-line
  isTokenAutoRefreshEnabled: true,
});
const db = getDatabase(app);
const storage = getStorage(app);

/**
 * Generate ID at provided `key`
 */
export async function createId(key: string) {
  return push(child(ref(db), key)).key;
}

/**
 * Create data at provided `key`
 */
export async function create(key: string, value: unknown) {
  await set(ref(db, key), value);
}

/**
 * Read data at provided `key`
 */
export async function read(key: string) {
  const snapshot = await get(child(ref(db), key));
  if (snapshot.exists()) return snapshot.val();
  return null;
}

/**
 * Delete provided `key` by setting it to `null`
 * `delete` is a reserved operator keyword, so `del` is used as name instead
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 */
export async function del(key: string) {
  await set(ref(db, key), null);
}

/** https://firebase.google.com/docs/storage/web/download-files */
export async function getStorageBlob(path: string) {
  const fileRef = storageRef(storage, path);
  return await getBlob(fileRef);
}
