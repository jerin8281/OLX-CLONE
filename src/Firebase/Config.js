import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
    // Enter your firebase configuration here
  };
 
  
export default firebase.initializeApp(firebaseConfig);





