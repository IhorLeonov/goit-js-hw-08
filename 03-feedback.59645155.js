!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),g=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return m.Date.now()};function T(e,t,n){var r,o,i,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function g(e){return l=e,f=setTimeout(j,t),s?m(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function j(){var e=b();if(T(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-c);return d?p(n,i-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?m(e):(r=o=void 0,u)}function w(){var e=b(),n=T(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return g(c);if(d)return f=setTimeout(j,t),m(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=h(t)||0,S(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(h(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?u:O(b())},w}function S(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=c.test(e);return r||l.test(e)?s(e.slice(2),r?2:8):f.test(e)?NaN:+e}o=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),T(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O=document.querySelector("input"),w=document.querySelector("textarea"),N="feedback-form-state";j.addEventListener("input",o((function(e){"INPUT"===e.target.tagName&&(x.email=e.target.value);"TEXTAREA"===e.target.tagName&&(x.message=e.target.value);n(N,x)}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),t=N,localStorage.removeItem(t),console.log(x);var t}));var x={email:"",message:""};!function(){r(N)&&(x=r(N));""!==x.email&&(O.value=x.email);""!==x.message&&(w.value=x.message)}()}();
//# sourceMappingURL=03-feedback.59645155.js.map
