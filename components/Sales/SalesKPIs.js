export function SalesCard({ title, value, icon, MoM }) {
  // Determine if this is a primary card (first one gets special styling)
  const isPrimary = title === "Total Sales" || title === "Total Revenue";
  
  return `
    <div class="sales-card ${isPrimary ? 'sales-card-primary' : ''}">
      <div class="sales-card-content">
        <div class="sales-card-left">
          <div class="sales-card-title">${title}</div>
          <div class="sales-card-value">${value}</div>
          ${MoM ? `
            <div class="sales-card-change">
              <span class="change-badge">📈 ${MoM}</span>
              <span class="change-label">vs last month</span>
            </div>
          ` : ''}
        </div>
        <div class="sales-card-icon">${icon}</div>
      </div>
    </div>
  `;
}
