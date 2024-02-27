(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire1d24;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire1d24=o),o.register("cI6uH",(function(t,n){e(t.exports,"useEffectOnce",(function(){return i}));var r=o("29o0l");const i=(e,t)=>{const n=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(!n.current&&t)return n.current=!0,e()}))}})),o.register("cb8KS",(function(n,r){e(n.exports,"ConfirmationIconType",(function(){return m})),e(n.exports,"ConfirmationIcon",(function(){return h}));var i=o("1fwzV"),a=o("lz5BI"),l=o("29o0l"),u=o("gkfw3"),c=o("6UMd8"),s=o("j81qC");const f=u.default.div`
  position: relative;
`,d=(0,u.default)(a.motion.div)`
  width: ${e=>e.width}px;
  height: ${e=>e.width}px;
`,g=(0,u.default)(a.motion.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var m,p;(p=m||(m={})).Default="default",p.Warning="warning",p.Failure="failure",p.Success="success";const h=({type:e,iconWidth:n,defaultIcon:r,backgroundWidth:o=94})=>t(l).createElement(f,null,t(l).createElement(i.AnimatePresence,{mode:"wait",initial:!1},t(l).createElement(d,{width:o,key:e,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(e){case m.Default:return t(l).createElement(c.Circle,{diameter:o,color:"#181818",includeDarkBoxShadow:!0});case m.Warning:return t(l).createElement(c.Circle,{diameter:o,color:"#FFDC62",opacity:.1});case m.Failure:return t(l).createElement(c.Circle,{diameter:o,color:"#EB3742",opacity:.1});case m.Success:return t(l).createElement(c.Circle,{diameter:o,color:"#21E56F",opacity:.1})}})())),t(l).createElement(i.AnimatePresence,{mode:"wait",initial:!0},t(l).createElement(g,{key:e,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},(()=>{switch(e){case m.Default:return null!=r?r:t(l).createElement(s.IconQuestionMark,{width:null!=n?n:30});case m.Warning:return t(l).createElement(s.IconExclamationMarkCircle,{width:40,height:40,circleFill:"#FFDC62",exclamationFill:"#00000000"});case m.Failure:return t(l).createElement(s.IconFailure,{width:null!=n?n:30});case m.Success:return t(l).createElement(s.IconCheckmark,{height:"100%",width:null!=n?n:40,fill:"#21E56F"})}})())))})),o.register("3mrWC",(function(n,r){e(n.exports,"IconHeaderStyle",(function(){return b}),(function(e){return b=e})),e(n.exports,"IconHeader",(function(){return I}),(function(e){return I=e})),e(n.exports,"TabIconHeader",(function(){return F}),(function(e){return F=e}));var i=o("29o0l"),a=o("gkfw3"),l=o("eWzmJ"),u=o("91Dw6"),c=o("j81qC"),s=o("izu1Y"),f=o("27SDj"),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const g=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,m=a.keyframes`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,p=a.default.div`
  animation-name: ${e=>e.animateText?m:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,h=(0,a.default)(f.Text)`
  margin: ${e=>e.margin};
`;h.defaultProps={margin:"20px auto 0 auto"};const x=(0,a.default)(f.Text)`
  margin: ${e=>e.margin};
`;x.defaultProps={margin:"15px 0px 0px 0px"};const y=a.default.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var b,v;(v=b||(b={})).Medium="medium",v.Large="large",v.Small="small";const w={[b.Large]:30,[b.Medium]:28,[b.Small]:24},E={[b.Large]:34,[b.Medium]:34,[b.Small]:29},O={[b.Large]:18,[b.Medium]:16,[b.Small]:14},I=({className:e,icon:n,primaryText:r,secondaryText:o,headerStyle:a,showWarning:l=!1,showError:s=!1,animateText:f=!1})=>{a=null!=a?a:b.Medium;const d=w[a],m=E[a],v=O[a],I={[b.Large]:22,[b.Medium]:19,[b.Small]:17}[a],k="small"===a?"16px 0 0 0":void 0,S=s?u.ERROR_COLOR:"#777777";return t(i).createElement(g,{className:e},null!=n?n:t(i).createElement(c.IconUnknownOrigin,null),l?t(i).createElement(y,null,t(i).createElement(c.IconExclamationMarkCircle,null)):t(i).createElement(t(i).Fragment,null),t(i).createElement(p,{animateText:f},r&&t(i).createElement(h,{margin:k,weight:500,size:d,lineHeight:m,maxWidth:"320px"},r),o&&t(i).createElement(x,{margin:k,wordBreak:"break-word",size:v,lineHeight:I,color:S},o)))};I.defaultProps={headerStyle:b.Medium};const k=a.css`
  border-radius: 20px;
  width: 90px;
  height: 90px;
`,S=(0,a.default)(s.PImage)`
  ${k}
  object-fit: scale-down;
  filter: ${e=>e.showError?"grayscale(1)":"none"};
`,$=a.default.div`
  ${k}
`,F=e=>{var{tabId:n,iconUrl:r}=e,o=d(e,["tabId","iconUrl"]);const a=(0,l.useTabMeta)(n);let u=null==a?void 0:a.iconUrl;return r&&(u=r),t(i).createElement(I,Object.assign({icon:u?t(i).createElement(S,{showError:o.showError,src:u,fallback:t(i).createElement(c.IconUnknownOrigin,null),loader:t(i).createElement($,null)}):t(i).createElement($,null),primaryText:null==a?void 0:a.title},o))}})),o.register("eWzmJ",(function(t,n){e(t.exports,"useTabMeta",(function(){return l}));var r=o("lofhi"),i=o("gcdBN"),a=o("k5DTG");const l=e=>{var t,n;const{value:o}=(0,a.useTab)(e),{value:l}=(0,r.default)((()=>(0,i.getTabMarkupMeta)(e)),[e]);return{iconUrl:null!==(t=null==l?void 0:l.iconUrl)&&void 0!==t?t:null==o?void 0:o.favIconUrl,title:null!==(n=null==l?void 0:l.title)&&void 0!==n?n:null==o?void 0:o.title}}})),o.register("lofhi",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("29o0l"),i=o("d6194");function a(e,t){void 0===t&&(t=[]);var n=(0,i.default)(e,t,{loading:!0}),o=n[0],a=n[1];return(0,r.useEffect)((function(){a()}),[a]),o}})),o.register("d6194",(function(t,n){e(t.exports,"default",(function(){return l}));var r=o("YZf6l"),i=o("29o0l"),a=o("3Y2rr");function l(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var o=(0,i.useRef)(0),l=(0,a.default)(),u=(0,i.useState)(n),c=u[0],s=u[1],f=(0,i.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=++o.current;return c.loading||s((function(e){return(0,r.__assign)((0,r.__assign)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return l()&&i===o.current&&s({value:e,loading:!1}),e}),(function(e){return l()&&i===o.current&&s({error:e,loading:!1}),e}))}),t);return[c,f]}})),o.register("YZf6l",(function(t,n){e(t.exports,"__assign",(function(){return r})),e(t.exports,"__importDefault",(function(){return i}));var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.create;Object.create;function i(e){return e&&e.__esModule?e:{default:e}}"function"==typeof SuppressedError&&SuppressedError})),o.register("3Y2rr",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("29o0l");function i(){var e=(0,r.useRef)(!1),t=(0,r.useCallback)((function(){return e.current}),[]);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}})),o.register("k5DTG",(function(t,n){e(t.exports,"useTab",(function(){return a}));var r=o("lofhi"),i=o("hulLf");const a=e=>(0,r.default)((()=>i.browser.tabs.get(e)),[e])})),o.register("91Dw6",(function(t,n){e(t.exports,"WARNING_COLOR",(function(){return r})),e(t.exports,"DANGER_COLOR",(function(){return i})),e(t.exports,"ERROR_COLOR",(function(){return o}));const r="#FFDC62",i="#EB3742",o="#eb3742"})),o.register("izu1Y",(function(n,r){e(n.exports,"PImage",(function(){return s}),(function(e){return s=e}));var i=o("29o0l"),a=o("3YDVy"),l=o("gkfw3"),u=o("hiI91"),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const s=e=>{var{src:n,fallback:r,loader:o,onLoad:l,onError:u,loaderEnabled:s}=e,d=c(e,["src","fallback","loader","onLoad","onError","loaderEnabled"]);const[g,m]=(0,i.useState)("init"),[p,h]=(0,i.useState)(!1),x=(0,i.useMemo)((()=>function(e,t,n){if(e)return e.startsWith("data://")?e:"string"==typeof t||"string"==typeof n?(0,a.getImageThroughProxy)(e):t&&n?(0,a.getScaledImageURIExt)(e,t,n):t?(0,a.getScaledImageURI)(e,"width",t):n?(0,a.getScaledImageURI)(e,"height",n):(0,a.getImageThroughProxy)(e)}(n,d.width,d.height)),[d.height,d.width,n]),y=(0,i.useMemo)((()=>p?n:x),[n,x,p]),b=(0,i.useCallback)((e=>{p?(m("error"),null==u||u(e)):(m("retrying"),h(!0))}),[p,m,u,h]);return"error"!==g&&n?t(i).createElement(t(i).Fragment,null,t(i).createElement("img",Object.assign({src:y,onLoad:l,onError:b},d)),"loading"===g&&s&&t(i).createElement(t(i).Fragment,null,o||t(i).createElement(f,null))):t(i).createElement(t(i).Fragment,null,null!=r?r:null)},f=(0,l.default)(u.SkeletonLoader)`
  width: 100%;
  height: 100%;
`})),o.register("3YDVy",(function(t,n){e(t.exports,"getImageThroughProxy",(function(){return u})),e(t.exports,"getScaledImageURI",(function(){return c})),e(t.exports,"getScaledImageURIExt",(function(){return s}));var r,i,a=o("jF6Pg");(i=r||(r={})).NonFungible="NonFungible",i.SemiFungible="SemiFungible",i.Fungible="Fungible",i.NonFungibleEdition="NonFungibleEdition",i.ProgrammableNonFungible="ProgrammableNonFungible";const l=e=>(0,a.getDevicePixelRatio)()*e,u=(e,t=!1)=>`https://api.phantom.app/image-proxy/?image=${encodeURIComponent(e)}${t?"&anim=false":""}`,c=(e,t,n,r=!1)=>{const i=l(n);return`${u(e)}&fit=scale-down&${t}=${i}${r?"&anim=false":""}`},s=(e,t,n,r=!1)=>{const i=l(t),o=l(n);return`${u(e)}&fit=cover&width=${i}&height=${o}${r?"&anim=false":""}`}})),o.register("jF6Pg",(function(t,n){e(t.exports,"getDevicePixelRatio",(function(){return r}));const r=()=>(null===window||void 0===window?void 0:window.devicePixelRatio)||1})),o.register("hiI91",(function(t,n){e(t.exports,"SkeletonLoader",(function(){return a}));var r=o("gkfw3");const i=r.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,a=r.default.div`
  display: flex;
  aspect-ratio: ${({aspectRatio:e})=>e};
  flex-direction: ${({flexDirection:e})=>e};
  flex-wrap: ${({flexWrap:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  margin-bottom: ${({marginBottom:e})=>e};
  padding: ${({padding:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  background-color: ${e=>e.backgroundColor||e.theme.skeletonLight};
  animation: ${i} 2s ease-in-out infinite;
`}))}();
//# sourceMappingURL=ConnectHardwareMultichainFlow.10a3fd77.js.map
define=__define;})(window.define);