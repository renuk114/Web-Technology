function validation(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if(username==""){
        alert("Username must be entered");
        return false;
     } else if(password==""){
        alert("Password muct not be empty");
        return false;
     }else if (password.length<5){
      alert("Password too short");
      return false;
     }else{
        alert("Logged in successfully");
        return true;
     }
     
}



    
