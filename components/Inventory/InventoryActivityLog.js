export function InventoryActivityLog() {

  const logs = [
    {
      datetime: "2026-02-06 14:22",
      product: "Iridium Phone 9575",
      movement: "Sale",
      qtyChange: -2,
      Before: "20",
      After: "18",
      Notes: "Order #SO-1023",
    },
    {
      datetime: "2026-02-05 10:15",
      product: "Inmarsat IsatPhone Pro",
      movement: "Sale",
      qtyChange: -1,
      Before: "4",
      After: "3",
      Notes: "Order #SO-1022",
    },
    {
      datetime: "2026-02-04 16:45",
      product: "Two-Way Radio Model X",
      movement: "Stock In",
      qtyChange: +10,
      Before: "31",
      After: "41",
      Notes: "Supplier delivery #PO-556",
    },
    {
      datetime: "2026-02-03 09:30",
      product: "Iridium Phone 9555",
      movement: "Adjustment",
      qtyChange: -1,
      Before: "13",
      After: "12",
      Notes: "Damaged item removed from stock",
    },
  ];

  return `
    <div class="table-container">
      <div class="table-filters">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search product or notes..." class="filter-search" />
        </div>
        <select class="filter-dropdown">
          <option>All Products</option>
          <option>Iridium Phone 9575</option>
          <option>Iridium Phone 9555</option>
          <option>Inmarsat IsatPhone Pro</option>
          <option>Two-Way Radio Model X</option>
        </select>
        <select class="filter-dropdown">
          <option>All Movement Types</option>
          <option>Sale</option>
          <option>Stock In</option>
          <option>Adjustment</option>
          <option>Return</option>
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
              ${["Date & Time", "Product", "Movement Type", "Qty Change", "Before", "After", "Notes"].map(header => `<th>${header}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${logs.map(log => `
              <tr>
                <td>${log.datetime}</td>
                <td>${log.product}</td>
                <td>${log.movement}</td>
                <td class="${log.qtyChange < 0 ? 'text-red' : 'text-green'}">${log.qtyChange > 0 ? '+' : ''}${log.qtyChange}</td>
                <td>${log.Before}</td>
                <td>${log.After}</td>
                <td>${log.Notes}</td>
              </tr>
            `).join("")}
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