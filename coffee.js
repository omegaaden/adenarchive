/*let isSidebarCollapsed = false;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector(".main");

  if (isSidebarCollapsed) {
    sidebar.classList.remove("collapsed");
    main.classList.remove("collapsed");
  } else {
    sidebar.classList.add("collapsed");
    main.classList.add("collapsed");
  }

  isSidebarCollapsed = !isSidebarCollapsed;
}*/

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

// Set the initial page to be displayed
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
