document.addEventListener("DOMContentLoaded",function(){
(function(){
var nv=document.getElementById('nv'),b=document.getElementById('nvb'),de=document.documentElement;
function setOpen(o){nv.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');de.classList.toggle('nv-lock',o);}
b.addEventListener('click',function(){setOpen(!nv.classList.contains('open'));});
addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
[].forEach.call(nv.querySelectorAll('.nv-p a'),function(a){a.addEventListener('click',function(){setOpen(false);});});
var xo=document.getElementById('xo');[].forEach.call(document.querySelectorAll('nav a[href^="/"],.bt[href^="/"],.flinks a[href^="/"]'),function(a){a.addEventListener('click',function(e){var h=a.getAttribute('href');if(!h||h.charAt(0)==='#'||a.target==='_blank'||e.metaKey||e.ctrlKey)return;e.preventDefault();xo.classList.add('on');setTimeout(function(){location.href=h;},520);});});addEventListener('pageshow',function(e){if(e.persisted)xo.classList.remove('on');});
[].forEach.call(document.querySelectorAll('.sh'),function(e){new IntersectionObserver(function(en,ob){en.forEach(function(x){if(x.isIntersecting){e.classList.add('on');ob.disconnect();}});},{threshold:.45}).observe(e);});var op=document.getElementById('op'),en=document.getElementById('en'),sh=[].slice.call(document.querySelectorAll('.sh')),tg=document.getElementById('tlg'),tb=document.getElementById('nvt'),sc=document.getElementById('sc2');
function tick(){var H=innerHeight,m=H*.5,wh=false;sh.forEach(function(s){s.style.top=Math.min(0,H-s.offsetHeight)+'px';});sh.forEach(function(s){var r=s.getBoundingClientRect();s.classList.toggle('tp',r.top<=2);if(r.top<m&&r.bottom>m)wh=true;});var nx=sh.concat([en]);sh.forEach(function(s,i){var t=nx[i+1].getBoundingClientRect().top;s.style.setProperty('--cv',Math.max(0,Math.min(1,1-t/H)).toFixed(3));});var re=en.getBoundingClientRect();en.classList.toggle('tp',re.top<=2);if(re.top<H*.22)wh=false;nv.classList.toggle('light',wh);var hm=document.getElementById('hdm');if(hm)hm.classList.toggle('on',wh);if(tg)tg.classList.toggle('on',!wh);if(tb)tb.classList.toggle('on',scrollY>H*.5);if(sc)sc.classList.toggle('dk',wh);}
addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);tick();
if(tb)tb.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});
window.__wld=true;
var ld=document.getElementById('wld'),done=false;
if(!ld){op.classList.add('go');}else{de.classList.add('ldlock');
function end(){if(done)return;done=true;ld.classList.add('off');window.__wld=false;de.classList.remove('ldlock');op.classList.add('go');setTimeout(function(){ld.classList.add('gone');},600);}
function st(){setTimeout(end,2300);}
if(document.readyState==='complete')st();else addEventListener('load',st);
setTimeout(end,7000);}
var idle=0,la=performance.now();function act(){la=performance.now();sc.classList.remove('on');}
['scroll','wheel','touchstart','keydown'].forEach(function(e){addEventListener(e,act,{passive:true});});
setInterval(function(){var n=performance.now();sc.classList.toggle('on',!window.__wld&&n-la>3000&&scrollY<innerHeight*.3);},400);
})();

});