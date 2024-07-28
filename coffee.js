let isSidebarCollapsed = false;

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
}
