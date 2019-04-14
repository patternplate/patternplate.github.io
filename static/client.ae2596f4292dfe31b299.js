!function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([935,0]),n()}([,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(484));t.activateNode=r.default;const a=o(n(483));t.applyState=a.default;const i=o(n(482));t.arrow=i.default;const l=o(n(455));t.changeConcern=l.default;const s=o(n(454));t.changeType=s.default;const c=o(n(450));t.closeAllTheThings=c.default;const u=o(n(449));t.demoContentResize=u.default;const d=o(n(444));t.dismissAllMessages=d.default;const f=o(n(443));t.dismissMessage=f.default;const p=o(n(442));t.listen=p.default;const h=o(n(141));t.loadPatternDemo=h.default;const m=o(n(140));t.loadSchema=m.default;const g=o(n(434));t.openDocumentation=g.default;const y=o(n(433));t.openFullscreen=y.default;const v=o(n(432));t.patchLocation=v.default;const b=o(n(431));t.reload=b.default;const _=o(n(430));t.resizeDemo=_.default;const x=o(n(429));t.scrollDemo=x.default;const w=o(n(428));t.scrollTo=w.default;const k=o(n(426));t.search=k.default;const S=o(n(423));t.searchPreview=S.default;const E=o(n(422));t.themeLoaded=E.default;const M=o(n(421));t.toggleCode=M.default;const O=o(n(420));t.toggleConsole=O.default;const P=o(n(419));t.toggleDependencies=P.default;const C=o(n(418));t.toggleDependents=C.default;const j=o(n(417));t.toggleDoc=j.default;const $=o(n(416));t.toggleHide=$.default;const T=o(n(415));t.toggleInfo=T.default;const L=o(n(414));t.toggleKeyboardShortcuts=L.default;const D=o(n(413));t.toggleManifest=D.default;const N=o(n(147));t.toggleNavigation=N.default;const z=o(n(412));t.toggleNetwork=z.default;const R=o(n(411));t.toggleOpacity=R.default;const A=o(n(410));t.toggleComponentsEnabled=A.default;const I=o(n(409));t.toggleRulers=I.default;const H=o(n(408));t.toggleSearch=H.default;const q=o(n(407));t.toggleTheme=q.default;const B=o(n(406));t.windowResize=B.default},,,,,,function(e,t,n){e.exports=n(850)},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r=n(3);t.toggle=function(e){const t=o.camelCase(e),n=(n={})=>(o,a)=>{const i="forced"in n?n.forced:!a()[t];o(r.patchLocation({query:{[e]:i}}))};return n.type=`TOGGLE_${o.snakeCase(e).toUpperCase()}`,n.property=t,n.key=e,n}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(844))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(868))},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(852))},,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(24),a=n(86),i=n(40),l=o(n(437)),s=(r.createSelector(a.flat,e=>e.filter(e=>{const{manifest:t}=e,{options:n={}}=t,{query:o=""}=n;return Boolean(o)})),r.createSelector(i.flat,e=>e.id,(e,t)=>{const n=e.find(e=>t===`${e.contentType}/${e.id}`);return n||("/"===t?e[0]:void 0)}));t.default=s;const c=r.createSelector(e=>e.hide,e=>(e=>e?e=>!0!==(e.manifest.options||{}).hidden:e=>e)(e)),u=e=>l.default(e,s,c);t.selectDependencies=u("dependencies"),t.selectDependents=u("dependents"),t.selectManifest=r.createSelector(s,e=>e?JSON.stringify(e.manifest,null,"  "):""),t.selectContentType=r.createSelector(s,e=>e?e.contentType:""),t.selectType=r.createSelector(s,e=>e?e.type:""),t.selectActive=r.createSelector(s,e=>e.searchEnabled,(e,t)=>!t&&null!==e&&void 0!==e),t.selectIcon=r.createSelector(s,e=>e?e.manifest.icon||e.type:""),t.selectName=r.createSelector(s,e=>e?e.manifest.displayName:""),t.selectTags=r.createSelector(s,e=>e&&e.manifest.tags||[]),t.selectVersion=r.createSelector(s,e=>e?e.manifest.version:""),t.selectFlag=r.createSelector(s,e=>e?e.manifest.flag:""),t.selectId=r.createSelector(s,e=>e?e.id:""),t.selectContents=r.createSelector(s,e=>e&&"string"==typeof e.contents?e.contents:null),t.selectDescription=r.createSelector(s,e=>e?e.manifest.description:"")},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(24),r=n(86),a=n(64),i=n(85);t.selectFlatPool=o.createSelector(r.flat,a.flat,e=>({hide:e.hideEnabled,id:e.id,location:e.routing.locationBeforeTransitions,base:e.base,prefix:"doc",search:()=>[]}),(e,t,n)=>{return c(e.map(e=>i.enrich(e,n))).concat(t).filter(e=>Boolean(e.id)&&Boolean(e.contentType))});const l=o.createSelector(t.selectFlatPool,e=>{return t=>{return[].map(t=>e.find(e=>e.id===t))}}),s=o.createSelector(r.flat,a.flat,e=>({hide:e.hideEnabled,id:e.id,location:e.routing.locationBeforeTransitions,base:e.base,prefix:"doc",search:l(e)}),(e,t,n)=>{return c(e.map(e=>i.enrich(e,n))).concat(t).filter(e=>Boolean(e.id)&&Boolean(e.contentType))});function c(e,t=[]){return e.reduce((e,t)=>(e.push(t),Array.isArray(t.children)&&c(t.children,e),e),t)}t.default=s,t.flat=o.createSelector(r.flat,a.flat,(e,t)=>c(e.concat(t)).filter(e=>"item"===e.type))},,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(62)),a=n(15);t.default=((e,t={})=>(r.default("function"==typeof e,`toggle needs an action to create a handler for, received ${e} of type ${typeof e}`),a.handleActions({"@@router/LOCATION_CHANGE":(n,{payload:o})=>e.key in o.query?"true"===o.query[e.key]:t.defaultValue},t.defaultValue)))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(24),a=o(n(30));var i;t.selectSrc=r.createSelector(a.default,e=>e.base,(e,t)=>e?"pattern"!==e.contentType?null:`${t=t,"/"===t.charAt(t.length-1)?t.slice(0,t.length-1):t}/api/demo/${e.id}.html`:null)},,,,,function(e,t,n){"use strict";(function(e){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(15),i=r(n(84)),l=e=>e,s=e=>o(this,void 0,void 0,function*(){return e});t.createPromiseThunkAction=function(t,n){const r=n||s,i=n=>{const i=a.createAction(`${t}_DELAYED`),s=a.createAction(`${t}_SUCCESS`),c=a.createAction(`${t}_START`),u=a.createAction(`${t}_THROWS`);return(t,a)=>o(this,void 0,void 0,function*(){t(c(n,l,a));const o=e.setTimeout(()=>{t(i(n,l,a))},1e3);try{const i=yield Promise.resolve(r(n,t,a));return e.clearTimeout(o),t(s(i)),i}catch(n){return console.error(n),e.clearTimeout(o),t(u(n)),n}})};return i.__name=t,i},t.handlePromiseThunkAction=function(e,t,n={}){const o=e.__name||e;return n.dependencies=n.dependencies||[],i.default({[`${o}_START`]:t.start||l,[`${o}_DELAYED`]:t.delayed||l,[`${o}_SUCCESS`]:t.success||l,[`${o}_THROWS`]:t.throws||l},n)}}).call(this,n(6))},,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(33)),a=o(n(39)),i=n(10);function l(e){return t=>i.includes(t,e)}function s(e={}){const t=i.entries(e.query||{}).reduce((e,t)=>[...e,t.join("--")],[]),n=r.default.extname(e.pathname||""),o=n?r.default.dirname(e.pathname):function(e){const t=e.length-1;return"/"===e[t]?e.slice(0,t):e}(e.pathname),a=n?r.default.basename(e.pathname):"";return[o,...t,a].filter(Boolean).join("/")}function c(e=""){const t=a.default.parse(e).pathname||"";var n;var o;return{pathname:t.split("/").filter((n=l("--"),(...e)=>!n(...e))).join("/"),query:t.split("/").filter(l("--")).map((o="--",e=>e.split(o).slice(0,2))).reduce((e,t)=>{const[n,o]=t;return e[n]=o,e},{})}}t.format=s,t.parse=c,t.default={parse:c,format:s}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r=n(24),a=n(85),i=r.createSelector(e=>e.schema.meta,e=>e.id,e=>e.hideEnabled,e=>e.routing.locationBeforeTransitions,e=>e.base,(e,t,n,r,i)=>{const l={base:i,hide:n,id:t,prefix:"pattern",location:r};return a.sanitize(o.merge({},e),l)});t.default=i,t.flat=r.createSelector(i,a.flatten)},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(62)),a=n(11),i=n(10),l=o(n(137)),s=i.values(l.default());t.default=function(e){const t=s.find(t=>t.key===e.key);return r.default(t,`${e} passed to withToggle has no matching shortcut found for ${e.key}`),n=>a.connect(n=>({enabled:n[e.property],shortcut:t}))(n)}},function(e,t,n){"use strict";var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(0));t.mountable=function(e){return class extends a.default.Component{componentDidMount(){"function"==typeof this.props.onMount&&this.props.onMount()}render(){const t=this.props,{onMount:n}=t,r=o(t,["onMount"]);return a.default.createElement(e,Object.assign({},r))}}},t.skippable=function(e,t="active"){return n=>!0===n[t]?a.default.createElement(e,Object.assign({},n)):null}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(62)),a=n(15),i=n(10);t.default=function(e,t){r.default.ok(Array.isArray(t.dependencies),"options.dependencies must be an array");const n=(...n)=>{const[,,o={}]=n;if(Object.keys(o).length>0){const n=t.dependencies.filter(e=>!(e in o));r.default.ok(0===n.length,`dependencies for ${Object.keys(e).join(", ")} must be present in state. missing: ${n.join(",")}. available: ${Object.keys(o)}`)}const l=i.pick(o,t.dependencies),s=(l=l,e=>i.entries(e).reduce((e,t)=>{const[n,o]=t;return e[n]=((e,t)=>o(e,t,l)),e},{}))(e),c=a.handleActions(s,t.defaultValue);return c(...n)};var o;return n.dependencies=t.dependencies,n}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(33)),a=o(n(74)),i=o(n(39)),l={folder:0,doc:1,pattern:2};function s(e,t){const{id:n,prefix:o,search:l}=t,s=[e.contentType,e.id].join("/");e.active=s===n||`doc/${t.parent}/${s}`===n;const u=i.default.parse(e.href||r.default.join(o,e.id||e.path)),d="string"==typeof u.query?a.default.parse(u.query):u.query;return e.href=i.default.format({pathname:function(e,t){const n=c(e),o=c(t);if(o.startsWith(n))return`/${o}`;return`/${[c(e),c(t)].join("/")}`}(t.base||"",u.pathname||""),query:Object.assign({},t.location.query,d)}),e.warnings=e.warnings||[],e.type="doc"===e.contentType&&"string"==typeof(e.manifest.options||{}).query?"folder":"item","folder"===e.type&&(e.children=l(e.manifest.options.query).filter(t=>t.id!==e.id)),!e.manifest||"pattern"!==e.type||"alpha"!==e.manifest.flag&&"deprecated"!==e.manifest.flag||e.warnings.push({type:"flag",value:e.manifest.flag,message:`${e.manifest.displayName} is flagged as ${e.manifest.flag}.`}),e}function c(e){return e.split("/").filter(Boolean).join("/")}t.flatten=function(e){return e.children},t.sanitize=function e(t,n){const{id:o,config:r={},prefix:a,base:i,location:c,search:u}=n;return t.children=t.children.map(t=>{const l=s(t,{base:i,location:c,id:o,config:r,prefix:a,search:u});return l.children?e(l,n):l}).sort((e,t)=>{const n=(((e.manifest||{}).options||{}).order||0)-(((t.manifest||{}).options||{}).order||0),o=(l[e.type]||0)-(l[t.type]||0),r=e.manifest.displayName.localeCompare(t.manifest.displayName);return 0!==n?n:0!==o?o:r}),s(t,{base:i,location:c,id:o,config:r,prefix:a,search:u})},t.enrich=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(146),r=n(10),a=n(24),i=n(64),l=n(85),s=a.createSelector(e=>e.schema.docs,e=>e.id,e=>e.hideEnabled,e=>e.routing.locationBeforeTransitions,e=>e.base,()=>()=>[],(e,t,n,o,a,i)=>{const s={hide:n,id:t,prefix:"doc",location:o,base:a,search:i};return l.flatten(l.sanitize(r.merge({},e),s)).filter(e=>"folder"!==e.type)}),c=a.createSelector(s,i.flat,e=>({hide:e.hideEnabled,id:e.id,location:e.routing.locationBeforeTransitions,base:e.base,prefix:"doc",search:()=>[]}),(e,t,n)=>e.map(e=>l.enrich(e,n)).concat(t).filter(e=>Boolean(e.id)&&Boolean(e.contentType))),u=a.createSelector(c,e=>{const t=o.createSearch(e);return n=>{return t(n).map(t=>e.find(e=>e.id===t))}}),d=a.createSelector(e=>e.schema.docs,e=>e.id,e=>e.hideEnabled,e=>e.routing.locationBeforeTransitions,e=>e.base,u,(e,t,n,o,a,i)=>{const s={hide:n,id:t,prefix:"doc",location:o,base:a,search:i};return l.sanitize(r.merge({},e),s)}),f=a.createSelector(d,e=>{const t=l.flatten(e);return t?t[0]:null}),p=a.createSelector(d,e=>l.flatten(e).map(e=>(e.manifest.options||{}).query).filter(Boolean)),h=a.createSelector(d,p,(e,t)=>{const n=o.createSearch(l.flatten(e));return t.reduce((e,t)=>e.concat(n(t).filter(t=>-1===e.indexOf(t))),[])}),m=a.createSelector(d,f,h,e=>e.id,(e,t,n,o)=>(e.children=e.children.filter(e=>"folder"===e.type||-1===n.indexOf(e.id)),"/"===o&&t&&(t.active=!0),e));t.default=m,t.flat=a.createSelector(m,l.flatten)},,,,,,,,,,,,,,,,,function(e,t,n){const o=n(0),r=n(1).default,a=n(23).Icon,i=n(20).Link,l=n(211),s=n(67),c=l().use(s);e.exports=function(e){return o.createElement(p,{"data-toggle-name":e.name,"data-trigger-name":e.name,"data-toggle-enabled":e.enabled,visible:e.visible,highlight:e.highlight},o.createElement(d,{highlight:e.highlight,enabled:e.enabled,size:e.size},o.createElement(h,{highlight:e.highlight,title:`${e.enabled?"Close":"Expand"} ${e.children} list`,query:{[`${e.name}-enabled`]:!e.enabled}},o.createElement(f,{enabled:e.enabled},o.createElement(a,{symbol:"arrow-right"})),c.processSync(e.children).contents)))};const u={S:.9,M:1},d=r.div`
  box-sizing: border-box;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-family: ${e=>e.theme.fonts.default};
  font-size: ${({size:e,theme:t})=>u[e]*t.fonts.fontSize}px;
  color: ${e=>e.theme.colors.color};
  background-color: ${({enabled:e,theme:t})=>e?t.colors.backgroundTertiary:t.colors.background};
  border-style: solid;
  border-top-color: ${({enabled:e,theme:t})=>e?t.colors.backgroundSecondary:t.colors.border};
  border-bottom-color: ${e=>e.enabled?"transparent":e.theme.colors.border};
  border-width: ${e=>e.highlight?1:0}px 0;
  width: 100%;
`,f=r.span`
  margin-right: 10px;
  transform-origin: center;
  transform: rotate(${e=>e.enabled?90:0}deg);
`,p=r.div`
  display: ${e=>e.visible?"block":"none"};
  position: sticky;
  top: -1px;
  left: 0;

  /* Styling that can be toggled by a predetonation script */
  &[data-toggle-enabled="true"] {
    ${d} {
      background-color: ${({theme:e})=>e.colors.backgroundTertiary};
      border-top-color: ${({theme:e})=>e.colors.backgroundSecondary};
      border-bottom-color: transparent;
    }

    ${f} {
      transform: rotate(90deg);
    }
  }

  &[data-toggle-enabled="false"] {
    ${d} {
      background-color: ${({theme:e})=>e.colors.background};
      border-top-color: ${({theme:e})=>e.colors.border};
      border-bottom-color: ${e=>e.theme.colors.border};
    }

    ${f} {
      transform: rotate(0);
    }
  }
`,h=r(i)`
  display: block;
  color: ${e=>e.theme.colors.color};
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(841))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(847))},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(859))},,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9),i=n(60),l=o(n(69)),s=o(n(290));t.default=class extends r.default.Component{componentWillUpdate(e){const{props:t}=this;t.location.pathname!==e.location.pathname&&"function"==typeof t.requestScroll&&t.requestScroll(i.findDOMNode(this.ref))}render(){const{props:e}=this;return r.default.createElement(c,{ref:e=>this.ref=e},r.default.createElement("div",{id:"doctop"}),r.default.createElement(l.default,{title:e.displayName}),r.default.createElement(s.default,{linkable:!0,source:e.doc}))}};const c=a.styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 860px;
  padding: 80px 15px 15px 15px;
  @media screen and (min-width: 720px) {
    padding: 60px;
  }
`},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(11),a=o(n(30));t.default=r.connect(function(e){const t=a.default(e);return{active:!!t&&"pattern"===t.contentType}})},,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(393));t.default=function(){const e=t=>{Object.keys(e).forEach(n=>{e[n].bind(t)})};e.toggleConsole=new i.default({character:"c",description:e=>`${e.enabled?"Hide":"Show"} console`,action:a.toggleConsole}),e.toggleDoc=new i.default({character:"d",description:()=>"Open documentation for this pattern",action:a.toggleDoc}),e.openDocumentation=new i.default({character:"7",description:()=>"Navigate back to / route",action:a.openDocumentation}),e.openFullscreen=new i.default({character:"f",description:()=>"Open fullscreen view",action:a.openFullscreen}),e.toggleHide=new i.default({character:"h",description:e=>`${e.enabled?"Show":"Hide"} hidden items`,action:a.toggleHide}),e.info=new i.default({character:"i",description:e=>`${e.enabled?"Hide":"Show"} pattern infos`,action:a.toggleInfo}),e.toggleOpacity=new i.default({character:"o",description:e=>`${e.enabled?"Hide":"Show"} opacity indicators`,action:a.toggleOpacity}),e.toggleShortcuts=new i.default({character:"k",description:e=>`${e.enabled?"Hide":"Show"} keyboard shortcuts`,action:a.toggleKeyboardShortcuts}),e.toggleRulers=new i.default({character:"l",description:e=>`${e.enabled?"Hide":"Show"} rulers`,action:a.toggleRulers}),e.toggleCode=new i.default({character:"m",description:e=>`${e.enabled?"Hide":"Show"} pattern code`,action:a.toggleCode}),e.toggleNavigation=new i.default({character:"n",description:e=>`${e.enabled?"Hide":"Show"} navigation`,action:a.toggleNavigation}),e.toggleNetwork=new i.default({character:"d",description:e=>`${e.enabled?"Hide":"Show"} dependency network`,action:a.toggleNetwork});const t=()=>a.reload({reloadTime:Date.now()});return t.type=a.reload.type,t.key=a.reload.key,t.property=a.reload.property,e.reload=new i.default({character:"r",description:()=>"Force sync",action:t}),e.toggleSearch=new i.default({character:"space",description:e=>`${e.enabled?"Disable":"Enable"} search`,action:a.toggleSearch}),e.toggleTheme=new i.default({character:"t",description:"Toggle active theme",action:a.toggleTheme}),e.close=new i.default({character:"esc",modifiers:[],action:a.closeAllTheThings}),e.up=new i.default({character:"arrow-up",action:()=>a.arrow("up")}),e.right=new i.default({character:"arrow-right",action:()=>a.arrow("right")}),e.down=new i.default({character:"arrow-down",action:()=>a.arrow("down")}),e.left=new i.default({character:"arrow-left",action:()=>a.arrow("left")}),e}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9);t.default=function(e){const t=e.title||`${e.shortcut.description(e)} ${e.shortcut.toString()}`;if(!1===e.active)return r.default.createElement(i,{className:e.className,title:t},e.children);return r.default.createElement(a.Link,{className:e.className,title:t,query:{[e.shortcut.key]:!e.enabled}},e.children)};const i=a.styled.div`
  font-size: 0;
  line-height: 0;
`},,function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(61),i=r(n(435));t.default=a.createPromiseThunkAction("LOAD_SCHEMA",(e,t,n)=>o(this,void 0,void 0,function*(){var e;return(yield i.default(`${e=n().base,"/"===e.charAt(e.length-1)?e.slice(0,e.length-1):e}/api/state.json`)).json()}))},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(121)),l=a(n(56));t.default=(e=>(t,n)=>o(this,void 0,void 0,function*(){const o=function(e){return()=>l.selectSrc(e())}(n),r=o();if(!r)return;t({type:"LOAD_PATTERN_DEMO_START",payload:{id:r}});const a=yield i.default(r,{headers:{Accept:"text/html"}});if(r!==o())return;const s=yield a.text();return r===o()?a.status>=400?t({type:"LOAD_PATTERN_DEMO_ERROR",payload:{id:r,error:s}}):void t({type:"LOAD_PATTERN_DEMO_SUCCESS",payload:{id:r,contents:s,force:e.force}}):void 0}))},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=/([^!><^~\*\n=]+)?(?:(!)?(\*|>|<|\^|~)?(=)?)([^!><^~\n=]+)?/;t.parse=function(e){const t=e.match(o)||[],[n,r,a,i,l,s]=t;return{field:r,value:s,raw:n,operators:[i,l].join(""),negated:"!"===a,greater:">"===i,lower:"<"===i,matches:"="===l&&"*"===i,startsWith:"="===l&&"^"===i,includes:"="===l&&"~"===i,equals:"="===l,valid:Boolean(r&&s&&("string"==typeof i||"string"==typeof l))}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r=n(480);t.parse=function(e){const t="string"==typeof e?[e]:[];try{const n=r.parse(e),o=r.utils.binaryTreeToQueryJson(n);return o.type?o:{type:"and",values:t}}catch(e){return{type:"and",values:t}}},t.perform=function e(t,n){if("string"==typeof t)return n(t);switch(t.type){case"and":{const r=()=>t.values.map(t=>e(t,n));return o.intersection(...r())}case"or":{const r=()=>t.values.map(t=>e(t,n));return o.flatten([...r()])}case"string":{const e="string"==typeof t.value?t.value:"";return n(e)}default:throw new TypeError(`@patternplate/search.perform: Unknown query: ${JSON.stringify(t)}`)}}},function(e,t,n){e.exports=n(481)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("navigation-enabled")},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.SearchFieldBox=o.default.div`
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.SearchFieldSlot=function(e){return o.createElement(o.Fragment,null,e.children)},t.SearchLegendSlot=function(e){return o.createElement(o.Fragment,null,e.children)},t.SearchPassThroughSlot=function(e){return o.createElement(o.Fragment,null,e.children)},t.SearchResultListSlot=function(e){return o.createElement(o.Fragment,null,e.children)},t.SearchResultPreviewSlot=function(e){return o.createElement(o.Fragment,null,e.children)},t.withSlot=function(e,{slot:t}){return o.Children.toArray(e).filter(e=>"object"==typeof e&&void 0!==e.type).filter(e=>e.type===t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(511),a=n(191);t.MarkdownWidget=class extends o.Component{render(){const{props:e}=this;return o.createElement(a.MarkdownWidgetSrc.Consumer,null,t=>o.createElement(a.MarkdownWidgetState.Consumer,null,n=>o.createElement(r.WidgetFrame,{srcDoc:i({code:e.code,widgetSrc:t,widgetState:n}),src:"/"})))}};const i=e=>["<!doctype html>","<html>","<head>",`<script src="${e.widgetSrc}"><\/script>`,"</head>","<body>","<div data-widget-mount></div>",'<textarea data-widget-state style="display: none;">',encodeURIComponent(JSON.stringify({state:e.widgetState,code:e.code})),"</textarea>","</body>","</html>"].join("")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(49),i=n(111),l=r.default.div`
  grid-column: first / span 12;
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 0 16px;
  margin-bottom: 16px;
  background: ${e=>e.theme.colors.backgroundSecondary};
  overflow: hidden;
`;t.MarkdownCodeBlock=(e=>{const t=a(e.children);return o.createElement(l,null,o.createElement(i.Code,{block:!0,language:e.language,highlights:e.highlights},t))})},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(525)),o(n(524)),o(n(523)),o(n(522)),o(n(152)),o(n(521)),o(n(520)),o(n(519)),o(n(518)),o(n(517)),o(n(516)),o(n(515)),o(n(151)),o(n(506)),o(n(504))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(703),i=n(618),l=n(67),s=n(612),c=n(610),u=n(609),d=n(585),f=n(568),p=n(564),h=n(563),m=n(153);var g=n(153);t.MarkdownList=g.MarkdownList,t.MarkdownItem=g.MarkdownItem,t.MarkdownLink=g.MarkdownLink,t.MarkdownWidgetSrc=o.createContext(""),t.MarkdownWidgetState=o.createContext({});t.Markdown=class extends o.Component{constructor(){super(...arguments),this.processor=a().use(i).use(c.remarkVideo).use(s,{details:{title:"optional",details:!0},grid:{title:"optional"},"grid-column":{title:"required"}}).use(l).use(u,{handlers:{gridCustomBlock:h.gridHandler,video:h.videoHandler}}).use(f,p.sanitize).use(d,{createElement:o.createElement,components:{a:m.MarkdownLink,div:m.MarkdownDiv,blockquote:m.MarkdownBlockquote,code:m.MarkdownCode,h1:b({order:1,linkable:!0})(m.MarkdownHeadline),h2:b({order:2,linkable:!0})(m.MarkdownHeadline),h3:b({order:3,linkable:!0})(m.MarkdownHeadline),h4:b({order:4})(m.MarkdownHeadline),h5:b({order:4})(m.MarkdownHeadline),h6:b({order:4})(m.MarkdownHeadline),hr:m.MarkdownHr,img:m.MarkdownImage,li:m.MarkdownItem,p:m.MarkdownCopy,pre:m.MarkdownPre,ul:v("ul")(m.MarkdownList),ol:v("ol")(m.MarkdownList),details:m.MarkdownDetails,"x-grid":e=>o.createElement(m.MarkdownDiv,{grid:!0},e.children),"x-grid-column":m.MarkdownDiv,"x-video":m.MarkdownVideo}})}render(){const{props:e}=this,n=this.processor.processSync(e.source).contents;return this.props.widgetState,this.props.widgetSrc,o.createElement(y,{className:e.className},o.createElement(t.MarkdownWidgetSrc.Provider,{value:this.props.widgetSrc},o.createElement(t.MarkdownWidgetState.Provider,{value:this.props.widgetState},e.source&&n)))}};const y=r.default.div`
  & table {
    text-align: left;
    display: block;
    width: 100%;
    overflow: auto;
    margin: 0 0 16px 0;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 18px;
    line-height: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  & tr {
    color: ${e=>e.theme.colors.color};
    border-top: 1px solid ${e=>e.theme.colors.border};
    background: transparent;
  }
  & tbody tr:nth-child(odd) {
    background: ${e=>e.theme.colors.backgroundTertiary};
  }
  & th {
    font-weight: 600;
  }
  & th,
  & td {
    padding: 20px 16px;
    border: 1px solid ${e=>e.theme.colors.border};
    vertical-align: top;
  }
`;function v(e){return t=>n=>o.createElement(t,Object.assign({as:e},n))}function b(e){return t=>n=>o.createElement(t,Object.assign({},n,e))}},function(e,t,n){const o=n(0),r=n(1).default;function a(e){return o.createElement(i,null,e.children)}e.exports=a,a.defaultProps={children:[]};const i=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px 15px;
  background-color: ${e=>e.theme.colors.backgroundSecondary};
  box-sizing: "border-box";
`},function(e,t,n){const o=n(0),r=n(36).default,a=n(113),i=n(1).default,l=n(211),s=n(67),c=n(23).Icon,u=n(20).Link,d=l().use(s);e.exports=class extends o.Component{constructor(...e){super(...e),this.getRef=this.getRef.bind(this)}getRef(e){this.ref=e}componentDidMount(){this.props.active&&this.ref&&setTimeout(()=>{this.props.onScrollRequest({target:this.ref,props:this.props})})}componentWillUpdate(e){"folder"!==this.props.type&&e.active&&this.ref&&this.props.onScrollRequest({target:this.ref,props:e})}render(){const{props:e}=this,t=e.title||`Navigate to ${e.name} ${e.type}`,n=e.active?e.symbolActive:e.symbol;return d.processSync(e.name).contents,o.createElement(m,{active:e.active,className:e.className,ref:this.getRef,type:e.type},o.createElement(y,{active:e.active,external:e.external,onClick:e.onClick,href:e.href,sticky:"folder"===e.type&&e.active,type:e.type,title:t,nested:e.nested,iconSize:"s",grow:!0,hint:!0},n&&o.createElement(f,{active:e.active,size:"m",symbol:n}),o.createElement(p,null,e.name),e.meta&&o.createElement(h,{active:e.active},e.meta)),e.active&&e.children)}};const f=i(c)`
  flex: 0 0 auto;
  fill: ${e=>e.theme.colors.color};
  ${e=>e.active&&`fill: ${a(e.theme.colors.active)}`};
  padding: 10px 0 10px 9px;
`,p=i.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  padding: 10px;
`,h=i.div`
  flex: 1 0 auto;
  margin: 0 ${e=>e.active?6:10}px 0 auto;
`,m=i.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: 1px;
`,g=r(["active","type"])(u),y=i(g)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  font-size: ${e=>e.theme.fonts.fontSize}px;
  line-height: 20px;
  font-family: ${e=>e.theme.fonts.default};
  font-weight: ${e=>e.theme.fonts.fontWeight};
  padding-left: ${e=>e.nested?30:0}px;
  :link,
  :visited {
    color: ${e=>e.theme.colors.color};
    ${e=>e.active&&`color: ${a(e.theme.colors.active)}`};
  }
`},,,,,,,,,,,,,,,,,,,function(e,t,n){const o=n(0),r=n(1).default,a=n(36).default,i=n(103),l=n(193),s=n(112).Flag;e.exports=function(e){return o.createElement(c,{className:e.className,visible:e.visible,"data-toggle-name":e.name,"data-toggle-enabled":e.visible},e.children,(e.data||[]).filter(e=>"object"==typeof e.manifest).map((t,n)=>{const r=t.manifest.options||{},a=r.hidden||!1,s=p(t),c=f(t),h=function(e){if("string"==typeof e.manifest.name&&e.manifest.name)return e.manifest.name;if("string"==typeof e.manifest.displayName&&e.manifest.displayName)return encodeURIComponent(e.manifest.displayName.replace(/[^\w]/g,"-").toLowerCase());return encodeURIComponent(e.id.replace(/[^\w]/g,"-").toLowerCase())}(t),m="true"===(e.query||{})[`${h}-enabled`];switch(t.type){case"folder":return o.createElement(o.Fragment,{key:t.id},o.createElement(i,{visible:(t.children||[]).length>0,enabled:m,name:h,highlight:!1,size:"M"},t.manifest.displayName||t.manifest.name),o.createElement(u,{"data-toggle-name":h,"data-toggle-enabled":(t.children||[]).length>0&&m,visible:(t.children||[]).length>0&&m},(t.children||[]).map((t,n)=>o.createElement(l,{key:t.id,active:t.active,href:t.href,id:t.id,meta:(t.warnings||[]).map(e=>o.createElement(d,{key:e.value,warning:e})),name:t.manifest.displayName,nested:!0,onClick:e.onItemClick,onScrollRequest:e.onScrollRequest,prefix:e.prefix,symbol:p(t),symbolActive:f(t),type:t.type}))));case"item":return o.createElement(l,{key:t.id,active:t.active,hidden:a,href:r.href||t.href,external:Boolean(r.href),id:t.id,meta:(t.warnings||[]).map(e=>o.createElement(d,{key:e.value,warning:e})),name:t.manifest.displayName,onClick:e.onItemClick,onScrollRequest:e.onScrollRequest,prefix:e.prefix,symbol:s,symbolActive:c,type:t.type})}}))};const c=r(a(["visible"])("div"))`
  display: ${e=>e.visible?"block":"none"};
  &[data-toggle-enabled="false"] {
    display: none;
  }
  &[data-toggle-enabled="true"] {
    display: block;
  }
`,u=r(a(["visible"])("div"))`
  display: ${e=>e.visible?"block":"none"};
  &[data-toggle-enabled="false"] {
    display: none;
  }
  &[data-toggle-enabled="true"] {
    display: block;
  }
`;function d(e){switch(e.warning.type){case"flag":default:return o.createElement(s,{title:e.warning.message},e.warning.value)}}function f(e){return"item"===e.type?null:e.manifest.options.iconActive?e.manifest.options.iconActive:"folder"===e.type?"arrow-down":null}function p(e){return"item"===e.type?null:e.manifest.options.icon?e.manifest.options.icon:"folder"===e.type?"arrow-right":null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(794))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(20);t.SearchTrigger=function(e){return o.createElement(r.Link,{className:e.className,query:{"search-enabled":!0,search:`${e.field}=${e.search}`},title:`Search other patterns with ${e.field} "${e.search}"`},e.children)}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(215),r=n(49);t.versionColor=(e=>{const t=r(e.children);return o.valid(t)?o.satisfies(t,"<=0.1")?e.theme.colors.error:o.satisfies(t,"> 0.1 < 1")?e.theme.colors.warning:e.theme.colors.success:e.theme.colors.error}),t.has=function(e){return Array.isArray(e)&&e.length>0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(804))},,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(843))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(845))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(851);t.Symbol=(e=>{const t=Array.isArray(e.definition)?e.definition:[e.definition];return e.emit?o.createElement("g",{style:e.style},t.map(e=>o.createElement(r.Path,{key:e,definition:e}))):o.createElement(o.Fragment,null,t.map(e=>o.createElement(r.Path,{key:e,definition:e})))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r={d:"m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z",transform:"rotate(90, 12.1536, 12.0025)"},a=["M11.988 1.333C6.08 1.333 1.274 6.14 1.274 12.047c0 5.908 4.806 10.714 10.714 10.714s10.714-4.806 10.714-10.714c0-5.907-4.807-10.714-10.714-10.714zm0 19.78c-5 0-9.066-4.067-9.066-9.066s4.067-9.065 9.066-9.065 9.065 4.066 9.065 9.065-4.067 9.066-9.065 9.066z","M17.232 6.802a.824.824 0 0 0-1.165 0l-4.08 4.08-4.079-4.08a.824.824 0 1 0-1.165 1.166l4.08 4.08-4.08 4.079a.824.824 0 1 0 1.165 1.165l4.08-4.08 4.079 4.08a.82.82 0 0 0 1.165 0 .824.824 0 0 0 0-1.165l-4.08-4.08 4.08-4.079a.824.824 0 0 0 0-1.166z"],i=[{d:"m20.35093,4.63239l-7.85822,7.85822a0.69591,0.69591 0 0 1 -0.98402,-0.98402l7.85822,-7.85822l-5.27918,0a0.69591,0.69591 0 0 1 0,-1.39182l6.9591,0a0.69591,0.69591 0 0 1 0.69591,0.69591l0,6.95911a0.69591,0.69591 0 0 1 -1.39182,0l0,-5.27918zm-12.52639,0.4078l-3.48095,0c-1.15243,0 -2.08634,0.93113 -2.08634,2.08216l0,12.53892c0,1.14825 0.94505,2.08216 2.09052,2.08216l12.51943,0a2.08773,2.08773 0 0 0 2.09051,-2.09052l0,-3.47677a0.69591,0.69591 0 0 0 -1.39182,0l0,3.47677a0.69591,0.69591 0 0 1 -0.69869,0.6987l-12.51943,0a0.70148,0.70148 0 0 1 -0.69869,-0.69035l0,-12.53892c0,-0.38136 0.31038,-0.69034 0.69452,-0.69034l3.48095,0a0.69591,0.69591 0 0 0 0,-1.39182z",fillmode:"nonzero"}],l="M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2",s=["M13.836 15.767h-.749c-.05 0-.105 0-.155-.01a3.425 3.425 0 0 1-.935-.151 3.772 3.772 0 0 1-1.918-1.346 3.146 3.146 0 0 1-.321-.502 2.998 2.998 0 0 1-.216-.502c-.146-.393-.222-.814-.222-1.256s.076-.864.222-1.256h1.37c.096 0 .186.01.277.03a2.264 2.264 0 0 0 0 2.45c.1.152.216.293.351.418.136.13.286.241.457.337.321.176.693.281 1.09.281h3.516c1.245 0 2.26-1.014 2.26-2.26s-1.015-2.26-2.26-2.26h-1.487a4.758 4.758 0 0 0-1.28-1.507h2.767a3.768 3.768 0 0 1 0 7.534h-2.767z","M12.46 10.358a2.156 2.156 0 0 0-.462-.336 2.198 2.198 0 0 0-1.085-.282H7.397c-1.245 0-2.26 1.014-2.26 2.26s1.015 2.26 2.26 2.26h1.492c.316.587.753 1.1 1.275 1.507H7.397a3.768 3.768 0 0 1 0-7.534h3.516c.055 0 .105 0 .156.01.321.005.632.06.929.15a3.73 3.73 0 0 1 1.918 1.347c.13.16.236.326.327.502.085.16.16.326.216.502.146.391.22.814.22 1.256s-.074.863-.22 1.255h-1.371a1.19 1.19 0 0 1-.276-.03c.23-.351.361-.773.361-1.225a2.223 2.223 0 0 0-.714-1.642z"],c=["M12.002 20.426a1.264 1.264 0 0 1-.675-.189l-9.05-5.63a.86.86 0 1 1 .906-1.455l8.819 5.494 8.815-5.494a.86.86 0 1 1 .906 1.456l-9.047 5.643a1.267 1.267 0 0 1-.674.175z","M12 17.055a1.244 1.244 0 0 1-.657-.185l-8.886-5.545a1.193 1.193 0 0 1 0-2.023l8.886-5.542a1.25 1.25 0 0 1 1.314 0l8.886 5.542a1.193 1.193 0 0 1 0 2.023l-8.886 5.541a1.24 1.24 0 0 1-.657.19zm-7.99-6.742l7.99 4.98 7.99-4.98L12 5.334l-7.99 4.98z"],u=["M12 3c-1.39 0-2.7.324-3.874.886.355.357.608.807.75 1.305.952-.436 2.008-.69 3.124-.69 4.135 0 7.5 3.367 7.5 7.5s-3.365 7.5-7.5 7.5-7.5-3.363-7.5-7.5c0-1.114.252-2.17.69-3.123-.497-.14-.947-.395-1.304-.75C3.324 9.3 3 10.612 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9","M13.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5M6 7.5c.828 0 1.5-.672 1.5-1.5S6.828 4.5 6 4.5 4.5 5.172 4.5 6 5.172 7.5 6 7.5"],d=["M7.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z","M12.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z"],f=["M16.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L11.947 8.29l1.06-1.06 3.54 3.54z","M11.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L6.947 8.29l1.06-1.06 3.54 3.54z"],p=[{d:"M20 18H4V9h5v3h11v6zM10.5 7.5v-3h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11z"}],h=["M18.375 16.625h-9v-13h9v13zm-10.5-14.5v15c0 .552.447 1 1 1h11v-16h-12z","M14.125 20.375h-8.25c-.137 0-.25-.112-.25-.25V6.875h1.25v-1.5h-2.75v14.75c0 .965.786 1.75 1.75 1.75h9.75v-2.75h-1.5v1.25z",{tagName:"circle",cx:14,cy:6.5,r:1.5},"M14.75 9h.75v1.5h-.75v3H16V15h-4v-1.5h1.25v-3h-.75V9h.75v-.004h1.5V9z"],m=["M19.98 10.99l-2.647-5.295c-.385-.77-1.158-1.248-2.02-1.248h-6.63c-.858 0-1.633.48-2.018 1.248L4.018 10.99c-.156.313-.238.66-.238 1.01s.082.697.237 1.01l2.648 5.295c.385.77 1.16 1.248 2.02 1.248h6.63c.86 0 1.633-.48 2.018-1.247l2.647-5.296c.156-.312.24-.66.24-1.01s-.083-.697-.24-1.01zm-1.34 1.35l-2.648 5.295c-.127.256-.39.418-.677.418h-6.63c-.287 0-.55-.162-.677-.418L5.36 12.34c-.053-.11-.08-.225-.08-.34 0-.116.026-.23.08-.338l2.647-5.297c.128-.256.39-.418.677-.418h6.63c.287 0 .55.162.677.418l2.65 5.297c.053.106.08.222.08.338 0 .115-.027.23-.08.34z",{tagName:"circle",cx:12,cy:15,r:1.5},"M11.25 7.474h1.5v4.5h-1.5z"],g=["M20.5 5.5h-17c-.55 0-1 .45-1 1v11c0 .552.45 1 1 1h17c.552 0 1-.448 1-1v-11c0-.55-.448-1-1-1zM20 17H4V7h16v10z","M8.375 14.25h7.25v1.5h-7.25zm-2.875-6H7v1.5H5.5zm2.875 0h1.5v1.5h-1.5zm2.875 0h1.5v1.5h-1.5zm5.75 0h1.5v1.5H17zm-2.875 0h1.5v1.5h-1.5zm-4.313 3h1.5v1.5h-1.5zm2.876 0h1.5v1.5h-1.5zm-7.188 0h2.938v1.5H5.5zm10.078 0h2.938v1.5h-2.938zm-10.078 3H7v1.5H5.5zm11.516 0h1.5v1.5h-1.5z"],y=[{tagName:"rect",x:0,y:0,width:24,height:24}],v=["M7.86 12.83V11.53c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zm0 5.194v-1.299c0-.24.193-.433.432-.433h12.12c.239 0 .433.194.433.433v1.299c0 .24-.194.432-.432.432H8.292a.433.433 0 0 1-.432-.432zm0-10.388V6.337c0-.24.193-.432.432-.432h12.12c.239 0 .433.193.433.432v1.299c0 .24-.194.433-.432.433H8.292a.433.433 0 0 1-.432-.433zM3.315 13.05v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0 5.194v-1.74a.43.43 0 0 1 .43-.428h1.738a.43.43 0 0 1 .43.429v1.74a.43.43 0 0 1-.43.428H3.744a.43.43 0 0 1-.429-.429zm0-10.388V6.117a.43.43 0 0 1 .43-.429h1.738a.43.43 0 0 1 .43.43v1.738a.43.43 0 0 1-.43.43H3.744a.43.43 0 0 1-.429-.43z"];function b(e){const t=function(e){return Array(e).fill(!0)}(25).map((t,n)=>{const r=n%5,a=(n-r)/5;return(a%2==0?r%2==0:r%2!=0)&&(!!e||(a+1)*(r+1)<=12.5)?function(e){const t=o.omit(e,["width","height","x","y"]),n=`M${e.x},${e.y}h${e.width}v${e.height}h-${e.width}z`;return o.merge({},t,{d:n})}({x:2+4*r,y:2+4*a,width:4,height:4}):null}).filter(Boolean);return[{d:t.map(e=>e.d).join("")}]}t.icons={"arrow-double-left":()=>d,"arrow-double-right":()=>f,"arrow-down":()=>r,"arrow-left":()=>"M9.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z","arrow-right":()=>"m 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z",atoms:()=>u,"checkers-inverted":()=>b(!0),checkers:()=>b(),close:()=>a,code:()=>"M20.54 10.76l-3.313-3.313-.777 1.344 3.03 3.03c.098.1.098.257 0 .354l-3.533 3.538 1.06 1.06 3.536-3.538c.68-.683.68-1.792-.002-2.473zM4.52 11.82L8.05 8.29l-1.06-1.06L3.46 10.76c-.682.683-.683 1.79-.003 2.474l3.316 3.32.777-1.345-3.032-3.036c-.097-.097-.097-.255 0-.353zM7.6 18.12l7.5-12.99 1.3.75-7.5 12.99z",command:()=>g,dark:()=>"M12 16v3.227L5.52 15.15l-.02-6.3L12 4.77V8l-2 2 4 4-2 2zm0-13L4 8.02l.02 7.96L12 21l7.937-5L20 8l-8-5z",dependencies:()=>"M9.453 20.026L6.75 21.378v-4.17l3.256-1.627v3.56c0 .38-.214.73-.553.9m-6.906 0c-.34-.17-.553-.515-.553-.893v-3.55l3.256 1.62v4.17L2.547 20.03zm3.006-7.062c.14-.07.294-.106.447-.106.153 0 .306.036.447.106l2.72 1.36L6 15.906 2.833 14.32l2.72-1.36zm4.57.16L7.12 11.62c-.345-.17-.732-.263-1.118-.263-.386 0-.773.09-1.118.26L1.878 13.12c-.854.423-1.384 1.28-1.384 2.233v3.77c0 .953.53 1.81 1.382 2.237l3.006 1.503c.345.174.732.266 1.118.266.386 0 .773-.09 1.118-.27l3.006-1.505c.852-.427 1.382-1.283 1.382-2.236v-3.77c0-.954-.53-1.81-1.382-2.237m11.33 6.906l-2.704 1.35V17.2l3.256-1.625v3.55c0 .38-.214.728-.553.897m-6.906 0c-.34-.17-.553-.517-.553-.895v-3.55l3.256 1.627v4.17l-2.703-1.353zm3.006-7.064c.14-.07.294-.104.447-.104.153 0 .306.04.447.11l2.72 1.36L18 15.91l-3.167-1.583 2.72-1.36zm4.57.16l-3.005-1.5c-.345-.17-.732-.262-1.118-.262-.386 0-.773.097-1.118.27l-3.006 1.502c-.852.425-1.382 1.28-1.382 2.234v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.17.732.262 1.118.262.386 0 .773-.092 1.118-.264l3.006-1.5c.852-.43 1.382-1.287 1.382-2.24v-3.77c0-.953-.53-1.81-1.382-2.236M8.547 9.53c-.34-.17-.553-.516-.553-.894v-3.55l3.256 1.627v4.17L8.547 9.53zm3.006-7.063c.14-.07.294-.106.447-.106.153 0 .306.04.447.11l2.72 1.36L12 5.41 8.833 3.827l2.72-1.36zm3.9 7.063l-2.703 1.352v-4.17l3.256-1.627v3.55c0 .38-.214.726-.553.895m.67 1.342c.853-.427 1.383-1.283 1.383-2.236V4.864c0-.953-.53-1.81-1.382-2.236l-3.006-1.503C12.773.953 12.386.86 12 .86c-.386 0-.773.093-1.118.265L7.876 2.628c-.852.427-1.382 1.283-1.382 2.236v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.172.732.264 1.118.264.386 0 .773-.1 1.118-.27l3.006-1.51z",documentation:()=>h,doc:()=>h,ecospheres:()=>"M18.052 15.315c0 .287-.162.55-.418.677l-5.296 2.648c-.107.053-.222.08-.338.08-.116 0-.232-.027-.34-.08l-5.295-2.648c-.256-.128-.418-.39-.418-.677v-6.63c0-.287.162-.55.418-.677L11.66 5.36c.108-.053.224-.08.34-.08.116 0 .23.027.338.08l5.296 2.648c.256.128.418.39.418.677v6.63zm.253-8.65L13.01 4.02c-.313-.155-.662-.238-1.01-.238-.35 0-.698.083-1.01.238L5.696 6.666c-.77.385-1.248 1.16-1.248 2.02v6.63c0 .86.478 1.633 1.247 2.017l5.296 2.648c.315.16.66.24 1.01.24s.7-.08 1.01-.235l5.298-2.65c.77-.383 1.247-1.157 1.247-2.017v-6.63c0-.86-.478-1.634-1.247-2.02","external-link":()=>i,environment:()=>"M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2",placeholder:()=>y,"folder-open":()=>p,folder:()=>"M10.5 4.5h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11v-3zM9 6v3h11v9H4V6h5",fullscreen:()=>"M9 3.75v-1.5l-5 .003c-.966 0-1.75.785-1.75 1.75V9h1.5V4.813L8.38 9.44l1.06-1.06-4.63-4.63H9zm-.62 10.81l-4.63 4.626V15h-1.5v4.997c0 .964.785 1.75 1.75 1.75l5 .002v-1.5l-4.19-.005 4.63-4.626-1.06-1.06zM20 2.25l-5-.005v1.5l4.194.003-4.634 4.63 1.06 1.06 4.63-4.624v4.18h1.5V4c0-.966-.785-1.75-1.75-1.75m.25 16.936l-4.63-4.626-1.06 1.06 4.634 4.63-4.194.005v1.5l5-.004c.965 0 1.75-.782 1.75-1.75v-4.993h-1.5v4.18z",globals:()=>l,hamburger:()=>v,home:()=>"M12.055 2l-11 10h1.89v9.02c0 .524.422.95.943.95h7.223V18.2H13v3.77l7.103.03h.008c.524 0 .947-.424.947-.95v-9.01l1.89-.04-10.89-10zm-.005 2.032l7.505 6.892v9.574l-5.055-.023V16.7H9.61v3.77H4.445v-9.525L12.05 4.03",issue:()=>m,light:()=>"M12 8V4.773l6.48 4.078.018 6.3L12 19.23V16l2-2-4-4 2-2zm0 13l8-5.02-.02-7.96L12 3 4.063 8 4 16l8 5z",link:()=>s,molecules:()=>"M6.372 4.75h11.255v1.5H6.372zM12.9 16.172c.32.124.617.31.868.56.12.12.222.248.312.383l5.626-9.143c-.514-.06-.99-.274-1.377-.624l-5.43 8.824zM6.08 6.886c-.09.135-.193.263-.312.382-.25.25-.548.437-.87.56l5.43 8.825c.388-.35.864-.564 1.378-.624L6.08 6.883zm4.86 10.554c-.587.586-.587 1.536 0 2.12.585.587 1.535.587 2.12 0 .586-.584.586-1.534 0-2.12-.585-.586-1.535-.586-2.12 0m10.12-13c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12m-16 0c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12",organisms:()=>"M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.004-1.078-.203-1.495-.524l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567.003 1.083.203 1.5.524l-.01-4.042c-.418.318-.933.515-1.498.516m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-8-4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-1c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5",pattern:()=>"M12.75 18.948v-7.412c.846-.34 2.457-1.153 5.75-2.892v7.43l-5.75 2.874zM5.5 8.588l5.75 2.874v7.486L5.5 16.073V8.588zm6.5-3.91l5.546 2.772c-3.208 1.687-4.896 2.514-5.47 2.75l-5.56-2.78L12 4.676zm7.447 2.046l-7-3.5c-.14-.07-.294-.106-.447-.106-.153 0-.306.035-.447.106l-7 3.5c-.34.17-.553.515-.553.894v8.764c0 .38.214.725.553.894l7 3.5c.14.07.294.106.447.106.153 0 .307-.035.447-.106l7-3.5c.34-.17.553-.515.553-.894V7.618c0-.38-.214-.725-.553-.894",patternplate:()=>c,polymers:()=>"M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.008-1.078-.207-1.495-.528l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567 0 1.083.2 1.5.52l-.01-4.04c-.418.32-.933.514-1.498.515m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238m11.064.152l-4.79 2.392v-5.41c-.238.076-.486.127-.75.127-.262 0-.51-.06-.75-.13v5.44l-4.79-2.4c-.088.51-.327.98-.68 1.34l4.512 2.26-4.502 2.24c.35.36.58.82.67 1.34l4.79-2.397v5.42c.24-.074.48-.127.75-.127s.51.05.75.126v-5.38l4.78 2.394c.077-.516.31-.983.653-1.35l-4.543-2.27 4.56-2.27c-.35-.36-.584-.827-.666-1.343M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m0-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5",react:()=>"M 16.019531 3 C 15.671125 3.00715 15.300981 3.091375 14.921875 3.2324219 C 14.163662 3.5145156 13.340776 4.0384002 12.503906 4.7753906 C 12.340395 4.9193891 12.176009 5.0979185 12.011719 5.2578125 C 11.901617 5.1513016 11.791835 5.0267433 11.681641 4.9277344 C 10.795655 4.1316628 9.9236686 3.5712298 9.125 3.2695312 C 8.7256657 3.1186821 8.3365968 3.0284378 7.9726562 3.0195312 C 7.6087157 3.0106212 7.270437 3.0833582 6.9726562 3.2578125 C 6.3972498 3.5948924 6.0860013 4.2551581 5.9492188 5.0585938 C 5.8124361 5.8620294 5.8476604 6.8442943 6.0605469 7.9453125 C 6.1031041 8.1654193 6.1740595 8.4036874 6.2304688 8.6328125 C 5.97484 8.7063633 5.7047008 8.7722283 5.46875 8.8554688 C 4.432811 9.2209626 3.5945928 9.6796197 2.9921875 10.201172 C 2.3897822 10.722724 2 11.327349 2 11.984375 C 2 12.662118 2.4082566 13.289795 3.0429688 13.839844 C 3.6776808 14.389892 4.5645597 14.878259 5.65625 15.255859 C 5.8317684 15.316571 6.0331245 15.360088 6.21875 15.414062 C 6.1582822 15.66053 6.0832065 15.917073 6.0390625 16.152344 C 5.8346362 17.241844 5.8098143 18.204961 5.9550781 18.992188 C 6.1003415 19.779412 6.4197964 20.423275 6.9863281 20.753906 C 7.5707485 21.094948 8.3167421 21.047508 9.1054688 20.765625 C 9.8941954 20.483741 10.754805 19.951627 11.623047 19.183594 C 11.761961 19.060717 11.898899 18.906452 12.037109 18.771484 C 12.216283 18.945766 12.396455 19.138171 12.574219 19.292969 C 13.405466 20.016801 14.218158 20.522511 14.966797 20.789062 C 15.715436 21.055615 16.430103 21.095246 16.996094 20.763672 C 17.579942 20.42164 17.910332 19.748024 18.0625 18.917969 C 18.214668 18.087913 18.188624 17.069767 17.964844 15.925781 C 17.929929 15.747281 17.867388 15.554788 17.822266 15.371094 C 17.950462 15.332733 18.093563 15.303037 18.216797 15.261719 C 19.34199 14.884455 20.256474 14.401339 20.914062 13.853516 C 21.571651 13.305692 22 12.675711 22 11.984375 C 22 11.316537 21.592337 10.708795 20.972656 10.185547 C 20.352976 9.6622986 19.494727 9.2034761 18.445312 8.8378906 C 18.238082 8.7656964 18.000825 8.7093156 17.779297 8.6445312 C 17.816133 8.4924793 17.870208 8.3318492 17.900391 8.1835938 C 18.13931 7.0099907 18.183182 5.96782 18.042969 5.1191406 C 17.902756 4.2704612 17.578578 3.5803124 16.982422 3.2324219 C 16.694443 3.0643682 16.367938 2.9928547 16.019531 3 z M 16.023438 3.8652344 C 16.246408 3.8595757 16.422746 3.9010322 16.548828 3.9746094 C 16.815675 4.1303292 17.07873 4.5521623 17.195312 5.2578125 C 17.311895 5.9634627 17.281462 6.9169667 17.058594 8.0117188 C 17.032589 8.1394545 16.984815 8.2822106 16.953125 8.4140625 C 16.134284 8.2234679 15.235015 8.0912672 14.294922 8.0019531 C 13.751908 7.2186476 13.191061 6.4913648 12.617188 5.8652344 C 12.768776 5.7177962 12.922862 5.5514965 13.072266 5.4199219 C 13.849433 4.7355084 14.600382 4.2698533 15.220703 4.0390625 C 15.530864 3.9236671 15.800467 3.8708931 16.023438 3.8652344 z M 7.9667969 3.8847656 C 8.204941 3.8916645 8.4921202 3.9495056 8.8222656 4.0742188 C 9.4825566 4.3236447 10.28203 4.8247788 11.107422 5.5664062 C 11.205243 5.6542984 11.305753 5.7681072 11.404297 5.8632812 C 10.828373 6.4891798 10.260402 7.2150849 9.7109375 8 C 8.7742691 8.0878313 7.878881 8.2210717 7.0605469 8.4082031 C 7.0093893 8.1995211 6.9427183 7.979966 6.9042969 7.78125 C 6.7063246 6.7573656 6.6823383 5.8644203 6.7949219 5.203125 C 6.9075054 4.5418297 7.1543156 4.1475862 7.40625 4 C 7.5395435 3.9219104 7.7286527 3.8778668 7.9667969 3.8847656 z M 12.011719 6.4746094 C 12.406433 6.9082361 12.7994 7.4001799 13.1875 7.9238281 C 12.794349 7.9049913 12.404259 7.8808594 12 7.8808594 C 11.601264 7.8808594 11.215567 7.9055035 10.826172 7.9238281 C 11.218061 7.4011371 11.614064 6.9090918 12.011719 6.4746094 z M 12 8.7402344 C 12.62139 8.7402344 13.227614 8.7668454 13.818359 8.8125 C 14.151039 9.3088157 14.475839 9.8245485 14.785156 10.365234 C 15.09578 10.908201 15.379531 11.451329 15.642578 11.990234 C 15.381336 12.536206 15.099335 13.084929 14.787109 13.632812 C 14.47815 14.17496 14.155199 14.694701 13.826172 15.193359 C 13.231026 15.236716 12.621925 15.263672 12 15.263672 C 11.385158 15.263672 10.783354 15.241979 10.195312 15.203125 C 9.857099 14.704207 9.5270761 14.182489 9.2148438 13.636719 C 8.9026472 13.090995 8.6226165 12.543692 8.3652344 12.001953 C 8.6223479 11.459349 8.9033118 10.912375 9.2128906 10.369141 C 9.5231725 9.8246773 9.8493881 9.3072485 10.183594 8.8125 C 10.77474 8.7671354 11.382161 8.7402344 12 8.7402344 z M 9.0917969 8.9335938 C 8.8809698 9.2664173 8.6672078 9.5936441 8.4667969 9.9453125 C 8.26942 10.29166 8.0992881 10.639079 7.921875 10.986328 C 7.6728423 10.387485 7.4513424 9.8008736 7.2792969 9.2402344 C 7.8448649 9.1122912 8.4555981 9.0142998 9.0917969 8.9335938 z M 14.912109 8.9335938 C 15.551594 9.0156474 16.16691 9.1173252 16.734375 9.2480469 C 16.562073 9.8064733 16.34146 10.391171 16.089844 10.988281 C 15.90762 10.63874 15.729215 10.288907 15.529297 9.9394531 C 15.33083 9.5925325 15.120651 9.264526 14.912109 8.9335938 z M 6.4472656 9.4648438 C 6.6951622 10.278405 7.0319189 11.134632 7.4277344 12.003906 C 7.026288 12.886892 6.6864667 13.756169 6.4355469 14.582031 C 6.272336 14.53433 6.0902943 14.49621 5.9375 14.443359 C 4.9277033 14.094085 4.1309727 13.643168 3.6074219 13.189453 C 3.0838711 12.735738 2.859375 12.295484 2.859375 11.984375 C 2.859375 11.681865 3.0645925 11.275878 3.5546875 10.851562 C 4.0447825 10.427248 4.7971191 10.004273 5.7558594 9.6660156 C 5.9674342 9.5913747 6.2155634 9.5317521 6.4472656 9.4648438 z M 17.5625 9.4765625 C 17.761147 9.5349289 17.977705 9.5841952 18.162109 9.6484375 C 19.135811 9.987647 19.909923 10.414765 20.417969 10.84375 C 20.926014 11.272735 21.140625 11.684825 21.140625 11.984375 C 21.140625 12.30116 20.909935 12.739581 20.365234 13.193359 C 19.820534 13.647138 18.990692 14.096108 17.943359 14.447266 C 17.839835 14.481976 17.715549 14.506445 17.607422 14.539062 C 17.350826 13.718687 16.99339 12.85937 16.583984 11.988281 C 16.977973 11.130028 17.315538 10.284009 17.5625 9.4765625 z M 16.097656 12.992188 C 16.360815 13.600657 16.599902 14.199577 16.779297 14.767578 C 16.197615 14.901882 15.568725 15.005518 14.908203 15.085938 C 15.119082 14.747835 15.331463 14.412597 15.533203 14.058594 C 15.735416 13.703757 15.915097 13.347868 16.097656 12.992188 z M 7.921875 13.021484 C 8.1000429 13.369168 8.2716246 13.716461 8.4707031 14.064453 C 8.6760168 14.423334 8.8964141 14.759151 9.1132812 15.099609 C 8.4651932 15.026399 7.8402627 14.934137 7.2675781 14.808594 C 7.4427132 14.236002 7.6671378 13.634621 7.921875 13.021484 z M 16.994141 15.599609 C 17.033614 15.76138 17.090652 15.934214 17.121094 16.089844 C 17.32857 17.150499 17.342782 18.076459 17.216797 18.763672 C 17.090815 19.450885 16.824358 19.868082 16.5625 20.021484 C 16.307877 20.17065 15.861548 20.194868 15.253906 19.978516 C 14.646267 19.762166 13.908649 19.315011 13.138672 18.644531 C 12.976886 18.503647 12.809552 18.324509 12.644531 18.164062 C 13.213719 17.533605 13.768067 16.796304 14.304688 16.009766 C 15.256548 15.924226 16.164838 15.793207 16.994141 15.599609 z M 7.046875 15.644531 C 7.8734712 15.828556 8.7843105 15.944441 9.7285156 16.021484 C 10.281098 16.80836 10.851201 17.535739 11.429688 18.164062 C 11.304718 18.286056 11.178838 18.429245 11.054688 18.539062 C 10.250844 19.250131 9.4655785 19.725022 8.8164062 19.957031 C 8.1672342 20.18904 7.6820257 20.164669 7.4199219 20.011719 C 7.1650564 19.862976 6.9174785 19.478939 6.7988281 18.835938 C 6.6801777 18.192936 6.695132 17.321208 6.8847656 16.310547 C 6.9241429 16.100681 6.9927179 15.866659 7.046875 15.644531 z M 13.201172 16.083984 C 12.816824 16.612397 12.428545 17.113513 12.037109 17.550781 C 11.636336 17.112875 11.235674 16.616934 10.839844 16.089844 C 11.2244 16.104917 11.606956 16.123047 12 16.123047 C 12.406689 16.123047 12.803605 16.101833 13.201172 16.083984 z",reload:()=>"M17.266 6.664C15.91 5.327 14.05 4.5 12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.544-.058-1.074-.168-1.586h1.53C20.95 10.93 21 11.46 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.453 0 4.677.98 6.3 2.572v-.986h1.5v3.578h-3.578v-1.5h1.044zM12 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.828 0 1.5.673 1.5 1.5s-.672 1.5-1.5 1.5z",rulers:()=>"M21 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-.5 8.5H18V13h-1.5v2.5h-2V13H13v2.5h-2V13H9.5v2.5h-2V13H6v2.5H3.5v-7h17z",search:()=>"M8.65 14.248c-.376-.46-.697-.962-.955-1.496-.335-.695-.56-1.44-.668-2.205-.11-.787-.096-1.59.044-2.373.13-.726.37-1.432.71-2.09.75-1.448 1.96-2.636 3.43-3.343.64-.3 1.32-.52 2.02-.64.35-.05.69-.08 1.04-.09h.29c.35.01.7.03 1.04.09.7.11 1.39.32 2.03.62 1.53.717 2.8 1.95 3.55 3.466.32.63.54 1.31.67 2.006.14.78.16 1.584.05 2.37-.106.76-.332 1.51-.667 2.204-.393.81-.933 1.55-1.586 2.174-.675.643-1.472 1.16-2.34 1.515-.895.365-1.862.553-2.832.553s-1.933-.186-2.83-.553c-.684-.28-1.325-.66-1.9-1.13-2.09 2.21-4.294 4.307-6.437 6.464-.09.08-.186.15-.3.187-.1.034-.205.046-.31.035-.072-.01-.145-.03-.213-.058-.308-.13-.497-.455-.454-.79.02-.15.088-.28.184-.395 2.09-2.23 4.3-4.343 6.46-6.506zM14.377 3.5c-.28.006-.56.027-.836.07-.56.085-1.1.25-1.62.49-1.16.542-2.13 1.457-2.74 2.58-.28.518-.48 1.075-.6 1.65-.13.65-.15 1.318-.07 1.974.08.612.25 1.21.52 1.77.31.655.73 1.253 1.25 1.758.54.523 1.17.945 1.86 1.236.715.302 1.486.462 2.26.472.777.01 1.554-.13 2.277-.416.695-.275 1.34-.682 1.885-1.192.53-.492.97-1.08 1.29-1.726.276-.55.464-1.144.557-1.753.1-.63.09-1.273-.01-1.9-.094-.56-.266-1.103-.51-1.613-.58-1.197-1.555-2.185-2.744-2.776-.505-.252-1.047-.43-1.603-.53-.273-.05-.55-.077-.83-.09-.1-.003-.204-.004-.31-.004z"},t.definitions={patternplate:c}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(863),a={injections:r.arrayOf(r.shape({target:r.any,source:r.any}))};class i extends o.Component{getChildContext(){return{injections:this.props.injections}}render(){const{props:e}=this;return o.Children.only(e.children)}}i.childContextTypes=a,t.InjectionProvider=i,t.inject=function(e){const t=(t,n)=>{const r=(Array.isArray(n.injections)?n.injections:[]).find(t=>t.target===e||t.target.RawComponent===e);if(!r)return o.createElement(e,Object.assign({},t),t.children);const a=r.source;return o.createElement(a,Object.assign({},t),t.children)};return t.RawComponent=e,t.contextTypes=a,t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.Global=o.createGlobalStyle`
  html,
  body {
    margin: 0;
  }
`},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r=n(15),a=n(3);t.default=r.handleActions({[a.windowResize]:function(e,{payload:t}){const n={width:t.width,height:t.height};if(!o.isEqual(n,e))return n;return e}},{height:0,width:0})},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(55));t.default=i.default(a.toggleHide,{defaultValue:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.handleActions({"@@router/LOCATION_CHANGE":(e,{payload:t})=>t.query.theme||"light"},"light")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>e)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=n(61);t.default=r.handlePromiseThunkAction(o.loadSchema,{success:(e,t)=>t.payload})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.handleActions({"@@router/LOCATION_CHANGE":function(e,t){return t.payload.query.search},SET_SEARCH:function(e,t){return t.payload},PERFORM_SEARCH:function(e,t){return t.payload}},"")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.handleActions({"@@router/LOCATION_CHANGE":function(e,t){const n=Number(t.payload.query["search-preview"]);return isNaN(n)?0:Math.max(0,n)},PERFORM_SEARCH:function(){return 0}},0)},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(55));t.default=i.default(a.toggleSearch,{defaultValue:!1})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.handleActions({"@@router/LOCATION_CHANGE":function(e,t){return t.payload.query.search},PERFORM_SEARCH:function(e,t){return t.payload}},"")},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(55));t.default=i.default(a.toggleComponentsEnabled,{defaultValue:!1})},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(55));t.default=i.default(a.toggleOpacity,{defaultValue:!1})},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(55));t.default=i.default(a.toggleNavigation,{defaultValue:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10);t.default=((e={},t)=>{switch(t.type){case"LOAD_PATTERN_DEMO_SUCCESS":return t.payload.id in e?o.omit(e,t.payload.id):e;case"LOAD_PATTERN_DEMO_ERROR":return o.merge({},e,{[t.payload.id]:t.payload.error});default:return e}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e=!1)=>e)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(33)),a=o(n(63));t.default=function(e,t="/"){const n=a.default.parse(e),o=(r.default.posix||r.default).relative(t,n.pathname).split("/"),i=o.pop();return[...o,r.default.basename(i,r.default.extname(i))].join("/")}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(275)),a=o(n(84));t.default=a.default({"@@router/LOCATION_CHANGE":function(e,{payload:t},{base:n}){return r.default(t.pathname,n)||"/"}},{dependencies:["base"]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(61),r=n(3);t.default=o.handlePromiseThunkAction(r.loadSchema,{start:()=>!0,success:()=>!1,error:()=>!1},{defaultValue:!1})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={error:null,fetching:!1,id:null,contents:null,updated:null};t.default=function(e=o,t){switch(t.type){case"LOAD_PATTERN_DEMO_START":return{error:null,fetching:!0,id:t.payload.id,contents:e.contents,updated:e.updated};case"LOAD_PATTERN_DEMO_SUCCESS":return{error:null,fetching:!1,id:t.payload.id,contents:t.payload.contents,updated:t.payload.force||e.contents!==t.payload.contents||e.id!==t.payload.id?Date.now():e.updated};case"LOAD_PATTERN_DEMO_ERROR":return{error:!0,fetching:!1,id:t.payload.id,contents:null,updated:Date.now()};default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);function r(e){const t=e.split("/").filter(Boolean),n=["pattern","doc"].map(e=>t.indexOf(e)).find(e=>-1!==e),o=null===n?t.length:n;return t.slice(0,o).filter(Boolean).length}t.getDepth=r,t.default=o.handleAction("@@router/LOCATION_CHANGE",{next:(e,{payload:{pathname:t}})=>r(t)},".")},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(84));function a(e="loading",t,{fetching:n}){return n?"loading":"loaded"}t.default=r.default({LISTEN_HEARTBEAT:(...e)=>a(...e),FETCHING:(...e)=>a(...e),ERROR_HEARTBEAT:()=>"offline"},{defaultValue:"",dependencies:["fetching"]})},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=n(139),r=n(10),a=n(9);t.default=((t,n)=>{let i;switch(n.type){case"LOAD_SCHEMA_SUCCESS":i=r.merge({},n.payload.config);break;default:i=r.merge({},t)}i.hasOwnProperty("ui")||(i.ui={});const{ui:l}=i;l.renderedLogo=l.hasOwnProperty("logo")?o.renderToString(a.svg.render(a.svg.sanitize(a.svg.purge([a.svg.parse(l.logo)]))[0])):"";const s=l.favicon||l.logo;return l.renderedFavicon=e.document&&s?a.svg.png(s):Promise.resolve(""),i})}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>e)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(282)),a=o(n(281)),i=o(n(280)),l=o(n(279)),s=o(n(278)),c=o(n(277)),u=o(n(276)),d=o(n(274)),f=o(n(273)),p=o(n(272)),h=o(n(271)),m=o(n(270)),g=o(n(269)),y=o(n(268)),v=o(n(267)),b=o(n(266)),_=o(n(265)),x=o(n(264)),w=o(n(263)),k=o(n(262)),S=o(n(261)),E=e=>e||{};t.default={base:r.default,config:a.default,connection:i.default,demo:s.default,depth:l.default,fetching:c.default,hideEnabled:k.default,id:u.default,isStatic:d.default,manifest:E,messages:f.default,navigationEnabled:p.default,opacity:h.default,componentsEnabled:m.default,schema:_.default,search:g.default,searchEnabled:y.default,searchPreview:v.default,searchValue:b.default,shortcuts:x.default,startBase:E,staticBase:E,theme:w.default,window:S.default},t.dependencies={connection:((e={})=>e.dependencies||[])(i.default)}},,,,,function(e,t,n){"use strict";(function(e){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=n(26),i=n(50),l=o(n(287)),s=o(n(286)),c=r(n(3)),u=o(n(137)),d=r(n(283));t.default=function(t,n){const o=function(e){return(t,n)=>{switch(n.type){case"@@APPLY_STATE":return e(n.payload,n);default:return e(t,n)}}}(s.default(Object.assign({routing:i.routerReducer},d.default),d.dependencies)),r=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.compose,f=[l.default,i.routerMiddleware(t)],p=a.applyMiddleware(...f),h=u.default(),m=a.createStore(o,Object.assign({},n,{shortcuts:h}),r(p));return function(e,t){e.dispatch(c.listen({url:t.url}))}(m,{url:"/api"}),h(m),m}}).call(this,n(6))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(11),a=o(n(125));var i;t.default=r.connect(e=>({base:e.base,id:e.id,docs:{contents:(e=e,`\n# Nothing found\n\n> Pretty sure these aren't the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at \`${e.routing.locationBeforeTransitions.pathname}\`.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n`)}}))(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(24),r=n(26),a=n(11),i=n(9),l=n(40),s=n(3),c=o.createSelector(e=>e.staticBase,(e,t)=>`${e}/widgets.js`),u=o.createSelector(e=>e.config.ui,e=>i.themes.getThemes(e));function d(e){return r.bindActionCreators({scrollTo:s.scrollTo},e)}t.mapDispatch=d,t.default=a.connect(function(e){const t=e.routing.locationBeforeTransitions;return{base:e.base,hash:t.hash,pathname:t.pathname,query:t.query,widgetSrc:c(e),widgetState:{themes:u(e),base:e.base,pool:l.flat(e)}}},d)(i.Markdown)},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(9),i=n(11),l=n(24),s=n(26),c=o(n(3)),u=r(n(125)),d=r(n(30)),f=n(40);t.default=i.connect(function(e){return{displayName:g(e),doc:m(e),themes:y(e),type:t.selectType(e),isStatic:e.isStatic}},function(e){return s.bindActionCreators({requestScroll:c.scrollTo},e)})(u.default);const p=l.createSelector(e=>e.routing.locationBeforeTransitions.pathname,e=>`\n# Documentation not found\n\n> Pretty sure these aren't the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at \`${e}\`.\n\nYou might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n`),h=l.createSelector(d.default,f.flat,e=>e.id,(e,t,n)=>{if("/"===n){const e=t.find(e=>"doc"===e.contentType);if(e)return e}return e}),m=l.createSelector(h,()=>'\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> – The Voice of Common Sense\n\nCurrently there is no readme data at `./patterns/readme.md`, so we left this\nfriendly reminder here to change that soon.\n\nYou could start right away:\n\n```sh\necho "# Docs\\n This patternplate contains ..." > patterns/readme.md\n```\n\nSome ideas on what to write into your pattern readme\n\n*  Why this Living Styleguide interface exists, e.g. what problems it should solve\n*  What the components in are intended for, e.g. a brand, website or product\n*  The component hierarchy you use, e.g. Atomic Design\n*  Naming conventions\n*  Rules for dependencies\n*  Browser matrix\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).\n',p,(e,t,n)=>e&&e.contents?e.contents:e&&!e.contents?t:n),g=l.createSelector(h,e=>e?e.manifest.displayName:"patternplate");t.selectType=l.createSelector(d.default,e=>e&&e.contents?"doc":e&&!e.contents?"fallback":"not-found");const y=l.createSelector(e=>e.config.color,e=>a.themes.getThemes(e))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9),i=o(n(138));t.default=function(e){return r.default.createElement(s,{enabled:e.enabled,shortcut:e.shortcut},r.default.createElement(l,{symbol:"checkers-inverted"})," ",e.shortcut.toString())};const l=a.styled(a.Icon)`
  fill: ${e=>e.theme.colors.background};
`,s=a.styled(i.default)`
  font-size: 0;
  line-height: 0;
`},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(292)),l=r(n(82)),s=r(n(126)),c=n(83),u=l.default(a.toggleOpacity)(i.default);t.default=s.default(c.skippable(u))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(11),a=o(n(30));t.default=r.connect(function(e){const t=a.default(e);return{id:t?t.id:null}})},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9);t.default=function(e){return r.default.createElement(l,{external:!0,title:`Open pattern demo for "${e.id}" in a new tab`,href:e.href},r.default.createElement(i,{symbol:"fullscreen"}))};const i=a.styled(a.Icon)`
  fill: ${e=>e.theme.colors.background};
`,l=a.styled(a.Link)`
  font-size: 0;
  line-height: 0;
`},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(74)),i=n(11),l=o(n(295)),s=o(n(126)),c=o(n(294)),u=r(n(56)),d=n(83),f=s.default(d.skippable(l.default));t.default=i.connect(e=>{const t=a.default.stringify({reload:!e.isStatic||null});return{href:`${u.selectSrc(e)}?${t}`}})(c.default(f))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=n(11),i=o(n(0)),l=o(n(375)),s=o(n(67)),c=n(9),u=r(n(30)),d=o(n(296)),f=o(n(293)),p=l.default().use(s.default);t.default=a.connect(function(e){return{doc:u.selectContents(e),description:u.selectDescription(e),id:e.id,icon:u.selectIcon(e),type:u.selectType(e),name:u.selectName(e),flag:u.selectFlag(e),tags:u.selectTags(e),version:u.selectVersion(e),screenshot:"true"===e.routing.locationBeforeTransitions.query.screenshot}})(function(e){return i.default.createElement(_,{screenshot:e.screenshot},i.default.createElement(x,null,i.default.createElement(k,null,i.default.createElement(y,null,e.name,i.default.createElement(v,null,"@",e.version)),i.default.createElement(c.ThemeProvider,{theme:c.themes.getThemes().dark},i.default.createElement(w,{orient:"right"},i.default.createElement(S,null,i.default.createElement(f.default,null)),i.default.createElement(S,null,i.default.createElement(d.default,null))))),e.description&&i.default.createElement(b,null,p.processSync(e.description).contents),i.default.createElement(M,null,i.default.createElement(g,{field:"flag",search:e.flag},i.default.createElement(c.Flag,null,e.flag)),i.default.createElement(E,null,e.tags.map((e,t)=>i.default.createElement(g,{key:`${e}-${t}`,field:"tags",search:e},i.default.createElement(c.Tag,null,e))))),"string"==typeof e.doc&&i.default.createElement(O,null,i.default.createElement(c.Markdown,{linkable:!0,source:e.doc}))))});const h=c.styled.span`
  &:not(:first-child) {
    margin-left: 10px;
  }
`,m=c.styled(c.Link)`
  text-decoration: none;
`;function g(e){return i.default.createElement(h,null,i.default.createElement(m,{className:e.className,query:{"search-enabled":!0,search:`${e.field}=${e.search}`},title:`Search other patterns with ${e.field} "${e.search}"`},e.children))}const y=c.styled(e=>i.default.createElement(c.Headline,Object.assign({},e,{as:"h1",order:1})))`
  margin: 0 0 10px 0;
`,v=c.styled(e=>i.default.createElement(c.Headline,Object.assign({},e,{as:"small",order:3})))`
  display: inline-block;
  color: ${e=>e.theme.colors.color};
  margin: 0;
`,b=c.styled(c.Text)`
  color: ${e=>e.theme.colors.recess};
  margin-bottom: 20px;
`,_=c.styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  min-height: 30vh;
  margin-top: 70vh;
  padding: 30px 60px;
  border-top: 1px solid ${e=>e.theme.colors.border};
  background: ${e=>e.theme.colors.background};
`,x=c.styled.div`
  margin: 0 auto;
  max-width: 740px;
`,w=c.styled.div`
  display: flex;
  ${e=>{return`margin-${"right"===e.orient?"left":"right"}: auto`}};
`,k=c.styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  background: white;
`,S=c.styled.div`
  & + & {
    padding-left: 10px;
  }
`,E=c.styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 2px 10px;
  border-left: 1px solid ${e=>e.theme.colors.border};
`,M=c.styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
`,O=c.styled.div`
  margin-top: 30px;
`},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9),i=a.styled.iframe`
  width: 100%;
  height: calc(100% - 30vh);
  border: 0;
`;t.default=function(e){const t="number"==typeof e.updated?`${e.src}?reload=${e.updated}`:e.src;return r.default.createElement(i,{src:t,referrerPolicy:"no-referrer"})}},,,function(e,t,n){"use strict";(function(e,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(0)),i=r(n(69)),l=n(9),s=r(n(36)),c=r(n(379)),u=r(n(377)),d=r(n(376)),f=e.btoa?e.btoa:e=>o.from(e).toString("base64"),p=e=>e.padded?50:0,h=e=>p(e)+(e=>e.navigationEnabled?300:0)(e),m=l.styled(s.default(["checkers","navigationEnabled","padded"])("div"))`
  position: fixed;
  width: calc(100% - ${e=>h(e)+p(e)}px);
  top: ${p}px;
  left: ${e=>h(e)}px;
  right: ${p}px;
  bottom: ${p}px;
  box-sizing: border-box;
  height: 100%;
  &::before {
    content: "";
    display: ${e=>e.checkers?"block":"none"};
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;base64,${e=>f('\n<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">\n  <path stroke-width="1" stroke="#f2f2f2" fill="none" d="M10 6v8M6 10h8"/>\n</svg>\n')}");
    background-size: 20px 20px;
    background-repeat: repeat;
    background-position: 50% 50%;
  }
`,g=l.styled.div`
  height: 100%;
  width: 100%;
`,y=l.styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`,v=l.styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`,b=l.styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  ${e=>e.hidden?"display: none;":""}
  &::after {
    position: absolute;
    top: 0;
    z-index: 2;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: ${e=>e.error?e.theme.colors.error:e.theme.colors.active};
    opacity: 1;
    transition: ${e=>e.error?"none":"transform 1s ease-in-out"};
    ${e=>{switch(e.status){case"entering":return"\n            transform: translateX(-100%);\n          ";case"entered":return`${e=>e.error?"":"transform: translateX(-15%);"}`;case"exiting":return"\n            transition: transform .3s ease-out;\n            transform: translateX(0);\n          ";case"exited":default:return"\n            transform: translateX(-100%);\n            transition: opacity .3s .25s ease-out;\n          "}}};
  }
`,_=l.styled.div`
  height: 100%;
  padding-left: ${e=>e.navigationEnabled?0:60}px;
`;t.default=class extends a.default.Component{constructor(...e){super(...e),this.state={srcdoc:!1}}render(){const{props:e}=this;return"pattern"!==e.contentType?null:"folder"===e.type?a.default.createElement(g,null,a.default.createElement(y,null,a.default.createElement(l.Markdown,{source:e.docs}))):a.default.createElement(a.default.Fragment,null,a.default.createElement(m,{padded:e.screenshot,checkers:e.opacity,navigationEnabled:e.navigationEnabled},a.default.createElement(i.default,{title:[function(e){return e.loading?"Load":e.error?"Error":""}(e),e.displayName].filter(Boolean).join(": ")}),a.default.createElement(c.default,{in:e.loading||e.error,timeout:{enter:1e3,exit:850}},t=>a.default.createElement(b,{hidden:e.screenshot,status:t,error:e.error})),a.default.createElement(v,null,a.default.createElement(_,{navigationEnabled:e.navigationEnabled},a.default.createElement(u.default,{src:e.src,contents:e.contents,loading:e.loading,updated:e.updated})))),a.default.createElement(d.default,null))}}}).call(this,n(6),n(122).Buffer)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=n(11),l=n(26),s=n(24),c=r(n(56)),u=r(n(30)),d=u,f=o(n(380)),p=r(n(3));t.default=i.connect(function(e){return{contents:e.demo.contents,displayName:d.selectName(e),docs:h(e),error:e.demo.error,loading:e.demo.fetching,opacity:e.opacity,src:c.selectSrc(e),type:d.selectType(e),contentType:d.selectContentType(e),updated:e.demo.updated,navigationEnabled:e.navigationEnabled,screenshot:"true"===e.routing.locationBeforeTransitions.query.screenshot}},function(e){return l.bindActionCreators({onChange:p.loadPatternDemo},e)})(class extends a.default.Component{render(){const{props:e}=this;return a.default.createElement(f.default,{contents:e.contents,contentType:e.contentType,docs:e.docs,error:e.error,displayName:e.displayName,loading:e.loading,opacity:e.opacity,src:e.src,type:e.type,updated:e.updated,navigationEnabled:e.navigationEnabled,screenshot:e.screenshot})}});const h=s.createSelector(u.default,d.selectType,d.selectContents,(e,t,n)=>e&&"folder"===e.type?n:"not-found"===t?"\n# Pattern not found\n\n> Pretty sure this is not the component you are looking for.\n\nWe looked everywhere and could not find a single thing.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate)\n":n||"\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> – The Voice of Common Sense\n\nCurrently there is no readme data for this pattern folder.\nWe left this friendly reminder for you to change that soon.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/patternplate/patternplate).\n")},,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(146),a=n(10),i=n(24),l=o(n(382)),s=n(40),c={alpha:0,beta:1,rc:2,stable:3,deprecated:4},u=[{type:"field",key:"version",value:"version",description:"having version of [value]",operators:["=","!=",">",">=","<","<=","^=","~="]},{type:"field",key:"flag",value:"flag",description:"being flagged as [value]",operators:["=","!=",">",">=","<","<=","^=","~="]},{type:"field",key:"tags",value:"tags",description:"having a tag of [value]",operators:["=","!=","^=","~="]},{type:"field",key:"path",value:"path",description:"saved at [value] relative to patternplate.config.js",operators:["=","*="]},{type:"field",key:"is",value:"is",description:"being of type [value]",operators:["=","!="]},{type:"field",key:"has",value:"has",description:"having data of [value]",operators:["=","!="]}],d=[{type:"op",key:"=",description:"exact match"},{type:"op",key:"!=",description:"negated match"},{type:"op",key:">",description:"greater than"},{type:"op",key:">=",description:"greater than or equal"},{type:"op",key:"<",description:"lesser than"},{type:"op",key:"<=",description:"lesser than or equal"},{type:"op",key:"^=",description:"starts with"},{type:"op",key:"~=",description:"contains"},{type:"op",key:"*=",description:"matches"}],f=i.createSelector(s.flat,r.createSearch),p=i.createSelector(f,e=>e.search,(e,t)=>"string"!=typeof t||t.length<3?[]:e(t)),h=i.createSelector(e=>e.searchValue,e=>r.Query.parse(e)),m=i.createSelector(h,e=>(function e(t){switch(t.type){case"string":return t.value;case"and":case"or":default:{const n=t||{},o=n.values||[],r=o[o.length-1];return r?e(r):""}}})(e));const g=i.createSelector(m,e=>u.filter(t=>t.value.startsWith(e))),y=i.createSelector(e=>e.searchValue,m,(e,t)=>0===t.length?null:u.find(e=>t.startsWith(e.value))),v=i.createSelector(m,e=>r.Term.parse(e)),b=i.createSelector(v,y,(e,t)=>t?t.operators.map(e=>d.find(t=>t.key===e)).filter(t=>!e.operators||t.key.includes(e.operators)).map(e=>(e.value=`${t.value}${e.key}`,e)):[]),_=i.createSelector(v,b,(e,t)=>t.find(t=>e.negated?t.key===`!${e.operators}`:t.key===e.operators));t.selectFound=i.createSelector(s.flat,p,(e,t)=>{return a.uniqBy(a.sortBy(t.map(t=>e.find(e=>e.id===t)),"contentType"),"id").map((e,t)=>(e.index=t,e))}),t.selectPatterns=i.createSelector(t.selectFound,e=>e.filter(e=>"pattern"===e.contentType));const x=i.createSelector(s.flat,e=>e.filter(e=>"pattern"===e.contentType)),w=i.createSelector(x,v,y,_,(e,t,n,o)=>{if(!n||!o)return[];switch(n.key){case"has":return[{type:"quality",key:"docs",value:[n.key,o.key,"docs"].join(""),description:"colocated markdown"},{type:"quality",key:"flag",value:[n.key,o.key,"flag"].join(""),description:"flag specified"},{type:"quality",key:"version",value:[n.key,o.key,"version"].join(""),description:"version specified"},{type:"quality",key:"description",value:[n.key,o.key,"description"].join(""),description:"description provided"},{type:"quality",key:"displayName",value:[n.key,o.key,"displayName"].join(""),description:"display name provided"},{type:"quality",key:"tags",value:[n.key,o.key,"tags"].join(""),description:"tag attached"}];case"depends":case"provides":return e.filter(e=>e.id.startsWith(t.value||"")).map(e=>({type:"pattern",key:e.id,value:[n.key,o.key,e.id].join(""),description:`${e.id}`}));case"tags":return a.uniq(a.flatten(e.map(e=>e.manifest.tags))).filter(Boolean).map(e=>({type:"tag",key:e,value:[n.key,o.key,e].join(""),description:e}));case"version":return a.uniqBy(e.filter(e=>e.manifest.version.startsWith(t.value||"")).map(e=>e.manifest.version)).filter(e=>l.default.valid(e)).sort((e,t)=>l.default.gt(e,t)?1:-1).map(e=>({type:"version",key:e,value:[n.key,o.key,e].join(""),description:`${e}`}));case"flag":return a.uniqBy(e.filter(e=>e.manifest.flag.startsWith(t.value||"")).map(e=>e.manifest.flag)).filter(e=>"string"==typeof e).sort((e,t)=>{const n=(c[e]||0)-(c[t]||0);return 0===n?e.localeCompare(t):n}).map(e=>({type:"flag",key:e,value:[n.key,o.key,e].join(""),description:`${e}`}));case"is":return[{type:"is",key:"pattern",value:[n.key,o.key,"pattern"].join(""),description:"is a pattern"},{type:"is",key:"doc",value:[n.key,o.key,"doc"].join(""),description:"is a doc"}];default:return[]}}),k=i.createSelector(v,w,(e,t)=>t.some(t=>t.value===e.raw));t.selectLegend=i.createSelector(h,v,g,y,b,_,w,k,(e,t,n,o,r,a,i,l)=>o?a||t.value?!l&&o&&a?{name:o.key,items:i}:{name:"",items:[]}:{name:"Operators",items:r}:{name:"Fields",items:n}),t.selectDocs=i.createSelector(t.selectFound,e=>e.filter(e=>"doc"===e.contentType)),t.selectSuggestion=i.createSelector(e=>e.searchValue,s.flat,t.selectLegend,(e,t,n)=>{if("string"!=typeof e||0===e.length)return"";const o=t.find(t=>[t.id,t.name,(t.manifest||{}).displayName].some(t=>t&&t.startsWith(e)));if(o)return[o.id,o.name,o.manifest.displayName].find(t=>t&&t.startsWith(e))||"";const r=(n.items||[]).find(t=>t.value.startsWith(e));return r?r.value:null}),t.selectActiveItem=i.createSelector(e=>e,t.selectFound,e=>e.searchPreview,(e,t,n)=>{const o=Math.min(n,t.length-1),r=t[o];return r?Object.assign({},r,{index:o,dependents:[],dependencies:[]}):r})},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=r(n(9));t.default=function(e){return a.default.createElement(i.Search.SearchResult,{active:e.item.id===e.activeId,href:e.item.href,id:e.item.id,index:e.index,icon:e.item.manifest.icon||e.item.type,name:e.item.manifest.displayName,key:e.item.id,onActivate:e.onActivate,onScrollRequest:e.onScrollRequest,type:e.type})}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=r(n(9)),l=o(n(384));t.default=class extends a.default.Component{render(){const{props:e}=this,t=this.props.activeItem?this.props.activeItem.id:void 0,n=e.components.length>0,o=e.docs.length>0;return a.default.createElement(i.Search.SearchResultList,{ref:this.props.getListRef},o>0&&a.default.createElement(i.Search.SearchResultListHeading,null,"Docs (",e.docs.length,")"),e.docs.map(e=>a.default.createElement(l.default,{key:e.id,item:e,activeId:t,onActivate:this.props.onActivate,onScrollRequest:this.props.onScrollRequest,type:"doc"})),n>0&&a.default.createElement(i.Search.SearchResultListHeading,{navigationEnabled:e.navigationEnabled},"Components (",e.components.length,")"),e.components.map(e=>a.default.createElement(l.default,{key:e.id,item:e,activeId:t,onActivate:this.props.onActivate,onScrollRequest:this.props.onScrollRequest,type:"pattern"})))}}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(10),a=o(n(0)),i=n(11);t.default=i.connect(function(e,t){const{query:n}=e.routing.locationBeforeTransitions,o=Object.assign({},n,t.query||{});return{items:r.entries(o).filter(([,e])=>null!==e)}})(function(e){return a.default.createElement("div",null,e.items.map(([e,t])=>a.default.createElement("input",{type:"hidden",key:e,name:e,value:t})))})},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=r(n(9)),l=n(10);t.default=function(e){const t=e.activeItem;switch(t.contentType){case"doc":return a.default.createElement(i.Search.SearchResultPreview,Object.assign({},e),a.default.createElement(i.Markdown,{source:t.contents}));default:return a.default.createElement(i.Search.SearchResultPreview,Object.assign({},e),a.default.createElement(i.InfoPane,{active:!0,demoDependencies:l.values(t.demoDependencies),demoDependents:l.values(t.demoDependents),dependencies:l.values(t.dependencies),dependents:l.values(t.dependents),flag:t.manifest.flag,id:t.id,manifest:JSON.stringify(t.manifest,null,"  "),name:t.manifest.displayName,tags:t.manifest.tags,version:t.manifest.version}))}}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=n(10),l=r(n(9));class s extends a.default.Component{constructor(...e){super(...e),this.handleChange=this.handleChange.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.timer=null,this.onStop=i.debounce(this.props.onStop,1e3)}handleChange(e){e.persist(),this.props.onChange(e),this.onStop(e)}handleKeyDown(e){const{target:t}=e,n=t.value.length>0,o=n&&t.selectionStart===t.value.length;32===e.which&&e.altKey&&e.ctrlKey&&(e.preventDefault(),this.props.onClose()),27!==e.which&&e.stopPropagation(),27===e.which&&n&&(e.preventDefault(),this.props.onClear()),38===e.which&&this.props.onUp(e),39===e.which&&o&&this.props.suggestion&&(e.preventDefault(),this.props.onComplete(this.props.suggestion)),40===e.which&&o&&(e.preventDefault(),this.props.onDown(e))}render(){const e=this.props;return a.default.createElement(l.Search.SearchField,{autoFocus:e.autoFocus,name:e.name,onBlur:e.onBlur,onChange:this.handleChange,onFocus:e.onFocus,onKeyDown:this.handleKeyDown,placeholder:e.placeholder,suggestion:e.suggestion,title:e.title,value:e.value,"data-search":e.mark},e.children)}}s.defaultProps={blur:()=>{},onChange:()=>{},onFocus:()=>{},onUp:()=>{},onDown:()=>{},onBlur:()=>{},onStop:()=>{},value:""},t.default=s},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=r(n(9)),l=o(n(388)),s=o(n(387)),c=o(n(386)),u=o(n(385)),d=()=>{};t.default=class extends a.default.Component{constructor(...e){super(...e),this.handleSubmit=this.handleSubmit.bind(this),this.handleUp=this.handleUp.bind(this),this.handleDown=this.handleDown.bind(this),this.handleActivate=this.handleActivate.bind(this),this.handleScrollRequest=this.handleScrollRequest.bind(this),this.getListRef=this.getListRef.bind(this)}handleScrollRequest(e){if(!this.list)return;const t=this.list.getBoundingClientRect(),n=e.target.getBoundingClientRect();n.bottom>t.bottom&&(this.list.scrollTop=e.target.offsetTop-t.height+n.height),n.top<t.top&&(this.list.scrollTop=e.target.offsetTop-30)}getListRef(e){this.list=e}componentDidMount(){"function"==typeof this.props.onMount&&this.props.onMount()}handleActivate(e){const t=e.target.getAttribute("data-id"),n=[...this.props.docs,...this.props.components].findIndex(e=>e.id===t);n>-1&&this.props.onActivate(n)}handleUp(e){e.stopPropagation(),this.props.activeItem&&this.props.activeItem.index>0&&(e.preventDefault(),this.props.onUp())}handleDown(e){e.stopPropagation();const t=this.props.components.length+this.props.docs.length-2;this.props.activeItem&&t>=this.props.activeItem.index&&this.props.onDown()}handleSubmit(e){e.preventDefault();const{props:t}=this;if(!t.activeItem)return t.onSubmit(e);const{activeItem:n}=t;t.onNavigate(n)}render(){const{props:e}=this,t=e.components.length>0,n=e.docs.length>0;return a.default.createElement(i.Search.Search,{activeItem:e.activeItem,docs:e.docs,enabled:e.enabled,inline:e.inline,onActivate:e.inline?d:this.handleActivate,onClickOutside:e.inline?d:e.onClickOutside,onBlur:e.inline?d:e.onBlur,onChange:e.inline?d:e.onChange,onClear:e.inline?d:e.onClear,onComplete:e.inline?d:e.onComplete,onDown:e.inline?d:this.handleDown,onFocus:e.inline?d:e.onFocus,onStop:e.inline?d:e.onStop,onSubmit:e.inline?d:this.handleSubmit,onUp:e.inline?d:this.handleUp,shortcuts:e.shortcuts,suggestion:e.suggestion},a.default.createElement(i.Search.SearchFieldSlot,null,a.default.createElement(l.default,{autoFocus:!e.inline,linkTo:"/search",mark:!e.inline||null,name:e.inline?"inline-search":"search",onBlur:e.onBlur,onChange:e.onChange,onClear:e.onClear,onClose:e.onClose,onComplete:e.onComplete,onDown:this.handleDown,onFocus:e.onFocus,onStop:e.onStop,onUp:this.handleUp,placeholder:"Search",suggestion:e.suggestion,title:`Search for patterns ${e.shortcuts.toggleSearch.toString()}`,value:e.value},e.enabled&&a.default.createElement(i.Search.SearchClose,{shortcut:e.shortcuts.close,clears:"string"==typeof e.value&&e.value.length>0}))),a.default.createElement(i.Search.SearchLegendSlot,null,a.default.createElement(i.Search.SearchLegend,Object.assign({},e.legend))),a.default.createElement(i.Search.SearchPassThroughSlot,null,a.default.createElement(c.default,{query:{"search-enabled":!0,search:null}})),a.default.createElement(i.Search.SearchResultListSlot,null,a.default.createElement(u.default,{activeItem:this.props.activeItem,components:this.props.components,docs:this.props.docs,getListRef:this.getListRef,onActivate:this.props.onActivate,onScrollRequest:this.handleScrollRequest})),a.default.createElement(i.Search.SearchResultPreviewSlot,null,(t||n)&&a.default.createElement(s.default,Object.assign({},this.props))))}}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=n(11),i=n(26),l=o(n(389)),s=r(n(3)),c=r(n(383));t.default=a.connect(function(e){return{activeItem:c.selectActiveItem(e),base:e.base,components:c.selectPatterns(e).map(e=>e.href.startsWith(".")?e:(e.href=`.${e.href}`,e)),docs:c.selectDocs(e).map(e=>e.href.startsWith(".")?e:(e.href=`.${e.href}`,e)),enabled:e.searchEnabled,legend:c.selectLegend(e),shortcuts:e.shortcuts,suggestion:c.selectSuggestion(e),value:e.searchValue}},function(e){return i.bindActionCreators({onChange:e=>s.search({persist:!1,perform:!1,value:e.target.value}),onClear:()=>s.search({persist:!0,perform:!0,value:""}),onClick:()=>s.toggleSearch({focus:!0}),onClickOutside:()=>s.toggleSearch({focus:!1}),onClose:()=>s.toggleSearch({focus:!1}),onComplete:e=>s.search({persist:!0,perform:!0,value:e}),onFocus:()=>s.toggleSearch({focus:!0}),onMount:()=>s.toggleSearch({sync:!0}),onNavigate:e=>{const t=`${e.contentType}/${e.id}`;return s.patchLocation({pathname:t,query:{"search-enabled":!1}})},onSubmit:e=>(e.preventDefault(),s.search({persist:!0,perform:!0,value:e.target.search.value})),onUp:()=>s.searchPreview("up"),onDown:()=>s.searchPreview("down"),onActivate:e=>s.searchPreview(e),onStop:e=>s.search({persist:!0,perform:!0,value:e.target.value})},e)})(l.default)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9);t.default=function(e){return r.default.createElement(l,{debug:!0,title:`Enable search ${e.shortcut.toString()}`,query:{"search-enabled":!e.enabled}},r.default.createElement(i,{base:e.base,symbol:"search"}),"Search")};const i=a.styled(a.Icon)`
  fill: ${e=>e.theme.colors.color};
`,l=a.styled(a.Link)`
  font-size: 0;
`},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(391)),l=r(n(82));t.default=l.default(a.toggleSearch)(i.default)},function(e,t,n){"use strict";(function(e){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(76)),a={"arrow-up":38,"arrow-right":39,"arrow-down":40,"arrow-left":37,esc:27,space:32,c:67,d:68,e:69,f:70,h:72,i:73,o:79,k:75,l:76,m:77,n:78,r:82,t:84};t.default=class{constructor({action:t,character:n,description:o,modifiers:r}){this.character=n,this.code=a[n],this.action=t,this.key=this.action.key,this.active="document"in e,this.description=o,this.modifiers=r||["ctrlKey","altKey"],this.bind=this.bind.bind(this)}bind(t){if(!this.active)return;const n=e=>{if(this.modifiers.every(t=>e[t]))return e.keyCode===this.code&&void t.dispatch(this.action())};e.addEventListener("message",e=>{try{const t=r.default.parse(e.data);"keydown"===t.type&&n(t.payload)}catch(e){}},!1),e.addEventListener("keydown",e=>{n({altKey:e.altKey,ctrlKey:e.ctrlKey,keyCode:(e.data||e).keyCode})&&e.preventDefault()})}toString(){return`[${[...this.modifiers,this.character].map(e=>e.replace("Key","")).join("+")}]`}}}).call(this,n(6))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9),i=o(n(138));t.default=function(e){return r.default.createElement(l,{enabled:e.enabled,shortcut:e.shortcut},r.default.createElement(a.Icon,{symbol:"hamburger"}),e.shortcut.toString())};const l=a.styled(i.default)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  line-height: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: inherit;
`},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(3)),i=r(n(394)),l=r(n(82));t.default=l.default(a.toggleNavigation)(i.default)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(39)),a=n(11),i=n(50),l=n(26),s=n(9),c=n(3),u=o(n(64)),d=o(n(86));t.default=a.connect(function(e){return{active:e.id,docs:d.default(e),componentsEnabled:e.componentsEnabled,navigation:u.default(e),query:e.routing.locationBeforeTransitions.query}},function(e){return l.bindActionCreators({onItemClick(e){if(e.preventDefault(),!e.currentTarget.href)return{type:"noop"};const t=r.default.parse(e.currentTarget.href);return i.push(`${t.pathname}?${t.query}`)},onLabelClick:e=>c.patchLocation({query:e})},e)})(s.MainNavigation),t.NavigationHeader=s.MainNavigation.NavigationHeader,t.NavigationToolbar=s.MainNavigation.NavigationToolbar},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9);t.default=function(e){return r.default.createElement(i,null,r.default.createElement(l,null,e.message,e.details&&r.default.createElement(s,null,e.summary&&r.default.createElement(c,null,e.summary),e.details)))};const i=a.styled.div`
  background: ${e=>e.theme.colors.error};
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
`,l=a.styled.pre`
  color: #fff;
  max-height: calc(100vh - 160px);
  overflow: scroll;
`,s=a.styled.details`
  margin: 10px 0;
`,c=a.styled.summary`
  outline: none;
  cursor: pointer;
  user-select: none;
`},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=n(11),i=n(24),l=n(83),s=o(n(397)),c=r(n(56));t.default=a.connect(function(e){return{active:p(e),message:d(e),details:f(e),summary:"Details"}})(l.skippable(s.default));const u=i.createSelector(e=>e.messages,c.selectSrc,(e,t)=>(e[t]||"").split("\n").filter(Boolean)),d=i.createSelector(u,e=>e.slice(0,2).map(e=>e.trim()).join("\n")),f=i.createSelector(u,e=>e.length<=2?"":e.join("\n")),p=i.createSelector(d,e=>"string"==typeof e&&""!==e)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(39)),a=o(n(33)),i=o(n(74)),l=n(9),s=n(10),c=n(11),u=n(50),d=n(26),f=n(3),p=o(n(30)),h=n(40);function m(e,t){const n=e.routing.locationBeforeTransitions;return b(t.href)?Object.assign({},t,{external:!0}):Object.assign({},t,{href:g(t,{base:e.base,location:n,item:p.default(e),pool:h.flat(e)})})}function g(e,t){if(!0===e.external||!t.location)return e.href;const n=e.href?r.default.parse(e.href):{pathname:t.location.pathname,query:i.default.stringify(t.location.query)};n.query=i.default.parse(n.query);const o=null===e.query?{}:s.pickBy(Object.assign({},t.location.query,n.query,e.query||t.location.query),(e,n)=>"navigation-enabled"===n?!0!==e&&"true"!==e:!t.location.query.hasOwnProperty(n)||"false"!==e&&"0"!==e&&!!e);if(n.pathname=null!==n.pathname?v(n.pathname,".html"):null,"/"===n.pathname)return r.default.format({pathname:t.base,query:o,hash:e.hash||(n.hash||"#").slice(1)});if(n.pathname&&null!==n.pathname&&(n.pathname.startsWith(`.${t.base}pattern/`)||n.pathname.startsWith(`.${t.base}doc/`))){const a="string"==typeof n.pathname?n.pathname.slice(1):t.location.pathname;return r.default.format({pathname:a,query:o,hash:e.hash||(n.hash||"#").slice(1)})}if(n.pathname&&null!==n.pathname&&(n.pathname.startsWith("./pattern/")||n.pathname.startsWith("./doc/")||n.pathname.startsWith(`.${t.base}pattern/`)||n.pathname.startsWith(`.${t.base}doc/`))){const a="string"==typeof n.pathname?function(e,t){const n=y(e),o=y(t);if(""===o)return`/${n}`;if(o.startsWith(n))return`/${o}`;return`/${[y(e),y(t)].join("/")}`}(t.base,n.pathname.slice(1)):t.location.pathname;return r.default.format({pathname:a,query:o,hash:e.hash||(n.hash||"#").slice(1)})}if(t.item&&!(n.pathname||"").startsWith("/")){const i=(a.default.unix||a.default).join(a.default.dirname(t.item.path),n.pathname||""),l=v(i,".md"),s=t.pool.find(e=>"doc"===e.contentType&&e.path===l);if(s){const t=r.default.parse(s.href);return r.default.format({pathname:v(t.pathname,".html"),query:o,hash:e.hash||(t.hash||"#").slice(1)})}const c=v(i,""),u=t.pool.find(e=>"pattern"===e.contentType&&a.default.dirname(e.path)===c);if(u){const t=r.default.parse(u.href);return r.default.format({pathname:v(t.pathname,".html"),query:o,hash:e.hash||(t.hash||"#").slice(1)})}}return r.default.format({pathname:n.pathname,query:o,hash:e.hash||(n.hash||"#").slice(1)})}function y(e){return e.split("/").filter(Boolean).join("/")}function v(e,t){const n=r.default.parse(e);return"string"==typeof n.pathname&&"/"!==n.pathname&&(n.pathname=[a.default.dirname(n.pathname),`${a.default.basename(n.pathname,a.default.extname(n.path))}${t}`].join("/")),r.default.format(n)}function b(e){const t=r.default.parse(e||"./");return!!t.protocol||(!!(t.pathname||"").startsWith("/api/static/")||void 0)}t.default=c.connect(m,function(e,t){return d.bindActionCreators({onClick(e){if(t.external||b(t.href))return{type:null};e.preventDefault();const n=r.default.parse(e.currentTarget.href);return n.hash&&f.scrollTo(n.hash.slice(1)),u.push([n.path,n.hash].join(""))}},e)})(l.Link.RawLink),t.mapLinkState=m,t.getHref=g},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(9);t.default=function(e){return r.default.createElement(s,{onClick:e.onClick,title:(t=e.status,["loading","loaded"].includes(t)?`Force sync ${e.shortcut.toString()}`:"")},r.default.createElement(c,{size:"s",status:e.status},function(e){switch(e.status){case"error":return"error";case"offline":return"offline";case"loaded":return"synced";case"loading":return"syncing";default:return""}}(e)),r.default.createElement(i,{status:e.status}));var t};const i=a.styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  height: 7.5px;
  width: 7.5px;
  margin-right: 5px;
  border-radius: 50%;
  background: ${e=>"error"===e.status||"offline"===e.status?"rgb(205, 63, 69)":e.theme.colors.active};
  transition: background 0.4s ease-in-out, opacity 0.5s ease-in;
  opacity: ${e=>e.status?1:0};
  cursor: ${e=>e.status?"pointer":""};
  ${e=>(e=e,a.css`
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			height: 12px;
			width: 12px;
			filter: blur(3px);
			background: inherit;
			transform: translate(-50%, -50%);
			opacity: .6;
			${function(e){if("loading"===e.status)return a.css`
    animation: ${d} 1s infinite;
  `}(e)};
		}
	`)};
`;var l;const s=a.styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`,c=a.styled(a.Text)`
  position: absolute;
  right: 20px;
  color: ${e=>e.theme.colors.color};
  ${e=>(function(e){if("loaded"!==e.status)return;return a.css`
    animation: ${u} 1s 0.15s;
    animation-fill-mode: forwards;
  `})(e)};
`;const u=a.keyframes`
	to {
		opacity: 0;
	}
`;const d=a.keyframes`
  from {
    opacity: .6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(.75);
  }
  to {
    opacity: .6;
    transform: translate(-50%, -50%) scale(1);
  }
`},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(26),i=n(11),l=o(n(3)),s=r(n(400));t.default=i.connect(function(e){return{status:function(e){if(e.demo.error)return"error";return e.connection}(e),shortcut:e.shortcuts.reload}},function(e){return a.bindActionCreators({onClick:l.reload},e)})(s.default)},,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(139),i=o(n(69)),l=n(9),s=o(n(254)),c=l.themes.getThemes(),u=["Firefox"];class d extends r.default.Component{constructor(...e){super(...e),this.state={}}componentDidMount(){u.indexOf(s.default.name)>-1||l.svg.png(p(this.props)).then(e=>this.setState({pngHref:e})).catch(e=>{console.error(e),this.setState({pngHref:null})})}componentWillReceiveProps(e){u.indexOf(s.default.name)>-1||l.svg.png(p(e)).then(e=>this.setState({pngHref:e})).catch(e=>{console.error(e),this.setState({pngHref:null})})}render(){const e=p(this.props),t=l.svg.btoa(e);return r.default.createElement(i.default,{link:[...this.state.pngHref?[{rel:"icon",href:this.state.pngHref,type:"image/png"}]:[],{rel:"icon",href:t,type:"image/svg+xml"}]})}}const f=l.styled(d)`
  width: 100%;
  height: auto;
  stroke: ${e=>e.theme.colors.color};
  stroke-width: 0;
  fill: ${e=>e.theme.colors.color};
`;function p(e){if(!e.source)return a.renderToStaticMarkup(r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement(l.Symbol,{definition:l.IconDefinitions.patternplate,emit:!0,style:{fill:function(e){if(e.error)return c.dark.error;return c.dark.active}(e)}})));const[t]=l.svg.purge([l.svg.parse(e.source)]);return l.svg.stringify(t)}t.default=(e=>r.default.createElement(f,Object.assign({},e)))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(11),a=o(n(403));t.default=r.connect(function(e){return{error:e.demo.error,source:e.config.ui.favicon}})(a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(11),r=n(9);t.default=o.connect(function(e){return{source:e.config.ui.renderedLogo}})(r.Logo)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.createAction("WINDOW_RESIZE",({width:e,height:t})=>({width:e,height:t}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(e){return(t,n)=>{const r=e||("dark"===n().theme?"light":"dark");t(o.patchLocation({query:{theme:r}}))}}t.default=r,t.type="TOGGLE_THEME",r.type=t.type},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(t={}){return(n,r)=>{const a=r();if(t.sync)return void function(t){if(!t)return;if(!("document"in e))return;setTimeout(()=>{const t=e.document.querySelector("input[data-search]");if(!t)return;e.document.activeElement!==t&&t.focus();const n=t.value.length;t.setSelectionRange(n,n)},100)}(a.searchEnabled);const i="focus"in t?t.focus:!a.searchEnabled;i||n(o.search({persist:!0,value:function(){if(!("document"in e))return;const t=e.document.querySelector("input[data-search]");if(!t)return;return t.value}()})),n(o.patchLocation({query:{"search-enabled":i,"search-preview":0}}))}}t.default=r,t.type="TOGGLE_SEARCH_ENABLED",r.type=t.type,r.key="search-enabled",r.property="searchEnabled"}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("rulers")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("components-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("opacity")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("network-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("manifest-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("shortcuts")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("info-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("hide-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("doc-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("dependents-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("dependencies-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("console-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=o.toggle("code-enabled")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.createAction("THEME_LOADED")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);t.default=a,t.type="SEARCH_PREVIEW";const r={up:-1,down:1};function a(e){return"number"==typeof e?t=>{t(o.patchLocation({query:{"search-preview":e}}))}:(t,n)=>{const a=n(),i=r[e]||0;t(o.patchLocation({query:{"search-preview":a.searchPreview+i}}))}}a.type=t.type},,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(425)),a=n(3);function i(e){return(t,n)=>{const o=n();t({type:"SET_SEARCH",payload:e.value}),r.default(()=>{e.persist?t(a.patchLocation({query:{search:e.value,"search-preview":o.search===e.value?o.searchPreview:0}})):e.perform&&t({type:"PERFORM_SEARCH",payload:e.value})})}}t.default=i,t.type="SEARCH",i.type=t.type},,function(e,t,n){"use strict";(function(e){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(427));t.default=i,t.type="SCROLL_TO";const a=()=>{};function i(t){const{document:n}=e;if(!n)return a;const o=l(t);if(!o)return a;const i=r.default(o);return i?(i.scrollTop=o.offsetParent.offsetTop,e=>{e({type:"SCROLLED_TO",payload:t})}):a}function l(e){return"string"==typeof e?document.getElementById(e):e}i.type=t.type}).call(this,n(6))},function(e,t,n){"use strict";(function(e){let n,o;function r(t){return(r,a)=>{n||function t(){n=e.requestAnimationFrame(()=>{const e=a();e.scrollDemoX.x!==o.x&&r({type:"SCROLL_DEMO_X",payload:o.x}),e.scrollDemoY.y!==o.y&&r({type:"SCROLL_DEMO_Y",payload:o.y}),t()})}(),o=t}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,t.type="SCROLL_DEMO",r.type=t.type}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(e){return t=>{t(o.patchLocation({query:{width:e.x,height:e.y}}))}}t.default=r,t.type="RESIZE_DEMO",r.type=t.type},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);function a(){return e=>o(this,void 0,void 0,function*(){const t=[()=>o(this,void 0,void 0,function*(){return e(yield Promise.resolve(r.loadSchema()))}),r.loadPatternDemo({force:!0})];yield Promise.all(t.map(e))})}t.default=a,a.type="RELOAD",a.key="",a.property=""},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),r=n(50);function a(e){return(n,a)=>{const i=a(),l=i.routing.locationBeforeTransitions;e.hasOwnProperty("pathname")&&(e.pathname=0===e.pathname.indexOf(i.base)?e.pathname:`${t=i.base,"/"===t.charAt(t.length-1)?t.slice(0,t.length-1):t}/${e.pathname}`),n(r.push(o.merge({},l,e)))};var t}t.default=a,t.type="PATCH_LOCATION",a.type=t.type},function(e,t,n){"use strict";(function(e){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(63)),a=n(30);function i(){return(t,n)=>{if(!e.open)return;const o=n();if("pattern"!==a.selectContentType(o))return;const i=a.selectId(o);if(!i)return;const l=r.default.format({pathname:`${o.base}api/demo/${i}.html`});e.open(l,"_blank")}}t.default=i,t.type="OPEN_FULLSCREEN",i.key="",i.property="",i.type=t.type}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(){return(e,t)=>{const n=t().base;e(o.patchLocation({pathname:n}))}}t.default=r,t.type="OPEN_DOCUMENTATION",r.key="",r.property="",r.type=t.type},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n(121);const o=n(10);t.default=function(t,n){const a=!1===n?r:o.merge({},n,r);return e.fetch(t,a)};const r={headers:{accept:"application/json"},credentials:"include"}}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,{type:n}){if("/"===t)return e;if(!t||!t.startsWith(`${n}/`))return null;const o=new RegExp(`^${n}/`),r=t.replace(o,"").split("/").filter(Boolean);return e.children.find(e=>{console.log(e),(e.path||[]).every((e,t)=>r[t]===e)&&(e.type===n||e.type)})}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(24),a=o(n(64)),i=o(n(436));t.default=function(e,t){return r.createSelector(a.default,t,(t,n)=>n?(n[e]||[]).map(e=>i.default(t,`pattern/${e}.html`,{type:"pattern"})).filter(Boolean):[])}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(438);t.WebSocketClient=class{constructor({src:e,reconnect:t,interval:n}){this.opened=!1,this.ended=!1,this.ee=new o.EventEmitter,this.src=e,this.reconnect=t,this.interval=n}exec(e,t){this.ee.listeners(e).forEach(e=>e(...t))}open(){const e=()=>{this.instance=new WebSocket(this.src),window.addEventListener("beforeunload",this.close),this.instance.addEventListener("open",(...e)=>{this.opened=!0,this.exec("open",e)}),this.instance.addEventListener("close",(...e)=>{window.removeEventListener("beforeunload",this.close),this.opened=!1,this.exec("close",e)}),this.instance.addEventListener("error",(...e)=>{window.removeEventListener("beforeunload",this.close),this.opened=!1,this.exec("error",e)}),this.instance.addEventListener("message",(...e)=>{this.exec("message",e)})};e(),this.reconnect&&(this.loop=setInterval(()=>{this.ended||this.opened||e()},this.interval))}close(){this.ended=!0,this.opened&&this.instance.close()}onOpen(e){this.ee.on("open",e)}onClose(e){this.ee.on("close",e),this.instance.addEventListener("close",e)}onError(e){this.ee.on("error",e),this.instance.addEventListener("error",e)}onMessage(e){this.ee.on("message",e),this.instance.addEventListener("message",e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(439))},function(e,t,n){e.exports=n(440)},function(e,t,n){"use strict";(function(e){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(39)),i=n(441),l=r(n(76)),s=n(61),c=r(n(141)),u=r(n(140)),d=n(3);t.default=s.createPromiseThunkAction("LISTEN",(t,n,r)=>{const{WebSocket:s}=e;if(!s)return;const f=r();if(window.addEventListener("message",e=>{if("string"!=typeof e.data)return;if(0===e.data.indexOf("[iFrameSizer]"))return;const t=function(e){try{return JSON.parse(e)}catch(e){return{}}}(e.data);"navigate"===t.type&&n(d.patchLocation({pathname:[t.itemType,t.id].join("/")}))}),f.isStatic)return;const p=a.default.resolve(f.base,t.url),h=new i.WebSocketClient({src:`ws://${e.location.host}${p}/`,reconnect:!0,interval:1e3});h.open(),h.onOpen(()=>n({type:"LISTEN_HEARTBEAT",payload:{}})),h.onClose(()=>n({type:"ERROR_HEARTBEAT",payload:{}})),h.onError(()=>n({type:"ERROR_HEARTBEAT",payload:{}})),h.onMessage(e=>o(this,void 0,void 0,function*(){const t=l.default.parse(e.data),{type:o,payload:r}=t;switch(o){case"error":return n({type:"ERROR_HEARTBEAT",payload:r});case"start":return n(u.default()),n(c.default({force:!1}));case"done":return n({type:"LISTEN_HEARTBEAT",payload:{}});case"change":return n(u.default());default:throw new TypeError(`Received unknown message of type ${o}`)}}))})}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.createAction("DISMISS_MESSAGE")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.createAction("DISMISS_ALL_MESSAGES")},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(15);t.default=o.createAction("DEMO_CONTENT_RESIZE",({width:e,height:t})=>({width:e,height:t}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(){return e=>{e(o.dismissAllMessages()),e(o.patchLocation({query:{issue:null,lightbox:null,"menu-enabled":null,"network-enabled":null,"search-enabled":null,source:null,"source-expanded":null}}))}}t.default=r,t.type="CLOSE_ALL_THE_THINGS",r.type=t.type},,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(62)),a=n(10),i=o(n(63)),l=n(3);function s(e){return r.default.equal(typeof e,"string","input for changeType action must be of type string"),(t,n)=>{const o=n().routing.locationBeforeTransitions,r=i.default.parse(o.query.source||""),s={type:a.includes(["source","transformed"],e)?e:"source"},c=i.default.format(a.merge({},r,{query:s}));t(l.patchLocation({query:{source:c}}))}}t.default=s,t.type="CHANGE_TYPE",s.type=t.type},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(33)),a=o(n(63)),i=n(3);function l(e){return(t,n)=>{const o=n(),l=o.routing.locationBeforeTransitions,s=a.default.parse(l.query.source),c=s.pathname,u=r.default.extname(c),d=o.pattern.files.some(e=>"demo"===e.concern&&e.type===u.slice(1)),f="index"===e&&d?"source":s.query.type,p=a.default.format({pathname:`${r.default.dirname(c)}/${e}${u}`,query:Object.assign({},s.query,{type:f})});t(i.patchLocation({query:{source:p}}))}}t.default=l,t.type="CHANGE_CONCERN",l.type=t.type},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(456);t.create=function(e){return new o(e,{id:"id",keys:["id","contents","manifest.displayName","manifest.description","manifest.name","manifest.version","manifest.tags","manifest.flag"]})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(215);t.matchVersion=function(e,t){const n=e=>e.manifest.version,r=e=>o.valid(n(e));return t.lower||t.greater||t.startsWith||t.includes?e=>!!r(e)&&o.satisfies(n(e),`${t.operators}${t.value}`):e=>!!r(e)&&o.satisfies(n(e),t.value)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchTags=function(e,t){const n=e=>e.manifest.tags||[];return t.startsWith?t=>n(t).length>0&&n(t).some(t=>t.startsWith(e)):t.includes?t=>n(t).length>0&&n(t).some(t=>t.includes(e)):t=>n(t).includes(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchProvides=function(e,t){const n=e=>(e.dependents||[]).filter(e=>"string"==typeof e);return t.startsWith?t=>n(t).length>0&&n(t).some(t=>t.startsWith(e)):t.includes?t=>n(t).length>0&&n(t).some(t=>t.includes(e)):t=>n(t).includes(e)}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(462);t.matchPath=function(e,t){if(t.matches){const t=(e||"").split(",").filter(Boolean);return e=>{const n="string"==typeof e.path?e.path:"";return t.some(e=>o.isMatch(n,e))}}return t=>t.path===e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchIs=function(e){return t=>t.contentType===e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchHas=function(e){return t=>{switch(e){case"dependencies":return(t.dependencies||[]).length>0;case"dependents":return(t.dependents||[]).length>0;case"description":return Boolean(t.manifest.description);case"displayName":return Boolean((t.rawManifest||{}).displayName);case"doc":case"docs":return"pattern"===t.contentType&&Boolean(t.contents);case"flag":return Boolean((t.rawManifest||{}).flag);case"tag":case"tags":return(t.manifest.tags||[]).length>0;case"version":return Boolean((t.rawManifest||{}).version);default:return!1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={deprecated:0,alpha:1,beta:2,rc:3,stable:4};t.matchFlag=function(e,t){const n=o[e]||0,r=e=>e.manifest.flag,a=e=>o[r(e)]||0;return t.lower?e=>t.equals?a(e)<=n:a(e)<n:t.greater?e=>t.equals?a(e)>=n:a(e)>n:t.startsWith?t=>r(t).startsWith(e):t.includes?t=>r(t).includes(e):t=>r(t)===e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchDepends=function(e,t){const n=e=>(e.dependencies||[]).filter(e=>"string"==typeof e);return t.startsWith?t=>n(t).length>0&&n(t).some(t=>t.startsWith(e)):t.includes?t=>n(t).length>0&&n(t).some(t=>t.includes(e)):t=>n(t).includes(e)}},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(467)),o(n(466)),o(n(465)),o(n(464)),o(n(463)),o(n(460)),o(n(459)),o(n(458))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(468);t.get=function(e,t,n){const r=o.matchDepends(t,n),a=o.matchHas(t),i=o.matchProvides(t,n),l=o.matchFlag(t,n),s=o.matchTags(t,n),c=o.matchVersion(t,n),u=o.matchIs(t),d=o.matchPath(t,n);return n=>{switch(e){case"depends":return r(n);case"flag":return l(n);case"has":return a(n);case"is":return u(n);case"provides":return i(n);case"tag":case"tags":return s(n);case"version":return c(n);case"flag":return l(n);case"path":return d(n);default:return n[e]===t||n.manifest[e]===t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(469))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(470);t.create=function(e){return{search(t){const n=o.get(t.field,t.value,t);return e.filter(e=>"object"==typeof e.manifest).filter(e=>t.negated?!n(e):n(e)).map(e=>e.id)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(471))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(145),r=n(472),a=n(457),i=n(143);t.createSearch=function(e){const t=a.create(e),n=r.create(e);return function(e){const r=o.parse(e);return o.perform(r,e=>{const o=i.parse(e);return o.valid?n.search(o):t.search(o.raw)})}}},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(145);t.Query=o;const r=n(143);t.Term=r,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(473))},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(50),a=o(n(147)),i=n(40);t.default=function(e){return(t,n)=>{const o=n();if(!o.searchEnabled)switch(e){case"right":return o.navigationEnabled?t(a.default()):void 0;case"left":return o.navigationEnabled?void 0:t(a.default());case"up":case"down":default:{if(!o.navigationEnabled)return;const n=e in l?l[e]:l.default,a=i.flat(o),s=a.findIndex(e=>`${e.contentType}/${e.id}`===o.id||"/"===o.id&&"/root"===e.id),c=a[s+n];c&&(t=t,e=>t(r.push(e)))(c.href)}}};var t},t.type="ARROW";const l={up:-1,down:1,default:0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{type:t.type,payload:e}},t.type="@@APPLY_STATE"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);function r(e){return t=>{t(o.patchLocation({query:{"active-node":e}}))}}t.default=r,t.type="ACTIVATE_NODE",r.key="",r.property="",r.type=t.type},,,,function(e,t,n){"use strict";var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(1),i=n(10),l=n(487),s=n(485),c=new l.DOMParser,u=new l.XMLSerializer,d=["fill","filter","stroke","stroke-width"],f={defs:[...d],symbol:["id"],linearGradient:[...d,"id","x1","y1","x2","y2"],stop:["offset","stop-color"],circle:[...d,"cx","cy","r","style"],g:[...d,"x","y"],path:[...d,"d","style"],polygon:[...d,"points"],rect:[...d,"x","y","width","height","style"],svg:["width","height","viewBox","x","y","style","xmlns","xmlns:xlink"]},p=Object.keys(f);function h(e){return`data:image/svg+xml;base64,${s(e)}`}function m(e){const t=c.parseFromString(e,"image/svg+xml"),n=Array.prototype.slice.call(t.childNodes).find(e=>"svg"===e.tagName);return n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n}function g(e){return Array.prototype.slice.call(e).filter(e=>p.indexOf(e.tagName)>-1).map(e=>{e.childNodes=g(e.childNodes);const t=f[e.tagName]||[];for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n];-1===t.indexOf(o.name)&&e.removeAttribute(o.name)}return e})}function y(e){const[t,n,i=[]]=e,{style:l}=n,s=o(n,["style"]),c=a.default(t)`
    ${l};
  `;return r.createElement(c,s,i.map(e=>y(e)))}function v(e){return Array.from(e).filter(e=>e.hasOwnProperty("tagName")).map((e,t)=>[e.tagName,(e=e,n=t,(f[e.tagName]||[]).reduce((t,n)=>{const o=e.attributes.getNamedItem(n),r=i.camelCase(n);return o&&o.specified&&(t[r]=o.value),t},{key:n})),v(Array.from(e.childNodes))]);var t,n}t.btoa=h,t.parse=m,t.png=function(e){return new Promise((t,n)=>{const o=new Image,r=document.createElement("canvas"),a=window.devicePixelRatio||1;r.width=16*a,r.height=16*a;const i=r.getContext("2d");o.onload=(()=>{i.drawImage(o,0,0),t(r.toDataURL("image/png"))}),o.src=h(e)})},t.purge=g,t.render=y,t.sanitize=v,t.stringify=function(e){return u.serializeToString(e)},t.fromSource=function(e){return y(v(g([m(e)]))[0])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.SearchResultPreview=o.default.div`
  flex: 1 1 60%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(19);t.SearchResultListHeading=o.default(r.Text)`
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
  margin: 0;
  font-size: 14px;
  padding: 3px 15px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.color};
  background: ${e=>e.theme.colors.background};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(20),a=n(19);var i;t.StyledSearchLegend=o.default.div`
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.border};
  ${e=>(e=e,`\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: ${e.theme.colors.background};\n\t\t\topacity: 0.975;\n\t\t}\n\t`)};
`,t.StyledSearchLegendBox=o.default.div`
  display: flex;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  position: relative;
  z-index: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`,t.StyledField=o.default(a.Text)`
  padding: 0 10px;
  color: ${e=>e.theme.colors.color};
  &:first-child {
    padding-left: 0;
  }
`,t.StyledLegendName=o.default(t.StyledField)`
  padding-right: 20px;
  font-weight: bold;
  color: ${e=>e.theme.colors.color};
  position: relative;
  z-index: 1;
`,t.StyledFieldLink=o.default(r.Link)`
  white-space:nowrap;
  &:link,
  &:active,
  &:visited,
  &:hover {
    color: ${e=>e.theme.colors.color}
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(491);t.SearchLegend=function(e){return o.createElement(r.StyledSearchLegend,{className:e.className},e.name&&o.createElement(r.StyledLegendName,null,e.name),o.createElement(r.StyledSearchLegendBox,null,e.items.map(e=>o.createElement(r.StyledField,{key:e.key},o.createElement(r.StyledFieldLink,{title:e.description,query:{search:e.value}},e.key)))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(20),i=n(23),l=r.default(a.Link)`
  font-size: 0;
  line-height: 0;
`,s=r.default(i.Icon)`
  fill: ${e=>e.theme.colors.color};
`;t.SearchClose=function(e){const t=e.clears?"Clear":"Close",n=e.clears?{search:null}:{"search-enabled":null};return o.createElement(l,{query:n,title:`${t} search ${e.shortcut.toString()}`},o.createElement(s,{size:"m",symbol:"close"}),t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.SearchResultList=o.default.div`
  flex: 1 0 40%;
  overflow: scroll;
  border-right: 1px solid rgb(26, 24, 68);
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(20),a=n(19);t.StyledResult=o.default.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &:hover {
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
  }
  &:hover {
    opacity: 1;
  }
`,t.StyledResultLink=o.default(r.Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  &:link,
  &:visited,
  &:active {
    color: ${e=>e.active?e.theme.colors.active:e.theme.colors.color};
    text-decoration: none;
  }
`,t.StyledResultLinkText=o.default(a.Text)`
  line-height: 20px;
  color: ${e=>e.active?e.theme.colors.active:e.theme.colors.color};
  text-decoration: none;
`,t.StyledPreviewLink=o.default(r.Link)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: ${e=>e.theme.colors.border};
  opacity: 0;
  &:hover {
    color: ${e=>e.theme.colors.color};
    text-decoration: underline;
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(495),a=n(19);t.SearchResult=class extends o.Component{constructor(){super(...arguments),this.ref=null,this.saveRef=(e=>{this.ref=e})}componentWillUpdate(e){e.active&&this.ref&&this.props.onScrollRequest({target:this.ref})}render(){const e=this.props;return o.createElement(r.StyledResult,{ref:this.saveRef,title:`Navigation to pattern ${e.name}`,"data-id":e.id},o.createElement(r.StyledResultLink,{active:e.active,href:e.href,query:{"search-enabled":!1}},o.createElement(r.StyledResultLinkText,{active:e.active},e.name)),o.createElement(r.StyledPreviewLink,{active:e.active,query:{"search-preview":e.index}},o.createElement(a.Text,null,"Preview")))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(23);t.StyledSearchField=o.default.label`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 15px;
`,t.StyledIcon=o.default(r.Icon)`
  flex-grow: 0;
  flex-shrink: 0;
  fill: ${e=>e.theme.colors.color};
`,t.StyledInput=o.default.input`
  position: relative;
  z-index: 2;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: ${e=>e.theme.colors.color};
  padding: 0;
  appearance: none;
  border-radius: 0;
  border: none;
  :focus {
    outline: none;
  }
`,t.StyledInputContainer=o.default.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  margin-left: 10px;
`,t.StyledInputSuggestion=o.default(t.StyledInput).attrs({readOnly:true})`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(497);t.SearchField=class extends o.Component{constructor(){super(...arguments),this.ref=null,this.saveRef=(e=>{this.ref=e})}componentDidMount(){if(this.props.autoFocus&&this.ref){const e=this.props.value.length;if("INPUT"===this.ref.tagName){const t=this.ref;t.focus(),t.setSelectionRange(e,e)}}}render(){const{props:e}=this;return o.createElement(r.StyledSearchField,null,o.createElement(r.StyledIcon,{symbol:"search"}),o.createElement(r.StyledInputContainer,null,o.createElement(r.StyledInputSuggestion,{value:e.suggestion||""}),o.createElement(r.StyledInput,{autoComplete:"off",autoFocus:e.autoFocus,name:e.name,onBlur:e.onBlur,onChange:e.onChange,onFocus:e.onFocus,onKeyDown:e.onKeyDown,placeholder:e.placeholder,title:e.title,type:"text",value:e.value,"data-search":e.mark,ref:this.saveRef})),e.children)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SEARCH_HEIGHT="55vh",t.SEARCH_FIELD_HEIGHT="80px",t.SEARCH_LEGEND_HEIGHT="30px"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(23),a=n(499);var i;t.StyledResults=o.default.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  max-height: calc(
    ${a.SEARCH_HEIGHT} - ${a.SEARCH_FIELD_HEIGHT} - ${a.SEARCH_LEGEND_HEIGHT}
  );
`,t.StyledFormBox=o.default.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: all;
  overflow: hidden;
  margin: ${e=>e.inline?"calc(12.5vh - 30px) 0 60px 0":"0"};
  opacity: ${e=>e.inline&&e.enabled?"0":"1"};
`,t.StyledForm=o.default.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  width: 100%;
  max-height: ${a.SEARCH_HEIGHT};
  ${e=>(e=e,`\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: ${e.theme.colors.background};\n\t\t\topacity: 0.975;\n\t\t}\n\t`)};
`,t.StyledResultList=o.default.div`
  flex: 1 0 40%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
  border-right: 1px solid ${e=>e.theme.colors.border};
`,t.StyledIcon=o.default(r.Icon)`
  flex: 0 0 auto;
  fill: ${e=>e.active?e.theme.colors.active:e.theme.colors.color};
  margin-right: 10px;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(500),a=n(150),i=n(149),l=function(){};t.Search=function(e){const t=a.withSlot(e.children,{slot:a.SearchResultListSlot}),n=a.withSlot(e.children,{slot:a.SearchResultPreviewSlot}),s=a.withSlot(e.children,{slot:a.SearchFieldSlot}),c=a.withSlot(e.children,{slot:a.SearchLegendSlot}),u=a.withSlot(e.children,{slot:a.SearchPassThroughSlot});return o.createElement(r.StyledFormBox,{enabled:e.enabled,inline:e.inline,onClick:e.inline&&!e.enabled?e.onFocus:l},o.createElement(r.StyledForm,{onSubmit:e.onSubmit,method:"GET"},o.createElement(i.SearchFieldBox,{onClick:e.inline?e.onClick:l},s,u,o.createElement("input",{type:"submit",style:{display:"none"}})),c,o.createElement(r.StyledResults,null,t,n)))}},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(501)),o(n(498)),o(n(496)),o(n(494)),o(n(150)),o(n(493)),o(n(492)),o(n(149)),o(n(490)),o(n(489))},function(e,t,n){e.exports=n(502)},function(e,t,n){"use strict";var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),a=n(1),i=a.default.video`
  width: auto;
  max-width: 100%;
`,l=a.default.div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
  max-width: 100%;
  margin-bottom: 16px;
  width: ${e=>e.width};
`,s=a.default.iframe`
  position: absolute;
	top: 0;
  right: 0;
  bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
  border: none;
  margin-bottom: 16px;
`;var c;function u(e,t){return void 0===e?t:e}t.MarkdownVideo=(e=>{const t=void 0===(c=e.controls)?!0:"true"===c,n=u(e.autoPlay,!1),a=u(e.loop,!1),d=u(e.playsInline,!1),f=u(e.muted,!1);if("youtube"===e.provider){const t=e.src.split("/").filter(Boolean),n=(t[t.length-1]||"").split("?")[0];return r.createElement(l,{width:e.width},r.createElement(s,{src:`https://www.youtube-nocookie.com/embed/${n}/`,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))}if("vimeo"===e.provider){const t=e.src.split("/").filter(Boolean),n=(t[t.length-1]||"").split("?")[0];return r.createElement(l,{width:e.width},r.createElement(s,{src:`https://player.vimeo.com/video/${n}/`,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))}const{provider:p,src:h,controls:m}=e;o(e,["provider","src","controls"]);return r.createElement(i,{src:e.src,controls:t,autoPlay:n,loop:a,playsInline:d,muted:f})})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(505),a=n(151),i=n(152),l=n(49);function s({children:e}){const t=e[0];if(!t)return[];const n=t.props.className;return n?n.split(" ").map(e=>e.replace("language-","")):[]}t.MarkdownPre=class extends o.Component{render(){const{props:e}=this,[t]=function({children:e}){const t=s({children:e}).map(e=>e.replace(/\{[\d\-,\s]*\}$/,"")).find(e=>"string"==typeof e&&e.length>0);return t?t.split(":"):[]}(e),[n]=function({children:e}){return s({children:e}).map(e=>e.match(/\{([\d\-,\s]*)\}$/)).map(e=>null!==e?e[1]:"").map(e=>r.parse(e))}(e);return"widget"===t?o.createElement(a.MarkdownWidget,{code:l(e.children)}):o.createElement(i.MarkdownCodeBlock,{language:t,highlights:n},e.children)}}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(510);t.WidgetFrame=class extends o.Component{componentDidMount(){this.ref&&a.iframeResizer({log:!1},this.ref)}render(){const{props:e}=this;return o.createElement(i,Object.assign({ref:e=>this.ref=e},e))}};const i=r.default.iframe`
  border: none;
  grid-column: first / span 12;
  width: 100%;
`},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(20),i=n(39),l=n(514);t.MarkdownLink=(e=>{const t=function(e){if(i.parse(e||"./").protocol)return!0;if(e.startsWith("/api/static/"))return!0}(e.href)?{}:l.parse(i.parse(e.href).query);return o.createElement(s,{hint:!0,href:e.href,query:t},e.children)});const s=r.default(a.Link)`
  font-size: 18px;
  line-height: 27px;
  color: ${e=>e.theme.colors.color};
  text-decoration: none;
  &:link,
  &:visited {
    color: ${e=>e.theme.colors.active};
  }
  &:hover,
  &:active {
    text-decoration: underline;
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MarkdownList=o.default.ul`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  padding-left: 36px;
  white-space: nowrap;

  > * {
    white-space: normal;
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(19);t.MarkdownItem=function(e){return o.createElement(i,null,o.createElement(a.Text,null,e.children))};const i=r.default.li`
  grid-column: first / span 12;
  font-size: 18px;
  line-height: 27px;
  color: ${e=>e.theme.colors.color};
  margin-top: 4.5px;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MarkdownImage=o.default.img`
  grid-column: first / span 12;
  max-width: 100%;
  height: auto;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MarkdownHr=o.default.hr`
  grid-column: first / span 12;
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${e=>e.theme.colors.border};
  border: 0;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(230),i=n(23),l=n(20),s=n(49),c=r.default(i.Icon)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  fill: ${e=>e.theme.colors.color};
  opacity: 0;
`,u=r.default(l.Link)`
  color: ${e=>e.theme.colors.color};
  text-decoration: none;
  &:hover ${c} {
    opacity: 1;
  }
`,d=r.default.div`
  width: 0;
  height: 0;
`,f=r.default(a.Headline)`
  font-family: ${e=>e.theme.fonts.headline};
`,p=e=>{const t=s(e.children),n=t.split(" ").map(e=>encodeURIComponent(e)).join("-").toLowerCase();return o.createElement(f,{as:`h${e.order+1}`,order:e.order,className:e.className,id:n},e.linkable?o.createElement(h,{name:t,id:n},e.children):e.children)};function h(e){return o.createElement(u,{title:`Link to "${e.name}"`,hash:e.id},o.createElement(d,{id:e.id}),o.createElement(c,{symbol:"link",size:"m"}),e.children)}t.MarkdownHeadline=r.default(p)`
  grid-column: first / span 12;
  position: relative;
  color: ${e=>e.theme.colors.color};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(19);function i(e){return o.createElement(a.Text,{as:"p",className:e.className},e.children)}t.MarkdownCopy=r.default(i)`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  color: ${e=>e.theme.colors.color};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(111);t.MarkdownCode=o.default(r.Code)`
  display: inline;
  padding: 0;
  background: ${e=>e.theme.colors.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 3px;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(49),a=n(1),i=n(1),l=n(19),s=n(114),c=n(113),u=["❔","ℹ️","✅","❌","⚠️"],d=e=>o.createElement(l.Text,{className:e.className,as:"blockquote"},e.children),f=a.default(d)`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${e=>e.theme.colors.recess};
  color: ${e=>e.theme.colors.recess};
`,p=e=>{switch(e.symbol){case"❔":return e.theme.colors.border||e.theme.colors.colorBackgroundNote;case"ℹ️":return e.theme.colors.colorBackgroundInfoNote||e.theme.colors.info;case"✅":return e.theme.colors.colorBackgroundSuccessNote||e.theme.colors.success;case"❌":return e.theme.colors.colorBackgroundErrorNote||e.theme.colors.error;case"⚠️":return e.theme.colors.colorBackgroundWarningNote||e.theme.colors.warning}},h=a.default.div`
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 32px;
  background: ${p};
  > :last-child {
    margin: 0;
  }
  a,
  a:link,
  a:visited,
  a span,
  a:link span,
  a:visited span {
    color: inherit;
    text-decoration: underline dotted;
  }
`;t.MarkdownBlockquote=i.withTheme(e=>{const t=r(e.children),[n,a]=t.split("\n");if(u.indexOf(a)>-1){const t=o.Children.toArray(e.children).map(e=>(function e(t,n){if(Array.isArray(t))return t.map(t=>e(t,n));const r=t;if("object"==typeof t&&r.props&&r.props.children)return Object.assign({},r,{props:Object.assign({},r.props,{children:o.Children.toArray(r.props.children).map(t=>e(t,n))})});if("string"==typeof t)return t.split(n).join("");return t})(e,a)),n=c.hsl(p({symbol:a,theme:e.theme})).luminosity()>.4,r=s.getThemes();return o.createElement(h,{symbol:a},o.createElement(i.ThemeProvider,{theme:n?r.light:r.dark},o.createElement(o.Fragment,null,t)))}return o.createElement(f,Object.assign({},e))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.MarkdownDetails=o.default.details`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.color};

  summary {
    display: flex;
    align-items: center;
    > * {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
    }
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(36);t.MarkdownDiv=o.default(r.default(["grid","start","end"])("div"))`
  @media (min-width: 480px) {
    display: ${e=>e.grid?"grid":"block"};
  }
  ${e=>e.grid?"grid-template-columns: repeat(12, 1fr);":""}
  ${e=>e.grid?"grid-gap: 16px;":""}
  ${e=>e.start?`grid-column-start: ${e.start};`:""}
  ${e=>e.end?`grid-column-end: ${e.end}`:""}
`},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(562),r=n(548);t.videoHandler=((e,t)=>({type:"element",tagName:"x-video",properties:Object.assign({},t.config,{controls:void 0!==t.config.controls?String(t.config.controls):void 0,src:t.src,provider:t.provider}),children:void 0})),t.gridHandler=((e,n)=>{return{type:"element",tagName:"x-grid",children:o.selectAll("grid-columnCustomBlock",n).map(e=>{const n=o.select("grid-columnCustomBlockHeading",e)||{children:[]},a=o.select("grid-columnCustomBlockBody",e)||{children:[]},i=n.children.filter(e=>"text"===e.type).map(e=>e.value).join("").split("-").filter(Boolean).map(e=>e.trim()).map(e=>parseInt(e,10)).filter(e=>"number"==typeof e&&!Number.isNaN(e));return{type:"element",tagName:"x-grid-column",properties:{start:i[0],end:i[1]},children:a.children.map(e=>r(e,{handlers:{video:t.videoHandler}}))}})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sanitize={strip:["script"],clobberPrefix:"user-content-",clobber:["name","id"],ancestors:{li:["ol","ul"],summary:["details"],tbody:["table"],tfoot:["table"],thead:["table"],td:["table"],th:["table"],tr:["table"],"x-grid-column":["x-grid"]},protocols:{href:["http","https","mailto"],cite:["http","https"],src:["http","https"],longDesc:["http","https"]},tagNames:["h1","h2","h3","h4","h5","h6","h7","h8","br","b","i","strong","em","a","pre","code","img","tt","div","ins","del","sup","sub","p","ol","ul","table","thead","tbody","tfoot","blockquote","dl","dt","dd","kbd","q","samp","var","hr","ruby","rt","rp","li","tr","td","th","s","strike","summary","details","summary","x-grid","x-grid-column","x-video"],attributes:{a:["href"],code:["className"],img:["src","longDesc"],div:["itemScope","itemType"],blockquote:["cite"],del:["cite"],ins:["cite"],q:["cite"],"x-grid-column":["start","end"],"x-video":["provider","src","autoPlay","autoplay","controls","playsInline","playsinline","muted","loop","color","poster"],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charoff","charSet","checked","clear","cols","colSpan","color","compact","coords","dateTime","dir","disabled","encType","htmlFor","frame","headers","height","hrefLang","hspace","isMap","id","label","lang","maxLength","media","method","multiple","name","nohref","noshade","nowrap","open","prompt","readOnly","rel","rev","rows","rowSpan","rules","scope","selected","shape","size","span","start","summary","tabIndex","target","title","type","useMap","valign","value","vspace","width","itemProp"]}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e,t){const n=function(e){try{const t=r.exec(e);if(null===t)return{type:"error"};const[n,o,a,i]=t,l=null!==a&&null!==i?function(e){try{return JSON.parse(e)}catch(e){return{}}}(a):{},s=null!==a&&null!==i?i:a;return o&&s?{type:"success",matched:t[0],position:{start:t.index,end:n.length-1},payload:{provider:o,config:l,src:s}}:{type:"error"}}catch(e){return{type:"error",error:e}}}(t);"success"===n.type&&e(n.matched)(Object.assign({type:"video"},n.payload))}Object.defineProperty(t,"__esModule",{value:!0}),t.remarkVideo=function(){const e=this.Parser,t=e.prototype.blockTokenizers,n=e.prototype.blockMethods;if(t.videos=o,n.splice(n.indexOf("blockquote")+1,0,"videos"),this.Compiler){const e=this.Compiler.prototype.visitors;if(!e)return;e.video=(e=>`!(${e.provider}:${e.src})`)}};const r=/^!\((video|youtube|vimeo):(?:(\{.*\}):)?(.*)\)\s*?/},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){(function(t){const o=n(0),r=n(1).default,a=n(213).MainHeader,i=n(212),l=n(192),s=n(103);class c extends o.Component{constructor(...e){super(...e),this.getRef=this.getRef.bind(this),this.handleScrollRequest=this.handleScrollRequest.bind(this)}handleScrollRequest(e){}getRef(e){this.ref=e}render(){const{props:e}=this,t=o.Children.toArray(e.children),n=t.find(e=>e.type===l),r=t.find(e=>e.type===u);return o.createElement(p,{onKeyDown:this.handleKeyDown},r||o.createElement(f,{title:e.applicationTitle,symbol:"patternplate"}),o.createElement(h,{ref:this.getRef},o.createElement(g,{visible:e.docs.children.length>0,active:e.active,docs:e.docs,onItemClick:e.onItemClick,onLabelClick:e.onLabelClick,onScrollRequest:this.handleScrollRequest,query:e.query}),e.showComponents&&o.createElement(o.Fragment,null,o.createElement(s,{visible:e.navigation.children.length>0,enabled:e.componentsEnabled,name:"components",highlight:!0,onClick:e.onLabelClick,size:"S"},"Components"),o.createElement(i,{name:"components",visible:e.componentsEnabled&&e.navigation.children.length>0,active:e.active,data:e.navigation.children,onItemClick:e.onItemClick,onScrollRequest:this.handleScrollRequest,prefix:"/component",query:e.query}))),n&&o.createElement(m,null,n))}}function u(e){return o.createElement(d,null,e.children)}e.exports=c,e.exports.NavigationToolbar=l,e.exports.NavigationHeader=u,c.defaultProps={tools:[]};const d=r.div`
  box-sizing: border-box;
  min-height: 60px;
  background: ${e=>e.theme.colors.backgroundSecondary};
`;const f=r(a)`
  height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
`,p=r.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${e=>e.theme.colors.background};
`,h=r.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scroll: touch;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${50}px
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${50}px
  );
  & > *:last-child {
    margin-bottom: ${50}px;
  }
  @media screen {
    mask-image: none;
    -webkit-mask-image: none;
  }
`,m=r.div`
  flex-grow: 0;
  flex-shrink: 0;
`;function g(e){return o.createElement(y,{visible:e.visible,active:e.active,data:e.docs.children,onItemClick:e.onItemClick,onLabelClick:e.onLabelClick,onScrollRequest:e.onScrollRequest,prefix:"/doc",query:e.query})}const y=r(i)`
  margin-bottom: 5px;
  padding-bottom: 5px;
`}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);t.MainHeader=function(e){return o.createElement(a,{className:e.className,title:e.title},e.image,e.title&&o.createElement(i,null,e.title))};const a=r.default.div`
  width: 100%;
  height: auto;
  color: ${e=>e.theme.colors.color};
  ${e=>!e.image&&`\n      display: flex;\n      padding: 10px 15px;\n      color: ${e.theme.active};\n      align-items: center;\n      justify-content: center;\n    `};
`,i=r.default.span`
  font-family: ${e=>e.theme.fonts.default};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(20),i=n(23),l=r.default(a.Link)`
  display: block;
  margin: 0 auto;
  &:link,
  &:visited {
    color: ${e=>e.theme.colors.active};
  }
`,s=e=>e.source?o.createElement("div",{className:e.className},o.createElement(l,{external:"base",href:"/",query:null,target:"_self"},o.createElement("div",{dangerouslySetInnerHTML:{__html:e.source}}))):o.createElement("div",{className:e.className},o.createElement(l,{external:"base",href:"/",query:null,target:"_self"},o.createElement(i.Icon,{symbol:"patternplate",size:"l"}))),c=r.default(s)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  align-items: center;
  padding: 10px;
  background: ${e=>e.theme.colors.backgroundSecondary};
`;t.Logo=(e=>o.createElement(c,Object.assign({},e)))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(795))},function(e,t,n){e.exports=n(235)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.StyledToggle=o.default.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 30px;
`,t.StyledToggleBody=o.default.div`
  display: flex;
  color: ${e=>e.theme.colors.color};
  box-sizing: border-box;
  width: 100%;
  padding: 5px 15px 5px 20px;
  box-sizing: border-box;
  background: ${e=>e.theme.colors.background};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(20),a=n(19),i=o.default(r.Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;t.StyledToggleHead=o.default(i)`
  display: flex;
  align-items: center;
  height: 30px;
  font-weight: bold;
  color: ${e=>e.theme.colors.color};
  padding: 3px 15px 3px 20px;
  box-sizing: border-box;
  border-top: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
`,t.StyledArrow=o.default(a.Text)`
  font-size: 0.8em;
  transform: ${e=>e.rotated?"rotate(0deg)":"rotate(-90deg)"};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(19),a=n(799);t.ToggleHead=function(e){const t={[`${e.name}-enabled`]:!e.enabled};return o.createElement(a.StyledToggleHead,{query:t,className:e.className,title:`${e.enabled?"Hide":"Show"} ${e.name}`},o.createElement(r.Text,null,e.children),o.createElement(a.StyledArrow,{rotated:e.enabled},"▼"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(800),a=n(798);t.InfoPaneToggle=function(e){return o.createElement(a.StyledToggle,null,o.createElement(r.ToggleHead,{name:e.name,enabled:e.enabled},e.head),e.enabled&&o.createElement(a.StyledToggleBody,null,e.children))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(214),a=n(19),i=n(1),l=n(216);t.InfoPaneVersion=function(e){return o.createElement(t.StyledInfoPaneVersion,{className:e.className,search:e.search,field:"version"},o.createElement(a.Text,null,e.search))},t.StyledInfoPaneVersion=i.default(r.SearchTrigger)`
  color: ${l.versionColor};
  &:link,
  &:visited {
    text-decoration: none;
    color: ${l.versionColor};
  }
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BORDER_RADIUS=10},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(19),i=e=>o.createElement(a.Text,{className:e.className},e.children);t.Tag=r.default(i)`
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  color: ${e=>e.theme.colors.color};
  border: 1px solid ${e=>e.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${e=>e.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(840),i=n(820);a.register(n(812)),a.register(n(811)),a.register(n(810)),a.register(n(219)),a.register(n(218)),a.register(n(809)),a.register(n(808)),a.register(n(807)),a.register(n(806)),a.register(n(805)),e.exports.highlight=h,e.exports.toElements=m,t.Code=(e=>{const t=function(e,t=""){if(!e)return t;if(!t)return t;return m(h(e,t))}(e.language,e.children),n=Array.isArray(e.highlights)?e.highlights:[];return e.block?o.createElement(c,null,o.createElement(d,{className:e.className},t),n.length>0&&o.createElement(f,null,e.children.split("\n").map((e,t)=>o.createElement(u,{key:t,highlight:n.indexOf(t+1)>-1},e||o.createElement("span",null," "))))):o.createElement(d,{className:e.className},t)});const l={dark:{mono1:"#abb2bf",mono2:"#818896",mono3:"#5c6370",hue1:"#56b6c2",hue2:"#61aeee",hue3:"#c678dd",hue4:"#7ec699",hue5:"#e2777a",hue52:"#be5046",hue6:"#f8c555",hue62:"#f08d49"},light:{mono1:"#383a42",mono2:"#686b77",mono3:"#a0a1a7",hue1:"#0184bb",hue2:"#4078f2",hue3:"#a626a4",hue4:"#50a14f",hue5:"#e45649",hue52:"#c91243",hue6:"#f08d49",hue62:"#c18401"}},s=e=>t=>l[t.theme.name][e],c=r.default.pre`
  position: relative;
  white-space: pre-wrap;
`,u=r.default.div`
  position: relative;
  color: transparent;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background: ${e=>e.highlight?"dark"===e.theme.name?"rgba(0, 0, 0, .5)":"rgba(0, 0, 0, .075)":"transparent"};
  }

  &::after {
    left: 50%;
    right: -50%;
  }

  &::before {
    left: -50%;
    right: 50%;
  }
`,d=r.default.code`
  position: relative;
  z-index: 2;
  display: block;
  padding: 0.5em;
  color: ${s("mono1")};
  font-family: ${e=>e.theme.fonts.code};
  box-sizing: border-box;
  font-size: 15.3px;
  line-height: 23px;
  overflow: hidden;
  ${e=>e.css}

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${s("mono3")};
  }

  .token.punctuation {
    color: ${s("mono1")};
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${s("hue5")};
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${s("hue62")};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${s("hue6")};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: ${s("hue2")};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${s("hue4")};
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${s("hue5")};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`,f=r.default(d)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  overflow: visible;
`;const p={md:"markdown",sh:"bash"};function h(e,t){const n=p[e]||e;return a.registered(n)?a.highlight(t,n):t}function m(e){if(!Array.isArray(e))return e;return i(o.createElement,{type:"element",tagName:"div",children:e}).props.children}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(111),a=n(217),i=n(19),l=n(803);t.StyledInfoPane=o.default.div`
  position: relative;
  width: 300px;
  min-height: 300px;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${e=>e.hermit?`${l.BORDER_RADIUS}px`:`${l.BORDER_RADIUS}px 0 0 ${l.BORDER_RADIUS}px`};
  border-right: 1px solid ${e=>e.theme.colors.border};
  border-right-width: ${e=>e.hermit?0:1}px;
  overflow: scroll;
  overflow-x: hidden;
  background: ${e=>e.theme.colors.background};
`,t.StyledInnerPane=o.default.div`
  position: relative;
  z-index: 1;
  background: ${e=>e.theme.colors.background};
`,t.StyledName=o.default.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 15px 0 15px;
`,t.StyledToolbar=o.default.div`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 15px 10px 15px;
`,t.StyledDisplayName=o.default(i.Text)`
  flex: 1 0 auto;
  color: ${e=>e.theme.colors.color};
  margin-right: 10px;
`,t.StyledId=o.default(i.Text)`
  flex: 0 1 auto;
  color: ${e=>e.theme.colors.recess};
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,t.StyledData=o.default.table`
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`,t.StyledDataCell=o.default.td`
  box-sizing: border-box;
  height: 30px;
  padding: 4px 6px;
  border-top: 1px solid ${e=>e.theme.colors.border};
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    text-align: right;
    padding-right: 15px;
  }
`,t.StyledKey=o.default(i.Text)`
  font-weight: bold;
  color: ${e=>e.theme.colors.color};
`,t.StyledTag=o.default(a.Tag)`
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  border: 1px solid ${e=>e.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${e=>e.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`,t.StyledCode=o.default(r.Code)`
  width: 100%;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(10),a=n(112),i=n(842),l=n(216),s=n(214),c=n(802),u=n(801);t.InfoPane=function(e){const{className:n}=e,a=r.omit(e,["className"]);return o.createElement(i.StyledInfoPane,{className:n,hermit:e.hermit},o.createElement(t.InnerInfoPane,Object.assign({},a)))},t.InnerInfoPane=function(e){return o.createElement(i.StyledInnerPane,{className:e.className},o.createElement(i.StyledName,null,o.createElement(i.StyledDisplayName,null,e.name),o.createElement(i.StyledId,null,e.id)),e.children&&o.createElement(i.StyledToolbar,null,e.children),o.createElement(i.StyledData,null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement(i.StyledDataCell,null,o.createElement(i.StyledKey,null,"Version")),o.createElement(i.StyledDataCell,null,o.createElement(c.InfoPaneVersion,{search:e.version},e.version))),o.createElement("tr",null,o.createElement(i.StyledDataCell,null,o.createElement(i.StyledKey,null,"Flag")),o.createElement(i.StyledDataCell,null,o.createElement(s.SearchTrigger,{field:"flag",search:e.flag},o.createElement(a.Flag,null,e.flag)))),l.has(e.tags)&&o.createElement("tr",null,o.createElement(i.StyledDataCell,null,o.createElement(i.StyledKey,null,"Tags")),o.createElement(i.StyledDataCell,null,e.tags.map(e=>o.createElement(i.StyledTag,{key:e},e)))))),o.createElement(u.InfoPaneToggle,{head:"Manifest",enabled:e.manifestEnabled,name:"manifest"},o.createElement(i.StyledCode,{block:!0,language:"json"},e.manifest)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.Text=o.default.div`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.color};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(19),i={0:72,1:36,2:27,3:23,4:18},l=e=>{const t=e.as||"h1";return o.createElement(a.Text,{as:t,className:e.className,id:e.id},e.children)};t.Headline=r.default(l)`
  color: ${e=>e.theme.colors.color};
  font-size: ${e=>i[e.order]}px;
  font-family: ${e=>e.theme.fonts.headline};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(49);t.StyledText=o.default.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 3px;
  font-family: ${e=>e.theme.fonts.default};
  ${e=>{const t=function(e,t){switch(e){case"alpha":return t.error;case"beta":return t.warning;case"rc":return t.info;case"stable":return t.success;case"deprecated":default:return t.error}}(r(e.children),e.theme.colors);return`\n\t\t\tborder-color: ${t};\n\t\t\tcolor: ${t};\n\t\t`}};
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(846);t.Flag=(e=>o.createElement(r.StyledText,{className:e.className},e.children))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(36),i=n(23),l=n(20),s=e=>{const{className:t,title:n,onClick:r,external:i,href:s,type:f,symbol:p,children:h}=e,m=f===d.link?a.default(["external","type"])(l.Link):a.default(["external"])("button");return o.createElement(m,{className:t,title:n,onClick:r,external:i,href:s,type:f},h&&o.createElement(c,null,h),p&&o.createElement(u,{symbol:p}))},c=r.default.span`
  font-family: ${e=>e.theme.fonts.default};
`,u=r.default(i.Icon)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;var d;!function(e){e[e.button=0]="button",e[e.link=1]="link"}(d=t.ButtonTypes||(t.ButtonTypes={})),t.Button=r.default(s)`
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.color};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${e=>e.frameless&&r.css`
    padding: 4px;
    border: 1px solid currentColor;
  `};
  background: ${e=>e.transparent&&"transparent"}
`,t.Button.defaultProps={type:d.button}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(848))},function(e,t,n){e.exports={css:n(1).css,keyframes:n(1).keyframes,ServerStyleSheet:n(1).ServerStyleSheet,styled:n(1).default,StyleSheetManager:n(1).StyleSheetManager,ThemeProvider:n(1).ThemeProvider,Button:n(849).Button,Flag:n(112).Flag,Headline:n(230).Headline,Icon:n(23).Icon,InfoPane:n(229).InfoPane,InnerInfoPane:n(229).InnerInfoPane,IconDefinitions:n(23).definitions,injection:n(797),Link:n(20).Link,Logo:n(796).Logo,MainHeader:n(213).MainHeader,MainNavigation:n(793),Markdown:n(191).Markdown,NavigationItem:n(193),NavigationLabel:n(103),NavigationToolbar:n(192),NavigationTree:n(212),Search:n(503),Symbol:n(23).Symbol,Tag:n(217).Tag,ThemeProvider:n(1).ThemeProvider,Text:n(19).Text,themes:n(114),svg:n(488)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(10);t.Path=(e=>{const{definition:t}=e,n="string"==typeof t?{d:t}:t,a=r.omit(n,["tagName"]),i=n.tagName||"path";return o.createElement(i,Object.assign({},a))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(232),i=n(231),l={s:"14px",m:"22px",l:"38px",text:".8em"},s=Object.keys(a.icons);!function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(231));var c=n(232);t.definitions=c.definitions,t.Icon=(e=>{const t="function"==typeof a.icons[e.symbol]?a.icons[e.symbol]:a.icons.placeholder;return o.createElement(u,{className:e.className,size:e.size,inline:e.inline,title:e.title,viewBox:"0 0 24 24"},o.createElement(i.Symbol,{id:e.symbol,definition:t()}))}),t.symbols=s,t.Icon.defaultProps={size:"m",symbol:"placeholder"};const u=r.default.svg`
  display: ${e=>e.inline?"inline-flex":"flex"};
  flex-shrink: 0;
  width: ${e=>l[e.size]};
  height: ${e=>l[e.size]};
  justify-content: center;
  align-items: center;
  color: inherit;
  fill: currentColor;
`},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=['"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],r=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Helvetica","Arial","sans-serif",...o],a=["SFMono-Regular","Consolas","Liberation Mono","Menlo","Courier","monospace",...o];t.fonts=function(){return{default:r.join(", "),code:a.join(", ")}}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(113),r=n(10),a=n(853);t.getThemes=function(e={}){const t=o.rgb(51,153,255),n=o.hsl(0,0,100),i={lightBlue:{300:t.darken(.3),600:t.darken(.4)},marine:{500:t.desaturate(.5).darken(.5),700:t.desaturate(.5).darken(.8),800:t.desaturate(.5).darken(.85),900:t.desaturate(.5).darken(.9)},gray:{50:n.darken(.05),100:n.darken(.15),400:n.darken(.4),700:n.darken(.735)}},l=e.colorActive?o(e.colorActive):t,s=e.colorError?o(e.colorError):o.rgb(250,63,69),c=e.colorWarning?o(e.colorWarning):o.rgb(255,189,46),u=e.colorInfo?o(e.colorInfo):o.rgb(80,179,221),d=e.colorSuccess?o(e.colorSuccess):o.rgb(74,165,74),f=e.colorBackgroundDark?o(e.colorBackgroundDark):i.marine[900],p=e.colorBackgroundSecondaryDark?o(e.colorBackgroundSecondaryDark):i.marine[800],h=e.colorBackgroundTertiaryDark?o(e.colorBackgroundTertiaryDark):i.marine[700],m=e.colorBorderDark?o(e.colorBorderDark):i.marine[800],g=e.colorTextDark?o(e.colorTextDark):i.gray[50],y=e.colorTextNegatedDark?o(e.colorTextNegatedDark):i.gray[700],v=e.colorRecessDark?o(e.colorRecessDark):i.gray[400],b=e.colorBackgroundLight?o(e.colorBackgroundLight):o.hsl(255,0,100),_=e.colorBackgroundSecondaryLight?o(e.colorBackgroundSecondaryLight):o.rgb(246,248,250),x=e.colorBackgroundTertiaryLight?o(e.colorBackgroundTertiaryLight):o.rgb(246,248,250),w=e.colorBorderLight?o(e.colorBorderLight):o.rgb(228,228,228),k=e.colorTextLight?o(e.colorTextLight):o.rgb(68,68,68,1),S=e.colorTextNegatedLight?o(e.colorTextNegatedLight):o.rgb(238,238,238),E=e.colorRecessLight?o(e.colorRecessLight):o.rgb(106,115,125,1),M=e.colorBackgroundNote?o(e.colorBackgroundNote):p,O=e.colorBackgroundInfoNote?o(e.colorBackgroundInfoNote):u,P=e.colorBackgroundSuccessNote?o(e.colorBackgroundSuccessNote):d,C=e.colorBackgroundErrorNote?o(e.colorBackgroundErrorNote):s,j=e.colorBackgroundWarningNote?o(e.colorBackgroundWarningNote):c,$=o(e.colorNoteLight)||S,T=o(e.colorNoteDark)||k,L=a.fonts(),D={colors:{active:l.string(),error:s.string(),warning:c.string(),info:u.string(),success:d.string(),colorBackgroundNote:M.string(),colorBackgroundInfoNote:O.string(),colorBackgroundSuccessNote:P.string(),colorBackgroundErrorNote:C.string(),colorBackgroundWarningNote:j.string(),colorNoteLight:$.string(),colorNoteDark:T.string()},fonts:{fontWeight:100,fontSize:14,default:e.fontDefault||L.default,code:e.fontCode||L.code,headline:e.fontHeadline||L.default}};return{dark:r.merge({},D,{name:"dark",colors:{background:f.string(),backgroundSecondary:p.string(),backgroundTertiary:h.string(),border:m.string(),color:g.string(),colorNegated:y.string(),recess:v.string()}}),light:r.merge({},D,{name:"light",colors:{background:b.string(),backgroundSecondary:_.string(),backgroundTertiary:x.string(),border:w.string(),color:k.string(),colorNegated:S.string(),recess:E.string()}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(1),i=n(114),l=n(36),s=n(236);t.Themer=(e=>{const t=i.getThemes();return o.createElement(u,null,o.createElement(s.Global,null),o.createElement(a.ThemeProvider,{key:"dark",theme:t.dark},o.createElement(c,{spacing:Boolean(e.spacing),full:e.full?"true":void 0},e.children)),o.createElement(a.ThemeProvider,{key:"light",theme:t.light},o.createElement(c,{spacing:Boolean(e.spacing),full:e.full?"true":void 0},e.children)))});const c=r.default(l.default("spacing","full")("div"))`
  background: ${e=>e.theme.colors.background};
  padding: ${e=>e.spacing?15:0}px;
  width: ${e=>e.full?"100%":"auto"};
`,u=r.default.div`
  display: flex;
  flex-wrap: wrap;
`},,,,function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(236)),o(n(235)),o(n(860))},function(e,t,n){e.exports=n(864)},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),a=n(865),i=n(23);class l extends o.Component{render(){const{props:e}=this,t=function(e){if(e.target)return e.target;return e.external?"_blank":null}(e);return o.createElement("a",{target:t,rel:"_blank"===t?"noopener noreferrer":null,className:e.className,href:e.href,onClick:e.onClick,onMouseOver:e.onHover,title:e.title,"data-id":e["data-id"]},o.createElement(s,{grow:e.grow,external:e.external},o.createElement(c,{grow:e.grow},e.children),e.external&&e.hint&&o.createElement(i.Icon,{symbol:"external-link",size:e.iconSize||"text",inline:!0})))}}t.RawLink=l,t.Link=a.inject(l),t.Link.RawLink=l;const s=r.default.span`
  display: inline-flex;
  align-items: center;
  flex-grow: ${e=>e.grow?1:0};
  > span {
    display: inline-flex;
    align-items: ${e=>e.external?"baseline":"center"};
  }
  > svg {
    margin-left: .25em;
  }
`,c=r.default.span`
  width: ${e=>e.grow?"calc(100% - 40px)":"auto"};
`},,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(0)),i=o(n(69)),l=o(n(36)),s=n(11),c=n(26),u=n(24),d=n(20),f=n(9),p=r(n(3)),h=r(n(56)),m=o(n(405)),g=o(n(404)),y=o(n(401)),v=o(n(399)),b=o(n(398)),_=r(n(396)),x=o(n(395)),w=o(n(392)),k=o(n(390)),S=u.createSelector(e=>e.config.ui,e=>f.themes.getThemes(e)),E=u.createSelector(e=>e.messages,h.selectSrc,(e,t)=>(e[t]||"").split("\n").filter(Boolean)),M=u.createSelector(E,e=>e.slice(0,2).map(e=>e.trim()).join("\n")),O=u.createSelector(M,e=>"string"==typeof e&&""!==e);const P=[{target:d.Link,source:v.default},{target:f.Link,source:v.default}];t.default=s.connect(function(e){const t=e.routing.locationBeforeTransitions.query;return{base:e.base,description:e.schema.description,lightbox:e.lightbox,location:e.routing.locationBeforeTransitions,networkEnabled:e.networkEnabled,logo:e.config.ui.renderedLogo,navigationEnabled:e.navigationEnabled,searchEnabled:e.searchEnabled,theme:e.theme,themes:S(e),title:e.config.title||e.schema.name,hasMessage:O(e),screenshot:"true"===t.screenshot,showComponents:void 0===e.config.ui.showComponents||e.config.ui.showComponents,jsWarningEnabled:"false"!==t["js-warning-enabled"]&&!1!==t["js-warning-enabled"],browserWarningEnabled:"false"!==t["browser-warning-enabled"]&&!1!==t["browser-warning-enabled"]}},function(e){return c.bindActionCreators({onLoad:()=>p.listen({url:"api"}),onResize:p.windowResize},e)})(class extends a.default.Component{componentDidMount(){document.body.style.overflow=this.props.screenshot?"hidden":"auto"}componentDidUpdate(){document.body.style.overflow=this.props.screenshot?"hidden":"auto"}render(){const{props:e}=this;return a.default.createElement(f.injection.InjectionProvider,{injections:P},a.default.createElement(f.ThemeProvider,{theme:e.themes[e.theme]},a.default.createElement(z,{screenshot:e.screenshot},a.default.createElement(i.default,{meta:function(e){return[{name:"description",content:e.description},{name:"viewport",content:"width=device-width, initial-scale=1"}]}(e),title:e.title}),a.default.createElement(g.default,null),a.default.createElement(f.ThemeProvider,{theme:e.themes.dark},a.default.createElement(a.default.Fragment,null,a.default.createElement(U,{"data-toggle-name":"navigation","data-trigger-name":"navigation","data-toggle-enabled":e.navigationEnabled,enabled:e.navigationEnabled},a.default.createElement(x.default,null)),a.default.createElement(R,{"data-toggle-name":"navigation","data-toggle-enabled":e.visible,enabled:e.navigationEnabled},a.default.createElement(_.default,{showComponents:e.showComponents},a.default.createElement(_.NavigationHeader,null,a.default.createElement(m.default,null)),a.default.createElement(_.NavigationToolbar,null,a.default.createElement("div",null),a.default.createElement(w.default,null),a.default.createElement(y.default,null)))))),a.default.createElement(H,{"data-scrolling":!0},a.default.createElement(I,null,e.browserWarningEnabled&&a.default.createElement($,{navigationEnabled:e.navigationEnabled,"data-browser-warning":!0},a.default.createElement(T,null,a.default.createElement(L,null,a.default.createElement(j,null,"Nice browser. Is it antique?"),a.default.createElement(D,null,"No, seriously - your browser is so old that some features of patternplate don't work as expected."),a.default.createElement(D,null,"Don't worry - you can either continue with a restricted version or install an up-to-date browser.")),a.default.createElement(N,{title:"Close browser warning",query:{"browser-warning-enabled":!1}},a.default.createElement(f.Icon,{symbol:"close"})))),e.jsWarningEnabled&&a.default.createElement($,{navigationEnabled:e.navigationEnabled,"data-js-warning":!0},a.default.createElement(T,null,a.default.createElement(L,null,a.default.createElement(j,null,"We messed up."),a.default.createElement(D,null,"Sorry, but your user experience might be affected."),a.default.createElement(f.Text,null,"- Try reloading the page"),a.default.createElement(f.Text,null,"- Report the problem at github.com/patternplate/patternplate")),a.default.createElement(N,{title:"Close browser warning",query:{"js-warning-enabled":!1}},a.default.createElement(f.Icon,{symbol:"close"})))),e.hasMessage&&a.default.createElement(A,null,a.default.createElement(b.default,null)),e.children,e.searchEnabled&&a.default.createElement(f.ThemeProvider,{theme:e.themes.dark},a.default.createElement(W,{navigationEnabled:e.navigationEnabled,screenshot:e.screenshot},a.default.createElement(V,null,a.default.createElement(k.default,null)))))))))}});const C=e=>e.enabled?300:0,j=f.styled(f.Text)`
  font-weight: bold;
  margin-bottom: 1.3em;
`,$=f.styled.div`
  display: none; /* overridden by separate js if needed */
  box-sizing: border-box;
  position: absolute;
  position: sticky;
  top: 0;
  z-index: 4;
  right: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  padding-left: ${e=>e.navigationEnabled?20:60}px;
  background: ${e=>e.theme.colors.warning};
`,T=f.styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
`,L=f.styled.div``,D=f.styled(f.Text)`
  margin-bottom: 1.3em;
`,N=f.styled(d.Link)`
  flex-shrink: 0;
  margin-left: 15px;
  &:link,
  &:visited,
  &:active {
    color: ${e=>e.theme.colors.color};
  }
`,z=f.styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.colors.background};

  ${e=>e.screenshot?f.css`
          height: calc(100vh - 100px);
          width: calc(100vw - 100px);
          margin: 50px;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        `:""};
`,R=f.styled(l.default(["enabled"])("div"))`
  position: relative;
  z-index: 2;
  height: 100%;
  width: ${C}px;
  flex: 0 0 ${C}px;
  overflow: hidden;
  &[data-toggle-enabled="true"] {
    display: block;
  }
  &[data-toggle-enabled="false"] {
    display: none;
  }
`,A=f.styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 3;
  padding: 15px;
  width: 100%;
  overflow: hidden;
`,I=f.styled.div`
  flex: 1 1 100%;
  width: 100%;
`,H=f.styled.div`
  flex: 1 1 calc(100% - ${C}px);
  width: calc(100% - ${C}px);
  flex-direction: column;
  overflow: auto;
  position: relative;
`,q=e=>t=>t.screenshot?50*e:0,B=e=>t=>t.navigationEnabled?300*e:0,F=(...e)=>t=>e.reduce((e,n)=>e+n(t),0),W=f.styled.div`
  position: fixed;
  z-index: 2;
  top: 12.5vh;
  bottom: 10vh;
  right: ${q(1)}px;
  left: ${F(B(1),q(1))}px;
  width: calc(
    100% - ${F(B(1),q(2))}px
  );
  pointer-events: none;
`,V=f.styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 750px;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
`,U=(f.styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
  height: 300px;
  display: flex;
`,f.styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;
  pointer-events: all;
`,f.styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: all;
`,f.styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0;
  left: ${e=>e.enabled?300:0}px;
  transform: translate(-${e=>e.enabled?100:0}%);
  color: ${e=>e.enabled?e.theme.colors.color:e.theme.colors.background};
  width: 60px;
  height: 60px;
  background: ${e=>e.enabled?e.theme.colors.backgroundSecondary:"#fff"};

  &[data-toggle-enabled="true"] {
    left: 300;
    transform: translate(-100%);
    color: ${e=>e.theme.colors.color};
    background: ${e=>e.theme.colors.backgroundSecondary};
  }

  &[data-toggle-enabled="false"] {
    left: 0;
    transform: translate(0);
    color: ${e=>e.theme.colors.background};
    background: #fff;
  }

  @media screen and (min-width: 720px) {
    background: transparent;
    &::before {
      display: none;
    }
  }
`)},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(253),i=o(n(873)),l=o(n(381)),s=o(n(291)),c=o(n(289));t.default=function(e){const t=e.getState();return r.default.createElement(a.Route,{path:t.base,component:i.default},r.default.createElement(a.IndexRoute,{component:s.default}),r.default.createElement(a.Route,{path:"pattern/*",component:l.default}),r.default.createElement(a.Route,{path:"doc/*",component:s.default}),r.default.createElement(a.Route,{path:"*",component:c.default}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(0)),a=n(60),i=n(253),l=n(11),s=n(50),c=o(n(874)),u=o(n(288));t.default=function(e,t){const n=u.default(i.browserHistory,e);window.store=n;const o=s.syncHistoryWithStore(i.browserHistory,n),d=r.default.createElement(l.Provider,{store:n},r.default.createElement(i.Router,{history:o},c.default(n)));return a.hydrate(d,t)}},,,,,,,,,,function(e,t,n){(function(e){var t=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})};const o=n(76),r=(n(39),n(121)),a=n(254),i=n(925).default,{merge:l}=n(10),{document:s}=e;(function(){return t(this,void 0,void 0,function*(){const n=s.querySelector('[data-application-el="patternplate"]'),c=s.querySelector('[data-application-state="patternplate"]'),u=yield function(n){return t(this,void 0,void 0,function*(){const i=o.parse(decodeURIComponent(n.textContent)),s=yield function(e){return t(this,void 0,void 0,function*(){return(yield r(`${function(e){return"/"===e.charAt(e.length-1)?e.slice(0,e.length-1):e}(e)}/api/state.json`,{credentials:"include"})).json()})}(i.base);return l(i,{clientRuntimeName:a.name,clientRuntimeVersion:a.version,clientOsName:a.os.name,clientOsVersion:a.os.version},{window:{width:e.innerWidth,height:e.innerHeight}},{schema:s,navigation:s.meta})})}(c),d=u.isStatic?()=>{const e=s.querySelector("[data-scrolling]").scrollTop;return n.innerHTML="",{scrollTop:e}}:()=>({}),f=u.isStatic?e=>{const t=s.querySelector("[data-scrolling]");t.scrollTop=e.scrollTop,s.body.setAttribute("data-mounted",!0)}:()=>(s.body.setAttribute("data-mounted",!0),{}),p=d();i(u,n),f(p)})})().catch(e=>{console.error(e)})}).call(this,n(6))}]);
//# sourceMappingURL=client.ae2596f4292dfe31b299.js.map