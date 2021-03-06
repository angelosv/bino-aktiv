import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/functions';


const firebaseConfig = {
    apiKey: "AIzaSyBK131G6WtavnRyNFaVkukporVyLlFPm7o",
    authDomain: "vibrant-fabric-275712.firebaseapp.com",
    projectId: "vibrant-fabric-275712",
    storageBucket: "vibrant-fabric-275712.appspot.com",
    messagingSenderId: "793155785410",
    appId: "1:793155785410:web:dae7b4ea4088bcb31a215b",
    measurementId: "G-NQ2W5T1HXQ"
};



firebase.initializeApp(firebaseConfig)
firebase.analytics();
firebase.auth()//.useEmulator('http://localhost:9099/')
firebase.functions()//.useEmulator("localhost", 5001);;
const auth = firebase.auth();
const functions = firebase.functions()
export {
    auth,
    functions
}