document.addEventListener("DOMContentLoaded", function () {
  const submenuLinks = document.querySelectorAll(".has-submenu > a");

  submenuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;

      // Κλείνουμε όλα τα άλλα υπομενού
      document.querySelectorAll(".submenu").forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove("show");
        }
      });

      // Εναλλαγή εμφάνισης
      submenu.classList.toggle("show");
    });
  });

  // Κλείνουμε τα υπομενού όταν κάνουμε click εκτός
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-menu")) {
      document.querySelectorAll(".submenu").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });
});
