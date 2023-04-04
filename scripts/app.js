// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, orderByKey, limitToLast, query } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtiD_bomobkcucNMXkMWtlnA5i1OQ-1Ec",
  authDomain: "phonglnd-portfolio.firebaseapp.com",
  databaseURL: "https://phonglnd-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phonglnd-portfolio",
  storageBucket: "phonglnd-portfolio.appspot.com",
  messagingSenderId: "709739574930",
  appId: "1:709739574930:web:83f08679cc73e540e3184b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const allowed_length = 100;

export function get_dataset(bucket_name) {
  const topRecordsRef = query(ref(database, bucket_name),orderByKey(), limitToLast(allowed_length));
  var data = [];
  get(topRecordsRef).then(function (snapshot) {
    snapshot.forEach((childSnapshot) => {
      var x = childSnapshot.val();
      data.push(x);
    })
  })
  return data;
}
