function login(){
    user_name= document.getElementById("user_name").value
 
    localStorage.setItem("user_name", user_name)
 
    

    var confirm = window.confirm("WARNING, do you really JOIN?")

    if(confirm){
        window.location="room2.html"
    }
 }