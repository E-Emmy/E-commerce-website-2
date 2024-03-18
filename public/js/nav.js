/*=============== USER LOGIN/LOG OUT===============*/

const createNavbar = () => {
  let navbar = document.querySelector(".right");
  navbar.innerHTML += `
 

  <div class="user-interactions">
  <div class="cart">
    <img src="img/cart.png" class="cart-icon" alt="" />
    <span class="cart-item-count">00</span>
  </div>
  <div class="user">
    <img src="img/user (3).png" class="user-icon" />
    <div class="user-icon-popup">
      <p>login to your account</p>
      <a>Login</a>
    </div>
  </div>
</div>

`;
};

createNavbar();

//user icon popup

let userIcon = document.querySelector(".user-icon");
let userPopupIcon = document.querySelector(".user-icon-popup");

userIcon.addEventListener("click", () =>
  userPopupIcon.classList.toggle("active")
);

let text = userPopupIcon.querySelector("p");
let actionBtn = userPopupIcon.querySelector("a");

let user = JSON.parse(sessionStorage.user || null);

if (user != null) {
  //user is logged in
  text.innerHTML = `HI, ${user.name}`;
  actionBtn.innerHTML = "log out";
  actionBtn.addEventListener("click", () => logout());
} else {
 /*  text.innerHTML = " login to your account"; */
  actionBtn.innerHTML = "login";
  actionBtn.addEventListener("click", () => (location.href = "/login"));
}

const logout = () => {
  sessionStorage.clear();
  location.reload();
};
