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
  apiKey: "AIzaSyCVuIJHD7EtH3RyNCwKftz6lIpap8-_-4E",
  authDomain: "hirex-958c4.firebaseapp.com",
  projectId: "hirex-958c4",
  storageBucket: "hirex-958c4.appspot.com",
  messagingSenderId: "677723013524",
  appId: "1:677723013524:web:7b59dce518cc240b388f81",
  measurementId: "G-3N5HXGQC2R"
};

const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default Firebase