// 第一次打开页面时，card里的content从下往上浮现
function loading() {
    let contentUp = document.querySelector('.content');
    contentUp.classList.add("contentup");
}
// =======================================================

// 点击按钮转换页面
function switchover() {

    let switchoverDisplay = document.querySelector('.content');
    switchoverDisplay.classList.add("switchoverDisplay");

    // let switchoverLogo = document.querySelector('.logo');
    // switchoverLogo.style.display = "none";

    setTimeout(function timeOut() {
        // 延迟0.8s消失
        switchoverDisplay.style.display = "none";

        // 延迟content2出现，把样式加进去
        let switchoverDisplay2 = document.querySelector('.content-2');
        switchoverDisplay2.style.display = "block";
		
        // 再延迟0.1s上滑显示content2
        setTimeout(function timeOut2() {
            switchoverDisplay2.classList.add("content-2-display");
        },77)
    },777);
}
// ========================================================================

// noNFT();
// 没有NFT时展示框样式
function noNFT() {
    let noImg = document.querySelector('.show-NFT');
    noImg.style.display = "none";

    let rightBoxNoImg = document.querySelector('.right-box');
    rightBoxNoImg.classList.add("right-box-noImg");
}


function loadingDisplay() {
    setTimeout(function timeOut() {
        // 延迟content2出现，把样式加进去
        let switchoverDisplay2 = document.querySelector('.content-2');
        switchoverDisplay2.style.display = "block";
		
        // 再延迟0.1s上滑显示content2
        setTimeout(function timeOut2() {
            switchoverDisplay2.classList.add("content-2-display");
        },17)
    },77);
}


export {loading, switchover, noNFT, loadingDisplay}
// ========================================================================

// mint后庆祝撒花
// function canvas() {
// 	var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, range, resizeWindow, xpos;
// 	NUM_CONFETTI = 350;
// 	COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
// 	PI_2 = 2 * Math.PI;

// 	canvas = document.getElementById("confetti");
// 	context = canvas.getContext("2d");

// 	window.w = 0;
// 	window.h = 0;

// 	resizeWindow = function() {
// 		window.w = canvas.width = window.innerWidth;
// 		return window.h = canvas.height = window.innerHeight;
// 	};

// 	window.addEventListener('resize', resizeWindow, false);

// 	window.onload = function() {
// 		return setTimeout(resizeWindow, 0);
// 	};

// 	range = function(a, b) {
// 		return (b - a) * Math.random() + a;
// 	};

// 	drawCircle = function(x, y, r, style) {
// 		context.beginPath();
// 		context.arc(x, y, r, 0, PI_2, false);
// 		context.fillStyle = style;
// 		return context.fill();
// 	};

// 	xpos = 0.4;

// 	document.onmousemove = function(e) {
// 		return xpos = e.pageX / w;
// 	};

// 	window.requestAnimationFrame = (function() {
// 		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
// 				return window.setTimeout(callback, 1000 / 60);
// 			};
// 	})();

// 	Confetti = (function() {
// 		function Confetti() {
// 			this.style = COLORS[~~range(0, 5)];
// 			this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
// 			this.r = ~~range(2, 6);
// 			this.r2 = 2 * this.r;
// 			this.replace();
// 		}

// 		Confetti.prototype.replace = function() {
// 			this.opacity = 0;
// 			this.dop = 0.03 * range(1, 4);
// 			this.x = range(-this.r2, w - this.r2);
// 			this.y = range(-20, h - this.r2);
// 			this.xmax = w - this.r;
// 			this.ymax = h - this.r;
// 			this.vx = range(0, 2) + 8 * xpos - 5;
// 			return this.vy = 0.7 * this.r + range(-1, 1);
// 		};

// 		Confetti.prototype.draw = function() {
// 			var _ref;
// 			this.x += this.vx;
// 			this.y += this.vy;
// 			this.opacity += this.dop;
// 			if (this.opacity > 1) {
// 				this.opacity = 1;
// 				this.dop *= -1;
// 			}
// 			if (this.opacity < 0 || this.y > this.ymax) {
// 				this.replace();
// 			}
// 			if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
// 				this.x = (this.x + this.xmax) % this.xmax;
// 			}
// 			return drawCircle(~~this.x, ~~this.y, this.r, "" + this.rgb + "," + this.opacity + ")");
// 		};
// 		return Confetti;
// 	})();

// 	confetti = (function() {
// 		var _i, _results;
// 		_results = [];
// 		for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
// 			_results.push(new Confetti);
// 		}
// 		return _results;
// 	})();

// 	window.step = function() {
// 		var c, _i, _len, _results;
// 		requestAnimationFrame(step);
// 		context.clearRect(0, 0, w, h);
// 		_results = [];
// 		for (_i = 0, _len = confetti.length; _i < _len; _i++) {
// 			c = confetti[_i];
// 			_results.push(c.draw());
// 		}
// 		return _results;
// 	};
// 	step();
// }
// ==================================================================================================================================
