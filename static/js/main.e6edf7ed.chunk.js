(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(21)},18:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(3),o=t.n(r),l=t(4),i=t(5),s=t(9),u=t(6),m=t(10);function d(e){var n=e.type;return c.a.createElement("div",{id:"".concat(n,"-hand"),className:"centered-setup clock-hand ".concat(n,"-hand")})}function h(e){return c.a.createElement("div",{className:"circle clock-body"},c.a.createElement(d,{type:"second"}),c.a.createElement(d,{type:"minute"}),c.a.createElement(d,{type:"hour"}),c.a.createElement("div",{className:"circle centered-setup clock-center"}))}var g=t(1),p=t.n(g),f=t(7),v=t.n(f),k=t(8),E=t.n(k),w=(t(18),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).setClockHandDegrees=function(){t.setHandDegree("second-hand","second"),t.setHandDegree("minute-hand","minute"),t.setHandDegree("hour-hand","hour")},t.setHandDegree=function(e,n){var a=p()(),c=6*a[n]();"hour"===n&&(c=t.getHourDegree(a.hour(),a.minute())),document.getElementById(e).style.transform="rotate(".concat(c,"deg)")},t.getHourDegree=function(e,n){return 30*e+n/60*30},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"clock-container"},c.a.createElement(h,null),c.a.createElement("img",{src:E.a,alt:"clock background",className:"clock-image"})),c.a.createElement(v.a,{interval:1e3,format:"hh:mm:ss a",onChange:this.setClockHandDegrees,className:"centered-setup moment"}))}}]),n}(a.Component));t(19),t(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){e.exports=t.p+"static/media/bg-clock.5ed9937b.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.e6edf7ed.chunk.js.map