export function Transactions() {

    const transactions = [
        { id: 6, date: "2024-06-11", client: "Oceanic Shipping Co.", agent: "Juan Ramos", orderType: "Mixed", totalAmount: "₱185,000", paymentStatus: "Paid", fulfillmentStatus: "Fullfilled", invoiceLink: "#" },
        { id: 5, date: "2024-06-09", client: "Global Traders Ltd.", agent: "Maria Lopez", orderType: "Device/s Only", totalAmount: "₱120,000", paymentStatus: "Pending", fulfillmentStatus: "Partial", invoiceLink: "#" },
        { id: 4, date: "2024-06-07", client: "Tech Solutions Inc.", agent: "Carlos Mendoza", orderType: "Load/s Only", totalAmount: "₱75,500", paymentStatus: "Overdue", fulfillmentStatus: "Unfulfilled", invoiceLink: "#" },
        { id: 3, date: "2024-06-05", client: "LogiTrans Corp.", agent: "Ana Garcia", orderType: "Mixed", totalAmount: "₱200,000", paymentStatus: "Paid", fulfillmentStatus: "Fullfilled", invoiceLink: "#" },
        { id: 2, date: "2024-06-03", client: "SupplyHub LLC", agent: "Luis Fernandez", orderType: "Device/s Only", totalAmount: "₱95,750", paymentStatus: "Pending", fulfillmentStatus: "Partial", invoiceLink: "#" },
        { id: 1, date: "2024-06-01", client: "Maritime Equipments", agent: "Sofia Torres", orderType: "Load/s Only", totalAmount: "₱60,300", paymentStatus: "Paid", fulfillmentStatus: "Fullfilled", invoiceLink: "#" },
    ];

    return `
    <div class="table-container">
      <div class="table-filters">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search client or agent..." class="filter-search" />
        </div>
        <select class="filter-dropdown">
          <option>All Order Types</option>
          <option>Mixed</option>
          <option>Device/s Only</option>
          <option>Load/s Only</option>
        </select>
        <select class="filter-dropdown">
          <option>All Payment Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
        </select>
        <select class="filter-dropdown">
          <option>All Fulfillment Status</option>
          <option>Fullfilled</option>
          <option>Partial</option>
          <option>Unfulfilled</option>
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
              ${["Order ID", "Date", "Client", "Agent", "Order Type", "Total Amount", "Payment Status", "Fulfillment Status", "Invoice"].map(header => `<th>${header}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${transactions.map(transaction => `
              <tr>
                <td>${transaction.id}</td>
                <td>${transaction.date}</td>
                <td>${transaction.client}</td>
                <td>${transaction.agent}</td>
                <td>${transaction.orderType}</td>
                <td>${transaction.totalAmount}</td>
                <td>${transaction.paymentStatus}</td>
                <td>${transaction.fulfillmentStatus}</td>
                <td><a href="${transaction.invoiceLink}" target="_blank">Invoice</a></td>
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