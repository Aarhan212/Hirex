import firebase  from "firebase";
/*import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env'
*/
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default Firebase