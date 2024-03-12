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

// Add click event listeners
anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", toggleSubMenu);
});

// Function to toggle submenu
function toggleSubMenu(event) {
  event.preventDefault();
  const parentListItem = this.closest(".has-child");
  const isExpanded = parentListItem.classList.contains("expand");

  // Close all other submenus
  document.querySelectorAll(".has-child").forEach((item) => {
    if (item !== parentListItem) {
      item.classList.remove("expand");
    }
  });

  // Toggle the 'expand' class on the parent list item to show/hide menu items
  parentListItem.classList.toggle("expand", !isExpanded);
}

//closing the submenu when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInsideMenu =
    menuButton.contains(event.target) ||
    closeButton.contains(event.target) ||
    event.target.closest(".menu-item"); // Check if click is inside menu, close button, or menu item

  if (
    !isClickInsideMenu &&
    addclass.classList.contains("showmenu") &&
    !event.target.closest(".has-child")
  ) {
    addclass.classList.remove("showmenu");
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

/*=============== PRODUCT FILTER ===============*/

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const products = document.querySelectorAll(".product");

  for (var i = 0; i < products.length; i++) {
    const productName = products[i]
      .querySelector("h2")
      .textContent.toUpperCase();

    if (productName.indexOf(searchbox) > -1) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
};

/*=============== MOBILE SEARCH===============*/
//show search
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

/*=============== CLEAAR SEARCH ===============*/

const toggleClearIcon = () => {
  const searchbox = document.getElementById("search-item");
  const clearIcon = document.querySelector(".x-icon");

  if (searchbox.value.trim() !== "") {
    clearIcon.style.display = "block";
  } else {
    clearIcon.style.display = "none";
    // If search box is empty, show all products again
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
      product.style.display = "";
    });
  }
};

const clearSearch = () => {
  const searchbox = document.getElementById("search-item");
  searchbox.value = "";
  // Hide the clear icon after clearing the search
  toggleClearIcon();
};

// Call toggleClearIcon on page load to initially hide &
//show the clear icon based on the search box value
toggleClearIcon();

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
