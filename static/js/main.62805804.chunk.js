(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/clock-image.588178bb.png"},17:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(9),i=n(10),u=n(15),s=n(11),m=n(16);function d(e){var t=e.type;return r.a.createElement("div",{id:"".concat(t,"-hand"),className:"centered-setup clock-hand ".concat(t,"-hand")})}var f=["second","minute","hour"];function h(e){return r.a.createElement("div",{className:"circle clock-body"},f.map(function(e,t){return r.a.createElement(d,{key:e+t,type:e})}),r.a.createElement("div",{className:"circle centered-setup clock-center"}))}var g=n(12),p=n.n(g);function E(e){return r.a.createElement("div",{className:"clock-container"},r.a.createElement(h,null),r.a.createElement("img",{src:p.a,alt:"clock background",className:"circle clock-image"}))}function k(e){return r.a.createElement("div",{className:"creator-name"},r.a.createElement("p",null,"Created by\xa0",r.a.createElement("a",{target:"_blank",href:"http://www.jaredhuffstutler.com"},"Jared Huffstutler")),r.a.createElement("small",null,r.a.createElement("a",{href:"mailto:jaredhuffstutler@email.arizona.edu",className:"email-link"},"jaredhuff85@gmail.com")))}var w=n(13);function v(e){var t=e.socialLink,n=t.location,a=t.text,c=t.icon;return r.a.createElement("a",{target:"_blank",href:n,rel:"noopener noreferrer",className:"social-link"},r.a.createElement(w.a,{fixedWidth:!0,icon:c,size:"2x"}),r.a.createElement("small",null,a))}var b=n(5),y=n(6),j=[{location:"http://www.jaredhuffstutler.com",text:"portfolio",icon:b.b},{location:"http://www.jaredhuffstutler.com/resume.html",text:"resume",icon:b.a},{location:"https://www.linkedin.com/in/jared-huffstutler/",text:"linkedin",icon:y.b},{location:"https://github.com/Obsessive-Coder",text:"github",icon:y.a}];function N(e){return r.a.createElement("div",{className:"social-links"},j.map(function(e,t){return r.a.createElement(v,{key:e.text+t,socialLink:e})}))}function x(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement(k,null),r.a.createElement(N,null))}var H=n(3),D=n.n(H),C=n(14),O=n.n(C),B=(n(28),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).setClockHandDegrees=function(){n.setHandDegree("second-hand","second"),n.setHandDegree("minute-hand","minute"),n.setHandDegree("hour-hand","hour")},n.setHandDegree=function(e,t){var a=D()(),r=6*a[t]();"hour"===t&&(r=n.getHourDegree(a.hour(),a.minute())),document.getElementById(e).style.transform="rotate(".concat(r,"deg)")},n.getHourDegree=function(e,t){return 30*e+t/60*30},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(E,null),r.a.createElement(O.a,{interval:1e3,format:"hh:mm:ss a",onChange:this.setClockHandDegrees,className:"centered-setup moment"}),r.a.createElement(x,null))}}]),t}(a.Component));n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.62805804.chunk.js.map