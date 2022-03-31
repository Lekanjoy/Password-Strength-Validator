const passwordBox = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const confirmPassword = document.getElementById("confirm");
const confirmPasswordMessage = document.getElementById("msg");

confirmPassword.type = "password";

function password() {
  if (passwordBox.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  //Weak Password
  if (passwordBox.value.length < 5) {
    strength.innerText = "Weak";
    message.style.color = "red";
    passwordBox.style.borderColor = "red";
  }
  //Medium Password
  else if (
    passwordBox.value.length >= 5 &&
    passwordBox.value.length < 8 &&
    passwordBox.value.match(/[0-9]/) &&
    passwordBox.value.match(/[A-Z]/) &&
    passwordBox.value.match(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\;\:\?\<\>]/)
  ) {
    strength.innerText = "Medium";
    message.style.color = "#d1d111";
    passwordBox.style.borderColor = "#d1d111";
  }
  //Stong Password
  else if (
    passwordBox.value.length >= 8 &&
    passwordBox.value.match(/[0-9]/) &&
    passwordBox.value.match(/[A-Z]/) &&
    passwordBox.value.match(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\;\:\?\<\>]/)
  ) {
    strength.innerText = "Strong";
    message.style.color = "green";
    passwordBox.style.borderColor = "green";
  }
  if (passwordBox.value.length > 16) {
    strength.innerText = "longer than 16 characters";
    message.style.color = "#e37d7d";
    passwordBox.style.borderColor = "#e37d7d";
  }
}

//Password Confirmation Conditions
function confirm() {
  if (confirmPassword.value === passwordBox.value && passwordBox.value !== "") {
    confirmPasswordMessage.textContent = "";
    confirmPasswordMessage.style.color = "green";
    confirmPassword.style.borderColor = "green";
  } else if (passwordBox.value === "") {
    confirmPasswordMessage.textContent = "Please type a Password first ";
    confirmPasswordMessage.style.color = "rgb(231 1 65)";
    confirmPassword.style.borderColor = "rgb(231 1 65)";
    //setTimeout(() => confirmPasswordMessage.remove(), 5000);

    //window.location.reload();
  } else {
    confirmPasswordMessage.textContent =
      "🛈Password does not match, please try again";
    confirmPasswordMessage.style.color = "red";
    confirmPassword.style.borderColor = "red";

    //setTimeout(() => confirmPasswordMessage.remove(), 5000);
  }
}

//Password visibility when toggled
function showPassword() {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";

    // Password returns to hidden state after 150ms when visibility toggled.
    setTimeout(showPassword, 150);
  } else {
    passwordBox.type = "password";
  }
}
function conPassword() {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";

    // Password returns to hidden state after 150ms when visibility toggled.
    setTimeout(conPassword, 150);
  } else {
    confirmPassword.type = "password";
  }
}
