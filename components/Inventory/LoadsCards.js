export function LoadsCards({ title, load1, load2, load3, sold1, active1, expiring1, sold2, active2, expiring2, sold3, active3, expiring3 }) {
  // Determine background color based on load type
  let bgColor = '';
  if (title.includes('Iridium')) {
    bgColor = '#E7F3E9'; // green
  } else {
    bgColor = '#F8EAEA'; // red
  }
  
  return `
    <div class="load-card" style="background-color: ${bgColor};">
      <div class="load-card-header">
        <h3 class="load-title">${title}</h3>

        
      </div>
      
      <div class="load-card-body">

        <div class="load-section">
          <span class="load-name">${load1}</span>

          <div class="load-stats">
            <div class="load-sold">
              <span class="sold-count">${sold1}</span>
              <span class="sold-text"> sold </span>
            </div>
            
            <div class="load-active">
              <span class="active-count">${active1}</span>
              <span class="active-text"> active </span>
            </div>

            <div class="load-expiring">
              <span class="expiring-count">${expiring1}</span>
              <span class="expiring-text"> expiring </span>
            </div>
          </div>
        </div>
        <div class="load-section">
          <span class="load-name">${load2}</span>

          <div class="load-stats">
            <div class="load-sold">
              <span class="sold-count">${sold2}</span>
              <span class="sold-text"> sold </span>
            </div>
            
            <div class="load-active">
              <span class="active-count">${active2}</span>
              <span class="active-text"> active </span>
            </div>

            <div class="load-expiring">
              <span class="expiring-count">${expiring2}</span>
              <span class="expiring-text"> expiring </span>
            </div>
          </div>
        </div>
        <div class="load-section">
          <span class="load-name">${load3}</span>

          <div class="load-stats">
            <div class="load-sold">
              <span class="sold-count">${sold3}</span>
              <span class="sold-text"> sold </span>
            </div>
            
            <div class="load-active">
              <span class="active-count">${active3}</span>
              <span class="active-text"> active </span>
            </div>

            <div class="load-expiring">
              <span class="expiring-count">${expiring3}</span>
              <span class="expiring-text"> expiring </span>
            </div>
          </div>
        </div>

      </div>

      <div class="load-card-footer">
        <h4 class="footer-label">Totals:</h4>
        <div class="load-totals">
          <span class="total-sold">📈 ${sold1 + sold2 + sold3 + " sold"}</span>
          <span class="total-active">⚡ ${active1 + active2 + active3 + " active"}</span>
          <span class="total-expiring">⏳ ${expiring1 + expiring2 + expiring3 + " expiring"}</span>
        </div>
      </div>
    </div>
  `;
}
