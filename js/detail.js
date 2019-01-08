var sun1 = document.getElementById("sun1");
var sun2 = document.getElementById("sun2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box');
sun1.onmouseover = function () {
	slider.style.display = 'block';
	sun2.style.display = 'block';
}
sun1.onmouseout = function () {
	slider.style.display = 'none';
	sun2.style.display = 'none';
}
sun1.onmousemove = function (ev) {
	var ev = ev || window.event;
	var Top=document.body.scrollTop || document.documentElement.scrollTop;
	var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
	var oT = ev.clientY + Top - box.offsetTop - slider.offsetHeight / 2;

	var oMaxw = sun1.offsetWidth - slider.offsetWidth;
	var oMaxh = sun1.offsetHeight - slider.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';

	var scale = sun2.offsetWidth / slider.offsetWidth;
	Bimg.style.left = -scale * oL + 'px'
	Bimg.style.top = -scale * oT + 'px'
}
var spanl=document.getElementById("spanl");
var spanr=document.getElementById("spanr");
var yi=document.getElementById("have");
var er=document.getElementById("no");
var sun=document.getElementById("first");
var sec=document.getElementById("Bimg");
er.onmouseover=function(){
	er.setAttribute("class","have");
	sun.setAttribute("src","img/pp1.jpeg");
	sec.setAttribute("src","img/pp1.jpeg");
	yi.setAttribute("class","no");
}
er.onclick=function(){
	er.setAttribute("class","have");
	sun.setAttribute("src","img/pp1.jpeg");
	sec.setAttribute("src","img/pp1.jpeg");
	yi.setAttribute("class","no");
}
yi.onmouseover=function(){
	yi.setAttribute("class","have");
	sun.setAttribute("src","img/pp0.jpeg");
	sec.setAttribute("src","img/pp0.jpeg");
	er.setAttribute("class","no");
}
yi.onclick=function(){
	yi.setAttribute("class","have");
	sun.setAttribute("src","img/pp0.jpeg");
	sec.setAttribute("src","img/pp0.jpeg");
	er.setAttribute("class","no");
}
spanr.onclick=function(){
	er.setAttribute("class","have");
	sun.setAttribute("src","img/pp1.jpeg");
	sec.setAttribute("src","img/pp1.jpeg");
	yi.setAttribute("class","no");
}
spanl.onclick=function(){
	yi.setAttribute("class","have");
	sun.setAttribute("src","img/pp0.jpeg");
	sec.setAttribute("src","img/pp0.jpeg");
	er.setAttribute("class","no");
}
var a=document.getElementById("ml150");
var b=document.getElementById("ml200");
var gou1=document.getElementById("duigou1");
var gou2=document.getElementById("duigou2");
var choose=document.getElementById("choose");
var span=document.createElement("span");
b.onclick=function(){
	b.setAttribute("class","ml150");
	gou2.setAttribute("class","notouming");
	a.setAttribute("class","ml200");
	gou1.setAttribute("class","touming");
	choose.appendChild(span);
	span.innerHTML="<span class='rongliang' id='rongliang'>\"200ml\"</span>";
}
a.onclick=function(){
	a.setAttribute("class","ml150");
	gou1.setAttribute("class","notouming");
	b.setAttribute("class","ml200");
	gou2.setAttribute("class","touming");
	choose.appendChild(span);
	span.innerHTML="<span class='rongliang' id='rongliang'>\"150ml\"</span>";
}
var jia=document.getElementById("jia");
var shu=document.getElementById("shu");
var jian=document.getElementById("jian");
jia.onclick=function(){
	shu.value++;
	if(shu.value>5){
		shu.value=5;
		jia.setAttribute("class","nojia");
	}
	if(shu.value<5){
		jian.setAttribute("class","jia")
	}
}
jian.onclick=function(){
	shu.value--;
	if(shu.value<0){
		shu.value=0;
		jian.setAttribute("class","nojia")
	}
	if(shu.value>0){
		jia.setAttribute("class","jia");
	}
}
shu.onblur=function(){
	if(shu.value>5){
		shu.value=5;
	}
	if(shu.value<0){
		shu.value=0;
	}
}
var jiaru=document.getElementById("jiaru");
var mengzhao=document.getElementById("mengzhao");
var tishi=document.getElementById("tishi");
var cha=document.getElementById("cha");
var first=document.getElementById("fir");
var second=document.getElementById("second");
jiaru.onclick=function(){
	mengzhao.setAttribute("class","mengzhao");
	tishi.setAttribute("class","tishi");
}
cha.onclick=function(){
	mengzhao.setAttribute("class","nomengzhao");
	tishi.setAttribute("class","notishi");
}
first.onclick=function(){
	mengzhao.setAttribute("class","nomengzhao");
	tishi.setAttribute("class","notishi");
}
second.onclick=function(){
	mengzhao.setAttribute("class","nomengzhao");
	tishi.setAttribute("class","notishi");
}