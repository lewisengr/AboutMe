// select the toggle button
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Modal functionality
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openContactModal");
const openModalBtnDropdown = document.getElementById(
  "openContactModalDropdown"
);
const closeModalBtn = document.querySelector(".close");

// method to open modal
function openModal() {
  modal.style.display = "block";
  document.body.classList.add("no-scroll");
}

// method to close modal
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}

// event listener for button that opens modal from main
if (openModalBtn) {
  openModalBtn.onclick = function () {
    openModal();
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  };
}

// event listener for button that opens modal from dropdown menu
if (openModalBtnDropdown) {
  openModalBtnDropdown.onclick = function () {
    openModal();
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  };
}

// event listener for the button that closes the modal
if (closeModalBtn) {
  closeModalBtn.onclick = function () {
    closeModal();
  };
}

// event listener for clicking outside of modal to close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// fade-in class to .friends-container when page loads
document.addEventListener("DOMContentLoaded", function () {
  // for specifically friends-container elements
  const friendsContainers = document.querySelectorAll(".friends-container");
  friendsContainers.forEach((container, index) => {
    setTimeout(() => {
      container.classList.remove("fade-init");
      container.classList.add("fade-in");
    }, index * 1000); // timing for stagger effect
  });

  // Handle fade-in for fade-init elements
  const fadeInitElements = document.querySelectorAll(".fade-init");
  fadeInitElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("fade-init");
      element.classList.add("fade-in");
    }, index * 500);
  });
});
