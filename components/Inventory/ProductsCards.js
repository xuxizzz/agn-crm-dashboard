export function ProductsCards({ title, sold, lastBought, icon }) {
  // Format date to "09 Feb 2026"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Determine background color based on product type
  let bgColor = '#EEF2FF'; // default blue
  if (title.includes('Inmarsat')) {
    bgColor = '#FAF5FF'; // purple
  } else if (title.includes('Two-Way') || title.includes('Radio')) {
    bgColor = '#FEF3C7'; // yellow
  }
  
  return `
    <div class="product-card" style="background-color: ${bgColor};">
      <div class="product-card-body">
        <div class="product-icon">${icon || '📱'}</div>

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
          <span class="last-bought-text">Last bought on: <strong>${formatDate(lastBought)}</strong></span>
        </div>
      </div>
    </div>
  `;
}
