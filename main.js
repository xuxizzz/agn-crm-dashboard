import { Topbar } from "/components/global/Topbar.js";
import { Sidebar } from "/components/global/Sidebar.js";
import { Inventory, initInventory } from "./pages/Inventory.js";
import { Sales } from "/pages/Sales.js";
import { Agents } from "/pages/Agents.js";
import { Clients } from "/pages/Clients.js";
import { initQuickActions } from "/components/global/QuickActions.js";

const app = document.getElementById("app");

function render() {
  const hash = window.location.hash || "#/";
  const route = hash.replace("#/", "");

  let pageContent = "";
  let initPage = null;

  if (route === "" || route === "/") {
    pageContent = Inventory();
    initPage = initInventory;
  } else if (route === "sales") {
    pageContent = Sales();
    initPage = initQuickActions; // 🔥 enable FAB on sales page
  } else if (route === "agents") {
    pageContent = Agents();
    initPage = initQuickActions; // 🔥 enable FAB on agents page
  } else if (route === "clients") {
    pageContent = Clients();
    initPage = initQuickActions; // 🔥 enable FAB on clients page
  } else {
    pageContent = `<h2>404 - Page not found</h2>`;
  }

  app.innerHTML = `
    <div class="app-layout">
      ${Sidebar(route || "inventory")}
      <div class="main-area">
        ${Topbar()}
        <main class="content">
          ${pageContent}
        </main>
      </div>
    </div>
  `;

  if (typeof initPage === "function") {
    initPage();
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
