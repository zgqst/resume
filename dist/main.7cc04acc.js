parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector(".content"),r=document.querySelector("style"),e=document.querySelector(".demo"),a="/*您好，我叫清歌\n我是一个前端新人\n接下来我将展示我的前端技术\n首先要准备一个div*/\ndiv.demo{\n    width:300px;\n    height:300px;\n    border:1px solid black;\n}\n/* 注意了\n接下里我要把它变成一个八卦图\n首先，我先把它变成一个圆 */\ndiv.demo{\n    border-radius:50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 八卦由阴阳而成\n一黑一白 */\ndiv.demo{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 加两个神秘的小球 */\ndiv.demo::before{\n    width: 150px;\n    height: 150px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\ndiv.demo::after{\n    width: 150px;\n    height: 150px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}",d="",o=0,t=function e(){setTimeout(function(){"\n"===a.charAt(o)?d+="<br>":" "===a.charAt(o)?d+="&nbsp;":d+=a.charAt(o),n.innerHTML=d,r.innerHTML=a.substring(0,o+1),o++,n.scrollTop=n.scrollHeight,window.scrollTo(0,1e4),o>=a.length||e()},30)};t(),console.dir(n);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7cc04acc.js.map