var absolute_url = window.location.protocol + '//' + window.location.hostname;

//Check sessionId and Languge
sessionId = typeof sessionId !== 'undefined' ? sessionId : 1;
language = typeof language !== 'undefined' ? language : 'en';

// Ajax Setup
$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
        'Authorization': 'Cookie '+sessionId
    }
});

/* Responsive Images */
if(typeof Response == 'object'){
    Response.create({
        prop: "width"  // "width" "device-width" "height" "device-height" or "device-pixel-ratio"
        , prefix: "min-width- r src"  // the prefix(es) for your data attributes (aliases are optional)
        , breakpoints: [1500, 1200, 1020, 760, 320, 0] // min breakpoints (defaults for width/device-width)
        , lazy: true // optional param - data attr contents lazyload rather than whole page at once
    });
}

// Stop google loading roboto
var head = document.getElementsByTagName('head')[0];
var modal_course_id = null;

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function (newElement, referenceElement) {
    if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {
        return;
    }
    insertBefore.call(head, newElement, referenceElement);
};


//countup
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});


/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// JS PAGINATION
!function(e){var a={init:function(t){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,useAnchors:!0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:!0,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(e,a){},onInit:function(){}},t||{}),n=this;return s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage?s.currentPage=s.currentPage-1:s.currentPage=s.invertPageOrder?s.pages-1:0,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle+" simple-pagination").data("pagination",s),a._draw.call(n)}),s.onInit(),this},selectPage:function(e){return a._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1):e.currentPage>0&&a._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&a._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var t=this.data("pagination");return t.currentPage=e-1,this.data("pagination",t),a._draw.call(this),this},redraw:function(){return a._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),a._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),a._draw.call(this),this},updateItems:function(e){var t=this.data("pagination");t.items=e,t.pages=a._getPages(t),this.data("pagination",t),a._draw.call(this)},updateItemsOnPage:function(e){var t=this.data("pagination");return t.itemsOnPage=e,t.pages=a._getPages(t),this.data("pagination",t),a._selectPage.call(this,0),this},getItemsOnPage:function(){return this.data("pagination").itemsOnPage},_draw:function(){var t,s,n=this.data("pagination"),i=a._getInterval(n);a.destroy.call(this);var l="UL"===(s="function"==typeof this.prop?this.prop("tagName"):this.attr("tagName"))?this:e("<ul"+(n.listStyle?' class="'+n.listStyle+'"':"")+"></ul>").appendTo(this);if(n.prevText&&a._appendItem.call(this,n.invertPageOrder?n.currentPage+1:n.currentPage-1,{text:n.prevText,classes:"prev"}),n.nextText&&n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.invertPageOrder){if(i.end<n.pages&&n.edges>0){if(n.useStartEdge){var r=Math.max(n.pages-n.edges,i.end);for(t=n.pages-1;t>=r;t--)a._appendItem.call(this,t)}n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end)}}else if(i.start>0&&n.edges>0){if(n.useStartEdge){var p=Math.min(n.edges,i.start);for(t=0;t<p;t++)a._appendItem.call(this,t)}n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges)}if(n.invertPageOrder)for(t=i.end-1;t>=i.start;t--)a._appendItem.call(this,t);else for(t=i.start;t<i.end;t++)a._appendItem.call(this,t);if(n.invertPageOrder){if(i.start>0&&n.edges>0&&(n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges),n.useEndEdge))for(t=(p=Math.min(n.edges,i.start))-1;t>=0;t--)a._appendItem.call(this,t)}else if(i.end<n.pages&&n.edges>0&&(n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end),n.useEndEdge))for(t=r=Math.max(n.pages-n.edges,i.end);t<n.pages;t++)a._appendItem.call(this,t);n.nextText&&!n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.ellipsePageSet&&!n.disabled&&a._ellipseClick.call(this,l)},_getPages:function(e){return Math.ceil(e.items/e.itemsOnPage)||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(t,s){var n,i,l=this,r=l.data("pagination"),p=e("<li></li>"),g=l.find("ul");n={text:(t=t<0?0:t<r.pages?t:r.pages-1)+1,classes:""},r.labelMap.length&&r.labelMap[t]&&(n.text=r.labelMap[t]),n=e.extend(n,s||{}),t==r.currentPage||r.disabled?(r.disabled||"prev"===n.classes||"next"===n.classes?p.addClass("disabled"):p.addClass("active"),i=e('<span class="current">'+n.text+"</span>")):(i=e(r.useAnchors?'<a href="'+r.hrefTextPrefix+(t+1)+r.hrefTextSuffix+'" class="page-link">'+n.text+"</a>":"<span >"+n.text+"</span>")).click(function(e){return a._selectPage.call(l,t,e)}),n.classes&&i.addClass(n.classes),p.append(i),g.length?g.append(p):l.append(p)},_selectPage:function(e,t){var s=this.data("pagination");return s.currentPage=e,s.selectOnClick&&a._draw.call(this),s.onPageClick(e+1,t)},_ellipseClick:function(t){var s=this,n=this.data("pagination"),i=t.find(".ellipse");i.addClass("clickable").parent().removeClass("disabled"),i.click(function(t){if(!n.disable){var l=e(this),r=(parseInt(l.parent().prev().text(),10)||0)+1;l.html('<input type="number" min="1" max="'+n.pages+'" step="1" value="'+r+'">').find("input").focus().click(function(e){e.stopPropagation()}).keyup(function(t){var l=e(this).val();13===t.which&&""!==l?l>0&&l<=n.pages&&a._selectPage.call(s,l-1):27===t.which&&i.empty().html(n.ellipseText)}).bind("blur",function(t){var l=e(this).val();return""!==l&&a._selectPage.call(s,l-1),i.empty().html(n.ellipseText),!1})}return!1})}};e.fn.pagination=function(t){return a[t]&&"_"!=t.charAt(0)?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.pagination"):a.init.apply(this,arguments)}}(jQuery);

(function ($, sr) {

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'smartresize');

/**
 * @license MIT
 * @fileOverview Favico animations
 * @author Miroslav Magda, http://blog.ejci.net
 * @version 0.3.10
 */
!function(){var e=function(e){"use strict";function t(e){if(e.paused||e.ended||g)return!1;try{f.clearRect(0,0,s,l),f.drawImage(e,0,0,s,l)}catch(o){}p=setTimeout(function(){t(e)},S.duration),O.setIcon(h)}function o(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,o,n){return t+t+o+o+n+n});var o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:!1}function n(e,t){var o,n={};for(o in e)n[o]=e[o];for(o in t)n[o]=t[o];return n}function r(){return b.hidden||b.msHidden||b.webkitHidden||b.mozHidden}e=e?e:{};var i,a,l,s,h,f,c,d,u,y,w,g,x,m,p,b,v={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontStyle:"bold",type:"circle",position:"down",animation:"slide",elementId:!1,dataUrl:!1,win:window};x={},x.ff="undefined"!=typeof InstallTrigger,x.chrome=!!window.chrome,x.opera=!!window.opera||navigator.userAgent.indexOf("Opera")>=0,x.ie=/*@cc_on!@*/!1,x.safari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,x.supported=x.chrome||x.ff||x.opera;var C=[];w=function(){},d=g=!1;var E=function(){i=n(v,e),i.bgColor=o(i.bgColor),i.textColor=o(i.textColor),i.position=i.position.toLowerCase(),i.animation=S.types[""+i.animation]?i.animation:v.animation,b=i.win.document;var t=i.position.indexOf("up")>-1,r=i.position.indexOf("left")>-1;if(t||r)for(var d=0;d<S.types[""+i.animation].length;d++){var u=S.types[""+i.animation][d];t&&(u.y=u.y<.6?u.y-.4:u.y-2*u.y+(1-u.w)),r&&(u.x=u.x<.6?u.x-.4:u.x-2*u.x+(1-u.h)),S.types[""+i.animation][d]=u}i.type=A[""+i.type]?i.type:v.type,a=O.getIcon(),h=document.createElement("canvas"),c=document.createElement("img"),a.hasAttribute("href")?(c.setAttribute("crossOrigin","anonymous"),c.onload=function(){l=c.height>0?c.height:32,s=c.width>0?c.width:32,h.height=l,h.width=s,f=h.getContext("2d"),M.ready()},c.setAttribute("src",a.getAttribute("href"))):(c.onload=function(){l=32,s=32,c.height=l,c.width=s,h.height=l,h.width=s,f=h.getContext("2d"),M.ready()},c.setAttribute("src",""))},M={};M.ready=function(){d=!0,M.reset(),w()},M.reset=function(){d&&(C=[],u=!1,y=!1,f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),O.setIcon(h),window.clearTimeout(m),window.clearTimeout(p))},M.start=function(){if(d&&!y){var e=function(){u=C[0],y=!1,C.length>0&&(C.shift(),M.start())};if(C.length>0){y=!0;var t=function(){["type","animation","bgColor","textColor","fontFamily","fontStyle"].forEach(function(e){e in C[0].options&&(i[e]=C[0].options[e])}),S.run(C[0].options,function(){e()},!1)};u?S.run(u.options,function(){t()},!0):t()}}};var A={},I=function(e){return e.n="number"==typeof e.n?Math.abs(0|e.n):e.n,e.x=s*e.x,e.y=l*e.y,e.w=s*e.w,e.h=l*e.h,e.len=(""+e.n).length,e};A.circle=function(e){e=I(e);var t=!1;2===e.len?(e.x=e.x-.4*e.w,e.w=1.4*e.w,t=!0):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w,t=!0),f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),f.beginPath(),f.font=i.fontStyle+" "+Math.floor(e.h*(e.n>99?.85:1))+"px "+i.fontFamily,f.textAlign="center",t?(f.moveTo(e.x+e.w/2,e.y),f.lineTo(e.x+e.w-e.h/2,e.y),f.quadraticCurveTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h/2),f.lineTo(e.x+e.w,e.y+e.h-e.h/2),f.quadraticCurveTo(e.x+e.w,e.y+e.h,e.x+e.w-e.h/2,e.y+e.h),f.lineTo(e.x+e.h/2,e.y+e.h),f.quadraticCurveTo(e.x,e.y+e.h,e.x,e.y+e.h-e.h/2),f.lineTo(e.x,e.y+e.h/2),f.quadraticCurveTo(e.x,e.y,e.x+e.h/2,e.y)):f.arc(e.x+e.w/2,e.y+e.h/2,e.h/2,0,2*Math.PI),f.fillStyle="rgba("+i.bgColor.r+","+i.bgColor.g+","+i.bgColor.b+","+e.o+")",f.fill(),f.closePath(),f.beginPath(),f.stroke(),f.fillStyle="rgba("+i.textColor.r+","+i.textColor.g+","+i.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?f.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):f.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),f.closePath()},A.rectangle=function(e){e=I(e);var t=!1;2===e.len?(e.x=e.x-.4*e.w,e.w=1.4*e.w,t=!0):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w,t=!0),f.clearRect(0,0,s,l),f.drawImage(c,0,0,s,l),f.beginPath(),f.font=i.fontStyle+" "+Math.floor(e.h*(e.n>99?.9:1))+"px "+i.fontFamily,f.textAlign="center",f.fillStyle="rgba("+i.bgColor.r+","+i.bgColor.g+","+i.bgColor.b+","+e.o+")",f.fillRect(e.x,e.y,e.w,e.h),f.fillStyle="rgba("+i.textColor.r+","+i.textColor.g+","+i.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?f.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):f.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),f.closePath()};var T=function(e,t){t=("string"==typeof t?{animation:t}:t)||{},w=function(){try{if("number"==typeof e?e>0:""!==e){var n={type:"badge",options:{n:e}};if("animation"in t&&S.types[""+t.animation]&&(n.options.animation=""+t.animation),"type"in t&&A[""+t.type]&&(n.options.type=""+t.type),["bgColor","textColor"].forEach(function(e){e in t&&(n.options[e]=o(t[e]))}),["fontStyle","fontFamily"].forEach(function(e){e in t&&(n.options[e]=t[e])}),C.push(n),C.length>100)throw new Error("Too many badges requests in queue.");M.start()}else M.reset()}catch(r){throw new Error("Error setting badge. Message: "+r.message)}},d&&w()},U=function(e){w=function(){try{var t=e.width,o=e.height,n=document.createElement("img"),r=o/l>t/s?t/s:o/l;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){f.clearRect(0,0,s,l),f.drawImage(n,0,0,s,l),O.setIcon(h)},n.setAttribute("src",e.getAttribute("src")),n.height=o/r,n.width=t/r}catch(i){throw new Error("Error setting image. Message: "+i.message)}},d&&w()},R=function(e){w=function(){try{if("stop"===e)return g=!0,M.reset(),void(g=!1);e.addEventListener("play",function(){t(this)},!1)}catch(o){throw new Error("Error setting video. Message: "+o.message)}},d&&w()},L=function(e){if(window.URL&&window.URL.createObjectURL||(window.URL=window.URL||{},window.URL.createObjectURL=function(e){return e}),x.supported){var o=!1;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia,w=function(){try{if("stop"===e)return g=!0,M.reset(),void(g=!1);o=document.createElement("video"),o.width=s,o.height=l,navigator.getUserMedia({video:!0,audio:!1},function(e){o.src=URL.createObjectURL(e),o.play(),t(o)},function(){})}catch(n){throw new Error("Error setting webcam. Message: "+n.message)}},d&&w()}},O={};O.getIcon=function(){var e=!1,t=function(){for(var e=b.getElementsByTagName("head")[0].getElementsByTagName("link"),t=e.length,o=t-1;o>=0;o--)if(/(^|\s)icon(\s|$)/i.test(e[o].getAttribute("rel")))return e[o];return!1};return i.element?e=i.element:i.elementId?(e=b.getElementById(i.elementId),e.setAttribute("href",e.getAttribute("src"))):(e=t(),e===!1&&(e=b.createElement("link"),e.setAttribute("rel","icon"),b.getElementsByTagName("head")[0].appendChild(e))),e.setAttribute("type","image/png"),e},O.setIcon=function(e){var t=e.toDataURL("image/png");if(i.dataUrl&&i.dataUrl(t),i.element)i.element.setAttribute("href",t),i.element.setAttribute("src",t);else if(i.elementId){var o=b.getElementById(i.elementId);o.setAttribute("href",t),o.setAttribute("src",t)}else if(x.ff||x.opera){var n=a;a=b.createElement("link"),x.opera&&a.setAttribute("rel","icon"),a.setAttribute("rel","icon"),a.setAttribute("type","image/png"),b.getElementsByTagName("head")[0].appendChild(a),a.setAttribute("href",t),n.parentNode&&n.parentNode.removeChild(n)}else a.setAttribute("href",t)};var S={};return S.duration=40,S.types={},S.types.fade=[{x:.4,y:.4,w:.6,h:.6,o:0},{x:.4,y:.4,w:.6,h:.6,o:.1},{x:.4,y:.4,w:.6,h:.6,o:.2},{x:.4,y:.4,w:.6,h:.6,o:.3},{x:.4,y:.4,w:.6,h:.6,o:.4},{x:.4,y:.4,w:.6,h:.6,o:.5},{x:.4,y:.4,w:.6,h:.6,o:.6},{x:.4,y:.4,w:.6,h:.6,o:.7},{x:.4,y:.4,w:.6,h:.6,o:.8},{x:.4,y:.4,w:.6,h:.6,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.none=[{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:.9,y:.9,w:.1,h:.1,o:1},{x:.8,y:.8,w:.2,h:.2,o:1},{x:.7,y:.7,w:.3,h:.3,o:1},{x:.6,y:.6,w:.4,h:.4,o:1},{x:.5,y:.5,w:.5,h:.5,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.popFade=[{x:.75,y:.75,w:0,h:0,o:0},{x:.65,y:.65,w:.1,h:.1,o:.2},{x:.6,y:.6,w:.2,h:.2,o:.4},{x:.55,y:.55,w:.3,h:.3,o:.6},{x:.5,y:.5,w:.4,h:.4,o:.8},{x:.45,y:.45,w:.5,h:.5,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],S.types.slide=[{x:.4,y:1,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.8,w:.6,h:.6,o:1},{x:.4,y:.7,w:.6,h:.6,o:1},{x:.4,y:.6,w:.6,h:.6,o:1},{x:.4,y:.5,w:.6,h:.6,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],S.run=function(e,t,o,a){var l=S.types[r()?"none":i.animation];return a=o===!0?"undefined"!=typeof a?a:l.length-1:"undefined"!=typeof a?a:0,t=t?t:function(){},a<l.length&&a>=0?(A[i.type](n(e,l[a])),m=setTimeout(function(){o?a-=1:a+=1,S.run(e,t,o,a)},S.duration),O.setIcon(h),void 0):void t()},E(),{badge:T,video:R,image:U,webcam:L,reset:M.reset,browser:{supported:x.supported}}};"undefined"!=typeof define&&define.amd?define([],function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.Favico=e}();

// Update notification number in favicon
function updateNotificationFavicon( notification_count ){
    var favicon = new Favico({
        animation : 'pop'
    });
    favicon.badge( notification_count );
}

/**
 * jquery.matchHeight-min.js v0.7.0
 * http://brm.io/jquery-match-height/
 * License: MIT
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){var b=-1,c=-1,d=function(a){return parseFloat(a)||0},e=function(b){var c=1,e=a(b),f=null,g=[];return e.each(function(){var b=a(this),e=b.offset().top-d(b.css("margin-top")),h=g.length>0?g[g.length-1]:null;null===h?g.push(b):Math.floor(Math.abs(f-e))<=c?g[g.length-1]=h.add(b):g.push(b),f=e}),g},f=function(b){var c={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof b?a.extend(c,b):("boolean"==typeof b?c.byRow=b:"remove"===b&&(c.remove=!0),c)},g=a.fn.matchHeight=function(b){var c=f(b);if(c.remove){var d=this;return this.css(c.property,""),a.each(g._groups,function(a,b){b.elements=b.elements.not(d)}),this}return this.length<=1&&!c.target?this:(g._groups.push({elements:this,options:c}),g._apply(this,c),this)};g.version="master",g._groups=[],g._throttle=80,g._maintainScroll=!1,g._beforeUpdate=null,g._afterUpdate=null,g._rows=e,g._parse=d,g._parseOptions=f,g._apply=function(b,c){var h=f(c),i=a(b),j=[i],k=a(window).scrollTop(),l=a("html").outerHeight(!0),m=i.parents().filter(":hidden");return m.each(function(){var b=a(this);b.data("style-cache",b.attr("style"))}),m.css("display","block"),h.byRow&&!h.target&&(i.each(function(){var b=a(this),c=b.css("display");"inline-block"!==c&&"flex"!==c&&"inline-flex"!==c&&(c="block"),b.data("style-cache",b.attr("style")),b.css({display:c,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),j=e(i),i.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||"")})),a.each(j,function(b,c){var e=a(c),f=0;if(h.target)f=h.target.outerHeight(!1);else{if(h.byRow&&e.length<=1)return void e.css(h.property,"");e.each(function(){var b=a(this),c=b.attr("style"),d=b.css("display");"inline-block"!==d&&"flex"!==d&&"inline-flex"!==d&&(d="block");var e={display:d};e[h.property]="",b.css(e),b.outerHeight(!1)>f&&(f=b.outerHeight(!1)),c?b.attr("style",c):b.css("display","")})}e.each(function(){var b=a(this),c=0;h.target&&b.is(h.target)||("border-box"!==b.css("box-sizing")&&(c+=d(b.css("border-top-width"))+d(b.css("border-bottom-width")),c+=d(b.css("padding-top"))+d(b.css("padding-bottom"))),b.css(h.property,f-c+"px"))})}),m.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||null)}),g._maintainScroll&&a(window).scrollTop(k/l*a("html").outerHeight(!0)),this},g._applyDataApi=function(){var b={};a("[data-match-height], [data-mh]").each(function(){var c=a(this),d=c.attr("data-mh")||c.attr("data-match-height");d in b?b[d]=b[d].add(c):b[d]=c}),a.each(b,function(){this.matchHeight(!0)})};var h=function(b){g._beforeUpdate&&g._beforeUpdate(b,g._groups),a.each(g._groups,function(){g._apply(this.elements,this.options)}),g._afterUpdate&&g._afterUpdate(b,g._groups)};g._update=function(d,e){if(e&&"resize"===e.type){var f=a(window).width();if(f===b)return;b=f}d?c===-1&&(c=setTimeout(function(){h(e),c=-1},g._throttle)):h(e)},a(g._applyDataApi),a(window).bind("load",function(a){g._update(!1,a)}),a(window).bind("resize orientationchange",function(a){g._update(!0,a)})});



/**
 *  Contact API to Receive translations
 *
 */

function validForTranslation(value){
    if(typeof value !== 'undefined'){
        return value.indexOf(' ') === -1 && value.indexOf('.') > -1;
    }
}

// Set local storage
function setLsItem (name, value){
    if(typeof localStorage !== "undefined" && value.length < 150){
        localStorage.setItem(name, ''+value);
    }
    return;
}

// Check local storage;
function getLsItem(name){
    if(typeof localStorage !== "undefined") {
        return localStorage.getItem(name);
    }
    return;
}

// Check for empty object
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

var translations = [],
    Lang = {
        opts : {
            runAt       : Math.floor(Date.now() / 1000),
            ignoreLs    : false,
        },
        init : function(){
            var that = this;

            $.ajax({
                url: 'https://api.alison.com/v0.1/translations/multiple',
                type: 'HEAD',
                contentType : 'application/json',
                success: function (data, textStatus, request) {
                    // Get timestamp
                    if(request.getResponseHeader('Last-Modified')){
                        var time = Math.floor(new Date(request.getResponseHeader('Last-Modified')) / 1000);

                        if(getLsItem("updated_at") && time > parseInt(getLsItem("updated_at"))){
                            setLsItem("updated_at", that.opts.runAt)
                            that.opts.ignoreLs = true;
                        }
                    }
                },
                error: function(error, textStatus) {
                    if(textStatus==="timeout") {
                        var updatedAt = getLsItem("updated_at");

                        if(updatedAt && (parseInt(updatedAt) - that.opts.runAt > 86400)){
                            that.opts.ignoreLs = true;
                        }
                    }
                }
            });

            return;
        },
        get: function (toTranslate, varName, defaultVal) {

            // If the translations is a route we don't need it wrapped
            if(toTranslate.indexOf('routes') > -1){
                translations[varName] = defaultVal || '';
            }
            else{
                if(typeof varName !== 'undefined'){
                    translations[varName] = '<em class="update-'+varName+'">'+(defaultVal || '')+'</em>';
                }
            }

            // Check local storage to see if they already exist
            if(getLsItem(language + ':' + toTranslate) && this.opts.ignoreLs == false) {
                if(typeof varName !== 'undefined') {
                    translations[varName] = getLsItem(language + ':' + toTranslate);
                    return;
                }
                else{
                    return getLsItem(language + ':' + toTranslate);
                }
            }

            //Return call to API
            this.contactApi(toTranslate, function(data){
                if(typeof varName !== 'undefined') {
                    if(data !== ''){
                        translations[varName] = data;

                        // Update any if it had to use default
                        var update = document.querySelectorAll('.update-'+varName);
                        if(update.length > 0){
                            for (var i = 0; i < update.length; ++i) {
                                update[i].innerHTML = data;
                            }
                        }
                        else{
                            // Check again as js might not have loaded
                            (function(){
                                setTimeout(function(){
                                    var update = document.querySelectorAll('.update-'+varName);
                                    if(update.length > 0){
                                        for (var i = 0; i < update.length; ++i) {
                                            update[i].innerHTML = data;
                                        }
                                    }
                                }, 3000);
                            })(varName)
                        }
                    }
                }
                else{
                    return data;
                }

                return;
            });
        },
        message: function(toTranslate, append, prepend){

            language = typeof language !== 'undefined' ? language : 'en';

            var lg = '_'+language;

            append = typeof append === 'undefined' ? '' : append;
            prepend = typeof prepend === 'undefined' ? '' : prepend;

            // Check if already in storage
            if(getLsItem(language + ':' + toTranslate[0]) && getLsItem(language + ':' + toTranslate[1]) && this.opts.ignoreLs == false){
                return message(getLsItem(language + ':' + toTranslate[0]), append + ' ' + getLsItem(language + ':' + toTranslate[1]) + ' ' + prepend);
            }
            
            // Check to see if valid for translation. Half the message could be coming from an ajax request;
            if(!validForTranslation(toTranslate[0]) || !validForTranslation(toTranslate[1])){

                if(!validForTranslation(toTranslate[0]) && !validForTranslation(toTranslate[1])){
                    return message(toTranslate[0], append+' '+toTranslate[1]+' '+prepend);
                }

                // Check for the valid message items
                var valid = validForTranslation(toTranslate[0]) ? 0 : 1;

                // Check if valid item already exists in storage
                if(getLsItem(language + ':' + toTranslate[valid]) && this.opts.ignoreLs == false){
                    if(valid === 0){
                        message(getLsItem(language + ':' + toTranslate[0]), append+' '+toTranslate[1]+' '+prepend);
                    }else{
                        message(toTranslate[0], append+' '+getLsItem(language + ':' + toTranslate[1])+' '+prepend);
                    }

                    return;
                }
                else{

                    return this.contactApi(toTranslate[valid], function(data){
                        if(valid === 0){
                            message(data, append+' '+toTranslate[1]+' '+prepend);
                        }else{
                            message(toTranslate[0], append+' '+data+' '+prepend);
                        }
                        return;
                    });
                }
            }
            else{

                return this.contactApi(toTranslate, function(data){
                    message(data[0], append+' '+data[1]+' '+prepend);
                    return;
                });
            }
        },
        // Contact the api
        contactApi: function(toTranslate, callback){

            language = typeof language !== 'undefined' ? language : 'en';

            var that = this,
                values = [],
                stringValues = '';

            // Check to see if its an array of translations
            if(typeof toTranslate !== 'string'){
                for (var x in toTranslate){
                    values.push(language+':'+toTranslate[x]);
                    stringValues += language+':'+toTranslate[x]+'&v=';
                }
            }
            else{
                values.push(language+':'+toTranslate);
                stringValues += language+':'+toTranslate;
            }

            $.ajax({
                url: 'https://api.alison.com/v0.1/translations/multiple?v='+stringValues,
                type: 'GET',
                timeout: 3000,
                contentType : 'application/json',
                success: function (data) {
                    var response = data.result.translations,
                        dataTranslation = [];

                    if(!isEmpty(response)){
                        setLsItem("updated_at", ''+that.opts.runAt);

                        // If response is an array then loop through
                        if(typeof toTranslate !== 'string') {
                            for(var x in values){
                                setLsItem(values[x], response[values[x]]);
                                dataTranslation.push(response[values[x]]);
                            }
                            return callback(dataTranslation);
                        }
                        // Just check to see if its populated and return
                        else{
                            var returnTrans = response[language + ':' + toTranslate];

                            if(returnTrans !== ''){
                                setLsItem(values[0], returnTrans);
                            }

                            return callback(returnTrans);
                        }
                    }
                    else{
                        return;
                    }
                },
                error: function (xhr) {
                }
            });
            return;
        }
    };

Lang.init();

// Sticky ads
function stickyAd(){
    var adTop = $('.sticky-ad').offset().top;
    $(window).scroll($.throttle(0, function(){
        var stickyAd = $('.sticky-ad'),
            headerHeight = $('header').height();

        // If scrolling below ad then set position to fixed
        if( ( $(window).scrollTop() + headerHeight ) >= stickyAd.offset().top ){
            adTop = stickyAd.offset().top;
            stickyAd.css({ 'position':'fixed'});
        }

        // If screen is scrolled to the top set ad position to absolute
        if(adTop >= ( $(window).scrollTop() + headerHeight )){
            stickyAd.css({ 'position':'absolute'});
        }

        // If scrolling to footer stop the add just before the footer
        if( ( ( stickyAd.offset().top + stickyAd.height() ) >= ( $('footer').offset().top - 50 ) ) ){
            stickyAd.css({'top': ( $('footer').offset().top - 200 - stickyAd.height() ) ,'position':'absolute'});
        }
        else if(adTop >= ( $(window).scrollTop() + headerHeight )){
            stickyAd.css({ 'position':'absolute', 'top' : '125px'});
        }
        else{
            stickyAd.css({ 'position':'fixed', 'top' : '125px'});
        }
    }));
}

/**
 * Displays sticky ad on static pages
 *
 * @param {string} container - css selector for ad container
 * @param {number} position - top value to be used when changing from position fixed to position absolute
 *
 */

function innerPageStickyAd(container, position){
    // For IExplore
    var adContainer, positionTop;
    adContainer = (container) ? container : '.inner-page-sticky-ad';
    positionTop = (position) ? position : 155;

    if($(adContainer).length){
        var adTop = $(adContainer).offset().top, stickyAd = $(adContainer);
        stickyAd.css({ 'position':'absolute', 'top' : positionTop + 'px'});
        
        $(window).scroll($.throttle(0, function(){
            var headerHeight = $('header').height()+33;

            // If scrolling below ad then set position to fixed
            if( ( $(window).scrollTop() + headerHeight ) >= stickyAd.offset().top ){
                adTop = stickyAd.offset().top;
                stickyAd.css({ 'position':'fixed'});
            }

            // If screen is scrolled to the top set ad position to absolute
            if(adTop >= ( $(window).scrollTop() + headerHeight )){
                stickyAd.css({ 'position':'absolute'});
            }

            // If scrolling to footer stop the add just before the footer
            if( ( ( stickyAd.offset().top + stickyAd.height() ) >= ( $('footer').offset().top - 50 ) ) ){
                stickyAd.css({'top': ( $('footer').offset().top - 51 - stickyAd.height() ) ,'position':'absolute'});
            }
            else if(adTop >= ( $(window).scrollTop() + headerHeight )){
                stickyAd.css({ 'position':'absolute', 'top' : positionTop + 'px'});
            }
            else{
                stickyAd.css({ 'position':'fixed', 'top' : '155px'});
            }
        }));
    }
}

$(document).ready(function () {

    $('.match-height').matchHeight();
    $('.eq-height').matchHeight();
    $('.same-height').matchHeight();
    $.fn.matchHeight._apply('.course-holder, .course .ad');

    $('.category-link-inner').click(function(e){
        e.stopPropagation();
    });

    $('.category-cancel').click(function(e){
        e.preventDefault();
    });

    // Cookie Banner
    if($('.cookie-banner').length){

        if(typeof localStorage !== 'undefined'){
            if(!localStorage.getItem('cookieBannerHidden')){
                //$('.cookie-banner').addClass('active'); // Disabled until approved
            }

            $('.cookie-banner .close').click(function(e) {
                e.preventDefault();
                console.log('klinkniecie');
                $('.cookie-banner').slideUp('fast');
                $('.cookie-banner').removeClass('active');
                localStorage.setItem('cookieBannerHidden', true);
            });
        }
    }
    
    // Sale Banner
    if($('.sale').length > 0){
        $('.sale .close').click(function(e) {
            e.preventDefault();
            $('.sale').slideUp('fast');
            $('.sale').removeClass('active');
            $('body').removeClass('sale-active');

            if(typeof localStorage !== 'undefined'){
                localStorage.setItem('sale_banner_closed_at', Math.floor(Date.now() / 1000));
            }
        });

        if(typeof localStorage !== 'undefined') {
            // If sale banner closed timestamp is saved
            if (localStorage.getItem('sale_banner_closed_at')) {

                var storageDate = parseInt(localStorage.getItem('sale_banner_closed_at')),
                    dateNow = Date.now() / 1000,
                    dateDiff = dateNow - storageDate;

                // Check if timestamp has expired - if it has show banner
                if (Math.floor(dateDiff / (3600*24)) >= 3) {
                    $('.sale').addClass('active');
                    $('body').addClass('sale-active');

                    localStorage.removeItem('sale_banner_closed_at');
                }
            }
            else {
                $('.sale').addClass('active');
                $('body').addClass('sale-active');
            }
        }
    }

    if($('.not-loggedin').length === 0){
        ttlReset(35);
    }

    // Functions
    scrollbar();

    $(window).load(function(){
        var timeInc = 0;
        function loadRadial(el, progress){
            setTimeout(function(){$(el).attr('data-progress', progress)}, timeInc);
            timeInc+=1000;
        }

        $('.start-loading').each(function(){
            var progress = $(this).attr('data-finish');
            loadRadial(this, progress);
        });
    });

    $(window).load(function(){

        // Check to see if content is smaller than window
        if($('body').height() < $(window).height() && $('body').width() > '1920'){

            var target = document.getElementById( 'main-holder' ),
                observer = new MutationObserver( function ( mutation ) {
                });

            // Create observer to watch for changes in the main holder so heights can be checked
            observer.observe(target, {attributes: true, childList: true, characterData: true, subtree:true});
        }
    });

    // Check if viewport class exists, if it doesn't, do nothing
    if ($('.viewport').length >= 1) {
        // Only fire Scroll function every 0.5s
        $(window).scroll(check_if_in_view);
    }

    if($('.course').length >= 1) {
        $(window).resize($.throttle(50, function(){
            if($(window).width() > 767){
                clearCourseStyles();
            }
        }));
    }

    // Applied globally on all textareas with the "autoExpand" class
    $(document)
        .one('focus.autoExpand', 'textarea.autoExpand', function(){
            var savedValue = this.value;
            this.value = '';
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        })
        .on('input.autoExpand', 'textarea.autoExpand', function(){
            var minRows = this.getAttribute('data-min-rows')|0, rows;
            this.rows = minRows;
            rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
            this.rows = minRows + rows;
        });

    // If the active topic on the course page is over the fold scroll it up
    $(window).load(function(){
        var list = '.module-topics ol li';
        if($(window).width() >= 1440 && $('.module-topics ol li').length > 0){
            if(( $(list+'.active').position().top + 10 ) > $('.module-topics').height()){
                $('.module-topics').mCustomScrollbar("scrollTo",$(list+'.active').position().top);
            }
        }
    });

    //Handle select empty value as a placeholder
    $('select').change(function () {
        if (!this.value) {
            $(this).addClass('placeholder');
        } else {
            $(this).removeClass('placeholder');
        }
    });

    // Slide products uo when order now is clicked
    $(document).on('click', '.cert-order:not(.add-to-cart)', function(){
        $(this).parent().prev().find('.slide-up-products').toggleClass('view');
    });

    $(document).on('click', '.cert-order-link-popup', function(e){
        e.preventDefault();
        $(this).parent().find('.slide-up-products').addClass('view');
        //$(this).siblings().toggleClass('view');
    });

    dashboardProgressBar();

    userProfileSwitch();

    //Email subscription switch on dashboard
    emailSubscription();

    //Course Show/Hide
    courseInfo();

    //Tabs
    openTab();

    //Modal
    modal();

    //Form Validation
    formValidation();

    //Star Rating
    starRating();

    //All click events
    clickEvents();

    //All hover events
    hoverEvents();

    //Sharing popup event
    sharing();

    //Smooth Scroll
    smoothScroll();

    //Homepage banner background
    homepageBannerBg();

    //Profile page
    profile();

    //Congratulations page
    congratulations();

    //widgets
    widgets();

    //Read More / Read Less Toggle
    if($('.more').length > 0 || $(".morelink").length > 0){
        read_more_less();
    }

    changeLabel();

    //Categories toggle
    categoriesCollapse();

    //Favorite Course
    favorite('course');

    //Select All Checkboxes
    selectAllCheckboxes();

    //Scorms
    openScorms();

    //User notes
    notes();

    //Faq Feedback Yes/No
    faqFeedback();

    //Slide Toggle Next Element
    slideToggleNext();

    getModuleTitle();

    //Get .viewport positions. Might not be 100 accurate at this time so another is called on page load
    getPositions();

    scrollToDownloads();

    if($('.share-trigger').length){
        $('.share-trigger').click(function(e){
            e.preventDefault();
        })
    }

    $('.message').delay(8000).fadeOut();

    // Sidebar open close toggle
    $('.sidebar-trigger').click(function (e) {
        e.preventDefault();
        $('.profile-menu').slideToggle();
        $('.wide-dd-container, .notifications-menu, .orders-popup').slideUp();
        $('.open-menu.active').removeClass('active');
    });

    $('.application-form-container input[type="submit"]').click(function(e){
        $('.upload input:invalid').next().addClass('invalid').next().addClass('invalid');
    });

    $('#btnCloseUpdateBrowser').click(function(e){
        e.preventDefault();

        $(this).closest('#outdated').hide();
    });

    $(document).on('click', '.mobile-read-more-button', function (e) {
        e.preventDefault();
        $(this).parents('.course-block').addClass('show');
    })

});

// Rest the ttl for users so they aren't logged out
function ttlReset(duration){
    var ttlTimer = duration;

    setInterval(function () {
        if (--ttlTimer < 0) {
            ttlTimer = duration;
            $.ajax({
                url: '/user/keepalive',
                method: 'GET',
                success: function (data) {}
            });
        }
    }, 60000);
}

/**
 * Set scrollbar
 */
function scrollbar(){
    $(".scrollbar").mCustomScrollbar({
        theme: '3d',
        scrollbarPosition: 'inside',
        scrollInertia: 300,
        autoHideScrollbar: false,
        documentTouchScroll: true,
        scrollButtons:{ enable: ($('.cart-scrollbar').length > 0) }
    });
}

// Replace image with default if it doenst exist
function imgError() {
    $("img").error(function () {
        $(this).unbind("error").attr("src", "/html/site/img/alison-icon-default.png");
    });
}

function getModuleTitle() {
    var activeModuleTitle = $('.player-slider .active a').attr('title');
    var h4 = $('.module-nav .module-title');
    $(h4).text(activeModuleTitle);
}

//Animate by progress bar with the percentage passed in.
function progress(percent, element) {
    var progressBarWidth = percent + '%';
    element.find('.bar').animate({ width: progressBarWidth }, 1300).html(percent + "%");
}

function dashboardProgressBar() {

    //Cycle through each course percentage and pass it back to progress to be animated.
    $('.dashboard-progress-meter').each(function() {
        var element = $(this);
        var percent = $(this).attr('data-percentage');
        progress(percent, element);
    });

}

function userProfileSwitch(){
    //Public/Private profile
    $('#is_public').click(function () {
        var value = parseInt($(this).attr('data-value'));
        value = value ? 0 : 1;
        $('.loading').fadeIn();
        $.ajax({
            url: '/user/' + $(this).attr('data-id')+'/set-public',
            method: 'PATCH',
            data: {
                is_public: value
            },
            success: function (data) {
                $('.loading').fadeOut();
                if (data.status == 'success') {
                    var _public = $('#is_public');
                    if(_public.hasClass('button-on')){
                        _public.removeClass('button-on').addClass('button-off');
                    }
                    else{
                        _public.removeClass('button-off').addClass('button-on');
                    }
                    Lang.message(['success.success',data.message]);
                    $('.view-profile').html(data.message);
                }
            },
            error: function (e) {
                $('.loading').fadeOut();
            }
        });
    });
}

/**
 * Email subscription click event in dashboard
 */
function emailSubscription(){
    $('#emailSubscription').click(function(){
        $('.loading').fadeIn();
        var dom = this;
        var userURL = $(this).attr('data-url');
        var label = $('.view-subscription').find('label.on-off');
        $.ajax({
            url     : userURL,
            method  : 'GET',
            success : function (data) {
                $('.loading').fadeOut();
                var email = $('#emailSubscription');
                if(email.hasClass('button-on')){
                    email.removeClass('button-on').addClass('button-off');
                }
                else{
                    email.removeClass('button-off').addClass('button-on');
                }
                message(data.status,data.message);
                $(label).text($(dom).attr('data-value') == 1 ? 'ON' : 'OFF');
            },
            error : function(e){
                $('.loading').fadeOut();
                Lang.message(['errors.error','errors.comment']);
            }
        });
    });
}


/**
 * On document load
 */

function openScorms(){
    $('#course-plan .v-pane .scorm').click(function(){
        $(this).next().slideToggle().parent().toggleClass('down active')
        $(this).closest('.scrollbar').mCustomScrollbar("update");
    });

    $('#course-plan .module-not-completed').first().addClass('down active next-sco').find('.scorm').next().slideDown();

    $('.btn-go-back').click(function(e){
        e.preventDefault();
        window.close();
    });
}


function courseInfo() {
    var courseOriginalPosition;

    // Click event on text
    $('.course .holder-bottom > a, .course .holder-top > img').click(function (e) {
        e.preventDefault();

        //Get course DOM object
        var course = $(this).closest('.course');

        if ($(course).hasClass('active')) {
            return;
        }

        $("html, body").animate({ scrollTop: ( $(course).offset().top - 110 )}, 400);

        //Removing others loaded course details
        $('.course-info').remove();

        //Check if there is already opened courses to close them
        var activeCourse = $('.course.active');

        if($(activeCourse).length){
            closeCourseInfo($(activeCourse),loadCourseDetails);
            return;
        }
        else{
            loadCourseDetails();
            return;
        }

        /**
         * Function to load courses details
         */
        function loadCourseDetails(){

            //Display loading animation
            $('.loading').fadeIn();

            //ajax call get course details data
            $.ajax({
                url     : '/'+$(course).attr('data-type')+'/'+$(course).attr('data-id')+'/details',
                method  : 'GET',
                success : function (data) {
                    //Append data to the course
                    $(course).append(data);

                    //Events
                    openTab();
                    closeCourseInfoEvent();
                    scrollbar();

                    //Remove loading animation
                    $('.loading').fadeOut();

                    //Open course details
                    openCourseInfo(course);
                },
                error : function(e){
                    $('.loading').fadeOut();
                }
            });
        }
    });

    /**
     * Close course info event
     */
    function closeCourseInfoEvent(){
        // Click event on top right cross
        $('.course-info-trigger').click(function (e) {
            e.preventDefault();

            closeCourseInfo($(this).closest('.course'));
        });
    }


    /**
     * Open course info panel in course listings page
     * @param course
     */
    function openCourseInfo(course){

        // Get Height of clicked element, later apply that height to clone to avoid jump if only 1 element is returned from search
        var courseHeight =  $(course).find('.course-holder').height();
        var windowWidth = window.innerWidth;
        // Position element based on their current position
        var coursePosition = $(course).position().top + 'px';
        courseOriginalPosition = $(course).children('.course-holder').position();

        // Mobile
        if(windowWidth < 768){

            $('.course').removeClass('active');
            $(course).addClass('active');
            $('.course .course-info').slideUp();
            $(course).children('.course-info').slideToggle(function(){
                $('body,html').scrollTop($('.course.active').offset().top);
            });
            $('body,html').scrollTop($('.course.active').offset().top);

        } else {

            var left = "250px";

            // Clone/ Insert element before current course, to avoid following elements from jumping into its place
            $('<div class="course clone"></div>').css('height', courseHeight + 25).insertBefore($(course));
            $(course).children('.course-holder').css({'left': courseOriginalPosition.left - 12, 'top': '0', 'position': 'absolute'}).animate({'left': '0px'}, 500);
            $(course).children('.course-info').animate({'left': left}, 700);
            $(course).addClass('active').css('top', coursePosition);

            $.fn.matchHeight._apply('.course.active .course-holder, .course.active .course-info');
        }
    }

    /**
     * Close course info panel in course listings page
     * @param course
     * @param callback
     */
    function closeCourseInfo(course,callback){
        var windowWidth = $(window).width();

        // Mobile
        if(windowWidth <= 767) {
            $('.course.clone').remove();
            $('.course').removeClass('active');
            $('.course-holder').removeAttr('style');
            $('.course-info').removeAttr('style');
            $(course).removeClass('active').removeAttr('style');

            //Tablet
        } else {
            // Animate elements to their original positions
            $(course).children('.course-info').stop(true, true).animate({'left': '+=1500', 'right': '-=1000'}, 100);

            if(!callback){
                $(course).children('.course-holder').css({'position': 'absolute', 'top': '0'}).stop(true, true).animate({'left': courseOriginalPosition.left - 10}, 500 ,function(){
                    resetCourseCss();
                });
            }
            else{
                $(course).children('.course-holder').css({'position': 'absolute', 'top': '0', 'left': courseOriginalPosition.left - 10});
                resetCourseCss();
            }
        }

        if(callback){
            callback(course);
        }

        function resetCourseCss(){
            $('.course.clone').remove();
            $(course).removeClass('active').removeAttr('style');
            $('.course').removeClass('active');
            $('.course-holder').removeAttr('style');
            $('.course-info').removeAttr('style');
        }

        return;
    }
}

// Course Listing clear styles
function clearCourseStyles() {
    $('.course.clone').remove();
    $('.course').removeClass('active').removeAttr('style');
    $('.course-holder').removeAttr('style').css('position', 'static');
    $('.course-info').removeAttr('style');
}

function changeLabel() {
    $("[type=file]").on("change", function(){
        // Change the label name on file upload
        var file = this.files[0].name,
            labelOld = $('label[for="'+$(this).attr('id')+'"]').text(),
            label = $('label[for="'+$(this).attr('id')+'"]'),
            icon = $(this).parent().find('.icon-upload');

        if(icon.length){

            icon.addClass('icon-cross2').removeClass('invalid').next().removeClass('invalid');

            $(document).on('click','.field.upload .icon-cross2', function(){
                var parent = $(this).parent();

                $(this).removeClass('icon-cross2');
                parent.find('label').text(labelOld);

                resetFormElement(parent.find('input'));
            });
        }

        label.text(file);
    });
}

function resetFormElement(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

/**
 * Categories for course listing page
 */
function categoriesCollapse(){
    var trigger = $('.categories-trigger');
    if($(trigger).length){
        $(trigger).click(function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            $('.categories-holder').slideToggle();
        });

        $('.categories-holder, .trigger-search, input[name="q"]').click(function (event) {
            event.stopImmediatePropagation();
        });

        $(window).click(function() {
            //Hide the menus if visible
            $('.categories-holder').slideUp();
        });
    }
}

$('.categories-holder .view-all .btn').click(function(e){

    var target = '.filter-checkboxes input[type="checkbox"]:checked';

    if($(target).length > 0){
        e.preventDefault();
    }

    var url = '?',
        link = $(this).attr('href');

    $(target).each(function(){
        url += $(this).next().find('.check-label').text()+'=1&'
    });

    window.location.href = link+url;
});

$('.filter-checkboxes input[type="checkbox"], .filter-checkboxes label[for="selectAll"], .categories-trigger').click(function(){
    var btn = ".categories-holder .view-all .btn";

    if($('.filter-checkboxes input[type="checkbox"]:checked').length > 0){
        $(btn).text(Lang.get('common.view_selected')).addClass('selected')
        $('.select').hide();
        $('.count-hide').show()
    }
    else{
        $(btn).text(Lang.get('common.view_all')).removeClass('selected')
        $('.select').show();
        $('.count-hide').hide()
    }
});

/**
 * Filters for course listing page
 */
function slideToggleNext(){
    $('.trigger').click(function (event) {
        event.preventDefault();

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next('.slideToggle').slideUp();
        } else {
            $('.topic-helpers .trigger').removeClass('active');
            $('.topic-helpers .slideToggle').slideUp();
            $(this).addClass('active');
            $(this).next('.slideToggle').slideDown();
        }
    });
}

/**
 * Select all checkboxes handler
 */
function selectAllCheckboxes() {

    $("#selectAll").change(function(e){  //"select all" change

        e.preventDefault();

        var status = this.checked; // "select all" checked status

        $('.filter-checkboxes .filter').each(function(){ //iterate all listed checkbox items
            this.checked = status; //change ".checkbox" checked status
            $('.categories-trigger').addClass('active');
        });

        if(!status){
            $('.categories-trigger').removeClass('active');
        }

        var btn = ".categories-holder .view-all .btn";
        if($('.filter-checkboxes input[type="checkbox"]:checked').length > 0){
            $(btn).text(Lang.get('common.view_selected')).addClass('selected');
            $('.select').hide();
            $('.count-hide').show()
        }
        else{
            $(btn).text(Lang.get('common.view_all')).removeClass('selected');
            $('.select').show();
            $('.count-hide').hide()
        }

        selectAllButton();
    });

    $('.filter-checkboxes .filter').change(function(e){ //".checkbox" change
        e.preventDefault();
        var selectionCount = $('.filter-checkboxes .filter:checked').length;
        $('.selection-count .count').text(selectionCount);

        //change wording depending on the count
        if(selectionCount == 1){
            $('.selection-count .count-text').text(Lang.get('form.category_selected'));
        }
        else{
            $('.selection-count .count-text').text(Lang.get('form.categories_selected'));
        }

        //uncheck "select all", if one of the listed checkbox item is unchecked
        if(this.checked == false){ //if this item is unchecked
            $("#selectAll")[0].checked = false; //change "select all" checked status to false
            $(".select-buttons label").text(Lang.get('form.select_all'));

        }

        //check "select all" if all checkbox items are checked
        if ($('.filter-checkboxes .filter:checked').length == $('.filter-checkboxes .filter').length ){
            $("#selectAll")[0].checked = true; //change "select all" checked status to true
            $(".select-buttons label").text(Lang.get('form.unselect_all'));
        }

        if(selectionCount == 0) {
            $('.categories-trigger').removeClass('active');
        } else {
            $('.categories-trigger').addClass('active');
        }

    });

    /**
     * Select All button handler
     */
    function selectAllButton(){
        // Selection count
        var selectionCount = $('.filter-checkboxes .filter:checked').length;
        $('.selection-count .count').text(selectionCount);

        // Change Select button text
        if($("input[name=nbCategories]").val() != selectionCount) {
            $(".select-buttons label").text(Lang.get('form.select_all'));
        } else {
            $(".select-buttons label").text(Lang.get('form.unselect_all'));
        }
    }

    if($('.filter-checkboxes .filter').length > 0){
        selectAllButton();
    }
}

function resetFilter(){
    $('.filters-holder').hide().parent().removeClass('active');
    $('.filters-holder-inner input[data-reset=true]').attr('checked', false);
    $('.filters').hide();
    $('.filters[data-filter='+$('.tab-title.active').attr('data-name')+']').show();
}

/**
 * Display courses for learning paths
 */

displayLearningPathCourses();

function displayLearningPathCourses(){

    $('.load-courses').click(function(e){
        e.preventDefault();

        var path = $(this).parents('.learning-path'),
            id = path.attr('data-id');

        if($(this).hasClass('clicked')){
            path.next().slideToggle('slow');
            $(this).removeClass('clicked');
        }
        else{
            if(!$(this).hasClass('loaded')){
                $('.loading').fadeIn();
                $(this).addClass('clicked loaded');

                $.ajax({
                    url: 'learning-path/'+id+'/courses',
                    method: 'POST',
                    success: function (data) {
                        path.after('<div class="learning-path-courses clearfix">'+data+'</div>').promise().done(function(){
                            $('.loading').fadeOut();

                            path.next().slideToggle('slow', function(){
                                $('.learning-path-courses .dashboard-progress-meter').each(function() {
                                    var element = $(this);
                                    var percent = $(this).attr('data-percentage');
                                    progress(percent, element);
                                });
                            });
                        });
                    }
                });
            }
            else{
                $(this).addClass('clicked');
                path.next().slideToggle('slow');
            }
        }
    });
}

// REQUIRED FOR FAQS
/**
 * Update the rating according to the users feedback option
 */
function faqFeedback() {

    $('.helpful a').click(function (event) {

        var id = $(this).attr('data-id');
        var isHelpful = $(this).attr('data-helpful');
        $('.loading').fadeIn();
        $.ajax({
            url: '/faqs/rating/' + id,
            data: {
                'isHelpful': isHelpful
            },
            type: 'PATCH',
            success: function (data) {
                $('.loading').fadeOut();
                if(parseInt(data.isHelpful)) {
                    $('.helpful').hide();
                    $('.is-helpful').slideDown();
                } else {
                    $('.helpful').hide();
                    $('.not-helpful-contact').slideDown();
                }
            },
            error: function (e) {
                $('.loading').fadeOut();
            }
        });

        event.preventDefault();
    });

    var errors = $.find('.error-message');
    if(errors.length){
        $('.helpful').hide();
        $('.not-helpful-contact').slideDown();
    }
}


// REQUIRED FOR GLOBAL
/**
 * Display a message (user notification message)
 *
 * @param status
 * @param message
 */
function message(status, message){

    var msg = '<div class="message '+ status.toLowerCase() +'" style="display: none"><h6>' + status + '</h6><p>'+ message+'</p></div>';
    $('.messages-q').append(msg);
    $('.message').fadeIn();
    $('.message').delay(8000).fadeOut(function(){
        $(this).remove();
    });
}

/**
 * Init widgets
 */
function widgets(){
    //switch widget
    $('.switch').click(function(){
        var value = parseInt($(this).attr('data-value'));
        //Turn it OFF
        if(value){
            $(this).find('button').removeClass('on');
            $(this).attr('data-value',0);
        }else{
            //Turn it ON
            $(this).find('button').addClass('on');
            $(this).attr('data-value', 1);
        }
    });

    //Events click on like dislike comment
    $('.like-comments-widget > a').click(function (e) {
        var id = $(this).parent().attr('data-id');
        var value = $(this).hasClass('thumb-up') ? 1 : 0;
        var dom = this;
        $('.loading').fadeIn();
        $.ajax({
            url: '/comments/rank/' + id + '/' + value,
            type: 'GET',
            success: function (data) {
                $('.loading').fadeOut();
                if (data.status == 'success') {
                    var thumb_up = $(dom).parent().find('.thumb-up');
                    var thumb_down = $(dom).parent().find('.thumb-down');

                    if (value > 0) {
                        //You just liked the comment
                        $(dom).addClass('blue');
                        $(thumb_down).removeClass('red');
                    } else {
                        //You just disliked the comment
                        $(dom).addClass('red');
                        $(thumb_up).removeClass('blue');
                    }

                    $(thumb_up).parent().find('.thumb-up').find('label').html(' ' + data.data.likes);
                    $(thumb_down).parent().find('.thumb-down').find('label').html(' ' + data.data.dislikes);

                }
            },
            error: function (e){
                $('.loading').fadeOut();
            }
        });
        e.preventDefault();
    });
}

// REQUIRED FOR PLAYER PAGE

/**
 * Note listener on the player page
 */
function notes(){
    var oldValue = '',
        field = $('textarea[name=note]');

    field.focus(function(){oldValue = $(this).val()});

    field.blur(function(e){
        var className = e.relatedTarget !== null ? e.relatedTarget.className : '';

        if(className != 'mail-note' && oldValue !== field.val()){
            $(this).saveNote(field,function(data){
                if(data.message){
                    message(data.title,data.message);
                }
            });
        }
    });

    //Save note to db
    $('.save-note').click(function(e){
        e.preventDefault();
        $(this).saveNote(field,function(data){
            if(data.message){
                message(data.title,data.message);
            }
        });
    });

    //Save and email
    $('.mail-note').click(function(e){
        e.preventDefault();

        var a = this;
        $(this).saveNote(field,function(data){
            $('.loading').fadeIn();
            $.ajax({
                url     : '/user/note/'+$(a).parent().attr('data-id')+'/mail',
                method  : 'GET',
                success : function (data) {
                    $('.loading').fadeOut();
                    message(data.title ,data.message);
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        });
    });

    //Save and process (mail or download)
    $('.download-note').click(function(e){
        e.preventDefault();
        var a = this;
        $(this).saveNote(field, function (data) {

            if ($(a).attr('href') == '#') {
                $(a).attr('href', $(a).attr('data-dlink'));
            }

            message(data.title, data.message);
            $(location).attr("href", $(a).attr('href'));
        });
    });

    /**
     * Save user note
     *
     * @param field
     * @param callback
     */
    $.fn.saveNote = function (field,callback){
        var scoid = $(this).parent().attr('data-id');
        var note = $('textarea[name=note]').val();

        $('.loading').fadeIn();

        $.ajax({
            url     : '/user/note/'+scoid,
            method  : 'PATCH',
            data    : {
                note   : note
            },
            success : function (data) {
                var m = data.messages ? data.messages.note : null;
                $(field).validationMessage(m);
                if(data.status == 'success'){
                    callback(data);
                }
                $('.loading').fadeOut();
            },
            error: function (e) {
                $('.loading').fadeOut();
            }
        });
    };

    // Submit comment for Topics
    $('.submit-topic-comment').click(function (e) {
        e.preventDefault();
        var inputValue = $('#comment').val();
        var scoId = $(this).attr('data-sco-id');
        $('.loading').fadeIn();
        $.ajax({
            url: '/comments',
            method: 'POST',
            data: {
                'content': inputValue,
                'type': 'scos',
                'id': scoId
            },
            success: function (data) {
                $('.loading').fadeOut();
                Lang.message(['success.success','success.user_comment_approved']);
            },
            error: function (data) {
                if(typeof data.responseJSON.content !== undefined){
                    Lang.message(['errors.error', data.responseJSON.content]);
                }
                else{
                    Lang.message(['errors.error','errors.comment']);
                }
                $('.loading').fadeOut();
            }
        });
    });
}



// REQUIRED FOR PROFILE PAGE
/**
 * Js related to the profile page
 */
function profile(){
    //Check if we rae on profile page
    if (!$('#profile').length) {
        return;
    }

    //Check if we are not on public profile
    if($('.public').length){
        return;
    }

    /**
     * Update profile completion everrywhere on the page
     *
     * @param value
     */
    $.fn.updateProfileCompletion = function (value) {
        $(this).updateRadial(value);
        $(this).parent().find('label.profile_completion').text(value);
    };

    /**
     * Init croppic Plugin
     */
    function initCroppic() {

        if (!$('#profile').length) {
            return;
        }

        var ajax_param = {userid: $('#profile input[name=user]').val()};
        var croppicContainerModalOptions = {
            uploadUrl: 'user/avatar/upload',
            uploadData: ajax_param,
            sidebarObj: $('.sidebar-profile-img'),
            cropUrl: 'user/avatar/crop',
            outputUrlId: 'user_avatar',
            allowedExtensions: '.png,.jpg',
            rotateFactor: 90,
            cropData: ajax_param,
            modal: true,
            singleZoomControls : false,
            loaderHtml: '<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> '
        };
        var cropContainerModal = new Croppic('avatar', croppicContainerModalOptions);
    }

    /**
     * Set event Listeners
     */
    function initEventsListeners() {

        var old_value = null;

        //date placeholder
        $('[type=date]').blur(function(){
            var pVal = (this.value) ? '' : $(this).attr('original_placeholder');
            $(this).attr('placeholder', pVal);
        });

        //Add items (save)
        $(document).on('submit', '#profile form', function (e) {
            //STOP default action
            e.preventDefault();

            //STOP event propagation
            e.stopImmediatePropagation();

            //Get ajax parameters
            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            var form = $(this);
            postData.push({
                'name'  : 'is_default',
                'value' :  $('#is_default:checked').length
            });
            $('.loading').fadeIn();
            $.ajax({
                url     : formURL,
                type    : 'POST',
                data    : postData,
                success : function (data) {
                    $('.loading').fadeOut();
                    if (data.status && data.status == 'error') {
                        $(form).validate(data.messages);
                    } else {
                        $(form).parent().slideUp(function () {
                            $('#' + $(form).attr('data-type')).html(data.view);
                            Lang.message(['success.success',data.message]);
                            $('#user_avatar').updateProfileCompletion(data.profile_completion);
                        });
                    }
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });

        });

        // Display add form
        $(document).on('click', '#profile .add', function () {
            var icon = $(this).find('i');
            if ($(icon).hasClass('icon-plus')) {
                var infobox = $(this).parent().next('.info-box'),
                    form = $(infobox).find('form');

                $(form)[0].reset();

                $(infobox).find("input[type=checkbox]").removeAttr('checked');
                $(infobox).find('.errors').hide();
                $(infobox).slideDown(function () {
                    $(icon).attr('class', 'icon-minus');
                });
            } else {
                $(this).parent().next('.info-box').slideUp(function () {
                    $(icon).attr('class', 'icon-plus');
                });
            }
        });

        // Inline editing for user details
        $('#profile .edit-user-detail').focus(function (e) {old_value = $(this).val();});
        $('#profile .edit-user-detail:not(.hasDatepicker)').blur(function (e) {
            //Check if value has changed
            if($(this).val() == old_value){
                return;
            }

            updateInfo(this);
        });


        // Update user info
        function updateInfo(field){
            $('.loading').fadeIn();
            $.ajax({
                url     : '/user/' + $('input[name=user]').val(),
                method  : 'PATCH',
                data    : {
                    field   : $(field).attr('name'),
                    value   : $(field).val()
                },
                success : function (data) {
                    $('.loading').fadeOut();

                    if (data.status == 'success') {
                        $(field).val(data.value);
                        Lang.message(['success.success',data.message]);
                        $(field).validationMessage();
                        $('#user_avatar').updateProfileCompletion(data.profile_completion);
                    }
                    else{
                        $(field).validationMessage(data.message);
                    }
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        }

        $('.delete-address').click(function (e) {
            e.preventDefault();
            var addressID = $(this).attr('data-address-id');
            $('.loading').fadeIn();
            $.ajax({
                url     : '/user/address/' + addressID,
                method  : 'DELETE',
                success : function (data) {
                    $('.loading').fadeOut();
                    Lang.message(['success',data.message]);
                    $('.address-holder-' + addressID).slideUp('fast').delay(400).remove();
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        });

        // Inline editing for user dependencies like :addresses, educations etc...
        $('#profile .edit-user-dependencies').focus(function (e) {old_value = $(this).val();});
        $('#profile .edit-user-dependencies').blur(function (e) {
            //Check if value has changed
            if ($(this).val() == old_value) {
                return;
            }

            updateUserDependencies(this);

        });

        function updateUserDependencies(target){
            var form = $(target).closest('form');
            var field = target;
            $('.loading').fadeIn();
            $.ajax({
                url     : $(form).attr("action"),
                method  : 'PATCH',
                data    : {
                    field   : $(field).attr('name'),
                    value   : $(field).val()
                },
                success : function (data) {
                    $('.loading').fadeOut();
                    if (data.status === 'error'){
                        $(field).validationMessage(data.message);
                    }
                    else{
                        Lang.message(['success.success', data.message]);
                        $(field).validationMessage();
                    }
                    if (data.status == 'info') {
                        $(field).val(data.value);
                    }
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        }

        // Inline editing for default user address
        $("#profile input[id^='default']").change(function(e){
            e.preventDefault();

            var url = 'user/address/' + $(this).attr('data-id')+'/default' ;
            $('.loading').fadeIn();
            $.ajax({
                url     : url,
                method  : 'PATCH',
                data    : {
                    default : $(this).val()
                },
                success: function (data) {
                    $('.loading').fadeOut();
                    $('#address').html(data.view);
                    initEventsListeners();
                    Lang.message(['success.success', data.message]);
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        });

        //Cancel item event
        $('#profile .cancel').click(function () {
            $(this).closest('.info-box').slideUp(function () {
                $(this).prev().find('button').find('i').attr('class', 'icon-plus');
            });
        });

        Lang.get('common.are_you_sure', 'cancel-text', 'Are you sure');

        //Delete item event
        $('#profile .delete').click(function (e) {

            //STOP default action
            e.preventDefault();

            //STOP event propagation
            e.stopImmediatePropagation();

            var r = confirm(translations['cancel-text']);
            if (r == false) {
                return;
            }
            var type = $(this).attr('data-type');
            var id = $(this).attr('data-id');
            var box = $(this).parent().parent().parent().parent();
            $('.loading').fadeIn();
            $.ajax({
                url: 'user/' + type + '/' + id,
                type: 'DELETE',
                success: function (data) {

                    $('.loading').fadeOut();

                    //If the request has failed
                    if (data.status != 'success' ) {
                        Lang.message(['errors.error', data.message]);
                        return;
                    }

                    // If the request has been successfully processed
                    $(box).slideUp(function () {
                        $('#' + type).html(data.view);
                        $('#user_avatar').updateProfileCompletion(data.profile_completion);
                        initEventsListeners();
                        Lang.message(['success.success', data.message]);
                    });
                },
                error: function (e) {
                    $('.loading').fadeOut();
                }
            });
        });

        //ENTER Key controls
        $('#profile .field > input,textarea,select').keyup(function (event) {
            if (event.keyCode == 13) {
                $(this).blur();
            }
        });
    }

    initCroppic();
    initEventsListeners();
}

/**
 * Radial : method to update radial percentage
 *
 * @param value
 */
$.fn.updateRadial = function (value) {
    $(this).closest('[class^=radial-progress]').attr('data-progress', value)
};


// REQUIRED ON COURSE INFO PAGE
/**
 * Function for Read more / Read Less Toggle
 */
function read_more_less(){
    var ellipsestext = "...";
    var moretext = $('.morelink-text').text();
    var lesstext = $('.lesslink-text').text();

    $('.more').each(function() {
        var content = $(this).html();

        if($(this).hasClass("longtext")) {
            var showChar = 250; // Change to show longer text
        } else {
            var showChar = 150; // Default for short text
        }

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }
    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        $.fn.matchHeight._update();
        return false;
    });
}


// GLOBAL FUNCTION
/**
 * Init Form validation and display messages
 */
function formValidation(){
    /**
     * Display validation message for a specific field
     * @param message
     */
    $.fn.validationMessage = function (message) {
        if (!message) {
            $(this).next().fadeOut();
            $(this).next().children('p').html('');
        } else {
            $(this).next().removeClass('hide');
            $(this).next().fadeIn();
            $(this).next().children().last().html(message);
        }
    };

    /**
     * Validate a form
     *
     * @param errorMessages : format => [ 'fieldName' => message, ... , ... ]
     * @returns {boolean}
     */
    $.fn.validate = function(errorMessages){
        var message = null;
        for (var i in errorMessages) {
            message = Array.isArray(errorMessages[i]) ? errorMessages[i].join() : errorMessages[i];
            $(this).find('[name=' + i + ']').validationMessage(message);
        }
        return errorMessages.length;
    };
}

// REQUIRED FOR READ MORE ON THE SEARCH INDEX PAGE
if($('.read-more-expand').length > 0){
    initialiseHideMoreButton();
}

function initialiseHideMoreButton(){
    $(window).resize(hideMoreButton);

    hideMoreButton();

    $('.read-more-expand .trigger').click(function (e) {
        e.preventDefault();

        var pHeight = $(this).siblings('.expand')[0].scrollHeight;
        var expand = $(this).siblings('.expand');

        if(pHeight > $(expand).height()) {
            $(expand).height(pHeight);
        } else {
            $(expand).height('73');
        }
    });

    function hideMoreButton(){
        if($('.expand').length > 0){
            if($('.expand')[0].scrollHeight < 95) {
                $('.tag-description').find('.trigger').hide();
            }
            else{
                $('.tag-description').find('.trigger').show();
            }
        }
    }
}

// REQUIRED FOR COURSE LISTING
$('.unenroll-btn').click(function(e) {
    e.preventDefault();

    $('.confirmation-modal').removeClass('active');

    $('.loading').fadeIn();
    $.ajax({
        url: '/unenrol',
        type: 'POST',
        data: {
            'course_id': modal_course_id
        }
    })
        .then(
            function(response) {
                if(response.status == 'success') {
                    Lang.message(['success.success', 'success.user_unenrol']);
                    $('.course-' + modal_course_id).remove();
                } else {
                    Lang.message(['errors.error', 'errors.user_not_unenrolled']);
                }
                $('.loading').fadeOut();
            },
            function(error) {
                Lang.message(['errors.error', response.message]);
                $('.loading').fadeOut();
            }
        )
});

// REQUIRED FOR COURSE LISTING
$('.open-confirmation-modal').click(function (e) {
    e.preventDefault();

    var modal_id = $(this).attr('data-modal-id');
    modal_course_id = $(this).attr('data-course-id');

    $('#modal_' + modal_id + '.confirmation-modal').toggleClass('active');
});

/*
 * All functions below are required for the cart
 *
 */

// change images in shop
$('#shop-container .colour').click(function() {
    var type = $(this).attr('data-colour');
    var itemImageHolder = $(this).closest('.item-desc').siblings('.item-image');

    $(this).closest('.item-desc').find('.merchandise-name span').html(type);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $(itemImageHolder).children().removeClass('active').find('.' + type).addClass('active');
    $(itemImageHolder).find('.'  + type).addClass('active');
});

// change shirt sizes
$('#shop-container .size').click(function(){
    $(this).siblings('.size').removeClass('active');
    $(this).addClass('active');
});

// Show loading when go-checkout is clicked
$('.go-checkout:not(:disabled)').click(function(){
    $('.loading').fadeIn();
});

// Show the pick address section
if($('.saved-address option').length > 2 || ( $('.saved-address option').length === 2 && ( $('.saved-address option:nth-child(2)').attr('data-address-1') !== '' ) ) ){
    $('.saved-address-show').show();
    $('.saved-address-hide').hide();
}

/// CART GLOBALS
var arrayLength = parseInt($('.order-amount').text());
////////

// CART EVENTS
$('.tshirt-add-to-cart').click(function(){
    var productID = $(this).closest('.item-desc').siblings('.item-image').find('.active').attr('data-product-id');
    var sizeID = $(this).siblings('ul').find('.size.active').attr('data-size');
    var cartLink = $('header .cart .number');
    var cartItems = Number($(cartLink).text());
    var data = {
        'product_id': productID,
        'products_option_id': sizeID
    };
    var $this = $(this);

    $('.loading-cart').fadeIn();

    $.ajax({
        url: '/shop/add-to-cart',
        type: 'POST',
        data: data
    }).then(function (response) {

        $('header .cart .number').addClass('zoomIn');
        $('header .cart').fadeIn();
        $(cartLink).text(cartItems + 1);
        $('.go-checkout').removeClass('disabled btn-grey').addClass('btn-blue');
        $('#adblockAlert').fadeOut();

        var region = language === 'en' ? '' : language + '/',
            //regionRedirect = absolute_url + '/' + region + translations['redirect'];
            regionRedirect = absolute_url + '/' + region + translations['shop-redirect'];

        Lang.get('common.congratulations', 'congrats-link', 'congratulations');

        if(window.location.href === regionRedirect) {
            prepareForCart(response, null,productID, $this);
            $('.loading-cart').fadeOut();
            setTimeout(function () {
                $('header .cart .number').removeClass('zoomIn');
            }, 2000);
        }else if(window.location.href.indexOf(translations['congrats-link']) === -1){
            window.location.href = regionRedirect+'/?shop-tshirts';
        }

    }, function (error) {
        $('.loading-cart').fadeOut();

        if(error.status === 401) {
            window.location.href = absolute_url + '/login';
        } else {
            Lang.message(['errors.error', 'Error occured.']);
        }
    });

});

/**
 * Prepare Page after add-to-cart has been clicked
 *
 * @param response (JSON) response from add to cart AJAX
 * @param data (JSON) data sent to the add to cart AJAX
 * @param product_id (String) the product which has just been added
 * @param $this (HTMLElement) the reference to the clicked button
 *
 */

function prepareForCart(response, data, product_id, $this) {

    if (typeof response.order === 'undefined') {
        return;
    }

    var order = response.order.orders_products;

    // If a new product has been added to the cart
    if (arrayLength != getCartAmount(order)) {

        // Update the prices with new products price
        updatePrices(response);

        Lang.message(['success.success', 'success.user_added_to_cart']);

        // Increment the product if already in cart
        for (var x in order) {
            var id = order[x]['id'],
                amount = parseInt(order[x]['amount']),
                curProduct = $('#product-id-' + id).find('.current-quantity'),
                prodAmount = parseInt(curProduct.text());

            if (amount !== prodAmount && (prodAmount !== null && !isNaN(prodAmount))) {
                prodAmount = curProduct.text(amount);

                // If the amount is now 2 make sure the decrease button is enabled
                if (amount == 2) {
                    $('#product-id-' + id).find('.decrease').removeAttr('disabled');
                }
                return;
            }
        }

        order = order[order.length - 1];

        var title = '',
            prodType = 'T-Shirt',
            isShirt = false,
            tshirts = [20, 21, 22, 23, 24, 26],
            size = '',
            imageLink = '',
            cartId = '',
            product_id = '';

        if (data !== null) {
            // If its a course
            if (typeof data['course_id'] !== 'undefined' && data['course_id'] !== '') {
                cartId = $this.attr('data-course-id');
                product_id = $this.attr('data-product-id');
                if (product_id == 1 || product_id == 2 || product_id == 4 || product_id == 32) { // Cert/Diploma/Pdfs
                    imageLink = '/public/html/site/img/2.png';
                } else if (product_id == 3 || product_id == 5) { // Framed Cert/Diploma
                    imageLink = '/public/html/site/img/3.png';
                } else {
                    imageLink = '/courses/' + cartId + '/alison_courseware_intro_' + cartId + '.jpg';
                }
            }
            // If its a learning path
            else if (typeof data['lp_id'] !== 'undefined') {
                cartId = $this.attr('data-lp-id');
                imageLink = '/learning_paths/' + cartId + '/alison_learning_path_' + cartId + '.jpg';
            }
        }

        // if it exists in the tshirt id array append a size
        if (tshirts.indexOf(order['product_id']) !== -1) {
            isShirt = true;
            title = $this.parent().find('.merchandise-name').text();
            size = '(' + $this.parent().find('.size.active').text() + ')';
            prodType = title;
        }
        else {
            title = $this.parents('.shop-certificate').find('.shop-certificate-title h4').text();
            prodType = $this.parents('.prod-col').prev().prev().find('.prod-name').text();
        }

        addItemToCart(order, title, prodType, isShirt, size, imageLink, $this);
        updatePrices(response);
    }
    else {
        if (parseInt(product_id) === 1) {
            Lang.message(['errors.error', 'cart.already_there']);
        }
    }
}

// When the cart icon is clicked in the header
$(document).on('click', 'header .cart', function (e) {
    if($('.orders-popup').length > 0){
        e.preventDefault();

        $('.wide-dd-container, .notifications-menu, .profile-menu').slideUp();
        $('.open-menu.active').removeClass('active');

        $('.orders-popup').slideToggle();

        if($(window).width() > 767){
            $('.orders-popup-scroll').css('max-height', $(window).height() - 400)
            $('.orders-popup-scroll').mCustomScrollbar({
                theme: '3d',
                scrollbarPosition: 'inside',
                scrollInertia: 300,
                autoHideScrollbar: false,
                documentTouchScroll: true,
                scrollButtons:{ enable: ($('.cart-scrollbar').length > 0) }
            });
        }
    }
});

// When back to top is clicked on the cart page
if($('.cart-back-to-top').length > 0){
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.cart-back-to-top').fadeIn()
        }
        else{
            $('.cart-back-to-top').fadeOut();
        }
    });

    $('.cart-back-to-top').click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing');
    });
}

$('.cart-popout').click(function(e){
    e.stopPropagation();
    $('.shop').toggleClass('open-menu');
});

$('.coupon-holder').click(function(){
    $('.shop').removeClass('open-menu');
});

$('html').click(function(e){
    var element = $('.cart-product-info');
    if(!$(element).has(e.target).length > 0){ // if target element is not contained within cart-product-info class
        $('.shop').removeClass('open-menu');
    }
});

// Slide toggle voucher entry
$('.voucher-heading').click(function(e){
    e.preventDefault();
    $('.voucher-entry').slideToggle()
});

// on page load update the order amount
$('.update-order-amount').each(function(){
    $(this).text($('.order-amount-header').text())
});


/**
 * If on checkout page send for translations
 *
 */

if($('.add-to-cart').length > 0 || $('.checkout-process').length > 0){
    translations['shop-redirect'] = 'shop';
    translations['checkout-redirect'] = 'shop/checkout';
    Lang.get('routes.shop.cart', 'redirect');
    Lang.get('routes.shop.checkout', 'redirect');
}

$(document).on('click', '.add-to-cart:not(.buy-now)', function (e) {
    e.preventDefault();

    var product_id = $(this).attr('data-product-id'),
        course = $(this).attr('data-course-id'),
        learningPath = $(this).attr('data-lp-id'),
        data = {
            'product_id': product_id,
        },
        noIncrement = [10,11],
        $this = $(this),
        isDigital = (product_id == 1 || product_id == 32),
        courseParent = null;


    // if is a digital cert then disable button and find parent
    if(isDigital){
        var parent = $('.shop-certificate-title[data-id='+course+']').parent();
        parent.find('.avail-products li:first-child .add-to-cart').attr('disabled', 'disabled');

        // Find parent of Digital Cert
        courseParent = $('h3[data-course="'+course+'"][data-product="'+product_id+'"]').parent().parent();
    }

    // If ads free disable button
    if(product_id == 11 || product_id == 10){
        $('.prod-button[data-product-id='+product_id+']').attr('disabled', 'disabled');
    }

    // If the item can't be incremented show error already in cart
    if(noIncrement.indexOf(parseInt(product_id)) !== -1 && $('img[data-product="'+product_id+'"]').length > 0){
        Lang.message(['errors.error', 'cart.already_there']);
        return;
    }
    // If products is digital cert and already in cart show error
    else if(isDigital && ( courseParent.attr('data-check') == '1' || courseParent.attr('data-check') == '32' ) ){
        Lang.message(['errors.error', 'cart.already_there']);
        return;
    }
    // If ads free site is already in basket when adding adds free courses show error
    else if(product_id == 10 && $('li[data-check=11]').length > 0){
        Lang.message(['errors.error', 'cart.already_there_ads']);
        return;
    }

    // Check to see is a cert/diploma
    if(typeof course !== typeof undefined && course !== false){
        data['course_id'] = $(this).attr('data-course-id')
    }
    // Check to see if it's a learning path
    else if(typeof learningPath !== typeof undefined && learningPath !== false){
        data['lp_id'] = $(this).attr('data-lp-id');
    }

    $('.loading-cart').fadeIn();

    $.ajax({
        url: '/shop/add-to-cart',
        type: 'POST',
        data: data
    }).then(function (response) {

        $('header .cart').fadeIn().find('.number').addClass('zoomIn');

        // Fade out adblock
        $('#adblockAlert').fadeOut();

        // Make sure the go to checkout button is enabled
        $('.go-checkout').removeClass('disabled btn-grey').addClass('btn-blue');

        var region = language === 'en' ? '' : language + '/',
            regionShopRedirect = absolute_url + '/' + region + translations['shop-redirect'],
            regionCheckoutRedirect = absolute_url + '/' + region + translations['checkout-redirect'];

        if($this.hasClass('congratulations-add-to-cart')){
            window.location.href = regionCheckoutRedirect.split('{id?}')[0]+'?back=true';
        }
        else if(!$this.hasClass('open-popup') && window.location.href.indexOf(regionShopRedirect) == -1 ){
            window.location.href = regionShopRedirect;
        }
        else{
            prepareForCart(response, data, product_id, $this);
            $('.loading-cart').fadeOut();
        }

        // If adding 11 and 10 is already present, then remove 10
        if(product_id == 11 && $('li[data-check=10]').length > 0){
            $('li[data-check=10]').find('.remove').trigger( "click" );

            Lang.message(['success.success', 'Adsfree Courses is included in Adsfree Site so it was removed from your cart']);
        }

    }, function (error) {
        $('.loading-cart').fadeOut();

        if(error.status === 401) {
            window.location.href = absolute_url + '/login';
        } else {
            Lang.message(['errors.error', 'errors.general_error']);
        }
    });
});
///////////

// CART HELPERS

/**
 * get the int value
 *
 * @param {int} n the number
 *
 */

function getIntValue(n) {
    return numberWithCommas(( n % 1 === 0 ) ? parseInt(n) : n);
}


/**
 * add commas to numbers
 *
 * @param {int} x the number
 *
 */

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * Get the amount of products * quantities
 *
 * @param order (JSON) response from add to cart AJAX
 *
 */

function getCartAmount(order){
    var amount = 0;

    for(var x in order){
        amount += parseInt(order[x].amount);
    }

    return amount;
}


/**
 * Update the sale prices
 *
 * @param {JSON} order response from AJAX
 *
 */

function updateSalePrices(order) {
    var savings = 0;

    for(var x in order){
        var amount = order[x].amount,
            itemId = order[x]['id'],
            discPrice = order[x]['disc_price'],
            origPrice = order[x]['price'];

        var discountTotal = (parseFloat(discPrice) * parseFloat(amount)).toFixed(2),
            origTotal = (parseFloat(origPrice) * parseFloat(amount)).toFixed(2);

        var priceClass = ($('.item-details-price').length > 0) ? '.item-details-price' : '.item-price';

        // If item has a discount
        if(order[x]['disc_price'] !== null){
            savings = (parseFloat(savings) + (parseFloat(origTotal) - parseFloat(discountTotal))).toFixed(2); // Append to savings
            $('#product-id-'+itemId).find('.amount').text(getIntValue(origTotal)).parents(priceClass).find('.price').text('€'+getIntValue(discountTotal)).show();
            $('#product-id-'+itemId).find('.no-sale').removeClass('no-sale');
            $('.no-show').show();
        }
        else {
            $('#product-id-'+itemId).find(priceClass).addClass('no-sale').find('.price').hide();
        }
    }

    $('.savings-total').text(getIntValue(savings));
}

// IF CHANGED CHECK BOTH CART / CHECKOUT AS THIS IS used in both
var totalStripe = $('.final-price').text();
function updatePrices (response) {

    // If there is a sale/voucher in use
    if(response['sale_status']['sale_status'] == 'success' || response['voucher_status']['voucher_status'] == 'success'){

        // Update the sale prices
        updateSalePrices(response.order['orders_products']);

        // Show the discount amount
        $('.discount-amount').fadeIn();
    }
    else{
        var order = response.order['orders_products'];
        for(var x in order){

            var amount = order[x].amount,
                itemId = order[x]['id'],
                origPrice = order[x]['price'],
                origTotal = (parseFloat(origPrice) * parseFloat(amount)).toFixed(2);

            $('#product-id-'+itemId).find('.amount').text(getIntValue(origTotal)).next().hide().parent().addClass('no-sale');
        }

        $('.total-holder .no-show').hide();
        $('.savings-total').text("0.00");
    }

    var subtotal = parseFloat(response.order.amount),
        shipping = parseFloat(response.order.shipping.price),
        totalAmount = response.order.total,
        discount = parseFloat(subtotal - totalAmount).toFixed(2);

    $('.subtotal-price .element-price').text(getIntValue(subtotal));
    $('.coupon-price .coupon-discount').text(getIntValue(discount));

    // Update the in cart number
    $('.update-order-amount').text(getCartAmount(response.order.orders_products));

    arrayLength = getCartAmount(response.order.orders_products);

    // Check to see if you are on the checkout page
    if($('#cart-page').hasClass('checkout-process')) {
        if(discount > 0) {
            // Calculate TotalPrice
            totalAmount = parseFloat(shipping + subtotal - discount).toFixed(2);
            reloadFKdybekqj(totalAmount);
        } else {
            // Calculate TotalPrice
            totalAmount = parseFloat(shipping + subtotal).toFixed(2);
            reloadFKdybekqj(totalAmount);
        }
        $('.shipping-holder .selected-shipping').text(getIntValue(shipping));

    } else {
        if(discount > 0) {
            // Calculate TotalPrice
            totalAmount = parseFloat(subtotal - discount).toFixed(2);
            if (typeof reloadFKdybekqj === "function") {
                reloadFKdybekqj(totalAmount);
            }
        }
    }

    if(totalAmount < 0) {
        totalAmount = 0;
        if (typeof reloadFKdybekqj === "function") {
            reloadFKdybekqj(totalAmount);
        }
    }

    $('.total-price .final-price').text(numberWithCommas(totalAmount));
    if (typeof reloadFKdybekqj === "function") {
        reloadFKdybekqj(totalAmount);
    }

    totalStripe = totalAmount;
}
///////////////////////////

// REQUIRED FOR CART AND CHECKOUT
/**
 * CHECKOUT PROGRESS
 */

$('.back-to-top').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 400 , 'swing');
});


// REQUIRED ON EVERY PAGE
// Removing items from the dropdown cart
$('.orders-popup-inner .remove').click(function (e) {
    e.preventDefault();
    var cartLink = $('header .cart .number');
    var cartItems = Number($(cartLink).text());
    var orderID = $(this).attr('data-id');

    $('.loading-cart').fadeIn();
    $.ajax({
        type: 'GET',
        url: '/shop/remove-from-cart/' + orderID,
        success: function (response) {
            $('.loading-cart').fadeOut();
            $('#product-id-' + orderID).remove();

            if(cartItems == 1) {
                $(cartLink).text(0);
            } else {
                $(cartLink).text(cartItems - 1);
            }

            if($('.order-popup-sale').length > 0){
                $('.order-popup-total .subtotal-amount').text('€'+getIntValue(parseFloat(response.order.amount).toFixed(2)));
                $('.order-popup-total .discount-amount').text('€'+getIntValue((parseFloat(response.order.amount) - parseFloat(response.order.total)).toFixed(2)));
                $('.order-popup-total .total-amount').text('€'+getIntValue(parseFloat(response.order.total).toFixed(2)));
            }
            else{
                $('.order-popup-total .total-amount').text('€'+getIntValue(parseFloat(response.order.amount).toFixed(2)));
            }
        },
        error: function (error) {
            Lang.message(['errors.error','errors.removed']);
            $('.loading-cart').fadeOut();
        }
    });
});

/**
 * Click Events
 */
function clickEvents() {

    // Toggle Signed up products in header
    $('.link .trigger').click(function () {
        $(this).siblings('.dropdown-lang').fadeToggle();
    });

    // Toggle Signed up products in header
    $('.lang .trigger').click(function () {
        if (!$(this).hasClass('open')) {
            $(this).toggleClass('open');
            $('.dropdown-lang').slideDown();
            $('.wide-dd-container, .notifications-menu, .profile-menu, .orders-popup').slideUp();
            $('.open-menu.active').removeClass('active');
        }else {
            $(this).toggleClass('open');
            $('.dropdown-lang').slideUp();
        }
    });

    // Check if new course notification element is present to engage timer only in the right place
    if($('.new_course_notification').length){

        // Check if timestamp saved
        var timestamp = localStorage.getItem('timestamp');
        // if timestamp retrieved from local storage is not set
        if(timestamp==null){
            if($('.course-landing-wrapper').length){    // if we are on course landing page
                console.log('we are on course landing type page');
                setTimeout(function(){
                    // Display popup after 1 seconds
                    console.log('engaging 1 seconds delay');
                    $('.new_course_notification').css('display','block');
                },1000);
            }else{
                console.log('we are on player page');
                setTimeout(function(){
                    // Display popup after 8 seconds
                    console.log('engaging 8 seconds delay');
                    $('.new_course_notification').css('display','block');
                },8000);
            }
        }else{
            // if timestamp is set compare now - 30 minutes and the timestamp
            var now = new Date, lastTimestamp = new Date(timestamp);
            now.setMinutes(now.getMinutes()-30);

            if(now > lastTimestamp){
                // the timestamp is older than 30 minutes
                if($('.course-landing-wrapper').length){    // if we are on course landing page
                    setTimeout(function(){
                        // Display popup after 1 seconds
                        $('.new_course_notification').css('display','block');
                    },1000);
                }else{
                    setTimeout(function(){
                        // Display popup after 8 seconds
                        $('.new_course_notification').css('display','block');
                    },8000);
                }
            }
        }
    }

    //Used on the Course Landing page to remove the notification of a new course
    $('.new_course_notification .icon-cross').click(function (event) {
        event.preventDefault();
        $('.new_course_notification').addClass('hidden');

        // Save a new timestamp in string format
        var date = new Date();
        var timestamp_saved = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
        localStorage.setItem('timestamp',timestamp_saved);
    });
}

/**
 * Hover Events
 */
function hoverEvents() {
    // Toggle lang dropdown
    $('.dropdown-lang').on('mouseleave', function () {
        $('.lang .trigger').removeClass('open');
        $('.dropdown-lang').slideUp();
    });
}

/**
 * Star Rating
 * Add class fill to stars based on data attribute from parent
 */
function starRating() {
    var stars = $('.stars'); // Parent
    var starsChildren = $(stars).toArray();

    //Fill star
    $.fn.starFill = function () {
        $(this).removeClass('icon-star');
        $(this).addClass('icon-filled-star')
    };

    //Fill star line area
    $.fn.starLine = function (){
        $(this).parent().find('.line').html($(this).attr('data-line'));
    };

    //Unfill star
    $.fn.starUnfill = function () {
        $(this).removeClass('icon-filled-star');
        $(this).addClass('icon-star')
        $(this).parent().find('.line').html('');
    };

    //Star set
    $.fn.starsSet = function(nb){
        var children = $(this).children('span');
        var count = 0;
        $(children).each(function () {
            if(count < nb ){
                $(this).starFill();
            }
            count++;
        });
    };

    $(starsChildren).each(function () {
        var children = $(this).children('span');
        var starNumber = $(this).attr('data-fill');
        $(children).slice(0, starNumber).starFill();
    });

    //On hover
    $('.rating').each(function(){
        var children = $(this).children('span');
        $(children).hover(function () {
            $(this).starFill();
            $(this).starLine();
            var after = false;
            var count = 1;
            $(children).each(function(){
                if ($(this).hasClass('icon-filled-star')){
                    after = true;
                }
                if(!after){
                    count++;
                    $(this).starFill();
                }
            });
            $(this).parent().attr('data-fill', count);
        });


        //On Mouse out
        $(children).on('mouseout', function () {
            $(children).starUnfill();
        });

        //Click save
        $(children).click(function(){
            var star = $(this);
            var widget = $(star).parent();
            var id = $(widget).attr('data-id');
            var path = $(widget).attr('data-path');
            var nb = $(widget).attr('data-fill');
            $('.loading').fadeIn();
            $.ajax({
                url: '/' + path + '/'+ id +'/rating',
                type: 'post',
                data: {
                    rating : $(this).parent().attr('data-fill')
                },
                success: function (data) {
                    $('.loading').fadeOut();
                    if (!data.status || data.status != 'success') {
                        return;
                    }
                    $(star).starLine();
                    $(widget).starsSet(nb);
                    $(widget).children().off();
                    $(widget).children().css('cursor','default');
                    Lang.message(['success.success',data.message]);
                },
                error: function (error) {
                    $('.loading').fadeOut();
                }
            });
        });
    });
}

// Support div toggle
$('.toggle-button').click(function () {
    $('#support').toggleClass('open');
});

//iPad scaling bug
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewport.content = 'width=device-width, minimum-scale=1.0, maximum-scale=2.0';
        }, false);
    }
}

/**
 * Tabs functionality. Open and closing Tabs.
 */
function openTab() {

    $('.tab-title').on('click', function (e) {

        if($(this).attr('data-url')){
            return;
        }

        e.preventDefault();
        e.stopImmediatePropagation();

        if (!$(this).hasClass('active')) {
            var attrName = $(this).attr('data-name');
            var elemName = $.find('#' + attrName);

            if (attrName === 'login' || attrName === 'signup' || attrName === 'forgotpassword') {
                if (!($(this).hasClass('active'))) {
                    $(this).insertBefore($(this).prev());
                }
                if (attrName === 'login') {
                    $('#welcome').show();
                    $('#join-us').hide();
                    $('.tab-title').removeClass('active');
                    $('.inner-modal').hasClass('forgot') && $('.inner-modal').removeClass('forgot');
                } else if (attrName === 'signup') {
                    $('#welcome').hide();
                    $('#join-us').show();
                    $('.tab-title').removeClass('active');
                    $('.inner-modal').hasClass('forgot') && $('.inner-modal').removeClass('forgot');
                } else {
                    $('.inner-modal').addClass('forgot');
                    $('.tab-title').removeClass('active');
                }
            }

            $(this).siblings('.tab-title').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').find(elemName).siblings().removeClass('active').hide();
            $('.tab-content').find(elemName).fadeIn('fast').addClass('active');
        }
    });

    var errors = $.find('.error-message');
    if(errors.length){
        var tab = $(errors).first().closest('.tab');
        $(tab).parent().children().removeClass('active');
        $(tab).addClass('active');
    }
}

/**
 * Switch between login and register
 */
$('.login-modal .switch-tab').click(function(e){
    e.preventDefault();

    if(!$(this).hasClass('login-account')){
        $('#login.tab').removeClass('active').hide().next().addClass('active').show();
    }
    else{
        $('#signup.tab').removeClass('active').hide().prev().addClass('active').show();
    }

    $('.login-modal').toggleClass('register');
});

/**
 * Show modal and switch tab if error
 */
if($('.login-modal').length > 0){
    if( $('.inner-modal #login .error-message').length > 0 ){
        $('.login-modal').fadeIn(function () {
            $('.inner-modal').fadeIn();
        })
    }
    else if($('.inner-modal #signup .error-message').length > 0 ){

        $('#signup').addClass('active').show().prev().removeClass('active').hide();

        $('.login-modal').fadeIn(function () {
            $('.inner-modal').fadeIn();
        });

        $('.login-modal').toggleClass('register');
    }
}

/**
 * Fade In Modal After x amount of time
 */
if(typeof localStorage !== "undefined" && $('.modal-outer').length > 0){

    if(!localStorage.getItem('modalClosed')) {
        setTimeout(function () {
            if(!$('.login-modal').parent().hasClass('no-fade')){
                $('.login-modal').fadeIn(function () {
                    $('.inner-modal').fadeIn();
                });
            }
        }, 30000);
    }

    $('.close-modal').click(function(){
        $('.login-modal').fadeOut();
        if(!$('.login-modal').parent().hasClass('no-fade')) {
            localStorage.setItem('modalClosed', 'true');
        }
    });
    $('.modal-outer .login-modal').click(function(e){
        var empty = true;
        $('.modal-outer .form-control').each(function(){
            if($(this).val() !== ''){
                empty = false;
            }
        });
        if(e.target.className === 'login-modal' && empty === true){
            $('.login-modal').fadeOut();
            if(!$('.login-modal').parent().hasClass('no-fade')) {
                localStorage.setItem('modalClosed', 'true');
            }
        }
    });
}

$('.cart-modal .close-modal').click(function(){
    $('.cart-modal').fadeOut();
});

$('.cart-modal').click(function(e){
    if($(e.target).hasClass('cart-modal')){
        $(this).fadeOut();
    }
});

$('.btn-cert-popup').click(function(e){
    e.preventDefault();

    var load = ($(this).attr('data-load') === 'attestation') ? '?load=attestation' : '';

    $('.loading').fadeIn();

    loadCerts(load, function(){
        $('.cart-product-info-inner > ul > li').each(function(){
            if($(this).attr('data-check') === '1' || $(this).attr('data-check') === '32'){

                var id = $(this).find('.product-name').attr('data-course'),
                    parent = $('.shop-certificate-title[data-id='+id+']').parent();

                parent.find('.avail-products li:first-child .add-to-cart').attr('disabled', 'disabled');
            }
        });
    });


});

function loadCerts(load, callback){
    $.ajax({
        url: '/available-certificates'+load,
        type: 'GET',
        success: function (data) {
            $('.loading').fadeOut();

            if(load === '?load=attestation'){
                $('.btn-cert-popup[data-load=attestation]').slideUp();
                $('.shop-attestation  ul').replaceWith(data);
            }
            else{
                $('.btn-cert-popup[data-load=courses]').slideUp();
                $('.shop-certificates ul.not-highlighted').replaceWith(data);
            }

            setTimeout(function(){
                $('.match-height').matchHeight();
            }, 300)

            callback();
        }
    });
}


/**
 * Homepage banner background
 */
function homepageBannerBg() {
    $('.card-title').click(function () {
        var type = $(this).attr('data-name');

        $('.banner').removeAttr('id').attr('id', type + '-banner');
    });
}

/**
 * Smooth scroll
 */
function smoothScroll() {
    $('a[href*="#"]:not([href="#"], .cancel-scroll)').click(function (e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 90
                }, 475 , 'swing');
                $('html, body').animate({
                    scrollTop: target.offset().top - 90
                }, 475, 'swing');
                return false;
            }
        }
    });
}


//extension to know when scroll ends
$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
};


/**
 * Check whether element is within the viewport.
 */
var sections = {};

$(window).load(function(){
    getPositions();
});

function getPositions(){
    var l = $('.viewport').length;

    sections = {};

    for(var x=0;x<l;x++){
        var curSection = $('.viewport').eq(x);
        sections[curSection.offset().top] = curSection.attr('id');
    }
}

function check_if_in_view() {

    var windowW = $(window).width();

    for (var key in sections) {

        if (!sections.hasOwnProperty(key)){ continue; }

        if($(window).scrollTop() < ( ( parseInt(key) + $('#'+sections[key]).height() ) - 350 ) && $(window).scrollTop() > ( parseInt(key) - 350 ) ){
            if($('.hp-nav.active a').attr('href') !== '#'+sections[key]){
                $('.in-view').removeClass('in-view');
                $('#'+sections[key]).addClass('in-view');
                if(sections[key] === 'hp-separator'){
                    $('#'+sections[key]).addClass('animate');
                }
                $('.hp-nav.active').removeClass('active');
                $('a[href="#'+sections[key]+'"]').parent().addClass('active');

                if(windowW <= 1020) {
                    $('#'+sections[key]).addClass('mob');
                } else {
                    $('#'+sections[key]).removeClass('mob');
                }
            }
        }
    }
}


/**
 * Sharing initialisation
 */

function sharing() {
    var popupSize = {
        width: 780,
        height: 550
    };

    $(document).on('click', '.social-buttons > a', function (e) {

        var verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
            horizontalPos = Math.floor(($(window).height() - popupSize.height) / 2);

        var popup = window.open($(this).prop('href'), 'social',
            'width=' + popupSize.width + ',height=' + popupSize.height +
            ',left=' + verticalPos + ',top=' + horizontalPos +
            ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

        if (popup) {
            popup.focus();
            e.preventDefault();
        }

    });
}

/**
 * Favorite course event
 */
function favorite(type){

    $(document).on('click', '.favorite-'+type, function(e){

        e.preventDefault();
        var element = this;
        $('.loading').fadeIn();
        $.ajax({
            url: '/user/'+type+'/favorite/' + $(element).attr('data-id'),
            type: 'GET',
            success: function (data) {
                $('.loading').fadeOut();
                Lang.message(['success.success', data.message]);
                if(data.attached){
                    $(element).addClass('favorite');
                }else{
                    $(element).removeClass('favorite');
                }
            },
            error: function (data) {
                $('.loading').fadeOut();
                Lang.message(['errors.error', data.message]);
            }
        });
    });
}

/**
 * Action in relation with modals
 */
function modal(){

    //Open a modal
    $('button[data-type="modal"]').click(function(){
        var modalId = $('#'+$(this).attr('data-id'));
        $(modalId).find('.errors').hide();
        $(modalId).find('textarea,[type=text]').val('');
        $(modalId).find('.modal-content').show();
        $(modalId).show();
    });

    //Close the modal
    $('.close').click(function(){
        var parent = $(this).parent().parent().parent();
        //We need to check if the dialog has a header or not
        if($(parent).hasClass('modal')){
            $(parent).closeModal();
            return;
        }
        parent = $(parent).parent();
        if($(parent).hasClass('modal')){
            $(parent).closeModal();
            return;
        }
    });

    //Click outside the modal
    $(window).click(function(event){
        if ($(event.target).hasClass('modal')) {
            if($(event.target).hasClass('modal-no-close-on-click-out')){
                return;
            }
            $(event.target).closeModal();
        }
    });


    //Function to close the modal in a nice way
    $.fn.closeModal = function(){
        $(this).find('.modal-content').slideUp(function(){
            $(this).parent().fadeOut('fast');
        });
    };

}

/**
 * Everything in relation with congrats modal
 */
function congratulations() {

    if (!$('#congratulations').length) {
        return;
    }

    $('#congratulations form').submit(function (e) {
        var form = $(this);
        $('.loading').fadeIn();
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serializeArray(),
            success: function (data) {
                $('.loading').fadeOut();
                if(!data.status || data.status != 'success'){
                    return;
                }
                Lang.message(['success.success', data.message]);
                $(form).find("input,textarea").prop("disabled", true);
                $('.errors').hide();
                $(form).find(".btn").slideUp(function(){
                    $(form).find(".footer").slideUp();
                });
            },
            error: function (data) {
                $('.loading').fadeOut();
                $(form).validate(data.responseJSON);
            }
        });

        //STOP default action
        e.preventDefault();
    });
}

function scrollToDownloads(urlVar) {
    var url = (typeof urlVar !== 'undefined') ? urlVar : window.location.hash.split('#')[1];

    if(typeof url !== 'undefined' ) {
        if( url === 'download_history' || url === 'my_courses'|| url === 'my_favorites_courses'){
            var el = $('.tab-title[data-name="'+url+'"]');

            el.find('a').trigger("click");

            $('html, body').animate({
                scrollTop: el.offset().top - 120
            }, 500);
        }
    }
}

$('a[href=#my_favorites_courses]').click(function(e){
    e.preventDefault();
    scrollToDownloads('my_favorites_courses');
});

$('.filter-outer span').click(function(e){
    $(this).parent().toggleClass('active').find('.filters-holder').fadeToggle();
});

// Start with making fields hidden
$('#publisher-organisation_name').css('display', 'none');
$('#publisher-other_categories').css('display', 'none');
$('#publisher-other_format').css('display', 'none');
$('#publisher-publisher_experience_data').css('display', 'none');
// Make them non mandatory too if they are hidden
$('#publisher-organisation_name').prop('required',false);
$('#publisher-other_categories').prop('required',false);
$('#publisher-other_format').prop('required',false);
$('#publisher-publisher_experience_data').prop('required',false);

// Perform on change function on #individual_or_organisation select
$('#individual_or_organisation').change(function(){
    if($(this).val() == 'Organisation'){
        $('#publisher-organisation_name').css('display', 'block');
        $('#publisher-organisation_name').prop('required',true);
    }else{
        $('#publisher-organisation_name').css('display', 'none');
        $('#publisher-organisation_name').prop('required',false);
    }
});

// Perform on change function on #chbx_other_category checkbox
$('#chbx_other_categories:checkbox').change(function () {
    if (this.checked){
        $('#publisher-other_categories').css('display', 'block');
        $('#publisher-other_categories').prop('required',true);
    }else{
        $('#publisher-other_categories').css('display', 'none');
        $('#publisher-other_categories').prop('required',false);
    }
});

// Perform on change function on #publisher_experience select
$('#publisher_experience').change(function(){
    if($(this).val() == 'Yes'){
        $('#publisher-publisher_experience_data').css('display', 'block');
        $('#publisher-publisher_experience_data').prop('required',true);
    }else{
        $('#publisher-publisher_experience_data').css('display', 'none');
        $('#publisher-publisher_experience_data').prop('required',false);
    }
});

// Perform on change function on #chbx_other_format checkbox
$('#chbx_other_format:checkbox').change(function () {
    if (this.checked){
        $('#publisher-other_format').css('display', 'block');
        $('#publisher-other_format').prop('required',true);
    }else{
        $('#publisher-other_format').css('display', 'none');
        $('#publisher-other_format').prop('required',false);
    }
});


// Empower us share popup display
$('.share-popup').click(function(e){
    e.preventDefault();
    $('.share-overlay').fadeIn();
});

// Empower us share popup close
$('.share-overlay, .share-overlay-inner .close').click(function(e){
    var target = $(this).hasClass('share-overlay') && $(e.target).hasClass('share-overlay') ?
        $(this) : $(this).parents('.share-overlay');

    target.fadeOut();
});


// PUSH NOTIFICATION
$(document).ready(function(){
    if($('header').hasClass('loggedin') && $('.header-simple').length === 0){
        checkNotification();
        var notification = setInterval(function() {
            checkNotification();
        }, 300000);

        // Check notification number
        var endpoint = $('.update-notification-amount').attr('data-endpoint');

        if(typeof endpoint === 'undefined' || endpoint === 'undefined'){
            endpoint = location.href;
        }

        $.ajax({
            url: endpoint+'/notification/count',
            type: 'get',
            success: function (data) {
                if(data.status && data.status === 200){
                    $('.update-notification-amount').text(data.result.delivered_count);
                }
            },
            error: function (data) {
            }
        });
    }
});

function checkNotification(){
    var endpoint = $('.push-notification').attr('data-endpoint');

    if(typeof endpoint === 'undefined' || endpoint === 'undefined'){
        endpoint = location.href;
    }

    $.ajax({
        url: 'http://alison.com'+'/notification/check/'+sessionId,
        type: 'get',
        success: function (data) {
            if(data.result !== false){
                $('.push-notification').slideDown();
            }
        },
        error: function (data) {
        }
    });
}

$('.push-notification .close').click(function(){
    $(this).parents('.push-notification').slideUp();
});

// Lang Menu alignment fix when user logged in
// The Resume Study button makes the menu wider and therefore lang menu is offset
if ( $ ( '.resume-link' ) [0] ){ // if the class exists in DOM
    $ ( '.dropdown-lang' ).addClass( 'user-logged-in' );
    if ( $ ( '.resume-link + .search' ) [0] ) { // if class exists in DOM
        $ ( '.dropdown-lang' ).addClass( 'search-present' );
    }
}

/////// Generic Reusable Modal
// Generic Reusable Modal triggered by a link - wrap in parent container to allow for custom page specific styles
$('.generic-popup').click(function(e){
    e.preventDefault();
    $('.generic-popup-overlay').fadeIn();
});

// Generic Reusable Modal close
$('.generic-popup-overlay, .generic-popup-overlay-inner .close').click(function(e){
    var target = $(this).hasClass('generic-popup-overlay') && $(e.target).hasClass('generic-popup-overlay') ?
        $(this) : $(this).parents('.generic-popup-overlay');
    target.fadeOut();
});

// Generic Reusable Modal triggered by page load - wrap in parent container to allow for custom page specific styles
$(window).load(function(){
    $('.generic-popup-overlay-autoload').fadeIn();
});

// Generic Reusable Modal close
$('.generic-popup-overlay-autoload, .generic-popup-overlay-inner-autoload .close, .generic-popup-overlay-autoload input.btn.btn-blue.pull-right').click(function(e){
    var target = $(this).hasClass('generic-popup-overlay-autoload') && $(e.target).hasClass('generic-popup-overlay-autoload') ?
        $(this) : $(this).parents('.generic-popup-overlay-autoload');
    target.fadeOut();
});
///////

// New Header Js
$(document).ready(function(){
    //Click event to scroll to top
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.open-menu').click(function(e){
        e.preventDefault();

        var toOpen = $(this).attr('data-open');

        $('.dd-menu').slideUp();

        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $('.'+toOpen).slideUp().removeClass('open');
        }
        else{
            $('.open-menu.active').removeClass('active');
            $(this).addClass('active');
            $('.'+toOpen).slideDown().addClass('open');
        }
    });

    var hoverTimeout;
    $('.wide-dd-container, .profile-menu, .notifications-menu, .orders-popup').hover(function() {
        clearTimeout(hoverTimeout);
        $(this).addClass('hovered');
    }, function() {
        var $self = $(this);
        hoverTimeout = setTimeout(function() {
            $self.slideUp();
            $('.quick-menu-container li .active').removeClass('active');
            $self.removeClass('open');
        }, 500);
    });

    $(window).scroll(function () {
        // On Mobile hide second row of icons on scroll
        if($(window).width() < 800){
            $('.notifications-menu').hide();
            if($(window).scrollTop() === 0){
                $('.slide-on-scroll').slideDown(function(){
                    $('header').removeClass('scrolling');
                    $('.hide-on-scroll').fadeIn();
                });
                $('.top-links').fadeIn();
            }
            else{
                $('.hide-on-scroll').fadeOut(function(){
                    $('header').addClass('scrolling');
                    $('.slide-on-scroll').slideUp();

                });
                $('.top-links').slideUp();
            }
        }
    });
});

// Remove ad
if($('.sticky-ad:not(.inner-page-sticky-ad)').length > 0){
    if($(window).width() < 1151 || $(window).height() < 711){
        $('.sticky-ad').html(' ');
    }
    else if($('.testimonial-page-ad').length > 0 && $(window).width() < 1351){
        $('.sticky-ad').html(' ');
    }
    else{
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

// Remove ad on inner pages
if($('.inner-page-sticky-ad').length > 0){
    if(window.innerWidth < 1570 || window.innerWidth < 711){
        $('.inner-page-sticky-ad').html(' ');
    }
}

if($('.sticky-left').length > 0){
    if(window.innerWidth > 1570 || window.innerWidth < 1100){
        $('.sticky-left').html(' ');
    }
}

/*
 * Sticky ads
 *
 */

function stickyAd(){
    var adTop = $('.sticky-ad').offset().top,
        scroll = 0;

    $(window).scroll($.throttle(0, function(){
        var stickyAd = $('.sticky-ad'),
            headerHeight = $('header').height(),
            scrollTop = $(window).scrollTop(),
            sale = $('.sale.active'),
            footer = $('footer'),
            directionDown = scroll < scrollTop;

        scroll = scrollTop;

        // If scrolling below ad then set position to fixed
        if(directionDown){
            if( scrollTop + ( sale.length > 0 ? sale.height() : 0 + headerHeight ) >= stickyAd.position().top ){
                stickyAd.css({ 'position':'fixed', 'top' :  sale.length > 0 ? 165 : 125 });
            }
            // If scrolling to footer stop the add just before the footer
            if( ( ( scrollTop + stickyAd.position().top + stickyAd.height() ) >= ( footer.offset().top - 150 ) )){
                stickyAd.css({'top': ( footer.position().top - 200 - stickyAd.height() ) ,'position':'absolute'});
            }
        }
        else{
            if(scrollTop < stickyAd.offset().top){
                stickyAd.css({ 'position':'fixed', 'top' :  sale.length > 0 ? 165 : 125 });
            }

            // If screen is scrolled to the top set ad position to absolute
            if(adTop >= ( scrollTop + ( headerHeight + sale.length > 0 ? sale.height() : 0 ) ) ){
                stickyAd.attr('style','').css({ 'position':'absolute'});
            }
        }
    }));
}

if($('.search-results-container').length > 0){
    var search = new Search({ads:false});

    Lang.get('routes.learning-paths.index', 'learning_path_index', 'learning-path');
    Lang.get('routes.courses.index', 'courses_index', 'courses');

    /*
    * Scroll Detection for lazyload / sticky ad / sticky filters
    */
    var adTop = $('.sticky-ad').lengh?$('.sticky-ad').offset().top: " ",
        filter = $('.search-filters'),
        sale = $('.sale.active'),
        more = sale.length > 0 ? 150 + sale.height() : 100,
        container = $('.search-items'),
        stickyAd = $('.sticky-ad'),
        footer = $('footer'),
        headerHeight = $('header').height(),
        scroll = 0,
        scrollDirection = 0;

    // Readjusting values on window resize
    $(window).resize(function () {
        headerHeight = $('header').height();
    });

    $(window).scroll($.throttle(100, function () {
        var offset = container.offset().top,
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            height = container.height(),
            fireRequest = ( scrollTop + windowHeight ) >= ( ( offset + height ) - 600 ),
            directionDown = scroll < scrollTop;

        scroll = scrollTop;

        // If scrolling below ad then set position to fixed
        if (directionDown) {
            if (scrollTop + ( sale.length > 0 ? sale.height() : 0 + headerHeight ) >= stickyAd.position().top) {
                stickyAd.css({'position': 'fixed', 'top': sale.length > 0 ? 165 : 125});
            }
            // If scrolling to footer stop the add just before the footer
            if (( ( scrollTop + stickyAd.position().top + stickyAd.height() ) >= ( footer.offset().top - 150 ) )) {
                stickyAd.css({
                    'top': ( footer.position().top - ( sale.length > 0 ? 200 : 170 ) - stickyAd.height() ),
                    'position': 'absolute'
                });
            }
        }
        else {
            if (scrollTop < ( stickyAd.offset().top - 120)) {
                stickyAd.css({'position': 'fixed', 'top': sale.length > 0 ? 165 : 125});
            }

            // If screen is scrolled to the top set ad position to absolute
            if (adTop >= ( scrollTop + ( headerHeight + sale.length > 0 ? sale.height() : 0 ) )) {
                stickyAd.attr('style', '').css({'position': 'absolute'});
            }
        }
    }));
}

// CHECKOUT FAQS
$(document).ready(function(){
    $('.faq-title').click(function(){
        $(this).toggleClass('open').next().slideToggle();
    })
});

// DOUBLECLICK FOR PUBLISHERS LAZY LOAD
function getAdData(){
    var adData = [];

    if ($('.dfp').length){
        // Fetch all containers with .dfp class
        $('.dfp').each(function(index){

            // push an object with adOffset and isLoaded properties to an array
            adData.push({adOffset: ($(this).offset().top), isLoaded: false});
        });
    }
    console.log(adData);
    return adData;
}

function lazyLoadAds(adData){
    var viewportHeight = $(window).height();

    $(window).scroll($.throttle(500, function(){
        if ($('.dfp').length){  
            $('.dfp').each(function(index){

                /*
                * to calculate trigger point for each ad we take ad offset from the top and subtract viewport height from it
                * along with predefined 45 pixels advance before the ad appears on screen to trigger the ad reload function; 
                * that value is compared to scroll position and when scroll position is greater or equal and the ad had not been
                * triggered before, ad reloads
                */

                var debug = false; // set this to false on production
                
                if(index !== 0){
                    var calculatedOffset = (adData[index].adOffset - viewportHeight - 90),
                        scrollPosition = $(window).scrollTop();

                        (debug) ? console.log('scroll: ' + scrollPosition + ', offset: ' + calculatedOffset) : '';

                    if(scrollPosition >= calculatedOffset && !adData[index].isLoaded){

                        console.log(gptAdSlots[index]);
                        
                        // Refresh current ad
                        googletag.cmd.push(function() {
                            googletag.pubads().refresh([gptAdSlots[index]]);
                        });

                        (debug) ? console.log('*ad refreshed') : '';

                        // This is set to avoid triggering refresh on every scroll event
                        adData[index].isLoaded = true;

                        (debug) ? console.log('*ad loaded set to true') : '';

                        // Unbind scroll event when last ad lazy load is triggered
                        if(index === ($('.dfp').length -1)){

                            (debug) ? console.log('*last ad fetched') : '';

                            // But when sticky ad is present, don't because it will also unbind sticky ad scroll event and it won't scroll
                            if($('.sticky-ad').length == 0){
                                $(window).unbind('scroll');

                                (debug) ? console.log('*scroll event removed') : '';
                            }
                        }
                    }
                }
            });
        }
    }))
    // console.log('=============================================');
}

// Check if window has opener and then send message to reload
if(window.opener){
    window.opener.postMessage('close', '*');
}

// This is for GDPR Boxed on register
// Open social logins in new windows
$('#login-container-element .icon-group a').click(function(e){
    e.preventDefault();

    var signup = $('#signup:visible').length > 0,
        link = $(this).attr('href');

    // Remove click added
    $('#social-form input[type=submit]').unbind('click');

    // If already has active class then remove it and show the email sign up form
    if($(this).hasClass('active') && signup){

        $(this).removeClass('active');

        // Hide and show appropriate
        $('.slide-on-social').slideDown(function(){
            $('.hide-on-social').show();
            $('.social-signup').hide();
        });

        return;
    }

    if(signup){
        //Remove previous actives
        $('#signup .icon-group > a.active').removeClass('active');

        // Add active to click icon
        $(this).addClass('active');

        // Hide and show appropriate
        $('.hide-on-social').hide();
        $('.social-signup').show();
        $('.slide-on-social').slideUp();

        // Change form submit url and
        $('#social-form input[type=submit]').click(function(e){
            e.preventDefault();

            var error = $('.s-t-error');

            // Check to see if T&Cs checked
            if ($('#signup_tc_social:checked').length > 0) {
                $('#signup_tc_social').removeClass('error');
                error.hide();

                loadSocialPopup(link + '?signup_emails=' + $('#signup_emails_social:checked').length);
            }
            else {
                $('#signup_tc_social').addClass('error');
                if (error.length > 0) {
                    error.show();
                }
                else {
                    $(' .social-signup .tc-check').after(   '<div class="errors terms-error s-t-error"><span class="icon-error"></span>' +
                                                                '<span class="error-message">Please agree to Terms &amp; Conditions to continue</span>' +
                                                            '</div>');
                }
            }
        });
    }
    else{
        loadSocialPopup(link);
    }
});

$('.signup-button').click(function(e){
    e.preventDefault();
    var error = $('.t-error');

    if($('#signup_tc:checked').length > 0){
        error.hide();
        $('#signup-form').submit();
    }
    else{
        if (error.length > 0) {
                error.show();
            }
        else {
                $(' #signup_tc + .tc-check').after( '<div class="errors terms-error t-error"><span class="icon-error"></span>' +
                                                        '<span class="error-message">Please agree to Terms &amp; Conditions to continue</span>' +
                                                    '</div>');
        }
    }
})

// If TC box is checked then check the other one
$('.tc-check').click(function(e){
    e.preventDefault();
    $('.tc-check').prev().prop('checked', !$(this).prev().is(':checked'))
});

// If Email box is checked then check the other one
$('.email-check').click(function(e){
    e.preventDefault();
    $('.email-check').prev().prop('checked', !$(this).prev().is(':checked'))
})

function loadSocialPopup(link) {
    // Open Popup window with social login
    var socialWindow = window.open(link,  '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

    // Add listener to check for messages
    window.addEventListener("message", receiveMessage, false);

    // If message is recieved, then close window
    function receiveMessage(event){
        if(event.data === 'close'){
            socialWindow.close(); // Close popup
            location.reload(); // Reload
        }
    }
}
//// END GDPR

// Add name attribute to captchas so they can be picked up by laravel
function initialiseCaptchas(captchas){
    if($('.g-recaptcha').length > 0){
        var form = $('.g-recaptcha').parents('form').attr('name').split('-')[0];

        // Use from name to initalise the captcha
        $('textarea[id="g-recaptcha-response"]').attr('name', form+'-g-recaptcha-response');
    }
}

//Monthly Premium FAQ
$(".question").click(function() {
    $(this).next(".answer").slideToggle();
});

// Close cert popup
$('.cert-modal .cert-modal-inner .icon-cross').click(function () {
    $('.cert-modal').fadeOut();
});


/**
 * HELPER CLASSES
 *
 * {@link loadScript} loadScript(url, callback) --- Load an external script and exectute the callback when it's loaded
 * --
 * {@link simpleRequest} simpleRequest(url, callback) --- Make a simple GET request and extecute callback after
 * --
 * {@link isLoggedIn} isLoggedIn() --- Check to see if the user is logged in. Will return true if they are
 * --
 * {@link numberWithCommas} numberWithCommas(x) --- Add a comma to thousands
 * --
 * {@link checkUserSubscription} checkUserSubscription(callback) --- Add a class to the body if the user subscribed - Add callback to recieve the subscription data
 * --
 * {@link getSubscriptionDate} getSubscriptionDate() --- Elements with get-subscription-date class will be popuplated with the date of renewal/finishing
 * --
 * {@link voucherHelper} voucherHelper()
 *  - VoucherHelper.getLabel(id) - get the label
 *  - VoucherHelper.getIcon(id) - get the Icon
 * --
 */

function VoucherHelper(){

    /**
     *  Find the label for the voucher
     *
     *  @param {string} id - Voucher type id
     *
     */

    this.getLabel = function (id) {
        switch (id) {
            case 1:
                return 'Digital Certificate';
            case 2:
                return 'Certificate';
            case 3:
                return 'Framed Certificate';
            case 4:
                return 'Diploma';
            case 5:
                return 'Framed Diploma';
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
                return 'T-Shirt';
            case 28:
                return 'Learning Path PDF';
            case 29:
                return 'Learning Path Certificate';
            case 30:
                return 'Learning Path Framed Certificate';
            case 31:
                return 'Attestation Letter';
            case 32:
                return 'Diploma PDF';
            default:
                return 'A Product';
        }
    };


    /**
     *  Find the icon for the voucher
     *
     *  @param {string} id  - Voucher type id
     *
     */

    this.getIcon = function (id) {
        if ([1, 28, 32].indexOf(id) > -1) {
            return 'icon-PDF-Filled';
        }
        else if ([2, 3, 4, 5, 29, 30].indexOf(id) > -1) {
            return 'icon-certificate';
        }
        else if ([20, 21, 22, 23, 24, 25, 26].indexOf(id) > -1) {
            return 'icon-tshirt';
        }
        else {
            return 'icon-cart';
        }
    };
}


/**
 *  Add a class to the body if the user subscribed - Add callback to recieve the subscription data
 *
 *  @param {function} callback
 *
 */

function checkUserSubscription(callback){
    if(typeof callback !== undefined){
        simpleRequest('/check-subscription-status', callback);
    }
    else{
        simpleRequest('/check-subscription-status');
    }

    // Add subscribed class to body
    document.body.className += 'user-subscribed';
}


/**
 *  Elements with get-subscription-date class will be popuplated with the date of renewal/finishing
 *
 */

function getSubscriptionDate(){
    checkUserSubscription(function(response){
        response = JSON.parse(response);

        var date = new Date(response.subscription.valid_until),
            validUntil = date.getDate()+'/'+(date.getMonth() + 1)+'/'+date.getFullYear(),
            el = document.querySelector('.get-subscription-date');

        if(el !== null){
            document.querySelector('.get-subscription-date').innerHTML = validUntil;
        }
        else{
            console.error('No "get-subscription-date" classes found');
        }
    });
}


/**
 * Load given script into head and onLoad call callback
 *
 */

function loadScript(url, callback) {

    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0],
        script = document.createElement('script'),
        responses = {
            'script' : url,
            'loaded' : true
        };

    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = function(){callback(responses)};
    script.onload = function(){callback(responses)};


    // Fire the loading
    head.appendChild(script);
}

/**
 * Load given script into head and onLoad call callback
 *
 * @param {string} url - url to target
 * @param {function} success - what to do on sucess
 * @param {function} failure - what to do on failure
 *
 */

function simpleRequest(url, success, failure){
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState === 4){
            if(xmlHttp.status === 200){
                // console.log(xmlHttp.responseText);
                if(typeof success !== 'undefined') {
                    success(xmlHttp.responseText);
                }
            }
            else{
                if(typeof failure !== 'undefined'){
                    failure(xmlHttp.responseText);
                }
            }
            $('.loading').fadeOut();
        }
    };

    xmlHttp.open("GET", url, true);
    xmlHttp.setRequestHeader('Authorization', 'Cookie '+sessionId);
    xmlHttp.send();
}

// Check if user is logged in
function isLoggedIn(){
    var header = document.querySelector('header');
    if(header !== null){
        return document.querySelector('header').className.indexOf(' loggedin') > -1;
    }
    else{
        return false;
    }

}

/**
 * Create a new course object
 *
 */

function Course(){

    // Translations for search and my listing
    Lang.get('routes.courses.resume', 'resume', '/resume/courses');
    Lang.get('routes.course.index', 'coursesIndex', 'course/');
    Lang.get('common.continue_learning', 'continueLearning', 'Continue Learning');

    /*
     * Initialise courses
     *
     */

    this.init = function(){
        Lang.get('routes.learning-path.show', 'lp-single-root', 'learning-path/');
    }


    /**
     * Create the blank items
     *
     * @param {string} amount - The amount of courses required
     *
     * @return {string}
     *
     */

    this.createBlanks = function(amount){

        var blanks = '';

        // Blank Course Template
        var html =  '<li><div class="course-block blank">'+
                        '<div class="course-block-img-outer">'+
                            '<div class="course-block-img">'+
                                '<div class="img-cover"></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="course-block-content">'+
                            '<span class="course-type"></span><a href="http://alison.local/courses" class="course-category"></a>'+
                            '<h4><span></span><span></span></h4>'+
                            '<div class="mobile-read-more">'+
                                '<a class="btn btn-blue mobile-read-more-button" href="">Read more</a>'+
                            '</div>'+
                        '</div>'+
                    '</div></li>';

        for(var x = 0; x < amount; x++){
            blanks += html;
        }

        return blanks;
    }


    /**
     * Create the stars for the course
     *
     * @param {string} rating - The course rating
     *
     */

    this.createStars = function(rating){

        if(typeof rating === 'undefined'){
            var rating = 4;
        }

        var stars = '';

        for(var x = 1;x <= 5; x++){
            stars += '<span class="icon-'+(rating >= x ? 'filled-' : '')+'star"></span>';
        }

        return '<div class="course-stars">'+stars+'</div>';
    }


    /**
     * Create the course stats
     *
     * @param {JSON} course - The course object
     *
     */

    this.createCourseStats = function(course){

        return  '<div class="course-block-info '+ (typeof course.time === 'undefined' ? 'no-time' : '' ) +'">'+
                    '<ul style="height: auto;">'+
                        '<li class="level level-'+course.level+'">'+
                            '<div></div>'+
                            '<div></div>'+
                            '<div></div>'+
                        '</li>'+
                        '<li class="time-to-finish">'+
                            '<span class="icon-clock"></span>'+
                        '</li>'+
                        '<li class="enrolled">'+
                            '<span class="icon-student"></span>'+ numberWithCommas(course.enrolled) +
                        '</li>'+
                        '<li class="points">'+
                            '<span class="icon-trophy"></span>'+ course.points +
                        '</li>'+
                    '</ul>'+
                '</div>';
    }


    /**
     * Create the front facing information. Can differ depending on enrolled
     *
     * @param {JSON} course - The course object
     *
     */

    this.createCourseInformation = function(course, courseUrl){

        var img = '';

        if(typeof course.type_name !== 'undefined'){
            img = 'https://cdn01.alison-static.net/learning_paths/' + course.id + '/alison_learning_path_' + course.id + '.jpg';
            type = course.type_name;
        }
        else{
            img = course.courseImgUrl;
            type = (parseInt(course.course_type_id) === 1 ? 'Certificate' : 'Diploma')
        }

        var slug = course.root_category_slug || '',
            category = course.root_category_name || '',
            html =  // Image
                    '<div class="course-block-img-outer">'+
                        '<div class="course-block-img">'+
                            '<div class="img-cover"></div>'+
                            '<img src="'+ img +'" title="'+ course.name +'">';

        if(typeof course.progress !== 'undefined'){
            html += '<div class="bar-container">' +
                        '<div class="score">Progress ' + Math.ceil(course.progress) + '%</div>' +
                        '<div class="bar-outer">' +
                            '<div class="bar" style="width:' + Math.ceil(course.progress) + '%"></div>' +
                        '</div>' +
                    '</div>';
        }

        html +=     '</div>'+
                '</div>';

        html +=     '<div class="course-block-content">'+
                        '<span class="course-type">' + type + '</span>';

        if(slug !== ''){
            html +=  '<a href="/' + slug + '" class="course-category '+ category.toLowerCase() +'">'+ category +'</a>';
        }

        html +=         '<h4>'+ course.name +'</h4>'+
                            '<div class="mobile-read-more">'+
                                '<a href="'+courseUrl+'" class="btn btn-blue mobile-read-more-button" href="">Read more</a>'+
                            '</div>'+
                        '</div>';

        return html;

    }


    /**
     * Create the course item
     *
     * @param {JSON} course  This is the course item from the API
     *
     * @return {HTMLElement}
     *
     */

    this.buildCourseItem = function(course){

        if(translations['coursesIndex'] === '/course'){
            translations['coursesIndex'] = 'course/'
        }

        if(typeof course.id === "undefined"){
            return null;
        }

        var id = ( typeof course.republished_course_id !== 'undefined' && course.republished_course_id != 0 ) ? course.republished_course_id : course.id,
            slug = ( typeof course.republished_course_id !== 'undefined' && course.republished_course_id != 0 ) ? course.republished_course_slug : course.slug
             name = course.name,
            abs_url = (language == 'en' ? absolute_url : absolute_url +'/'+ language),
            headline = (typeof course.headline !== 'undefined' ? course.headline.replace(/(<([^>]+)>)/ig, "")  : ''),
            courseUrl = '',
            moreInfoUrl = abs_url + '/' + translations['coursesIndex'].split('{course_slug}')[0] + slug,
            rootCategory = course.root_category_name;

        // If learning path
        if(typeof course.type_name !== 'undefined'){
            var lang = ( language == 'en' ? '' : language + '/' );
            courseUrl = abs_url + '/' + lang + translations['lp-single-root'].split('{learning_path_slug}')[0] + slug;
            //Fix for learning path share urls
            moreInfoUrl = courseUrl;
        }
        else{
            if(translations['resume'].indexOf('{course_id?}') !== -1){
                courseUrl = abs_url + '/' + translations['resume'].split('{course_id?}')[0] + id;
            }
            else{
                courseUrl = abs_url + '/' + translations['resume'] +'/'+ id;
            }
        }
        // TODO: add to cart;
        var html =  '<div class="course-block">'+
                        '<div class="course-block-intro">'+
                            // This is the share and favourite section
                            '<ul class="link-group" style="height: auto;">'+
                                this.createShareLinks(moreInfoUrl, headline) +
                                '<li>';

                                    if(typeof course.type_name === 'undefined') {
                                        html +=     '<a href="#" class="favorite-course" data-id="' + id + '" title="Favourite this course">' +
                                                        '<span class="icon-heart2"></span>' +
                                                    '</a>';
                                    }

        html +=                '</li>'+
                            '</ul>'+

                            // This is the information on hover
                            '<a title="' + name + '" href="'+ courseUrl +'">'+
                                '<h3>' + name + '</h3>' +
                                '<div class="course-intro">' +
                                    (headline.length > 120 ? headline.substring(0, 120)+'...' : headline) +
                                '</div>'+
                                    '<button class="btn btn-blue start-button"> ყიდვა </button>'+
                            '</a>' +
                            this.createStars(parseInt(course.rating) || 4);

            if(typeof course.type_name === 'undefined'){
                html += '<a class="more-info" href="'+ moreInfoUrl +'" title="'+ name +'">' +
                            'More Information<span class="icon-help"></span>' +
                        '</a>';
            }

            html +=    '</div>'+

                        this.createCourseInformation(course, courseUrl)+

                        // Bottom information
                        this.createCourseStats(course);
                    '</div>';

        var liWrapper = document.createElement("li");

        liWrapper.innerHTML = html;
        liWrapper.style.opacity = '0';

        return liWrapper;
    }


    /**
     * Create the share links for a course
     *
     * @param {string} url - This is the url for the more infromation of the course
     * @param {string} headlin - This is the url for the more infromation of the course
     *
     * @return {HTMLElement}
     *
     */

    this.createShareLinks = function(url, headline){

        var links = '<li class="share-trigger">'+
                        '<a class="social-link-btn" title="Share this course"><span class="icon-share"></span></a>'+
                        '<div class="icon-group">'+
                            '<div class="social-buttons">'+
                                '<a href="https://www.facebook.com/sharer/sharer.php?u='+url+'" target="_blank" rel="nofollow">'+
                                    '<i class="icon-facebook"></i>'+
                                '</a>'+
                                '<a href="https://twitter.com/intent/tweet?url='+url+'&text='+headline+'" target="_blank" rel="nofollow">'+
                                    '<i class="icon-twitter"></i>'+
                                '</a>'+
                                '<a href="https://plus.google.com/share?url='+url+'" target="_blank" rel="nofollow">'+
                                    '<i class="icon-google"></i>'+
                                '</a>'+
                                '<a href="http://www.linkedin.com/shareArticle?url='+url+'" target="_blank" rel="nofollow">'+
                                    '<i class="icon-linkedin"></i>'+
                                '</a>'+
                            '</div>' +
                        '</div>'+
                    '</li>';

        return links;
    }

    // Initialise
    this.init();
}

function NewLookCourses(options){

    if(typeof options === 'undefined'){
        var options = {};
    }

    var course = new Course(),
        that = this;

    this.options  = {
        'parent' : options.parent || 'body',
        'courseCount' : options.courseCount || 10,
        'root_endpoint' : options.root_endpoint && options.root_endpoint !== '' && options.root_endpoint !== 'undefined' ? options.root_endpoint : location.href+'//v0.1',
    }

    // Adding endpoints to options
    var searchUrl = '/search?locale='+language+'&page=1&size='+this.options.courseCount;

    this.options['enrolled'] = '/user/courses-in-progress/'+this.options.courseCount+'/1';
    this.options['suggested'] = '/user/suggested-courses/?page=1&size='+this.options.courseCount;
    this.options['popular'] = searchUrl+'&order=popular-desc';
    this.options['released'] = searchUrl+'&order=released-desc';
    this.options['trending'] = searchUrl+'&order=trending-desc';
    this.options['certified'] = searchUrl+'&order=certified-desc';
    // END OPTIONS


    /**
     * Add courses to the parent container
     *
     * @param {JSON} response
     *
     */

    this.placeCourses = function(response){

        if(response.result.length>0){

            for (var x = 0;x < that.options.courseCount; x++) {

                if(x<response.result.length)
                {
                    var el = document.querySelector('.'+that.options.parent+' > ul > li:nth-child('+(x+1)+')'),
                    courseItem = course.buildCourseItem(response.result[x]);

                    // Replace the blank course with newly created course

                    if(courseItem === null){
                        var empty = document.createElement("li");
                        el.parentElement.replaceChild(empty, el);
                    }
                    else{
                        if(el !== null){
                            el.parentElement.replaceChild(courseItem, el);
                        }
                    }

                    // Load each course in a couple of seconds before the next one
                    (function(){
                        var target = document.querySelector('.'+that.options.parent+' > ul > li:nth-child('+(x+1)+')');
                        if(target !== null){
                            setTimeout(function (){
                                target.style.opacity = '1';
                            },x * 150);
                        }
                    })(x);
                }
            }
        }
    }


    /**
     * Created so a url can be padded from the outside
     *
     * @param {string} endpoint
     *
     */

    this.contactCourseAPI = function(endpoint){

        switch(endpoint) {
            case 'trending':
                endpoint = this.options.trending
                break;
            case 'enrolled':
                endpoint = this.options.enrolled
                break;
            case 'released':
                endpoint = this.options.released
                break;
            case 'suggested':
                endpoint = this.options.suggested
                break;
            case 'certified':
                endpoint = this.options.certified
                break;
            default:
                endpoint = this.options.popular
        }

        simpleRequest(this.options.root_endpoint+endpoint,
            function(response){
                var response = JSON.parse(response);

                if(response.status === 200){
                    if(response.total === 0){
                        that.switchTabOnError();
                    }
                    else{

                        if(response.result.length>0)
                        {
                            that.placeCourses(response);
                            return;
                        }
                        else
                        {
                            that.switchTabOnError();
                        }

                    }
                }
                else{
                    that.switchTabOnError();
                    console.error('Courses endpoint error - Returning with '+response.status+' status');
                }
            },
            function(response){
                that.switchTabOnError();
                console.error('Courses endpoint error - Returning with '+response.status+' status');
            });
    };


    /**
     * Switch tab
     *
     */

    this.switchTabOnError = function(){
        var currentTab = document.querySelector('.course-tab.active'),
            nextTab = document.querySelector('.course-tab.active + .course-tab');

        console.error('There is an issue with '+currentTab.dataset.type+' courses right now. Please try again later')

        //This is a fix to provide a circular fallback if there is an error on the last tab
        var nodes = document.querySelectorAll('.course-tab')[0];
        if(nextTab === null){
            nextTab = nodes;
        }

        nextTab.className += ' active';
        currentTab.className = currentTab.className.replace(' active', '');

        this.contactCourseAPI(nextTab.dataset.type);
    };


    // Function to initialise the object
    this.init = function(){
        var parent = document.getElementsByClassName(options.parent);
        if(parent.length > 0){
            parent[0].innerHTML = '<ul class="courses-list--listings">'+course.createBlanks(this.options.courseCount)+'</ul>';
        }

        // Get first api
        this.contactCourseAPI((isLoggedIn() && document.querySelector('.course-tab[data-type=enrolled]') !== null ? 'enrolled' : 'trending'));
    }

    // Initialise
    this.init();
}