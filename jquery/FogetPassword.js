function checkPassword() {
    var passW = document.getElementById("pass").value;
    var errorPass = document.getElementById("errorPass");
    var reGexPass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (passW == "" || passW == null) {
      errorPass.innerHTML = "Password cannot be left blank!";
    } else if (!reGexPass.test(passW)) {
      errorPass.innerHTML = "Invalid password!";
      return false;
    } else {
      errorPass.innerHTML = "";
    }

    var ConPass = document.getElementById("passw").value;
    var errorConPass = document.getElementById("errorConPass");

    if (ConPass == "" || ConPass == null) {
      errorConPass.innerHTML = "Confirm password cannot be left blank!";
    } else if (ConPass != passW) {
      alert("Confirm password does not match!");
    } else {
      errorConPass.innerHTML = "";
    }
    
    if (ConPass && passW && passW == ConPass) {
      alert("Successful!");
    }
    return false;
  }