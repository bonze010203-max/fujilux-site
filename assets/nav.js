/* Shared site header: one consistent menu for every page */
(function(){
const HOME=/(catalog|product|csr)\.html$/.test(location.pathname)?'index.html':'';
const L=(m,e)=>`<span class="mn">${m}</span><span class="en">${e}</span>`;
const C=c=>'catalog.html?cat='+c;
const MENU={
 bath:{t:['Угаалгын өрөө','Bathroom'],items:[
  ['smarttoilet','Ухаалаг суултуур','Intelligent toilets'],
  ['toilet,wallhung','Суултуур','Toilets'],
  ['basin','Угаалтуур','Lavatories'],
  ['faucet','Холигч, шүршүүр','Faucets & showers'],
  ['bath','Ванн','Baths'],
  ['showerroom','Шүршүүрийн кабин','Shower enclosures'],
  ['furniture,mirror','Тавилга, толь','Furniture & mirrors'],
  ['seat,smartseat','Суултуурын таг','Toilet seats'],
  ['heater,towel,konnect','Халаагч, дагалдах','Heaters & accessories'],
  ['artist,suite','Тансаг цуглуулга','Luxury collections']]},
 floor:{t:['Шал','Flooring'],items:[
  ['floor&sub=p1','3 давхар модон шал','Engineered wood'],
  ['floor&sub=p2','Олон давхарт шал','Multilayer'],
  ['floor&sub=p3','Шахмал шал','Laminate']]},
 more:{t:['Бусад','More'],items:[
  ['commercial','Нийтийн барилга','Commercial washrooms'],
  ['kitchen','Гал тогоо','Kitchen'],
  ['#stone','Чулуу, плита','Stone & tiles'],
  ['#contact','Захиалгат нийлүүлэлт','Custom sourcing']]}
};
const href=c=>c.startsWith('#')?HOME+c:C(c);
const col=k=>`<div class="mm-col"><h6>${L(...MENU[k].t)}</h6>${MENU[k].items.map(i=>`<a href="${href(i[0])}">${L(i[1],i[2])}</a>`).join('')}</div>`;
const html=`
<nav id="nav" class="sn"><div class="sn-in">
  <a href="${HOME||'#home'}" class="sn-logo" aria-label="Fujilux Supply"><span class="lgo d"></span><span class="lgo l"></span></a>
  <ul class="sn-links">
    <li class="has-mm"><button class="sn-a" aria-expanded="false">${L('Бүтээгдэхүүн','Products')}<svg viewBox="0 0 12 12"><path d="M3 4.5l3 3 3-3"/></svg></button>
      <div class="mm"><div class="mm-in">
        ${col('bath')}
        <div class="mm-side">${col('floor')}${col('more')}</div>
        <a class="mm-feat" href="catalog.html"><small>${L('Бүрэн каталог','Full catalogue')}</small><b>${L('1,700+ бүтээгдэхүүн','1,700+ products')}</b><span>${L('Зураг, бараа код, хэмжээтэй. Хайх, шүүх, жагсаалт үүсгэх.','Photos, codes and sizes. Search, filter and build a quote list.')}</span><i>${L('Каталог нээх →','Open catalogue →')}</i></a>
      </div></div></li>
    <li><a class="sn-a" href="${HOME}#brands">${L('Брендүүд','Brands')}</a></li>
    <li><a class="sn-a" href="${HOME}#projects">${L('Төслүүд','Projects')}</a></li>
    <li><a class="sn-a" href="${HOME}#services">${L('Үйлчилгээ','Services')}</a></li>
    <li><a class="sn-a" href="${HOME}#about">${L('Бидний тухай','About')}</a></li>
    <li><a class="sn-a${location.pathname.endsWith('csr.html')?' cur':''}" href="csr.html">${L('Нийгмийн хариуцлага','Social responsibility')}</a></li>
  </ul>
  <div class="sn-r">
    <a class="sn-ic" href="catalog.html#search" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></a>
    <div class="lang"><button data-l="mn" class="on">MN</button><button data-l="en">EN</button></div>
    <a href="${HOME}#contact" class="btn solid nav-cta">${L('Үнийн санал авах','Request a quote')}<span class="ar">→</span></a>
    <button class="burger" id="burger" aria-label="Menu"><span></span></button>
  </div>
</div></nav>
<div class="mnav" id="mnav"><div class="mnav-in">
  <details><summary>${L('Бүтээгдэхүүн','Products')}</summary>
    <a class="mn-all" href="catalog.html">${L('Бүрэн каталог','Full catalogue')} →</a>
    ${['bath','floor','more'].map(k=>`<h6>${L(...MENU[k].t)}</h6>`+MENU[k].items.map(i=>`<a href="${href(i[0])}">${L(i[1],i[2])}</a>`).join('')).join('')}
  </details>
  <a class="mn-top" href="${HOME}#brands">${L('Брендүүд','Brands')}</a>
  <a class="mn-top" href="${HOME}#projects">${L('Төслүүд','Projects')}</a>
  <a class="mn-top" href="${HOME}#services">${L('Үйлчилгээ','Services')}</a>
  <a class="mn-top" href="${HOME}#about">${L('Бидний тухай','About')}</a>
  <a class="mn-top" href="csr.html">${L('Нийгмийн хариуцлага','Social responsibility')}</a>
  <a class="mn-top" href="${HOME}#contact">${L('Холбоо барих','Contact')}</a>
  <a class="btn solid" href="${HOME}#contact" style="margin-top:20px;align-self:flex-start">${L('Үнийн санал авах','Request a quote')} →</a>
</div></div>
<div class="nav-veil" id="navVeil"></div>`;
document.currentScript.insertAdjacentHTML('beforebegin',html);
const nav=document.getElementById('nav'),mm=nav.querySelector('.has-mm'),btn=mm.querySelector('button'),veil=document.getElementById('navVeil');
let t;const open=o=>{mm.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)};
mm.addEventListener('mouseenter',()=>{clearTimeout(t);open(true)});mm.addEventListener('mouseleave',()=>{t=setTimeout(()=>open(false),180)});
btn.addEventListener('click',()=>open(!mm.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape')open(false)});
nav.querySelectorAll('.mm a').forEach(a=>a.addEventListener('click',()=>open(false)));
const mnav=document.getElementById('mnav');
document.getElementById('burger').addEventListener('click',()=>{const o=!mnav.classList.contains('open');mnav.classList.toggle('open',o);document.body.classList.toggle('mnav-open',o)});
mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mnav.classList.remove('open');document.body.classList.remove('mnav-open')}));
const solid=()=>nav.classList.toggle('solid',scrollY>40||document.body.dataset.page==='catalog');
addEventListener('scroll',solid,{passive:true});solid();

// Instant veil section transition (no up/down page scrolling, works on 1st click)
window.goToSection=function(id,noVeil){
  const el=id==='home'?document.body:document.getElementById(id);
  if(!el)return false;
  open(false);
  mnav.classList.remove('open');
  document.body.classList.remove('mnav-open');
  const jump=()=>{
    el.querySelectorAll?.('.rv').forEach(r=>r.classList.add('in'));
    if(el.classList?.contains('rv'))el.classList.add('in');
    const calcY=()=>id==='home'?0:Math.max(0,el.getBoundingClientRect().top+window.scrollY-(id==='projects'?0:68));
    window.scrollTo(0,calcY());
    requestAnimationFrame(()=>{
      window.scrollTo(0,calcY());
      solid();
      nav.querySelectorAll('.sn-links a').forEach(a=>a.classList.toggle('cur',a.getAttribute('href')==='#'+id));
    });
    if(location.hash)history.replaceState(null,'',location.pathname+location.search);
  };
  if(noVeil){jump();return true;}
  veil.classList.add('on');
  setTimeout(()=>{
    jump();
    setTimeout(()=>veil.classList.remove('on'),90);
  },180);
  return true;
};

if(!HOME){
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a)return;
    const id=a.getAttribute('href').slice(1);
    if(!id)return;
    if(id==='home'||document.getElementById(id)){
      e.preventDefault();
      window.goToSection(id,false);
    }
  });
}

// highlight current section
const ids=['brands','projects','services','about'];
if(!HOME){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){nav.querySelectorAll('.sn-links a').forEach(a=>a.classList.toggle('cur',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
  ids.forEach(i=>{const el=document.getElementById(i);if(el)io.observe(el)})}
})();
