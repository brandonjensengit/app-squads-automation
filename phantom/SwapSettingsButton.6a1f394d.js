(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;t.register("iI3S3",(function(l,n){var a,i,o,r,s;a=l.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),i=l.exports,o="default",r=function(){return y},Object.defineProperty(i,o,{get:r,set:s,enumerable:!0,configurable:!0});var p=t("3ljHn"),u=t("43063"),f=t("kram9"),d=t("29o0l"),c=t("gkfw3"),g=t("j81qC"),b=t("27SDj"),m=t("feAoQ");const x=c.default.div`
  position: relative;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 1px solid #474747;
  padding: 4px 11px;
  gap: 4px;
  right: 8px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ab9ff2;
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
    p {
      color: #ab9ff2;
    }
  }
`,h=(0,c.default)(b.Text)`
  color: #777;
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
`,w=c.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,v=e(d).memo((({ariaLabel:t,slippageTolerance:l,showSettings:n})=>e(d).createElement(x,{"data-testid":"slippage-settings-menu-open-button",onClick:n,role:"button","aria-label":t},e(d).createElement(w,null,e(d).createElement(g.IconTokenListSettings,{className:"settingsMenuIcon",width:14,stroke:"#777"}),l?e(d).createElement(h,null,`${l}%`):null))));var y=()=>{const{t:t}=(0,u.useTranslation)(),{data:[l]}=(0,p.useFeatureFlags)(["enable-custom-slippage"]),{handleShowModalVisibility:n}=(0,m.useModals)(),a=(0,d.useCallback)((()=>{n("slippageSettings")}),[n]),i=(0,f.useSwapperStore)((e=>e.slippageTolerance)),o=(0,f.useSwapperStore)((e=>e.multichainQuoteResponse));return l?e(d).createElement(v,{ariaLabel:t("commandOpen"),slippageTolerance:null!=i?i:null==o?void 0:o.slippageTolerance,showSettings:a}):null}}))}();
//# sourceMappingURL=SwapSettingsButton.6a1f394d.js.map
define=__define;})(window.define);