(function(){"use strict";var a="31em",b="40em",c="62.66em",d="78.32em",e="93.98em",f={selector:".resize",images:[],widths:[],heights:[],init:function(){f.images,f.widths,f.heights=[],f.gather()},gather:function(){$(f.selector).each(function(a,b){b=$(b);var c=b.width(),d=b.height();f.images.push(b.attr("rel")),f.widths.push(c),f.heights.push(d)}),f.grabFromServer()},grabFromServer:function(){var a="";for(var b=0;b<f.images.length;b++)a+="image[]="+f.images[b]+"&width[]="+f.widths[b]+"&height[]="+f.heights[b],b<f.images.length-1&&(a+="&");$.ajax({type:"POST",url:"/resize.php",data:a,success:function(a){$.each(a,function(a,b){var c=$("img[rel='"+b.og_src+"']");c.attr("src",b.src),c.load(function(){c=$(this);if(c.closest(".image").length)var a=c.closest(".image");else var a=c.parent();a.addClass("img_loaded"),c.css("opacity")==="0"&&c.stop(!0,!1).animate({opacity:1},500)})})}})}},g={container:null,containerSelector:".grid-wrap",unit:null,unitSelector:".block-wrap",unitSpan:0,numCols:null,shuffleOn:!1,popped:!1,setArray:[],setup:function(){$(".shuffle.grid-wrap").length&&(g.shuffleOn=!0),g.init(!0),$("[data-filter]").length&&g.filter(),$(window).smartresize(function(){g.shuffleOn=!1,g.init()}),$(document).bind("fontresize",function(a,b){g.shuffleOn=!1,g.init()})},init:function(a){var b=g.setCols();if(g.numCols!==b||a){g.numCols=b,g.container=$(g.containerSelector),g.unit=$(g.unitSelector+":visible"),g.setArray=[];var c=[];for(var d=0;d<=g.numCols-1;d++)c[d]=0;g.setArray.push(c),g.numCols>=3?g.layout():g.destroy()}},destroy:function(){g.unit=$(g.unitSelector),g.setArray=[],g.unit.css({position:"",top:"",left:"",width:"",height:""}),g.container.css({position:"",height:""}),g.unit.find(".block").css({position:"",top:"",left:"",right:"",bottom:"",minHeight:""}),f.init()},shuffle:function(a){var b=a.not(".ignore-shuffle"),c=a.filter(".ignore-shuffle");b=jQuery.makeArray(b),c=jQuery.makeArray(c);for(var d=b.length-1;d>0;d--){var e=Math.floor(Math.random()*(d+1)),f=b[d];b[d]=b[e],b[e]=f}return b=c.concat(b),$(b)},setCols:function(){return matchMedia?window.matchMedia("(min-width: "+e+")").matches?5:window.matchMedia("(min-width: "+d+")").matches?4:window.matchMedia("(min-width: "+c+")").matches?3:window.matchMedia("(min-width: "+b+")").matches?2:1:1},filter:function(){var a=document.location.href;a=a.replace(/^.*\/\/[^\/]+/,"");var b='#navmenu a[href="'+a+'"]',c=$(b)[0];a!=="/"&&$(b).length&&g.filterOn(c),Modernizr.history&&(window.addEventListener("popstate",function(d){g.popped===!0&&(a=d.state,a=a.replace(/^.*\/\/[^\/]+/,""),b='#navmenu a[href="'+a+'"]',c=$(b)[0],a==="/"?g.filterOff(c):g.filterOn(c))}),history.replaceState(document.location.href,document.title,document.location.href)),$("[data-filter]").click(function(a){a.preventDefault(),g.filterOn(this);if(Modernizr.history){var b=$(this).attr("href");history.pushState(b,document.title,b),g.popped=!0}}),$("[data-canxfilter]").click(function(a){a.preventDefault(),g.filterOff(this);if(Modernizr.history){var b=$(this).attr("href");history.pushState(b,document.title,b),g.popped=!0}})},filterOn:function(a){$("[data-filter], [data-canxfilter]").removeClass("current"),$(a).addClass("current");if(window.matchMedia("(min-width: "+c+")").matches){g.shuffleOn=!1;var b=$(a).attr("data-filter");g.unit.css({display:"none"}),$(b).find(g.unitSelector).show(),g.unit.not($(b).find(g.unitSelector)).css({position:"",top:"0",left:"0"}),g.init(!0),$(window).scrollTo(0,500,{onAfter:function(){$(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1)}})}else $(window).scrollTo($(a).attr("href").replace("/",""),500,{offset:-$("[role=navigation]").outerHeight(!0),onAfter:function(){$(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1)}})},filterOff:function(a){$("[data-filter]").removeClass("current"),$(a).addClass("current"),window.matchMedia("(min-width: "+c+")").matches?(g.shuffleOn=!0,$(g.unitSelector).css({display:""}),g.init(!0),$(window).scrollTo(0,500,{onAfter:function(){$(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1)}})):$(window).scrollTo(0,500,{onAfter:function(){$(window).scrollTop($(window).scrollTop()+1),$(window).scrollTop($(window).scrollTop()-1)}})},layout:function(){g.unitSpan=g.container.innerWidth()/g.numCols,g.unit.css("position","absolute"),g.container.css("position","relative");var a=10;g.unit.find(".block").css({position:"absolute",top:a,left:a,right:a,bottom:a,minHeight:0}),g.shuffleOn&&(g.unit=g.shuffle(g.unit));var b={};for(var c=0;c<g.unit.length;c++){b=$(g.unit[c]);var d=parseInt(b.attr("data-rowspan"),10),e=parseInt(b.attr("data-colspan"),10),h=!1,i=[],j=g.unitSpan*e,k=g.unitSpan*d;b.css({width:j,height:k});for(var l=0;l<=g.setArray.length;l++){var m=0,n=0;for(var o=0;o<=g.setArray[l].length;o++){g.setArray[l][o]===0?m++:(m=0,n++);if(m===e){b.css({top:l*g.unitSpan,left:(o-(e-1))*g.unitSpan});for(var p=e+(o-(e-1))-1;p>=o-(e-1);p--)g.setArray[l][p]=1;if(d>1){var i=[];for(p=0;p<=g.numCols-1;p++)i[p]=0;g.setArray.push(i);for(p=e+(o-(e-1))-1;p>=o-(e-1);p--)g.setArray[l+1][p]=1}h=!0;break}}if(!!h)break;if(!g.setArray[l+1]){i=[];for(p=0;p<=g.numCols-1;p++)i[p]=0;g.setArray.push(i)}}}f.init(),g.container.height(g.setArray.length*g.unitSpan)}},h={container:$("#navmenu"),trigger:null,init:function(){var a="0";h.trigger=$('<a id="nav-trigger"><i class="menu-icon icon-menu"></i></a>'),h.trigger.insertBefore("#navmenu"),h.trigger.click(function(b){var c=$("[role=navigation] .subnav li"),d=400,e=200,f=(d-e)/c.length,g=!1,i=$(this);c.css("top")!=="0px"&&c.css("top")!=="auto"&&(c=jQuery.makeArray(c),c=c.reverse(),c=$(c),g=!0),c.length?g?(a="0",i.removeClass("active"),h.container.removeClass("open")):(a=-$(".subnav").height(),i.addClass("active"),h.container.addClass("open")):($(this).toggleClass("active"),h.container.toggleClass("open")),c.each(function(b,c){c=$(c);var d=(b+1)*f;c.css({position:"relative"});var g=setTimeout(function(){c.animate({top:a},{duration:e,easeing:"easeInOutQuint"})},d)})});if($("body").hasClass("open-menu"))var b=setTimeout(function(){h.trigger.click()},750)}},i={container:$(".pep-wrapper"),gallery:$(".pep-wrapper ul"),unit:$(".pep-wrapper li"),init:function(){var a=i.unit.length*160,b=i.container.parent().width();this.unit.css({maxWidth:160}),this.unit.find("img").css({width:150}),this.container.css({width:a*2-b+20,left:-(a-b+20),overflow:"hidden","min-height":160}),this.gallery.css({width:a,position:"absolute"}),this.gallery.data("plugin_pep")?$.pep.toggleAll(!0):this.gallery.pep({axis:"x",constrainToParent:!0}),this.gallery.css({left:a-b+20})},destroy:function(){this.container.css({width:"",left:"",overflow:"","min-height":""}),this.gallery.css({width:"",left:"",top:"",position:""}),this.unit.css({maxWidth:""}),this.unit.find("img").css({width:""}),$.pep.toggleAll(!1)},initOrDie:function(){window.matchMedia("(min-width: "+b+")").matches?i.destroy():i.init()},responsive:function(){matchMedia&&($(window).smartresize(function(){i.initOrDie()}),i.initOrDie())}},j={trigger:$("#nav-contact"),navContact:null,slideConfig:{duration:500,easing:"easeInOutQuint"},init:function(){this.navContact=$(this.trigger.attr("href")).clone().addClass("nav-contact").attr("id","new-contact").hide().appendTo("[role=navigation]"),this.trigger.click(function(a){a.preventDefault(),j.navContact.is(":visible")?j.close():(j.open(),a.stopPropagation()),j.navContact.click(function(a){a.stopPropagation()})})},close:function(){Modernizr.cssanimations?this.navContact.animateCSS("fadeOutDown",function(){$(this).hide()}):this.navContact.fadeOut("fast")},open:function(){Modernizr.cssanimations?this.navContact.animateCSS("fadeInDown"):this.navContact.fadeIn("fast")}},k={container:$(".subnav"),moveToHead:function(){var a=k.container.clone(!0,!0);a.insertAfter("#navmenu"),k.container.hide()},moveToFoot:function(){$("[role=navigation] .subnav").hide(),k.container.show()},setLocation:function(){window.matchMedia("(min-width: "+c+")").matches?$("[role=navigation] .subnav").length?($("[role=navigation] .subnav").show(),k.container.hide()):k.moveToHead():k.moveToFoot()},toggliser:function(){$(window).smartresize(function(){k.setLocation()}),k.setLocation()}},l={selector:$(".subnav a"),popped:!1,init:function(){Modernizr.history&&l.selector.length&&(window.addEventListener("popstate",function(a){if(l.popped===!0){var b=a.state;b=b.replace(/^.*\/\/[^\/]+/,"");var c='.subnav a[href="'+b+'"]',d=$(c).eq(0);l.loadContent(d)}}),history.replaceState(document.location.href,document.title,document.location.href)),l.selector.click(function(a){a.preventDefault();var b=$(this);l.loadContent(b),Modernizr.history&&(history.pushState(b.attr("href"),document.title,b.attr("href")),l.popped=!0)})},swipe:function(){$(".hero-banner").swipe({left:function(){$(".subnav .current").next().find("a").length&&l.loadContent($(".subnav .current").next().find("a"))},right:function(){$(".subnav .current").prev().find("a").length&&l.loadContent($(".subnav .current").prev().find("a"))},threshold:{x:100,y:50}})},loadContent:function(a){if(!a.parent().is(".current")){var b=a.attr("href"),c=500,d="swing";$(".current-content").length||$("[role=main]").wrapInner('<div class="current-content">'),$("[role=main]").css({height:$("[role=main]").height()});var e=$('<div class="new-content"></div>');e.insertAfter(".current-content");if(a.parent().nextAll(".current").length)var f=$(window).width()/8;else var f=-$(window).width()/8;e.css({opacity:0,position:"relative",top:0,left:-f}),$(".current-content").stop(!0,!1).animate({left:f,opacity:0},{duration:c,easing:d,complete:function(){$(this).remove(),$.ajaxSetup({cache:!1}),$.get(b,function(b){e.html(b),g.containerSelector=".new-content .grid-wrap",g.destroy(),g.setup(),e.css({top:0}).stop(!0,!1).animate({left:0,opacity:1},{duration:c,easeing:d,complete:function(){document.title=e.find("h1").text()+", "+e.find("h2").text(),e.removeClass("new-content").addClass("current-content"),g.containerSelector=".grid-wrap",$("[role=main]").css({height:""}),l.swipe()},useTranslate3d:!0}),$(".subnav li").removeClass("current"),a.parent().addClass("current")}).error(function(){window.location.href=b})},useTranslate3d:!0})}}},m={init:function(){var a=$("body");setTimeout(function(){a.hasClass("loaded")||a.addClass("loaded")},3e3),a.addClass("loaded")}};$(document).ready(function(){MBP.scaleFix(),$(window).load(function(){new FastClick(document.body)}),g.setup(),h.init(),i.responsive(),$(".subnav").length&&l.init(),k.toggliser(),$(document).on("click",".with-hidden-caption",function(){if(window.matchMedia("(min-width: "+b+")").matches||!$(this).parents(".pep-wrapper").length)$(this).toggleClass("show-caption"),$(this).find("figcaption").slideToggle("fast")}),$(document).on("click",function(){j.navContact.is(":visible")&&j.close()}),j.init()}),$(window).load(function(){m.init()})})();