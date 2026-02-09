export function Sidebar(activePage) {
  return `
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="header-icon">A</div>
        <div class="header-text"> 
            AGN Networks Solutions, Inc.
            <p class="sidebar-sub"> Sales Dashboard</p>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a href="#/" class="sidebar-link ${activePage === "inventory" ? "active" : ""}">Inventory</a>
        <a href="#/sales" class="sidebar-link ${activePage === "sales" ? "active" : ""}">Sales</a>
        <a href="#/agents" class="sidebar-link ${activePage === "agents" ? "active" : ""}">Agents</a>
        <a href="#/clients" class="sidebar-link ${activePage === "clients" ? "active" : ""}">Clients</a>
      </nav>
    </aside>
  `;
}
