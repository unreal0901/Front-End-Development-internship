let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");

function removeEventListener(element) {
  element.classList.remove("top");
  element.classList.remove("mid");
  element.classList.remove("end");
}

first.addEventListener("mouseover", () => {
  console.log("clicked on first");
  first.style.width = "100%";
});

second.addEventListener("click", () => {
  console.log("clicked on second");
  removeEventListener(first);
  removeEventListener(second);
  removeEventListener(third);
  second.classList.add("top");
  third.classList.add("mid");
  first.classList.add("end");
});

third.addEventListener("click", () => {
  console.log("clicked on third");
  removeEventListener(first);
  removeEventListener(second);
  removeEventListener(third);
  third.classList.add("top");
  second.classList.add("mid");
  first.classList.add("end");
});
