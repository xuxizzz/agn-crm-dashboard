import { ContentHeader } from "../components/global/ContentHeader.js";
import { QuickActions } from "../components/global/QuickActions.js";
import { SalesCard } from "../components/Sales/SalesKPIs.js";
import { Transactions } from "../components/Sales/Transactions.js";

export function Sales() {
  const salesData = [
    { title: "Total Sales", value: "₱120,000", icon: "💵", MoM: "+17.0%" },
    { title: "Avg Order Value", value: "₱2,756", icon: "🛒", MoM: "+5.2%" },
    { title: "Transactions", value: "150", icon: "📦", MoM: "+22.2%" },
    { title: "Sales Growth", value: "+17.0%", icon: "📈", MoM: "" },
    // { title: "Device Sales", value: "₱50,155", icon: "📻", MoM: "" },
    // { title: "Consumable Sales", value: "₱69,845", icon: "⚡", MoM: "" },
  ];

  return `
    <section class="page">
      ${ContentHeader("Sales", "Overview of sales")}

      <div class="sales-kpis-grid">
        ${salesData.map(SalesCard).join("")}
      </div>


      <h4>📋 Sales Transactions</h4>
      ${Transactions()}

      ${QuickActions()}
    </section>
  `;
}