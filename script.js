let username = document.getElementById("username");
let password = document.getElementById("password");

function Validationform(){
  if(username.value == ""){
    document.getElementById("UserError").innerHTML = "Please Enter Your Name";
    return false;
  } else if(username.value.length < 3){
    document.getElementById("UserError").innerHTML = "Username required min 3 char";
    return false;

  }
  else {
    document.getElementById("UserError").innerHTML = "";
  }
  if(password.value == ""){
    document.getElementById("PassError").innerHTML = "Please enter Your Password";
    return false;
  }
  else if(password.value.length < 6){
    document.getElementById("PassError").innerHTML = "Please enter min 6 word";
    return false;

  }

}