let result = { firstName: "Arbnor", lastName: "Canolli" };

let firstName = result.firstName;

let lastName = result.lastName;

let fullName = firstName + " " + lastName;
let dbFullName;

// let header = document.querySelector(".hero-description .primary-header");

// header.addEventListener("click", function () {
//   header.textContent = fullName;
//   header.style.backgroundColor = "yellow";
//   header.style.padding = "2rem";
//   dbFullName = header.textContent;
//   console.log(dbFullName);
// });

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector(".header");

navButton.addEventListener("click", function () {
  navHeader.classList.toggle("open-nav");
});

let dataSpan = document.querySelector(".data");

let dataAktuale = new Date().getFullYear();

dataSpan.textContent = dataAktuale;

// let butoniStartEating = document.querySelector("#start-eating");

// butoniStartEating.addEventListener("click", function () {
//   butoniStartEating.classList.toggle("transformi");
// });
