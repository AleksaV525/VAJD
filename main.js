const root=document.documentElement,nav=document.querySelector('nav'),mb=document.querySelector('.menu');
root.classList.add('js');
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Zatvori':'Meni';document.body.style.overflow=o?'hidden':'';document.body.classList.toggle('nv',o)});
const dk=document.querySelector('.dock'),sc=()=>dk&&dk.classList.toggle('on',scrollY>360);sc();addEventListener('scroll',sc,{passive:true});
const els=[...document.querySelectorAll('.head,.card,.split>*,.steps>div,.tcard,.bento .ph,.ctab,.faq details,.tools')];
if('IntersectionObserver' in window){
 els.forEach((e,i)=>{e.setAttribute('data-r','');e.style.transitionDelay=(i%4)*70+'ms'});
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;e.classList.add('in');io.unobserve(e);setTimeout(()=>{e.removeAttribute('data-r');e.style.transitionDelay=''},1100)}),{threshold:.1,rootMargin:'0px 0px -30px 0px'});
 els.forEach(e=>io.observe(e));
}
const groups=[...document.querySelectorAll('.filters')];
if(groups.length){const items=[...document.querySelectorAll('.item')],q=document.querySelector('#q'),st={c:'sve',m:'sve'};
const run=()=>{const s=q.value.trim().toLowerCase();items.forEach(i=>i.hidden=!((st.c==='sve'||i.dataset.c===st.c)&&(st.m==='sve'||i.dataset.m.split(' ').includes(st.m))&&(!s||(i.dataset.n+i.dataset.d).toLowerCase().includes(s))))};
groups.forEach(g=>g.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;st[g.dataset.k]=b.dataset.f;g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));run()}));
q.addEventListener('input',run);
const d=document.querySelector('dialog');
items.forEach(i=>i.addEventListener('click',()=>{d.querySelector('h3').textContent=i.dataset.n;d.querySelector('p').textContent=i.dataset.d;d.showModal()}));
d.addEventListener('click',e=>{if(e.target===d||e.target.hasAttribute('data-close'))d.close()})}
