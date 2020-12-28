(self.webpackChunkmf_2_reactjs=self.webpackChunkmf_2_reactjs||[]).push([[520],{520:(n,e,t)=>{"use strict";t.r(e),t.d(e,{mount:()=>g});var i=t(271),o=t.n(i),r=t(650),a=t.n(r),l=t(379),d=t.n(l),s=t(984);d()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var c=t(334),h=t(33),f=(0,i.lazy)((function(){return t.e(248).then(t.bind(t,248))})),u=(0,i.lazy)((function(){return t.e(665).then(t.bind(t,665))})),m=(0,i.lazy)((function(){return t.e(364).then(t.bind(t,364))})),b=(0,i.lazy)((function(){return t.e(502).then(t.bind(t,502))}));const p=function(){return o().createElement(c.BrowserRouter,null,o().createElement(h.Grid,{container:!0},o().createElement(i.Suspense,{fallback:o().createElement("div",null,"Loading...")},o().createElement(c.Switch,null,o().createElement(c.Route,{path:"/country"},o().createElement(f,null)),o().createElement(c.Route,{path:"/estate"},o().createElement(u,null)),o().createElement(c.Route,{path:"/city"},o().createElement(m,null)),o().createElement(c.Route,{path:"/address"},o().createElement(b,null))))))};var g=function(n){a().render(o().createElement(o().StrictMode,null,o().createElement(p,null)),n)}},984:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,'/* Document\n * ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n * ========================================================================== */\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n * ========================================================================== */\n/**\n * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n */\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n/**\n * Remove the margin on nested lists in Edge 18- and IE.\n */\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Correct the inheritance of border color in Firefox.\n * 3. Show the overflow in Edge 18- and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  color: inherit; /* 2 */\n  height: 0; /* 1 */\n  overflow: visible; /* 3 */\n}\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n * ========================================================================== */\n/**\n * Add the correct text decoration in Edge 18-, IE, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/* Embedded content\n * ========================================================================== */\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Tabular data\n * ========================================================================== */\n/**\n * 1. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 2. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\ntable {\n  border-color: inherit; /* 1 */\n  text-indent: 0; /* 2 */\n}\n/* Forms\n * ========================================================================== */\n/**\n * Remove the margin on controls in Safari.\n */\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * Show the overflow in Edge 18- and IE.\n */\ninput {\n  overflow: visible;\n}\n/**\n * 1. Correct the text wrapping in Edge 18- and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in Edge 18- and IE.\n * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the inheritance of text transform in Firefox.\n */\nselect {\n  text-transform: none;\n}\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n}\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/* Interactive\n * ========================================================================== */\n/*\n * Add the correct display in Edge 18- and IE.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct styles in Edge 18-, IE, and Safari.\n */\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\ndialog:not([open]) {\n  display: none;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* User interaction\n * ========================================================================== */\n/* Document\n * ========================================================================== */\n/**\n * Add border box sizing in all browsers (opinionated).\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Use a 4-space tab width in all browsers (opinionated).\n * 4. Remove the grey highlight on links in iOS (opinionated).\n * 5. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n * 6. Breaks words to prevent overflow in all browsers (opinionated).\n */\nhtml {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  -webkit-tap-highlight-color: transparent /* 4 */;\n  -ms-text-size-adjust: 100%; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 5 */\n  word-break: break-word; /* 6 */\n}\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n * ========================================================================== */\n/**\n * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n */\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n/**\n * Remove the margin on nested lists in Edge 18- and IE.\n */\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n/**\n * 1. Correct the inheritance of border color in Firefox.\n * 2. Add the correct box sizing in Firefox.\n * 3. Show the overflow in Edge 18- and IE.\n */\nhr {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n  overflow: visible; /* 3 */\n}\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\nnav ol,\nnav ul {\n  list-style: none;\n  padding: 0;\n}\n/**\n * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n */\nnav li::before {\n  content: "\\200B";\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Prevent overflow of the container in all browsers (opinionated).\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n  -ms-overflow-style: scrollbar; /* 3 */\n}\n/* Text-level semantics\n * ========================================================================== */\n/**\n * Add the correct text decoration in Edge 18-, IE, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/* Embedded content\n * ========================================================================== */\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\niframe {\n  border-style: none;\n}\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\nsvg:not([fill]) {\n  fill: currentColor;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Tabular data\n * ========================================================================== */\n/**\n * 1. Collapse border spacing in all browsers (opinionated).\n * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\ntable {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n/* Forms\n * ========================================================================== */\n/**\n * Remove the margin on controls in Safari.\n */\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Correct the padding in Firefox.\n */\nfieldset {\n  border: 1px solid #a0a0a0; /* 1 */\n  padding: 0.35em 0.75em 0.625em; /* 2 */\n}\n/**\n * Show the overflow in Edge 18- and IE.\n */\ninput {\n  overflow: visible;\n}\n/**\n * 1. Correct the text wrapping in Edge 18- and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n */\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in Edge 18- and IE.\n * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the inheritance of text transform in Firefox.\n */\nselect {\n  text-transform: none;\n}\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n  resize: vertical; /* 3 */\n  resize: block; /* 3 */\n}\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/* Interactive\n * ========================================================================== */\n/*\n * Add the correct display in Edge 18- and IE.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct styles in Edge 18-, IE, and Safari.\n */\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\ndialog:not([open]) {\n  display: none;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* User interaction\n * ========================================================================== */\n/*\n * Remove the tapping delay in IE 10.\n */\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n}\n/* Accessibility\n * ========================================================================== */\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n[aria-busy="true"] {\n  cursor: progress;\n}\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n[aria-controls] {\n  cursor: pointer;\n}\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n[aria-disabled="true"],\n[disabled] {\n  cursor: not-allowed;\n}\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n[aria-hidden="false"][hidden] {\n  display: initial;\n}\n[aria-hidden="false"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}',""]);const r=o},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{"use strict";var i,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},i=[],o=0;o<n.length;o++){var l=n[o],d=e.base?l[0]+e.base:l[0],s=t[d]||0,c="".concat(d," ").concat(s);t[d]=s+1;var h=a(c),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==h?(r[h].references++,r[h].updater(f)):r.push({identifier:c,updater:b(f,e),references:1}),i.push(c)}return i}function d(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,c=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function h(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=c(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var u=null,m=0;function b(n,e){var t,i,o;if(e.singleton){var r=m++;t=u||(u=d(e)),i=h.bind(null,t,r,!1),o=h.bind(null,t,r,!0)}else t=d(e),i=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=a(t[i]);r[o].references--}for(var d=l(n,e),s=0;s<t.length;s++){var c=a(t[s]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}t=d}}}}}]);