/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
(function(a,b,c){function g(a){return function(){return this[a]}}function i(a,b){var c=a.split("."),d=h;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function j(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function l(a,b,c){return l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?j:k,l.apply(e,arguments)}function n(a,b){this.G=a,this.u=b||a,this.z=this.u.document}function o(a,c,d){a=a.z.getElementsByTagName(c)[0],a||(a=b.documentElement),a&&a.lastChild&&a.insertBefore(d,a.lastChild)}function p(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return;c.push(b),a.className=c.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function q(a,b){for(var c=a.className.split(/\s+/),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function r(a,b){for(var c=a.className.split(/\s+/),e=0,g=c.length;e<g;e++)if(c[e]==b)return d;return f}function s(a){var b=a.u.location.protocol;return"about:"==b&&(b=a.G.location.protocol),"https:"==b?"https:":"http:"}function t(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),e=f;c.onload=function(){e||(e=d)},c.onerror=function(){e||(e=d)},o(a,"head",c)}function u(b,c,g,h){var i=b.z.getElementsByTagName("head")[0];if(i){var j=b.createElement("script",{src:c}),k=f;return j.onload=j.onreadystatechange=function(){!k&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)&&(k=d,g&&g(e),j.onload=j.onreadystatechange=e,"HEAD"==j.parentNode.tagName&&i.removeChild(j))},i.appendChild(j),a.setTimeout(function(){k||(k=d,g&&g(Error("Script load timeout")))},h||5e3),j}return e}function v(a,b,c){this.w=a,this.S=b,this.za=c}function w(a,b,c,d){this.e=a!=e?a:e,this.o=b!=e?b:e,this.aa=c!=e?c:e,this.f=d!=e?d:e}function y(a){a=x.exec(a);var b=e,c=e,d=e,f=e;return a&&(a[1]!==e&&a[1]&&(b=parseInt(a[1],10)),a[2]!==e&&a[2]&&(c=parseInt(a[2],10)),a[3]!==e&&a[3]&&(d=parseInt(a[3],10)),a[4]!==e&&a[4]&&(f=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4])),new w(b,c,d,f)}function z(a,b,c,d,e,f,g,h,i,j,k){this.J=a,this.Fa=b,this.ya=c,this.fa=d,this.Da=e,this.ea=f,this.wa=g,this.Ea=h,this.va=i,this.da=j,this.k=k}function A(a,b){this.a=a,this.H=b}function C(a){var b=F(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=b?(/BB\d{2}/.test(b)&&(b="BlackBerry"),b):(a=F(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1),""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown")}function D(a){var b=F(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=F(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=F(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=F(a.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=F(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}function E(a){var b=C(a),c=D(a),d=y(c),e=F(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=y(e),h="Unknown",i=new w,j="Unknown",k=f;return/OPR\/[\d.]+/.test(a.a)?h="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?h="Chrome":/Silk\/\d/.test(a.a)?h="Silk":"BlackBerry"==b||"Android"==b?h="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?h="PhantomJS":-1!=a.a.indexOf("Safari")?h="Safari":-1!=a.a.indexOf("AdobeAIR")&&(h="AdobeAIR"),"BuiltinBrowser"==h?j="Unknown":"Silk"==h?j=F(a.a,/Silk\/([\d\._]+)/,1):"Chrome"==h?j=F(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?j=F(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==h?j=F(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==h?j=F(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==h&&(j=F(a.a,/PhantomJS\/([\d.]+)/,1)),i=y(j),k="AdobeAIR"==h?2<i.e||2==i.e&&5<=i.o:"BlackBerry"==b?10<=d.e:"Android"==b?2<d.e||2==d.e&&1<d.o:526<=g.e||525<=g.e&&13<=g.o,new z(h,i,j,"AppleWebKit",g,e,b,d,c,G(a.H),new v(k,536>g.e||536==g.e&&11>g.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function F(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function G(a){if(a.documentMode)return a.documentMode}function H(a){this.ua=a||"-"}function I(a,b){this.J=a,this.T=4,this.K="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.K=c[1],this.T=parseInt(c[2],10))}function J(a){return a.K+a.T}function K(a){var b=4,c="n",d=e;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function L(a,b,c){this.c=a,this.h=b,this.M=c,this.j="wf",this.g=new H("-")}function M(a){p(a.h,a.g.f(a.j,"loading")),O(a,"loading")}function N(a){q(a.h,a.g.f(a.j,"loading")),r(a.h,a.g.f(a.j,"active"))||p(a.h,a.g.f(a.j,"inactive")),O(a,"inactive")}function O(a,b,c){a.M[b]&&(c?a.M[b](c.getName(),J(c)):a.M[b]())}function P(a,b){this.c=a,this.C=b,this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}function Q(a,b){var c;c=[];for(var d=b.J.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(","),d="normal",e=b.T+"00","o"===b.K?d="oblique":"i"===b.K&&(d="italic"),a.s.style.cssText="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}function R(a){o(a.c,"body",a.s)}function S(a,b,c,d,f,g,h,i){this.U=a,this.sa=b,this.c=c,this.q=d,this.C=i||"BESbswy",this.k=f,this.F={},this.R=g||5e3,this.Y=h||e,this.B=this.A=e,a=new P(this.c,this.C),R(a);for(var j in T)T.hasOwnProperty(j)&&(Q(a,new I(T[j],J(this.q))),this.F[T[j]]=a.s.offsetWidth);a.remove()}function U(a,b,c){for(var e in T)if(T.hasOwnProperty(e)&&b===a.F[T[e]]&&c===a.F[T[e]])return d;return f}function V(a){var b=a.A.s.offsetWidth,c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.k.S&&U(a,b,c)?m()-a.xa>=a.R?a.k.S&&U(a,b,c)&&(a.Y===e||a.Y.hasOwnProperty(a.q.getName()))?W(a,a.U):W(a,a.sa):setTimeout(l(function(){V(this)},a),25):W(a,a.U)}function W(a,b){a.A.remove(),a.B.remove(),b(a.q)}function X(a,b,c,d){this.c=b,this.t=c,this.N=0,this.ba=this.X=f,this.R=d,this.k=a.k}function Y(a,b,c,d,e){if(0===b.length&&e)N(a.t);else{a.N+=b.length,e&&(a.X=e);for(e=0;e<b.length;e++){var f=b[e],g=c[f.getName()],h=a.t,i=f;p(h.h,h.g.f(h.j,i.getName(),J(i).toString(),"loading")),O(h,"fontloading",i),(new S(l(a.ga,a),l(a.ha,a),a.c,f,a.k,a.R,d,g)).start()}}}function Z(a){0==--a.N&&a.X&&(a.ba?(a=a.t,q(a.h,a.g.f(a.j,"loading")),q(a.h,a.g.f(a.j,"inactive")),p(a.h,a.g.f(a.j,"active")),O(a,"active")):N(a.t))}function $(a,b,c){this.G=a,this.V=b,this.a=c,this.O=this.P=0}function _(a,b){bc.V.Z[a]=b}function bd(a,b){this.c=a,this.d=b}function be(a,b){this.c=a,this.d=b,this.m=[]}function bf(a,b,c){this.L=a?a:b+bg,this.p=[],this.Q=[],this.ca=c||""}function bh(a){this.p=a,this.$=[],this.I={}}function bm(a,b,c){this.a=a,this.c=b,this.d=c}function bo(a,b){this.c=a,this.d=b}function bq(a){var b=a.split(":");a=b[0];if(b[1]){for(var c=b[1].split(","),b=[],d=0,e=c.length;d<e;d++){var f=c[d];if(f){var g=bp[f];b.push(g?g:f)}}c=[];for(d=0;d<b.length;d+=1)c.push(new I(a,b[d]));return c}return[new I(a)]}function br(a,b,c){this.a=a,this.c=b,this.d=c,this.m=[]}function bs(a,b){this.c=a,this.d=b,this.m=[]}var d=!0,e=null,f=!1,h=this,m=Date.now||function(){return+(new Date)};n.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));return c&&a.appendChild(this.z.createTextNode(c)),a},i("webfont.BrowserInfo",v),v.prototype.pa=g("w"),v.prototype.hasWebFontSupport=v.prototype.pa,v.prototype.qa=g("S"),v.prototype.hasWebKitFallbackBug=v.prototype.qa,v.prototype.ra=g("za"),v.prototype.hasWebKitMetricsBug=v.prototype.ra;var x=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;w.prototype.toString=function(){return[this.e,this.o||"",this.aa||"",this.f||""].join("")},i("webfont.UserAgent",z),z.prototype.getName=g("J"),z.prototype.getName=z.prototype.getName,z.prototype.oa=g("ya"),z.prototype.getVersion=z.prototype.oa,z.prototype.ka=g("fa"),z.prototype.getEngine=z.prototype.ka,z.prototype.la=g("ea"),z.prototype.getEngineVersion=z.prototype.la,z.prototype.ma=g("wa"),z.prototype.getPlatform=z.prototype.ma,z.prototype.na=g("va"),z.prototype.getPlatformVersion=z.prototype.na,z.prototype.ja=g("da"),z.prototype.getDocumentMode=z.prototype.ja,z.prototype.ia=g("k"),z.prototype.getBrowserInfo=z.prototype.ia;var B=new z("Unknown",new w,"Unknown","Unknown",new w,"Unknown","Unknown",new w,"Unknown",void 0,new v(f,f,f));A.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=C(this);var b=D(this),c=y(b),d=F(this.a,/MSIE ([\d\w\.]+)/,1),g=y(d);a=new z("MSIE",g,d,"MSIE",g,d,a,c,b,G(this.H),new v("Windows"==a&&6<=g.e||"Windows Phone"==a&&8<=c.e,f,f))}else if(-1!=this.a.indexOf("Opera"))a:{a="Unknown";var b=F(this.a,/Presto\/([\d\w\.]+)/,1),c=y(b),d=D(this),g=y(d),h=G(this.H);c.e!==e?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=F(this.a,/rv:([^\)]+)/,1),c=y(b));if(-1!=this.a.indexOf("Opera Mini/")){var i=F(this.a,/Opera Mini\/([\d\.]+)/,1),j=y(i);a=new z("OperaMini",j,i,a,c,b,C(this),g,d,h,new v(f,f,f))}else{if(-1!=this.a.indexOf("Version/")&&(i=F(this.a,/Version\/([\d\.]+)/,1),j=y(i),j.e!==e)){a=new z("Opera",j,i,a,c,b,C(this),g,d,h,new v(10<=j.e,f,f));break a}i=F(this.a,/Opera[\/ ]([\d\.]+)/,1),j=y(i),a=j.e!==e?new z("Opera",j,i,a,c,b,C(this),g,d,h,new v(10<=j.e,f,f)):new z("Opera",new w,"Unknown",a,c,b,C(this),g,d,h,new v(f,f,f))}}else/OPR\/[\d.]+/.test(this.a)?a=E(this):/AppleWeb(K|k)it/.test(this.a)?a=E(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new w,c="Unknown",d=D(this),g=y(d),h=f,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=F(this.a,/Firefox\/([\d\w\.]+)/,1),b=y(c),h=3<=b.e&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),i=F(this.a,/rv:([^\)]+)/,1),j=y(i),h||(h=1<j.e||1==j.e&&9<j.o||1==j.e&&9==j.o&&2<=j.aa||i.match(/1\.9\.1b[123]/)!=e||i.match(/1\.9\.1\.[\d\.]+/)!=e),a=new z(a,b,c,"Gecko",j,i,C(this),g,d,G(this.H),new v(h,f,f))):a=B;return a},H.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)},I.prototype.getName=g("J"),P.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};var T={Ca:"serif",Ba:"sans-serif",Aa:"monospace"};S.prototype.start=function(){this.A=new P(this.c,this.C),R(this.A),this.B=new P(this.c,this.C),R(this.B),this.xa=m(),Q(this.A,new I(this.q.getName()+",serif",J(this.q))),Q(this.B,new I(this.q.getName()+",sans-serif",J(this.q))),V(this)},X.prototype.ga=function(a){var b=this.t;q(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"loading")),q(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"inactive")),p(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"active")),O(b,"fontactive",a),this.ba=d,Z(this)},X.prototype.ha=function(a){var b=this.t;q(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"loading")),r(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"active"))||p(b.h,b.g.f(b.j,a.getName(),J(a).toString(),"inactive")),O(b,"fontinactive",a),Z(this)},$.prototype.load=function(a){var b=a.context||this.G;this.c=new n(this.G,b),b=new L(this.c,b.document.documentElement,a);if(this.a.k.w){var c=this.V,d=this.c,e=[],f;for(f in a)if(a.hasOwnProperty(f)){var g=c.Z[f];g&&e.push(g(a[f],d))}a=a.timeout,this.O=this.P=e.length,a=new X(this.a,this.c,b,a),f=0;for(c=e.length;f<c;f++)d=e[f],d.v(this.a,l(this.ta,this,d,b,a))}else N(b)},$.prototype.ta=function(a,b,c,d){var f=this;d?a.load(function(a,d,g){var h=0==--f.P;h&&M(b),setTimeout(function(){Y(c,a,d||{},g||e,h)},0)}):(a=0==--this.P,this.O--,a&&(0==this.O?N(b):M(b)),Y(c,[],{},e,a))};var ba=a,bb=(new A(navigator.userAgent,b)).parse(),bc=ba.WebFont=new $(a,new function(){this.Z={}},bb);bc.load=bc.load,bd.prototype.load=function(a){var b,c,d=this.d.urls||[],e=this.d.families||[];b=0;for(c=d.length;b<c;b++)t(this.c,d[b]);d=[],b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var g=f[1].split(","),h=0;h<g.length;h+=1)d.push(new I(f[0],g[h]));else d.push(new I(f[0]))}a(d)},bd.prototype.v=function(a,b){return b(a.k.w)},_("custom",function(a,b){return new bd(b,a)}),be.prototype.D=function(a){return s(this.c)+(this.d.api||"//f.fontdeck.com/s/css/js/")+(this.c.u.location.hostname||this.c.G.location.hostname)+"/"+a+".js"},be.prototype.v=function(a,b){var c=this.d.id,d=this.c.u,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,f=c.fonts.length;d<f;++d){var g=c.fonts[d];e.m.push(new I(g.name,K("font-weight:"+g.weight+";font-style:"+g.style)))}b(a)},u(this.c,this.D(c),function(a){a&&b(f)})):b(f)},be.prototype.load=function(a){a(this.m)},_("fontdeck",function(a,b){return new be(b,a)});var bg="//fonts.googleapis.com/css";bf.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load !");if(-1!=this.L.indexOf("kit="))return this.L;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));return a=this.L+"?family="+b.join("%7C"),0<this.Q.length&&(a+="&subset="+this.Q.join(",")),0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca)),a};var bi={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},bj={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},bk={i:"i",italic:"i",n:"n",normal:"n"},bl=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");bh.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),f=["n4"];if(2<=c.length){var g,h=c[1];g=[];if(h)for(var h=h.split(","),i=h.length,j=0;j<i;j++){var k;k=h[j];if(k.match(/^[\w]+$/)){k=bl.exec(k.toLowerCase());var l=void 0;if(k==e)l="";else{l=void 0,l=k[1];if(l==e||""==l)l="4";else var m=bj[l],l=m?m:isNaN(l)?"4":l.substr(0,1);l=[k[2]==e||""==k[2]?"n":bk[k[2]],l].join("")}k=l}else k="";k&&g.push(k)}0<g.length&&(f=g),3==c.length&&(c=c[2],g=[],c=c?c.split(","):g,0<c.length&&(c=bi[c[0]])&&(this.I[d]=c))}this.I[d]||(c=bi[d])&&(this.I[d]=c);for(c=0;c<f.length;c+=1)this.$.push(new I(d,f[c]))}};var bn={Arimo:d,Cousine:d,Tinos:d};bm.prototype.v=function(a,b){b(a.k.w)},bm.prototype.load=function(a){var b=this.c;if("MSIE"==this.a.getName()&&this.d.blocking!=d){var c=l(this.W,this,a),e=function(){b.z.body?c():setTimeout(e,0)};e()}else this.W(a)},bm.prototype.W=function(a){for(var b=this.c,c=new bf(this.d.api,s(b),this.d.text),d=this.d.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&c.Q.push(g.pop());var h="";2==g.length&&""!=g[1]&&(h=":"),c.p.push(g.join(h))}d=new bh(d),d.parse(),t(b,c.f()),a(d.$,d.I,bn)},_("google",function(a,c){var d=(new A(navigator.userAgent,b)).parse();return new bm(d,c,a)});var bp={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};bo.prototype.v=function(a,b){return b(a.k.w)},bo.prototype.load=function(a){t(this.c,s(this.c)+"//webfonts.fontslive.com/css/"+this.d.key+".css");for(var b=this.d.families,c=[],d=0,e=b.length;d<e;d++)c.push.apply(c,bq(b[d]));a(c)},_("ascender",function(a,b){return new bo(b,a)}),br.prototype.v=function(a,b){var c=this,d=c.d.projectId,e=c.d.version;if(d){var g=c.c.u;u(this.c,c.D(d,e),function(e){if(e)b(f);else{if(g["__mti_fntLst"+d]&&(e=g["__mti_fntLst"+d]()))for(var h=0;h<e.length;h++)c.m.push(new I(e[h].fontfamily));b(a.k.w)}}).id="__MonotypeAPIScript__"+d}else b(f)},br.prototype.D=function(a,b){var c=s(this.c),d=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")},br.prototype.load=function(a){a(this.m)},_("monotype",function(a,c){var d=(new A(navigator.userAgent,b)).parse();return new br(d,c,a)}),bs.prototype.D=function(a){var b=s(this.c);return(this.d.api||b+"//use.typekit.net")+"/"+a+".js"},bs.prototype.v=function(a,b){var c=this.d.id,d=this.d,e=this.c.u,g=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var e=0;e<c.length;e+=1){var f=d[c[e]];if(f)for(var h=0;h<f.length;h+=1)g.m.push(new I(c[e],f[h]));else g.m.push(new I(c[e]))}b(a)})},u(this.c,this.D(c),function(a){a&&b(f)},2e3)):b(f)},bs.prototype.load=function(a){a(this.m)},_("typekit",function(a,b){return new bs(b,a)}),a.WebFontConfig&&bc.load(a.WebFontConfig)})(this,document);