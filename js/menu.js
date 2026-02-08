/* 
Javascript description: manages the hamburger menu interaction. Hide or unhide content in the sidebar.  
source: https://github.com/monsterlessonsacademy/monsterlessonsacademy/blob/222-side-navigation-bar-in-html-and-css/main.js 
*/

document.addEventListener("DOMContentLoaded", () => {
  const $toggler = document.querySelector(".toggler");
  const $sidebar = document.querySelector(".sidebar");
  const $main = document.querySelector(".main");
  const $closeSidebarButton = document.querySelector(".closeSidebarButton");

  if (!$toggler || !$sidebar || !$closeSidebarButton) {
    console.warn("Missing expected DOM elements", { $toggler, $sidebar, $closeSidebarButton });
    return;
  }

  $closeSidebarButton.addEventListener("click", () => {
    $sidebar.classList.remove("is-opened");
  });

  $toggler.addEventListener("click", (e) => {
    e.preventDefault(); 
    $sidebar.classList.toggle("is-opened");
  });
});