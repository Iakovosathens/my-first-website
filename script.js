function sayHi() {
  alert("Hello from Jakob!");
}
document.addEventListener("DOMContentLoaded", function () {
  const submenuParents = document.querySelectorAll(".has-submenu > a");

  submenuParents.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Αποτρέπουμε το default κλικ

      const submenu = this.nextElementSibling;

      // Κλείνουμε όλα τα ανοιχτά υπομενού
      document.querySelectorAll(".submenu").forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove("show");
        }
      });

      // Εναλλαγή εμφάνισης
      submenu.classList.toggle("show");
    });
  });
});
