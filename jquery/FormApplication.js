function FormValidate() {
    var Fname = document.getElementById('name').value;
    var errorName = document.getElementById('errorName');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    var Phone = document.getElementById('phone').value;
    var errorPhone = document.getElementById('errorPhone');
    var regexPhone = /^0[1-9]\d{8}$/;

    var Email = document.getElementById('email').value;
    var errorEmail = document.getElementById('errorEmail');
    var reGexEmail = /^\w+([\.-_]\w+)*@\w+([\.-_]\w+)*(\.\w{2,3})+$/;
    

    if (Fname == '' || Fname == null) {
        errorName.innerHTML = "Full name cannot be left blank!";
    }else if(!regexName.test(Fname)){
        errorName.innerHTML = "Invalid full name!";
        return false;
    }else{
        errorName.innerHTML = '';
    }

    if (Phone == '' || Phone == null) {
        errorPhone.innerHTML = "Phone number cannot be left blank!";
    }else if(!regexPhone.test(Phone)){
        errorPhone.innerHTML = "Invalid phone number!";
        return false;
    }else{
        erorPhone.innerHTML = '';
    }

    if (Email == '' || Email == null) {
        errorEmail.innerHTML = "Email cannot be left blank!";
    }else if(!reGexEmail.test(Email)){
        errorEmail.innerHTML = "Invalid email!";
        Email = '';
    }else{
        errorEmail.innerHTML = '';
    }

    var Address = document.getElementById('address').value;
    var errorAddress = document.getElementById('errorAddress');

    if (Address == '' || Address == null) {
        errorAddress.innerHTML = "Address cannot be left blank!";
    }else{
        errorAddress.innerHTML = "";
    }

    var Position = document.getElementById('position').value;
    var errorPosition = document.getElementById('errorPosition');

    if (Position == '' || Position == null) {
        errorPosition.innerHTML = "On-position cannot be left blank!";
    }else{
        errorPosition.innerHTML = "";
    }

    if (Fname && Phone && Email && Address && Position) {
        alert("Successful!");
    }
    return false;
}