function validateForm () {
    let Name = document.forms["myForm"]["name"].value;
    let Password = document.forms["myForm"]["password"].value;
     if (Name == "") {
        alert("Please enter your name");
        return false;
    } else if (Name.length < 2) {
        alert ("name should be at lest 2 characters");
        return false;
    }
    if (Password == ""){
        alert("Please enter your password");
        return false;
    } else if (Password.length < 2) {
        alert ("password should be at least 2 characters");
        return false;
    }
}