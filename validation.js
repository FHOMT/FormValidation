function validate() {
    if (document.myForm.Name.value == "") {
        alert ("Please enter your name!");
        document.myForm.Name.focus();
        return false;
    }
    return true;
}