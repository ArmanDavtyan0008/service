import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJ_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
=======
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWO8PYC0pz3u0wji0jQoYA7sGB8daPEFQ",
  authDomain: "aca-react-data.firebaseapp.com",
  projectId: "aca-react-data",
  storageBucket: "aca-react-data.appspot.com",
  messagingSenderId: "652183017601",
  appId: "1:652183017601:web:dba8802e93708ecbaf1580",
  measurementId: "G-4LE3QRMR7S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
>>>>>>> a6d8a9be473abdfc4fc3d9c9ca1d1df716efd194
