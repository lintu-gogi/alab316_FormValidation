const form = document.getElementById("registration");
const usrname = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const passWrdChk = form.elements["passwordCheck"];
const iAgreeChkBox = form.elements["terms"];

form.addEventListener("submit", validate);

function validate() {
  
    const emailVal = validateEmail();
    if (emailVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    
    const passwordVal = validatePassword();
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    alert(`Name: ${nameVal}
  Email: ${emailVal}`);
  
    return true;
  }
  
function validateEmail() {
    let emailVal = email.value;
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol, which must not be at the beginning of the email."
      );
      email.focus();
      evt.returnValue = false;
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      evt.returnValue = false;
      return false;
    }
  
    evt.returnValue = true;
    return emailVal;
  }
  
  