/*=============== COPY MENU FOR MOBILE ===============*/

function copyMenu() {
  //<--copy inside .dpt-cat to .department -->
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //<--copy inside nav to nav-->
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav ");
  navPlace.innerHTML = mainNav.innerHTML;

  //<--copy .header-top .wrapper to .the top-nav-->
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//<--show menu mobile-->
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});

/*=============== SHOW MENU 0N MOBILE ===============*/
// Get anchor tags inside list items
const anchorTags = document.querySelectorAll(".has-child > a");

// Add click event listeners to open submenus
anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const parentListItem = this.closest(".has-child");
    parentListItem.classList.toggle("expand"); // Toggle submenu visibility
  });
});

// Function to close submenus when clicking outside
document.addEventListener("click", function (event) {
  // Identify all open submenus
  const openSubmenus = document.querySelectorAll(".has-child.expand");

  // Check if click is outside any open submenu
  if (
    !openSubmenus.length || // No open submenus
    !event.target.closest(".has-child")
  ) {
    // Click outside any submenu
    // Close all open submenus
    openSubmenus.forEach((submenu) => {
      submenu.classList.remove("expand");
    });
  }
});

/*=============== SWIPER SLIDER ===============*/
const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  speed: 700,
  autoplay: {
    delay: 6000,
    dissableOnInteraction: false,
  },

  //pagination
  pagination: {
    el: ".swiper-pagination",
    // Make pagination clickable
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== PRODUCT COUNTDOWN ===============*/

// Get the elements
const offerElement = document.querySelector(".offer");
const countdownList = offerElement.querySelector(".flexcenter");

// Function to update the countdown
function updateCountdown() {
  // Set the end date and time
  const endDate = new Date(2024, 3, 31, 23, 59, 59); // Replace with year, month (0-indexed), day, hours, minutes, seconds
  const endTime = endDate.getTime();

  // Get the current time
  const now = Date.now();

  // Calculate the time remaining
  const difference = endTime - now;

  // Check if time has passed
  if (difference <= 0) {
    countdownList.textContent = "Offer Expired";
    return; // Exit function if time is up
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the countdown list content
  countdownList.innerHTML = `
    <li>${days.toString().padStart(2, "0")}</li>
    <li>${hours.toString().padStart(2, "0")}</li>
    <li>${minutes.toString().padStart(2, "0")}</li>
    <li>${seconds.toString().padStart(2, "0")}</li>
  `;
}

// Call the update function initially and set an interval to call it every second
updateCountdown();
setInterval(updateCountdown, 1000);

/*=============== HEART ICONS ===============*/



/*=============== BLINK TEXT ===============*/

function blinkText(elementId, interval) {
  var blinkingText = document.getElementById(elementId);
  //<--Toggle visibility at regular intervals-->//
  setInterval(function () {
    blinkingText.style.visibility =
      blinkingText.style.visibility === "hidden" ? "visible" : "hidden";
  }, interval);
}
blinkText("stock1", 500);
blinkText("stock2", 1000);
blinkText("stock3", 1200);

/*=============== ROTATE ICON ===============*/

let rotated = {
  "arrow-icon-1": false,
  "arrow-icon-2": false,
  "arrow-icon-3": false,
  "arrow-icon-4": false,
  "arrow-icon-5": false,
  "arrow-icon-6": false,
  "arrow-icon-7": false,
  "arrow-icon-8": false,
  "arrow-icon-9": false,
  "arrow-icon-10": false,
  "arrow-icon-11": false,
};

function toggleArrow(iconId) {
  const arrowIcon = document.getElementById(iconId);
  arrowIcon.classList.toggle("rotated");
  rotated[iconId] = !rotated[iconId];
}

/*=============== SCROLL REVEAL ITEM ===============*/

//Reveal

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var a = 0; a < reveals.length; a++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[a].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[a].classList.add("active");
    } else {
      reveals[a].classList.remove("active");
    }
  }
}

//<--Wishlist Icon-->

document.addEventListener("DOMContentLoaded", function () {
  // Select all heart icons on the page
  const heartIcons = document.querySelectorAll(".fa-heart");

  // Function to update local storage with the clicked state of heart icons
  function updateLocalStorage() {
    heartIcons.forEach((heartIcon, index) => {
      // Store the clicked state of each heart icon in local storage
      localStorage.setItem(
        `heartIcon${index}`,
        heartIcon.classList.contains("fas")
      );
    });
  }

  // Function to handle click event on heart icons
  function handleClick(event) {
    // Prevent default link behavior
    event.preventDefault();
    // Get the heart icon clicked
    const heartIcon = event.currentTarget.querySelector(".fa-heart");
    // Toggle the "fas" class to change the heart icon's appearance
    heartIcon.classList.toggle("fas");
    // Update local storage with the new clicked state
    updateLocalStorage();
  }

  // Function to load heart icon states from local storage when the page loads
  function loadHeartIconStates() {
    heartIcons.forEach((heartIcon, index) => {
      // Retrieve the clicked state of each heart icon from local storage
      const isLiked = localStorage.getItem(`heartIcon${index}`);
      // If the icon was previously clicked (true), add "fas" class, else remove it
      if (isLiked === "true") {
        heartIcon.classList.add("fas");
      } else {
        heartIcon.classList.remove("fas");
      }
    });
  }

  // Add click event listeners to all heart icons
  heartIcons.forEach((heartIcon) => {
    heartIcon.closest("a").addEventListener("click", handleClick);
  });

  // Load heart icon states from local storage when the page finishes loading
  loadHeartIconStates();
});
