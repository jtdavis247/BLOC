// usage: log('inside coolFunc', this, arguments);
function FastClick(a){"use strict";var b,c=this;this.trackingClick=!1,this.targetElement=null,this.layer=a;if(!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){FastClick.prototype.onClick.apply(c,arguments)},this.onTouchStart=function(){FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){FastClick.prototype.onTouchCancel.apply(c,arguments)};if(typeof window.ontouchstart=="undefined")return;a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),typeof a.onclick=="function"&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null)}window.log=function(){log.history=log.history||[],log.history.push(arguments),this.console&&(arguments.callee=arguments.callee.caller,console.log(Array.prototype.slice.call(arguments)))},function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;d=c.pop();)a[d]=a[d]||b}(window.console=window.console||{}),function(a){var b=0;a.fn.mobileMenu=function(d){function e(d){return d.attr("id")?a("#mobileMenu_"+d.attr("id")).length>0:(b++,d.attr("id","mm"+b),a("#mobileMenu_mm"+b).length>0)}function f(b){b.hide(),a("#mobileMenu_"+b.attr("id")).show()}function g(b){if(b.is("ul, ol")){var c='<select id="mobileMenu_'+b.attr("id")+'" class="mobileMenu">';c+='<option value="">'+j.topOptionText+"</option>",b.find("li").each(function(){var b="",d=a(this).parents("ul, ol").length;for(i=1;i<d;i++)b+=j.indentString;d=a(this).find("a:first-child").attr("href"),b+=a(this).clone().children("ul, ol").remove().end().text(),c+='<option value="'+d+'">'+b+"</option>"}),c+="</select>",b.parent().append(c),a("#mobileMenu_"+b.attr("id")).change(function(){var b=a(this);b.val()!==null&&(document.location.href=b.val())}),f(b)}else alert("mobileMenu will only work with UL or OL elements!")}function h(b){a(window).width()<j.switchWidth&&!e(b)?g(b):a(window).width()<j.switchWidth&&e(b)?f(b):!(a(window).width()<j.switchWidth)&&e(b)&&(b.show(),a("#mobileMenu_"+b.attr("id")).hide())}var j={switchWidth:768,topOptionText:"Select a page",indentString:"&nbsp;&nbsp;&nbsp;"};return this.each(function(){d&&a.extend(j,d);var b=a(this);a(window).resize(function(){h(b)}),h(b)})}}(jQuery),function(a){function c(a){return typeof a=="object"?a:{top:a,left:a}}var b=a.scrollTo=function(b,c,d){a(window).scrollTo(b,c,d)};b.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},b.window=function(b){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||d.compatMode=="BackCompat"?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return typeof e=="object"&&(f=e,e=0),typeof f=="function"&&(f={onAfter:f}),d=="max"&&(d=9e9),f=a.extend({},b.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=c(f.offset),f.over=c(f.over),this._scrollable().each(function(){function o(a){j.animate(m,e,f.easing,a&&function(){a.call(this,d,f)})}if(d==null)return;var i=this,j=a(i),k=d,l,m={},n=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)){k=c(k);break}k=a(k,this);if(!k.length)return;case"object":if(k.is||k.style)l=(k=a(k)).offset()}a.each(f.axis.split(""),function(a,c){var d=c=="x"?"Left":"Top",e=d.toLowerCase(),p="scroll"+d,q=i[p],r=b.max(i,c);if(l)m[p]=l[e]+(n?0:q-j.offset()[e]),f.margin&&(m[p]-=parseInt(k.css("margin"+d))||0,m[p]-=parseInt(k.css("border"+d+"Width"))||0),m[p]+=f.offset[e]||0,f.over[e]&&(m[p]+=k[c=="x"?"width":"height"]()*f.over[e]);else{var s=k[e];m[p]=s.slice&&s.slice(-1)=="%"?parseFloat(s)/100*r:s}f.limit&&/^\d+$/.test(m[p])&&(m[p]=m[p]<=0?0:Math.min(m[p],r)),!a&&f.queue&&(q!=m[p]&&o(f.onAfterFirst),delete m[p])}),o(f.onAfter)}).end()},b.max=function(b,c){var d=c=="x"?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])}}(jQuery),function(a){function b(a,b){for(var c=a,d=0;a=a[b];)c.tagName==a.tagName&&d++;return d}function c(a,c,d){a=b(a,d);if(c=="odd"||c=="even")d=2,a-=c!="odd";else{var f=c.indexOf("n");f>-1?(d=parseInt(c,10)||parseInt(c.substring(0,f)+"1",10),a-=(parseInt(c.substring(f+1),10)||0)-1):(d=a+1,a-=parseInt(c,10)-1)}return(d<0?a<=0:a>=0)&&a%d==0}var d={"first-of-type":function(a){return b(a,"previousSibling")==0},"last-of-type":function(a){return b(a,"nextSibling")==0},"only-of-type":function(a){return d["first-of-type"](a)&&d["last-of-type"](a)},"nth-of-type":function(a,b,d){return c(a,d[3],"previousSibling")},"nth-last-of-type":function(a,b,d){return c(a,d[3],"nextSibling")}};a.extend(a.expr[":"],d)}(jQuery),function(a,b,c){function f(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function g(){var a=c(this);a.val()===a.attr("placeholder")&&a.hasClass("placeholder")&&(a.data("placeholder-password")?a.hide().next().show().focus().attr("id",a.removeAttr("id").data("placeholder-id")):a.val("").removeClass("placeholder"))}function h(){var a,b=c(this),d=b,e=this.id;if(b.val()===""){if(b.is(":password")){if(!b.data("placeholder-textinput")){try{a=b.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(f(this),{type:"text"}))}a.removeAttr("name").data("placeholder-password",!0).data("placeholder-id",e).bind("focus.placeholder",g),b.data("placeholder-textinput",a).data("placeholder-id",e).before(a)}b=b.removeAttr("id").hide().prev().attr("id",e).show()}b.addClass("placeholder").val(b.attr("placeholder"))}else b.removeClass("placeholder")}var d="placeholder"in b.createElement("input"),e="placeholder"in b.createElement("textarea");d&&e?(c.fn.placeholder=function(){return this},c.fn.placeholder.input=c.fn.placeholder.textarea=!0):(c.fn.placeholder=function(){return this.filter((d?"textarea":":input")+"[placeholder]").bind("focus.placeholder",g).bind("blur.placeholder",h).trigger("blur.placeholder").end()},c.fn.placeholder.input=d,c.fn.placeholder.textarea=e,c(function(){c("form").bind("submit.placeholder",function(){var a=c(".placeholder",this).each(g);setTimeout(function(){a.each(h)},10)})}),c(a).bind("unload.placeholder",function(){c(".placeholder").val("")}))}(this,document,jQuery),function(a,b){var c=function(a,b,c){var d;return function(){function h(){c||a.apply(f,g),d=null}var f=this,g=arguments;d?clearTimeout(d):c&&a.apply(f,g),d=setTimeout(h,b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize"),function(a,b,c){function d(a,b,c,d,e,f,g,h,i){var k=!1,g=!0===g&&!0===h,b=b||{};b.original||(b.original={},k=!0),b.properties=b.properties||{},b.secondary=b.secondary||{};for(var h=b.meta,l=b.original,m=b.properties,n=b.secondary,o=j.length-1;0<=o;o--){var p=j[o]+"transition-property",q=j[o]+"transition-duration",r=j[o]+"transition-timing-function",c=g?j[o]+"transform":c;k&&(l[p]=a.css(p)||"",l[q]=a.css(q)||"",l[r]=a.css(r)||""),n[c]=g?(!0===i||!0===t&&!1!==i)&&s?"translate3d("+h.left+"px, "+h.top+"px, 0)":"translate("+h.left+"px,"+h.top+"px)":f,m[p]=(m[p]?m[p]+",":"")+c,m[q]=(m[q]?m[q]+",":"")+d+"ms",m[r]=(m[r]?m[r]+",":"")+e}return b}function e(a){for(var b in a)return!1;return!0}function f(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function g(a){var b=!0;return a.each(function(a,c){return b=b&&c.ownerDocument}),b}var h="top right bottom left opacity height width".split(" "),i=["top","right","bottom","left"],j=["-webkit-","-moz-","-o-",""],k=["avoidTransforms","useTranslate3d","leaveTransforms"],l=/^([+-]=)?([\d+-.]+)(.*)$/,m=/([A-Z])/g,n={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},o=null,p=!1,q=(document.body||document.documentElement).style,r=void 0!==q.WebkitTransition||void 0!==q.MozTransition||void 0!==q.OTransition||void 0!==q.transition,s="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,t=s;a.expr&&a.expr.filters&&(o=a.expr.filters.animated,a.expr.filters.animated=function(b){return a(b).data("events")&&a(b).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:o.call(this,b)}),a.extend({toggle3DByDefault:function(){return t=!t},toggleDisabledByDefault:function(){return p=!p}}),a.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var c=j.length-1;0<=c;c--){var d=a.getPropertyValue(j[c]+"transform");if(d&&/matrix/i.test(d)){a=d.replace(/^matrix\(/i,"").split(/, |\)$/g),b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b},a.fn.animate=function(c,m,o,q){var c=c||{},s="undefined"==typeof c.bottom&&"undefined"==typeof c.right,t=a.speed(m,o,q),u=this,v=0,w=function(){v--,0===v&&"function"==typeof t.complete&&t.complete.apply(u,arguments)},x;if(!(x=!0===("undefined"!=typeof c.avoidCSSTransitions?c.avoidCSSTransitions:p))&&!(x=!r)&&!(x=e(c))){var y;a:{for(y in c)if(("width"==y||"height"==y)&&("show"==c[y]||"hide"==c[y]||"toggle"==c[y])){y=!0;break a}y=!1}x=y||0>=t.duration||!0===a.fn.animate.defaults.avoidTransforms&&!1!==c.avoidTransforms}return x?b.apply(this,arguments):this[!0===t.queue?"queue":"each"](function(){var m=a(this),o=a.extend({},t),p=function(b){var d=m.data("jQe")||{original:{}},e={};if(2==b.eventPhase){if(!0!==c.leaveTransforms){for(b=j.length-1;0<=b;b--)e[j[b]+"transform"]="";if(s&&"undefined"!=typeof d.meta)for(var b=0,f;f=i[b];++b)e[f]=d.meta[f+"_o"]+"px",a(this).css(f,e[f])}m.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(d.original).css(e).data("jQe",null),"hide"===c.opacity&&m.css({display:"none",opacity:""}),w.call(this)}},q={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},r={},q=q[o.easing||"swing"]?q[o.easing||"swing"]:o.easing||"swing",u;for(u in c)if(-1===a.inArray(u,k)){var x=-1<a.inArray(u,i),y,A=m,B=c[u],C=u,D=x&&!0!==c.avoidTransforms;if("d"==C)y=void 0;else if(g(A)){var E=l.exec(B);y="auto"===A.css(C)?0:A.css(C),y="string"==typeof y?f(y):y,"string"==typeof B&&f(B);var D=!0===D?0:y,F=A.is(":hidden"),J=A.translation();"left"==C&&(D=parseInt(y,10)+J.x),"right"==C&&(D=parseInt(y,10)+J.x),"top"==C&&(D=parseInt(y,10)+J.y),"bottom"==C&&(D=parseInt(y,10)+J.y),!E&&"show"==B?(D=1,F&&A.css({display:"block",opacity:0})):!E&&"hide"==B&&(D=0),E?(A=parseFloat(E[2]),E[1]&&(A=("-="===E[1]?-1:1)*A+parseInt(D,10)),y=A):y=D}else y=void 0;if(E=!0!==c.avoidTransforms)(E=u,A=y,B=m,g(B))?(C=-1<a.inArray(E,h),("width"==E||"height"==E||"opacity"==E)&&parseFloat(A)===parseFloat(B.css(E))&&(C=!1),E=C):E=!1;if(E){E=m,A=u,B=o.duration,C=q,y=x&&!0===c.avoidTransforms?y+"px":y;var x=x&&!0!==c.avoidTransforms,D=s,F=!0===c.useTranslate3d,J=(J=E.data("jQe"))&&!e(J)?J:a.extend(!0,{},n),K=y;if(-1<a.inArray(A,i)){var M=J.meta,N=f(E.css(A))||0,P=A+"_o",K=y-N;M[A]=K,M[P]="auto"==E.css(A)?0+K:N+K||0,J.meta=M,D&&0===K&&(K=0-M[P],M[A]=K,M[P]=0)}E.data("jQe",d(E,J,A,B,C,K,x,D,F))}else r[u]=c[u]}m.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((u=m.data("jQe"))&&!e(u)&&!e(u.secondary)){v++,m.css(u.properties);var T=u.secondary;setTimeout(function(){m.bind("webkitTransitionEnd oTransitionEnd transitionend",p).css(T)})}else o.queue=!1;return e(r)||(v++,b.apply(m,[r,{duration:o.duration,easing:a.easing[o.easing]?o.easing:a.easing.swing?"swing":"linear",complete:w,queue:o.queue}])),!0})},a.fn.animate.defaults={},a.fn.stop=function(b,d,f){return r?(b&&this.queue([]),this.each(function(){var g=a(this),h=g.data("jQe");if(h&&!e(h)){var i,k={};if(d){if(k=h.secondary,!f&&void 0!==typeof h.meta.left_o||void 0!==typeof h.meta.top_o){k.left=void 0!==typeof h.meta.left_o?h.meta.left_o:"auto",k.top=void 0!==typeof h.meta.top_o?h.meta.top_o:"auto";for(i=j.length-1;0<=i;i--)k[j[i]+"transform"]=""}}else if(!e(h.secondary)){var l=window.getComputedStyle(g[0],null);if(l)for(var n in h.secondary)if(h.secondary.hasOwnProperty(n)&&(n=n.replace(m,"-$1").toLowerCase(),k[n]=l.getPropertyValue(n),!f&&/matrix/i.test(k[n]))){i=k[n].replace(/^matrix\(/i,"").split(/, |\)$/g),k.left=parseFloat(i[4])+parseFloat(g.css("left"))+"px"||"auto",k.top=parseFloat(i[5])+parseFloat(g.css("top"))+"px"||"auto";for(i=j.length-1;0<=i;i--)k[j[i]+"transform"]=""}}g.unbind("webkitTransitionEnd oTransitionEnd transitionend"),g.css(h.original).css(k).data("jQe",null)}else c.apply(g,[b,d])}),this):c.apply(this,[b,d])}}(jQuery,jQuery.fn.animate,jQuery.fn.stop),function(a,b,c,d){var e=function(b,c){this.elem=b,this.$elem=a(b),this.options=c,this.metadata=this.$elem.data("swipe-options")};e.prototype={defaults:{left:function(a){},right:function(a){},threshold:{x:100,y:25}},init:function(){return this.config=a.extend({},this.defaults,this.options,this.metadata),this.coords={start:{x:0,y:0},end:{x:0,y:0}},this.elem.addEventListener&&(this.elem.addEventListener("touchcancel",a.proxy(this.touchCancel,this),!1),this.elem.addEventListener("touchend",a.proxy(this.touchEnd,this),!1),this.elem.addEventListener("touchmove",a.proxy(this.touchMove,this),!1),this.elem.addEventListener("touchstart",a.proxy(this.touchStart,this),!1)),this},touchCancel:function(a){},touchEnd:function(a){var b={x:this.coords.start.x-this.coords.end.x,y:this.coords.start.y-this.coords.end.y};b.y<this.config.threshold.y&&b.y>this.config.threshold.y*-1&&(b.x>this.config.threshold.x&&this.config.left(),b.x<this.config.threshold.x*-1&&this.config.right())},touchMove:function(a){a.preventDefault();var b=a.targetTouches[0];this.coords.end={x:b.pageX,y:b.pageY}},touchStart:function(a){var b=a.targetTouches[0];this.coords={start:{x:b.pageX,y:b.pageY},end:{x:b.pageX,y:b.pageY}}}},e.defaults=e.prototype.defaults,a.fn.swipe=function(a){return this.each(function(){(new e(this,a)).init()})}}(jQuery,window,document),jQuery.onFontResize=function(a){return a(document).ready(function(){var b=a("<iframe />").attr("id","frame-onFontResize"+Date.parse(new Date)).addClass("div-onfontresize").css({width:"100em",height:"10px",position:"absolute",borderWidth:0,top:"-5000px",left:"-5000px"}).appendTo("body");if(a.browser.msie)b.bind("resize",function(){a.onFontResize.trigger(b[0].offsetWidth/100)});else{var c=b[0].contentWindow||b[0].contentDocument||b[0].document;c=c.document||c,c.open(),c.write('<script>window.onload = function(){var em = parent.jQuery(".div-onfontresize")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};</script>'),c.close()}jQuery.onFontResize.initialSize=b[0].offsetWidth/100}),{trigger:function(b){a(document).trigger("fontresize",[b])}}}(jQuery),function(a,b){function e(a){return function(b){return 1-a(1-b)}}function f(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function g(a,b,g){var h=g?b():b,i=g?b(g):b;c[d+"In"+a]=h,c[d+"Out"+a]=e(h),c[d+"InOut"+a]=f(i)}function h(a){return function(b){return Math.pow(b,a)}}var c=a.easing,d="ease";g("Quad",h(2)),g("Cubic",h(3)),g("Quart",h(4)),g("Quint",h(5)),g("Sine",function(a){return 1-Math.cos(a*Math.PI/2)}),g("Expo",function(a){return Math.pow(2,10*(a-1))}),g("Circ",function(a){return 1-Math.sqrt(1-a*a)});var i=function(a){return a===b&&(a=1.70158),function(b){return b*b*((a+1)*b-a)}};g("Back",i,2.5949095),g("Bounce",function(a){var b=2.75,c=7.5625,d=0;return d=a<.25/b?c*(a-=.125/b)*a+.984375:a<.75/b?c*(a-=.5/b)*a+.9375:a<1.75/b?c*(a-=1.25/b)*a+.75:c*--a*a,1-d});var j=function(a){return a===b&&(a=.3),function(b){if(b==!!b)return b;var c=2*Math.PI,d=a/c*Math.asin(1);return-(Math.pow(2,10*--b)*Math.sin((b-d)*c/a))}};g("Elastic",j,.45)}(jQuery),function(a){a.fn.animateCSS=function(b,c,d){return this.each(function(){function f(){e.addClass("animated "+b),e.css("visibility")=="hidden"&&e.css({visibility:"visible"}),e.is(":hidden")&&e.show(),e.bind("animationend webkitAnimationEnd oAnimationEnd",function(){e.removeClass("animated "+b),typeof d=="function"&&(d.call(this),e.unbind("animationend webkitAnimationEnd oAnimationEnd"))})}var e=a(this);if(!c||typeof c=="function")d=c,f();else var g=setTimeout(function(){f()},c)})}}(jQuery),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"label":case"video":return!0;default:return/\bneedsclick\b/.test(a.className)}},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!0;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.maybeSendClick=function(a,b){"use strict";var c,d;return this.needsClick(a)?!1:(document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c),!0)},FastClick.prototype.onTouchStart=function(a){"use strict";var b=a.targetTouches[0];return this.trackingClick=!0,this.targetElement=a.target,this.touchStartX=b.pageX,this.touchStartY=b.pageY,!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.targetTouches[0];return Math.abs(b.pageX-this.touchStartX)>10||Math.abs(b.pageY-this.touchStartY)>10?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";if(!this.trackingClick)return!0;if(this.targetElement!==a.target||this.touchHasMoved(a))this.trackingClick=!1,this.targetElement=null;return!0},FastClick.prototype.findControl=function(a){return"use strict",a.control!==undefined?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c=this.targetElement;if(!this.trackingClick)return!0;this.trackingClick=!1;if(c.nodeName.toLowerCase()==="label"){b=this.findControl(c);if(b)return c.focus(),this.deviceIsAndroid?!1:(this.maybeSendClick(b,a)&&a.preventDefault(),!1)}else if(this.needsFocus(c))return c.focus(),c.tagName.toLowerCase()!=="select"&&a.preventDefault(),!1;return this.maybeSendClick(c,a)?(a.preventDefault(),!1):!1},FastClick.prototype.onTouchCancel=function(){"use strict",this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onClick=function(a){"use strict";var b;return a.forwardedTouchEvent?!0:this.targetElement?(b=this.targetElement,this.targetElement=null,a.cancelable?a.target.type==="submit"&&a.detail===0?!0:this.needsClick(b)?!0:(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault(),!1):!0):!0},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},typeof define=="function"&&define.amd&&define(function(){return"use strict",FastClick}),typeof module!="undefined"&&module.exports&&(module.exports=function(a){return"use strict",new FastClick(a)},module.exports.FastClick=FastClick),window.matchMedia=window.matchMedia||function(a,b){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=g.offsetWidth===42,d.removeChild(f),{matches:c,media:a}}}(document),function(a,b){a.fn.cssAnimationEnd=function(b){var c=this;return c.length>0&&c.bind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(d){a.isFunction(b)&&b.call(c,d)}),c}}(jQuery),function(a,b){a.fn.cssTransitionEnd=function(b){var c=this;return c.length>0&&c.bind("transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd",function(d){a.isFunction(b)&&b.call(c,d)}),c}}(jQuery);