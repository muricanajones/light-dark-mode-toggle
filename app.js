function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

window.addEventListener("storage", function () {
   if (localStorage.lightMode == "dark") {
       app.setAttribute("light-mode", "dark");
  } else {
      app.setAttribute("light-mode", "light");
  }
}, false);