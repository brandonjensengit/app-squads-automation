(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("izxKn",(function(a,i){var l;l=a.exports,Object.defineProperty(l,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return N}),(function(e){return N=e}));var o=n("4xbAj"),r=n("iOvk1"),s=n("3ljHn"),c=n("5slFC"),u=n("43063"),d=n("ibwoK"),g=n("RVqnc"),m=n("7dHjq"),h=n("29o0l"),f=n("6RB6n"),p=n("8cn6w"),b=n("aWXnn"),x=n("gGtJv"),k=n("i1NO2"),v=n("brWcm"),y=n("gRICw"),w=n("jOE8F"),E=n("dKFQQ"),S=n("dRJ3q"),A=n("bJlxR"),T=n("d1JH7"),C=n("gX5Te"),B=n("feAoQ"),F=n("kdiZd"),M=n("twk6W"),D=n("lJodL"),L=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const I=e(h).memo((({fungibles:t,isMainnet:n,onMouseEnter:a})=>{var i;const{t:l}=(0,u.useTranslation)(),{pushDetailView:o}=(0,k.useDetailViews)(),s=(0,h.useRef)(document.getElementById("tab-content"));(0,h.useEffect)((()=>{const e=document.getElementById("tab-content");e&&(s.current=e)}),[]);const c=(0,h.useCallback)((({networkID:t,chainName:n,fungibleKey:a,name:i,symbol:l,tokenAddress:s,type:c,walletAddress:u})=>{M.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:n,isNativeOfType:n,address:s},data:{networkId:t,chainId:r.Chains.getChainID(t)}}),o(e(h).createElement(D.FungibleDetailPage,{networkID:t,chainName:n,name:i,symbol:l,fungibleKey:a,tokenAddress:s,type:c,walletAddress:u}))}),[o]),d=(0,h.useCallback)((({key:i,index:o,style:r})=>{const s=Math.min(o+1,t.length),u=[];for(let i=o;i<s;i++){const r=t[i],s=r.type,{chain:d,name:g,symbol:m,key:f,tokenAddress:p,walletAddress:b}=r.data,x=null!=g?g:l("assetDetailUnknownToken");u.push(e(h).createElement(E.FungibleTokenRow,Object.assign({},(0,E.fungibleToProps)(r),{key:`${f}-${o}`,onClick:()=>c({networkID:d.id,chainName:d.name,fungibleKey:f,name:x,symbol:m,tokenAddress:p,type:s,walletAddress:b}),onMouseEnter:a,showBalance:!0,showCurrencyValues:n})))}return e(h).createElement("div",{key:i,style:r},u)}),[t,n,c,a,l]);return e(h).createElement(f.WindowScroller,{scrollElement:null!==(i=s.current)&&void 0!==i?i:void 0},(({height:n=0,isScrolling:a,registerChild:i,scrollTop:l})=>e(h).createElement(f.AutoSizer,{disableHeight:!0,style:{width:"100%"}},(({width:o})=>e(h).createElement("div",{ref:i},e(h).createElement(f.List,{autoHeight:!0,width:o,height:n,scrollTop:l,isScrolling:a,rowCount:t.length,rowHeight:E.FUNGIBLE_TOKEN_ROW_HEIGHT+10,rowRenderer:d}))))))})),R=(0,g.toMilliseconds)({seconds:5}),P=(0,g.toMilliseconds)({seconds:10});var N=()=>{const{data:t,isHidingAllFungibles:n,isLoading:a,isErrorTokens:i,isReadOnlyAccount:l,refetch:r,isActionBannersAvailable:g,showHelloBitcoinModal:f}=(()=>{const e=(0,m.useQueryClient)(),{showDepositListModal:t,showFungibleVisibilityModal:n,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i}=(0,v.useLegacyModals)(),{handleShowModalVisibility:l,handleHideModalVisibility:r}=(0,B.useModals)(),{data:[g,f]}=(0,s.useFeatureFlags)(["enable-action-banners","enable-bitcoin"]),{isOpen:p}=(0,y.useMenu)(),{isOpen:b}=(0,w.useSettingsMenu)(),{isBitcoinEnabled:x}=C.hooks.useEnabledChainsInfo(),{data:k,isSuccess:E}=C.hooks.useHasSeenInterstitial(d.InterstitialFeature.HelloBitcoin),S=!p&&!b&&f&&x&&E&&!k,{t:A}=(0,u.useTranslation)(),T=(0,h.useMemo)((()=>({manageTokenList:A("homeManageTokenList"),receive:A("commandReceive"),send:A("commandSend"),buy:A("commandBuy"),errorTitle:A("homeErrorTitle"),errorDescription:A("homeErrorDescription"),errorButton:A("homeErrorButtonText")})),[A]);C.hooks.useHomeViewState();const{data:M}=C.hooks.useSelectedMultiChainAccount(),{accountBalance:D,accountId:I}=(0,h.useMemo)((()=>{var e,t;return{accountBalance:null===(e=null==M?void 0:M.balance)||void 0===e?void 0:e.value,accountId:null!==(t=null==M?void 0:M.identifier)&&void 0!==t?t:""}}),[M]),N=null==M?void 0:M.isReadOnly,H=!C.hooks.useIsTestnetMode(),z=(0,c.useFungiblesStore)((e=>e.resetSendSlice));(0,h.useEffect)((function(){I&&z()}),[I,z]);const{fungibles:O,portfolio:W,isHidingAllFungibles:V,isLoadingHiddenMints:j,isLoadingTokens:$,isLoadingPrices:U,isErrorTokens:q,refetch:K}=C.hooks.useFungibles({useTokenQueryOptions:{staleTime:R,refetchInterval:P}}),{mutate:X}=C.hooks.useSetMultiChainAccountBalance();(0,o.useSetAccountBalanceEffect)({accountBalance:D,accountId:I,value:W.value,setAccountBalance:X});const _=C.hooks.useSelectedNetworks();(0,F.useWalletBalanceAnalytics)(O,_,I);const Q=(0,h.useCallback)((()=>L(void 0,void 0,void 0,(function*(){return yield(0,c.prefetchSPLTokenMap)(e)}))),[e]);return{data:(0,h.useMemo)((()=>({fungibles:O,earnings:W.earnings,value:W.value,isMainnet:H,translations:T,showDepositListModal:t,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i,showFungibleVisibilityModal:n,handlePrefetchSPLTokenMap:Q,handleShowModalVisibility:l,handleHideModalVisibility:r})),[O,W,n,T,H,a,t,i,Q,l,r]),isHidingAllFungibles:V,isLoading:j||$||U,isErrorTokens:q,isReadOnlyAccount:N,refetch:K,isActionBannersAvailable:g,showHelloBitcoinModal:S}})(),{fungibles:k,translations:E,isMainnet:M,earnings:D,value:N,showDepositListModal:H,showBuyFungibleSelectionModal:z,showSendFungibleSelectionModal:O,handlePrefetchSPLTokenMap:W,handleShowModalVisibility:V}=t,{manageTokenList:j,receive:$,send:U,buy:q,errorTitle:K,errorDescription:X,errorButton:_}=E,Q=k.length>0;return(0,h.useEffect)((()=>{f&&V("helloBitcoin")}),[V,f]),e(h).createElement(b.Column,{align:"center"},e(h).createElement(S.Header,{earnings:D,value:N,buyButtonText:q,receiveButtonText:$,hasFungibles:Q,isErrorTokens:i,isLoading:a,isHidingAllFungibles:n,isReadOnlyAccount:l,sendButtonText:U,showDollarValues:M,prefetchSPLTokenMap:W,showSendFungibleSelectionModal:O,showDepositListModal:H,showBuyFungibleSelectionModal:z}),!l&&g&&e(h).createElement(p.ActionBanners,null),a?[1,2,3].map((t=>e(h).createElement(x.RowSkeletonLoader,{key:`fungible-token-row-loader-${t}`}))):Q?e(h).createElement(I,{fungibles:k,isMainnet:M,onMouseEnter:W}):n?null:e(h).createElement(A.HomeError,{title:K,description:X,buttonText:_,refetch:r}),a?null:Q||n?e(h).createElement(T.ManageTokenListButton,{buttonText:j,onClick:()=>V("fungibleVisibility")}):null)}})),n.register("8cn6w",(function(a,i){t(a.exports,"ActionBanners",(function(){return w}));var l=n("ibwoK"),o=n("29o0l"),r=n("9w5Wb"),s=n("gkfw3"),c=n("gX5Te"),u=n("4RT7E"),d=n("gcdBN"),g=n("j81qC"),m=n("6I6Pd"),h=n("dd8D3"),f=n("5bn5I");const p=s.default.div`
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
`,y=e(o).memo((({banners:t,currentIndex:n,hasNextBanner:a,hasPrevBanner:i,onNextBannerClick:l,onPrevBannerClick:r})=>{const s=t.length<=1;return e(o).createElement(p,{animate:t.length>0,shouldCollapse:s},e(o).createElement(b,null,e(o).createElement(f.ActionBannerList,{banners:t,currentIndex:n}),!s&&e(o).createElement(v,null,e(o).createElement(k,{isVisible:i},e(o).createElement(x,{onClick:r},e(o).createElement(g.IconArrowLeftShort,null))),e(o).createElement(h.default,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e(o).createElement(k,{isVisible:a},e(o).createElement(x,{onClick:l},e(o).createElement(g.IconArrowRightShort,null))))))})),w=()=>{const t=(()=>{const{data:t={banners:[]}}=c.hooks.useActionBanners({platform:"extension",appVersion:(0,d.getManifestVersion)()}),{data:n}=c.hooks.useSelectedMultiChainAccountIdentifier(),{banners:a}=t,i=e(r)(n),[s,g]=(0,o.useState)(0),m=(0,o.useCallback)((()=>{g((e=>e+1))}),[]),h=(0,o.useCallback)((()=>{g((e=>e-1))}),[]);return(0,o.useEffect)((()=>{if(a.length&&n)if(i!==n)g(0);else if(s>=a.length)g(a.length-1);else{const e=a[s],t=(0,l.generateActionBannerBaseAnalyticsPayload)(e);u.actionBannerAnalytics.onBannerSeen(t)}}),[s,a,n,i]),(0,o.useMemo)((()=>({banners:a,currentIndex:s,hasNextBanner:s<a.length-1,hasPrevBanner:s>0,onNextBannerClick:m,onPrevBannerClick:h})),[a,s,h,m])})();return e(o).createElement(y,Object.assign({},t))}})),n.register("4RT7E",(function(e,a){t(e.exports,"actionBannerAnalytics",(function(){return o}));var i=n("ibwoK"),l=n("twk6W");const o=new(0,i.ActionBannerAnalytics)(l.analytics)})),n.register("dd8D3",(function(a,i){t(a.exports,"default",(function(){return d}));var l=n("29o0l"),o=n("gkfw3");const r=o.default.div`
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
`;var d=({numOfItems:t,currentIndex:n,maxVisible:a=5})=>{const i=t>a&&n>a-3,o=i?n-(a-3):0;return e(l).createElement(r,{shouldCenter:a>t,maxVisible:a},e(l).createElement(s,{shouldShift:i,shiftAmount:o},Array.from({length:t}).map(((t,a)=>{const o=(a===n-2||a===n+2)&&i;return e(l).createElement(c,{key:`pagination-dot-${a}`,isActive:n===a,isSmall:o})})),e(l).createElement(u,{position:n})))}})),n.register("5bn5I",(function(a,i){t(a.exports,"ActionBannerList",(function(){return u}));var l=n("29o0l"),o=n("gkfw3"),r=n("clXr3");const s=o.default.ul`
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
`,u=({banners:t,currentIndex:n})=>e(l).createElement(s,{currentIndex:n},t.map(((t,a)=>e(l).createElement(c,{key:t.id,isActive:n===a,isNext:n+1===a,isPrevious:n-1===a},e(l).createElement(r.ActionBannerListItem,{banner:t,isActive:n===a})))))})),n.register("clXr3",(function(a,i){t(a.exports,"ActionBannerListItem",(function(){return E}));var l=n("43063"),o=n("ibwoK"),r=n("lz5BI"),s=n("29o0l"),c=n("gkfw3"),u=n("gX5Te"),d=n("43gjF"),g=n("feAoQ"),m=n("4RT7E"),h=n("hFkH3"),f=n("j81qC"),p=n("27SDj");const b=(0,c.default)(r.motion.button)`
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
`,v=(0,c.default)(p.Text).attrs({lineHeight:17,size:14})`
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
`,w=e(s).memo((({banner:t,isActive:n,onClickBanner:a,onCloseBanner:i})=>e(s).createElement(b,{layout:!0,onClick:a,isActive:n},e(s).createElement(x,{layout:!0},e(s).createElement(k,{src:t.imageUrl}),e(s).createElement(v,{weight:600},t.description),e(s).createElement(y,{onClick:i},e(s).createElement(f.IconClose,{fill:"#ffffff",width:8})))))),E=t=>{const n=(({banner:t,isActive:n})=>{const{t:a}=(0,l.useTranslation)(),i=(0,d.useDeepLink)(),{mutateAsync:r}=u.hooks.useDismissActionBanner(),{handleShowModalVisibility:c,handleHideModalVisibility:f}=(0,g.useModals)(),p=(0,s.useCallback)((n=>{const l=(0,o.generateActionBannerBaseAnalyticsPayload)(t);switch(m.actionBannerAnalytics.onBannerClick(l),t.bannerType){case o.ActionBannerType.DirectLink:{const{destinationType:e,url:a}=t;i(n,{destinationType:e,url:a});break}case o.ActionBannerType.Modal:{const{interstitial:l,destinationType:r,url:u}=t,{title:d,lineItems:g=[],imageUrl:p,primaryButtonText:b=a("commandContinue"),secondaryButtonText:x=a("commandDismiss")}=l,k=(0,o.generateActionBannerInterstitialAnalyticsPayload)(t),v=g.map((e=>({icon:e.imageUrl,subtitle:e.description,title:e.title})));c("interstitial",{bodyTitle:d,details:v,icon:p,onDismiss:()=>{m.actionBannerAnalytics.onInterstitialDismiss(k)},FooterComponent:()=>e(s).createElement(h.ButtonPair,{primaryText:b,secondaryText:x,onPrimaryClicked:()=>{i(n,{destinationType:r,url:u}),m.actionBannerAnalytics.onInterstitialPrimaryClick(k),f("interstitial")},onSecondaryClicked:()=>{m.actionBannerAnalytics.onInterstitialSecondaryClick(k),f("interstitial")}})}),m.actionBannerAnalytics.onInterstitialSeen(k);break}}}),[t,c,f,a,i]),b=(0,s.useCallback)((e=>{e.stopPropagation(),r({actionBannerId:t.id});const n=(0,o.generateActionBannerBaseAnalyticsPayload)(t);m.actionBannerAnalytics.onBannerDismiss(n)}),[t,r]);return(0,s.useMemo)((()=>({isActive:n,banner:t,onClickBanner:p,onCloseBanner:b})),[t,n,p,b])})(t);return e(s).createElement(w,Object.assign({},n))}})),n.register("43gjF",(function(a,i){t(a.exports,"useDeepLink",(function(){return m}));var l=n("ibwoK"),o=n("29o0l"),r=n("iQL9s"),s=n("brWcm"),c=n("jOE8F"),u=n("9aR5q"),d=n("gcdBN"),g=n("jcNNm");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),a=(0,r.useNavigate)();return(0,o.useCallback)(((i,r)=>{const{destinationType:s,url:c}=r;switch(s){case l.DeepLinkDestination.ExternalLink:(0,d.openTabAsync)({url:c});break;case l.DeepLinkDestination.Buy:n();break;case l.DeepLinkDestination.Collectibles:a(u.Path.Collectibles);break;case l.DeepLinkDestination.Explore:a(u.Path.Explore);break;case l.DeepLinkDestination.Quests:a(u.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case l.DeepLinkDestination.Swapper:a(u.Path.Swap);break;case l.DeepLinkDestination.SettingsImportSeedPhrase:(0,d.openTabAsync)({url:"onboarding.html?append=true"});break;case l.DeepLinkDestination.ConnectHardwareWallet:(0,d.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,g.getSanityComponentMapping)(s);if(!n)return;t(i,e(o).createElement(n,null))}}}),[a,t,n])}})),n.register("jcNNm",(function(e,a){t(e.exports,"getSanityComponentMapping",(function(){return o}));var i=n("ibwoK"),l=n("3FC78");const o=e=>{if(e===i.DeepLinkDestination.SettingsSecurityAndPrivacy)return l.MultiChainSecurity}})),n.register("dRJ3q",(function(a,i){t(a.exports,"Header",(function(){return L}));var l=n("43063"),o=n("56oyT"),r=n("9yJOd"),s=n("RVqnc"),c=n("29o0l"),u=n("Nt4tV"),d=n("gkfw3"),g=n("aWXnn"),m=n("j81qC"),h=n("634r8"),f=n("bf8Wb"),p=n("hiI91"),b=n("27SDj"),x=n("c8OXT");const k=(0,d.default)(g.Column).attrs({align:"center"})`
  width: ${x.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,v=(0,d.default)(g.Column).attrs({align:"center",margin:"2rem 0"})``,y=(0,d.default)(g.Column).attrs({align:"center",justify:"center",width:"100%"})`
  height: 5.3rem;
`,w=(0,d.default)(p.SkeletonLoader).attrs({height:"8px",borderRadius:"6px",backgroundColor:"#484848"})`
  opacity: 0.2;
`,E=(0,d.default)(h.Row)`
  height: 8px;
  border-radius: 6px;
  background-color: ${(0,s.hexToRGB)("#999999",.5)};
  opacity: 0.5;
`,S=(0,d.default)(f.ShrinkingText)`
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
`,T=(0,d.default)(b.Text).attrs({size:15,weight:"600",color:"#FFF",lineHeight:20})``,C=(0,d.default)(b.Text).attrs({size:36,weight:"bold",color:"#777"})``,B=(0,d.default)(h.Row).attrs({justify:"center"})``,F=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,M=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,D=d.default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 326px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,L=e(c).memo((({buyButtonText:t,receiveButtonText:n,hasFungibles:a,isErrorTokens:i,isLoading:o,isHidingAllFungibles:u,isReadOnlyAccount:d,showBuyFungibleSelectionModal:g,showDepositListModal:h,showSendFungibleSelectionModal:f,value:p,earnings:b,prefetchSPLTokenMap:x,sendButtonText:L,showDollarValues:O})=>{const{t:W}=(0,l.useTranslation)(),V=R(b),j=I({earnings:b,isNeutral:!O||o||u}),$=P(p),U=N(b),q=H(p,b),{buttonTheme:K,buttonDisabled:X}=z({isLoading:o,isEnabled:a||u,isErrorTokens:i});return e(c).createElement(k,{background:j},e(c).createElement(v,null,O?o?e(c).createElement(y,null,e(c).createElement(w,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(w,{width:"112px"})):a||u?e(c).createElement(e(c).Fragment,null,e(c).createElement(S,{maxFontSize:38,fontWeight:600},$),e(c).createElement(B,null,e(c).createElement(F,{color:V},U),e(c).createElement(M,{color:V,backgroundColor:(0,s.hexToRGB)(V,.1)},q))):i?e(c).createElement(y,null,e(c).createElement(E,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(E,{width:"112px"})):null:e(c).createElement(y,null,e(c).createElement(C,null,"–"))),d?e(c).createElement(D,null,e(c).createElement(A,null,e(c).createElement(m.IconEye,{width:20,height:20,fill:"#FFFFFF"}),e(c).createElement(T,null,W("readOnlyAccountBannerWarning")))):e(c).createElement(D,null,e(c).createElement(r.Button,{onMouseEnter:x,onClick:h,disabled:X,variant:{theme:K}},n),e(c).createElement(r.Button,{onClick:g,variant:{theme:K},disabled:X},t),e(c).createElement(r.Button,{onClick:f,variant:{theme:K},disabled:X},L)))})),I=({earnings:e,isNeutral:t})=>t||void 0===e||0===e?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":e>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)",R=e=>void 0===e||0===e?"#777777":e>0?"#21E56F":"#EB3742",P=e=>void 0===e?"-":0===e?"$0.00":(0,u.formatDollarAmount)(e),N=e=>void 0===e?"-":0===e?"+$0.00":(0,u.formatDollarAmount)(e,{includePlusPrefix:!0}),H=(e,t)=>{const n=void 0===t;return void 0===e||n?"-":`${n||t>=0?"+":"-"}${Math.abs((0,o.calculatePercentChange)(e-t,e)).toFixed(2)}%`},z=({isLoading:e,isEnabled:t,isErrorTokens:n})=>{let a="primary",i=!1;switch(!0){case e:a="secondary",i=!0;break;case t:a="primary",i=!1;break;case n:a="secondary",i=!0}return{buttonTheme:a,buttonDisabled:i}}})),n.register("bf8Wb",(function(a,i){t(a.exports,"ShrinkingText",(function(){return d}));var l=n("29o0l"),o=n("gkfw3"),r=n("5e82h"),s=n("27SDj");const c=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,u=(0,o.default)(s.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: ${e=>e.fontWeight};
`,d=e(l).memo((({children:t,className:n,maxFontSize:a,fontWeight:i=500})=>{const[o,s]=(0,r.useFitText)();return e(l).createElement(c,{className:n,ref:s,fontSize:a},e(l).createElement(u,{fontSize:o,weight:i,noWrap:!0},t))}))})),n.register("5e82h",(function(e,a){t(e.exports,"useFitText",(function(){return l}));var i=n("29o0l");const l=()=>{const e=(0,i.useRef)(null),[t,n]=(0,i.useState)({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return(0,i.useEffect)((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t){if(i){n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r})}return}let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]}})),n.register("bJlxR",(function(a,i){t(a.exports,"HomeError",(function(){return b}));var l=n("29o0l"),o=n("gkfw3"),r=n("aWXnn"),s=n("j81qC"),c=n("634r8"),u=n("27SDj");const d=(0,o.default)(r.Column).attrs({align:"center"})``,g=o.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,h=(0,o.default)(u.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,f=(0,o.default)(u.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,p=(0,o.default)(u.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,b=e(l).memo((t=>e(l).createElement(d,null,e(l).createElement(g,null,e(l).createElement(m,null,e(l).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(l).createElement(h,null,t.title),e(l).createElement(f,null,t.description),e(l).createElement(p,{onClick:t.refetch},t.buttonText))))})),n.register("d1JH7",(function(a,i){t(a.exports,"ManageTokenListButton",(function(){return m}));var l=n("29o0l"),o=n("gkfw3"),r=n("j81qC"),s=n("6I6Pd"),c=n("634r8"),u=n("27SDj");const d=(0,o.default)(c.Row).attrs({justify:"center",margin:"0 auto",width:"auto"})`
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
`,g=(0,o.default)(u.Text).attrs({size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0})``,m=e(l).memo((t=>e(l).createElement(d,{onClick:t.onClick},e(l).createElement(s.IconWrapper,null,e(l).createElement(r.IconTokenListSettings,null)),e(l).createElement(g,null,t.buttonText))))})),n.register("kdiZd",(function(e,a){t(e.exports,"useWalletBalanceAnalytics",(function(){return r}));var i=n("29o0l"),l=n("6UR7D"),o=n("gX5Te");function r(e,t,n){const a=o.hooks.useIsTestnetMode(),[r,s]=(0,i.useState)(!1);(0,i.useEffect)((()=>{a||s(!1)}),[n,a]),(0,i.useEffect)((()=>{!r&&t.length&&e.length&&!a&&(l.fungibleAnalytics.walletBalance(n,t,e),s(!0))}),[n,t,e,r,a])}})),n.register("6UR7D",(function(e,a){t(e.exports,"fungibleAnalytics",(function(){return o}));var i=n("5slFC"),l=n("twk6W");const o=new(0,i.FungibleAnalytics)(l.analytics)})),n.register("lJodL",(function(a,i){t(a.exports,"FungibleDetailPage",(function(){return j}),(function(e){return j=e}));var l=n("4xbAj"),o=n("iOvk1"),r=n("3ljHn"),s=n("5slFC"),c=n("fVtZG"),u=n("43063"),d=n("5uSEV"),g=n("RVqnc"),m=n("iMnOw"),h=n("clU2l"),f=n("kAKNF"),p=n("29o0l"),b=n("iQL9s"),x=n("9CoSy"),k=n("lvcyB"),v=n("gkfw3"),y=n("fw9SR"),w=n("arJgN"),E=n("SkwOZ"),S=n("brWcm"),A=n("dzT4Z"),T=n("6Shk9"),C=n("kqJU1"),B=n("jWb4B"),F=n("9F3Q5"),M=n("2NxXf"),D=n("hsn7I"),L=n("gX5Te"),I=n("feAoQ"),R=n("9aR5q"),P=n("twk6W"),N=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const H=v.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,z=v.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,O=v.default.div`
  margin-bottom: 9px;
  width: 100%;
`,W=e=>{const{networkID:t,fungibleKey:n}=e,{data:[a=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{t:i}=(0,u.useTranslation)(),{data:l}=L.hooks.useSelectedMultiChainAccount(),c=null==l?void 0:l.isReadOnly,{addresses:d,accountIdentifier:g}=(0,p.useMemo)((()=>{var e,t;return{addresses:null!==(e=null==l?void 0:l.addresses)&&void 0!==e?e:[],accountIdentifier:null!==(t=null==l?void 0:l.identifier)&&void 0!==t?t:""}}),[l]),{fungible:m}=L.hooks.useFungible({key:n}),{fungible:f}=L.hooks.useFungible({key:s.FungibleTokenType.SolanaNative}),v=(null==m?void 0:m.type)===s.FungibleTokenType.SolanaNative&&!c,y=void 0!==m?(0,s.parseOwnerAddress)(m):"",w=L.hooks.useFungibleExplorerUrl(m),{explorerName:E,explorerUrl:A}={explorerName:null==w?void 0:w.explorerName,explorerUrl:null==w?void 0:w.explorerUrl},T=(0,p.useMemo)((()=>({viewInExplorer:i("assetDetailViewOnExplorer",{explorer:E}),stakeSolText:i("assetDetailStakeSOL"),unwrapAllText:i("assetDetailUnwrapAll"),unwrappingSOLText:i("assetDetailUnwrappingSOL")})),[E,i]),{showValidatorListModal:C,hideValidatorListModal:B}=(0,S.useLegacyModals)(),F=(0,b.useNavigate)(),M=o.Chains.isSolanaNetworkID(t)?(0,k.getClusterBySolanaChainId)(t):"mainnet-beta",{mutateAsync:D}=L.hooks.useUnwrapSOL((0,k.createConnection)(M));return(0,p.useMemo)((()=>{const e=[];if((null==m?void 0:m.type)===s.FungibleTokenType.SPL&&m.data.mintAddress===h.NATIVE_MINT.toBase58()){const t=f,n=d.find(o.isSolanaChainAddress);!!m.data.splTokenAccountPubkey&&void 0!==n&&!!t&&+t.data.amount>x.DEFAULT_FEE.toNumber()&&!c&&e.unshift({key:"unwrap-all",label:T.unwrapAllText,onClick:()=>{N(void 0,void 0,void 0,(function*(){yield D({accountIdentifier:g,solanaChainAddress:n,unwrapSOLText:T.unwrappingSOLText}),F(R.Path.Notifications)}))}})}return y&&!a&&e.push({key:"view-in-explorer",label:T.viewInExplorer,onClick:()=>{window.open(A,"_blank")}}),v&&!a&&e.push({key:"stake-sol",label:T.stakeSolText,onClick:()=>C({onClose:B})}),e}),[m,y,v,f,d,T.unwrapAllText,T.unwrappingSOLText,T.viewInExplorer,T.stakeSolText,D,g,F,A,C,B,a,c])},V=e(p).memo((t=>{var n;const{chainAddress:a,fungible:i,fungibleName:l,actionItems:o,tokenAddress:s,fungibleSymbol:u,fungibleBalance:d,fungiblePrice:g,fungibleTokenType:m,fungiblePermanentDelegate:h,summaryItems:f,canStake:b,showUnwrapBlurEth:x,showDollarValue:k,i18nStrings:v,accounts:C,pageHeader:L,isDeveloperMode:I,developerModeStatus:R,handleShowSendModal:P,handleShowDepositFungibleModal:N,handleShortcutsClick:W,enableAssetDetails:V,walletAddress:j,isReadOnlyAccount:$,isLoadingShortcuts:U}=t,q=e(p).createElement(e(p).Fragment,null,e(p).createElement(y.PageHeader,{isSticky:!0,items:o.length>0?o:void 0},L),e(p).createElement(O,null,V&&i?e(p).createElement(e(p).Fragment,null,e(p).createElement(F.FungibleSummaryCard,{type:i.type,chain:i.data.chain,logoUri:i.data.logoUri,name:i.data.name,price:i.data.price,priceChange24h:i.data.priceChange24h,symbol:i.data.symbol,tokenAddress:i.data.tokenAddress}),!$&&e(p).createElement(A.FungibleCallToAction,{fungible:i,walletAddress:j})):e(p).createElement(T.FungibleDetailHeader,{chainAddress:a,balance:d,symbol:u,mint:s,dollarValue:g,fungibleTokenType:m,showDollarValue:k,sendButtonText:v.sendButtonText,receiveButtonText:v.receiveButtonText,handleShowSendModal:P,handleShowDepositFungibleModal:N,handleShortcutsClick:W,isLoadingButtons:U,isReadOnlyAccount:$}),b&&e(p).createElement(H,null,e(p).createElement(M.StartEarningSol,null)),x&&i?e(p).createElement(H,null,e(p).createElement(D.ButtonUnwrapFungible,{fungible:i})):null,h&&e(p).createElement(z,null,e(p).createElement(E.WarningDialog,{message:v.permanentDelegateWarning,variant:"warning"})),f.length>0?e(p).createElement(B.FungibleSummary,{name:l,items:f}):null)),K=(0,c.useFetchInfiniteHistoryItems)(C),X=K.isLoading||"loading"===R,{isError:_}=(0,c.useFetchRefreshInfiniteHistoryItems)(C),{showHistoryItemModal:Q,showPendingTransactionModal:G}=(0,S.useLegacyModals)(),{data:[J=!1]}=(0,r.useFeatureFlags)(["enable-spam-filtering"]);return void 0===i?q:e(p).createElement(w.HistoryList,Object.assign({header:q,dataPages:null===(n=K.data)||void 0===n?void 0:n.pages,isLoading:X,fetchNextPage:K.fetchNextPage,refetch:K.refetch,hasNextPage:K.hasNextPage,isFetchingNextPage:K.isFetchingNextPage,isError:K.isError,isRefreshError:_,isRefreshingConfirmedTxs:!1,isDeveloperMode:I,showHistoryItemModal:Q,showPendingTransactionModal:G},J?{filter:e=>!(0,c.isSpamTransaction)(e,a?[a]:[])}:{}))})),j=e(p).memo((t=>{const{data:n,loading:a}=(t=>{const{networkID:n,fungibleKey:a,name:i,symbol:h,tokenAddress:b,walletAddress:x}=t,{data:[v=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{handleShowModalVisibility:y}=(0,I.useModals)(),{showSendFungibleFormModal:w,showDepositFungibleModal:E,hideDepositFungibleModal:A}=(0,S.useLegacyModals)(),{data:T,isLoading:C}=L.hooks.useSelectedMultiChainAccount(),B=null==T?void 0:T.isReadOnly,{data:F=l.DEFAULT_DEVELOPER_MODE,status:M}=L.hooks.useDeveloperMode(),D=F.isDeveloperMode,{fungibles:R,isLoadingTokens:N,refetch:H}=L.hooks.useFungibles(),z=(0,s.useFungiblesStore)((e=>e.setSendFungibleKey)),{fungible:O,fungibleName:V,fungibleSymbol:j,fungibleBalance:$,fungiblePrice:U,fungibleTokenType:q,fungiblePermanentDelegate:K}=(0,p.useMemo)((()=>{var t,n,l;const o=R.find((e=>e.data.key===a)),r=(0,s.getPermananetDelegateAddress)(o);return{fungible:o,fungibleName:null!==(t=null==o?void 0:o.data.name)&&void 0!==t?t:i,fungibleSymbol:null!==(n=null==o?void 0:o.data.symbol)&&void 0!==n?n:h,fungibleBalance:null!==(l=null==o?void 0:o.data.balance)&&void 0!==l?l:new(e(f))(0),fungiblePrice:null==o?void 0:o.data.usd,fungibleTokenType:null==o?void 0:o.type,fungiblePermanentDelegate:r}}),[a,R,i,h]),{data:X}=L.hooks.useSelectedChainAddress({networkID:n,address:null==O?void 0:O.data.walletAddress}),{t:_}=(0,u.useTranslation)(),Q=(0,p.useMemo)((()=>({recentActivityText:_("assetDetailRecentActivity"),sendButtonText:_("commandSend"),receiveButtonText:_("commandReceive"),permanentDelegateWarning:_("assetDetailPermanentDelegateWarning",{delegate:K})})),[_,K]),G=V,J=(0,g.truncateString)(G,20),Y=(0,c.getTokenHistoryFilterId)(O),Z=(0,p.useMemo)((()=>{const e=X?[X]:[];return(0,c.getAccountsWithFilter)(e,n,Y)}),[X,n,Y]),ee=(null==O?void 0:O.data.tokenAddress)===s.BLUR_ETH_MINT_ADDRESS&&!B,te=(0,p.useCallback)((()=>{O&&(z(null==O?void 0:O.data.key),w(O))}),[O,z,w]),ne=(0,p.useCallback)((()=>{var e;E({accountName:null!==(e=null==T?void 0:T.name)&&void 0!==e?e:"",walletAddress:x,address:b,symbol:j,onClose:A,networkID:n})}),[null==T?void 0:T.name,A,b,x,E,j,n]),ae=!o.Chains.isSolanaNetworkID(n)||"mainnet-beta"===(0,k.getClusterBySolanaChainId)(n),{isSolana:ie}=(0,p.useMemo)((()=>{const e=R.find((e=>e.data.key===a));return{isSolana:(null==e?void 0:e.type)===s.FungibleTokenType.SolanaNative}}),[a,R]),le=ie&&!B,oe=W(t),{summaryItems:re}=L.hooks.useFungibleDetailViewState(a),{data:se}=L.hooks.useShowWalletShortcutsSettings(),ce=null!=se?se:d.DEFAULT_SHOW_WALLET_SHORTCUTS,{shortcuts:ue,isLoading:de}=L.hooks.useShortcuts({type:"fungible",externalUrl:null==O?void 0:O.data.externalUrl,owner:x,tokenAddress:null==O?void 0:O.data.tokenAddress},"desktop",ce),ge=(0,p.useMemo)((()=>{if(ce&&O&&0!==ue.length)return()=>{var e,t;const n=(0,o.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(O));P.analytics.capture("walletShortcutsModalOpenClick",(0,m.trackModalOpen)({type:"fungible",caip19:n,hostname:null!==(e=null==O?void 0:O.data.externalUrl)&&void 0!==e?e:"",platform:"browser-ext"})),y("shortcutsSheet",{shortcuts:ue,type:"fungible",caip19:n,hostname:null!==(t=null==O?void 0:O.data.externalUrl)&&void 0!==t?t:""})}}),[ue,y,O,ce]);return{data:(0,p.useMemo)((()=>({chainAddress:X,fungible:O,tokenAddress:b,fungibleName:V,fungibleSymbol:j,fungibleBalance:$,fungiblePrice:U,fungibleTokenType:q,fungiblePermanentDelegate:K,summaryItems:re,canStake:le,showUnwrapBlurEth:ee,showDollarValue:ae,i18nStrings:Q,accounts:Z,actionItems:oe,pageHeader:J,isDeveloperMode:D,developerModeStatus:M,handleShowSendModal:te,handleShowDepositFungibleModal:ne,handleShortcutsClick:ge,refetch:H,enableAssetDetails:v,walletAddress:x,isReadOnlyAccount:B,isLoadingShortcuts:de})),[X,O,b,V,j,$,U,q,K,re,le,ee,ae,Q,Z,oe,J,D,M,te,ne,ge,H,v,x,B,de]),loading:C||N}})(t);return a?e(p).createElement(C.FungibleDetailLoader,{depositText:n.i18nStrings.receiveButtonText,sendText:n.i18nStrings.sendButtonText}):e(p).createElement(V,Object.assign({},n))}))})),n.register("SkwOZ",(function(e,a){t(e.exports,"WarningDialog",(function(){return g}));var i=n("7gANb"),l=n("29o0l"),o=n("gkfw3"),r=n("j81qC"),s=n("27SDj");const c=o.default.div`
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
`,d=(0,o.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,g=({message:e,inverted:t=!1,variant:n="warning"})=>{let a="#2A2A2A",o="#222222",s=l.createElement(r.IconDangerOctagon,{fill:o,width:18,height:18});switch(n){case"warning":a=i.simulations.WARNING_COLOR,t||(s=l.createElement(r.IconDangerTriangle,{fill:"#222222",width:18,height:18}));break;case"danger":a=i.simulations.DANGER_COLOR;break;case"error":a="#2A2A2A",o=i.simulations.ERROR_COLOR;break;default:a=i.simulations.WARNING_COLOR}return l.createElement(c,{color:a},l.createElement(u,null,s),l.createElement(d,{color:o,padding:"4px 0","data-testid":"approval-warning-text"},e))}})),n.register("dzT4Z",(function(a,i){t(a.exports,"FungibleCallToAction",(function(){return E}));var l=n("iOvk1"),o=n("5slFC"),r=n("43063"),s=n("RVqnc"),c=n("29o0l"),u=n("iQL9s"),d=n("lq7YC"),g=n("j81qC"),m=n("i1NO2"),h=n("brWcm"),f=n("gX5Te"),p=n("9aR5q"),b=n("aJ5nb");function x({fungible:e,walletAddress:t}){const{data:n}=f.hooks.useSelectedMultiChainAccount(),{showDepositFungibleModal:a,hideDepositFungibleModal:i}=(0,h.useLegacyModals)();return(0,c.useCallback)((()=>{var l;e.data.symbol&&a({accountName:null!==(l=null==n?void 0:n.name)&&void 0!==l?l:"",walletAddress:t,address:e.data.tokenAddress,symbol:e.data.symbol,onClose:i,networkID:e.data.chain.id})}),[null==n?void 0:n.name,i,e,t,a])}function k(){const{pushDetailView:t}=(0,m.useDetailViews)();return(0,c.useCallback)((()=>{t(e(c).createElement(b.FungibleStaking,null))}),[t])}function v({fungible:e}){const{showSendFungibleFormModal:t}=(0,h.useLegacyModals)();return(0,c.useCallback)((()=>{o.useFungiblesStore.getState().setSendFungibleKey(e.data.key),t(e)}),[e,t])}function y({fungible:e}){const t=(0,u.useNavigate)();return(0,c.useCallback)((()=>{const n=(0,o.getFungibleCaip19FromFungible)(e),a=(0,l.encodeCaip19)(n);t(`/${p.Path.Swap}?sellFungible=${a}`)}),[e,t])}function w({explorer:e}){return(0,c.useCallback)((()=>{e&&window.open(e.explorerUrl,"_blank")}),[e])}const E=e(c).memo((t=>{const{ctaButtons:n,handleShowSendModal:a,handleReceive:i,handleSwap:l,handleExplorer:u,handleStakeAction:m}=function({fungible:t,walletAddress:n}){const{t:a}=(0,r.useTranslation)(),i=f.hooks.useFungibleExplorerUrl(t),l=(0,c.useMemo)((()=>({viewInExplorer:a("assetDetailViewOnExplorer",{explorer:null==i?void 0:i.explorerName}),sendButtonText:a("commandSend"),receiveButtonText:a("commandReceive"),stakeButtonText:a("commandStake"),buyButtonText:a("commandBuy"),swapButtonText:a("commandSwap")})),[a,i]),u=t.type===o.FungibleTokenType.SolanaNative;return{ctaButtons:(0,c.useMemo)((()=>[{text:l.sendButtonText,icon:e(c).createElement(g.IconArrowUpRight,{height:20,fill:"currentColor"}),value:"send"},{text:l.swapButtonText,icon:e(c).createElement(g.IconArrowDouble,{height:20,fill:"currentColor"}),value:"swap"},u&&{text:l.stakeButtonText,icon:e(c).createElement(g.IconShortcutsStake2,{height:20,fill:"currentColor"}),value:"stake"},{text:l.receiveButtonText,icon:e(c).createElement(g.IconArrowDownRight,{height:20,fill:"currentColor"}),value:"receive"},{text:l.buyButtonText,icon:e(c).createElement(g.IconDollar,{height:20,fill:"currentColor"}),value:"buy"},{text:l.viewInExplorer,icon:e(c).createElement(g.IconExternal,{height:20,fill:"currentColor"}),value:"explorer"}].filter(s.filterBoolean)),[u,l]),handleShowSendModal:v({fungible:t}),handleSwap:y({fungible:t}),handleReceive:x({fungible:t,walletAddress:n}),handleExplorer:w({explorer:i}),handleStakeAction:k()}}(t);return e(c).createElement(d.CTABar,{buttons:n,uiContext:{name:"fungibleDetail"},onClick:e=>{switch(e){case"send":return a();case"stake":return m();case"swap":return l();case"explorer":return u();case"receive":return i();case"buy":break;default:throw(0,s.assertNever)(e)}}})}))})),n.register("lq7YC",(function(a,i){t(a.exports,"CTABar",(function(){return f}));var l=n("29o0l"),o=n("gkfw3"),r=n("feAoQ"),s=n("6UR7D"),c=n("j81qC");const u=o.default.div`
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
`;function f({buttons:t,onClick:n,maxButtons:a=4,uiContext:i}){const o=t.length>a?t.slice(a-1):[],d=o.length>0?t.slice(0,a-1):t,f=t.length,{handleShowModalVisibility:p,handleHideModalVisibility:b}=(0,r.useModals)();return e(l).createElement(u,{buttonCount:Math.min(t.length,a)},d.map(((t,r)=>e(l).createElement(m,{key:t.value,type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:r,position:"primary",value:t.value,maxButtons:a,totalButtons:f,primaryButtons:d,moreButtons:o}),n(t.value)}},e(l).createElement(g,null,t.icon),e(l).createElement("span",null,t.text)))),o.length>0?e(l).createElement(h,{type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:i,maxButtons:a,totalButtons:f}),p("callToActionSheet",{buttons:o,onClick:(e,t)=>{b("callToActionSheet"),s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:t,position:"more",value:e,maxButtons:a,totalButtons:f,primaryButtons:d,moreButtons:o}),n(e)}})}},e(l).createElement(c.IconMore,{height:20}),e(l).createElement("span",null,"More")):null)}})),n.register("aJ5nb",(function(a,i){t(a.exports,"FungibleStaking",(function(){return x}));var l=n("43063"),o=n("7mQ3Y"),r=n("RVqnc"),s=n("29o0l"),c=n("gkfw3"),u=n("j81qC"),d=n("bhnmm"),g=n("gX5Te"),m=n("aoqPC"),h=n("4K7Du");const f=c.default.div`
  height: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,p=c.default.div`
  font-size: 28px;
`,b=c.default.div`
  font-size: 14px;
  color: #a09fa6;
`;function x(){const{t:t}=(0,l.useTranslation)(),{connection:n,publicKey:a}=function(){var e;const{data:t}=g.hooks.useSelectedChainAddress(o.AddressType.Solana),n=null!==(e=null==t?void 0:t.address)&&void 0!==e?e:"",{connection:a}=g.hooks.useSelectedSolanaConnection();return(0,s.useMemo)((()=>({connection:a,publicKey:n})),[a,n])}(),i=g.hooks.useStakeAccounts(n,a);switch((0,s.useMemo)((()=>!i.isLoading&&!i.isFetching&&i.isSuccess&&i.data?"STAKE_LIST":"LOADING"),[i.isLoading,i.isFetching,i.isSuccess,i.data])){case"LOADING":return e(s).createElement(f,null,e(s).createElement(u.IconSVGContainer,{size:72},e(s).createElement(u.Shape,{shape:"circle",color:(0,r.hexToRGB)(h.theme.purple,.2)},e(s).createElement(d.Spinner,{color:h.theme.purple,diameter:48,position:"absolute"}))),e(s).createElement(p,null,t("startEarningSolLoading")),e(s).createElement(b,null,t("startEarningSolSearching")));case"STAKE_LIST":return e(s).createElement(m.StakeAccountListPage,null);default:return null}}})),n.register("aoqPC",(function(a,i){t(a.exports,"StakeAccountListPage",(function(){return f}));var l=n("iOvk1"),o=n("43063"),r=n("29o0l"),s=n("lvcyB"),c=n("fw9SR"),u=n("j81qC"),d=n("8oN8T"),g=n("brWcm"),m=n("90wQB"),h=n("gX5Te");const f=()=>{const{t:t}=(0,o.useTranslation)(),{showValidatorListModal:n,hideValidatorListModal:a}=(0,g.useLegacyModals)(),{data:i}=h.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:f,connection:p}=(0,r.useMemo)((()=>{var e,t;const n=(null!==(e=null==i?void 0:i.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),a=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaPublicKey:a,connection:(0,s.createConnection)((0,s.getClusterBySolanaChainId)(o))}}),[i]),b=h.hooks.useStakeAccounts(p,f);return e(r).createElement(e(r).Fragment,null,e(r).createElement(c.PageHeader,{onIconClick:()=>n({onClose:a}),icon:e(r).createElement(u.IconPlus,null)},t("stakeAccountListViewPrimaryText")),e(r).createElement(d.FullHeightLoadingContent,{isLoading:!b.isFetched},e(r).createElement(m.StakeAccountList,null)))}})),n.register("90wQB",(function(a,i){t(a.exports,"StakeAccountList",(function(){return y}));var l=n("iOvk1"),o=n("43063"),r=n("egHtJ"),s=n("29o0l"),c=n("lvcyB"),u=n("Nt4tV"),d=n("gkfw3"),g=n("8pWVO"),m=n("8oN8T"),h=n("8FDsw"),f=n("2GM8F"),p=n("24y7X"),b=n("27SDj"),x=n("brWcm"),k=n("gX5Te"),v=n("twk6W");const y=()=>{var t;const{t:n}=(0,o.useTranslation)();(0,s.useEffect)((()=>(v.analytics.capture("showStakeAccountList"),()=>{v.analytics.capture("hideStakeAccountList")})),[]);const{data:a}=k.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:i,connection:r}=(0,s.useMemo)((()=>{var e,t;const n=(null!==(e=null==a?void 0:a.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),i=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaChainAddress:n,solanaPublicKey:i,connection:(0,c.createConnection)((0,c.getClusterBySolanaChainId)(o))}}),[a]),u=k.hooks.useStakeAccounts(r,i),d=null!==(t=u.data)&&void 0!==t?t:[];return e(s).createElement(m.FullHeightLoadingContent,{isLoading:!u.isFetched},u.isError?e(s).createElement(g.ErrorView,{title:n("errorAndOfflineSomethingWentWrong"),description:n("stakeAccountListErrorFetching"),refetch:()=>{u.isFetching||u.refetch()}}):e(s).createElement(w,{data:d,connection:r}),e(s).createElement("br",null))},w=t=>{const{t:n}=(0,o.useTranslation)(),a=D(t.connection),i=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),l=i.filter((e=>e.type===r.StakeAccountType.Delegated)),c=i.filter((e=>e.type===r.StakeAccountType.Initialized));return l.length||c.length?e(s).createElement(e(s).Fragment,null,l.length>0&&e(s).createElement(e(s).Fragment,null,l.map((n=>{var i,l,o;const{stake:r,voter:c}=n.info.stake.delegation,u=a.get(c),d=null===(i=null==u?void 0:u.info)||void 0===i?void 0:i.name,g=null===(l=null==u?void 0:u.info)||void 0===l?void 0:l.keybaseUsername,m=null===(o=null==u?void 0:u.info)||void 0===o?void 0:o.iconUrl;return e(s).createElement(F,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,delegatedStake:Number(r),inflationReward:n.inflationReward,voteAccountPubkey:c,name:d,keybaseUsername:g,iconUrl:m,connection:t.connection})}))),c.length>0&&e(s).createElement(e(s).Fragment,null,c.map((n=>e(s).createElement(M,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,inflationReward:n.inflationReward,connection:t.connection}))))):e(s).createElement(E,null,e(s).createElement(b.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},E=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,S=(0,d.default)(p.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,A=(0,d.default)(f.TokenImage).attrs({width:44})``,T=d.default.div`
  overflow: hidden;
`,C=d.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,B=(0,d.default)(b.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,F=t=>{var n,a,i;const{t:l}=(0,o.useTranslation)(),{showStakeAccountDetailModal:r}=(0,x.useLegacyModals)(),{data:c}=k.hooks.useKeybaseUserAvatar(t.keybaseUsername),d=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:(0,u.formatHashMedium)(t.voteAccountPubkey),g=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,m=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>{r({stakeAccountPubkey:t.pubkey})}},e(s).createElement(A,{iconUrl:null!==(i=t.iconUrl)&&void 0!==i?i:c}),e(s).createElement(T,null,e(s).createElement(C,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},d),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.delegatedStake))),e(s).createElement(C,null,e(s).createElement(B,{size:14,activationState:null==g?void 0:g.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==g?void 0:g.state)?l("stakeAccountListActivationActivating"):"","active"===(null==g?void 0:g.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==g?void 0:g.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==g?void 0:g.state)?l("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(m?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},m?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(h.SolBalance,null,t.inflationReward)):"-"))))},M=t=>{const{t:n}=(0,o.useTranslation)(),{showStakeAccountDetailModal:a}=(0,x.useLegacyModals)(),i=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,l=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(s).createElement(A,null),e(s).createElement(T,null,e(s).createElement(C,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.balance))),e(s).createElement(C,null,e(s).createElement(B,{size:14,activationState:null==i?void 0:i.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==i?void 0:i.state)?n("stakeAccountListActivationActivating"):"","active"===(null==i?void 0:i.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==i?void 0:i.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==i?void 0:i.state)?n("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(l?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},l&&"+",e(s).createElement(h.SolBalance,null,t.inflationReward)))))},D=e=>{var t;const n=k.hooks.useValidators(e),a=null!==(t=n.results)&&void 0!==t?t:[],i=(0,s.useRef)(a);i.current=a;return(0,s.useMemo)((()=>new Map(i.current.map((e=>[e.voteAccountPubkey,e])))),[n.dataUpdatedAt,i])}})),n.register("6Shk9",(function(a,i){t(a.exports,"FungibleDetailHeader",(function(){return k}));var l=n("5slFC"),o=n("29o0l"),r=n("Nt4tV"),s=n("gkfw3"),c=n("hFkH3"),u=n("aWXnn"),d=n("j81qC"),g=n("bf8Wb"),m=n("27SDj"),h=n("gX5Te"),f=n("twk6W");const p=(0,s.default)(u.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
`,b=(0,s.default)(m.Text).attrs({size:16,color:"#777777"})`
  margin-top: 7px;
`,x=(0,s.default)(c.ButtonGroup)`
  margin-top: 20px;
`,k=e(o).memo((t=>{const{isLoadingButtons:n,mint:a,symbol:i,balance:s,dollarValue:u,fungibleTokenType:m,showDollarValue:k,sendButtonText:v,receiveButtonText:y,chainAddress:w,isReadOnlyAccount:E,handleShowSendModal:S,handleShowDepositFungibleModal:A,handleShortcutsClick:T}=t,C=a?(0,r.formatAddressShort)(a):void 0,B=`${(0,r.formatTokenAmount)(s)} ${null!=i?i:C}`,F=(0,o.useCallback)((e=>e!==l.FungibleTokenType.BRC20||!(0,f.isFeatureEnabled)("kill-brc20-sends")),[]),M=h.hooks.useCanSendFungible({balance:s,fungibleTokenType:m,chainAddress:w,isSendEnabledForTokenType:F}),D=!E;return e(o).createElement(p,null,e(o).createElement(g.ShrinkingText,{maxFontSize:38},B),k&&e(o).createElement(b,null,u?(0,r.formatDollarAmount)(u):"–"),D&&e(o).createElement(x,{buttonStyle:c.ButtonPairStyle.Small,buttons:[{theme:"primary",text:y,onClick:A},{theme:M?"primary":"default",text:v,onClick:S,disabled:!M},{key:"shortcuts",theme:"primary",text:e(o).createElement(d.IconShortcuts,{fill:"currentColor"}),onClick:null!=T?T:()=>{},hideButton:n||!T}]}))}))})),n.register("kqJU1",(function(a,i){t(a.exports,"FungibleDetailLoader",(function(){return p}));var l=n("29o0l"),o=n("gkfw3"),r=n("hFkH3"),s=n("aWXnn"),c=n("634r8"),u=n("hiI91");const d=[1,2],g=(0,o.default)(c.Row)`
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
`,f=(0,o.default)(u.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,p=e(l).memo((t=>e(l).createElement(e(l).Fragment,null,e(l).createElement(g,{justify:"center"},e(l).createElement(f,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(m,null,e(l).createElement(u.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(l).createElement(s.Column,null,e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(f,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(f,{width:"60px",height:"8px"})))),e(l).createElement(r.ButtonPair,{primaryText:t.sendText,primaryDisabled:!0,primaryTheme:"default",secondaryText:t.depositText,secondaryDisabled:!0,secondaryTheme:"default",buttonPairStyle:r.ButtonPairStyle.Small})),d.map((t=>e(l).createElement(u.SkeletonLoader,{key:`fungible-detail-row-loader-${t}`,align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(l).createElement(h,null,e(l).createElement(u.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(l).createElement(s.Column,null,e(l).createElement(c.Row,{margin:"0 0 10px",justify:"space-between"},e(l).createElement(f,{width:"120px"}),e(l).createElement(f,{width:"60px"})),e(l).createElement(c.Row,{justify:"space-between"},e(l).createElement(f,{width:"75px"}),e(l).createElement(f,{width:"35px"})))))))))})),n.register("jWb4B",(function(a,i){t(a.exports,"FungibleSummary",(function(){return g}));var l=n("43063"),o=n("29o0l"),r=n("gkfw3"),s=n("ggMbr"),c=n("27SDj");const u=r.default.div`
  margin: 24px auto 0 auto;
  width: 100%;
`,d=(0,r.default)(c.Text).attrs({size:16,weight:500,color:"#777777",textAlign:"left",margin:"0 auto 16px 0",noWrap:!0})``,g=({name:t,items:n})=>{const{t:a}=(0,l.useTranslation)();return e(o).createElement(u,null,e(o).createElement(d,null,a("assetDetailAboutLabel",{fungibleName:t})),e(o).createElement(s.Summary,{rows:n}))}})),n.register("9F3Q5",(function(a,i){t(a.exports,"FungibleSummaryCard",(function(){return p}));var l=n("iOvk1"),o=n("29o0l"),r=n("Nt4tV"),s=n("gkfw3"),c=n("qppYH");const u=s.default.div`
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
`,f=s.default.figure`
  margin-right: 12px;
`,p=({logoUri:t,symbol:n,tokenAddress:a,chain:i,price:s,priceChange24h:p,name:b,type:x})=>{if(i.id===l.BitcoinNetworkID.Mainnet||i.id===l.BitcoinNetworkID.Testnet)return null;const k="number"==typeof p?p:e(o).createElement(e(o).Fragment,null,"—");return e(o).createElement(u,null,e(o).createElement(f,null,e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:t,fallback:n||a},tokenType:x,chainMeta:i})),e(o).createElement(d,null,e(o).createElement(g,null,b," "),e(o).createElement(h,null,n," • ",(0,r.formatDollarAmount)(s||0)," ","number"==typeof k&&0!==k?e(o).createElement(m,{positive:k>0},(0,r.formatNumber)(k,{includePlusPrefix:!0,suffix:"%"})):e(o).createElement(e(o).Fragment,null,(0,r.formatNumber)(0,{includePlusPrefix:!0,suffix:"%"})))))}})),n.register("2NxXf",(function(a,i){t(a.exports,"StartEarningSol",(function(){return A}));var l=n("43063"),o=n("7mQ3Y"),r=n("RVqnc"),s=n("29o0l"),c=n("lvcyB"),u=n("gkfw3"),d=n("6UMd8"),g=n("j81qC"),m=n("8FDsw"),h=n("bhnmm"),f=n("24y7X"),p=n("27SDj"),b=n("i1NO2"),x=n("brWcm"),k=n("gX5Te"),v=n("aoqPC");const y=(0,u.default)(f.TokenRowBody)`
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
`,A=()=>{var t;const{t:n}=(0,l.useTranslation)(),{pushDetailView:a}=(0,b.useDetailViews)(),{showValidatorListModal:i,hideValidatorListModal:u}=(0,x.useLegacyModals)(),{data:f}=k.hooks.useSelectedChainAddress(o.AddressType.Solana),A=null!==(t=null==f?void 0:f.address)&&void 0!==t?t:"",T=(0,s.useMemo)((()=>(0,c.createConnectionBySolanaNetworkID)(null==f?void 0:f.networkID)),[null==f?void 0:f.networkID]),C=k.hooks.useStakeAccounts(T,A),{isFetching:B,isError:F}=C,{totalStake:M,totalRewards:D,numAccounts:L}=(0,s.useMemo)((()=>{var e;const t=null!==(e=C.data)&&void 0!==e?e:[];return{totalStake:t.reduce(((e,t)=>e+t.lamports),0),totalRewards:t.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),numAccounts:t.length}}),[C.data]);return e(s).createElement(y,{role:"button",isDisabled:B,onClick:()=>{F?C.refetch():B||(L>0?a(e(s).createElement(v.StakeAccountListPage,null)):i({onClose:u}))}},B?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#AB9FF2",.2)},e(s).createElement(h.Spinner,{diameter:28})):F?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#EB3742",.1)},e(s).createElement(g.IconFailure,null)):e(s).createElement(d.Circle,{diameter:44,color:"#3F3D29"},e(s).createElement(g.IconStar,null)),e(s).createElement(w,null,B?e(s).createElement(E,null,e(s).createElement(p.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(s).createElement(p.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):F?e(s).createElement(E,null,e(s).createElement(p.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(s).createElement(p.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):L?e(s).createElement(e(s).Fragment,null,e(s).createElement(S,null,e(s).createElement(p.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(s).createElement(p.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(s).createElement(m.SolBalance,null,M))),e(s).createElement(S,null,e(s).createElement(p.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},L," ",1===L?"account":"accounts"),e(s).createElement(p.Text,{size:14,color:""+(D>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},D>0?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(m.SolBalance,null,D)):"–"))):e(s).createElement(E,null,e(s).createElement(p.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(s).createElement(p.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))}})),n.register("hsn7I",(function(a,i){t(a.exports,"ButtonUnwrapFungible",(function(){return f}));var l=n("43063"),o=n("29o0l"),r=n("gkfw3"),s=n("qppYH"),c=n("24y7X"),u=n("27SDj"),d=n("feAoQ");const g=(0,r.default)(c.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,m=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,h=(0,r.default)(u.Text)`
  margin-top: 5px;
`,f=({fungible:t})=>{const{symbol:n,name:a,logoUri:i,chain:r}=t.data,{t:c}=(0,l.useTranslation)(),{handleShowModalVisibility:f}=(0,d.useModals)(),p=(0,o.useCallback)((()=>{f("approveUnwrapFungible",{fungible:t})}),[t,f]);return e(o).createElement(g,{onClick:p},e(o).createElement(s.EcosystemImage,{image:{type:"icon",preset:"swap"},size:48,badge:{src:null!=i?i:""}}),e(o).createElement(m,null,e(o).createElement(u.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},c("unwrapFungibleTitle",{tokenSymbol:n})),e(o).createElement(h,{color:"#777777",size:14,lineHeight:17,textAlign:"left"},c("unwrapFungibleDescription",{fromToken:a,toToken:r.symbol}))))}}))}();
//# sourceMappingURL=HomeTabPage.461b9d42.js.map
define=__define;})(window.define);