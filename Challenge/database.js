import firebase from 'firebase/app'
import 'firebase/firestore'

export const database = firebase
.initializeApp ({
    apiKey: "AIzaSyDtI99Hw2CpqggMo4AShOwpeyRa_BEeIsg",
    authDomain: "challenge-708d7.firebaseapp.com",
    projectId: "challenge-708d7",
    storageBucket: "challenge-708d7.appspot.com",
    messagingSenderId: "870019208237",
    appId: "1:870019208237:web:3bf712a57e17f4f27d54a4",
})

.firestore ()




