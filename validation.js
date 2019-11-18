function validateForm () {
    const regName = /^[A-Za-z\s]+$/;
    let Name = document.forms["myForm"]["name"].value;
    if (Name == "" || Name.length < 2 || regName.test(Name.value)) {
        alert ("Please enter a valid name");
        return false;
    }
}