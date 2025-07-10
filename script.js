document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Κλείνουμε όλα τα υπομενού πρώτα
      document.querySelectorAll(".submenu").forEach(sub => {
        if (sub !== this.nextElementSibling) {
          sub.classList.remove("show");
        }
      });

      // Τoggλάρουμε το υπομενού που ανοίγει τώρα
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("show");
      }
    });
  });

  // Κλείσε υπομενού αν κάνεις κλικ εκτός μενού
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-menu")) {
      document.querySelectorAll(".submenu").forEach(sub => {
        sub.classList.remove("show");
      });
    }
  });
});