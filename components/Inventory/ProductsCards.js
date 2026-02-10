export function ProductsCards({ title, sold, lastBought, icon }) {
  const PRODUCT_STYLE = {
    "Inmarsat Phones": { icon: "📞", bg: "#e2d9ec" },
    "Iridium 9555": { icon: "📱", bg: "#cdd5ee" },
    "Iridium 9575": { icon: "📱", bg: "#b1cbd3" },
    "Others": { icon: "📦", bg: "#eee9d4" }
  };

  const style = PRODUCT_STYLE[title] || { icon: "📦", bg: "#EEF2FF" };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  return `
    <div class="product-card" style="background-color: ${style.bg};">
      <div class="product-card-body">
        <div class="product-icon">${style.icon}</div>

        <div class="product-details">
          <h3 class="product-title">${title}</h3>
          <div class="product-sold">
            <span class="product-value">${sold}</span>
            <span class="sold-label">sold</span>
          </div>
        </div>
      </div>

      <div class="product-card-footer">
        <div class="last-bought">
          <span class="last-bought-icon">📈</span>
          <span class="last-bought-text">
            Last bought on: <strong>${formatDate(lastBought)}</strong>
          </span>
        </div>
      </div>
    </div>
  `;
}
