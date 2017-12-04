var tt = document.getElementsByTagName('a');
var kk = document.getElementById('box');
var btn = document.getElementById('btn');
var gg = document.getElementsByClassName("yy");
var child = kk.children;

var next = document.createElement("p");
next.id =  "ne";
next.innerHTML = "justdoit";
next.style.backgroundColor = "#cccccc";
console.log(kk.childNodes);
var i = 0;
var v = 2000;
btn.addEventListener("click", function(){
kk.appendChild(next);
var width = 2000 + v*i;
console.log(width);
i++;
if(i >= 3){
i = 0;
}
},false);

function addListener(elem, ev, listener){
	if(elem.addEventListener){
		elem.addEventListener(ev, listener,false);
	}else if(elem.attachEvent){
		elem.attachEvent('on'+ev, listener);
	}else{
		throw new Error('未対応');
	}
}

var section02 = document.getElementById("section02");
var out = document.getElementById("output");
var btn = document.getElementById("btntest");
var outi = document.getElementsByClassName("output")[0];
var outq = document.querySelector(".output");

function subwinop(){
	var subwin = window.open("", "child", "width=500, height=500");
	subwin.document.open('text/html');
	subwin.document.writeln('入力値');
	subwin.document.writeln(subwin.opener.document.test.name.value);
	subwin.document.writeln('<br /><input type="button" value="close" id="bbb"');
	subwin.document.writeln('onclick="self.close();" />');
	subwin.document.close();
}


addListener(window,"load",init);

function init(){

addListener(section02, "click",function(e){
	console.log("javascript");
});

addListener(btn, "click",function(){
	outq.innerHTML = '是清'+ document.test.name.value +'さん';
	subwinop();

});



}
function nopush(){
	var name = document.test.elements[0].value;
	if((name == "")){
		document.test.elements[1].disabled = true;
	}else{
		document.test.elements[1].disabled = false;
	}
}
var btnttt = btn.getAttribute("disabled");
console.log(btnttt);

btn.addEventListener("click" , function(){
if( btnttt == "disabled" ){
alert("テキストの入力してください");
}
});

