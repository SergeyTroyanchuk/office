/*


var Tabula = function(x, y){
	this.view; //нужна только для нормальной инициализации в ф-ях прототипа
	this.x = x;
	this.y = y;
	
	this.init();
		
	//return this.view;
	return this;
}


Tabula.prototype = {
	init: function() {
		var rootOb = this;
		
		this.drawView();
*/


		/*
this.view.addEventListener('click',function(e){
			alert(e.pageX);
			//move(e.pageX);
		},false);
*/
/*
		
		this.view.addEventListener ("drag", function(e){
			rootOb.view.x = e.pageX;
			rootOb.view.y = e.pageY;
			rootOb.redraw();
			
			console.log(rootOb); 		 
		}, false);
	},
	redraw: function() {
		this.view.style.left = this.x;
		this.view.style.top = this.y;
	},
	
	drawView : function() {
		this.view = document.createElement('div');  //создаем элемент
		this.view.className = 'box';				//добавляем класс к элементу
		this.view.innerHTML = "<b>box</b>";
		this.redraw();			//внутренности элемента
	}
}
*/

/* ------------------------------------------------------------------------------------------------ */
/*
var tob = [];

window.onload = function(){
	var content = document.getElementById("content");
	var tabulas = tob;
	
	content.addEventListener('click', function(e) {
		var newTab = new Tabula(e.pageX, e.pageY);
		content.appendChild(newTab.view);
		tabulas.push(newTab);
	}, false)
	

		//content.appendChild(dr1.view);
}

*/


/*

var Tabula = function(){
	this.view = document.createElement('div');  //создаем элемент
	this.view.className = 'box';				//добавляем класс к элементу
	this.view.innerHTML = "<b>box</b>";			//внутренности элемента
	
	this.init();

}


Tabula.prototype = {
	init: function() {
		this.view.addEventListener('click',function(e){
			alert(e.target);
		},false)
	}
}

window.onload = function(){

var dr0 = new Tabula();
var dr1 = new Tabula();


var content = document.getElementById("content");

content.appendChild(dr0.view);
content.appendChild(dr1.view);


}
*/
/*


function Box(){
	
	this.view;
	this.x;
	this.y;
	//this.valueOf = 'desk';
	return this;
}

Box.prototype.type = 'box';
Box.prototype.makeView = function(){
	this.view = document.createElement('div');  //создаем элемент
	this.view.className = 'box';				//добавляем класс к элементу
	this.view.innerHTML = "<b>box</b>";			//внутренности элемента
	return this.view;
	
}
Box.prototype.ev = function(e){
	var x = this.view.clientX
	alert(x);
}

var al = function(e){
	console.log('simple click ');
	console.log(e);
	
}
var plog = function(){
	console.log('on drag start')
	//alert('mouse Up');
}
var cord = function(ev){
	console.log(ev);		
}


	
	o.addEventListener("click",function(o){
		console.log(o);
		o.style.position = 'absolute';
		o.style.z-index = 20;	
		moveAt(o);
	},false);
	
	
	o.draggable = true;
	o.addEventListener('dragstart',plog,false)
	
	//o.ondragstart = function(){console.log('drag start')}
}

function moveAt(e) {
    self.style.left = e.pageX+'px';
    self.style.top = e.pageY+'px';
   }




var glob = {}
window.onload = function(){

document.body.addEventListener('onmouseup',function(){console.log('yoyo')},false);

glob.ob1 = new Box();
glob.ob2 = new Box();


var content = document.getElementById("content");

content.appendChild(glob.ob1.makeView());
content.appendChild(glob.ob2.makeView());


ball.ondragstart = function() {
  return false;
};


setEvents(glob.ob1.view);

}

*/

/*

var ball;

window.onload = function(){
	ball = document.getElementById('ball');





ball.onmousedown = function(e) { // отследить нажатие
  var self = this;
  e = fixEvent(e);

  // подготовить к перемещению
  // разместить на том же месте, но в абсолютных координатах
  this.style.position = 'absolute'; 
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(this); 

  this.style.zIndex = 1000; // показывать мяч над другими элементами
  
  // передвинуть мяч под координаты курсора   
  function moveAt(e) {
    self.style.left = e.pageX-25+'px'; // 25 - половина ширины/высоты мяча
    self.style.top = e.pageY-25+'px'; 
   }

  // перемещать по экрану
  document.onmousemove = function(e) {
    e = fixEvent(e);
    moveAt(e);
  }

  // отследить окончание переноса 
  this.onmouseup = function() {
    document.onmousemove = self.onmouseup = null;
  }
}


}
*/

var FireflyTables = function(link){
	this.link    = link;
	this.firefly = false;
	this.xStart  = this.link.offsetLeft;
	this.xStop   = this.xStart + this.link.offsetWidth;
	this.yStart  = this.link.offsetTop;
	this.yStop   = this.yStart + this.link.offsetHeight;
}
FireflyTables.prototype.highlight = function(){
	this.link.style.backgroundColor = 'red';
}
FireflyTables.prototype.dark = function(){
	this.link.style.backgroundColor = 'black';
}





var	glob = {}

var locator = function(){
	//var firefly = {'t1':false,'t2':false};
	for(var i = 1; i<4; i++){
		glob['t'+i].firefly = false;
	}

	/*
var targetXstart = glob.linkTarget.offsetLeft;
	var targetXstop  = targetXstart + glob.linkTarget.offsetWidth;
	var targetYstart = glob.linkTarget.offsetTop;
	var targetYstop  = targetYstart + glob.linkTarget.offsetHeight;
*/
	
	/*
var target2Xstart = glob.linkTarget2.offsetLeft;
	var target2Xstop  = target2Xstart + glob.linkTarget2.offsetWidth;
	var target2Ystart = glob.linkTarget2.offsetTop;
	var target2Ystop  = target2Ystart + glob.linkTarget2.offsetHeight;
*/
	
	var Xstart = glob.link.offsetLeft;
	var Xstop  = Xstart + glob.link.offsetWidth;
	var Ystart = glob.link.offsetTop;
	var Ystop  = Ystart + glob.link.offsetHeight;
	
//glob.link.innerHTML = 'Xstart='+Xstart+' / '+'Xstop'+Xstop;
	
	
	for(var i = 1; i<4; i++){
		if(		
			((Xstop >= (glob['t'+i].xStart||glob['t'+i].xStop)) && (Xstart <= glob['t'+i].xStop)) &&
			((Ystop >= (glob['t'+i].yStart||glob['t'+i].yStop)) && (Ystart <= glob['t'+i].yStop))   ){
			glob['t'+i].firefly = true;
		}
	}
	
	
	/*
if(		
			((Xstop >= (target2Xstart||target2Xstop)) && (Xstart <= target2Xstop)) &&
			((Ystop >= (target2Ystart||target2Ystop)) && (Ystart <= target2Ystop))
			){ 
				firefly.t2 = true; 
	}else if(
			((Xstop >= (glob.t1.xStart||glob.t1.xStop)) && (Xstart <= glob.t1.xStop)) &&
			((Ystop >= (glob.t1.yStart||glob.t1.yStop)) && (Ystart <= glob.t1.yStop))
			){
				glob.t1.firefly = true;
	}
*/
	
	
	for(var i=1; i<4; i++){
		if(glob['t'+i].firefly == true){glob['t'+i].highlight()}else{glob['t'+i].dark()}
	}
	
	
	/*
if(glob.t1.firefly == true){
		glob.t1.highlight();
	}else if(firefly.t2 == true){
		glob.linkTarget2.style.backgroundColor = 'red';
	}else{
		glob.t1.dark();
		glob.linkTarget2.style.backgroundColor = 'black';
	}
*/ 
} 


window.onload = function(){

	glob.link = document.getElementById('ball');
	glob.linkTarget = document.getElementById('targ');	
	glob.linkTarget2 = document.getElementById('targ2');	
	glob.linkTarget3 = document.getElementById('targ3');	
	
	glob.t1 = new FireflyTables(glob.linkTarget);
	glob.t2 = new FireflyTables(glob.linkTarget2);
	glob.t3 = new FireflyTables(glob.linkTarget3);
	
	
	
	var mouseOffsetX = 0,
		mouseOffsetY = 0;
	
	var move = function(mouse){
		locator();
		glob.link.style.top  = mouse.y - mouseOffsetY;
		glob.link.style.left = mouse.x - mouseOffsetX;
	}
	
	glob.link.addEventListener('mousedown',function(mouse){
		mouseOffsetY = mouse.y - glob.link.offsetTop;
		mouseOffsetX = mouse.x - glob.link.offsetLeft;
		document.addEventListener('mousemove',move,false);
		},false);
	
	glob.link.addEventListener('mouseup',function(){
		glob.r = document.removeEventListener('mousemove',move,false);
		},false);
}





















