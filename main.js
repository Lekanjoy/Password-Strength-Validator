const passwordBox = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

let specialCharacters = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{}$/;


function password() {
    if(passwordBox.value.length > 0) {
        message.style.display = "block";
    } else{
        message.style.display = "none";
        passwordBox.style.borderColor = "#aba5a5";

    } if(passwordBox.value.length < 5) {
        strength.innerText = "Weak";
        message.style.color = "red";
        passwordBox.style.borderColor = "red"

    }  else if(passwordBox.value.length >= 5 && passwordBox.value.length < 8) {
      strength.innerText = "Medium";
      message.style.color = "#d1d111";
      passwordBox.style.borderColor = "#d1d111";

    } else if (passwordBox.value.length >= 8) {
      strength.innerText = "Strong";
      message.style.color = "green";
      passwordBox.style.borderColor = "green";
    }
};

function showPassword() {
    if (passwordBox.type === "password") {
      passwordBox.type = "text";

      // Password returns to hidden state after 150ms when visibility toggled.
      setTimeout((showPassword), 150);
    } else {
      passwordBox.type = "password";
    }

};

