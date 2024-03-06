import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3nrIbtnsWywiKW353YTFRZ83T1nWg2Zc",
    authDomain: "kmvplrvhpl-51d3f.firebaseapp.com",
    projectId: "kmvplrvhpl-51d3f",
    storageBucket: "kmvplrvhpl-51d3f.appspot.com",
    messagingSenderId: "138039517662",
    appId: "1:138039517662:web:46639960a09d6b37c3fd4f"
  };

const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
