export function QuickActions() {
  const actions = [
    { title: "Add New", icon: "✨", id: "add-new" },
    { title: "Update Inventory", icon: "📦", id: "update-inventory" },
    { title: "Add Invoice", icon: "📄", id: "add-invoice" },
  ];

  return `
    <div class="fab-container" id="quick-actions">
      <div class="fab-actions" id="fabActions">
        ${actions.map(action => `
          <div class="fab-action-wrapper" id="fab-${action.id}">
            <span class="fab-action-label">${action.title}</span>
            <button class="fab-action" aria-label="${action.title}">
              ${action.icon}
            </button>
          </div>
        `).join("")}
      </div>
      <button class="fab-main" id="fabToggle">
        <span>➕</span>
      </button>
    </div>
  `;
}

export function initQuickActions() {
  const fabToggle = document.getElementById("fabToggle");
  const fabContainer = document.getElementById("quick-actions");

  if (!fabToggle || !fabContainer) return;

  fabToggle.addEventListener("click", () => {
    fabContainer.classList.toggle("open");
  });
}
