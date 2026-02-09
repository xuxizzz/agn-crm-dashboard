export function InventoryStocks() {

  const stocks = [
    { productName: "Iridium Phone 9575 Extreme", category: "Iridium Phone", qty: "18", status: "In Stock", lastUpdated: "2026-02-06 14:22" },
    { productName: "Inmarsat IsatPhone 2", category: "Inmarsat Phone", qty: "6", status: "Low Stock", lastUpdated: "2026-02-05 10:15" },
    { productName: "Two-Way Radio - Model X", category: "Two-Way Radio", qty: "41", status: "In Stock", lastUpdated: "2026-02-04 16:45" },
    { productName: "Iridium Phone 9555", category: "Iridium Phone", qty: "12", status: "In Stock", lastUpdated: "2026-02-03 09:30" },
    { productName: "Inmarsat IsatPhone Pro", category: "Inmarsat Phone", qty: "3", status: "Low Stock", lastUpdated: "2026-02-02 11:20" },
    { productName: "Two-Way Radio - Model Y", category: "Two-Way Radio", qty: "25", status: "In Stock", lastUpdated: "2026-02-01 15:10" },
  ];

  return `
    <div class="table-container">
      <div class="table-filters">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search product name..." class="filter-search" />
        </div>
        <select class="filter-dropdown">
          <option>All Categories</option>
          <option>Iridium Phone</option>
          <option>Inmarsat Phone</option>
          <option>Two-Way Radio</option>
        </select>
        <select class="filter-dropdown">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>
      
      <div class="table-date-filters">
        <div class="date-input">
          <span>📅</span>
          <input type="text" placeholder="dd/mm/yyyy" />
        </div>
        <span>—</span>
        <div class="date-input">
          <span>📅</span>
          <input type="text" placeholder="dd/mm/yyyy" />
        </div>
      </div>

      <div class="data-table">
        <table>
          <thead>
            <tr>
              ${["Product Name", "Category", "Stock Qty", "Status", "Last Updated"].map(header => `<th>${header}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${stocks.map(stock => `
              <tr>
                <td>${stock.productName}</td>
                <td>${stock.category}</td>
                <td>${stock.qty}</td>
                <td><span class="badge badge-${stock.status === "In Stock" ? "success" : "warning"}">${stock.status}</span></td>
                <td>${stock.lastUpdated}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
          </tbody>
        </table>
      </div>

      <div class="table-pagination">
        <span class="pagination-info">Page 1 of 3 (12 items)</span>
        <div class="pagination-buttons">
          <button class="pagination-btn" disabled>‹</button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <button class="pagination-btn">›</button>
        </div>
      </div>
    </div>
  `;
}