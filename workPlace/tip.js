(function(window, $, undefined) {
	var config = {
		op : null,
		content : "<div class='floatTipDiv' style='position:fixed;"+
		  "background:white;border:medium double rgb(250,0,255)'></div>"
	};

	function FloatTip() {
		this.init();
	}

	FloatTip.prototype = {
		init : function() {
			if ($(".floatTip")) {
				config.op = $(".floatTip");
			}	
			return;		
		},
		setCont : function(str) {
			config.op.append(config.content);

			var ctn = $(".floatTipDiv");
			// for (var i = 0; i < ctn.length; i++) {
			// 	ctn[i].html = str[i];
			// };
			ctn.html(str);
			ctn.hide();

			this.bindEvent(ctn);
		},
		bindEvent : function(content) {
			var _this = this;
			config.op.mousemove(function(ev) {
				var position = _this.getMousePos(ev);
				content.show();
				content.css({
					left: position.x+_this.getX(config.op[0])+10,
					top: position.y+_this.getY(config.op[0])+2
				});
			});
			config.op.mouseout(function() {
				content.hide();
			});
		},
		getMousePos : function(ev) {		
			var left=(ev.clientX-this.getX(config.op[0])+document.body.scrollLeft);
			var top=(ev.clientY-this.getY(config.op[0])+document.body.scrollTop);

			return {
				x: left,
				y: top
			};					  					
		},
		getX : function(obj){ 
			var left=obj.offsetLeft;  // 相对 有定位属性的父元素 的 border~border距离
		 // 	while(obj=obj.offsetParent){  // ???自身为有定位属性的父元素???
		 // 		left+=obj.offsetLeft;  
			// }  
	 		return left;  
		},
		getY : function(obj){
			var top=obj.offsetTop;  
			// while(obj = obj.offsetParent){  
		 // 		top+=obj.offsetTop;  
		 // 	}  
		    return top;  
		}  
	};

	var floatTip = new FloatTip();

	window.setFloatTip = function(str) {
		floatTip.setCont.call(floatTip, str);
	};
})(window, $);