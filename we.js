document.addEventListener("DOMContentLoaded",function(){
(function(){
var IMG=['https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f0580a01f3c9255ed60_freego-frise-05-equipe-sans-cadre.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f057fd17c73a2ffacf0_freego-frise-03-sevres-construction-premier-frigo.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f05b7d5f375528a9f5d_freego-frise-04-atelier-david-construction.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f05f65ca357aeb5b491_freego-frise-02-app-bookm-laura.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af392a49de22efdace9bcf7_debut-2025-dejeuner.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af392a324b4b068f138b56c_colombe-picasso-1956.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f05b2ec30a3a01c75ff_freego-frise-03-sevres-relais-selfie.webp', 'https://cdn.prod.website-files.com/64fe273051efba349f14b60c/6af38f0577f22d7ff01aae93_freego-frise-04-atelier-marechal-chat.webp'];
var nv=document.getElementById('nv'),b=document.getElementById('nvb'),de=document.documentElement,bar=document.getElementById('nvbar');
function setOpen(o){nv.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');de.classList.toggle('nv-lock',o);}
b.addEventListener('click',function(){setOpen(!nv.classList.contains('open'));});
addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
[].forEach.call(nv.querySelectorAll('.nv-p a'),function(a){a.addEventListener('click',function(){setOpen(false);});});
function cl(v,a,b){return Math.max(a,Math.min(b,v));}
var S=[].map.call(document.querySelectorAll('.sc'),function(s){return {e:s,h:+s.dataset.h,tx:[].slice.call(s.querySelectorAll('.tx'))};});
function size(){S.forEach(function(s){s.e.style.height=(s.h*innerHeight)+'px';});}
function prog(s){var r=s.e.getBoundingClientRect(),tot=r.height-innerHeight;return tot<=0?0:cl(-r.top/tot,0,1);}
/* canvases */
var cw=document.getElementById('cw'),cd=document.getElementById('cd'),dpr=Math.min(2,devicePixelRatio||1);
function fit(c){c.width=c.clientWidth*dpr;c.height=c.clientHeight*dpr;}
/* points : grille, 42 % rouges */
var P=[],cols=0,rows=0;
function mkdots(){fit(cd);var W=cd.clientWidth,H=cd.clientHeight,g=Math.max(34,Math.min(W,H)/13);cols=Math.floor(W/g);rows=Math.floor(H/g);P=[];var ox=(W-(cols-1)*g)/2,oy=(H-(rows-1)*g)/2;
 for(var j=0;j<rows;j++)for(var i=0;i<cols;i++)P.push({x:ox+i*g,y:oy+j*g,r:Math.random(),i:i,j:j});
 P.forEach(function(p){p.red=p.r<.42;});}

function labFrame(x,W,H,fig,txt,ga){x.save();x.globalAlpha=.5*(ga===undefined?1:ga);x.strokeStyle='#fff';x.fillStyle='#fff';x.lineWidth=1;x.setLineDash([]);x.font='10.5px ui-monospace,Menlo,monospace';var m=Math.max(18,W*.03),l=14;
 [[m,m,1,1],[W-m,m,-1,1],[m,H-m,1,-1],[W-m,H-m,-1,-1]].forEach(function(c){x.beginPath();x.moveTo(c[0],c[1]+c[3]*l);x.lineTo(c[0],c[1]);x.lineTo(c[0]+c[2]*l,c[1]);x.stroke();});
 x.textAlign='right';x.fillText(fig,W-m-l-8,m+4);x.textAlign='left';x.fillText(txt,m+l+8,H-m+4);x.restore();}
function drawW(p,t){cw.style.opacity=(1-sm((cl(1-document.getElementById('s2').getBoundingClientRect().bottom/innerHeight,0,1)-.05)/.7)).toFixed(3);fit(cw);var x=cw.getContext('2d');x.scale(dpr,dpr);var W=cw.clientWidth,H=cw.clientHeight;x.clearRect(0,0,W,H);x.strokeStyle='rgba(140,200,255,.7)';x.lineWidth=1;
 var n=26,y0=H*.38,h=H*.5;
 {var hg=x.createLinearGradient(0,y0-H*.1,0,y0+H*.12);hg.addColorStop(0,'rgba(120,190,255,0)');hg.addColorStop(.55,'rgba(120,190,255,.10)');hg.addColorStop(1,'rgba(120,190,255,0)');x.save();x.globalAlpha=cl(p*2.2,0,1);x.fillStyle=hg;x.fillRect(0,y0-H*.1,W,H*.22);x.restore();}
 for(var k=0;k<n;k++){var f=k/n,y=y0+f*h,amp=6+f*34,vis=Math.max(cl(p*1.6-f*.6,0,1),k===9?1:cl(1.1-Math.abs(k-9)*.12,0,1));x.globalAlpha=vis*Math.max(k===9?.9:0,.25+.6*f);x.beginPath();
  for(var X=0;X<=W;X+=8){var yy=y+Math.sin(X*.006+t*.0006*(1+f)+k*.5)*amp+Math.sin(X*.017-t*.0009+k)*amp*.35;X?x.lineTo(X,yy):x.moveTo(X,yy);}x.stroke();x.lineTo(W,H);x.lineTo(0,H);x.closePath();x.globalAlpha=vis*.85;x.fillStyle='rgba(24,78,160,.075)';x.fill();}
 /* petit bateau : flotte sur la vague k=9, suit sa pente */
 var kb=9,fb=kb/n,ab=6+fb*34,bw=function(X){return y0+fb*h+Math.sin(X*.006+t*.0006*(1+fb)+kb*.5)*ab+Math.sin(X*.017-t*.0009+kb)*ab*.35;};
 var bx=W*(.3+.4*p),by=bw(bx),sl=Math.atan2(bw(bx+14)-bw(bx-14),28),u=Math.max(14,Math.min(W,H)*.03),ba=cl((p-.12)/.2,0,1);
 if(ba>0){x.save();x.globalAlpha=.45*ba;x.strokeStyle='#fff';x.fillStyle='#fff';x.lineWidth=1;x.setLineDash([2,5]);x.beginPath();x.moveTo(bx,by+u*2.4);x.lineTo(bx,H*.93);x.stroke();x.setLineDash([]);x.font='10.5px ui-monospace,Menlo,monospace';x.fillText('x '+(bx/W).toFixed(2)+'  y '+(1-by/H).toFixed(2),bx+8,by+u*2.4+16);for(var tk2=0;tk2<=20;tk2++){var tx2=W*tk2/20;x.globalAlpha=.3*ba;x.beginPath();x.moveTo(tx2,H*.93);x.lineTo(tx2,H*.93+(tk2%5?5:10));x.stroke();}x.restore();}
 window.__bt={x:bx,y:by,s:sl,a:ba,u:u};if(0){x.save();x.setTransform(dpr,0,0,dpr,0,0);x.translate(bx,by);x.rotate(sl*.8+Math.sin(t*.0012)*.04);x.globalAlpha=ba;x.strokeStyle='#fff';x.fillStyle='#000';x.lineWidth=1.3;x.lineJoin='round';
  var P=function(arr,cl2){x.beginPath();arr.forEach(function(q,i){i?x.lineTo(q[0]*u,q[1]*u):x.moveTo(q[0]*u,q[1]*u);});if(cl2)x.closePath();};
  /* bateau en papier (origami) : coque, grande voile pliée, pli central, épaisseur de la feuille */
  P([[-3.1,0],[3.1,0],[2.1,1.25],[-2.1,1.25]],1);x.fill();x.stroke();
  P([[-2.1,1.25],[-2.1,1.4],[2.1,1.4],[2.1,1.25]],0);x.globalAlpha=ba*.5;x.stroke();x.globalAlpha=ba;
  P([[-2.5,0],[0,-3.9],[2.5,0]],1);x.fill();x.stroke();
  P([[0,-3.9],[0,0]],0);x.stroke();
  P([[0,-3.9],[2.5,0],[1.1,0]],1);x.globalAlpha=ba*.35;x.fillStyle='#fff';x.fill();x.globalAlpha=ba;x.fillStyle='#000';x.stroke();
  P([[-1.3,0],[-.55,1.25]],0);x.globalAlpha=ba*.5;x.stroke();x.globalAlpha=ba;
  P([[1.3,0],[.55,1.25]],0);x.globalAlpha=ba*.5;x.stroke();x.globalAlpha=ba;
  x.restore();}
 labFrame(x,W,H,'FIG. 02 — SURFACE / RELATIONS','t = '+(t/1000).toFixed(1)+' s');
 x.globalAlpha=1;x.setTransform(1,0,0,1,0,0);}
var MZ=[],MZK='',MZR=null,SRZ=null;function zq(px,py,k){var hb=cl((py-84)/24,0,1)*cl((cd.clientHeight-50-py)/24,0,1);if(!MZR)return hb;var dx=Math.max(MZR[0]-px,px-MZR[1],0),dy=Math.max(MZR[2]-py,py-MZR[3],0),f=cl(Math.max(dx,dy)/26,0,1);return (1-(1-f)*k)*hb;}
function mkMaze(W,H){MZK=W+'x'+H;MZ=[];var el=document.querySelector('#s4 .tx[data-a="0.62"]'),cr=cd.getBoundingClientRect(),g=P.length>1?Math.abs(P[1].x-P[0].x):60,pad=g*.9,bx0=W/2-W*.3,bx1=W/2+W*.3,by0=H/2-60,by1=H/2+60;
 if(el){var rg=document.createRange();rg.selectNodeContents(el);var rr=rg.getBoundingClientRect();if(rr.width>20){bx0=rr.left-cr.left;bx1=rr.right-cr.left;by0=rr.top-cr.top;by1=rr.bottom-cr.top;}}
 bx0-=pad;bx1+=pad;by0-=pad*.9;by1+=pad*.9;MZR=[bx0,bx1,by0,by1];
 var n=P.length,blk=[],dep=[],seen=[],sd=20260;function rnd(){sd=(sd*1664525+1013904223)>>>0;return sd/4294967296;}
 P.forEach(function(q,k){blk[k]=(q.x>bx0&&q.x<bx1&&q.y>by0&&q.y<by1)||q.y<98||q.y>H-66;seen[k]=blk[k];});
 for(var s0=0;s0<n;s0++){if(seen[s0])continue;var comp=[],stk=[s0],mx=1;seen[s0]=true;dep[s0]=0;
  while(stk.length){var c=stk[stk.length-1],q=P[c],nb=[];[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(d){var ii=q.i+d[0],jj=q.j+d[1];if(ii<0||jj<0||ii>=cols||jj>=rows)return;var k=jj*cols+ii;if(!seen[k])nb.push(k);});
   if(!nb.length){stk.pop();continue;}var nx=nb[Math.floor(rnd()*nb.length)];seen[nx]=true;dep[nx]=dep[c]+1;if(dep[nx]>mx)mx=dep[nx];comp.push({a:c,b:nx,d:dep[nx]});stk.push(nx);}
  comp.forEach(function(e){e.t=e.d/mx;e.r=rnd();MZ.push(e);});}
}
var DMS=0;
function drawD(p,t){var x=cd.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var W=cd.clientWidth,H=cd.clientHeight;x.clearRect(0,0,W,H);
 if(MZK!==cd.clientWidth+'x'+cd.clientHeight)mkMaze(cd.clientWidth,cd.clientHeight);var zk=cl((p-.56)/.06,0,1);var reveal=cl((p-.05)/.3,0,1),redp=cl((p-.25)/.3,0,1),link=cl((p-.68)/.3,0,1);
 var rcD=cd.getBoundingClientRect(),mx=MX-rcD.left,my=MY-rcD.top,insD=mx>0&&mx<W&&my>0&&my<H&&reveal>.5,RAD=Math.min(W,H)*.24;DMS+=((insD?1:0)-DMS)*.12;
 var gp=cl((p-.07)/.2,0,1);P.forEach(function(q){var on=q.red&&q.r/.42<redp,gn=q.red&&!on&&q.r/.42<gp;q.on=on;var px=q.x,py=q.y,nr=0;if(DMS>.01){var dx=px-mx,dy=py-my,d=Math.hypot(dx,dy);if(d<RAD*1.5){nr=Math.max(0,1-d/(RAD*1.5));var f=Math.pow(nr,1.2)*RAD*.62*DMS,ux=d>1?dx/d:1,uy=d>1?dy/d:0;px+=ux*f;py+=uy*f;}}q.px=px;q.py=py;q.nr=nr*DMS;x.globalAlpha=Math.max(.05,Math.min(1,(.25+.45*reveal)*(gn?1.5:1))*(1-q.nr*.55))*zq(px,py,zk);x.fillStyle=on?'#e24b4a':gn?'#2dffa0':'#fff';x.beginPath();x.arc(px,py,((on||gn)?3.2:1.6)*(1-q.nr*.35),0,7);x.fill();});
 if(DMS>.01){x.strokeStyle='#fff';x.lineWidth=1;x.globalAlpha=.3*DMS;x.setLineDash([2,6]);x.beginPath();x.arc(mx,my,RAD*.62,0,7);x.stroke();x.setLineDash([]);x.globalAlpha=.85*DMS;x.fillStyle='#fff';x.beginPath();x.arc(mx,my,3,0,7);x.fill();}
 if(MZK!==W+'x'+H)mkMaze(W,H);
 if(p>.6){var mzp=cl((p-.62)/.34,0,1);x.lineWidth=1;x.strokeStyle='#fff';x.globalAlpha=.6;x.beginPath();MZ.forEach(function(e){var pr=cl((mzp*1.35-e.t)/.3,0,1);if(pr<=0)return;var a=P[e.a],b=P[e.b];x.moveTo(a.x,a.y);x.lineTo(a.x+(b.x-a.x)*pr,a.y+(b.y-a.y)*pr);});x.stroke();}
 {x.save();var rx=Math.min(W*.42,620),ry=Math.min(H*.22,170);x.translate(W/2,H/2);x.scale(1,ry/rx);var gr=x.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,'rgba(0,0,0,.94)');gr.addColorStop(.55,'rgba(0,0,0,.88)');gr.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=1-cl((p-.56)/.06,0,1);x.fillStyle=gr;x.beginPath();x.arc(0,0,rx,0,7);x.fill();x.restore();}
 {var tot=P.length,rc=P.filter(function(q){return q.on;}).length;if(reveal<1&&reveal>0){x.globalAlpha=.5;x.strokeStyle='#fff';x.lineWidth=1;x.beginPath();x.moveTo(W*reveal,0);x.lineTo(W*reveal,H);x.stroke();}labFrame(x,W,H,'FIG. 04 — SAMPLE, LONELINESS','n = '+tot+'    '+(rc/tot*100).toFixed(1)+' %');}
 x.globalAlpha=1;}
/* pile de feuilles : se déplie en éventail */
var st=document.getElementById('stack')||document.createElementNS('http://www.w3.org/2000/svg','svg'),pl=[];
for(var i=0;i<9;i++){var pa=document.createElementNS('http://www.w3.org/2000/svg','path');st.appendChild(pa);pl.push(pa);}
function drawS(p){var a=cl((p-.1)/.8,0,1);pl.forEach(function(pa,i){var f=i/8,ang=a*(-8-52*f)*Math.PI/180,cx=150,cy=300-i*9*(1-a*.5);
 function pt(x,y){var X=x*Math.cos(ang)-y*Math.sin(ang),Y=x*Math.sin(ang)+y*Math.cos(ang);return (cx+X)+','+(cy+Y*.5-a*f*60);}
 pa.setAttribute('d','M'+pt(-90,-50)+'L'+pt(90,-50)+'L'+pt(90,50)+'L'+pt(-90,50)+'Z');pa.style.opacity=.35+.65*f;});}
/* grille photos */
var N=0;var gr=document.createElement('div');
for(var i=0;i<N;i++){var e=document.createElement('i');e.style.backgroundImage='url('+IMG[i%IMG.length]+')';gr.appendChild(e);}
var tiles=[].slice.call(gr.children);
var big=document.getElementById('webig'),ls=[].slice.call(document.querySelectorAll('#ls li'));

/* bateau en papier 3D (three.js) */
var B3=null;
function mk3(){if(!window.THREE||B3)return;var T=THREE,c=document.getElementById('c3');
 var r=new T.WebGLRenderer({canvas:c,alpha:true,antialias:true});r.setPixelRatio(dpr);r.setClearColor(0,0);
 var sc=new T.Scene(),cam=new T.OrthographicCamera(0,1,0,1,-2000,2000),g=new T.Group();
 var V=function(a){return new T.Vector3(a[0],a[1],a[2]);};
 var Y=function(a){return [a[0],-a[1],a[2]];};
 var tris=[],q=function(a,b,c2,d){tris.push([a,b,c2],[a,c2,d]);};
 var A=[-2.2,0,0],Bk=[2.2,0,0],R1p=[-2.4,1.2,.9],R2p=[2.4,1.2,.9],R1m=[-2.4,1.2,-.9],R2m=[2.4,1.2,-.9];
 q(A,Bk,R2p,R1p);q(A,R1m,R2m,Bk);tris.push([A,R1p,R1m],[Bk,R2m,R2p]);
 var M1=[0,1.2,.35],M2=[0,1.2,-.35],L=[-2.6,1.2,0],Rr=[2.6,1.2,0],Ap=[0,4.3,0];
 tris.push([L,Ap,M1],[Ap,Rr,M1],[Ap,L,M2],[Rr,Ap,M2]);
 var pos=[];tris.forEach(function(t){t.forEach(function(p){pos.push(p[0],-p[1],p[2]);});});
 var geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.computeVertexNormals();
 var mat=new T.MeshLambertMaterial({color:0xfaf8f2,side:T.DoubleSide,flatShading:true,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});
 g.add(new T.Mesh(geo,mat));
 var ed=new T.LineSegments(new T.EdgesGeometry(geo,12),new T.LineBasicMaterial({color:0x8a8780}));g.add(ed);
 /* pli central en gris, comme les feuilles de la présentation */
 sc.add(new T.AmbientLight(0xffffff,1.25));var dl=new T.DirectionalLight(0xffffff,1.1);dl.position.set(-3,5,6);sc.add(dl);sc.add(g);B3={r:r,sc:sc,cam:cam,g:g,c:c,ed:ed};}
function draw3(t){if(!B3)mk3();if(!B3)return;var b=window.__bt,c=B3.c,W=c.clientWidth,H=c.clientHeight;
 if(!b||b.a<=0){B3.c.style.opacity=0;return;}B3.c.style.opacity=b.a;
 if(c.width!==Math.round(W*dpr)||c.height!==Math.round(H*dpr)){B3.r.setSize(W,H,false);}
 var cam=B3.cam;cam.left=0;cam.right=W;cam.top=0;cam.bottom=H;cam.updateProjectionMatrix();
 var shB=sm(cl(1-document.getElementById('s2').getBoundingClientRect().bottom/innerHeight,0,1)/.55);if(shB>=1){B3.c.style.opacity=0;return;}var u=Math.max(.01,b.u*1.15*(1-shB)),g=B3.g;g.scale.set(u,u,u);g.position.set(b.x,b.y-.45*u,0);
 /* rotation lente, en 3D, et tangage selon la vague */
 g.rotation.set(.38+Math.sin(t*.0009)*.04,t*.00035+.6,b.s*.7+Math.sin(t*.0012)*.05,'YXZ');
 B3.r.render(B3.sc,cam);}

var ct=document.getElementById('ct'),cr=document.getElementById('cr'),DOTS=[];for(var i=0;i<90;i++)DOTS.push([Math.random(),Math.random(),Math.random()]);
var RC=[];
var K2T=null;
function drawT0(p,t){fit(ct);var x=ct.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var W=ct.clientWidth,H=ct.clientHeight;x.clearRect(0,0,W,H);
 var k=p<.34?0:p<.67?1:2,lp=k===0?cl((p-.12)/.2,0,1):cl((p-k*.335-.03)/.28,0,1),nar=W<1000||W/H<1.1,cx=nar?W*.5:W*.68,cy=nar?H*.6:H*.5,R=nar?Math.min(W*.34,H*.2):Math.min(W,H)*.26;x.strokeStyle='#fff';x.fillStyle='#fff';x.lineWidth=1;
 if(k===2){if(K2T===null)K2T=t;lp=sm((t-K2T)/2400);}else K2T=null;
 if(k===0){var sw=(t*.0011)%6.2832,rr0=[R,R*.62,R*.3];rr0.forEach(function(r,q){x.globalAlpha=(.75-q*.2)*lp;x.lineWidth=q?1:1.4;x.beginPath();x.arc(cx,cy,r,0,7);x.stroke();});x.lineWidth=1;
  var pu=((t*.0004)%1);x.globalAlpha=(1-pu)*.5*lp;x.beginPath();x.arc(cx,cy,R*pu,0,7);x.stroke();
  for(var wi=0;wi<44;wi++){var wa=sw-wi*.022;x.globalAlpha=(1-wi/44)*.55*lp;x.lineWidth=1.6;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(wa)*R,cy+Math.sin(wa)*R);x.stroke();}x.lineWidth=1;
  x.globalAlpha=lp;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(sw)*R,cy+Math.sin(sw)*R);x.stroke();
  ATT.forEach(function(q){var d=((sw-q[0])%6.2832+6.2832)%6.2832,lit=Math.max(0,1-d/2.6),px=cx+Math.cos(q[0])*R*q[1],py=cy+Math.sin(q[0])*R*q[1];x.globalAlpha=lp*(.12+.88*lit);x.beginPath();x.arc(px,py,1.8+q[2]*2+lit*2.2,0,7);x.fill();});
  x.globalAlpha=lp;x.beginPath();x.arc(cx+Math.cos(sw)*R,cy+Math.sin(sw)*R,5,0,7);x.fill();
  var rcA=ct.getBoundingClientRect(),amx=MX-rcA.left-cx,amy=MY-rcA.top-cy,ad=Math.hypot(amx,amy),ain=ad<R*1.2&&ad>6&&MX>rcA.left&&MY>rcA.top&&MX<rcA.right&&MY<rcA.bottom;AF+=((ain?1:0)-AF)*.16;
  if(AF>.02){var aa2=Math.atan2(amy,amx),col='hsl('+((aa2*57.3+360)%360).toFixed(0)+',92%68%)',bl=Math.min(ad,R);x.save();x.strokeStyle=col;x.fillStyle=col;
   for(var bi=0;bi<26;bi++){var ba=aa2-bi*.018;x.globalAlpha=(1-bi/26)*.5*AF*lp;x.lineWidth=1.4;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(ba)*bl,cy+Math.sin(ba)*bl);x.stroke();}
   x.globalAlpha=AF*lp;x.lineWidth=2;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(aa2)*bl,cy+Math.sin(aa2)*bl);x.stroke();
   ATT.forEach(function(q){var dd=Math.abs(Math.atan2(Math.sin(q[0]-aa2),Math.cos(q[0]-aa2)));if(dd<.34){var px=cx+Math.cos(q[0])*R*q[1],py=cy+Math.sin(q[0])*R*q[1],g=1-dd/.34;x.globalAlpha=AF*g;x.beginPath();x.arc(px,py,3+q[2]*3+g*3,0,7);x.fill();x.globalAlpha=AF*g*.6;x.lineWidth=1;x.beginPath();x.arc(px,py,9+g*10+((t*.01)%8),0,7);x.stroke();}});
   x.globalAlpha=AF;x.beginPath();x.arc(cx+Math.cos(aa2)*bl,cy+Math.sin(aa2)*bl,5.5,0,7);x.fill();x.font='600 11px ui-monospace,Menlo,monospace';x.fillText('FOCUS '+((aa2*57.3+360)%360).toFixed(0)+'°',cx+Math.cos(aa2)*bl+12,cy+Math.sin(aa2)*bl-10);x.restore();}}
 if(k===1){var PT=DOTS.map(function(d,i){var an=d[0]*6.2832+t*.00018*(.4+d[2])*(i%2?1:-1),rd=R*1.25*Math.sqrt(d[1]);return [cx+Math.cos(an)*rd*1.15,cy+Math.sin(an)*rd*.82,d,i];});
  x.lineWidth=1;for(var u=0;u<PT.length;u++)for(var v=u+1;v<PT.length;v++){var dd=Math.hypot(PT[u][0]-PT[v][0],PT[u][1]-PT[v][1]);if(dd<R*.4){x.globalAlpha=lp*(1-dd/(R*.4))*.7;x.beginPath();x.moveTo(PT[u][0],PT[u][1]);x.lineTo(PT[v][0],PT[v][1]);x.stroke();}}
  PT.forEach(function(q){var gl=.5+.5*Math.sin(t*.002+q[3]*1.9);x.globalAlpha=lp*(.45+.55*gl);x.beginPath();x.arc(q[0],q[1],1.8+q[2][2]*2.6,0,7);x.fill();});
  var rc2=ct.getBoundingClientRect(),pmx=MX-rc2.left,pmy=MY-rc2.top;
  if(pmx>0&&pmx<W&&pmy>0&&pmy<H&&lp>.2&&(t-POPT>170)&&Math.hypot(pmx-POPX,pmy-POPY)>46){POPT=t;POPX=pmx;POPY=pmy;POPH=(POPH+47)%360;POPS.push({x:pmx,y:pmy,t:t,h:POPH,l:POPL[Math.floor(Math.random()*POPL.length)]});if(POPS.length>22)POPS.shift();}
  POPS=POPS.filter(function(o){return t-o.t<2400;});
  POPS.forEach(function(o){var a=(t-o.t)/2400,e=1-Math.pow(1-Math.min(1,a*2.2),3),col='hsl('+o.h+',90%68%)';x.save();x.strokeStyle=col;x.fillStyle=col;
   PT.map(function(q){return [Math.hypot(q[0]-o.x,q[1]-o.y),q];}).sort(function(u,v){return u[0]-v[0];}).slice(0,3).forEach(function(u){x.globalAlpha=(1-a)*.7*Math.min(1,e*1.5);x.lineWidth=1;x.beginPath();x.moveTo(o.x,o.y);x.lineTo(o.x+(u[1][0]-o.x)*e,o.y+(u[1][1]-o.y)*e);x.stroke();});
   x.globalAlpha=(1-a)*.9;x.lineWidth=1.4;x.beginPath();x.arc(o.x,o.y,6+e*34,0,7);x.stroke();
   x.globalAlpha=(1-a);for(var sp=0;sp<8;sp++){var an=sp*.785+o.h,r1=8+e*26,r2=r1+7*(1-a);x.beginPath();x.moveTo(o.x+Math.cos(an)*r1,o.y+Math.sin(an)*r1);x.lineTo(o.x+Math.cos(an)*r2,o.y+Math.sin(an)*r2);x.stroke();}
   var sc=Math.min(1,a*6),bo=1+.35*Math.sin(Math.min(1,a*6)*3.14159);x.globalAlpha=Math.min(1,a*8)*(1-Math.pow(a,2.2));x.font='600 '+(11*bo).toFixed(1)+'px ui-monospace,Menlo,monospace';x.textAlign='center';x.fillText('+ '+o.l,o.x,o.y-18-e*12);x.beginPath();x.arc(o.x,o.y,3.4*bo,0,7);x.fill();x.restore();});
  x.globalAlpha=1;x.textAlign='start';}
 if(k===2){var br=1+.22*Math.sin(t*.0009);var rcC=ct.getBoundingClientRect(),cmx=MX-rcC.left,cmy=MY-rcC.top,hov=-1,hb=1e9;if(cmx>0&&cmx<W&&cmy>0&&cmy<H&&lp>.3){for(var hi=0;hi<9;hi++){var hy=cy+R*.9-hi*R*.22*br,hd=Math.abs(cmy-hy),hx=R*(1-hi/8*.35)*1.1;if(hd<R*.13&&Math.abs(cmx-cx)<hx&&hd<hb){hb=hd;hov=hi;}}}
  if(hov<0&&lp>.55)hov=Math.floor((t/1150)%9);for(var li=0;li<9;li++){var tg=hov<0?0:-(li-hov)*R*.06;LY[li]+=(tg-LY[li])*.2;}
  for(var i=0;i<9;i++){var f=i/8,vis=cl(lp*1.5-f*.5,0,1),rx=R*(1-f*.35)*1.05*(.72+.28*vis),ry=R*.26*(1-f*.35)*(.72+.28*vis),yy=cy+R*.9-i*R*.22*br*(.12+.88*lp)+LY[i],ox=Math.sin(t*.0007+i*.9)*R*.09,hl=(i===hov),hc='hsl('+(i*42)+',92%68%)',ph=((t*.0012)%11)-i,lit=Math.max(0,1-Math.abs(ph-1)/1.6);
  x.globalAlpha=vis;x.fillStyle='#000';x.beginPath();x.ellipse(cx+ox,yy,rx,ry,0,0,7);x.fill();
  x.fillStyle='#fff';x.strokeStyle=hl?hc:'#fff';x.globalAlpha=hl?vis:(.5+.35*f+.5*lit)*vis;x.lineWidth=hl?2.2:1.1+lit*.9;x.beginPath();x.ellipse(cx+ox,yy,rx,ry,0,0,7);x.stroke();if(hl){x.fillStyle=hc;x.font='600 11px ui-monospace,Menlo,monospace';x.fillText(['CHILDHOOD','HEARTBREAK','DEATH','LOSS','LOVE','JOY','FAILURE','FRIENDSHIP','ENCOUNTERS'][i],Math.min(cx+ox+rx+14,W-135),yy+4);x.fillStyle='#fff';}x.strokeStyle='#fff';
  var an=t*(.0008+i*.00014)*(i%2?1:-1)+i;x.globalAlpha=vis;x.beginPath();x.arc(cx+ox+Math.cos(an)*rx,yy+Math.sin(an)*ry,2.6+lit*1.6,0,7);x.fill();}x.lineWidth=1;}
 {var F=['FIG. 03.1 — ATTENTION','FIG. 03.2 — IMAGINATION','FIG. 03.3 — COMPONENTS'],V=['θ = '+(((t*.0011)%6.283)*57.3).toFixed(0)+'°','n = '+DOTS.length,'layers = 9'];if(k===0){x.globalAlpha=.5*lp;for(var i2=0;i2<48;i2++){var aa=i2/48*6.283;x.beginPath();x.moveTo(cx+Math.cos(aa)*R,cy+Math.sin(aa)*R);x.lineTo(cx+Math.cos(aa)*(R+(i2%4?5:11)),cy+Math.sin(aa)*(R+(i2%4?5:11)));x.stroke();}}labFrame(x,W,H,F[k],V[k]);}
 x.globalAlpha=1;}
var ATT=[[-.55,.58,.4]];for(var ai=0;ai<45;ai++)ATT.push([Math.random()*6.2832,.12+Math.sqrt(Math.random())*.86,Math.random()]);
var AF=0,LY=[0,0,0,0,0,0,0,0,0],POPS=[],POPT=0,POPX=-99,POPY=-99,POPH=0,POPL=['workshop','shared meal','exhibition','a walk','game night','concert','open table','swap','new encounter','garden day'];
var RN=null,RL=null,MX=-1e4,MY=-1e4,MS=0;
addEventListener('mousemove',function(e){MX=e.clientX;MY=e.clientY;req();},{passive:true});document.addEventListener('mouseleave',function(){MX=-1e4;MY=-1e4;});addEventListener('touchmove',function(e){var q=e.touches[0];if(q){MX=q.clientX;MY=q.clientY;req();}},{passive:true});addEventListener('touchend',function(){MX=-1e4;MY=-1e4;});
var RNK='';function mkR(){var W0=cr.clientWidth||1440,H0=cr.clientHeight||800,NN=Math.max(30,Math.min(60,Math.round(46*Math.sqrt(W0*H0/1152000)))),AS=W0/H0;RNK=W0+'x'+H0;RN=[];for(var i=0;i<NN;i++)RN.push([.05+Math.random()*.9,.08+Math.random()*.84,Math.random()*6.28,.6+Math.random()]);RL=[];for(var i=0;i<RN.length;i++){var d=[];for(var j=0;j<RN.length;j++)if(j!==i)d.push([Math.hypot((RN[i][0]-RN[j][0])*AS,RN[i][1]-RN[j][1]),j]);d.sort(function(u,v){return u[0]-v[0];});for(var k=0;k<2;k++){var j=d[k][1];if(!RL.some(function(l){return l[0]===j&&l[1]===i;}))RL.push([i,j,Math.random()]);}}}
function drawR(p,t){if(!cr)return;if(!RN||RNK!==cr.clientWidth+'x'+cr.clientHeight)mkR();fit(cr);var x=cr.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var W=cr.clientWidth,H=cr.clientHeight;x.clearRect(0,0,W,H);
 var mp0=(typeof P!=='undefined'&&P&&P.length)?cl(p/.4,0,1):1,mpe=mp0*mp0*mp0*(mp0*(mp0*6-15)+10),vis=cl(.7+p*3,0,1)*mpe,lk=cl((p-.04)/.5,0,1),ch=cl(1-(p-.24)/.18,0,1)*mpe,hh=function(a){var z=Math.sin(a*127.1)*43758.5453;return z-Math.floor(z);},pos=RN.map(function(n,i){var bx=(n[0]+Math.sin(t*.0003*n[3]+n[2])*.012)*W,by=(n[1]+Math.cos(t*.00026*n[3]+n[2]*1.3)*.016)*H;if(ch>0){var per=2800+hh(i*3.1)*2400,k=Math.floor(t/per+i*7),fr=cl((t/per+i*7-k)*1.1,0,1),e=fr*fr*(3-2*fr),ax=(hh(k*1.7+i)-.5),ay=(hh(k*2.3+i*5)-.5),bx0=(hh((k-1)*1.7+i)-.5),by0=(hh((k-1)*2.3+i*5)-.5),jx=(bx0+(ax-bx0)*e)*.09*W,jy=(by0+(ay-by0)*e)*.09*H,tr=Math.sin(t*.0017+i*4)*2.5+Math.sin(t*.0026+i)*1.5;bx+=(jx+tr)*ch;by+=(jy+Math.cos(t*.002+i*2)*2.5*ch)*1;}return [bx,by];});
 var rc=cr.getBoundingClientRect(),mx=MX-rc.left,my=MY-rc.top,inside=mx>0&&mx<W&&my>0&&my<H,RAD=Math.min(W,H)*.3;MS+=((inside?1:0)-MS)*.12;
 pos=pos.map(function(q){if(!inside)return q;var dx=mx-q[0],dy=my-q[1],d=Math.hypot(dx,dy);if(d<RAD&&d>1){var f=Math.min(Math.pow(1-d/RAD,1.6)*RAD*.5,Math.max(0,d-30))*(1-2*ch),sw2=Math.sin(t*.003+q[0]*.02)*8*(1-d/RAD)+Math.sin(t*.004+q[1])*6*ch*(1-d/RAD);return [q[0]+dx/d*f-dy/d*sw2,q[1]+dy/d*f+dx/d*sw2];}return q;});
 if(mp0<1){var ck=W+'x'+H+'x'+P.length;if(window.__csk!==ck){window.__csk=ck;var used={};window.__cs={};RN.forEach(function(n,i){var bx=n[0]*W,by=n[1]*H,bi=-1,bd=1e9;P.forEach(function(q,qi){if(used[qi])return;var d=Math.hypot(q.x-bx,q.y-by);if(d<bd){bd=d;bi=qi;}});used[bi]=1;window.__cs[bi]=i;});}var cs=window.__cs;
  var Rd=P.filter(function(q){return q.on;}),Ld=Math.min(Rd.length,140),la2=.8*(1-cl(mp0*2.5,0,1));
  if(MZK!==cd.clientWidth+'x'+cd.clientHeight)mkMaze(cd.clientWidth,cd.clientHeight);
  if(mp0<.95){x.lineWidth=1;x.strokeStyle='#fff';MZ.forEach(function(e){var fa=1-cl((mp0-e.r*.45)/.45,0,1);if(fa<=0)return;x.globalAlpha=.6*fa*fa;var a1=P[e.a],b1=P[e.b];x.beginPath();x.moveTo(a1.x,a1.y);x.lineTo(b1.x,b1.y);x.stroke();});}
  P.forEach(function(q,qi){var ni=cs[qi],px=q.x,py=q.y,al=.7*(1-cl(mp0*1.7,0,1)),rr=q.on?3.2:1.6;if(ni!==undefined){var tg=pos[ni];px=q.x+(tg[0]-q.x)*mpe;py=q.y+(tg[1]-q.y)*mpe;al=.7+.2*mpe;rr=rr+(2.6-rr)*mpe;}x.globalAlpha=al*zq(px,py,1);x.fillStyle=q.on?'#e24b4a':'#fff';x.beginPath();x.arc(px,py,rr,0,7);x.fill();});
  x.save();var erx=Math.min(W*.42,620),ery=Math.min(H*.22,170);x.translate(W/2,H/2);x.scale(1,ery/erx);var eg=x.createRadialGradient(0,0,0,0,0,erx);eg.addColorStop(0,'rgba(0,0,0,.94)');eg.addColorStop(.55,'rgba(0,0,0,.88)');eg.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=0;x.fillStyle=eg;x.beginPath();x.arc(0,0,erx,0,7);x.fill();x.restore();}
 var cnt=0;x.lineWidth=1;
 RL.forEach(function(l){var g=cl(lk*1.7-l[2]*.7,0,1),li=RL.indexOf(l),ks=Math.floor(t/(1500+hh(li)*1700)+li*3),on=hh(ks*1.3+li)>.62?1:0,fm=1;if(ch>0){g=Math.max(g,ch);var tt2=((t/(1500+hh(li)*1700)+li*3)-ks),env=Math.min(1,tt2*3,(1-tt2)*3);fm=1-ch+ch*on*env*.7;}if(g<=0||fm<=.01)return;var A=pos[l[0]],B=pos[l[1]],ex=A[0]+(B[0]-A[0])*g,ey=A[1]+(B[1]-A[1])*g;var nr=inside?Math.max(0,1-Math.hypot((A[0]+B[0])/2-mx,(A[1]+B[1])/2-my)/RAD):0;x.globalAlpha=(.34+.6*nr*MS)*vis*fm;x.lineWidth=1+nr*MS*.8;x.strokeStyle='#fff';x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(ex,ey);x.stroke();x.lineWidth=1;if(g>=1){cnt++;var f=(t*.00022+l[2]*7)%1;x.globalAlpha=.8*vis;x.fillStyle='#fff';x.beginPath();x.arc(A[0]+(B[0]-A[0])*f,A[1]+(B[1]-A[1])*f,1.5,0,7);x.fill();}});
 var linked={};RL.forEach(function(l){if(cl(lk*1.7-l[2]*.7,0,1)>=1){linked[l[0]]=1;linked[l[1]]=1;}});
 pos.forEach(function(q,i){var on=linked[i];x.globalAlpha=(on?.9:.7)*vis;x.fillStyle=on?'#fff':'#e24b4a';x.beginPath();x.arc(q[0],q[1],on?2.6:2.6,0,7);x.fill();});
 if(MS>.02){var gg=x.createRadialGradient(mx,my,0,mx,my,RAD);gg.addColorStop(0,'rgba(255,255,255,.06)');gg.addColorStop(1,'rgba(255,255,255,0)');x.globalAlpha=MS;x.fillStyle=gg;x.beginPath();x.arc(mx,my,RAD,0,7);x.fill();x.fillStyle='#fff';var hl=0;pos.forEach(function(q){var d=Math.hypot(mx-q[0],my-q[1]);if(d<RAD*.8){hl++;x.globalAlpha=(1-d/RAD)*.5*MS;x.lineWidth=1;x.beginPath();x.moveTo(mx,my);x.lineTo(q[0],q[1]);x.stroke();}});x.globalAlpha=.8*MS;x.beginPath();x.arc(mx,my,4,0,7);x.fill();x.globalAlpha=.16*MS;x.beginPath();x.arc(mx,my,RAD,0,7);x.setLineDash([2,6]);x.stroke();x.setLineDash([]);x.lineWidth=1;}
 {var ons=document.querySelectorAll('#sr .tx.on');if(ons.length){var rg2=document.createRange();rg2.selectNodeContents(ons[0]);var r2=rg2.getBoundingClientRect(),c2=cr.getBoundingClientRect();if(r2.width>10)SRZ=[r2.left-c2.left-22,r2.right-c2.left+22,r2.top-c2.top-18,r2.bottom-c2.top+18];}
  if(SRZ){x.save();x.globalCompositeOperation='destination-out';x.shadowColor='#000';x.shadowBlur=26*dpr;x.shadowOffsetX=20000*dpr;x.fillStyle='#000';x.fillRect(SRZ[0]-20000,SRZ[2],SRZ[1]-SRZ[0],SRZ[3]-SRZ[2]);x.fillRect(SRZ[0]-20000,SRZ[2],SRZ[1]-SRZ[0],SRZ[3]-SRZ[2]);x.restore();}}
 labFrame(x,W,H,'FIG. 05 — NETWORK, RELATIONS','nodes = '+RN.length+'    links = '+cnt);x.globalAlpha=1;}

var CRK=[];for(var cb=0;cb<10;cb++){var ca=cb/10*6.2832+Math.random()*.5,cc=[[0,0]],cx0=0,cy0=0;for(var cs=0;cs<7;cs++){ca+=(Math.random()-.5)*.9;var cl2=.12+Math.random()*.16;cx0+=Math.cos(ca)*cl2;cy0+=Math.sin(ca)*cl2;cc.push([cx0,cy0]);}CRK.push(cc);}
var ci=document.getElementById('ci'),TH=0,SPEC=['#ff5a5a','#ff9f1c','#ffe14d','#4ade80','#38bdf8','#6e7bff','#c084fc'];
function drawI(p,t){if(!ci)return;fit(ci);var x=ci.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var W=ci.clientWidth,H=ci.clientHeight;x.clearRect(0,0,W,H);
 var cx=W*.5,cy=H*.68,s=Math.min(W*.17,H*.2),A=[cx,cy-s],B=[cx-s*.866,cy+s*.5],C=[cx+s*.866,cy+s*.5],M1=[(A[0]+B[0])/2,(A[1]+B[1])/2],M2=[(A[0]+C[0])/2,(A[1]+C[1])/2];
 var rc=ci.getBoundingClientRect(),my=MY-rc.top,mx=MX-rc.left,ins=mx>0&&mx<W&&my>0&&my<H,tg=ins?cl((my/H-.62)*1.3,-.5,.5):Math.sin(t*.0007)*.28;TH+=(tg-TH)*.08;
 var v=cl((p-.14)*4.5,0,1),v2=cl((p-.22)*3.5,0,1);
 if(p<.4){if(!RN)mkR();var me=cl(p/.28,0,1),ee=me*me*(3-2*me),la=1-cl(me*2.2,0,1),na=1-cl((p-.24)/.12,0,1),LA=Math.hypot(B[0]-A[0],B[1]-A[1]),LB=Math.hypot(C[0]-B[0],C[1]-B[1]),LC=Math.hypot(A[0]-C[0],A[1]-C[1]),LT=LA+LB+LC,np=RN.map(function(n,i){var nx=(n[0]+Math.sin(t*.0003*n[3]+n[2])*.012)*W,ny=(n[1]+Math.cos(t*.00026*n[3]+n[2]*1.3)*.016)*H,d=((i*.618034)%1)*LT,tx,ty,u;if(d<LA){u=d/LA;tx=A[0]+(B[0]-A[0])*u;ty=A[1]+(B[1]-A[1])*u;}else if(d<LA+LB){u=(d-LA)/LB;tx=B[0]+(C[0]-B[0])*u;ty=B[1]+(C[1]-B[1])*u;}else{u=(d-LA-LB)/LC;tx=C[0]+(A[0]-C[0])*u;ty=C[1]+(A[1]-C[1])*u;}return [nx+(tx-nx)*ee,ny+(ty-ny)*ee];});
  x.strokeStyle='#fff';x.lineWidth=1;if(la>0){x.globalAlpha=.34*la;RL.forEach(function(l){var a1=np[l[0]],b1=np[l[1]];x.beginPath();x.moveTo(a1[0],a1[1]);x.lineTo(b1[0],b1[1]);x.stroke();});}
  if(na>0){x.fillStyle='#fff';x.globalAlpha=.9*na;np.forEach(function(q){x.beginPath();x.arc(q[0],q[1],2.6-ee*.8,0,7);x.fill();});}}
 var CK=cl((p-.62)/.38,0,1),KX=cx,KY=(M1[1]+M2[1])/2;x.save();
 x.lineWidth=1;x.strokeStyle='#fff';x.fillStyle='rgba(255,255,255,.035)';x.globalAlpha=.85*v*(CK>0?0:1);x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(B[0],B[1]);x.lineTo(C[0],C[1]);x.closePath();x.fill();x.stroke();
 var sy=M1[1]+M1[0]*Math.tan(TH);x.globalCompositeOperation='lighter';x.lineCap='round';
 var bx=M1[0]*v,by=sy+(M1[1]-sy)*v;[[14,.07],[6,.16],[2.2,.95]].forEach(function(bw){x.globalAlpha=bw[1]*v*(1-cl(CK*3.5,0,1));x.lineWidth=bw[0];x.strokeStyle='#fff';x.beginPath();x.moveTo(0,sy);x.lineTo(bx,by);x.stroke();});
 if(v2>0){x.globalAlpha=.55*v2*(1-cl(CK*3.5,0,1));x.lineWidth=1.6;x.beginPath();x.moveTo(M1[0],M1[1]);x.lineTo(M1[0]+(M2[0]-M1[0])*v2,M1[1]+(M2[1]-M1[1])*v2);x.stroke();}
 var v3=cl((p-.22)*5,0,1);
 if(v3>0){var base=.12-TH*.75,spread=.05+.025*Math.sin(t*.0009+1)+Math.abs(TH)*.05,fo=1-cl(CK*3.5,0,1);SPEC.forEach(function(c,k){var a=base+(k-3)*spread,dist=(W-M2[0])/Math.cos(a)*1.02,L=dist*v3,hw=spread*.62,rgb=c.replace('#',''),R2=parseInt(rgb.substr(0,2),16),G2=parseInt(rgb.substr(2,2),16),B2=parseInt(rgb.substr(4,2),16);
  [[2.2,.04],[1.8,.06],[1.45,.08],[1.1,.1],[.8,.14],[.5,.2],[.25,.3]].forEach(function(ly){var h2=hw*ly[0],a1=a-h2,a2=a+h2,ex=M2[0]+Math.cos(a)*L,ey=M2[1]+Math.sin(a)*L,gg=x.createLinearGradient(M2[0],M2[1],ex,ey);gg.addColorStop(0,'rgba('+R2+','+G2+','+B2+','+(ly[1]*1.5*fo)+')');gg.addColorStop(.6,'rgba('+R2+','+G2+','+B2+','+(ly[1]*.8*fo)+')');gg.addColorStop(1,'rgba('+R2+','+G2+','+B2+','+(ly[1]*.55*fo)+')');x.globalAlpha=v3;x.fillStyle=gg;x.beginPath();x.moveTo(M2[0],M2[1]);x.lineTo(M2[0]+Math.cos(a1)*L/Math.cos(a1-a),M2[1]+Math.sin(a1)*L/Math.cos(a1-a));x.lineTo(M2[0]+Math.cos(a2)*L/Math.cos(a2-a),M2[1]+Math.sin(a2)*L/Math.cos(a2-a));x.closePath();x.fill();});});
  var hg=x.createRadialGradient(M2[0],M2[1],0,M2[0],M2[1],s*.38);hg.addColorStop(0,'rgba(255,255,255,'+(.75*fo*v3)+')');hg.addColorStop(1,'rgba(255,255,255,0)');x.globalAlpha=1;x.fillStyle=hg;x.beginPath();x.arc(M2[0],M2[1],s*.38,0,7);x.fill();}
 x.globalCompositeOperation='source-over';x.lineWidth=1;x.strokeStyle='#fff';x.fillStyle='#fff';
 x.globalAlpha=.55*v;x.beginPath();x.arc(M1[0],M1[1],34,Math.PI-Math.abs(TH)*0+0,Math.PI+TH,TH<0);x.stroke();x.font='10.5px ui-monospace,Menlo,monospace';x.textAlign='right';x.fillText('θ = '+(TH*57.3).toFixed(0)+'°',M1[0]-44,M1[1]-8);x.textAlign='start';

 if(CK>0){var go=cl(CK/.3,0,1),ge2=go*go*(3-2*go),gap=s*.3*ge2,wt=cl((CK-.12)/.28,0,1),gw=cl((CK-.42)/.58,0,1),sc=1+Math.pow(gw,1.8)*2.2,dm=[cx,B[1]],fc=Math.round(18+237*wt);
  x.save();x.translate(KX,KY);x.scale(sc,sc);x.translate(-KX,-KY);x.globalAlpha=1;x.lineJoin='miter';
  x.shadowColor='#fff';x.shadowBlur=26*ge2;x.fillStyle='#fff';x.fillRect(cx-gap*.5,A[1]+(gap>0?2:0),gap,B[1]-A[1]);x.shadowBlur=0;
  x.fillStyle='rgb('+fc+','+fc+','+fc+')';x.strokeStyle='#fff';x.lineWidth=1/sc*1.2;
  x.beginPath();x.moveTo(A[0]-gap*.5,A[1]);x.lineTo(B[0]-gap*.5,B[1]);x.lineTo(dm[0]-gap*.5,dm[1]);x.closePath();x.fill();x.stroke();
  x.beginPath();x.moveTo(A[0]+gap*.5,A[1]);x.lineTo(dm[0]+gap*.5,dm[1]);x.lineTo(C[0]+gap*.5,C[1]);x.closePath();x.fill();x.stroke();
  x.restore();if(gw>0){x.globalAlpha=1;x.fillStyle='#fff';x.beginPath();x.arc(KX,KY,Math.pow(gw,1.5)*Math.hypot(W,H)*.95,0,7);x.fill();}if(CK>.985){x.globalAlpha=1;x.fillStyle='#fff';x.fillRect(-10,-10,W+20,H+20);}}
 x.restore();x.globalAlpha=1;
 if(CK<.25) labFrame(x,W,H,'FIG. 06 — ANGLE, DISPERSION','θ = '+(TH*57.3).toFixed(0)+'°');x.globalAlpha=1;}
var cl2=document.getElementById('cl'),wq=document.getElementById('wq'),wsE=document.getElementById('idc'),wrE=document.getElementById('wr');



var LR=0,LRt=0,SLT=null,SLD=0,LDUR=6500,LT=[].slice.call(document.querySelectorAll('#wq .lt')),GL=null,GK='',SPK=[],LST=0,SS=3;
function glyphLoops(ch,w,h,asc,font){var c=document.createElement('canvas'),pd=2,cw=Math.ceil(w*SS)+pd*2,chh=Math.ceil(h*SS)+pd*2;c.width=cw;c.height=chh;var o=c.getContext('2d');o.font=font;o.fillStyle='#000';o.textBaseline='alphabetic';o.fillText(ch,pd,pd+asc*SS);var d=o.getImageData(0,0,cw,chh).data;function on(x,y){return x>=0&&y>=0&&x<cw&&y<chh&&d[(y*cw+x)*4+3]>110;}
 var E={},cnt=0;function add(ax,ay,bx,by){var k=ax+','+ay;(E[k]=E[k]||[]).push([bx,by,0]);cnt++;}
 for(var y=0;y<chh;y++)for(var x=0;x<cw;x++){if(!on(x,y))continue;if(!on(x,y-1))add(x,y,x+1,y);if(!on(x+1,y))add(x+1,y,x+1,y+1);if(!on(x,y+1))add(x+1,y+1,x,y+1);if(!on(x-1,y))add(x,y+1,x,y);}
 var loops=[];for(var k in E){var lst=E[k];for(var j=0;j<lst.length;j++){if(lst[j][2])continue;var sp=k.split(',').map(Number),pts=[sp],cur=lst[j],guard=0;cur[2]=1;while(guard++<4000){pts.push([cur[0],cur[1]]);var nx=E[cur[0]+','+cur[1]];if(!nx)break;var nxt=null;for(var q=0;q<nx.length;q++)if(!nx[q][2]){nxt=nx[q];break;}if(!nxt)break;nxt[2]=1;cur=nxt;}
   var simp=[pts[0]];for(var m=1;m<pts.length-1;m++){var a1=pts[m-1],b1=pts[m],c1=pts[m+1];if((b1[0]-a1[0])*(c1[1]-b1[1])-(b1[1]-a1[1])*(c1[0]-b1[0])!==0)simp.push(b1);}simp.push(pts[pts.length-1]);if(simp.length>3)loops.push(simp);}}
 var out=[],tot=0;loops.forEach(function(lp){var pl=[],len=0;for(var i=0;i<lp.length;i++){var px=(lp[i][0]-pd)/SS,py=(lp[i][1]-pd)/SS;if(i)len+=Math.hypot(px-pl[i-1][0],py-pl[i-1][1]);pl.push([px,py,len]);}out.push({pl:pl,len:len});tot+=len;});return {loops:out,tot:tot};}
function buildGlyphs(cr){var b=wq.querySelector('b'),cs=getComputedStyle(b),W=Math.ceil(cl2.clientWidth),H=Math.ceil(cl2.clientHeight),rs=LT.map(function(e){var r=e.getBoundingClientRect();return [r.left-cr.left,r.top-cr.top,r.width,r.height];}),key=W+'|'+H+'|'+rs.map(function(r){return Math.round(r[0])+','+Math.round(r[1]);}).join(';');if(GK===key)return;GK=key;
 var font=cs.fontWeight+' '+(parseFloat(cs.fontSize)*SS)+'px '+cs.fontFamily,tc=document.createElement('canvas').getContext('2d');tc.font=font;var asc=0;try{asc=tc.measureText('x').fontBoundingBoxAscent/SS;}catch(e){}
 GL=rs.map(function(r,i){var g=glyphLoops(LT[i].textContent,r[2],r[3],asc||r[3]*.8,font);g.x=r[0];g.y=r[1];return g;});}
function drawL(p,t){var sv=wrE.querySelector('svg'),mb=sv.querySelector('.mb'),on=p>.08?1:0; if(on!==LL){LL=on;sv.style.setProperty('--d',on?'1':'0');sv.style.transition='opacity .9s ease';sv.style.opacity=on;if(mb)mb.style.opacity=on;LT.forEach(function(e){e.style.opacity=on;});wsE.classList.toggle('on',!!on);}} var LL=-1;
var gt=document.getElementById('gt'),gmE=document.getElementById('gm'),gvE=document.getElementById('gv');
(function(){var NS='http://www.w3.org/2000/svg';for(var i=0;i<=10;i++){var yy=284-i*(254/10),xl=30+(yy-30)/238*20,mj=i%5===0,l=document.createElementNS(NS,'line');l.setAttribute('x1',xl-1);l.setAttribute('x2',xl-(mj?10:5));l.setAttribute('y1',yy);l.setAttribute('y2',yy);l.setAttribute('stroke','#fff');l.setAttribute('stroke-width','1');l.setAttribute('vector-effect','non-scaling-stroke');l.setAttribute('opacity',mj?.9:.5);gt.appendChild(l);if(mj){var t=document.createElementNS(NS,'text');t.setAttribute('class','gl-t');t.setAttribute('x',xl-14);t.setAttribute('y',yy+2.4);t.setAttribute('text-anchor','end');t.textContent=(i*10)+' %';gt.appendChild(t);}}})();
(function(){var NS='http://www.w3.org/2000/svg',g=document.getElementById('gb');for(var i=0;i<9;i++){var c=document.createElementNS(NS,'circle');c.setAttribute('class','gb');c.setAttribute('r',(.8+(i%3)*.7).toFixed(1));g.appendChild(c);}})();
var gl=document.getElementById('gl'),gw=document.getElementById('gw'),gsE=document.getElementById('gs');
var GR={x:0,y:0,a:0},GT={x:0,y:0},gh1=document.getElementById('gh1'),gh2=document.getElementById('gh2'),gh3=document.getElementById('gh3');
function drawG(p,t){var br=gl.getBoundingClientRect(),ins=MX>br.left-40&&MX<br.right+40&&MY>br.top-40&&MY<br.bottom+40;GT.x=ins?cl((MX-(br.left+br.width/2))/(br.width/2),-1,1):0;GT.y=ins?cl((MY-(br.top+br.height/2))/(br.height/2),-1,1):0;GR.x+=(GT.x-GR.x)*.14;GR.y+=(GT.y-GR.y)*.14;gh1.setAttribute('transform','translate('+(GR.x*-46+GR.y*6).toFixed(1)+' 0)');gh2.setAttribute('transform','translate('+(GR.x*-30).toFixed(1)+' 0)');gh3.setAttribute('transform','translate('+(GR.x*-58).toFixed(1)+' 0)');var a=cl((p-.48)/.1,0,1);gl.classList.toggle('on',a>0);gl.style.setProperty('--gd',(1-cl((p-.48)/.2,0,1)).toFixed(3));
 var g=cl((p-.55)/.3,0,1);g=g*g*(3-2*g);var y=284-g*127;
 function L(yy){return 30+(yy-30)/238*20;}
 var w=Math.sin(t*.003)*1.6,xl=L(y),xr=200-xl,rx=(xr-xl)/2,cx=100;
 gsE.setAttribute('cy',y.toFixed(1));gsE.setAttribute('rx',rx.toFixed(1));gsE.setAttribute('ry',(10*(rx/60)).toFixed(1));gsE.style.opacity=g>0.02?.8:0;
 gmE.setAttribute('x1',xr+4);gmE.setAttribute('x2',206);gmE.setAttribute('y1',y);gmE.setAttribute('y2',y);gmE.style.opacity=g>0.02?.8:0;gvE.setAttribute('y',y+2.4);gvE.style.opacity=g>0.02?.9:0;gvE.textContent=Math.round((284-y)/254*100)+' %';gt.style.opacity=a;
 gw.setAttribute('d',g>0.02?('M'+xl.toFixed(1)+' '+(y+w*.3).toFixed(1)+' L50 268 Q50 282 66 284 L134 284 Q150 282 150 268 L'+xr.toFixed(1)+' '+(y-w*.3).toFixed(1)+' Z'):'');
 var D=gw.getAttribute('d');document.getElementById('gcpp').setAttribute('d',D);var bs=document.getElementById('gb').children;for(var q=0;q<bs.length;q++){var sp=.00006+q%3*.00002,ph=((t*sp+q*.173)%1),by=280-ph*(280-y),bx=100+Math.sin(t*.0012+q*1.7)*(rx-10)*.55*(1-ph*.3);bs[q].setAttribute('cx',bx.toFixed(1));bs[q].setAttribute('cy',by.toFixed(1));bs[q].style.opacity=g>.1?(.55*Math.sin(ph*3.14159)).toFixed(2):0;}
 ['gca','gcb','gcc'].forEach(function(id,ci){var yy=y+16+ci*34,d='';for(var X=30;X<=170;X+=7){var Y=yy+Math.sin(X*.09+t*.0013*(1+ci*.4)+ci*2)*2.2+Math.sin(X*.2-t*.0009+ci)*.9;d+=(X>30?'L':'M')+X+' '+Y.toFixed(1);}document.getElementById(id).setAttribute('d',g>.1&&yy<278?d:'');});
 tiltG(cl(1-s1e.getBoundingClientRect().bottom/innerHeight,0,1));}

var s1e=document.getElementById('s1'),gqE=document.querySelector('.gq'),cueE=s1e.querySelector('.cue')||document.createElement('div'),gwg=document.getElementById('gwg'),gcpp=document.getElementById('gcpp');
var glT=[].slice.call(document.querySelectorAll('#gl .gl-t'));
function tiltG(q){
 if(q<=.001){if(gl.dataset.tl){gl.dataset.tl='';gl.style.opacity='';gl.style.transition='';cueE.style.opacity='';}return;}
 gl.dataset.tl='1';gqE.classList.remove('on');cueE.style.opacity=(.55*(1-cl(q*6,0,1))).toFixed(3);gl.style.transition='none';gl.style.opacity=(1-cl(q/.14,0,1)).toFixed(3);}
var cS=document.getElementById('cs'),sae=document.getElementById('sa'),saTx=[].slice.call(sae.querySelectorAll('.tx'));
var CB=[],CBT=0,CBS=0,CID=1,RIP=[],GRB=null,HV=0,HB=0;
function sm(a){a=cl(a,0,1);return a*a*a*(a*(a*6-15)+10);}
function bubSim(W,H,t){
 var dt=CBT?Math.min(50,t-CBT):16;CBT=t;var x0=W*.2,x1=W*.8,y0=H*(W<H?.5:.4),y1=H*.78,i,j;
 if(!CB.length)for(i=0;i<20;i++)CB.push({id:CID++,x:x0+Math.random()*(x1-x0),y:y0+Math.random()*(y1-y0),r:4+Math.random()*8,vx:(Math.random()-.5)*.03,vy:(Math.random()-.5)*.03,s:Math.random()*100,g:1});
 if(CB.length<20&&t-CBS>900){CBS=t;CB.push({id:CID++,x:x0+Math.random()*(x1-x0),y:y0+Math.random()*(y1-y0),r:4+Math.random()*4,vx:0,vy:0,s:Math.random()*100,g:0});}
 CB.forEach(function(b){b.g=Math.min(1,b.g+dt*.0007);b.vx+=(Math.random()-.5)*.0009*dt;b.vy+=(Math.random()-.5)*.0009*dt;});
 for(i=0;i<CB.length;i++)for(j=i+1;j<CB.length;j++){var A=CB[i],B=CB[j],dx=B.x-A.x,dy=B.y-A.y,d=Math.hypot(dx,dy)||1;if(d<W*(.3+.25*HV)){var a=.000026*dt*(1+2.2*HV),ka=B.r/(A.r+B.r),kb=A.r/(A.r+B.r);A.vx+=dx/d*a*ka;A.vy+=dy/d*a*ka;B.vx-=dx/d*a*kb;B.vy-=dy/d*a*kb;if(HV>.05&&d<(A.r+B.r)*1.03){var f=.00005*dt*HV;A.vx-=dx/d*f*ka;A.vy-=dy/d*f*ka;B.vx+=dx/d*f*kb;B.vy+=dy/d*f*kb;}}}
 CB.forEach(function(b){if(HV>.02){var cx0=MX-b.x,cy0=MY-b.y,cd=Math.hypot(cx0,cy0),CR=Math.min(W,H)*.6;if(cd<CR&&cd>1){var ac=.00006*dt*HV*(1-cd/CR);b.vx+=cx0/cd*ac;b.vy+=cy0/cd*ac;}}var cap=.05+.03*HV,sp=Math.hypot(b.vx,b.vy);if(sp>cap){b.vx*=cap/sp;b.vy*=cap/sp;}var dm=.996-.012*HV;b.vx*=dm;b.vy*=dm;b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.x<x0){b.x=x0;b.vx=Math.abs(b.vx);}if(b.x>x1){b.x=x1;b.vx=-Math.abs(b.vx);}if(b.y<y0){b.y=y0;b.vy=Math.abs(b.vy);}if(b.y>y1){b.y=y1;b.vy=-Math.abs(b.vy);}});
 for(i=0;i<CB.length;i++)for(j=i+1;j<CB.length;j++){var A2=CB[i],B2=CB[j];if(!A2||!B2||A2.g<1||B2.g<1)continue;var dd=Math.hypot(B2.x-A2.x,B2.y-A2.y);if(dd<(A2.r+B2.r)*(.7-.3*HV)){var ma=A2.r*A2.r,mb=B2.r*B2.r,mt=ma+mb;A2.x=(A2.x*ma+B2.x*mb)/mt;A2.y=(A2.y*ma+B2.y*mb)/mt;A2.vx=(A2.vx*ma+B2.vx*mb)/mt;A2.vy=(A2.vy*ma+B2.vy*mb)/mt;A2.r=Math.min(34,Math.sqrt(mt));RIP.push({x:A2.x,y:A2.y,t:t,r:A2.r});CB.splice(j,1);j--;}}
 RIP=RIP.filter(function(o){return t-o.t<1600;});}
var GG=null;
function drawGl(x,W,H,T,t,pre){
 GG=null;var rb=GRB;if(!rb||T>1.25)return;
 var sc=Math.min(rb.width/280,rb.height/318),ox=rb.left+(rb.width-280*sc)/2,oy=rb.top+(rb.height-318*sc)/2,Cx=ox+134*sc,Ct=oy+30*sc,rimR=70*sc,botR=50*sc,Hh=254*sc,levH=127*sc,surR=59.3*sc,ph0=Math.asin(12/70);
 var e=sm(T/.8),phi=ph0+(Math.PI/2-ph0)*e,sn=Math.sin(phi),cs=Math.cos(phi),pe=sm(T/.8),Ymid0=Ct+Hh*Math.cos(ph0)/2,Ymid=Ymid0+(H/2-Ymid0)*pe,cx=Cx+(W/2-Cx)*pe,yt=Ymid-Hh*cs/2,yb=yt+Hh*cs,ys=yt+levH*cs;
 var z1=sm((T-.42)/.75),Z=Math.exp(Math.log(Math.max(W,H)/surR*.9)*z1),ga=1-sm((T-.95)/.25);GG={sx:W/2+(cx-W/2)*Z,sy:H/2+(ys-H/2)*Z,rx:surR*Z,ry:Math.max(.01,surR*sn)*Z};if(pre||ga<=0)return;
 x.save();x.globalAlpha=ga;x.translate(W/2,H/2);x.scale(Z,Z);x.translate(-W/2,-H/2);x.lineWidth=1.2/Z;x.lineJoin='round';
 var g=x.createLinearGradient(0,ys-surR*sn,0,yb+botR*sn);g.addColorStop(0,'rgba(140,200,255,.6)');g.addColorStop(.3,'rgba(63,127,208,.55)');g.addColorStop(.7,'rgba(27,74,154,.8)');g.addColorStop(1,'rgba(15,42,92,.95)');
 x.beginPath();x.ellipse(cx,ys,surR,Math.max(.01,surR*sn),0,0,6.2832);x.moveTo(cx-surR,ys);x.lineTo(cx+surR,ys);x.lineTo(cx+botR,yb);x.lineTo(cx-botR,yb);x.closePath();x.ellipse(cx,yb,botR,Math.max(.01,botR*sn),0,0,6.2832);x.fillStyle=g;x.fill();
 x.save();x.clip();x.lineWidth=1/Z;for(var k=0;k<6;k++){x.strokeStyle='rgba(210,240,255,'+(.1+.06*Math.sin(t*.001+k)).toFixed(3)+')';x.beginPath();for(var u=-1;u<=1.001;u+=.1){var px=cx+u*surR*1.1,py=ys+(k-2.5)*surR*.32*(.4+sn*.6)+Math.sin(u*5+t*.0013+k*1.3)*surR*.07;u<-.99?x.moveTo(px,py):x.lineTo(px,py);}x.stroke();}x.restore();
 x.lineWidth=1.2/Z;x.strokeStyle='rgba(255,255,255,'+(.9*cs*1.2>.9?.9:.9*cs*1.2+.05).toFixed(2)+')';x.beginPath();x.moveTo(cx-rimR,yt);x.lineTo(cx-botR,yb);x.moveTo(cx+rimR,yt);x.lineTo(cx+botR,yb);x.stroke();
 x.strokeStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(cx,yb,botR,Math.max(.01,botR*sn),0,0,6.2832);x.stroke();
 x.strokeStyle='rgba(190,235,255,.75)';x.beginPath();for(var a=0;a<=64;a++){var an=a/64*6.2832,wr=1+.016*Math.sin(an*3+t*.003)+.01*Math.sin(an*5-t*.004);var qx=cx+Math.cos(an)*surR*wr,qy=ys+Math.sin(an)*surR*sn*wr;a?x.lineTo(qx,qy):x.moveTo(qx,qy);}x.stroke();
 x.strokeStyle='rgba(255,255,255,.95)';x.beginPath();x.ellipse(cx,yt,rimR,Math.max(.01,rimR*sn),0,0,6.2832);x.stroke();
 x.restore();}
function drawA(p,t){
 var r=sae.getBoundingClientRect(),VH=innerHeight,T=1-r.top/VH,q2=cl(1-r.bottom/VH,0,1);
 if(s1e.getBoundingClientRect().bottom>0)GRB=gl.getBoundingClientRect();
 if(q2>.05||r.top>VH*.05)saTx.forEach(function(e){e.classList.remove('on');});
 cS.style.opacity=(1-cl((q2-.5)/.5,0,1)).toFixed(3);
 fit(cS);var x=cS.getContext('2d');x.scale(dpr,dpr);var W=cS.clientWidth,H=cS.clientHeight;x.clearRect(0,0,W,H);
 var SEL=[0,2,4,5,7,9,11,13,14,16,18],blue=sm((T-.3)/.55)*(1-sm((T-2.4)/.5)),la=sm((T-1)/.4)*(1-sm((T-2.45)/.4)),cm=sm((T-1.75)/.4)*(1-sm((T-2.5)/.3)),wa=sm((T-2.45)/.6),ba=sm((T-.95)/.3)*(1-sm((T-2.55)/.45));
 /* eau vue de dessus : fond bleu + caustiques */
 drawGl(x,W,H,T,t,true);if(blue>0){x.save();if(GG){x.beginPath();x.ellipse(GG.sx,GG.sy,GG.rx,GG.ry,0,0,6.2832);x.clip();}var bg=x.createRadialGradient(W/2,H*.55,0,W/2,H*.55,Math.max(W,H)*.75);bg.addColorStop(0,'#123470');bg.addColorStop(1,'#091c3f');x.globalAlpha=blue*.92;x.fillStyle=bg;x.fillRect(0,0,W,H);
x.restore();}
 /* lignes de lumière : elles deviennent les lignes de l'océan */
 var lA=sm((T-.3)/.55);
 if(lA>0){x.save();if(GG){x.beginPath();x.ellipse(GG.sx,GG.sy,GG.rx,GG.ry,0,0,6.2832);x.clip();}
  var mo=sm((T-2.35)/.85),SEL=[0,2,4,5,7,9,11,13,14,16,18];
  for(var i=0;i<11;i++){var kk=SEL[i],fk=kk/26,ampk=6+fk*34,visk=kk===9?1:cl(1.1-Math.abs(kk-9)*.12,0,1),oaK=visk*Math.max(kk===9?.9:0,.25+.6*fk)*.7,cA=.1*(.7+.3*Math.sin(t*.0006+i));
   [[14,.022,1],[6,.04,1],[1.2,0,0]].forEach(function(w){var al=w[2]?lA*w[1]*(.7+.3*Math.sin(t*.0006+i))*(1-mo):(lA*cA*(1-mo)+oaK*mo*Math.min(1,lA*3));if(al<=.002)return;x.globalAlpha=al;x.lineWidth=w[0];x.strokeStyle='rgb(150,208,255)';x.beginPath();
    for(var X=0;X<=W+10;X+=12){var cy=H*(i+.5)/11+Math.sin(X*.008+t*.0005+i)*H*.03+Math.sin(X*.021-t*.0007+i*2)*H*.012,oy=H*.38+fk*H*.5+Math.sin(X*.006+t*.0006*(1+fk)+kk*.5)*ampk+Math.sin(X*.017-t*.0009+kk)*ampk*.35,yy=cy+(oy-cy)*mo;X?x.lineTo(X,yy):x.moveTo(X,yy);}x.stroke();});}
  x.restore();}
 x.globalAlpha=1;
 drawGl(x,W,H,T,t);
 /* vagues (retrouvent l'océan) */
 if(wa>0){x.lineWidth=1;x.strokeStyle='rgba(140,200,255,.7)';var n=26,y0=H*.38,h=H*.5,kb=9;for(var k=0;k<n;k++){var f=k/n,vis=k===kb?1:cl(1.1-Math.abs(k-kb)*.12,0,1);if(vis<=0||SEL.indexOf(k)>=0)continue;x.globalAlpha=wa*vis*Math.max(k===kb?.9:0,.25+.6*f);x.beginPath();for(var X=0;X<=W;X+=8){var amp=6+f*34,yy=y0+f*h+Math.sin(X*.006+t*.0006*(1+f)+k*.5)*amp+Math.sin(X*.017-t*.0009+k)*amp*.35;X?x.lineTo(X,yy):x.moveTo(X,yy);}x.stroke();}x.globalAlpha=1;}
 /* bulles qui se rejoignent -> cellules analysées */
 if(ba>0||la>0){var hov=(la>0&&cm<.35&&MX>0&&MY>0&&MX<W&&MY<H)?1:0;HV+=(hov-HV)*.05;var hp=(t*.0009)%1;HB=(Math.exp(-Math.pow((hp-.08)/.05,2))+.55*Math.exp(-Math.pow((hp-.3)/.055,2)))*HV;bubSim(W,H,t);
  if(HV>.02){var hg=x.createRadialGradient(MX,MY,0,MX,MY,230);hg.addColorStop(0,'rgba(255,205,222,'+(.13*HV*(.7+.3*HB)).toFixed(3)+')');hg.addColorStop(1,'rgba(255,205,222,0)');x.globalAlpha=1;x.fillStyle=hg;x.fillRect(MX-230,MY-230,460,460);x.globalAlpha=.28*HV;x.strokeStyle='#fff';x.lineWidth=1;x.beginPath();x.arc(MX,MY,12+7*HB,0,6.2832);x.stroke();}
  var zx=W/2,zy=H*.63,Zb=1+.5*sm((T-1.72)/.6)-.55*sm((T-2.4)/.7);x.save();
  x.lineWidth=1;
  if(cm>0){x.save();x.strokeStyle='#fff';x.lineWidth=1;var mm=Math.max(18,W*.03)+26;x.globalAlpha=.26*cm;x.beginPath();for(var rr=0;rr<=40;rr++){var rxp=mm+(W-2*mm)*rr/40,tl=rr%5?3:7;x.moveTo(rxp,mm);x.lineTo(rxp,mm+tl);}for(var ry=0;ry<=24;ry++){var ryp=mm+(H-2*mm)*ry/24,tl2=ry%4?3:7;x.moveTo(mm,ryp);x.lineTo(mm+tl2,ryp);}x.stroke();
   var sy=H*.42+((t*.00016)%1)*H*.48,sg=x.createLinearGradient(0,sy-36,0,sy);sg.addColorStop(0,'rgba(255,255,255,0)');sg.addColorStop(1,'rgba(255,255,255,.06)');x.globalAlpha=cm;x.fillStyle=sg;x.fillRect(0,sy-36,W,36);x.globalAlpha=.2*cm;x.beginPath();x.moveTo(0,sy);x.lineTo(W,sy);x.stroke();x.restore();}
  var big=null;CB.forEach(function(b){if(!big||b.r>big.r)big=b;});var LB=CB.slice().sort(function(u,v){return v.r-u.r;}).slice(0,3);x.font='10px ui-monospace,Menlo,monospace';
  RIP.forEach(function(o){var a=(t-o.t)/1600,X=zx+(o.x-zx)*Zb,Y=zy+(o.y-zy)*Zb;x.globalAlpha=ba*(1-a)*.5;x.strokeStyle='#fff';x.beginPath();x.arc(X,Y,(o.r+a*70)*Zb,0,6.2832);x.stroke();});
  /* liens : des fils se tissent entre les bulles proches */
  var LD=Math.min(W,H)*(.4+.15*HV),NR=CB.map(function(a0,ia){return CB.map(function(b0,ib){return [ib,Math.hypot(a0.x-b0.x,a0.y-b0.y)];}).filter(function(q){return q[0]!==ia;}).sort(function(u,v){return u[1]-v[1];}).slice(0,2+(HV>.5?1:0)).map(function(q){return q[0];});});x.lineWidth=1;
  for(var i1=0;i1<CB.length;i1++)for(var j1=i1+1;j1<CB.length;j1++){var A=CB[i1],B=CB[j1],d0=Math.hypot(B.x-A.x,B.y-A.y);if(d0>=LD||A.g<1||B.g<1||(NR[i1].indexOf(j1)<0&&NR[j1].indexOf(i1)<0))continue;
   var k0=Math.pow(1-d0/LD,1.3),ax=zx+(A.x-zx)*Zb,ay=zy+(A.y-zy)*Zb,bx=zx+(B.x-zx)*Zb,by=zy+(B.y-zy)*Zb,dd=Math.hypot(bx-ax,by-ay)||1,ux=(bx-ax)/dd,uy=(by-ay)/dd,ra=A.r*Zb*(1+cm*.7),rb2=B.r*Zb*(1+cm*.7),
   sx=ax+ux*ra,sy=ay+uy*ra,ex=bx-ux*rb2,ey=by-uy*rb2,off=Math.sin(t*.0008+i1*1.7+j1)*dd*.07,mx=(sx+ex)/2-uy*off,my=(sy+ey)/2+ux*off;
   x.globalAlpha=Math.min(1,ba*k0*.5*(1-cm*.5)*(1+HV*.6+HB*.9));x.strokeStyle='#fff';x.beginPath();x.moveTo(sx,sy);x.quadraticCurveTo(mx,my,ex,ey);x.stroke();
   var pu=((t*.00035+i1*.37+j1*.21)%1),qx=(1-pu)*(1-pu)*sx+2*(1-pu)*pu*mx+pu*pu*ex,qy=(1-pu)*(1-pu)*sy+2*(1-pu)*pu*my+pu*pu*ey;
   x.globalAlpha=ba*k0*.9*(1-cm*.5);x.fillStyle='#fff';x.beginPath();x.arc(qx,qy,1.6,0,6.2832);x.fill();
   if(d0<LD*.45){x.globalAlpha=ba*k0*.35;x.beginPath();x.arc(mx*.5+(sx+ex)*.25,my*.5+(sy+ey)*.25,2.6,0,6.2832);x.stroke();}}
  CB.forEach(function(b,bi){var X=zx+(b.x-zx)*Zb,Y=zy+(b.y-zy)*Zb,R=b.r*b.g*Zb*(1+cm*.7)*(1+.05*HB),al=ba*b.g;if(R<1)return;
   var gr=x.createRadialGradient(X-R*.3,Y-R*.3,0,X,Y,R);gr.addColorStop(0,'rgba(255,255,255,'+(.16*(1-cm*.5)).toFixed(3)+')');gr.addColorStop(1,'rgba(255,255,255,.02)');
   x.globalAlpha=al;x.fillStyle=gr;x.strokeStyle='rgba(255,255,255,'+(.65-.2*cm).toFixed(2)+')';x.beginPath();
   for(var a=0;a<=40;a++){var an=a/40*6.2832,w=1+cm*(.016*Math.sin(an*3+t*.002+b.s)+.009*Math.sin(an*5-t*.0013+b.s));var qx=X+Math.cos(an)*R*w,qy=Y+Math.sin(an)*R*w;a?x.lineTo(qx,qy):x.moveTo(qx,qy);}x.closePath();x.fill();if(cm>0){x.shadowColor='rgba(170,220,255,.6)';x.shadowBlur=9*cm;}x.stroke();x.shadowBlur=0;
   if(cm<1){x.globalAlpha=al*(1-cm)*.8;x.strokeStyle='rgba(255,255,255,.8)';x.beginPath();x.arc(X,Y,R*.72,3.5,4.6);x.stroke();}
   if(cm>0){var c=al*cm;x.save();x.lineWidth=1;x.strokeStyle='#fff';x.fillStyle='#fff';
    var ig=x.createRadialGradient(X,Y,R*.25,X,Y,R);ig.addColorStop(0,'rgba(190,230,255,0)');ig.addColorStop(1,'rgba(190,230,255,'+(.13*c).toFixed(3)+')');x.globalAlpha=1;x.fillStyle=ig;x.beginPath();x.arc(X,Y,R*.98,0,6.2832);x.fill();x.fillStyle='#fff';
    x.globalAlpha=c*.26;x.beginPath();x.arc(X,Y,R*.86,0,6.2832);x.stroke();
    var nx=X+Math.cos(b.s)*R*.18,ny=Y+Math.sin(b.s)*R*.18;x.globalAlpha=c*.6;x.beginPath();x.arc(nx,ny,R*.3,0,6.2832);x.stroke();x.globalAlpha=c*.85;x.beginPath();x.arc(nx+R*.04,ny-R*.03,Math.max(1,R*.07),0,6.2832);x.fill();
    for(var o=0;o<3;o++){var oa=t*.0003*(o+1)*(o%2?1:-1)+b.s+o*2.1;x.globalAlpha=c*.38;x.beginPath();x.arc(X+Math.cos(oa)*R*.6,Y+Math.sin(oa)*R*.6,1.1,0,6.2832);x.fill();}
    if(R>12){x.globalAlpha=c*.4;for(var tq=0;tq<4;tq++){var ta=tq*1.5708+.785,r1=R*1.16,r2=R*1.25;x.beginPath();x.moveTo(X+Math.cos(ta)*r1,Y+Math.sin(ta)*r1);x.lineTo(X+Math.cos(ta)*r2,Y+Math.sin(ta)*r2);x.stroke();}}
    if(b===big&&R>14){x.globalAlpha=c*.7;var a0=t*.0005;x.beginPath();x.arc(X,Y,R*1.5,a0,a0+1.05);x.stroke();x.beginPath();x.arc(X,Y,R*1.5,a0+3.1416,a0+4.19);x.stroke();x.globalAlpha=c*.5;x.textAlign='center';if('letterSpacing' in x)x.letterSpacing='2px';x.fillText('TRACKING',X,Y+R*1.5+16);if('letterSpacing' in x)x.letterSpacing='0px';}
    if(LB.indexOf(b)>=0&&R>14){var dir=X>W-150?-1:1,pa=-.75,px0=X+Math.cos(pa)*R*1.25*dir,py0=Y+Math.sin(pa)*R*1.25,ex=px0+dir*22,ey=py0-22,tx=ex+dir*78;
     x.globalAlpha=c*.55;x.beginPath();x.moveTo(px0,py0);x.lineTo(ex,ey);x.lineTo(tx,ey);x.stroke();x.globalAlpha=c*.9;x.beginPath();x.arc(px0,py0,1.7,0,6.2832);x.fill();
     x.textAlign=dir>0?'left':'right';if('letterSpacing' in x)x.letterSpacing='1.4px';x.globalAlpha=c*.9;x.fillText('C—'+((b.id%100<10?'0':'')+(b.id%100)),ex+dir*4,ey-6);x.globalAlpha=c*.5;x.fillText('Ø '+(b.r*b.g*.7).toFixed(1)+' µm',ex+dir*4,ey+13);if('letterSpacing' in x)x.letterSpacing='0px';}
    x.restore();}
  });x.restore();
  if(cm>0){x.save();x.strokeStyle='#fff';x.fillStyle='#fff';x.lineWidth=1;var m2=Math.max(18,W*.03),by2=H-m2-10;x.globalAlpha=.55*cm;x.beginPath();x.moveTo(W/2-50,by2);x.lineTo(W/2+50,by2);x.moveTo(W/2-50,by2-4);x.lineTo(W/2-50,by2+4);x.moveTo(W/2+50,by2-4);x.lineTo(W/2+50,by2+4);x.moveTo(W/2,by2-2);x.lineTo(W/2,by2+2);x.stroke();
   x.font='10px ui-monospace,Menlo,monospace';x.textAlign='center';if('letterSpacing' in x)x.letterSpacing='1.4px';x.fillText('20 µm',W/2,by2+17);
   var mean=CB.reduce(function(u,v){return u+v.r*.7;},0)/Math.max(1,CB.length);x.textAlign='right';x.globalAlpha=.5*cm;var rx2=W-m2-22;x.fillText('MAG  ×40',rx2,by2-7);x.fillText('MEAN Ø  '+mean.toFixed(1)+' µm',rx2,by2+9);x.fillText('N  '+(CB.length<10?'0':'')+CB.length,rx2,by2+25);
   if('letterSpacing' in x)x.letterSpacing='0px';x.restore();}}
 x.globalAlpha=1;
 if(la>0)labFrame(x,W,H,T<1.75?'FIG. 02 — SURFACE':'FIG. 03 — ANALYSIS','t = '+((t/1000)%60).toFixed(2)+' s',la);
}
var s2e=document.getElementById('s2');
function drawBoatDot(p,t){
 if(p>.4)return;var x=ct.getContext('2d'),W=ct.clientWidth,H=ct.clientHeight,q3=cl(1-s2e.getBoundingClientRect().bottom/innerHeight,0,1);
 var nar=W<1000||W/H<1.1,cx=nar?W*.5:W*.68,cy=nar?H*.6:H*.5,R=nar?Math.min(W*.34,H*.2):Math.min(W,H)*.26,aB=-.55,rB=.58,tx=cx+Math.cos(aB)*R*rB,ty=cy+Math.sin(aB)*R*rB,b=window.__bt,u=b?b.u*1.15:20,sx=b?b.x:W*.7,sy=b?b.y-.45*u:H*.55;
 var e=sm((q3-.12)/.88),X=sx+(tx-sx)*e,Y=sy+(ty-sy)*e-Math.sin(Math.PI*e)*H*.07,lp=cl((p-.12)/.2,0,1),sw=(t*.0011)%6.2832,d=((sw-aB)%6.2832+6.2832)%6.2832,lit=Math.max(0,1-d/2.6),al=sm((q3-.05)/.4)*(1-lp),fade=1-cl((p-.3)/.05,0,1);
 x.save();x.setTransform(dpr,0,0,dpr,0,0);x.fillStyle='#fff';x.strokeStyle='#fff';
 if(e>.01&&e<.995){x.lineWidth=1;var px0=X,py0=Y;for(var j=1;j<=26;j++){var ee=Math.max(0,e-j*.014),qx=sx+(tx-sx)*ee,qy=sy+(ty-sy)*ee-Math.sin(Math.PI*ee)*H*.07;x.globalAlpha=al*fade*.5*(1-j/26);x.beginPath();x.moveTo(px0,py0);x.lineTo(qx,qy);x.stroke();px0=qx;py0=qy;}}
 var gg=x.createRadialGradient(X,Y,0,X,Y,18);gg.addColorStop(0,'rgba(255,255,255,'+(.28*al*fade).toFixed(3)+')');gg.addColorStop(1,'rgba(255,255,255,0)');x.globalAlpha=1;x.fillStyle=gg;x.fillRect(X-18,Y-18,36,36);x.fillStyle='#fff';x.globalAlpha=al*fade;x.beginPath();x.arc(X,Y,(1.5+4*sm(q3/.55))*(1-lp)+2.6*lp,0,7);x.fill();
 var ph=(t*.0004)%1;x.globalAlpha=(1-ph)*.45*fade*sm((q3-.9)/.1)*(1-lp);x.lineWidth=1;x.beginPath();x.arc(X,Y,6+24*ph,0,7);x.stroke();x.restore();}
var ctOld=document.createElement('canvas'),ctOK=-1,ctT0=0,ctOn=false;
function drawT(p,t){var k=p<.34?0:p<.67?1:2;drawT0(p,t);drawBoatDot(p,t);
 if(ctOK>=0&&k!==ctOK){ctOn=true;ctT0=t;}ctOK=k;
 if(ctOn){var f=1-sm((t-ctT0)/800);if(f<=.01)ctOn=false;else{var xx=ct.getContext('2d');xx.save();xx.setTransform(1,0,0,1,0,0);xx.globalAlpha=f;xx.drawImage(ctOld,0,0);xx.restore();}}
 if(!ctOn){if(ctOld.width!==ct.width||ctOld.height!==ct.height){ctOld.width=ct.width;ctOld.height=ct.height;}var oc=ctOld.getContext('2d');oc.setTransform(1,0,0,1,0,0);oc.clearRect(0,0,ctOld.width,ctOld.height);oc.drawImage(ct,0,0);}}
var tk=false;
function upd(t){tk=false;
 S.forEach(function(s,i){var r=s.e.getBoundingClientRect(),VH=innerHeight,w=s.e.classList.contains('w'),nx=S[i+1],nw=nx&&nx.e.classList.contains('w'),sk=s.e.firstElementChild,tr=0,op=1;
  if(r.top>0&&r.top<VH){if(!w)tr=-r.top;var pv=S[i-1],pw=pv&&pv.e.classList.contains('w'),u=cl((.5-r.top/VH)*2,0,1);op=(w||pw||s.e.id==='sa'||s.e.id==='st')?1:u*u*(3-2*u);}else if(r.bottom<VH&&r.bottom>0){if(!w&&!nw)tr=VH-r.bottom;var d=cl((r.bottom/VH-.5)*2,0,1);op=(w||nw)?1:d*d*(3-2*d);if(w||s.e.id==='s1'||s.e.id==='sa'||s.e.id==='s2')op=1;}
  sk.style.transform=tr?'translateY('+tr.toFixed(1)+'px)':'';sk.style.opacity=op<1?op.toFixed(3):'';
  if(r.bottom<-50||r.top>innerHeight+50){s.tx.forEach(function(e){e.classList.remove('on');});return;}var p=prog(s);
  s.tx.forEach(function(e){var a=+e.dataset.a,bb=+e.dataset.b;e.classList.toggle('on',p>=a&&p<=bb);});
  var id=s.e.id;
  
  if(id==='s1')drawG(p,t||performance.now());
  if(id==='sa')drawA(p,t||performance.now());
  if(id==='s2'){drawW(p,t||performance.now());draw3(t||performance.now());if(1-r.bottom/VH>.004)s.tx.forEach(function(e){e.classList.remove('on');});}
  if(id==='s3'){drawS(p);ls.forEach(function(l,k){l.classList.toggle('on',p>.12+k*.14);});}
  if(id==='st'){if(r.top>VH*.05)s.tx.forEach(function(e){e.classList.remove('on');});drawT(p,t||performance.now());}
  if(id==='s4')drawD(p,t);
  if(id==='sr')drawR(p,t||performance.now());
  if(id==='si')drawI(p,t||performance.now());
  if(id==='sl')drawL(Math.min(1,p*1.5),t||performance.now());
  if(id==='sy')document.getElementById('rb').classList.toggle('run',p>.02&&p<.5);
  if(id==='sy'){var cyE=document.getElementById('cy'),on=p>.02&&p<.5;cyE.style.opacity=on?1:0;if(on||cyE.dataset.d){cyE.dataset.d=on?'1':'';fit(cyE);var xy=cyE.getContext('2d');xy.setTransform(dpr,0,0,dpr,0,0);xy.clearRect(0,0,cyE.clientWidth,cyE.clientHeight);var tt=(t||performance.now())/1000;labFrame(xy,cyE.clientWidth,cyE.clientHeight,'FIG. 04 — TIMING','t = '+(tt%60).toFixed(2)+' s');}}
  if(id==='s6'){var v=cl(-s.e.getBoundingClientRect().top/innerHeight+.9,0,1);big.style.setProperty('--d',v);}
 });
 var wh=false;S.forEach(function(q){if(q.e.classList.contains('w')||q.e.id==='s6'){var r=q.e.getBoundingClientRect();if(r.top<innerHeight*.5&&r.bottom>innerHeight*.5)wh=true;}});nv.classList.toggle('light',wh);var tg=document.getElementById('tlg');if(tg)tg.classList.toggle('on',!wh);
 if(bar)bar.classList.toggle('on',false);
}
function req(){if(!tk){tk=true;requestAnimationFrame(upd);}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',function(){size();mkdots();req();});
size();mkdots();upd(0);setInterval(function(){req();},60);
window.__upd=upd;

(function(){var tg=[].slice.call(document.querySelectorAll('b.iv'))[0];if(!tg)return;var iv=null;function spawn(){if(!tg.closest('.tx').classList.contains('on')){clearInterval(iv);iv=null;return;}var r=tg.getBoundingClientRect(),h=document.createElement('span');h.className='hrt';h.textContent='♥';var hue=[345,350,355,10,330][Math.floor(Math.random()*5)];h.style.cssText='left:'+(r.left+Math.random()*r.width).toFixed(0)+'px;top:'+(r.top+r.height*.3).toFixed(0)+'px;--sz:'+(11+Math.random()*16).toFixed(0)+'px;--c:hsl('+hue+',95%,'+(62+Math.random()*10).toFixed(0)+'%);--dx:'+((Math.random()-.5)*110).toFixed(0)+'px;--dy:-'+(70+Math.random()*120).toFixed(0)+'px;--r:'+((Math.random()-.5)*50).toFixed(0)+'deg;--d:'+(1.4+Math.random()*.9).toFixed(2)+'s';document.body.appendChild(h);setTimeout(function(){if(h.parentNode)h.parentNode.removeChild(h);},2400);}
tg.addEventListener('mouseenter',function(){spawn();spawn();if(!iv)iv=setInterval(spawn,110);});tg.addEventListener('mouseleave',function(){clearInterval(iv);iv=null;});})();
})();

(function(){var busy=false,endT=0,lastW=0,lastA=0,gest=false,tmr=null,ts=null;
function pts(){var out=[0],mx=document.documentElement.scrollHeight-innerHeight;[].forEach.call(document.querySelectorAll('.sc'),function(sc){var top=scrollY+sc.getBoundingClientRect().top,tot=sc.offsetHeight-innerHeight,tx=[].slice.call(sc.querySelectorAll('.tx[data-b]'));if(tot<=2){out.push(top);return;}if(!tx.length){out.push(top+tot*(parseFloat(sc.dataset.snap)||.75));return;}tx.forEach(function(t){if(sc.id==='s1'&&parseFloat(t.dataset.a)===0)return;var b=Math.min(parseFloat(t.dataset.b),1);out.push(top+tot*(b-.02));});});
out=out.map(function(v){return Math.max(0,Math.min(v,mx));}).sort(function(a,b){return a-b;});return out.filter(function(v,i){return i===0||v-out[i-1]>40;});}
window.__snaps=pts;
function go(y,instant){var y0=scrollY,d=y-y0;if(Math.abs(d)<2)return;if(instant){scrollTo(0,y);return;}var dur=Math.min(1300,Math.max(750,Math.abs(d)*.55)),sz=document.getElementById('sa'),zA=scrollY+sz.getBoundingClientRect().top-innerHeight,zB=zA+innerHeight*3.4,s2z=document.getElementById('s2'),zC=scrollY+s2z.getBoundingClientRect().bottom-innerHeight,zD=zC+innerHeight*1.5,slow=(Math.max(y0,y)>zA&&Math.min(y0,y)<zB)||(Math.max(y0,y)>zC&&Math.min(y0,y)<zD);if(slow)dur=Math.min(3800,Math.max(1600,Math.abs(d)*2.3));var t0=performance.now();busy=true;endT=t0+dur;(function step(){var k=Math.min(1,(performance.now()-t0)/dur),e=slow?.5-Math.cos(Math.PI*k)/2:(k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2);scrollTo(0,y0+d*e);if(window.__upd)window.__upd(performance.now());if(k<1)requestAnimationFrame(step);else{busy=false;endT=performance.now();}})();}
function step(dir){var P=pts(),y=scrollY,i,tg=null;if(dir>0){for(i=0;i<P.length;i++)if(P[i]>y+8){tg=P[i];break;}}else{for(i=P.length-1;i>=0;i--)if(P[i]<y-8){tg=P[i];break;}}if(tg!==null)go(tg);}
function nearest(){var P=pts(),y=scrollY,b=P[0];P.forEach(function(v){if(Math.abs(v-y)<Math.abs(b-y))b=v;});go(b);}
window.__snapGo=go;window.__snapStep=step;window.__snapNearest=nearest;
function skip(e){return e.target&&e.target.closest&&e.target.closest('nav,[class*=menu],[class*=mn-],.fx');}
addEventListener('wheel',function(e){if(e.ctrlKey||skip(e))return;e.preventDefault();var now=performance.now(),a=Math.abs(e.deltaY);if(now<window.__introEnd)return;var _u=0,a=Math.abs(e.deltaY);if(a<2)return;var fresh=now-lastW>110||(a>lastA*1.7&&a>25);lastW=now;lastA=a;if(busy||now<endT+60){return;}if(!fresh&&gest)return;gest=true;step(e.deltaY>0?1:-1);},{passive:false});
addEventListener('touchstart',function(e){ts=skip(e)?null:e.touches[0].clientY;},{passive:true});
addEventListener('touchmove',function(e){if(ts!==null&&e.cancelable)e.preventDefault();},{passive:false});
addEventListener('touchend',function(e){if(ts===null)return;var dy=ts-e.changedTouches[0].clientY;ts=null;if(busy||performance.now()<window.__introEnd)return;if(Math.abs(dy)>34)step(dy>0?1:-1);else nearest();},{passive:true});
addEventListener('keydown',function(e){var k=e.key;if(['ArrowDown','PageDown',' ','ArrowUp','PageUp'].indexOf(k)<0)return;if(e.target&&/input|textarea/i.test(e.target.tagName))return;e.preventDefault();if(!busy)step(k==='ArrowUp'||k==='PageUp'?-1:1);});
addEventListener('scroll',function(){clearTimeout(tmr);tmr=setTimeout(function(){if(!window.__nosnap&&!busy&&performance.now()-lastW>250)nearest();},180);},{passive:true});
setInterval(function(){if(performance.now()-lastW>130)gest=false;},60);
})();

(function(){var els=[].slice.call(document.querySelectorAll('.tx.ty')),M=els.map(function(el){var seg=[];function walk(n,b){[].forEach.call(n.childNodes,function(c){if(c.nodeType===3){c.textContent.split('').forEach(function(ch){seg.push({c:ch,b:b});});}else if(c.nodeName==='BR')seg.push({br:1,nb:c.className==='nb'});else walk(c,b||c.nodeName==='B');});}walk(el,false);el.textContent='';return {el:el,seg:seg,n:0,on:false,done:-1};});
function html(m,n){var o='',bo=false,i,q;function ch(q){return q.br?(q.nb?'<br class="nb"> ':'<br>'):(q.c==='<'?'&lt;':q.c);}
for(i=0;i<m.seg.length;i++){q=m.seg[i];if(i===n)o+=(bo?'</b>':'')+'<u class="cr"></u><span class="gh">'+(bo?'<b>':'');else if(i===0&&n===0)o+='<u class="cr"></u><span class="gh">';
if(q.b&&!bo&&i<n){o+='<b>';bo=true;}if(!q.b&&bo&&i<n){o+='</b>';bo=false;}o+=ch(q);}
if(bo&&n>0&&n<m.seg.length)o+='</b>';if(n<=m.seg.length)o+='</span>';if(n>=m.seg.length)o=o.replace('<u class="cr"></u>','')+'<u class="cr"></u>';return o;}
function render(m){var n=m.n;if(n!==m.done){m.el.innerHTML=n<=0?'':html(m,n);m.done=n;}}
setInterval(function(){M.forEach(function(m){m.on=m.el.classList.contains('on');});
M.forEach(function(m){var others=M.filter(function(o){return o!==m&&o.el.parentNode===m.el.parentNode;}),clear=others.every(function(o){return o.n<=0;});
if(m.on){if(clear&&m.n<m.seg.length)m.n++;}else if(m.n>0)m.n=Math.max(0,m.n-3);render(m);});},30);
})();

window.__introEnd=performance.now()+3000;
/* flèche « scroll withPRISM » : après 3 s sans défilement (une fois l'intro finie), masquée sur le slide blanc et à la fin */
(function(){var h=document.getElementById('sc2'),la=0,sl=document.getElementById('sl'),s6=document.getElementById('s6');function act(){la=performance.now();h.classList.remove('on');}
(function(){var sl2=document.getElementById('sl'),s62=document.getElementById('s6'),C={ff:0,b:0},T={ff:0,b:0},run=false;function c01(v){return v<0?0:v>1?1:v;}function se(x){return x*x*x*(x*(x*6-15)+10);}function ex(){var VH=innerHeight,r=sl2.getBoundingClientRect(),tot=sl2.offsetHeight-VH,d=(-r.top-tot*.62)/(tot*.38*.9),t=s62.getBoundingClientRect().top/VH;T.ff=se(c01(d));T.b=se(c01(1-t/.32));if(!run){run=true;requestAnimationFrame(st);}}function st(){C.ff+=(T.ff-C.ff)*.1;C.b+=(T.b-C.b)*.1;var rs=document.documentElement.style,ff=C.ff,b=C.b;rs.setProperty('--ff',ff.toFixed(3));rs.setProperty('--ffo',c01(ff*1.8).toFixed(3));rs.setProperty('--xa',(1-c01(ff*1.3)).toFixed(3));rs.setProperty('--xb',b.toFixed(3));if(Math.abs(T.ff-C.ff)>.002||Math.abs(T.b-C.b)>.002)requestAnimationFrame(st);else{C.ff=T.ff;C.b=T.b;run=false;}}addEventListener('scroll',ex,{passive:true});addEventListener('resize',ex);ex();})();
(function(){var ic=document.getElementById('idc');function mv(e){if(!ic.classList.contains('on')){ic.classList.remove('rv');return;}var c=getComputedStyle(ic,'::after'),r=ic.getBoundingClientRect(),w=parseFloat(c.width),hh=parseFloat(c.height),l=r.left+parseFloat(c.left),t=r.bottom-hh;var hv=e.clientX>=l&&e.clientX<=l+w&&e.clientY>=t&&e.clientY<=r.bottom;ic.classList.toggle('rv',hv);var hh2=document.getElementById('sc2');if(hh2)hh2.classList.toggle('rvd',hv);}addEventListener('mousemove',mv,{passive:true});document.addEventListener('mouseleave',function(){ic.classList.remove('rv');var h3=document.getElementById('sc2');if(h3)h3.classList.remove('rvd');});})();
addEventListener('scroll',act,{passive:true});addEventListener('wheel',act,{passive:true});addEventListener('touchstart',act,{passive:true});addEventListener('keydown',act);
setInterval(function(){var n=performance.now(),r=sl.getBoundingClientRect(),end=s6.getBoundingClientRect().top<innerHeight*.5,white=r.top<innerHeight*.9&&r.bottom>innerHeight*.1;h.classList.toggle('on',n>window.__introEnd+3000&&n-la>3000&&!end);h.classList.toggle('dk',white);},400);})();
(function(){var xo=document.getElementById('xo');[].forEach.call(document.querySelectorAll('nav a[href^="/"]'),function(a){a.addEventListener('click',function(e){var h=a.getAttribute('href');if(!h||h.charAt(0)==='#'||a.target==='_blank'||e.metaKey||e.ctrlKey)return;e.preventDefault();xo.classList.add('on');setTimeout(function(){location.href=h;},520);});});addEventListener('pageshow',function(e){if(e.persisted)xo.classList.remove('on');});})();

(function(){var b=document.getElementById('nvt');if(!b)return;b.addEventListener('click',function(){if(window.__snapGo)window.__snapGo(0);else scrollTo(0,0);});setInterval(function(){b.classList.toggle('on',scrollY>innerHeight*.5);},120);})();

});