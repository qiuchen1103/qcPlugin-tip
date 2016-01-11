;(function(window, $, undefined) {
	var FloatTip = function(ele, opt) {
		this.$element = ele;
		this.defaults = {
			'floatCtn': '无内容',
			'floatPadding': "5px 10px",
			'floatBgColor': 'white',
			'floatBorderWidth': '1px',
			'floatBorderStyle': 'solid',
			'floatBorderColor': '#000',
			'floatBorderRadius': '5px'
			
		}
		this.options = $.extend({}, this.defaults, opt);
	};

	FloatTip.prototype = {
		setFloatTip: function() {
			this.$element.floatDiv = document.createElement('div');
			this.$element.floatDiv.id = this.options.floatCtn;
			this.$element.floatDiv.style.position = 'fixed';
			this.$element.append(this.$element.floatDiv);

			this.$floatDiv = $('#'+this.options.floatCtn).html(this.options.floatCtn);
			this.$floatDiv.css({
				'backgroundColor': this.options.floatBgColor,
				'padding': this.options.floatPadding,
				'borderWidth': this.options.floatBorderWidth,
				'borderStyle': this.options.floatBorderStyle,
				'borderColor': this.options.floatBorderColor,
				'borderRadius': this.options.floatBorderRadius
				
			});
			this.$floatDiv.hide();
			this.bindEvent(this.$floatDiv);
			return this.$floatDiv;
		},
		bindEvent : function($beBinded) {
			var _this = this;
			_this.$element.on('mousemove',function(ev) {
				var positionX = ev.originalEvent.x || ev.originalEvent.layerX;
				var positionY = ev.originalEvent.y || ev.originalEvent.layerY; 
				$beBinded.show().css({
					left: positionX+15,
					top: positionY-20
				});
			});
			_this.$element.on('mouseout',function() {
				$beBinded.hide();
			});
		},
	};

	$.fn.tip = function(options) {
		var floatTip = new FloatTip(this, options);
		return floatTip.setFloatTip();
	};
})(window, jQuery);