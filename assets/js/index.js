!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/assets/js/",e(0)}([function(t,e,n){window.Hammer=n(3);var i=document.querySelector(".toggle-sidebar"),r=document.querySelector(".sidebar");i&&r&&i.addEventListener("click",function(t){-1===r.className.indexOf("show")?r.className+=" show":r.className=r.className.replace("show",""),t.preventDefault()}),document.querySelector("#hitarea")&&n(1),n(2)},function(){function t(){f.className=""}function e(){l={translate:{x:d,y:m},scale:1,rotate:0},f.className="animate",i()}function n(){var t=["translate3d("+l.translate.x+"px, "+l.translate.y+"px, 0)","scale("+l.scale+", "+l.scale+")","rotate("+l.rotate+"deg)"];f.style.webkitTransform=f.style.transform=t.join(" "),v=!1}function i(){v||(v=!0,p(n))}function r(t){l.translate={x:d+t.deltaX,y:m+t.deltaY},i()}function s(t){l.translate={x:d+1.2*t.deltaX,y:m+1.2*t.deltaY},l.scale=1.2,i(),setTimeout(function(){e()},400)}function o(t){l.scale=t.scale,i()}function a(t){l.rotate=t.rotation,i()}function c(){l.scale=.9,i(),setTimeout(function(){l.scale=1,i()},200)}function u(){l.rotate=l.rotate?0:360,i()}function h(){f.style.background="#fd0",setTimeout(function(){f.style.background="white",i()},500)}var l,p=function(){return window[Hammer.prefixed(window,"requestAnimationFrame")]||function(t){window.setTimeout(t,1e3/60)}}(),f=document.querySelector("#hitarea"),d=Math.round((f.parentNode.offsetWidth-f.offsetWidth)/2),m=Math.round((f.parentNode.offsetHeight-f.offsetHeight)/2),v=!1,g=new Hammer(f);g.get("pinch").set("enable",!0),g.get("rotate").set("enable",!0),g.on("pan",r),g.on("swipe",s),g.on("rotate",a),g.on("pinch",o),g.on("tap",c),g.on("doubletap",u),g.on("hold",h),g.on("panstart rotatestart pinchstart",t),g.on("panend rotateend pinchend pancancel rotatecancel pinchcancel",e),e(),document.querySelector(".device-button").addEventListener("click",function(){document.querySelector(".device").classList.toggle("hammertime")},!1)},function(){if(location.href.indexOf(".github.io")>-1){var t=t||[];t.push(["_setAccount","UA-30289566-1"]),t.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://":"http://")+"stats.g.doubleclick.net/dc.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}!function(t,e,n){var i,r=t.getElementsByTagName(e)[0];t.getElementById(n)||(i=t.createElement(e),i.id=n,i.src="//platform.twitter.com/widgets.js",r.parentNode.insertBefore(i,r))}(document,"script","twitter-wjs")},function(t,e,n){var i;!function(r,s){"use strict";function o(t,e,n){return setTimeout(l(t,n),e)}function a(t,e,n){var i,r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==s)for(i=0,r=t.length;r>i;i++)e.call(n,t[i],i,t);else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function c(t,e,n){for(var i=Object.keys(e),r=0,o=i.length;o>r;r++)(!n||n&&t[i[r]]===s)&&(t[i[r]]=e[i[r]]);return t}function u(t,e){return c(t,e,!0)}function h(t,e,n){var i,r=e.prototype;if(Object.create)i=t.prototype=Object.create(r),i.constructor=t;else{c(t,e);var s=function(){this.constructor=t};s.prototype=r,i=t.prototype=new s}n&&c(i,n),i._super=r}function l(t,e){return function(){return t.apply(e,arguments)}}function p(t,e){return typeof t==oe?t.apply(e?e[0]||r:r,e):t}function f(t,e){return t===s?e:t}function d(t,e,n){a(y(e),function(e){t.addEventListener(e,n,!1)})}function m(t,e,n){a(y(e),function(e){t.removeEventListener(e,n,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function y(t){return t.trim().split(/\s+/g)}function T(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0,r=t.length;r>i;i++)if(n&&t[i][n]==e||!n&&t[i]===e)return i;return-1}function E(t){return Array.prototype.slice.call(t,0)}function w(t,e){for(var n=[],i=[],r=0,s=t.length;s>r;r++){var o=e?t[r][e]:t[r];T(i,o)<0&&n.push(t[r]),i[r]=o}return n}function _(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0,a=se.length;a>o;o++)if(n=se[o],i=n?n+r:e,i in t)return i;return s}function b(){return he++}function A(t,e){var n=this;this.manager=t,this.callback=e,this.domHandler=function(t){p(n.manager.options.enable,[n.manager])&&n.handler(t)},this.evEl&&d(this.manager.element,this.evEl,this.domHandler),this.evWin&&d(r,this.evWin,this.domHandler)}function I(t){var e;return new(e=fe?q:de?F:pe?H:Y)(t,N)}function N(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&Ee&&i-r===0,o=e&_e&&i-r===0;n.isFirst=s,n.isFinal=o,s&&(t.session={}),n.eventType=e,S(t,n),t.recognize(n)}function S(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=M(e)),r>1&&!n.firstMultiple?n.firstMultiple=M(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,c=D(i);e.timeStamp=ue(),e.deltaTime=e.timeStamp-s.timeStamp,e.deltaX=c.x-a.x,e.deltaY=c.y-a.y,e.center=c,e.angle=O(a,c),e.distance=C(a,c),e.offsetDirection=R(e.deltaX,e.deltaY),e.scale=o?X(o.pointers,i):1,e.rotation=o?P(o.pointers,i):0;var u=t.element;v(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u,x(n,e)}function x(t,e){var n=t.lastInterval;n||(n=t.lastInterval=M(e));var i,r,o,a,c=e.timeStamp-n.timeStamp;if(c>Te||n.velocity===s){var u=n.deltaX-e.deltaX,h=n.deltaY-e.deltaY,l=z(c,u,h);r=l.x,o=l.y,i=Math.max(l.x,l.y),a=R(u,h)}else i=n.velocity,r=n.velocityX,o=n.velocityY,a=n.direction;e.velocity=i,e.velocityX=r,e.velocityY=o,e.direction=a}function M(t){for(var e=[],n=0;n<t.pointers.length;n++)e[n]={clientX:ce(t.pointers[n].clientX),clientY:ce(t.pointers[n].clientY)};return{timeStamp:ue(),pointers:e,center:D(e),deltaX:t.deltaX,deltaY:t.deltaY}}function D(t){var e=t.length;if(1===e)return{x:ce(t[0].clientX),y:ce(t[0].clientY)};for(var n=0,i=0,r=0;e>r;r++)n+=t[r].clientX,i+=t[r].clientY;return{x:ce(n/e),y:ce(i/e)}}function z(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}}function R(t,e){return t===e?Ae:Math.abs(t)>=Math.abs(e)?t>0?Ie:Ne:e>0?Se:xe}function C(t,e,n){n||(n=Re);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function O(t,e,n){n||(n=Re);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function P(t,e){return O(e[1],e[0],Ce)-O(t[1],t[0],Ce)}function X(t,e){return C(e[0],e[1],Ce)/C(t[0],t[1],Ce)}function Y(){this.evEl=Pe,this.evWin=Xe,this.allow=!0,this.pressed=!1,A.apply(this,arguments)}function q(){this.evEl=Fe,this.evWin=Le,A.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function F(){this.evEl=ke,this.targetIds={},A.apply(this,arguments)}function L(t,e){var n,i,r=e.targetIds,s=E(t.targetTouches),o=E(t.changedTouches),a=[];if("touchstart"==t.type)for(n=0,i=s.length;i>n;n++)r[s[n].identifier]=!0;for(n=0,i=o.length;i>n;n++)r[o[n].identifier]&&a.push(o[n]),("touchend"==t.type||"touchcancel"==t.type)&&delete r[o[n].identifier];return[w(s.concat(a),"identifier"),a]}function H(){A.apply(this,arguments);var t=l(this.handler,this);this.touch=new F(this.manager,t),this.mouse=new Y(this.manager,t)}function k(t,e){this.manager=t,this.set(e)}function W(t){return g(t,Ve)?Ve:g(t,Ze)||g(t,Je)?t.replace(/[\-\w]+/g,function(t){return/^pan\-/.test(t)?t:""}):g(t,Ge)?Ge:Be}function j(t){this.id=b(),this.manager=null,this.options=u(t||{},this.defaults),this.options.enable=f(this.options.enable,!0),this.state=Ke,this.simultaneous={},this.requireFail=[]}function U(t){return t&nn?"cancel":t&tn?"end":t&$e?"move":t&Qe?"start":""}function B(t){return t==xe?"down":t==Se?"up":t==Ie?"left":t==Ne?"right":""}function G(t,e){var n=e.manager;return n?n.get(t):t}function V(){j.apply(this,arguments)}function Z(){V.apply(this,arguments),this.pX=null,this.pY=null}function J(){V.apply(this,arguments)}function K(){j.apply(this,arguments),this._timer=null,this._input=null}function Q(){V.apply(this,arguments)}function $(){V.apply(this,arguments)}function te(){j.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ee(t,e){return e=e||{},e.recognizers=f(e.recognizers,ee.defaults.easyRecognizers),new ne(t,e)}function ne(t,e){e=e||{},this.options=u(e,ee.defaults),this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=I(this),this.touchAction=new k(this,this.options.touchAction),ie(this,!0),a(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&a(t[2],e.recognizeWith,e),t[3]&&a(t[3],e.requireFailure,e)},this)}function ie(t,e){var n=t.element,i=t.options.cssProps;a(i,function(t,i){n.style[_(n.style,i)]=e?t:""});var r=e&&function(){return!1};"none"==i.userSelect&&(n.onselectstart=r),"none"==i.userDrag&&(n.ondragstart=r)}function re(t,e){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var se=["","webkit","moz","MS","ms","o"],oe="function",ae="undefined",ce=Math.round,ue=Date.now,he=1,le=/mobile|tablet|ip(ad|hone|od)|android/i,pe="ontouchstart"in r,fe=_(r,"PointerEvent")!==s,de=pe&&le.test(navigator.userAgent),me="touch",ve="pen",ge="mouse",ye="kinect",Te=25,Ee=1,we=2,_e=4,be=8,Ae=1,Ie=2,Ne=4,Se=8,xe=16,Me=Ie|Ne,De=Se|xe,ze=Me|De,Re=["x","y"],Ce=["clientX","clientY"];A.prototype={handler:function(){},destroy:function(){this.elEvents&&m(this.manager.element,this.elEvents,this.domHandler),this.winEvents&&m(r,this.winEvents,this.domHandler)}};var Oe={mousedown:Ee,mousemove:we,mouseup:_e,mouseout:be},Pe="mousedown",Xe="mousemove mouseout mouseup";h(Y,A,{handler:function(t){var e=Oe[t.type];if(e&Ee&&0===t.button&&(this.pressed=!0),e&we&&1!==t.which&&(e=_e),this.pressed&&this.allow){var n=t.relatedTarget||t.toElement||t.target;"mouseout"==t.type&&"HTML"!=n.nodeName&&(e=we),e&(_e|be)&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:ge,srcEvent:t})}}});var Ye={pointerdown:Ee,pointermove:we,pointerup:_e,pointercancel:be,pointerout:be},qe={2:me,3:ve,4:ge,5:ye},Fe="pointerdown pointermove pointerup pointercancel",Le="pointerout";r.MSPointerEvent&&(Fe="MSPointerDown MSPointerMove MSPointerUp MSPointerCancel",Le="MSPointerOut"),h(q,A,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Ye[i],s=qe[t.pointerType]||t.pointerType,o=t.relatedTarget||t.toElement||t.target;"pointerout"==i&&"HTML"!=o.nodeName&&(r=we),r&Ee&&(0===t.button||s==me)?e.push(t):r&(_e|be)&&(n=!0);var a=T(e,t.pointerId,"pointerId");0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var He={touchstart:Ee,touchmove:we,touchend:_e,touchcancel:be},ke="touchstart touchmove touchend touchcancel";h(F,A,{handler:function(t){var e=L(t,this);this.callback(this.manager,He[t.type],{pointers:e[0],changedPointers:e[1],pointerType:me,srcEvent:t})}}),h(H,A,{handler:function(t,e,n){var i=n.pointerType==me,r=n.pointerType==ge;if(i)this.mouse.allow=!1;else if(r&&!this.mouse.allow)return;e&(_e|be)&&(this.mouse.allow=!0),this.callback(t,e,n)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var We=_(document.body.style,"touchAction"),je=We!==s,Ue="compute",Be="auto",Ge="manipulation",Ve="none",Ze="pan-x",Je="pan-y";k.prototype={set:function(t){t==Ue&&(t=this.compute()),je&&(this.manager.element.style[We]=t),this.actions=t.toLowerCase()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t,e=[];return a(this.manager.recognizers,function(t){p(t.options.enable,t)&&(e=e.concat(t.getTouchAction()))}),t=w(e).join(" "),W(t)},preventDefaults:function(t){if(!je){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=g(i,Ve),s=g(i,Je),o=g(i,Ze);return r||s&&o||s&&n&Me||o&&n&De?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Ke=1,Qe=2,$e=4,tn=8,en=tn,nn=16,rn=32;j.prototype={defaults:{},set:function(t,e){return this.options[t]=e,this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){var e=this.simultaneous;return t=G(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return t=G(t,this),delete this.simultaneous[t.id],this},requireFailure:function(t){var e=this.requireFail;return t=G(t,this),-1===T(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){t=G(t,this);var e=T(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){this.manager.emit(this.options.event,t),this.manager.emit(this.options.event+U(this.state),t)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=rn)},canEmit:function(){for(var t=0;t<this.requireFail.length;t++)if(!(this.requireFail[t].state&(rn|Ke)))return!1;return!0},recognize:function(t){var e=c({},t);return p(this.options.enable,[this,e])?(this.state&(en|nn|rn)&&(this.state=Ke),this.state=this.process(e),void(this.state&(Qe|$e|tn|nn)&&this.tryEmit(e))):(this.reset(),void(this.state=rn))},process:function(){},getTouchAction:function(){},reset:function(){}},h(V,j,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(Qe|$e),r=this.attrTest(t);return i&&(n&be||!r)?e|nn:i||r?n&_e?e|tn:e&Qe?e|$e:Qe:rn}}),h(Z,V,{defaults:{event:"pan",threshold:10,pointers:1,direction:ze},getTouchAction:function(){var t=this.options.direction;if(t===ze)return[Ve];var e=[];return t&Me&&e.push(Je),t&De&&e.push(Ze),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Me?(r=0===s?Ae:0>s?Ie:Ne,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?Ae:0>o?Se:xe,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return V.prototype.attrTest.call(this,t)&&(this.state&Qe||!(this.state&Qe)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY,this._super.emit.call(this,t);var e=B(t.direction);e&&this.manager.emit(this.options.event+e,t)}}),h(J,V,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Ze,Je]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Qe)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),h(K,j,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Be]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;return this._input=t,!i||!n||t.eventType&(_e|be)&&!r?this.reset():t.eventType&Ee&&(this.reset(),this._timer=o(function(){this.state=en,this.tryEmit()},e.time,this)),rn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state===en&&(this._input.timeStamp=ue(),this.manager.emit(this.options.event,this._input))}}),h(Q,V,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Ve]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Qe)}}),h($,V,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Me|De,pointers:1},getTouchAction:function(){return Z.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Me|De)?e=t.velocity:n&Me?e=t.velocityX:n&De&&(e=t.velocityY),this._super.attrTest.call(this,t)&&n&t.direction&&e>this.options.velocity&&t.eventType&_e},emit:function(t){this.manager.emit(this.options.event,t);var e=B(t.direction);e&&this.manager.emit(this.options.event+e,t)}}),h(te,j,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Ge]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Ee&&0===this.count)return this._failTimeout();if(i&&r&&n){if(t.eventType!=_e)return this._failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,a=!this.pCenter||C(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t;var c=this.count%e.taps;if(0===c)return this.hasRequireFailures()?(this._timer=o(function(){this.state=en,this.tryEmit()},e.interval,this),Qe):en}return rn},_failTimeout:function(){return this._timer=o(function(){this.state=rn},this.options.interval,this),rn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==en&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ee.VERSION="2.0.0-dev",ee.defaults={domEvents:!1,touchAction:Ue,enable:!0,easyRecognizers:[[Q,{enable:!1}],[J,{enable:!1},["rotate"]],[$,{direction:Me}],[Z,{direction:Me},["swipe"]],[te],[te,{event:"doubletap",taps:2},["tap"]],[K]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var sn=1,on=2;ne.prototype={set:function(t,e){this.options[t]=e},stop:function(t){this.session.stopped=t?on:sn},recognize:function(t){if(!this.session.stopped){this.touchAction.preventDefaults(t);var e,n=this.session,i=n.curRecognizer;(!i||i&&i.state&en)&&(i=n.curRecognizer=null);for(var r=0,s=this.recognizers.length;s>r;r++)e=this.recognizers[r],this.session.stopped===on||i&&e!=i&&!e.canRecognizeWith(i)?e.reset():e.recognize(t),!i&&e.state&(Qe|$e|tn)&&(i=n.curRecognizer=e)}},get:function(t){if(t instanceof j)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){var e=this.recognizers;t=this.get(t),e.splice(T(e,t),1),this.touchAction.update()},on:function(t,e){var n=this.handlers;return a(y(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this},off:function(t,e){var n=this.handlers;return a(y(t),function(t){e?n[t].splice(T(n[t],e),1):delete n[t]}),this},emit:function(t,e){this.options.domEvents&&re(t,e);var n=this.handlers[t];if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0,r=n.length;r>i;i++)n[i](e)}},destroy:function(){this.element&&ie(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(ee,{INPUT_START:Ee,INPUT_MOVE:we,INPUT_END:_e,INPUT_CANCEL:be,STATE_POSSIBLE:Ke,STATE_BEGAN:Qe,STATE_CHANGED:$e,STATE_ENDED:tn,STATE_RECOGNIZED:en,STATE_CANCELLED:nn,STATE_FAILED:rn,DIRECTION_NONE:Ae,DIRECTION_LEFT:Ie,DIRECTION_RIGHT:Ne,DIRECTION_UP:Se,DIRECTION_DOWN:xe,DIRECTION_HORIZONTAL:Me,DIRECTION_VERTICAL:De,DIRECTION_ALL:ze,Manager:ne,Input:A,TouchAction:k,Recognizer:j,AttrRecognizer:V,Tap:te,Pan:Z,Swipe:$,Pinch:J,Rotate:Q,Press:K,on:d,off:m,each:a,merge:u,extend:c,inherit:h,bindFn:l,prefixed:_}),"function"==oe&&n(4)?(i=function(){return ee}.call(e,n,e,t),!(i!==s&&(t.exports=i))):typeof t!=ae&&t.exports?t.exports=ee:r.Hammer=ee}(window)},function(t,e){(function(e){t.exports=e}).call(e,{})}]);
//# sourceMappingURL=index.js.map