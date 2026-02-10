import { ContentHeader } from "../components/global/ContentHeader.js";
import { QuickActions, initQuickActions } from "../components/global/QuickActions.js";
import { ProductsCards } from "../components/Inventory/ProductsCards.js";
import { LoadsCards } from "../components/Inventory/LoadsCards.js";
import { InventoryStocks } from "../components/Inventory/InventoryStocks.js";
import { InventoryActivityLog } from "../components/Inventory/InventoryActivityLog.js";

export async function Inventory() {
  console.log("Inventory render start");
  let products = [];
  let loads = [];

  try {
    const res = await fetch(
  "https://interns.srv1335246.hstgr.cloud/webhook-test/inventory"
);

const raw = await res.json();
const data = Array.isArray(raw) ? raw[0] : raw;


    /* ===============================
       MAP PHYSICAL PRODUCTS
       =============================== */
    products = data.physicalProducts.map(p => ({
      title: p.name,
      sold: String(p.sold ?? 0),
      icon: "📦", // UI decision
      lastBought: p.lastBought || "—"
    }));

    /* ===============================
       MAP LOADS (IRIDIUM + INMARSAT)
       =============================== */
    function mapLoads(title, sourceLoads) {
      return {
        title,
        load1: sourceLoads[0]?.label || "",
        sold1: sourceLoads[0]?.sold || 0,
        active1: sourceLoads[0]?.active || 0,
        expiring1: sourceLoads[0]?.expiring || 0,

        load2: sourceLoads[1]?.label || "",
        sold2: sourceLoads[1]?.sold || 0,
        active2: sourceLoads[1]?.active || 0,
        expiring2: sourceLoads[1]?.expiring || 0,

        load3: sourceLoads[2]?.label || "",
        sold3: sourceLoads[2]?.sold || 0,
        active3: sourceLoads[2]?.active || 0,
        expiring3: sourceLoads[2]?.expiring || 0
      };
    }

    loads = [
      mapLoads("Iridium Loads", data.loads.iridium || []),
      mapLoads("Inmarsat Loads", data.loads.inmarsat || [])
    ];

  } catch (err) {
    console.error("Failed to load inventory dashboard", err);
  }
  return `
    <section class="page">
      ${ContentHeader(
        "Inventory",
        "Real-time visibility into available stocks and consumables"
      )}

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
            <button class="tab-btn active" data-table="movement">
              Product Stocks
            </button>
            <button class="tab-btn" data-table="transactions">
              Inventory Logs
            </button>
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
  })
  ;

  initQuickActions();
}
