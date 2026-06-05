const fs = require('fs');

const file = 'C:/Users/hp/Documents/Codex/2026-06-04/files-mentioned-by-the-user-foodchain/outputs/foodchain_admin_polished.html';
let html = fs.readFileSync(file, 'utf8');

const start = html.indexOf('function resetStatCards()');
const end = html.indexOf('function syncBadges()', start);
if (start < 0 || end < 0) throw new Error('Could not locate stat card block');

const replacement = `function resetStatCards() {
  ['scard-active','scard-completed','scard-incoming','scard-uncompleted'].forEach(id=>{
    const c=document.getElementById(id);
    if(c) c.classList.remove('selected','orange');
  });
}

const statMeta = {
  active:      { title:'Active Orders',        sub:'Accepted orders currently being delivered', source:()=>orders.filter(o=>o.status==='accepted'), emptyMsg:'No active orders right now' },
  completed:   { title:'Completed Deliveries', sub:'Orders successfully delivered',             source:()=>deliveries,                              emptyMsg:'No completed deliveries yet' },
  incoming:    { title:'Incoming Orders',      sub:'New orders waiting to be accepted',          source:()=>orders.filter(o=>o.status==='pending'),  emptyMsg:'No incoming orders right now' },
  uncompleted: { title:'Uncompleted Orders',   sub:'Orders that were cancelled or failed',       source:()=>orders.filter(o=>o.status==='cancelled'),emptyMsg:'No uncompleted orders - great!' },
};

function orderStatusBadge(o) {
  if (o.status === 'accepted') return { label:'Active', className:'accepted' };
  if (o.status === 'done') return { label:'Delivered', className:'done' };
  if (o.status === 'cancelled') return { label:'Cancelled', className:'cancelled' };
  return { label:'Pending', className:'pending' };
}

function filterOrders(type, el) {
  if(window.event) addRipple(window.event, el);
  resetStatCards();
  el.classList.add('selected');
  currentView = 'filtered'; closeSidebar(); setNavActive('');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-filtered').classList.add('active');
  document.getElementById('main-area').style.gridTemplateColumns = '1fr';
  const meta = statMeta[type];
  document.getElementById('filtered-title').textContent = meta.title;
  document.getElementById('filtered-sub').textContent = meta.sub;
  const filtered = meta.source();
  const list = document.getElementById('filtered-list'); list.innerHTML = '';
  if(!filtered.length) {
    list.innerHTML=\`<div class="empty-state" style="height:auto;padding:60px 0"><div class="empty-icon">\${uiIcon('package')}</div><div class="empty-text">\${meta.emptyMsg}</div></div>\`;
    return;
  }
  filtered.forEach(o=>{
    const card = document.createElement('div');
    const badge = orderStatusBadge(o);
    card.className = \`order-card \${o.status==='done'?'done':o.status==='accepted'?'accepted':o.status==='cancelled'?'cancelled':''}\`;
    card.innerHTML=\`<div class="order-header"><span class="order-id">\${o.id}</span><span class="order-time">\${o.time}</span></div>
      <div class="order-customer">\${o.customer}</div>
      <div class="order-location">\${uiIcon('map-pin')} \${o.location}</div>
      \${o.items ? \`<div class="order-items-preview">\${o.items.map(it=>\`\${it.emoji} \${it.name}\`).join(' · ')}</div>\` : \`<div class="order-items-preview">Rider: \${o.rider} · Vendor: \${o.vendor}</div>\`}
      <div class="order-total">Total: <span>₦\${o.total.toLocaleString()}</span></div>
      <span class="status-badge \${badge.className}">\${badge.label}</span>\`;
    list.appendChild(card);
  });
}

`;

html = html.slice(0, start) + replacement + html.slice(end);

html = html.replace(
  /function updateStats\(\) \{[\s\S]*?\n\}/,
  `function updateStats() {
  document.getElementById('stat-active').textContent      = orders.filter(o=>o.status==='accepted').length;
  document.getElementById('stat-completed').textContent   = deliveries.length;
  document.getElementById('stat-incoming').textContent    = orders.filter(o=>o.status==='pending').length;
  document.getElementById('stat-uncompleted').textContent = orders.filter(o=>o.status==='cancelled').length;
  syncBadges();
}`
);

html = html.replace(
  "const el=document.getElementById('stat-completed'); el.textContent=parseInt(el.textContent)+1;\n  // add to deliveries log\n  const o = orders[i];",
  "// add to deliveries log\n  const o = orders[i];"
);

html = html.replace('renderOrders();\nsyncBadges();', 'renderOrders();\nupdateStats();');

fs.writeFileSync(file, html, 'utf8');
