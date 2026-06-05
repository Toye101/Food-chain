const fs = require('fs');

const file = 'C:/Users/hp/Documents/Codex/2026-06-04/files-mentioned-by-the-user-foodchain/outputs/foodchain_admin_polished.html';
let html = fs.readFileSync(file, 'utf8');

const replacements = [
  [/icon:'ðŸ“¦'|icon:'📦'/g, "icon:uiIcon('package')"],
  [/icon: foods\[i\]\.available \? 'ðŸ™ˆ' : 'ðŸ‘ï¸'|icon: foods\[i\]\.available \? '🙈' : '👁️'/g, "icon: foods[i].available ? uiIcon('eye-off') : uiIcon('eye')"],
  [/icon:'ðŸ’°'|icon:'💰'/g, "icon:uiIcon('coins')"],
  [/icon:'âž•'|icon:'➕'/g, "icon:uiIcon('plus')"],
  [/icon:'ðŸšª'|icon:'🚪'/g, "icon:uiIcon('log-out')"],
  [/<div class="empty-icon">ðŸ“­<\/div>|<div class="empty-icon">📭<\/div>/g, "<div class=\"empty-icon\">${uiIcon('package')}</div>"],
  [/<div class="empty-icon">ðŸ›ï¸<\/div>|<div class="empty-icon">🛍️<\/div>/g, "<div class=\"empty-icon\">${uiIcon('shopping-bag')}</div>"],
  [/const bl = o\.status==='accepted'\?'[^']* Active':o\.status==='done'\?'[^']* Delivered':o\.status==='cancelled'\?'[^']* Cancelled':'[^']* Pending';/g, "const bl = o.status==='accepted'?'Active':o.status==='done'?'Delivered':o.status==='cancelled'?'Cancelled':'Pending';"],
  [/<div class="order-location">(?:ðŸ“|📍) \$\{o\.location\}<\/div>/g, "<div class=\"order-location\">${uiIcon('map-pin')} ${o.location}</div>"],
  [/\?\`<div class="order-actions"><button class="btn btn-accept" onclick="acceptOrder\(\$\{i\}\)">[^<]* Accept<\/button><button class="btn btn-cancel" onclick="cancelOrder\(\$\{i\}\)">[^<]* Cancel<\/button><\/div>`/g, "?`<div class=\"order-actions\"><button class=\"btn btn-accept\" onclick=\"acceptOrder(${i})\">${uiIcon('check-circle')} Accept</button><button class=\"btn btn-cancel\" onclick=\"cancelOrder(${i})\">${uiIcon('x')} Cancel</button></div>`"],
  [/:`<span class="status-badge \$\{o\.status==='accepted'\?'accepted':o\.status==='done'\?'done':'cancelled'\}">\$\{o\.status==='accepted'\?'[^']* Accepted':o\.status==='done'\?'[^']* Delivered':'[^']* Cancelled'\}<\/span>`/g, ":`<span class=\"status-badge ${o.status==='accepted'?'accepted':o.status==='done'?'done':'cancelled'}\">${o.status==='accepted'?'Accepted':o.status==='done'?'Delivered':'Cancelled'}</span>`"],
  [/<div><div class="detail-id">\$\{o\.id\}<\/div><div class="detail-customer">(?:ðŸ‘¤|👤) \$\{o\.customer\} . (?:ðŸ“|📍) \$\{o\.location\}<\/div><\/div>/g, "<div><div class=\"detail-id\">${o.id}</div><div class=\"detail-customer\">${uiIcon('user')} ${o.customer} · ${uiIcon('map-pin')} ${o.location}</div></div>"],
  [/<span class="status-badge accepted">[^<]* Accepted<\/span>/g, "<span class=\"status-badge accepted\">Accepted</span>"],
  [/<button class="deliver-btn" onclick="markDelivered\(\$\{i\}\)">(?:ðŸš´|🚴) Mark as Delivered<\/button>/g, "<button class=\"deliver-btn\" onclick=\"markDelivered(${i})\">${uiIcon('bike')} Mark as Delivered</button>"],
  [/showToast\('(?:âœ…|✅) Order marked as delivered!'\);/g, "showToast('Order marked as delivered');"],
  [/showToast\('(?:âš ï¸|⚠️) Enter a valid quantity'\);/g, "showToast('Enter a valid quantity');"],
  [/showToast\(`(?:âœ…|✅) \$\{foods\[i\]\.name\} stock updated to \$\{val\}`\);/g, "showToast(`${foods[i].name} stock updated to ${val}`);"],
  [/showToast\(`\$\{foods\[i\]\.available\?'(?:âœ…|✅) Showing':'(?:ðŸ™ˆ|🙈) Hidden'\}: \$\{foods\[i\]\.name\}`\);/g, "showToast(`${foods[i].available?'Showing':'Hidden'}: ${foods[i].name}`);"],
  [/showToast\('(?:âš ï¸|⚠️) Enter a valid price'\);/g, "showToast('Enter a valid price');"],
  [/showToast\(`(?:âœ…|✅) \$\{foods\[i\]\.name\} price updated to (?:â‚¦|₦)\$\{val\.toLocaleString\(\)\}`\);/g, "showToast(`${foods[i].name} price updated to ₦${val.toLocaleString()}`);"],
  [/showToast\('(?:âš ï¸|⚠️) Fill in all fields'\);/g, "showToast('Fill in all fields');"],
  [/showToast\(`(?:âœ…|✅) \$\{name\} added to menu!`\);/g, "showToast(`${name} added to menu`);"],
  [/showToast\('(?:âœ…|✅) Complaint marked as resolved'\);/g, "showToast('Complaint marked as resolved');"],
  [/document\.body\.innerHTML=`<div style="([^"]*)">(?:ðŸ‘‹|👋) Logged out of/g, "document.body.innerHTML=`<div style=\"$1\">Logged out of"],
];

for (const [pattern, replacement] of replacements) {
  html = html.replace(pattern, replacement);
}

fs.writeFileSync(file, html, 'utf8');
