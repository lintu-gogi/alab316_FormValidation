const form = document.getElementById("registration");
const usrname = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const passWrdChk = form.elements["passwordCheck"];
const iAgreeChkBox = form.elements["terms"];

form.addEventListener("submit", validate);

function validate(evt) {
  
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
   if(emailVal!=="")
    
    email.focus();
     
    evt.returnValue = true;
    return emailVal;
  }
  
  