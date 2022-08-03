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




username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id)
                console.log(message_data)
                name_id = message_data["name"]
                message = message_data["message"]
                like = message_data["like"]

                nametag = "<h4>" + name_id + "<img src='tick.png' class='user_tick'></h4>"
                messagetag = "<h4 class='message_h4'>" + message + "</h4>"
                liketag = "<button class='btn btn-warning' id='" + firebase_message_id + "' value=" + like + " onclick='updatelike(this.id)'>"
                spantag = "<span class='glyphicon glyphicon-thumbs-up'> like:" + like + "</span></button><hr>"

                row = nametag + messagetag + liketag + spantag
                console.log(row)
                document.getElementById("output").innerHTML += row
                //End code
            }
        });
    });
}
getData();

function send() {

    text = document.getElementById("text").value
    console.log(text)
    firebase.database().ref(room_name).push({
        like: 0,
        name: username,
        message: text
    })
    document.getElementById("text").innerHTML = "";
}

function updatelike(button_id){
    console.log(button_id+" is the message inside the updatelike function")
    likes=document.getElementById(button_id).value
    updatedlike=Number(likes)+1;
    console.log(updatedlike)
    firebase.database().ref(room_name).child(button_id).update({
        like:updatedlike
    })
    }
    function logout() {
        localStorage.removeItem("user_name")
        localStorage.removeItem("room_name")
        window.location = "index.html"
    }