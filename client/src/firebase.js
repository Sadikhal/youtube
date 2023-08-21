



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2K13F9KuWHyYPKxBIys5bpTMosQ3KCr8",
  authDomain: "fir-4035d.firebaseapp.com",
  projectId: "fir-4035d",
  storageBucket: "fir-4035d.appspot.com",
  messagingSenderId: "333737779184",
  appId: "1:333737779184:web:e7023a614d02a97b290735",
  measurementId: "G-W19BB1F0KW"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export default app;

