"use strict";(self.webpackChunktradio=self.webpackChunktradio||[]).push([[126],{64896:(e,t,n)=>{n.d(t,{DD:()=>h,GM:()=>b,Mn:()=>r,OM:()=>f,Ol:()=>v,R9:()=>p,WY:()=>l,_N:()=>u,ir:()=>m,kb:()=>a,ni:()=>c,pG:()=>i,qZ:()=>s,sQ:()=>o,xf:()=>d});var r="top",o="bottom",i="right",a="left",s="auto",f=[r,o,i,a],c="start",u="end",l="clippingParents",p="viewport",d="popper",m="reference",v=f.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),h=[].concat(f,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),b=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},1134:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(9950);function o(){return(0,r.useState)(null)}},22770:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(9950);function o(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},18336:(e,t,n)=>{function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{A:()=>r})},74641:(e,t,n)=>{function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,{A:()=>r})},52177:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,i){var a=r||"<<anonymous>>",s=i||n;if(null==t[n])return new Error("The "+o+" `"+s+"` is required to make `"+a+"` accessible for users of assistive technologies such as screen readers.");for(var f=arguments.length,c=Array(f>5?f-5:0),u=5;u<f;u++)c[u-5]=arguments[u];return e.apply(void 0,[t,n,r,o,i].concat(c))}},e.exports=t.default},30095:(e,t,n)=>{n.d(t,{A:()=>v});var r,o=n(58168),i=n(98587),a=n(48738),s=n.n(a),f=n(9950),c=n(29310),u=n(20529),l=n(27832),p=["className","children"],d=((r={})[c.ns]="show",r[c._K]="show",r),m=f.forwardRef((function(e,t){var n=e.className,r=e.children,a=(0,i.A)(e,p),m=(0,f.useCallback)((function(e){(0,l.A)(e),a.onEnter&&a.onEnter(e)}),[a]);return f.createElement(c.Ay,(0,o.A)({ref:t,addEndListener:u.A},a,{onEnter:m}),(function(e,t){return f.cloneElement(r,(0,o.A)({},t,{className:s()("fade",n,r.props.className,d[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade";const v=m},60442:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(9950),o=n(74641),i=n(44089);function a(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}function s(){var e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)(null),s=(0,i.oU)(void 0,"popover"),f=(0,i.oU)(void 0,"dropdown-menu");return[(0,r.useCallback)((function(n){n&&((0,o.A)(n,s)||(0,o.A)(n,f))&&(t.current=a(n),n.style.margin="0",e.current=n)}),[s,f]),[(0,r.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,i=r.left,a=r.bottom,s=r.right;switch(n.split("-")[0]){case"top":return[0,a];case"left":return[0,s];case"bottom":return[0,o];case"right":return[0,i];default:return[0,0]}}}}}),[t]),(0,r.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!n.current)return 0;var e=n.current,t=e.top,r=e.right,o=t||r;return{top:o,left:o,right:o,bottom:o}}}}}),[n]),(0,r.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["arrow"],effect:function(t){var r=t.state;if(e.current&&r.elements.arrow&&(0,o.A)(e.current,s)){if(r.modifiersData["arrow#persistent"]){var i=a(r.elements.arrow),f=i.top,c=i.right,u=f||c;r.modifiersData["arrow#persistent"].padding={top:u,left:u,right:u,bottom:u}}else n.current=a(r.elements.arrow);return r.elements.arrow.style.margin="0",function(){r.elements.arrow&&(r.elements.arrow.style.margin="")}}}}}),[s])]]}},35696:(e,t,n)=>{n.d(t,{Ay:()=>o});var r=n(58168);function o(e){var t,n,o,i,a,s=e.enabled,f=e.enableEvents,c=e.placement,u=e.flip,l=e.offset,p=e.fixed,d=e.containerPadding,m=e.arrowElement,v=e.popperConfig,h=void 0===v?{}:v,b=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(h.modifiers);return(0,r.A)({},h,{placement:c,enabled:s,strategy:p?"fixed":h.strategy,modifiers:(a=(0,r.A)({},b,{eventListeners:{enabled:f},preventOverflow:(0,r.A)({},b.preventOverflow,{options:d?(0,r.A)({padding:d},null==(t=b.preventOverflow)?void 0:t.options):null==(n=b.preventOverflow)?void 0:n.options}),offset:{options:(0,r.A)({offset:l},null==(o=b.offset)?void 0:o.options)},arrow:(0,r.A)({},b.arrow,{enabled:!!m,options:(0,r.A)({},null==(i=b.arrow)?void 0:i.options,{element:m})}),flip:(0,r.A)({enabled:!!u},b.flip)}),void 0===a&&(a={}),Array.isArray(a)?a:Object.keys(a).map((function(e){return a[e].name=e,a[e]})))})}},48702:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(17119);function o(e){return e&&"setState"in e?r.findDOMNode(e):null!=e?e:null}},71458:(e,t,n)=>{n.d(t,{A:()=>de});var r=n(58168),o=n(98587),i=n(9950),a=n(22770);const s=function(e){const t=(0,a.A)();return[e[0],(0,i.useCallback)((n=>{if(t())return e[1](n)}),[t,e[1]])]};function f(e){return e.split("-")[0]}function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){return e instanceof c(e).Element||e instanceof Element}function l(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var d=Math.max,m=Math.min,v=Math.round;function h(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function b(){return!/^((?!chrome|android).)*safari/i.test(h())}function g(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&l(e)&&(o=e.offsetWidth>0&&v(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&v(r.height)/e.offsetHeight||1);var a=(u(e)?c(e):window).visualViewport,s=!b()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,p=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,m=r.height/i;return{width:d,height:m,top:p,right:f+d,bottom:p+m,left:f,x:f,y:p}}function y(e){var t=g(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function w(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return c(e).getComputedStyle(e)}function A(e){return["table","td","th"].indexOf(x(e))>=0}function E(e){return((u(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||E(e)}function k(e){return l(e)&&"fixed"!==O(e).position?e.offsetParent:null}function D(e){for(var t=c(e),n=k(e);n&&A(n)&&"static"===O(n).position;)n=k(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===O(n).position)?t:n||function(e){var t=/firefox/i.test(h());if(/Trident/i.test(h())&&l(e)&&"fixed"===O(e).position)return null;var n=M(e);for(p(n)&&(n=n.host);l(n)&&["html","body"].indexOf(x(n))<0;){var r=O(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function j(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function R(e,t,n){return d(e,m(t,n))}function L(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function P(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var C=n(64896);const W={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=f(n.placement),c=j(s),u=[C.kb,C.pG].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return L("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:P(e,C.OM))}(o.padding,n),p=y(i),d="y"===c?C.Mn:C.kb,m="y"===c?C.sQ:C.pG,v=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],b=D(i),g=b?"y"===c?b.clientHeight||0:b.clientWidth||0:0,w=v/2-h/2,x=l[d],O=g-p[u]-l[m],A=g/2-p[u]/2+w,E=R(x,A,O),M=c;n.modifiersData[r]=((t={})[M]=E,t.centerOffset=E-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&w(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function B(e){return e.split("-")[1]}var N={top:"auto",right:"auto",bottom:"auto",left:"auto"};function T(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,p=e.isFixed,d=a.x,m=void 0===d?0:d,h=a.y,b=void 0===h?0:h,g="function"===typeof l?l({x:m,y:b}):{x:m,y:b};m=g.x,b=g.y;var y=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=C.kb,A=C.Mn,M=window;if(u){var k=D(n),j="clientHeight",R="clientWidth";if(k===c(n)&&"static"!==O(k=E(n)).position&&"absolute"===s&&(j="scrollHeight",R="scrollWidth"),o===C.Mn||(o===C.kb||o===C.pG)&&i===C._N)A=C.sQ,b-=(p&&k===M&&M.visualViewport?M.visualViewport.height:k[j])-r.height,b*=f?1:-1;if(o===C.kb||(o===C.Mn||o===C.sQ)&&i===C._N)x=C.pG,m-=(p&&k===M&&M.visualViewport?M.visualViewport.width:k[R])-r.width,m*=f?1:-1}var L,P=Object.assign({position:s},u&&N),W=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:v(n*o)/o||0,y:v(r*o)/o||0}}({x:m,y:b},c(n)):{x:m,y:b};return m=W.x,b=W.y,f?Object.assign({},P,((L={})[A]=w?"0":"",L[x]=y?"0":"",L.transform=(M.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",L)):Object.assign({},P,((t={})[A]=w?b+"px":"",t[x]=y?m+"px":"",t.transform="",t))}var H={passive:!0};var S={left:"right",right:"left",bottom:"top",top:"bottom"};function q(e){return e.replace(/left|right|bottom|top/g,(function(e){return S[e]}))}var G={start:"end",end:"start"};function Q(e){return e.replace(/start|end/g,(function(e){return G[e]}))}function V(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(e){return g(E(e)).left+V(e).scrollLeft}function F(e){var t=O(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function U(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:l(e)&&F(e)?e:U(M(e))}function I(e,t){var n;void 0===t&&(t=[]);var r=U(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],F(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(I(M(a)))}function K(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Y(e,t,n){return t===C.R9?K(function(e,t){var n=c(e),r=E(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var u=b();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+_(e),y:f}}(e,n)):u(t)?function(e,t){var n=g(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):K(function(e){var t,n=E(e),r=V(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=d(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=d(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+_(e),f=-r.scrollTop;return"rtl"===O(o||n).direction&&(s+=d(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(E(e)))}function z(e,t,n,r){var o="clippingParents"===t?function(e){var t=I(M(e)),n=["absolute","fixed"].indexOf(O(e).position)>=0&&l(e)?D(e):e;return u(n)?t.filter((function(e){return u(e)&&w(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=Y(e,n,r);return t.top=d(o.top,t.top),t.right=m(o.right,t.right),t.bottom=m(o.bottom,t.bottom),t.left=d(o.left,t.left),t}),Y(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Z(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?f(o):null,a=o?B(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case C.Mn:t={x:s,y:n.y-r.height};break;case C.sQ:t={x:s,y:n.y+n.height};break;case C.pG:t={x:n.x+n.width,y:c};break;case C.kb:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?j(i):null;if(null!=u){var l="y"===u?"height":"width";switch(a){case C.ni:t[u]=t[u]-(n[l]/2-r[l]/2);break;case C._N:t[u]=t[u]+(n[l]/2-r[l]/2)}}return t}function X(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?C.WY:s,c=n.rootBoundary,l=void 0===c?C.R9:c,p=n.elementContext,d=void 0===p?C.xf:p,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,b=void 0===h?0:h,y=L("number"!==typeof b?b:P(b,C.OM)),w=d===C.xf?C.ir:C.xf,x=e.rects.popper,O=e.elements[v?w:d],A=z(u(O)?O:O.contextElement||E(e.elements.popper),f,l,a),M=g(e.elements.reference),k=Z({reference:M,element:x,strategy:"absolute",placement:o}),D=K(Object.assign({},x,k)),j=d===C.xf?D:M,R={top:A.top-j.top+y.top,bottom:j.bottom-A.bottom+y.bottom,left:A.left-j.left+y.left,right:j.right-A.right+y.right},W=e.modifiersData.offset;if(d===C.xf&&W){var B=W[o];Object.keys(R).forEach((function(e){var t=[C.pG,C.sQ].indexOf(e)>=0?1:-1,n=[C.Mn,C.sQ].indexOf(e)>=0?"y":"x";R[e]+=B[n]*t}))}return R}function J(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function $(e){return[C.Mn,C.pG,C.sQ,C.kb].some((function(t){return e[t]>=0}))}const ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=C.DD.reduce((function(e,n){return e[n]=function(e,t,n){var r=f(e),o=[C.kb,C.Mn].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[C.kb,C.pG].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}};const te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,p=n.padding,v=n.tether,h=void 0===v||v,b=n.tetherOffset,g=void 0===b?0:b,w=X(t,{boundary:c,rootBoundary:u,padding:p,altBoundary:l}),x=f(t.placement),O=B(t.placement),A=!O,E=j(x),M="x"===E?"y":"x",k=t.modifiersData.popperOffsets,L=t.rects.reference,P=t.rects.popper,W="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,N="number"===typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(k){if(i){var S,q="y"===E?C.Mn:C.kb,G="y"===E?C.sQ:C.pG,Q="y"===E?"height":"width",V=k[E],_=V+w[q],F=V-w[G],U=h?-P[Q]/2:0,I=O===C.ni?L[Q]:P[Q],K=O===C.ni?-P[Q]:-L[Q],Y=t.elements.arrow,z=h&&Y?y(Y):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Z[q],$=Z[G],ee=R(0,L[Q],z[Q]),te=A?L[Q]/2-U-ee-J-N.mainAxis:I-ee-J-N.mainAxis,ne=A?-L[Q]/2+U+ee+$+N.mainAxis:K+ee+$+N.mainAxis,re=t.elements.arrow&&D(t.elements.arrow),oe=re?"y"===E?re.clientTop||0:re.clientLeft||0:0,ie=null!=(S=null==T?void 0:T[E])?S:0,ae=V+ne-ie,se=R(h?m(_,V+te-ie-oe):_,V,h?d(F,ae):F);k[E]=se,H[E]=se-V}if(s){var fe,ce="x"===E?C.Mn:C.kb,ue="x"===E?C.sQ:C.pG,le=k[M],pe="y"===M?"height":"width",de=le+w[ce],me=le-w[ue],ve=-1!==[C.Mn,C.kb].indexOf(x),he=null!=(fe=null==T?void 0:T[M])?fe:0,be=ve?de:le-L[pe]-P[pe]-he+N.altAxis,ge=ve?le+L[pe]+P[pe]-he-N.altAxis:me,ye=h&&ve?function(e,t,n){var r=R(e,t,n);return r>n?n:r}(be,le,ge):R(h?be:de,le,h?ge:me);k[M]=ye,H[M]=ye-le}t.modifiersData[r]=H}},requiresIfExists:["offset"]};function ne(e,t,n){void 0===n&&(n=!1);var r=l(t),o=l(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,r=v(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=E(t),a=g(e,o,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==x(t)||F(i))&&(s=function(e){return e!==c(e)&&l(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:V(e);var t}(t)),l(t)?((f=g(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=_(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function re(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function oe(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ie={placement:"bottom",modifiers:[],strategy:"absolute"};function ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ie:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ie,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:u(e)?I(e):e.contextElement?I(e.contextElement):[],popper:I(t)};var l=function(e){var t=re(e);return C.GM.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(ae(t,n)){o.rects={reference:ne(t,D(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,l=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:l,instance:f})||o)}else o.reset=!1,r=-1}}},update:oe((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!ae(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var fe=se({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=X(t,{elementContext:"reference"}),s=X(t,{altBoundary:!0}),f=J(a,r),c=J(s,o,i),u=$(f),l=$(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:f(t.placement),variation:B(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,T(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,T(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=c(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,H)})),s&&f.addEventListener("resize",n.update,H),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,H)})),s&&f.removeEventListener("resize",n.update,H)}},data:{}},ee,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,p=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,v=void 0===m||m,h=n.allowedAutoPlacements,b=t.options.placement,g=f(b),y=c||(g===b||!v?[q(b)]:function(e){if(f(e)===C.qZ)return[];var t=q(e);return[Q(e),t,Q(t)]}(b)),w=[b].concat(y).reduce((function(e,n){return e.concat(f(n)===C.qZ?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?C.DD:c,l=B(r),p=l?s?C.Ol:C.Ol.filter((function(e){return B(e)===l})):C.OM,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var m=d.reduce((function(t,n){return t[n]=X(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[f(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:l,rootBoundary:p,padding:u,flipVariations:v,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,O=t.rects.popper,A=new Map,E=!0,M=w[0],k=0;k<w.length;k++){var D=w[k],j=f(D),R=B(D)===C.ni,L=[C.Mn,C.sQ].indexOf(j)>=0,P=L?"width":"height",W=X(t,{placement:D,boundary:l,rootBoundary:p,altBoundary:d,padding:u}),N=L?R?C.pG:C.kb:R?C.sQ:C.Mn;x[P]>O[P]&&(N=q(N));var T=q(N),H=[];if(i&&H.push(W[j]<=0),s&&H.push(W[N]<=0,W[T]<=0),H.every((function(e){return e}))){M=D,E=!1;break}A.set(D,H)}if(E)for(var S=function(e){var t=w.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},G=v?3:1;G>0;G--){if("break"===S(G))break}t.placement!==M&&(t.modifiersData[r]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},te,W]}),ce=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},ue={name:"applyStyles",enabled:!1},le={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?a+","+r.id:r.id)}}},pe=[];const de=function(e,t,n){var a=void 0===n?{}:n,f=a.enabled,c=void 0===f||f,u=a.placement,l=void 0===u?"bottom":u,p=a.strategy,d=void 0===p?"absolute":p,m=a.modifiers,v=void 0===m?pe:m,h=(0,o.A)(a,["enabled","placement","strategy","modifiers"]),b=(0,i.useRef)(),g=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),y=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),w=s((0,i.useState)({placement:l,update:g,forceUpdate:y,attributes:{},styles:{popper:ce(d),arrow:{}}})),x=w[0],O=w[1],A=(0,i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),O({state:t,styles:n,attributes:r,update:g,forceUpdate:y,placement:t.placement})}}}),[g,y,O]);return(0,i.useEffect)((function(){b.current&&c&&b.current.setOptions({placement:l,strategy:d,modifiers:[].concat(v,[A,ue])})}),[d,l,A,c]),(0,i.useEffect)((function(){if(c&&null!=e&&null!=t)return b.current=fe(e,t,(0,r.A)({},h,{placement:l,strategy:d,modifiers:[].concat(v,[le,A])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,O((function(e){return(0,r.A)({},e,{attributes:{},styles:{popper:ce(d)}})})))}}),[c,e,t]),x}},53272:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(18336),o=n(67410),i=n(9950),a=n(37813),s=n(2241),f=n.n(s),c=n(19815),u=n(48702);var l=function(){};var p=function(e){return e&&("current"in e?e.current:e)};const d=function(e,t,n){var s=void 0===n?{}:n,d=s.disabled,m=s.clickTrigger,v=void 0===m?"click":m,h=(0,i.useRef)(!1),b=t||l,g=(0,i.useCallback)((function(t){var n,o,i=p(e);f()(!!i,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),h.current=!i||!!((o=t).metaKey||o.altKey||o.ctrlKey||o.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,r.A)(i,null!=(n=null==t.composedPath?void 0:t.composedPath()[0])?n:t.target)}),[e]),y=(0,a.A)((function(e){h.current||b(e)})),w=(0,a.A)((function(e){27===e.keyCode&&b(e)}));(0,i.useEffect)((function(){if(!d&&null!=e){var t,n=window.event,r=(t=p(e),(0,c.A)((0,u.A)(t))),i=(0,o.A)(r,v,g,!0),a=(0,o.A)(r,v,(function(e){e!==n?y(e):n=void 0})),s=(0,o.A)(r,"keyup",(function(e){e!==n?w(e):n=void 0})),f=[];return"ontouchstart"in r.documentElement&&(f=[].slice.call(r.body.children).map((function(e){return(0,o.A)(e,"mousemove",l)}))),function(){i(),a(),s(),f.forEach((function(e){return e()}))}}}),[e,d,v,g,y,w])}}}]);