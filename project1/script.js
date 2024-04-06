const form = document.querySelector("form");
const eField = document.querySelector("form .email");
const eInput = document.querySelector("form .email input");
const pField = document.querySelector("form .password");
const pInput = document.querySelector("form .password input");

document.addEventListener("DOMContentLoaded", () => {
  eInput.value = "";
  pInput.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (eInput.value == "" || eField.classList.contains("error")) {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  if (pInput.value == "" || pField.classList.contains("error")) {
    pField.classList.add("shake", "error");
  } else {
    checkPass();
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 300);

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    window.location.href = "https://www.varzesh3.com/";
    console.log("form submited!");
    eInput.value = "";
    pInput.value = "";
  }
});

eInput.addEventListener("keyup", () => {
  checkEmail();
});
function checkEmail() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!eInput.value.match(pattern)) {
    eField.classList.add("error");
    let errortxt = eField.querySelector(".error-txt");
    eInput.value != ""
      ? (errortxt.innerText = "Enter a valid email address")
      : (errortxt.innerText = "Email can not be blank");
    // timer();
  } else {
    eField.classList.remove("error");
  }
}

pInput.addEventListener("keyup", () => {
  checkPass();
});
function checkPass() {
  let errortxt = pField.querySelector(".error-txt");
  if (pInput.value === "") {
    pField.classList.add("error");
    errortxt.innerText = "Password can not be blank";
    // timer();
  } else if (pInput.value.length < 8) {
    pField.classList.add("error");
    errortxt.innerText = "Password at least 8 characters";
    // timer();
  } else {
    pField.classList.remove("error");
  }
}
