document.addEventListener("DOMContentLoaded", function () {
  const submenuParents = document.querySelectorAll(".has-submenu > a");

  submenuParents.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Αποτροπή μετάβασης σε άλλο link
      
      const submenu = this.nextElementSibling;

      // Κλείνουμε όλα τα υπομενού εκτός από αυτό που άνοιξε
      document.querySelectorAll(".submenu").forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove("show");
        }
      });

      // Εναλλαγή εμφάνισης του υπομενού που κάναμε κλικ
      submenu.classList.toggle("show");
    });
  });

  // Κλείνουμε όλα τα υπομενού αν κάνεις κλικ εκτός του μενού
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-menu")) {
      document.querySelectorAll(".submenu").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });
});
