const firebaseConfig = {
    apiKey: "AIzaSyDHJ5H1bdABs8J9Dao_a7RlI7nljs-WcCQ",
    authDomain: "blackhost-894a3.firebaseapp.com",
    databaseURL: "https://blackhost-894a3-default-rtdb.firebaseio.com",
    projectId: "blackhost-894a3",
    storageBucket: "blackhost-894a3.appspot.com",
    messagingSenderId: "1081415925568",
    appId: "1:1081415925568:web:3f3ae2ea3fc36edfc684a5"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    window.location="index.html"
}