function myFunction() {
  let x = document.getElementById("myNavbar");
  if (x.className === "topnav") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
