const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
let selectedFilter = 'All';
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function visual(p) {
 if(p.image) return `<img src="/assets/${p.image}" alt="${escapeHtml(p.name)} — actual project hardware" loading="lazy" width="900" height="600">`;
 const diagrams = {
  pipeline:'<div class="mini-pipeline"><span>IF</span><i>→</i><span>ID</span><i>→</i><span>EX</span><i>→</i><span>MEM</span><i>→</i><span>WB</span></div><p class="diagram-caption">INSTRUCTION → EXECUTION</p>',
  game:'<div class="hardware-flow"><span>NES input</span><i>↓</i><span>Game logic / FSM</span><i>↓</i><span>VGA / 640 × 480</span></div>',
  robot:'<div class="hardware-flow horizontal"><span>Sense<br><small>Color + IR</small></span><i>→</i><span>Decide<br><small>Arduino</small></span><i>→</i><span>Move<br><small>H-bridge</small></span></div>',
  terminal:'<div class="terminal"><div class="terminal-dots">● ● ●</div><code><span>$</span> gerp ./library<br><span>query ›</span> engineering<br><span>index →</span> file : line : match<br><span>lookup →</span> custom hash table</code></div>',
  commerce:'<div class="commerce-visual"><span>CURATION</span><div>DESIGN → STORE → CHECKOUT</div><small>HTML / CSS / JS + SHOPIFY</small></div>'
  ,cad:'<div class="cad-card-visual"><span>SOLIDWORKS</span><strong>Full binding.<br>From scratch.</strong><small>CAD / 3D MODELING</small></div>'
 };return diagrams[p.visual] || '';
}
function projectUrl(p) { return p.url || `https://github.com/JanKonings/${p.repo}`; }
function renderProjects() {
 document.querySelector('#all-project-count').textContent=projects.length;
 const shown = projects.filter(p=>selectedFilter==='All'||p.category===selectedFilter);
 grid.innerHTML = shown.map(p=>`<article class="project-card ${p.accent}"><button class="project-image" data-open="${p.id}" aria-label="View ${escapeHtml(p.name)} details">${visual(p)}<span class="image-index">${p.number}</span><span class="image-arrow">↗</span></button><div class="project-body"><p class="eyebrow">${p.label}</p><h3><button data-open="${p.id}">${p.title}</button></h3><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="card-footer"><button class="inline-button" data-open="${p.id}">Project details ↗</button><a href="${projectUrl(p)}" target="_blank" rel="noopener" aria-label="${escapeHtml(p.name)} on ${p.repo?'GitHub':'LinkedIn'}">${p.linkLabel || 'Code ↗'}</a></div></div></article>`).join('');
 document.querySelector('#project-count').textContent=`${shown.length} project${shown.length===1?'':'s'}`;
}
function openProject(id) {
 const p=projects.find(p=>p.id===id); if(!p)return;
 document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">PROJECT ${p.number} / ${p.label}</p><h2 id="dialog-title">${p.name}</h2><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${p.image?`<img class="detail-image" src="/assets/${p.image}" alt="${escapeHtml(p.name)} hardware">`:''}<p class="detail-description">${p.description}</p>${p.video?`<figure class="project-video"><video controls playsinline preload="none" poster="/assets/${p.poster}" src="/assets/${p.video}" aria-label="SolidWorks ski-binding animation">Your browser does not support video. <a href="/assets/${p.video}">Download the animation</a>.</video><figcaption>SolidWorks assembly animation</figcaption></figure>`:''}<h3>Implementation</h3><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul>${p.documents?`<div class="project-documents"><h3>Drawings & documentation</h3><a class="drawing-preview" href="/assets/ski-assembly-drawing.pdf" target="_blank" rel="noopener"><img src="/assets/ski-assembly-drawing.png" alt="Exploded ski-binding assembly drawing with bill of materials" loading="lazy"></a>${p.documents.map(d=>`<a href="/assets/${d.file}" target="_blank" rel="noopener">${d.label} <span>PDF</span></a>`).join('')}</div>`:''}${p.collaborators.length?`<p class="team-credit">Team project with ${p.collaborators.join(', ')}.</p>`:''}<a class="button primary" href="${projectUrl(p)}" target="_blank" rel="noopener">${p.repo?'View source on GitHub ↗':'View LinkedIn profile'}</a>${p.filesUrl?`<p class="project-files"><a href="${p.filesUrl}" target="_blank" rel="noopener">Project files on Tufts Box</a><small>Tufts sign-in may be required.</small></p>`:''}`;
 dialog.showModal(); document.body.classList.add('dialog-open');
}
document.addEventListener('click',e=>{
 const opener=e.target.closest('[data-open]');if(opener)openProject(opener.dataset.open);
 const filter=e.target.closest('[data-filter]');if(filter){selectedFilter=filter.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===filter);b.setAttribute('aria-pressed',String(b===filter));});renderProjects();}
 const focus=e.target.closest('[data-focus]');if(focus){document.querySelector('#skill-query').value=focus.dataset.focus;matchProjects();}
});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialog.querySelectorAll('video').forEach(video=>video.pause());});
const ignored=new Set(['a','an','the','with','and','or','for','in','of','to','is','we','you','are','seeking','looking','engineer','engineering','experience','developer','development']);
function matchProjects(){
 const raw=document.querySelector('#skill-query').value.trim();
 const terms=[...new Set((raw.toLowerCase().match(/[a-z0-9+#.-]+/g)||[]).filter(t=>!ignored.has(t)))];
 const results=document.querySelector('#match-results');
 if(!terms.length){results.innerHTML='<p class="match-placeholder">Enter a skill such as STM32, VHDL, C++, or JavaScript.</p>';return;}
 const ranked=projects.map(p=>{const text=[p.name,p.category,...p.tags,...p.keywords,p.summary,...p.details].join(' ').toLowerCase();const words=text.match(/[a-z0-9+#.-]+/g)||[];const hits=terms.filter(t=>words.includes(t));return {p,hits};}).filter(r=>r.hits.length).sort((a,b)=>b.hits.length-a.hits.length).slice(0,3);
 results.innerHTML=ranked.length?`<p class="result-heading">${ranked.length} relevant project${ranked.length===1?'':'s'}</p>`+ranked.map(({p,hits})=>`<button class="match-result" data-open="${p.id}"><span><b>${p.name}</b><small>Matches: ${hits.map(escapeHtml).join(', ')}</small></span><span>↗</span></button>`).join(''):`<p class="match-placeholder">No documented matches yet. Try a broader skill, or browse all ${projects.length} projects.</p>`;
}
document.querySelector('#match-form').addEventListener('submit',e=>{e.preventDefault();matchProjects();});
document.querySelector('#year').textContent=new Date().getFullYear();renderProjects();
