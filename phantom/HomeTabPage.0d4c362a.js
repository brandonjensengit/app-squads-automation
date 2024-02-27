(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("bNkV0",(function(a,l){var i;i=a.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return P}),(function(e){return P=e}));var o=n("6Tvfa"),r=n("belzv"),s=n("lBuGR"),c=n("gYh0e"),u=n("lMzyG"),d=n("8NH57"),g=n("4y59b"),m=n("fvKRK"),h=n("lDSNw"),p=n("5jGDu"),f=n("cyeOH"),b=n("44I6u"),x=n("bKtYH"),k=n("6ha3o"),v=n("aXzxc"),y=n("eQcMe"),w=n("7J3aJ"),E=n("hnhp8"),S=n("e9bgh"),A=n("iKm61"),T=n("iTDlK"),M=n("gMNJN"),D=n("2LZGp"),B=n("1j4wJ"),C=n("h5kyv"),F=n("8egSn"),I=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function r(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const L=e(h).memo((({fungibles:t,isMainnet:n,onMouseEnter:a})=>{var l;const{t:i}=(0,u.useTranslation)(),{pushDetailView:o}=(0,k.useDetailViews)(),s=(0,h.useRef)(document.getElementById("tab-content"));(0,h.useEffect)((()=>{const e=document.getElementById("tab-content");e&&(s.current=e)}),[]);const c=(0,h.useCallback)((({networkID:t,chainName:n,fungibleKey:a,name:l,symbol:i,tokenAddress:s,type:c,walletAddress:u})=>{C.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:n,isNativeOfType:n,address:s},data:{networkId:t,chainId:r.Chains.getChainID(t)}}),o(e(h).createElement(F.FungibleDetailPage,{networkID:t,chainName:n,name:l,symbol:i,fungibleKey:a,tokenAddress:s,type:c,walletAddress:u}))}),[o]),d=(0,h.useCallback)((({key:l,index:o,style:r})=>{const s=Math.min(o+1,t.length),u=[];for(let l=o;l<s;l++){const r=t[l],s=r.type,{chain:d,name:g,symbol:m,key:p,tokenAddress:f,walletAddress:b}=r.data,x=null!=g?g:i("assetDetailUnknownToken");u.push(e(h).createElement(E.FungibleTokenRow,Object.assign({},(0,E.fungibleToProps)(r),{key:`${p}-${o}`,onClick:()=>c({networkID:d.id,chainName:d.name,fungibleKey:p,name:x,symbol:m,tokenAddress:f,type:s,walletAddress:b}),onMouseEnter:a,showBalance:!0,showCurrencyValues:n})))}return e(h).createElement("div",{key:l,style:r},u)}),[t,n,c,a,i]);return e(h).createElement(p.WindowScroller,{scrollElement:null!==(l=s.current)&&void 0!==l?l:void 0},(({height:n=0,isScrolling:a,registerChild:l,scrollTop:i})=>e(h).createElement(p.AutoSizer,{disableHeight:!0,style:{width:"100%"}},(({width:o})=>e(h).createElement("div",{ref:l},e(h).createElement(p.List,{autoHeight:!0,width:o,height:n,scrollTop:i,isScrolling:a,rowCount:t.length,rowHeight:E.FUNGIBLE_TOKEN_ROW_HEIGHT+10,rowRenderer:d}))))))})),N=(0,g.toMilliseconds)({seconds:5}),z=(0,g.toMilliseconds)({seconds:10});var P=()=>{const{data:t,isHidingAllFungibles:n,isLoading:a,isErrorTokens:l,isReadOnlyAccount:i,refetch:r,isActionBannersAvailable:g,showHelloBitcoinModal:p}=(()=>{const e=(0,m.useQueryClient)(),{showDepositListModal:t,showFungibleVisibilityModal:n,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:l}=(0,v.useLegacyModals)(),{handleShowModalVisibility:i,handleHideModalVisibility:r}=(0,D.useModals)(),{data:[g,p]}=(0,s.useFeatureFlags)(["enable-action-banners","enable-bitcoin"]),{isOpen:f}=(0,y.useMenu)(),{isOpen:b}=(0,w.useSettingsMenu)(),{isBitcoinEnabled:x}=M.hooks.useEnabledChainsInfo(),{data:k,isSuccess:E}=M.hooks.useHasSeenInterstitial(d.InterstitialFeature.HelloBitcoin),S=!f&&!b&&p&&x&&E&&!k,{t:A}=(0,u.useTranslation)(),T=(0,h.useMemo)((()=>({manageTokenList:A("homeManageTokenList"),receive:A("commandReceive"),send:A("commandSend"),buy:A("commandBuy"),errorTitle:A("homeErrorTitle"),errorDescription:A("homeErrorDescription"),errorButton:A("homeErrorButtonText")})),[A]);M.hooks.useHomeViewState();const{data:C}=M.hooks.useSelectedMultiChainAccount(),{accountBalance:F,accountId:L}=(0,h.useMemo)((()=>{var e,t;return{accountBalance:null===(e=null==C?void 0:C.balance)||void 0===e?void 0:e.value,accountId:null!==(t=null==C?void 0:C.identifier)&&void 0!==t?t:""}}),[C]),P=null==C?void 0:C.isReadOnly,H=!M.hooks.useIsTestnetMode(),R=(0,c.useFungiblesStore)((e=>e.resetSendSlice));(0,h.useEffect)((function(){L&&R()}),[L,R]);const{fungibles:O,portfolio:V,isHidingAllFungibles:j,isLoadingHiddenMints:$,isLoadingTokens:W,isLoadingPrices:G,isErrorTokens:U,refetch:Z}=M.hooks.useFungibles({useTokenQueryOptions:{staleTime:N,refetchInterval:z}}),{mutate:K}=M.hooks.useSetMultiChainAccountBalance();(0,o.useSetAccountBalanceEffect)({accountBalance:F,accountId:L,value:V.value,setAccountBalance:K});const _=M.hooks.useSelectedNetworks();(0,B.useWalletBalanceAnalytics)(O,_,L);const J=(0,h.useCallback)((()=>I(void 0,void 0,void 0,(function*(){return yield(0,c.prefetchSPLTokenMap)(e)}))),[e]);return{data:(0,h.useMemo)((()=>({fungibles:O,earnings:V.earnings,value:V.value,isMainnet:H,translations:T,showDepositListModal:t,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:l,showFungibleVisibilityModal:n,handlePrefetchSPLTokenMap:J,handleShowModalVisibility:i,handleHideModalVisibility:r})),[O,V,n,T,H,a,t,l,J,i,r]),isHidingAllFungibles:j,isLoading:$||W||G,isErrorTokens:U,isReadOnlyAccount:P,refetch:Z,isActionBannersAvailable:g,showHelloBitcoinModal:S}})(),{fungibles:k,translations:E,isMainnet:C,earnings:F,value:P,showDepositListModal:H,showBuyFungibleSelectionModal:R,showSendFungibleSelectionModal:O,handlePrefetchSPLTokenMap:V,handleShowModalVisibility:j}=t,{manageTokenList:$,receive:W,send:G,buy:U,errorTitle:Z,errorDescription:K,errorButton:_}=E,J=k.length>0;return(0,h.useEffect)((()=>{p&&j("helloBitcoin")}),[j,p]),e(h).createElement(b.Column,{align:"center"},e(h).createElement(S.Header,{earnings:F,value:P,buyButtonText:U,receiveButtonText:W,hasFungibles:J,isErrorTokens:l,isLoading:a,isHidingAllFungibles:n,isReadOnlyAccount:i,sendButtonText:G,showDollarValues:C,prefetchSPLTokenMap:V,showSendFungibleSelectionModal:O,showDepositListModal:H,showBuyFungibleSelectionModal:R}),!i&&g&&e(h).createElement(f.ActionBanners,null),a?[1,2,3].map((t=>e(h).createElement(x.RowSkeletonLoader,{key:`fungible-token-row-loader-${t}`}))):J?e(h).createElement(L,{fungibles:k,isMainnet:C,onMouseEnter:V}):n?null:e(h).createElement(A.HomeError,{title:Z,description:K,buttonText:_,refetch:r}),a?null:J||n?e(h).createElement(T.ManageTokenListButton,{buttonText:$,onClick:()=>j("fungibleVisibility")}):null)}})),n.register("cyeOH",(function(a,l){t(a.exports,"ActionBanners",(function(){return w}));var i=n("8NH57"),o=n("lDSNw"),r=n("lQxWu"),s=n("cZIbv"),c=n("gMNJN"),u=n("c3wGO"),d=n("d1qx3"),g=n("aanFI"),m=n("3ou76"),h=n("57LGC"),p=n("eayxI");const f=s.default.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${e=>e.animate?"height: "+(e.shouldCollapse?"100px":"120px"):""}
`,b=s.default.div`
  transition: transform 0.5s ease;
  width: 100%;
`,x=(0,s.default)(m.IconBackground)``,k=s.default.div`
  visibility: ${e=>e.isVisible?"visible":"hidden"};
`,v=s.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,y=e(o).memo((({banners:t,currentIndex:n,hasNextBanner:a,hasPrevBanner:l,onNextBannerClick:i,onPrevBannerClick:r})=>{const s=t.length<=1;return e(o).createElement(f,{animate:t.length>0,shouldCollapse:s},e(o).createElement(b,null,e(o).createElement(p.ActionBannerList,{banners:t,currentIndex:n}),!s&&e(o).createElement(v,null,e(o).createElement(k,{isVisible:l},e(o).createElement(x,{onClick:r},e(o).createElement(g.IconArrowLeftShort,null))),e(o).createElement(h.default,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e(o).createElement(k,{isVisible:a},e(o).createElement(x,{onClick:i},e(o).createElement(g.IconArrowRightShort,null))))))})),w=()=>{const t=(()=>{const{data:t={banners:[]}}=c.hooks.useActionBanners({platform:"extension",appVersion:(0,d.getManifestVersion)()}),{data:n}=c.hooks.useSelectedMultiChainAccountIdentifier(),{banners:a}=t,l=e(r)(n),[s,g]=(0,o.useState)(0),m=(0,o.useCallback)((()=>{g((e=>e+1))}),[]),h=(0,o.useCallback)((()=>{g((e=>e-1))}),[]);return(0,o.useEffect)((()=>{if(a.length&&n)if(l!==n)g(0);else if(s>=a.length)g(a.length-1);else{const e=a[s],t=(0,i.generateActionBannerBaseAnalyticsPayload)(e);u.actionBannerAnalytics.onBannerSeen(t)}}),[s,a,n,l]),(0,o.useMemo)((()=>({banners:a,currentIndex:s,hasNextBanner:s<a.length-1,hasPrevBanner:s>0,onNextBannerClick:m,onPrevBannerClick:h})),[a,s,h,m])})();return e(o).createElement(y,Object.assign({},t))}})),n.register("c3wGO",(function(e,a){t(e.exports,"actionBannerAnalytics",(function(){return o}));var l=n("8NH57"),i=n("h5kyv");const o=new(0,l.ActionBannerAnalytics)(i.analytics)})),n.register("57LGC",(function(a,l){t(a.exports,"default",(function(){return d}));var i=n("lDSNw"),o=n("cZIbv");const r=o.default.div`
  display: flex;
  justify-content: ${e=>e.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${e=>9*(e.maxVisible-1)+18}px;
`,s=o.default.div`
  align-items: center;
  display: flex;
  ${e=>e.shouldShift&&o.css`
      transform: translateX(calc(-${9}px * ${e.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,c=o.default.div`
  align-items: center;
  background-color: #999999;
  border-radius: 95px;
  display: flex;
  height: ${5}px;
  justify-content: center;
  margin: 0 ${2}px;
  min-width: ${5}px;
  transition: all 0.3s ease-in-out;
  ${e=>e.isActive&&o.css`
      min-width: ${14}px;
    `}
  ${e=>e.isSmall&&o.css`
      min-width: 3px;
      margin: 0 ${2}px;
      height: 3px;
    `}
`,u=o.default.div`
  width: ${14}px;
  height: ${5}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${2}px;
  background-color: #ab9ff2;
  transition: transform 0.3s ease-in-out;
  ${e=>e.position&&o.css`
      transform: translateX(${9*e.position}px);
    `}
`;var d=({numOfItems:t,currentIndex:n,maxVisible:a=5})=>{const l=t>a&&n>a-3,o=l?n-(a-3):0;return e(i).createElement(r,{shouldCenter:a>t,maxVisible:a},e(i).createElement(s,{shouldShift:l,shiftAmount:o},Array.from({length:t}).map(((t,a)=>{const o=(a===n-2||a===n+2)&&l;return e(i).createElement(c,{key:`pagination-dot-${a}`,isActive:n===a,isSmall:o})})),e(i).createElement(u,{position:n})))}})),n.register("eayxI",(function(a,l){t(a.exports,"ActionBannerList",(function(){return u}));var i=n("lDSNw"),o=n("cZIbv"),r=n("8BRi0");const s=o.default.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${e=>`translateX(${-100*e.currentIndex}%)`};
`,c=o.default.li`
  align-items: center;
  display: flex;
  height: 74px;
  flex: 0 0 100%;
  padding: ${e=>e.isActive?"0":e.isNext||e.isPrevious?"0 6px":"0"};
`,u=({banners:t,currentIndex:n})=>e(i).createElement(s,{currentIndex:n},t.map(((t,a)=>e(i).createElement(c,{key:t.id,isActive:n===a,isNext:n+1===a,isPrevious:n-1===a},e(i).createElement(r.ActionBannerListItem,{banner:t,isActive:n===a})))))})),n.register("8BRi0",(function(a,l){t(a.exports,"ActionBannerListItem",(function(){return E}));var i=n("lMzyG"),o=n("8NH57"),r=n("c1thM"),s=n("lDSNw"),c=n("cZIbv"),u=n("gMNJN"),d=n("jl49C"),g=n("2LZGp"),m=n("c3wGO"),h=n("laYjG"),p=n("aanFI"),f=n("kn91D");const b=(0,c.default)(r.motion.button)`
  background: none;
  background-color: rgba(60, 49, 91, 0.4);
  border: 1px solid rgb(60, 49, 91);
  border-radius: 8px;
  cursor: pointer;
  height: ${e=>e.isActive?74:.9*74}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
  padding: 10px 12px;
  width: 100%;

  &:hover {
    background-color: rgba(60, 49, 91, 0.6);
  }
`,x=(0,c.default)(r.motion.div)`
  align-items: center;
  display: flex;
`,k=c.default.img`
  margin-right: 12px;
  width: 44px;
`,v=(0,c.default)(f.Text).attrs({lineHeight:17,size:14})`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  text-align: left;
`,y=c.default.div`
  position: relative;
  top: -15px;
  right: -3px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
`,w=e(s).memo((({banner:t,isActive:n,onClickBanner:a,onCloseBanner:l})=>e(s).createElement(b,{layout:!0,onClick:a,isActive:n},e(s).createElement(x,{layout:!0},e(s).createElement(k,{src:t.imageUrl}),e(s).createElement(v,{weight:600},t.description),e(s).createElement(y,{onClick:l},e(s).createElement(p.IconClose,{fill:"#ffffff",width:8})))))),E=t=>{const n=(({banner:t,isActive:n})=>{const{t:a}=(0,i.useTranslation)(),l=(0,d.useDeepLink)(),{mutateAsync:r}=u.hooks.useDismissActionBanner(),{handleShowModalVisibility:c,handleHideModalVisibility:p}=(0,g.useModals)(),f=(0,s.useCallback)((n=>{const i=(0,o.generateActionBannerBaseAnalyticsPayload)(t);switch(m.actionBannerAnalytics.onBannerClick(i),t.bannerType){case o.ActionBannerType.DirectLink:{const{destinationType:e,url:a}=t;l(n,{destinationType:e,url:a});break}case o.ActionBannerType.Modal:{const{interstitial:i,destinationType:r,url:u}=t,{title:d,lineItems:g=[],imageUrl:f,primaryButtonText:b=a("commandContinue"),secondaryButtonText:x=a("commandDismiss")}=i,k=(0,o.generateActionBannerInterstitialAnalyticsPayload)(t),v=g.map((e=>({icon:e.imageUrl,subtitle:e.description,title:e.title})));c("interstitial",{bodyTitle:d,details:v,icon:f,onDismiss:()=>{m.actionBannerAnalytics.onInterstitialDismiss(k)},FooterComponent:()=>e(s).createElement(h.ButtonPair,{primaryText:b,secondaryText:x,onPrimaryClicked:()=>{l(n,{destinationType:r,url:u}),m.actionBannerAnalytics.onInterstitialPrimaryClick(k),p("interstitial")},onSecondaryClicked:()=>{m.actionBannerAnalytics.onInterstitialSecondaryClick(k),p("interstitial")}})}),m.actionBannerAnalytics.onInterstitialSeen(k);break}}}),[t,c,p,a,l]),b=(0,s.useCallback)((e=>{e.stopPropagation(),r({actionBannerId:t.id});const n=(0,o.generateActionBannerBaseAnalyticsPayload)(t);m.actionBannerAnalytics.onBannerDismiss(n)}),[t,r]);return(0,s.useMemo)((()=>({isActive:n,banner:t,onClickBanner:f,onCloseBanner:b})),[t,n,f,b])})(t);return e(s).createElement(w,Object.assign({},n))}})),n.register("jl49C",(function(a,l){t(a.exports,"useDeepLink",(function(){return m}));var i=n("8NH57"),o=n("lDSNw"),r=n("lz7nT"),s=n("aXzxc"),c=n("7J3aJ"),u=n("8182A"),d=n("d1qx3"),g=n("lrImj");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),a=(0,r.useNavigate)();return(0,o.useCallback)(((l,r)=>{const{destinationType:s,url:c}=r;switch(s){case i.DeepLinkDestination.ExternalLink:(0,d.openTabAsync)({url:c});break;case i.DeepLinkDestination.Buy:n();break;case i.DeepLinkDestination.Collectibles:a(u.Path.Collectibles);break;case i.DeepLinkDestination.Explore:a(u.Path.Explore);break;case i.DeepLinkDestination.Quests:a(u.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case i.DeepLinkDestination.Swapper:a(u.Path.Swap);break;case i.DeepLinkDestination.SettingsImportSeedPhrase:(0,d.openTabAsync)({url:"onboarding.html?append=true"});break;case i.DeepLinkDestination.ConnectHardwareWallet:(0,d.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,g.getSanityComponentMapping)(s);if(!n)return;t(l,e(o).createElement(n,null))}}}),[a,t,n])}})),n.register("lrImj",(function(e,a){t(e.exports,"getSanityComponentMapping",(function(){return o}));var l=n("8NH57"),i=n("i14LG");const o=e=>{if(e===l.DeepLinkDestination.SettingsSecurityAndPrivacy)return i.MultiChainSecurity}})),n.register("e9bgh",(function(a,l){t(a.exports,"Header",(function(){return I}));var i=n("lMzyG"),o=n("4QHep"),r=n("jlKgL"),s=n("4y59b"),c=n("lDSNw"),u=n("gmVmN"),d=n("cZIbv"),g=n("44I6u"),m=n("aanFI"),h=n("6l2nq"),p=n("goqEN"),f=n("hjnIF"),b=n("kn91D"),x=n("ibYAx");const k=(0,d.default)(g.Column).attrs({align:"center"})`
  width: ${x.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,v=(0,d.default)(g.Column).attrs({align:"center",margin:"2rem 0"})``,y=(0,d.default)(g.Column).attrs({align:"center",justify:"center",width:"100%"})`
  height: 5.3rem;
`,w=(0,d.default)(f.SkeletonLoader).attrs({height:"8px",borderRadius:"6px",backgroundColor:"#484848"})`
  opacity: 0.2;
`,E=(0,d.default)(h.Row)`
  height: 8px;
  border-radius: 6px;
  background-color: ${(0,s.hexToRGB)("#999999",.5)};
  opacity: 0.5;
`,S=(0,d.default)(p.ShrinkingText)`
  margin-bottom: 11px;
`,A=d.default.div`
  display: flex;
  flex-direction: row;
  padding: 16px 5px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 62px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
`,T=(0,d.default)(b.Text).attrs({size:15,weight:"600",color:"#FFF",lineHeight:20})``,M=(0,d.default)(b.Text).attrs({size:36,weight:"bold",color:"#777"})``,D=(0,d.default)(h.Row).attrs({justify:"center"})``,B=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,C=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,F=d.default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 326px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,I=e(c).memo((({buyButtonText:t,receiveButtonText:n,hasFungibles:a,isErrorTokens:l,isLoading:o,isHidingAllFungibles:u,isReadOnlyAccount:d,showBuyFungibleSelectionModal:g,showDepositListModal:h,showSendFungibleSelectionModal:p,value:f,earnings:b,prefetchSPLTokenMap:x,sendButtonText:I,showDollarValues:O})=>{const{t:V}=(0,i.useTranslation)(),j=N(b),$=L({earnings:b,isNeutral:!O||o||u}),W=z(f),G=P(b),U=H(f,b),{buttonTheme:Z,buttonDisabled:K}=R({isLoading:o,isEnabled:a||u,isErrorTokens:l});return e(c).createElement(k,{background:$},e(c).createElement(v,null,O?o?e(c).createElement(y,null,e(c).createElement(w,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(w,{width:"112px"})):a||u?e(c).createElement(e(c).Fragment,null,e(c).createElement(S,{maxFontSize:38,fontWeight:600},W),e(c).createElement(D,null,e(c).createElement(B,{color:j},G),e(c).createElement(C,{color:j,backgroundColor:(0,s.hexToRGB)(j,.1)},U))):l?e(c).createElement(y,null,e(c).createElement(E,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(E,{width:"112px"})):null:e(c).createElement(y,null,e(c).createElement(M,null,"–"))),d?e(c).createElement(F,null,e(c).createElement(A,null,e(c).createElement(m.IconEye,{width:20,height:20,fill:"#FFFFFF"}),e(c).createElement(T,null,V("readOnlyAccountBannerWarning")))):e(c).createElement(F,null,e(c).createElement(r.Button,{onMouseEnter:x,onClick:h,disabled:K,variant:{theme:Z}},n),e(c).createElement(r.Button,{onClick:g,variant:{theme:Z},disabled:K},t),e(c).createElement(r.Button,{onClick:p,variant:{theme:Z},disabled:K},I)))})),L=({earnings:e,isNeutral:t})=>t||void 0===e||0===e?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":e>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)",N=e=>void 0===e||0===e?"#777777":e>0?"#21E56F":"#EB3742",z=e=>void 0===e?"-":0===e?"$0.00":(0,u.formatDollarAmount)(e),P=e=>void 0===e?"-":0===e?"+$0.00":(0,u.formatDollarAmount)(e,{includePlusPrefix:!0}),H=(e,t)=>{const n=void 0===t;return void 0===e||n?"-":`${n||t>=0?"+":"-"}${Math.abs((0,o.calculatePercentChange)(e-t,e)).toFixed(2)}%`},R=({isLoading:e,isEnabled:t,isErrorTokens:n})=>{let a="primary",l=!1;switch(!0){case e:a="secondary",l=!0;break;case t:a="primary",l=!1;break;case n:a="secondary",l=!0}return{buttonTheme:a,buttonDisabled:l}}})),n.register("goqEN",(function(a,l){t(a.exports,"ShrinkingText",(function(){return d}));var i=n("lDSNw"),o=n("cZIbv"),r=n("gw3Qt"),s=n("kn91D");const c=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,u=(0,o.default)(s.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: ${e=>e.fontWeight};
`,d=e(i).memo((({children:t,className:n,maxFontSize:a,fontWeight:l=500})=>{const[o,s]=(0,r.useFitText)();return e(i).createElement(c,{className:n,ref:s,fontSize:a},e(i).createElement(u,{fontSize:o,weight:l,noWrap:!0},t))}))})),n.register("gw3Qt",(function(e,a){t(e.exports,"useFitText",(function(){return i}));var l=n("lDSNw");const i=()=>{const e=(0,l.useRef)(null),[t,n]=(0,l.useState)({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:i,fontSizeMin:o,fontSizePrev:r}=t;return(0,l.useEffect)((()=>{const t=Math.abs(a-r)<=5,l=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t){if(l){n({fontSize:r<a?r:a-(r-a),fontSizeMax:i,fontSizeMin:o,fontSizePrev:r})}return}let c,u=i,d=o;l?(c=s?r-a:o-a,u=Math.min(i,a)):(c=s?i-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,i,o,r,e]),[`${a}%`,e]}})),n.register("iKm61",(function(a,l){t(a.exports,"HomeError",(function(){return b}));var i=n("lDSNw"),o=n("cZIbv"),r=n("44I6u"),s=n("aanFI"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(r.Column).attrs({align:"center"})``,g=o.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,h=(0,o.default)(u.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,p=(0,o.default)(u.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,f=(0,o.default)(u.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,b=e(i).memo((t=>e(i).createElement(d,null,e(i).createElement(g,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(i).createElement(h,null,t.title),e(i).createElement(p,null,t.description),e(i).createElement(f,{onClick:t.refetch},t.buttonText))))})),n.register("iTDlK",(function(a,l){t(a.exports,"ManageTokenListButton",(function(){return m}));var i=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("3ou76"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(c.Row).attrs({justify:"center",margin:"0 auto",width:"auto"})`
  cursor: pointer;
  height: 48px;
  margin-bottom: 10px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #ab9ff2 !important;
    }
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
  }
`,g=(0,o.default)(u.Text).attrs({size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0})``,m=e(i).memo((t=>e(i).createElement(d,{onClick:t.onClick},e(i).createElement(s.IconWrapper,null,e(i).createElement(r.IconTokenListSettings,null)),e(i).createElement(g,null,t.buttonText))))})),n.register("1j4wJ",(function(e,a){t(e.exports,"useWalletBalanceAnalytics",(function(){return r}));var l=n("lDSNw"),i=n("iyZMg"),o=n("gMNJN");function r(e,t,n){const a=o.hooks.useIsTestnetMode(),[r,s]=(0,l.useState)(!1);(0,l.useEffect)((()=>{a||s(!1)}),[n,a]),(0,l.useEffect)((()=>{!r&&t.length&&e.length&&!a&&(i.fungibleAnalytics.walletBalance(n,t,e),s(!0))}),[n,t,e,r,a])}})),n.register("iyZMg",(function(e,a){t(e.exports,"fungibleAnalytics",(function(){return o}));var l=n("gYh0e"),i=n("h5kyv");const o=new(0,l.FungibleAnalytics)(i.analytics)})),n.register("8egSn",(function(a,l){t(a.exports,"FungibleDetailPage",(function(){return $}),(function(e){return $=e}));var i=n("6Tvfa"),o=n("belzv"),r=n("lBuGR"),s=n("gYh0e"),c=n("5VjGu"),u=n("lMzyG"),d=n("iPvw0"),g=n("4y59b"),m=n("fOc77"),h=n("jqm4V"),p=n("3yHS8"),f=n("lDSNw"),b=n("lz7nT"),x=n("NQvFB"),k=n("HLcoo"),v=n("cZIbv"),y=n("jQk2k"),w=n("aLflh"),E=n("lLIZI"),S=n("aXzxc"),A=n("gPZGr"),T=n("fskOJ"),M=n("7CjHJ"),D=n("jBYwZ"),B=n("2pb0B"),C=n("1HSLJ"),F=n("3OE1H"),I=n("gMNJN"),L=n("2LZGp"),N=n("8182A"),z=n("h5kyv"),P=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function r(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const H=v.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,R=v.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,O=v.default.div`
  margin-bottom: 9px;
  width: 100%;
`,V=e=>{const{networkID:t,fungibleKey:n}=e,{data:[a=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{t:l}=(0,u.useTranslation)(),{data:i}=I.hooks.useSelectedMultiChainAccount(),c=null==i?void 0:i.isReadOnly,{addresses:d,accountIdentifier:g}=(0,f.useMemo)((()=>{var e,t;return{addresses:null!==(e=null==i?void 0:i.addresses)&&void 0!==e?e:[],accountIdentifier:null!==(t=null==i?void 0:i.identifier)&&void 0!==t?t:""}}),[i]),{fungible:m}=I.hooks.useFungible({key:n}),{fungible:p}=I.hooks.useFungible({key:s.FungibleTokenType.SolanaNative}),v=(null==m?void 0:m.type)===s.FungibleTokenType.SolanaNative&&!c,y=void 0!==m?(0,s.parseOwnerAddress)(m):"",w=I.hooks.useFungibleExplorerUrl(m),{explorerName:E,explorerUrl:A}={explorerName:null==w?void 0:w.explorerName,explorerUrl:null==w?void 0:w.explorerUrl},T=(0,f.useMemo)((()=>({viewInExplorer:l("assetDetailViewOnExplorer",{explorer:E}),stakeSolText:l("assetDetailStakeSOL"),unwrapAllText:l("assetDetailUnwrapAll"),unwrappingSOLText:l("assetDetailUnwrappingSOL")})),[E,l]),{showValidatorListModal:M,hideValidatorListModal:D}=(0,S.useLegacyModals)(),B=(0,b.useNavigate)(),C=o.Chains.isSolanaNetworkID(t)?(0,k.getClusterBySolanaChainId)(t):"mainnet-beta",{mutateAsync:F}=I.hooks.useUnwrapSOL((0,k.createConnection)(C));return(0,f.useMemo)((()=>{const e=[];if((null==m?void 0:m.type)===s.FungibleTokenType.SPL&&m.data.mintAddress===h.NATIVE_MINT.toBase58()){const t=p,n=d.find(o.isSolanaChainAddress);!!m.data.splTokenAccountPubkey&&void 0!==n&&!!t&&+t.data.amount>x.DEFAULT_FEE.toNumber()&&!c&&e.unshift({key:"unwrap-all",label:T.unwrapAllText,onClick:()=>{P(void 0,void 0,void 0,(function*(){yield F({accountIdentifier:g,solanaChainAddress:n,unwrapSOLText:T.unwrappingSOLText}),B(N.Path.Notifications)}))}})}return y&&!a&&e.push({key:"view-in-explorer",label:T.viewInExplorer,onClick:()=>{window.open(A,"_blank")}}),v&&!a&&e.push({key:"stake-sol",label:T.stakeSolText,onClick:()=>M({onClose:D})}),e}),[m,y,v,p,d,T.unwrapAllText,T.unwrappingSOLText,T.viewInExplorer,T.stakeSolText,F,g,B,A,M,D,a,c])},j=e(f).memo((t=>{var n;const{chainAddress:a,fungible:l,fungibleName:i,actionItems:o,tokenAddress:s,fungibleSymbol:u,fungibleBalance:d,fungiblePrice:g,fungibleTokenType:m,fungiblePermanentDelegate:h,summaryItems:p,canStake:b,showUnwrapBlurEth:x,showDollarValue:k,i18nStrings:v,accounts:M,pageHeader:I,isDeveloperMode:L,developerModeStatus:N,handleShowSendModal:z,handleShowDepositFungibleModal:P,handleShortcutsClick:V,enableAssetDetails:j,walletAddress:$,isReadOnlyAccount:W,isLoadingShortcuts:G}=t,U=e(f).createElement(e(f).Fragment,null,e(f).createElement(y.PageHeader,{isSticky:!0,items:o.length>0?o:void 0},I),e(f).createElement(O,null,j&&l?e(f).createElement(e(f).Fragment,null,e(f).createElement(B.FungibleSummaryCard,{type:l.type,chain:l.data.chain,logoUri:l.data.logoUri,name:l.data.name,price:l.data.price,priceChange24h:l.data.priceChange24h,symbol:l.data.symbol,tokenAddress:l.data.tokenAddress}),!W&&e(f).createElement(A.FungibleCallToAction,{fungible:l,walletAddress:$})):e(f).createElement(T.FungibleDetailHeader,{chainAddress:a,balance:d,symbol:u,mint:s,dollarValue:g,fungibleTokenType:m,showDollarValue:k,sendButtonText:v.sendButtonText,receiveButtonText:v.receiveButtonText,handleShowSendModal:z,handleShowDepositFungibleModal:P,handleShortcutsClick:V,isLoadingButtons:G,isReadOnlyAccount:W}),b&&e(f).createElement(H,null,e(f).createElement(C.StartEarningSol,null)),x&&l?e(f).createElement(H,null,e(f).createElement(F.ButtonUnwrapFungible,{fungible:l})):null,h&&e(f).createElement(R,null,e(f).createElement(E.WarningDialog,{message:v.permanentDelegateWarning,variant:"warning"})),p.length>0?e(f).createElement(D.FungibleSummary,{name:i,items:p}):null)),Z=(0,c.useFetchInfiniteHistoryItems)(M),K=Z.isLoading||"loading"===N,{isError:_}=(0,c.useFetchRefreshInfiniteHistoryItems)(M),{showHistoryItemModal:J,showPendingTransactionModal:Y}=(0,S.useLegacyModals)(),{data:[Q=!1]}=(0,r.useFeatureFlags)(["enable-spam-filtering"]);return void 0===l?U:e(f).createElement(w.HistoryList,Object.assign({header:U,dataPages:null===(n=Z.data)||void 0===n?void 0:n.pages,isLoading:K,fetchNextPage:Z.fetchNextPage,refetch:Z.refetch,hasNextPage:Z.hasNextPage,isFetchingNextPage:Z.isFetchingNextPage,isError:Z.isError,isRefreshError:_,isRefreshingConfirmedTxs:!1,isDeveloperMode:L,showHistoryItemModal:J,showPendingTransactionModal:Y},Q?{filter:e=>!(0,c.isSpamTransaction)(e,a?[a]:[])}:{}))})),$=e(f).memo((t=>{const{data:n,loading:a}=(t=>{const{networkID:n,fungibleKey:a,name:l,symbol:h,tokenAddress:b,walletAddress:x}=t,{data:[v=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{handleShowModalVisibility:y}=(0,L.useModals)(),{showSendFungibleFormModal:w,showDepositFungibleModal:E,hideDepositFungibleModal:A}=(0,S.useLegacyModals)(),{data:T,isLoading:M}=I.hooks.useSelectedMultiChainAccount(),D=null==T?void 0:T.isReadOnly,{data:B=i.DEFAULT_DEVELOPER_MODE,status:C}=I.hooks.useDeveloperMode(),F=B.isDeveloperMode,{fungibles:N,isLoadingTokens:P,refetch:H}=I.hooks.useFungibles(),R=(0,s.useFungiblesStore)((e=>e.setSendFungibleKey)),{fungible:O,fungibleName:j,fungibleSymbol:$,fungibleBalance:W,fungiblePrice:G,fungibleTokenType:U,fungiblePermanentDelegate:Z}=(0,f.useMemo)((()=>{var t,n,i;const o=N.find((e=>e.data.key===a)),r=(0,s.getPermananetDelegateAddress)(o);return{fungible:o,fungibleName:null!==(t=null==o?void 0:o.data.name)&&void 0!==t?t:l,fungibleSymbol:null!==(n=null==o?void 0:o.data.symbol)&&void 0!==n?n:h,fungibleBalance:null!==(i=null==o?void 0:o.data.balance)&&void 0!==i?i:new(e(p))(0),fungiblePrice:null==o?void 0:o.data.usd,fungibleTokenType:null==o?void 0:o.type,fungiblePermanentDelegate:r}}),[a,N,l,h]),{data:K}=I.hooks.useSelectedChainAddress({networkID:n,address:null==O?void 0:O.data.walletAddress}),{t:_}=(0,u.useTranslation)(),J=(0,f.useMemo)((()=>({recentActivityText:_("assetDetailRecentActivity"),sendButtonText:_("commandSend"),receiveButtonText:_("commandReceive"),permanentDelegateWarning:_("assetDetailPermanentDelegateWarning",{delegate:Z})})),[_,Z]),Y=j,Q=(0,g.truncateString)(Y,20),q=(0,c.getTokenHistoryFilterId)(O),X=(0,f.useMemo)((()=>{const e=K?[K]:[];return(0,c.getAccountsWithFilter)(e,n,q)}),[K,n,q]),ee=(null==O?void 0:O.data.tokenAddress)===s.BLUR_ETH_MINT_ADDRESS&&!D,te=(0,f.useCallback)((()=>{O&&(R(null==O?void 0:O.data.key),w(O))}),[O,R,w]),ne=(0,f.useCallback)((()=>{var e;E({accountName:null!==(e=null==T?void 0:T.name)&&void 0!==e?e:"",walletAddress:x,address:b,symbol:$,onClose:A,networkID:n})}),[null==T?void 0:T.name,A,b,x,E,$,n]),ae=!o.Chains.isSolanaNetworkID(n)||"mainnet-beta"===(0,k.getClusterBySolanaChainId)(n),{isSolana:le}=(0,f.useMemo)((()=>{const e=N.find((e=>e.data.key===a));return{isSolana:(null==e?void 0:e.type)===s.FungibleTokenType.SolanaNative}}),[a,N]),ie=le&&!D,oe=V(t),{summaryItems:re}=I.hooks.useFungibleDetailViewState(a),{data:se}=I.hooks.useShowWalletShortcutsSettings(),ce=null!=se?se:d.DEFAULT_SHOW_WALLET_SHORTCUTS,{shortcuts:ue,isLoading:de}=I.hooks.useShortcuts({type:"fungible",externalUrl:null==O?void 0:O.data.externalUrl,owner:x,tokenAddress:null==O?void 0:O.data.tokenAddress},"desktop",ce),ge=(0,f.useMemo)((()=>{if(ce&&O&&0!==ue.length)return()=>{var e,t;const n=(0,o.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(O));z.analytics.capture("walletShortcutsModalOpenClick",(0,m.trackModalOpen)({type:"fungible",caip19:n,hostname:null!==(e=null==O?void 0:O.data.externalUrl)&&void 0!==e?e:"",platform:"browser-ext"})),y("shortcutsSheet",{shortcuts:ue,type:"fungible",caip19:n,hostname:null!==(t=null==O?void 0:O.data.externalUrl)&&void 0!==t?t:""})}}),[ue,y,O,ce]);return{data:(0,f.useMemo)((()=>({chainAddress:K,fungible:O,tokenAddress:b,fungibleName:j,fungibleSymbol:$,fungibleBalance:W,fungiblePrice:G,fungibleTokenType:U,fungiblePermanentDelegate:Z,summaryItems:re,canStake:ie,showUnwrapBlurEth:ee,showDollarValue:ae,i18nStrings:J,accounts:X,actionItems:oe,pageHeader:Q,isDeveloperMode:F,developerModeStatus:C,handleShowSendModal:te,handleShowDepositFungibleModal:ne,handleShortcutsClick:ge,refetch:H,enableAssetDetails:v,walletAddress:x,isReadOnlyAccount:D,isLoadingShortcuts:de})),[K,O,b,j,$,W,G,U,Z,re,ie,ee,ae,J,X,oe,Q,F,C,te,ne,ge,H,v,x,D,de]),loading:M||P}})(t);return a?e(f).createElement(M.FungibleDetailLoader,{depositText:n.i18nStrings.receiveButtonText,sendText:n.i18nStrings.sendButtonText}):e(f).createElement(j,Object.assign({},n))}))})),n.register("lLIZI",(function(e,a){t(e.exports,"WarningDialog",(function(){return g}));var l=n("4raQz"),i=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("kn91D");const c=o.default.div`
  display: flex;
  background-color: ${e=>e.color};
  padding: 16px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.color};
  border-radius: 12px;
  gap: 8px;

  & + & {
    margin-top: 8px;
  }
`,u=o.default.div`
  padding: 3px;
`,d=(0,o.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,g=({message:e,inverted:t=!1,variant:n="warning"})=>{let a="#2A2A2A",o="#222222",s=i.createElement(r.IconDangerOctagon,{fill:o,width:18,height:18});switch(n){case"warning":a=l.simulations.WARNING_COLOR,t||(s=i.createElement(r.IconDangerTriangle,{fill:"#222222",width:18,height:18}));break;case"danger":a=l.simulations.DANGER_COLOR;break;case"error":a="#2A2A2A",o=l.simulations.ERROR_COLOR;break;default:a=l.simulations.WARNING_COLOR}return i.createElement(c,{color:a},i.createElement(u,null,s),i.createElement(d,{color:o,padding:"4px 0","data-testid":"approval-warning-text"},e))}})),n.register("gPZGr",(function(a,l){t(a.exports,"FungibleCallToAction",(function(){return E}));var i=n("belzv"),o=n("gYh0e"),r=n("lMzyG"),s=n("4y59b"),c=n("lDSNw"),u=n("lz7nT"),d=n("hjWkM"),g=n("aanFI"),m=n("6ha3o"),h=n("aXzxc"),p=n("gMNJN"),f=n("8182A"),b=n("jEKlY");function x({fungible:e,walletAddress:t}){const{data:n}=p.hooks.useSelectedMultiChainAccount(),{showDepositFungibleModal:a,hideDepositFungibleModal:l}=(0,h.useLegacyModals)();return(0,c.useCallback)((()=>{var i;e.data.symbol&&a({accountName:null!==(i=null==n?void 0:n.name)&&void 0!==i?i:"",walletAddress:t,address:e.data.tokenAddress,symbol:e.data.symbol,onClose:l,networkID:e.data.chain.id})}),[null==n?void 0:n.name,l,e,t,a])}function k(){const{pushDetailView:t}=(0,m.useDetailViews)();return(0,c.useCallback)((()=>{t(e(c).createElement(b.FungibleStaking,null))}),[t])}function v({fungible:e}){const{showSendFungibleFormModal:t}=(0,h.useLegacyModals)();return(0,c.useCallback)((()=>{o.useFungiblesStore.getState().setSendFungibleKey(e.data.key),t(e)}),[e,t])}function y({fungible:e}){const t=(0,u.useNavigate)();return(0,c.useCallback)((()=>{const n=(0,o.getFungibleCaip19FromFungible)(e),a=(0,i.encodeCaip19)(n);t(`/${f.Path.Swap}?sellFungible=${a}`)}),[e,t])}function w({explorer:e}){return(0,c.useCallback)((()=>{e&&window.open(e.explorerUrl,"_blank")}),[e])}const E=e(c).memo((t=>{const{ctaButtons:n,handleShowSendModal:a,handleReceive:l,handleSwap:i,handleExplorer:u,handleStakeAction:m}=function({fungible:t,walletAddress:n}){const{t:a}=(0,r.useTranslation)(),l=p.hooks.useFungibleExplorerUrl(t),i=(0,c.useMemo)((()=>({viewInExplorer:a("assetDetailViewOnExplorer",{explorer:null==l?void 0:l.explorerName}),sendButtonText:a("commandSend"),receiveButtonText:a("commandReceive"),stakeButtonText:a("commandStake"),buyButtonText:a("commandBuy"),swapButtonText:a("commandSwap")})),[a,l]),u=t.type===o.FungibleTokenType.SolanaNative;return{ctaButtons:(0,c.useMemo)((()=>[{text:i.sendButtonText,icon:e(c).createElement(g.IconArrowUpRight,{height:20,fill:"currentColor"}),value:"send"},{text:i.swapButtonText,icon:e(c).createElement(g.IconArrowDouble,{height:20,fill:"currentColor"}),value:"swap"},u&&{text:i.stakeButtonText,icon:e(c).createElement(g.IconShortcutsStake2,{height:20,fill:"currentColor"}),value:"stake"},{text:i.receiveButtonText,icon:e(c).createElement(g.IconArrowDownRight,{height:20,fill:"currentColor"}),value:"receive"},{text:i.buyButtonText,icon:e(c).createElement(g.IconDollar,{height:20,fill:"currentColor"}),value:"buy"},{text:i.viewInExplorer,icon:e(c).createElement(g.IconExternal,{height:20,fill:"currentColor"}),value:"explorer"}].filter(s.filterBoolean)),[u,i]),handleShowSendModal:v({fungible:t}),handleSwap:y({fungible:t}),handleReceive:x({fungible:t,walletAddress:n}),handleExplorer:w({explorer:l}),handleStakeAction:k()}}(t);return e(c).createElement(d.CTABar,{buttons:n,uiContext:{name:"fungibleDetail"},onClick:e=>{switch(e){case"send":return a();case"stake":return m();case"swap":return i();case"explorer":return u();case"receive":return l();case"buy":break;default:throw(0,s.assertNever)(e)}}})}))})),n.register("hjWkM",(function(a,l){t(a.exports,"CTABar",(function(){return p}));var i=n("lDSNw"),o=n("cZIbv"),r=n("2LZGp"),s=n("iyZMg"),c=n("aanFI");const u=o.default.div`
  margin: 8px 0;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${e=>`repeat(${e.buttonCount}, minmax(0, 1fr));`};
`,d=o.default.button`
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,g=o.default.div`
  height: 20px;
  overflow: hidden;
`,m=(0,o.default)(d)`
  background: #ab9ff2;
  * {
    color: #222222;
  }
  &:hover:enabled {
    background: #e2dffe;
  }

  svg {
    fill: #222222;
  }
`,h=(0,o.default)(d)`
  background: #333333;
  * {
    color: #ffffff;
  }
  &:hover:enabled {
    background: #444444;
  }

  svg {
    fill: #ffffff;
  }
`;function p({buttons:t,onClick:n,maxButtons:a=4,uiContext:l}){const o=t.length>a?t.slice(a-1):[],d=o.length>0?t.slice(0,a-1):t,p=t.length,{handleShowModalVisibility:f,handleHideModalVisibility:b}=(0,r.useModals)();return e(i).createElement(u,{buttonCount:Math.min(t.length,a)},d.map(((t,r)=>e(i).createElement(m,{key:t.value,type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:l,index:r,position:"primary",value:t.value,maxButtons:a,totalButtons:p,primaryButtons:d,moreButtons:o}),n(t.value)}},e(i).createElement(g,null,t.icon),e(i).createElement("span",null,t.text)))),o.length>0?e(i).createElement(h,{type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:l,maxButtons:a,totalButtons:p}),f("callToActionSheet",{buttons:o,onClick:(e,t)=>{b("callToActionSheet"),s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:l,index:t,position:"more",value:e,maxButtons:a,totalButtons:p,primaryButtons:d,moreButtons:o}),n(e)}})}},e(i).createElement(c.IconMore,{height:20}),e(i).createElement("span",null,"More")):null)}})),n.register("jEKlY",(function(a,l){t(a.exports,"FungibleStaking",(function(){return x}));var i=n("lMzyG"),o=n("gd9Oy"),r=n("4y59b"),s=n("lDSNw"),c=n("cZIbv"),u=n("aanFI"),d=n("02iAW"),g=n("gMNJN"),m=n("1di4e"),h=n("a8kcR");const p=c.default.div`
  height: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,f=c.default.div`
  font-size: 28px;
`,b=c.default.div`
  font-size: 14px;
  color: #a09fa6;
`;function x(){const{t:t}=(0,i.useTranslation)(),{connection:n,publicKey:a}=function(){var e;const{data:t}=g.hooks.useSelectedChainAddress(o.AddressType.Solana),n=null!==(e=null==t?void 0:t.address)&&void 0!==e?e:"",{connection:a}=g.hooks.useSelectedSolanaConnection();return(0,s.useMemo)((()=>({connection:a,publicKey:n})),[a,n])}(),l=g.hooks.useStakeAccounts(n,a);switch((0,s.useMemo)((()=>!l.isLoading&&!l.isFetching&&l.isSuccess&&l.data?"STAKE_LIST":"LOADING"),[l.isLoading,l.isFetching,l.isSuccess,l.data])){case"LOADING":return e(s).createElement(p,null,e(s).createElement(u.IconSVGContainer,{size:72},e(s).createElement(u.Shape,{shape:"circle",color:(0,r.hexToRGB)(h.theme.purple,.2)},e(s).createElement(d.Spinner,{color:h.theme.purple,diameter:48,position:"absolute"}))),e(s).createElement(f,null,t("startEarningSolLoading")),e(s).createElement(b,null,t("startEarningSolSearching")));case"STAKE_LIST":return e(s).createElement(m.StakeAccountListPage,null);default:return null}}})),n.register("1di4e",(function(a,l){t(a.exports,"StakeAccountListPage",(function(){return p}));var i=n("belzv"),o=n("lMzyG"),r=n("lDSNw"),s=n("HLcoo"),c=n("jQk2k"),u=n("aanFI"),d=n("ll4uk"),g=n("aXzxc"),m=n("7sEvl"),h=n("gMNJN");const p=()=>{const{t:t}=(0,o.useTranslation)(),{showValidatorListModal:n,hideValidatorListModal:a}=(0,g.useLegacyModals)(),{data:l}=h.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:p,connection:f}=(0,r.useMemo)((()=>{var e,t;const n=(null!==(e=null==l?void 0:l.addresses)&&void 0!==e?e:[]).find((e=>i.Chains.isSolanaNetworkID(e.networkID))),a=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaPublicKey:a,connection:(0,s.createConnection)((0,s.getClusterBySolanaChainId)(o))}}),[l]),b=h.hooks.useStakeAccounts(f,p);return e(r).createElement(e(r).Fragment,null,e(r).createElement(c.PageHeader,{onIconClick:()=>n({onClose:a}),icon:e(r).createElement(u.IconPlus,null)},t("stakeAccountListViewPrimaryText")),e(r).createElement(d.FullHeightLoadingContent,{isLoading:!b.isFetched},e(r).createElement(m.StakeAccountList,null)))}})),n.register("7sEvl",(function(a,l){t(a.exports,"StakeAccountList",(function(){return y}));var i=n("belzv"),o=n("lMzyG"),r=n("6oMdZ"),s=n("lDSNw"),c=n("HLcoo"),u=n("gmVmN"),d=n("cZIbv"),g=n("bpx2y"),m=n("ll4uk"),h=n("bkZ83"),p=n("jAo12"),f=n("4tc9b"),b=n("kn91D"),x=n("aXzxc"),k=n("gMNJN"),v=n("h5kyv");const y=()=>{var t;const{t:n}=(0,o.useTranslation)();(0,s.useEffect)((()=>(v.analytics.capture("showStakeAccountList"),()=>{v.analytics.capture("hideStakeAccountList")})),[]);const{data:a}=k.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:l,connection:r}=(0,s.useMemo)((()=>{var e,t;const n=(null!==(e=null==a?void 0:a.addresses)&&void 0!==e?e:[]).find((e=>i.Chains.isSolanaNetworkID(e.networkID))),l=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaChainAddress:n,solanaPublicKey:l,connection:(0,c.createConnection)((0,c.getClusterBySolanaChainId)(o))}}),[a]),u=k.hooks.useStakeAccounts(r,l),d=null!==(t=u.data)&&void 0!==t?t:[];return e(s).createElement(m.FullHeightLoadingContent,{isLoading:!u.isFetched},u.isError?e(s).createElement(g.ErrorView,{title:n("errorAndOfflineSomethingWentWrong"),description:n("stakeAccountListErrorFetching"),refetch:()=>{u.isFetching||u.refetch()}}):e(s).createElement(w,{data:d,connection:r}),e(s).createElement("br",null))},w=t=>{const{t:n}=(0,o.useTranslation)(),a=F(t.connection),l=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),i=l.filter((e=>e.type===r.StakeAccountType.Delegated)),c=l.filter((e=>e.type===r.StakeAccountType.Initialized));return i.length||c.length?e(s).createElement(e(s).Fragment,null,i.length>0&&e(s).createElement(e(s).Fragment,null,i.map((n=>{var l,i,o;const{stake:r,voter:c}=n.info.stake.delegation,u=a.get(c),d=null===(l=null==u?void 0:u.info)||void 0===l?void 0:l.name,g=null===(i=null==u?void 0:u.info)||void 0===i?void 0:i.keybaseUsername,m=null===(o=null==u?void 0:u.info)||void 0===o?void 0:o.iconUrl;return e(s).createElement(B,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,delegatedStake:Number(r),inflationReward:n.inflationReward,voteAccountPubkey:c,name:d,keybaseUsername:g,iconUrl:m,connection:t.connection})}))),c.length>0&&e(s).createElement(e(s).Fragment,null,c.map((n=>e(s).createElement(C,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,inflationReward:n.inflationReward,connection:t.connection}))))):e(s).createElement(E,null,e(s).createElement(b.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},E=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,S=(0,d.default)(f.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,A=(0,d.default)(p.TokenImage).attrs({width:44})``,T=d.default.div`
  overflow: hidden;
`,M=d.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,D=(0,d.default)(b.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,B=t=>{var n,a,l;const{t:i}=(0,o.useTranslation)(),{showStakeAccountDetailModal:r}=(0,x.useLegacyModals)(),{data:c}=k.hooks.useKeybaseUserAvatar(t.keybaseUsername),d=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:(0,u.formatHashMedium)(t.voteAccountPubkey),g=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,m=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>{r({stakeAccountPubkey:t.pubkey})}},e(s).createElement(A,{iconUrl:null!==(l=t.iconUrl)&&void 0!==l?l:c}),e(s).createElement(T,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},d),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.delegatedStake))),e(s).createElement(M,null,e(s).createElement(D,{size:14,activationState:null==g?void 0:g.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==g?void 0:g.state)?i("stakeAccountListActivationActivating"):"","active"===(null==g?void 0:g.state)?i("stakeAccountListActivationActive"):"","inactive"===(null==g?void 0:g.state)?i("stakeAccountListActivationInactive"):"","deactivating"===(null==g?void 0:g.state)?i("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(m?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},m?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(h.SolBalance,null,t.inflationReward)):"-"))))},C=t=>{const{t:n}=(0,o.useTranslation)(),{showStakeAccountDetailModal:a}=(0,x.useLegacyModals)(),l=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,i=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(s).createElement(A,null),e(s).createElement(T,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.balance))),e(s).createElement(M,null,e(s).createElement(D,{size:14,activationState:null==l?void 0:l.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==l?void 0:l.state)?n("stakeAccountListActivationActivating"):"","active"===(null==l?void 0:l.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==l?void 0:l.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==l?void 0:l.state)?n("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(i?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},i&&"+",e(s).createElement(h.SolBalance,null,t.inflationReward)))))},F=e=>{var t;const n=k.hooks.useValidators(e),a=null!==(t=n.results)&&void 0!==t?t:[],l=(0,s.useRef)(a);l.current=a;return(0,s.useMemo)((()=>new Map(l.current.map((e=>[e.voteAccountPubkey,e])))),[n.dataUpdatedAt,l])}})),n.register("fskOJ",(function(a,l){t(a.exports,"FungibleDetailHeader",(function(){return k}));var i=n("gYh0e"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("laYjG"),u=n("44I6u"),d=n("aanFI"),g=n("goqEN"),m=n("kn91D"),h=n("gMNJN"),p=n("h5kyv");const f=(0,s.default)(u.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
`,b=(0,s.default)(m.Text).attrs({size:16,color:"#777777"})`
  margin-top: 7px;
`,x=(0,s.default)(c.ButtonGroup)`
  margin-top: 20px;
`,k=e(o).memo((t=>{const{isLoadingButtons:n,mint:a,symbol:l,balance:s,dollarValue:u,fungibleTokenType:m,showDollarValue:k,sendButtonText:v,receiveButtonText:y,chainAddress:w,isReadOnlyAccount:E,handleShowSendModal:S,handleShowDepositFungibleModal:A,handleShortcutsClick:T}=t,M=a?(0,r.formatAddressShort)(a):void 0,D=`${(0,r.formatTokenAmount)(s)} ${null!=l?l:M}`,B=(0,o.useCallback)((e=>e!==i.FungibleTokenType.BRC20||!(0,p.isFeatureEnabled)("kill-brc20-sends")),[]),C=h.hooks.useCanSendFungible({balance:s,fungibleTokenType:m,chainAddress:w,isSendEnabledForTokenType:B}),F=!E;return e(o).createElement(f,null,e(o).createElement(g.ShrinkingText,{maxFontSize:38},D),k&&e(o).createElement(b,null,u?(0,r.formatDollarAmount)(u):"–"),F&&e(o).createElement(x,{buttonStyle:c.ButtonPairStyle.Small,buttons:[{theme:"primary",text:y,onClick:A},{theme:C?"primary":"default",text:v,onClick:S,disabled:!C},{key:"shortcuts",theme:"primary",text:e(o).createElement(d.IconShortcuts,{fill:"currentColor"}),onClick:null!=T?T:()=>{},hideButton:n||!T}]}))}))})),n.register("7CjHJ",(function(a,l){t(a.exports,"FungibleDetailLoader",(function(){return f}));var i=n("lDSNw"),o=n("cZIbv"),r=n("laYjG"),s=n("44I6u"),c=n("6l2nq"),u=n("hjnIF");const d=[1,2],g=(0,o.default)(c.Row)`
  height: 35px;
`,m=(0,o.default)(s.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,h=o.default.div`
  width: 44px;
  height: 44px;
  margin-right: 10px;
`,p=(0,o.default)(u.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,f=e(i).memo((t=>e(i).createElement(e(i).Fragment,null,e(i).createElement(g,{justify:"center"},e(i).createElement(p,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(m,null,e(i).createElement(u.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(s.Column,null,e(i).createElement(c.Row,{justify:"center",margin:"0 auto"},e(i).createElement(p,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(c.Row,{justify:"center",margin:"0 auto"},e(i).createElement(p,{width:"60px",height:"8px"})))),e(i).createElement(r.ButtonPair,{primaryText:t.sendText,primaryDisabled:!0,primaryTheme:"default",secondaryText:t.depositText,secondaryDisabled:!0,secondaryTheme:"default",buttonPairStyle:r.ButtonPairStyle.Small})),d.map((t=>e(i).createElement(u.SkeletonLoader,{key:`fungible-detail-row-loader-${t}`,align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(h,null,e(i).createElement(u.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(s.Column,null,e(i).createElement(c.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(p,{width:"120px"}),e(i).createElement(p,{width:"60px"})),e(i).createElement(c.Row,{justify:"space-between"},e(i).createElement(p,{width:"75px"}),e(i).createElement(p,{width:"35px"})))))))))})),n.register("jBYwZ",(function(a,l){t(a.exports,"FungibleSummary",(function(){return g}));var i=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("ks67t"),c=n("kn91D");const u=r.default.div`
  margin: 24px auto 0 auto;
  width: 100%;
`,d=(0,r.default)(c.Text).attrs({size:16,weight:500,color:"#777777",textAlign:"left",margin:"0 auto 16px 0",noWrap:!0})``,g=({name:t,items:n})=>{const{t:a}=(0,i.useTranslation)();return e(o).createElement(u,null,e(o).createElement(d,null,a("assetDetailAboutLabel",{fungibleName:t})),e(o).createElement(s.Summary,{rows:n}))}})),n.register("2pb0B",(function(a,l){t(a.exports,"FungibleSummaryCard",(function(){return f}));var i=n("belzv"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("6EObQ");const u=s.default.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`,d=s.default.div`
  display: flex;
  flex-direction: column;
`,g=s.default.div`
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`,m=s.default.div`
  font-size: 15px;
  line-height: 20px;
  text-align: right;
  color: ${e=>e.positive?"#21E56F;":"#EB3742;"};
`,h=s.default.div`
  display: flex;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #777777;
  font-size: 15px;
  line-height: 20px;
  text-align: ${e=>{var t;return null!==(t=e.textAlign)&&void 0!==t?t:"left"}};
`,p=s.default.figure`
  margin-right: 12px;
`,f=({logoUri:t,symbol:n,tokenAddress:a,chain:l,price:s,priceChange24h:f,name:b,type:x})=>{if(l.id===i.BitcoinNetworkID.Mainnet||l.id===i.BitcoinNetworkID.Testnet)return null;const k="number"==typeof f?f:e(o).createElement(e(o).Fragment,null,"—");return e(o).createElement(u,null,e(o).createElement(p,null,e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:t,fallback:n||a},tokenType:x,chainMeta:l})),e(o).createElement(d,null,e(o).createElement(g,null,b," "),e(o).createElement(h,null,n," • ",(0,r.formatDollarAmount)(s||0)," ","number"==typeof k&&0!==k?e(o).createElement(m,{positive:k>0},(0,r.formatNumber)(k,{includePlusPrefix:!0,suffix:"%"})):e(o).createElement(e(o).Fragment,null,(0,r.formatNumber)(0,{includePlusPrefix:!0,suffix:"%"})))))}})),n.register("1HSLJ",(function(a,l){t(a.exports,"StartEarningSol",(function(){return A}));var i=n("lMzyG"),o=n("gd9Oy"),r=n("4y59b"),s=n("lDSNw"),c=n("HLcoo"),u=n("cZIbv"),d=n("miiws"),g=n("aanFI"),m=n("bkZ83"),h=n("02iAW"),p=n("4tc9b"),f=n("kn91D"),b=n("6ha3o"),x=n("aXzxc"),k=n("gMNJN"),v=n("1di4e");const y=(0,u.default)(p.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,w=u.default.div`
  overflow: hidden;
`,E=u.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,S=u.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,A=()=>{var t;const{t:n}=(0,i.useTranslation)(),{pushDetailView:a}=(0,b.useDetailViews)(),{showValidatorListModal:l,hideValidatorListModal:u}=(0,x.useLegacyModals)(),{data:p}=k.hooks.useSelectedChainAddress(o.AddressType.Solana),A=null!==(t=null==p?void 0:p.address)&&void 0!==t?t:"",T=(0,s.useMemo)((()=>(0,c.createConnectionBySolanaNetworkID)(null==p?void 0:p.networkID)),[null==p?void 0:p.networkID]),M=k.hooks.useStakeAccounts(T,A),{isFetching:D,isError:B}=M,{totalStake:C,totalRewards:F,numAccounts:I}=(0,s.useMemo)((()=>{var e;const t=null!==(e=M.data)&&void 0!==e?e:[];return{totalStake:t.reduce(((e,t)=>e+t.lamports),0),totalRewards:t.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),numAccounts:t.length}}),[M.data]);return e(s).createElement(y,{role:"button",isDisabled:D,onClick:()=>{B?M.refetch():D||(I>0?a(e(s).createElement(v.StakeAccountListPage,null)):l({onClose:u}))}},D?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#AB9FF2",.2)},e(s).createElement(h.Spinner,{diameter:28})):B?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#EB3742",.1)},e(s).createElement(g.IconFailure,null)):e(s).createElement(d.Circle,{diameter:44,color:"#3F3D29"},e(s).createElement(g.IconStar,null)),e(s).createElement(w,null,D?e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):B?e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):I?e(s).createElement(e(s).Fragment,null,e(s).createElement(S,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(s).createElement(f.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(s).createElement(m.SolBalance,null,C))),e(s).createElement(S,null,e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},I," ",1===I?"account":"accounts"),e(s).createElement(f.Text,{size:14,color:""+(F>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},F>0?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(m.SolBalance,null,F)):"–"))):e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))}})),n.register("3OE1H",(function(a,l){t(a.exports,"ButtonUnwrapFungible",(function(){return p}));var i=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("6EObQ"),c=n("4tc9b"),u=n("kn91D"),d=n("2LZGp");const g=(0,r.default)(c.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,m=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,h=(0,r.default)(u.Text)`
  margin-top: 5px;
`,p=({fungible:t})=>{const{symbol:n,name:a,logoUri:l,chain:r}=t.data,{t:c}=(0,i.useTranslation)(),{handleShowModalVisibility:p}=(0,d.useModals)(),f=(0,o.useCallback)((()=>{p("approveUnwrapFungible",{fungible:t})}),[t,p]);return e(o).createElement(g,{onClick:f},e(o).createElement(s.EcosystemImage,{image:{type:"icon",preset:"swap"},size:48,badge:{src:null!=l?l:""}}),e(o).createElement(m,null,e(o).createElement(u.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},c("unwrapFungibleTitle",{tokenSymbol:n})),e(o).createElement(h,{color:"#777777",size:14,lineHeight:17,textAlign:"left"},c("unwrapFungibleDescription",{fromToken:a,toToken:r.symbol}))))}}));
//# sourceMappingURL=HomeTabPage.0d4c362a.js.map
define=__define;})(window.define);