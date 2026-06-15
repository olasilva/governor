// TEISMS Shared JavaScript Functions

// Render LGA Quick Grid on Dashboard
function renderLGAQuickGrid() {
  const container = document.getElementById('lga-grid-container');
  if (!container) return;
  
  container.innerHTML = lgas.map(lga => `
    <div class="lga-card" onclick="window.location.href='lga-dashboard.html?id=${lga.id}'">
      <h4>${lga.name}</h4>
      <div class="score">${lga.mobilisationScore}%</div>
      <div class="progress-bar"><div class="progress" style="width:${lga.mobilisationScore}%"></div></div>
      <div style="display:flex; justify-content:space-between; margin-top:8px;">
        <span><i class="fas fa-users"></i> ${lga.activeOperatives}</span>
        <span class="badge ${lga.riskLevel === 'high' ? 'badge-danger' : (lga.riskLevel === 'medium' ? 'badge-warning' : 'badge-success')}">${lga.riskLevel}</span>
      </div>
    </div>
  `).join('');
}

// Render Real-time Intelligence Feeds
function renderRealtimeFeeds() {
  const container = document.getElementById('realtime-feeds');
  if (!container) return;
  
  container.innerHTML = intelligenceFeeds.map(feed => `
    <div class="feed-item">
      <i class="fas ${feed.type === 'alert' ? 'fa-exclamation-triangle' : (feed.type === 'positive' ? 'fa-thumbs-up' : 'fa-info-circle')}" style="color:${feed.type === 'alert' ? '#f87171' : (feed.type === 'positive' ? '#4ade80' : '#60a5fa')}"></i>
      <div style="flex:1">
        <strong>${feed.lga}</strong> - ${feed.message}
        <div style="font-size:0.7rem; color:#7f8ea3;">${feed.time}</div>
      </div>
    </div>
  `).join('');
}

// Render Alerts List
function renderAlertsList() {
  const container = document.getElementById('alerts-container');
  if (!container) return;
  
  const alerts = intelligenceFeeds.filter(f => f.type === 'alert');
  const highRiskLGAs = lgas.filter(l => l.riskLevel === 'high');
  
  let alertsHTML = alerts.map(alert => `
    <div class="alert-item">
      <i class="fas fa-bell" style="color:#fbbf24"></i>
      <div><strong>${alert.lga}</strong>: ${alert.message}<br><small>Priority: ${alert.priority}</small></div>
    </div>
  `).join('');
  
  alertsHTML += highRiskLGAs.map(lga => `
    <div class="alert-item">
      <i class="fas fa-skull-crosswalk" style="color:#f87171"></i>
      <div><strong>${lga.name}</strong>: ${lga.riskAlert || 'High risk zone - Immediate attention required'}</div>
    </div>
  `).join('');
  
  container.innerHTML = alertsHTML || '<p>No active alerts</p>';
}

// Render Mobilisation Chart
function renderMobilisationChart() {
  const ctx = document.getElementById('mobilisationChart')?.getContext('2d');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lgas.map(l => l.name),
      datasets: [{
        label: 'Mobilisation Score (%)',
        data: lgas.map(l => l.mobilisationScore),
        backgroundColor: '#d4a13e',
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: { y: { grid: { color: '#2d3348' }, max: 100 } },
      plugins: { legend: { labels: { color: '#e2e8f0' } } }
    }
  });
}

// Render Sentiment Trend Chart
function renderSentimentTrendChart() {
  const ctx = document.getElementById('sentimentTrendChart')?.getContext('2d');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        { label: 'Positive Sentiment', data: [58, 62, 65, 68], borderColor: '#4ade80', tension: 0.3 },
        { label: 'Neutral Sentiment', data: [28, 26, 24, 22], borderColor: '#fbbf24', tension: 0.3 },
        { label: 'Negative Sentiment', data: [14, 12, 11, 10], borderColor: '#f87171', tension: 0.3 }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#e2e8f0' } } }
    }
  });
}

// Show Toast Notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Export for use across pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { lgas, wards, politicalAssets, pollingUnits, implementationPhases, risks };
}