"use strict";(()=>{var e={};e.id=1821,e.ids=[1821,2888,660],e.modules={1323:(e,i)=>{Object.defineProperty(i,"l",{enumerable:!0,get:function(){return function e(i,t){return t in i?i[t]:"then"in i&&"function"==typeof i.then?i.then(i=>e(i,t)):"function"==typeof i&&"default"===t?i:void 0}}})},8907:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.r(i),t.d(i,{config:()=>x,default:()=>h,getServerSideProps:()=>p,getStaticPaths:()=>g,getStaticProps:()=>u,reportWebVitals:()=>m,routeModule:()=>f,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>v});var r=t(7093),a=t(5244),l=t(1323),o=t(7645),n=t(6814),d=t(1321),c=e([n,d]);[n,d]=c.then?(await c)():c;let h=(0,l.l)(d,"default"),u=(0,l.l)(d,"getStaticProps"),g=(0,l.l)(d,"getStaticPaths"),p=(0,l.l)(d,"getServerSideProps"),x=(0,l.l)(d,"config"),m=(0,l.l)(d,"reportWebVitals"),v=(0,l.l)(d,"unstable_getStaticProps"),b=(0,l.l)(d,"unstable_getStaticPaths"),j=(0,l.l)(d,"unstable_getStaticParams"),y=(0,l.l)(d,"unstable_getServerProps"),w=(0,l.l)(d,"unstable_getServerSideProps"),f=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/admin/utilities/sizing",pathname:"/admin/utilities/sizing",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:d});s()}catch(e){s(e)}})},4364:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.d(i,{Z:()=>x});var r=t(997);t(6689);var a=t(580),l=t.n(a),o=t(3864),n=t.n(o),d=t(9003),c=t.n(d),h=t(6769),u=t(9467),g=e([h]);h=(g.then?(await g)():g)[0];let p=({children:e,className:i,code:t,language:s})=>e?(0,r.jsxs)(h.ZP,{shadow:"none",borderSize:1,className:c()("rounded-2",i),children:[r.jsx(h.eW,{children:e}),r.jsx(u.Z,{className:"my-0 rounded-bottom",code:t||n()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:s,rounded:0})]}):r.jsx(u.Z,{className:c()("my-0",i),code:t||n()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:s});p.propTypes={children:l().node,className:l().string,code:l().string,language:l().string},p.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"};let x=p;s()}catch(e){s(e)}})},4505:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.d(i,{Z:()=>v});var r=t(997),a=t(6689),l=t(580),o=t.n(l),n=t(9003),d=t.n(n),c=t(1664),h=t.n(c),u=t(9680),g=t(9337),p=e([g]);g=(p.then?(await p)():p)[0];let x=({children:e,ariaLabel:i,className:t,tag:s,to:l,isActive:o,divider:n})=>(0,r.jsxs)(u.Z,{tag:s,className:d()("breadcrumb-item",{active:o},t),"aria-current":o?"page":null,"aria-label":i||e,children:[n&&"string"!=typeof n&&(0,a.cloneElement)(n,{className:d()("breadcrumb-icon",n.props.className)}),o?e:r.jsx(h(),{href:l,"aria-label":i,children:e})]});x.propTypes={children:o().node.isRequired,ariaLabel:o().string,className:o().string,tag:o().string,to:o().string.isRequired,isActive:o().bool,divider:o().node},x.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let m=({children:e,list:i,tag:t,listTag:s,itemTag:l,ariaLabel:o,autoActive:n,isToHome:d,divider:c})=>{let h="string"!==c&&c;return r.jsx(u.Z,{tag:t,"aria-label":o,style:c?{"--bs-breadcrumb-divider":"string"==typeof c?`'${c}'`:"none"}:null,children:(0,r.jsxs)(u.Z,{tag:s,className:"breadcrumb",children:[d&&r.jsx(x,{to:"/",ariaLabel:"Home",children:d}),i?i.map((e,t)=>r.jsx(x,{tag:e.tag||l,to:e.to,isActive:n&&i.length===t+1,divider:h,children:e.title},e.title)):a.Children.map(e,(i,t)=>(0,a.cloneElement)(i,{tag:i.props.tag||l,isActive:n&&e.length===t+1,divider:i.props.divider||h}))]})})};m.propTypes={children:o().node,tag:o().oneOf(["nav","div","section"]),listTag:o().oneOf(["div","ol","ul"]),itemTag:o().oneOf(["div","li"]),ariaLabel:o().string,list:o().arrayOf(o().shape({title:o().string.isRequired,to:o().string.isRequired})),autoActive:o().bool,isToHome:o().oneOfType([o().string,o().node]),divider:o().oneOfType([o().string,o().node])},m.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:r.jsx(g.Z,{icon:"HolidayVillage"}),divider:r.jsx(g.Z,{icon:"ChevronRight"})};let v=m;s()}catch(e){s(e)}})},7265:(e,i,t)=>{t.d(i,{Z:()=>d});var s=t(997);t(6689);var r=t(580),a=t.n(r),l=t(9003),o=t.n(l);let n=({width:e,height:i,text:t,className:r,ariaLabel:a})=>(0,s.jsxs)("svg",{className:o()("placeholder-img",r),width:e,height:i,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":a||`Example placeholder image: ${e}x${i}`,preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[s.jsx("title",{children:"Example placeholder image"}),s.jsx("rect",{width:"100%",height:"100%",fill:"var(--bs-gray)"}),s.jsx("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#dee2e6",fontSize:"1.25rem",dy:".1rem",children:t||`${e}x${i}`})]});n.propTypes={width:a().oneOfType([a().number,a().string]),height:a().oneOfType([a().number,a().string]),text:a().string,className:a().string,ariaLabel:a().string},n.defaultProps={width:75,height:75,text:void 0,className:void 0,ariaLabel:void 0};let d=n},7645:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o,getStaticProps:()=>l});var s=t(997);t(6689);var r=t(6859),a=t(5460);let l=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["translation","menu"])}}),o=()=>(0,s.jsxs)(r.Html,{children:[s.jsx(r.Head,{}),(0,s.jsxs)("body",{className:"modern-design subheader-enabled",children:[s.jsx(r.Main,{}),s.jsx("div",{id:"portal-root"}),s.jsx("div",{id:"portal-notification"}),s.jsx(r.NextScript,{})]})]})},1321:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.r(i),t.d(i,{default:()=>y,getStaticProps:()=>j});var r=t(997);t(6689);var a=t(5460),l=t(968),o=t.n(l),n=t(1664),d=t.n(n),c=t(5792),h=t(6114),u=t(7942),g=t(4505),p=t(4570),x=t(6769),m=t(4364),v=t(7265),b=e([g,x,m]);[g,x,m]=b.then?(await b)():b;let j=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["common","menu"])}}),y=()=>{let e=`
<div className='w-25 p-3' style={{ backgroundColor: '#eee' }}>Width 25%</div>
<div className='w-50 p-3' style={{ backgroundColor: '#eee' }}>Width 50%</div>
<div className='w-75 p-3' style={{ backgroundColor: '#eee' }}>Width 75%</div>
<div className='w-100 p-3' style={{ backgroundColor: '#eee' }}>Width 100%</div>
<div className='w-auto p-3' style={{ backgroundColor: '#eee' }}>Width auto</div>`,i=`
<div style={{ height: 100, backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
	<div className='h-25 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 25%</div>
	<div className='h-50 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 50%</div>
	<div className='h-75 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 75%</div>
	<div className='h-100 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 100%</div>
	<div className='h-auto d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height auto</div>
</div>`,t=`
<div style={{ height: 100, backgroundColor: 'rgba(255, 0, 0, .1)' }}>
	<div className='mh-100' style={{ width: 100, height: 200, backgroundColor: 'rgba(0, 0, 255, .1)' }}>
		Max-height 100%
	</div>
</div>`,s=`
<div className='min-vw-100'>Min-width 100vw</div>
<div className='min-vh-100'>Min-height 100vh</div>
<div className='vw-100'>Width 100vw</div>
<div className='vh-100'>Height 100vh</div>`,a=`    
"width": (
  	property: width,
  	class: w,
  	values: (
		25: 25%,
		50: 50%,
		75: 75%,
		100: 100%,
		auto: auto
  	)
),
"max-width": (
  	property: max-width,
  	class: mw,
  	values: (100: 100%)
),
"viewport-width": (
  	property: width,
  	class: vw,
  	values: (100: 100vw)
),
"min-viewport-width": (
  	property: min-width,
  	class: min-vw,
  	values: (100: 100vw)
),
"height": (
  	property: height,
  	class: h,
  	values: (
		25: 25%,
		50: 50%,
		75: 75%,
		100: 100%,
		auto: auto
  	)
),
"max-height": (
  	property: max-height,
  	class: mh,
  	values: (100: 100%)
),
"viewport-height": (
  	property: height,
  	class: vh,
  	values: (100: 100vh)
),
"min-viewport-height": (
  	property: min-height,
  	class: min-vh,
  	values: (100: 100vh)
),`;return(0,r.jsxs)(c.Z,{children:[r.jsx(o(),{children:r.jsx("title",{children:h.XZ.utilities.subMenu.sizing.text})}),r.jsx(u.ZP,{children:r.jsx(u.Vv,{children:r.jsx(g.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Sizing",to:"/utilities/sizing"}]})})}),r.jsx(p.Z,{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 my-4",children:[r.jsx("h1",{children:"Sizing"}),r.jsx("p",{className:"lead",children:"Easily make an element as wide or as tall with our width and height utilities."})]}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(x.ZP,{id:"relative-to-the-parent",className:"scroll-margin",children:[r.jsx(x.Ol,{children:r.jsx(x.oL,{children:r.jsx(x.ll,{tag:"h3",children:"Relative to the parent"})})}),(0,r.jsxs)(x.eW,{children:[(0,r.jsxs)("p",{children:["Width and height utilities are generated from the utility API in"," ",r.jsx("code",{children:"_utilities.scss"}),". Includes support for"," ",r.jsx("code",{children:"25%"}),", ",r.jsx("code",{children:"50%"}),", ",r.jsx("code",{children:"75%"}),","," ",r.jsx("code",{children:"100%"}),", and ",r.jsx("code",{children:"auto"})," by default. Modify those values as you need to generate different utilities here."]}),(0,r.jsxs)(m.Z,{code:e,children:[r.jsx("div",{className:"w-25 p-3",style:{backgroundColor:"#eee"},children:"Width 25%"}),r.jsx("div",{className:"w-50 p-3",style:{backgroundColor:"#eee"},children:"Width 50%"}),r.jsx("div",{className:"w-75 p-3",style:{backgroundColor:"#eee"},children:"Width 75%"}),r.jsx("div",{className:"w-100 p-3",style:{backgroundColor:"#eee"},children:"Width 100%"}),r.jsx("div",{className:"w-auto p-3",style:{backgroundColor:"#eee"},children:"Width auto"})]}),r.jsx(m.Z,{code:i,children:(0,r.jsxs)("div",{style:{height:100,backgroundColor:"rgba(255, 0, 0, 0.1)"},children:[r.jsx("div",{className:"h-25 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 25%"}),r.jsx("div",{className:"h-50 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 50%"}),r.jsx("div",{className:"h-75 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 75%"}),r.jsx("div",{className:"h-100 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 100%"}),r.jsx("div",{className:"h-auto d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height auto"})]})}),(0,r.jsxs)("p",{children:["You can also use ",r.jsx("code",{children:"max-width: 100%;"})," and"," ",r.jsx("code",{children:"max-height: 100%;"})," utilities as needed."]}),r.jsx(m.Z,{code:"<img src='...' className='mw-100' alt='...' />",children:r.jsx(v.Z,{width:"100%",height:100,text:"Max-width 100%",className:"mw-100"})}),r.jsx(m.Z,{code:t,children:r.jsx("div",{style:{height:100,backgroundColor:"rgba(255, 0, 0, 0.1)"},children:r.jsx("div",{className:"mh-100",style:{width:100,height:200,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Max-height 100%"})})})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(x.ZP,{id:"relative-to-the-viewport",className:"scroll-margin",children:[r.jsx(x.Ol,{children:r.jsx(x.oL,{children:r.jsx(x.ll,{tag:"h3",children:"Relative to the viewport"})})}),(0,r.jsxs)(x.eW,{children:[r.jsx("p",{children:"You can also use utilities to set the width and height relative to the viewport."}),r.jsx(m.Z,{code:s})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(x.ZP,{id:"sass",className:"scroll-margin",children:[r.jsx(x.Ol,{children:r.jsx(x.oL,{children:r.jsx(x.ll,{tag:"h3",children:"Sass"})})}),r.jsx(x.eW,{children:(0,r.jsxs)(x.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[r.jsx(x.Ol,{children:r.jsx(x.oL,{children:r.jsx(x.ll,{children:"Utilities API"})})}),(0,r.jsxs)(x.eW,{children:[(0,r.jsxs)("p",{children:["Sizing utilities are declared in our utilities API in"," ",r.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",r.jsx(d(),{href:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),r.jsx(m.Z,{code:a,language:"scss"})]})]})})]})})]})})]})};s()}catch(e){s(e)}})},5244:(e,i)=>{var t;Object.defineProperty(i,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},7495:e=>{e.exports=require("@reactour/tour")},9003:e=>{e.exports=require("classnames")},1635:e=>{e.exports=require("dayjs")},7424:e=>{e.exports=require("dayjs/plugin/localizedFormat")},4195:e=>{e.exports=require("dayjs/plugin/relativeTime")},2296:e=>{e.exports=require("formik")},3864:e=>{e.exports=require("jsx-to-string")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},8871:e=>{e.exports=require("prismjs")},2326:e=>{e.exports=require("prismjs/components/prism-jsx.min")},5512:e=>{e.exports=require("prismjs/components/prism-scss.min")},1414:e=>{e.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4648:e=>{e.exports=require("react-input-mask")},1191:e=>{e.exports=require("react-jss")},956:e=>{e.exports=require("react-notifications-component")},3554:e=>{e.exports=require("react-number-format")},2932:e=>{e.exports=require("react-popper")},727:e=>{e.exports=require("react-syntax-highlighter")},7079:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},2250:e=>{e.exports=require("screenfull")},271:e=>{e.exports=require("sweetalert2")},3810:e=>{e.exports=require("sweetalert2-react-content")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},9915:e=>{e.exports=import("js-cookie")},6257:e=>{e.exports=import("pascalcase")},3590:e=>{e.exports=import("react-toastify")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),s=i.X(0,[4567,3914,6859,6814],()=>t(8907));module.exports=s})();