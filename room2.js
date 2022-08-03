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
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
    window.location="index.html"
}

username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("room name-" + Room_names)
              row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'> #" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();


function add_room() {
  roomname = document.getElementById("room_name").value
  firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
  });

  localStorage.setItem("room_name", roomname);
  window.location = "room3.html"
}


function redirecttoroomname(name) {
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "room3.html"
} 