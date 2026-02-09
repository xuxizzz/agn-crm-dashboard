import { ContentHeader } from "../components/global/ContentHeader.js";
import { QuickActions, initQuickActions } from "../components/global/QuickActions.js";
import { ProductsCards } from "../components/Inventory/ProductsCards.js";
import { LoadsCards } from "../components/Inventory/LoadsCards.js";
import { InventoryStocks } from "../components/Inventory/InventoryStocks.js";
import { InventoryActivityLog } from "../components/Inventory/InventoryActivityLog.js";

export function Inventory() {
  const products = [
    { title: "Iridium Phones", sold: "45", icon: "📱", lastBought: "2026-02-15" },
    { title: "Inmarsat Phones", sold: "32", icon: "📞", lastBought: "2026-02-10" },
    { title: "Two-Way Radios", sold: "78", icon: "📻", lastBought: "2026-02-12" },
  ];

  const loads = [
    { title: "Iridium Loads", 
      load1: "100 Minutes", sold1: 120, active1: 80, expiring1: 20, 
      load2: "350 Minutes", sold2: 150, active2: 100, expiring2: 30, 
      load3: "500 Minutes", sold3: 200, active3: 150, expiring3: 50 },
    { title: "Inmarsat Loads", 
      load1: "100 Units", sold1: 90, active1: 60, expiring1: 15, 
      load2: "350 Units", sold2: 110, active2: 70, expiring2: 25, 
      load3: "500 Units", sold3: 130, active3: 90, expiring3: 35 },
  ];

  return `
    <section class="page">
      ${ContentHeader("Inventory", "Real-time visibility into available stocks and consumables")}

      <h4>📦 Physical Products</h4>
      <div class="products-grid">
        ${products.map(ProductsCards).join("")}
      </div>
      
      <h4>⚡ Consumable Loads</h4>
      <div class="loads-grid">
        ${loads.map(LoadsCards).join("")}
      </div>
      
      <div class="inventory-section-wrapper">
        <div class="inventory-header">
          <h4 id="inventory-title">Inventory Stocks</h4>
          <div class="tab-buttons">
            <button class="tab-btn active" data-table="movement">Product Stocks</button>
            <button class="tab-btn" data-table="transactions">Inventory Logs</button>
          </div>
        </div>
        
        <div id="inventory-stocks-table" class="table-view active">
          ${InventoryStocks()}
        </div>
        
        <div id="inventory-activity-log-table" class="table-view">
          ${InventoryActivityLog()}
        </div>
      </div>

      ${QuickActions()}
    </section>
  `;
}

/* ✅ Run AFTER rendering into DOM */
export function initInventory() {
  const buttons = document.querySelectorAll('.tab-btn');
  const stocksTable = document.getElementById('inventory-stocks-table');
  const activityLogTable = document.getElementById('inventory-activity-log-table');
  const title = document.getElementById('inventory-title');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const tableType = this.dataset.table;

      if (tableType === 'transactions') {
        stocksTable.classList.remove('active');
        activityLogTable.classList.add('active');
        title.textContent = 'Audit Trail – Stock Movements';
      } else {
        stocksTable.classList.add('active');
        activityLogTable.classList.remove('active');
        title.textContent = 'Physical Products – Current Stock';
      }
    });
  });

  initQuickActions();
}
