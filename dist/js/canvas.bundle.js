!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){t.exports={randomIntFromRange:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},randomColor:function(t){return t[Math.floor(Math.random()*t.length)]},distance:function(t,e,i,n){var r=i-t,o=n-e;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}},function(t,e,i){"use strict";i.r(e);var n=i(0);function r(t,e){return{x:t.x*Math.cos(e)-t.y*Math.sin(e),y:t.x*Math.sin(e)+t.y*Math.cos(e)}}function o(t,e){var i=t.velocity.x-e.velocity.x,n=t.velocity.y-e.velocity.y;if(i*(e.x-t.x)+n*(e.y-t.y)>=0){var o=-Math.atan2(e.y-t.y,e.x-t.x),a=t.mass,c=e.mass,s=r(t.velocity,o),h=r(e.velocity,o),y={x:s.x*(a-c)/(a+c)+2*h.x*c/(a+c),y:s.y},u={x:h.x*(a-c)/(a+c)+2*s.x*c/(a+c),y:h.y},l=r(y,-o),f=r(u,-o);t.velocity.x=l.x,t.velocity.y=l.y,e.velocity.x=f.x,e.velocity.y=f.y}}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=document.querySelector("canvas"),s=c.getContext("2d");c.width=innerWidth,c.height=innerHeight;var h={x:innerWidth/2,y:innerHeight/2},y=["#2185C5","#7ECEFD","#FF7F66"];addEventListener("mousemove",(function(t){h.x=t.clientX,h.y=t.clientY})),addEventListener("resize",(function(){c.width=innerWidth,c.height=innerHeight,f()}));var u,l=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.radius=n,this.color=r,this.velocity={x:5*(Math.random()-.5),y:5*(Math.random()-.5)},this.mass=1,this.opacity=0}var e,i,r;return e=t,(i=[{key:"setVelocity",value:function(t,e){this.velocity={x:t,y:e}}},{key:"draw",value:function(){s.beginPath(),s.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),s.save(),s.globalAlpha=this.opacity,s.fillStyle=this.color,s.fill(),s.restore(),s.strokeStyle=this.color,s.stroke(),s.closePath()}},{key:"update",value:function(t){this.draw();for(var e=0;e<t.length;e++)this!==t[e]&&Object(n.distance)(this.x,this.y,t[e].x,t[e].y)-2*this.radius<0&&o(this,t[e]);(this.x-this.radius<=0||this.x+this.radius>=innerWidth)&&(this.velocity.x=-this.velocity.x),(this.y-this.radius<=0||this.y+this.radius>=innerHeight)&&(this.velocity.y=-this.velocity.y),Object(n.distance)(h.x,h.y,this.x,this.y)<120&&this.opacity<.2?this.opacity+=.02:this.opacity>0&&(this.opacity-=.02,this.opacity=Math.max(0,this.opacity)),this.x+=this.velocity.x,this.y+=this.velocity.y}}])&&a(e.prototype,i),r&&a(e,r),t}();function f(){u=[];for(var t=0;t<100;t++){var e=Object(n.randomIntFromRange)(15,c.width-15),i=Object(n.randomIntFromRange)(15,c.height-15),r=Object(n.randomColor)(y);if(0!==t)for(var o=0;o<u.length;o++)Object(n.distance)(e,i,u[o].x,u[o].y)-30<0&&(e=Object(n.randomIntFromRange)(15,c.width-15),i=Object(n.randomIntFromRange)(15,c.height-15),o=-1);u.push(new l(e,i,15,r))}}f(),function t(){requestAnimationFrame(t),s.clearRect(0,0,c.width,c.height),u.forEach((function(t){t.update(u)}))}()}]);
//# sourceMappingURL=canvas.bundle.js.map