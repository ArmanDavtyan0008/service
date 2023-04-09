import { initializeApp } from "firebase/app";
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
