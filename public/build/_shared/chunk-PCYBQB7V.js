import{b as H,g as re,i as m}from"/build/_shared/chunk-4JAR5RLY.js";var X=H(R=>{"use strict";m();Object.defineProperty(R,"__esModule",{value:!0});var g,p=(g=re())&&typeof g=="object"&&"default"in g?g.default:g;function T(){T=function(a,r){return new n(a,void 0,r)};var e=RegExp.prototype,t=new WeakMap;function n(a,r,i){var c=new RegExp(a,r);return t.set(c,i||t.get(a)),N(c,n.prototype)}function u(a,r){var i=t.get(r);return Object.keys(i).reduce(function(c,o){return c[o]=a[i[o]],c},Object.create(null))}return ne(n,RegExp),n.prototype.exec=function(a){var r=e.exec.call(this,a);return r&&(r.groups=u(r,this)),r},n.prototype[Symbol.replace]=function(a,r){if(typeof r=="string"){var i=t.get(this);return e[Symbol.replace].call(this,a,r.replace(/\$<([^>]+)>/g,function(o,f){return"$"+i[f]}))}if(typeof r=="function"){var c=this;return e[Symbol.replace].call(this,a,function(){var o=arguments;return typeof o[o.length-1]!="object"&&(o=[].slice.call(o)).push(u(o,c)),r.apply(this,o)})}return e[Symbol.replace].call(this,a,r)},T.apply(this,arguments)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e}).apply(this,arguments)}function ne(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return(N=Object.setPrototypeOf||function(n,u){return n.__proto__=u,n})(e,t)}function Q(e,t){if(e==null)return{};var n,u,a={},r=Object.keys(e);for(u=0;u<r.length;u++)t.indexOf(n=r[u])>=0||(a[n]=e[n]);return a}var ie=["children"],ae=["src","url","sizes","variants","altText","alt","caption","className","media","_availableSizes","_availableFormats"];function z(e){return e.url+" "+e.width+"w"}R.Image=function(e){var t,n,u,a,r=e.children,i=Q(e,ie),c=i.src,o=i.url,f=i.sizes,Z=i.variants,G=i.altText,P=i.alt,h=i.caption,V=i.className,v=i.media,W=i._availableSizes,$=i._availableFormats,k=Q(i,ae),s=(Z||[]).filter(function(l){return!!l}),J=typeof P=="string"?P:G;if(o&&W&&$){s=[];var j=o.replace(/\.[^/]+$/,"").match(/(.+)(\/)([^/]+)$/);if(j){var ee=j[1],te=j[3];W.forEach(function(l){$.forEach(function(_){s.push({url:ee+"/@"+l+"/"+te+"."+_,width:l})})})}}var q=s.length>0,w=s[0];q&&(w=s.reduce(function(l,_){return!l.width||_.width>l.width?_:l},s[0]));var d=s.filter(function(l){return l.url&&!l.url.endsWith(".webp")&&!l.url.endsWith(".avif")}),F=s.filter(function(l){return l.url&&l.url.endsWith(".webp")}),M=s.filter(function(l){return l.url&&l.url.endsWith(".avif")}),x=d.map(z).join(", "),E=F.map(z).join(", "),S=M.map(z).join(", "),y="jpeg";if(d.length>0){var A,I=d[0].url.match(T(/\.((?:(?!\.)[\s\S])+)$/,{name:1}));(y=(I==null||(A=I.groups)==null?void 0:A.name)||"jpeg")==="jpg"&&(y="jpeg")}var C={src:c||o||(q?d[0].url:void 0),alt:J,caption:h,width:(t=w)==null?void 0:t.width,height:(n=w)==null?void 0:n.height},O=E.length>0,b=S.length>0;if(O&&b){var D=F[0],B=M[0];D.size&&B.size&&(b=D.size>B.size)}if(r)return r(U({srcSet:x,srcSetWebp:E,srcSetAvif:S,useAvif:b,useWebP:O,className:V,sizes:f,media:v},C,k,{originalFileExtension:y}));var K=(h==null||(u=h.html)==null?void 0:u[0])||(h==null||(a=h.plainText)==null?void 0:a[0])||"";return p.createElement("figure",{className:V},p.createElement("picture",null,b&&p.createElement("source",{srcSet:S,type:"image/avif",sizes:f,media:v}),O&&p.createElement("source",{srcSet:E,type:"image/webp",sizes:f,media:v}),x.length>0&&p.createElement("source",{srcSet:x,type:"image/"+y,sizes:f,media:v}),p.createElement("img",Object.assign({},C,k))),K&&p.createElement("figcaption",{dangerouslySetInnerHTML:{__html:K}}))}});var le=H((se,Y)=>{"use strict";m();Y.exports=X()});m();var ue=(e,t)=>e&&e.__typename===t?e:null;export{le as a,ue as b};