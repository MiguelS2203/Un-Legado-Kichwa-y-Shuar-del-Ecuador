document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.createElement("div");
  toggle.className = "menu-toggle";
  toggle.innerHTML = "☰"; // Use innerHTML for consistency
  document.body.prepend(toggle); // Prepend to body for better positioning

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Optional: Close sidebar when clicking a menu link on mobile
  const menuLinks = document.querySelectorAll(".sidebar ul li a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
      }
    });
  });
});
