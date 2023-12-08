/**
 * As detailed in the official guides
 * - https://firebase.google.com/docs/web/setup
 * - https://firebase.google.com/docs/web/alt-setup
 */
import { initializeApp, type FirebaseOptions } from "firebase/app";

/**
 * It is fine to publicly expose configuration settings
 * - https://stackoverflow.com/a/37484053/
 */
const config: FirebaseOptions = {
  apiKey: "AIzaSyBlnNJGBI4O-dYjzUOIR6PiMgT58M3bYbQ", // cspell:disable-line
  authDomain: "mark-p0-a7b34.firebaseapp.com",
  projectId: "mark-p0-a7b34",
  storageBucket: "mark-p0-a7b34.appspot.com",
  messagingSenderId: "34801138848",
  appId: "1:34801138848:web:273eb8cf48af8d8f0b1dc5",
  databaseURL:
    "https://mark-p0-a7b34-default-rtdb.asia-southeast1.firebasedatabase.app",
};
export const app = initializeApp(config);
