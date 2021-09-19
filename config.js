import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDPM8bvkFsvZzKX0kipP__PSYTPtPnS_9s",
  authDomain: "project71-5cd65.firebaseapp.com",
  projectId: "project71-5cd65",
  storageBucket: "project71-5cd65.appspot.com",
  messagingSenderId: "956450808181",
  appId: "1:956450808181:web:405299d6cccec3c599333c"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

