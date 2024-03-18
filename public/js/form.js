window.onload = () => {
  if (sessionStorage.user) {
    user = JSON.parse(sessionStorage.user);
    if (user.email) {
      location.replace("/");
    }
  }
};

/*===============FORM===============*/

let formBtn = document.querySelector(".submit-btn");
let loader = document.querySelector(".loader");

formBtn.addEventListener("click", () => {
  let fullname = document.querySelector("#name") || null;
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let number = document.querySelector("#number") || null;
  let tac = document.querySelector("#tc") || null;

  if (fullname != null) {
    // signup

    //form validation

    if (fullname.value.length < 3) {
      showFormError("Name must be 3 letters long");
    } else if (!email.value.length) {
      showFormError("Enter your email");
    } else if (password.value.length < 8) {
      showFormError("Password must be 8 letters long");
    } else if (Number(number) || number.value.length !== 11) {
      showFormError("Invalid number, please enter a valid one");
    } else if (!tac.checked) {
      showFormError("You must agree to our terms and condition");
    } else {
      //submit form
      loader.style.display = "block";
      //send data
      sendData("/signup", {
        name: fullname.value,
        email: email.value,
        password: password.value,
        number: number.value,
        tac: tac.checked,
      });
    }
  } else {
    //login page
    if (!email.value.length || !password.value.length) {
      showFormError("fill all the inputs");
    } else {
      loader.style.display = "block";
      //send data
      sendData("/login", {
        email: email.value,
        password: password.value,
      });
    }
  }
});

/*===============BUTTON===============*/

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});
