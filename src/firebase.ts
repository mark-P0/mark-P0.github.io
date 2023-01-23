/**
 * As detailed in the official guides
 * https://firebase.google.com/docs/web/setup
 * https://firebase.google.com/docs/web/alt-setup
 */

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, push, set, get } from 'firebase/database';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

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

async function addNewProject(projectData: string) {
  const root = 'projects';

  const newProjectKey = push(child(ref(db), root)).key;
  const result = await set(ref(db, `${root}/${newProjectKey}`), projectData);

  return result;
}

async function getTopLevelData(root: string) {
  const snapshot = await get(child(ref(db), root));
  if (snapshot.exists()) return snapshot.val();
  return null;
}

export { app, db, addNewProject, getTopLevelData };
