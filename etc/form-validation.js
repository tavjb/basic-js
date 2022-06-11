function validateForm() {
    let nameInputValue = document.forms["myForm"]["nameInput"].value;
    if (nameInputValue == "") {
      alert("Name must be filled out");
      return false;
    }
  }