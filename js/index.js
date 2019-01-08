function getStyle(obj, attr) { 
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }
function animate(obj, json, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
  	var flag = true;
  	for (var attr in json) {
  		(function (attr) {
  			if (attr == "opacity") {
  				var now = parseInt(getStyle(obj, attr) * 100);
  				var dest = json[attr] * 100;
  			} else {
  				var now = parseInt(getStyle(obj, attr));
  				var dest = json[attr];
  			}
  			var speed = (dest - now) / 6;
  			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  			if (now != dest) {
  				flag = false;
  				if (attr == "opacity") {
  					obj.style[attr] = (now + speed) / 100;
  				} else {
  					obj.style[attr] = now + speed + "px";
  				}
  			}
  		})(attr);
  	}
  	if (flag) {
  		clearInterval(obj.timer);
  		callback && callback();
  	}
  }, 30);
 }
var tu=document.getElementById('tu');
var slider = document.getElementById('slider');
var leftbot = document.getElementById('leftbot');
var rightbot = document.getElementById('rightbot');
var oNavlist = document.getElementById('anniu').children;
var index = 1; 
var timer;
var isMoving = false;
tu.onmouseover = function () {
	animate(leftbot, {
		opacity: 1
	})
	animate(rightbot, {
		opacity: 1
	})
	clearInterval(timer);
}
tu.onmouseout = function () {
	animate(leftbot, {
		opacity: 0
	})
	animate(rightbot, {
		opacity: 0
	})
	timer = setInterval(next, 3000);
}
rightbot.onclick = next;
leftbot.onclick = prev;
function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -800 * index
		});
	}
}
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
timer = setInterval(next, 3000);
var gonggao=document.getElementById("gonggao");
function show() {
    var top = gonggao.offsetTop - 1; 
    gonggao.style.top = top + "px";

    if (-1 * gonggao.offsetTop >= gonggao.offsetHeight / 2) {
        gonggao.style.top = 0;
    }
}
var t = setInterval(show, 15);
gonggao.onmouseout=function(){
	t = setInterval(show, 15);
}
gonggao.onmouseover=function(){
	clearInterval(t);
}
var span=document.createElement("span");
var money=document.getElementById("money");
var qiannn=document.getElementById("qiannn")
var qiann=document.getElementById("qiann")
money.onchange=function(){
	for(var i=0;i<money.length;i++){
	  if(money[i].selected==true){
		var answer1=money[i].text;
	}
}
qiannn.appendChild(span);
span.innerHTML="<span class='qian'>¥</span><span id='qiann'>"+answer1+"</span>"	
}
window.onload=function(){
	var le=document.getElementsByClassName("le")[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			le.style.position='fixed'
		}
		else{
			le.style.position='static'
		}
	}
}
var people=document.getElementById("people");
var youhuiquan=document.getElementById("youhuiquan");
var sjer=document.getElementById("sjer");
var car=document.getElementById("car");
var erw=document.getElementById("erw");
var xiaoer=document.getElementById("xiaoer")
people.onmouseover=function(){
	people.setAttribute("class","people");
}
people.onmouseout=function(){
	people.setAttribute("class","people1");
}
youhuiquan.onmouseover=function(){
	youhuiquan.setAttribute("class","youhuiquan");
}
youhuiquan.onmouseout=function(){
	youhuiquan.setAttribute("class","youhuiquan1");
}
car.onmouseover=function(){
	car.setAttribute("class","car");
}
car.onmouseout=function(){
	car.setAttribute("class","car1");
}
sjer.onmouseover=function(){
	sjer.setAttribute("class","sjer");
	erw.setAttribute("class","erw")
	xiaoer.setAttribute("class","xiaoer1");
}
sjer.onmouseout=function(){
	sjer.setAttribute("class","sjer1");
	erw.setAttribute("class","erw1");
	xiaoer.setAttribute("class","xiaoer");
}