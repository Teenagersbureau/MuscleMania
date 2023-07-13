burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
var el;
// nav-list=document.querySelector(".nav-list");
// query selector just picks the first element if multiple elements are present
burger.addEventListener("click", () => {
  // When button is clicked then just toggle the class of navbar

  if(el!=null)
  {
    document.getElementById("one").classList.toggle("cross-one-reverse");
    document.getElementById("two").classList.toggle("cross-two-reverse");
    document.getElementById("three").classList.toggle("cross-three-reverse");
  }
  el=document.getElementById("one").classList.toggle("cross-one");
  document.getElementById("two").classList.toggle("cross-two");
  document.getElementById("three").classList.toggle("cross-three");
  navlist.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
  //adds or removes the classes, the toggle function
});
