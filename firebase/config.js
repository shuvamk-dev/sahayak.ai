import app from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB4pJxTyj86pbpmLD5Xdg5hHUsfiFhRnEY",
    authDomain: "sahayak-b8156.firebaseapp.com",
    projectId: "sahayak-b8156",
    storageBucket: "sahayak-b8156.appspot.com",
    messagingSenderId: "181520260566",
    appId: "1:181520260566:web:66899c123ffde1e4ecd877",
    measurementId: "G-9X1F404FD2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = app.storage();
const projectFirestore = app.firestore();

export { projectFirestore, projectStorage };

