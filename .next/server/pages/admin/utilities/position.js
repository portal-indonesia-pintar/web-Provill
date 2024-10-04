"use strict";(()=>{var e={};e.id=3701,e.ids=[3701,2888,660],e.modules={1323:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,t){return t in s?s[t]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,t)):"function"==typeof s&&"default"===t?s:void 0}}})},9594:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{config:()=>x,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>m,reportWebVitals:()=>b,routeModule:()=>f,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var a=t(7093),o=t(5244),l=t(1323),r=t(7645),n=t(6814),d=t(7009),c=e([n,d]);[n,d]=c.then?(await c)():c;let p=(0,l.l)(d,"default"),m=(0,l.l)(d,"getStaticProps"),u=(0,l.l)(d,"getStaticPaths"),h=(0,l.l)(d,"getServerSideProps"),x=(0,l.l)(d,"config"),b=(0,l.l)(d,"reportWebVitals"),j=(0,l.l)(d,"unstable_getStaticProps"),v=(0,l.l)(d,"unstable_getStaticPaths"),g=(0,l.l)(d,"unstable_getStaticParams"),N=(0,l.l)(d,"unstable_getServerProps"),y=(0,l.l)(d,"unstable_getServerSideProps"),f=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/admin/utilities/position",pathname:"/admin/utilities/position",bundlePath:"",filename:""},components:{App:n.default,Document:r.default},userland:d});i()}catch(e){i(e)}})},4364:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.d(s,{Z:()=>x});var a=t(997);t(6689);var o=t(580),l=t.n(o),r=t(3864),n=t.n(r),d=t(9003),c=t.n(d),p=t(6769),m=t(9467),u=e([p]);p=(u.then?(await u)():u)[0];let h=({children:e,className:s,code:t,language:i})=>e?(0,a.jsxs)(p.ZP,{shadow:"none",borderSize:1,className:c()("rounded-2",s),children:[a.jsx(p.eW,{children:e}),a.jsx(m.Z,{className:"my-0 rounded-bottom",code:t||n()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i,rounded:0})]}):a.jsx(m.Z,{className:c()("my-0",s),code:t||n()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i});h.propTypes={children:l().node,className:l().string,code:l().string,language:l().string},h.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"};let x=h;i()}catch(e){i(e)}})},4505:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.d(s,{Z:()=>j});var a=t(997),o=t(6689),l=t(580),r=t.n(l),n=t(9003),d=t.n(n),c=t(1664),p=t.n(c),m=t(9680),u=t(9337),h=e([u]);u=(h.then?(await h)():h)[0];let x=({children:e,ariaLabel:s,className:t,tag:i,to:l,isActive:r,divider:n})=>(0,a.jsxs)(m.Z,{tag:i,className:d()("breadcrumb-item",{active:r},t),"aria-current":r?"page":null,"aria-label":s||e,children:[n&&"string"!=typeof n&&(0,o.cloneElement)(n,{className:d()("breadcrumb-icon",n.props.className)}),r?e:a.jsx(p(),{href:l,"aria-label":s,children:e})]});x.propTypes={children:r().node.isRequired,ariaLabel:r().string,className:r().string,tag:r().string,to:r().string.isRequired,isActive:r().bool,divider:r().node},x.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let b=({children:e,list:s,tag:t,listTag:i,itemTag:l,ariaLabel:r,autoActive:n,isToHome:d,divider:c})=>{let p="string"!==c&&c;return a.jsx(m.Z,{tag:t,"aria-label":r,style:c?{"--bs-breadcrumb-divider":"string"==typeof c?`'${c}'`:"none"}:null,children:(0,a.jsxs)(m.Z,{tag:i,className:"breadcrumb",children:[d&&a.jsx(x,{to:"/",ariaLabel:"Home",children:d}),s?s.map((e,t)=>a.jsx(x,{tag:e.tag||l,to:e.to,isActive:n&&s.length===t+1,divider:p,children:e.title},e.title)):o.Children.map(e,(s,t)=>(0,o.cloneElement)(s,{tag:s.props.tag||l,isActive:n&&e.length===t+1,divider:s.props.divider||p}))]})})};b.propTypes={children:r().node,tag:r().oneOf(["nav","div","section"]),listTag:r().oneOf(["div","ol","ul"]),itemTag:r().oneOf(["div","li"]),ariaLabel:r().string,list:r().arrayOf(r().shape({title:r().string.isRequired,to:r().string.isRequired})),autoActive:r().bool,isToHome:r().oneOfType([r().string,r().node]),divider:r().oneOfType([r().string,r().node])},b.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:a.jsx(u.Z,{icon:"HolidayVillage"}),divider:a.jsx(u.Z,{icon:"ChevronRight"})};let j=b;i()}catch(e){i(e)}})},7645:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r,getStaticProps:()=>l});var i=t(997);t(6689);var a=t(6859),o=t(5460);let l=async({locale:e})=>({props:{...await (0,o.serverSideTranslations)(e,["translation","menu"])}}),r=()=>(0,i.jsxs)(a.Html,{children:[i.jsx(a.Head,{}),(0,i.jsxs)("body",{className:"modern-design subheader-enabled",children:[i.jsx(a.Main,{}),i.jsx("div",{id:"portal-root"}),i.jsx("div",{id:"portal-notification"}),i.jsx(a.NextScript,{})]})]})},7009:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>w,getStaticProps:()=>P});var a=t(997);t(6689);var o=t(5460),l=t(968),r=t.n(l),n=t(1664),d=t.n(n),c=t(1191),p=t(9003),m=t.n(p),u=t(5792),h=t(6114),x=t(7942),b=t(4505),j=t(4570),v=t(6769),g=t(4364),N=t(9467),y=e([b,v,g]);[b,v,g]=y.then?(await y)():y;let f=(0,c.createUseStyles)({example:{height:200,backgroundColor:"#f5f5f5","& .position-absolute":{width:"2em",height:"2em",backgroundColor:"#212529",borderRadius:"0.25rem"}}}),P=async({locale:e})=>({props:{...await (0,o.serverSideTranslations)(e,["common","menu"])}}),w=()=>{let e=f(),s=`
<div className='position-static'>...</div>
<div className='position-relative'>...</div>
<div className='position-absolute'>...</div>
<div className='position-fixed'>...</div>
<div className='position-sticky'>...</div>`,t=`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-50' />
	<div className='position-absolute bottom-50 end-50' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 end-0' />
</div>`,i=`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0 translate-middle' />
	<div className='position-absolute top-0 start-50 translate-middle' />
	<div className='position-absolute top-0 start-100 translate-middle' />
	<div className='position-absolute top-50 start-0 translate-middle' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 start-100 translate-middle' />
	<div className='position-absolute top-100 start-0 translate-middle' />
	<div className='position-absolute top-100 start-50 translate-middle' />
	<div className='position-absolute top-100 start-100 translate-middle' />
</div>`,o=`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 start-50 translate-middle-x' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-0 translate-middle-y' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 end-0 translate-middle-y' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 start-50 translate-middle-x' />
	<div className='position-absolute bottom-0 end-0' />
</div>`,l=`
<button
	type='button'
	className='btn btn-primary position-relative'>
	Mails
	<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
		+99 <span className='visually-hidden'>unread messages</span>
	</span>
</button>

<button
	type='button'
	className='btn btn-dark position-relative'>
	Marker
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 16 16'
		className='position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill'
		fill='#212529'
		xmlns='http://www.w3.org/2000/svg'>
		<path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
	</svg>
</button>

<button
	type='button'
	className='btn btn-primary position-relative'>
	Alerts
	<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
		<span className='visually-hidden'>unread messages</span>
	</span>
</button>`,n=`
$position-values: (
	0: 0,
	5: 5%,
	10: 10%,
	15: 15%,
	20: 20%,
	25: 25%,
	30: 30%,
	35: 35%,
	40: 40%,
	45: 45%,
	50: 50%,
	55: 55%,
	60: 60%,
	65: 65%,
	70: 70%,
	75: 75%,
	80: 80%,
	85: 85%,
	90: 90%,
	95: 95%,
	100: 100%
);`,c=`
"position": (
  	property: position,
  	values: static relative absolute fixed sticky
),
"top": (
  	property: top,
  	values: $position-values
),
"bottom": (
  	property: bottom,
  	values: $position-values
),
"start": (
  	property: left,
  	class: start,
  	values: $position-values
),
"end": (
  	property: right,
  	class: end,
  	values: $position-values
),
"translate-middle": (
  	property: transform,
  	class: translate-middle,
  	values: (
		null: translate(-50%, -50%),
		x: translateX(-50%),
		y: translateY(-50%),
  	)
),`;return(0,a.jsxs)(u.Z,{children:[a.jsx(r(),{children:a.jsx("title",{children:h.XZ.utilities.subMenu.position.text})}),a.jsx(x.ZP,{children:a.jsx(x.Vv,{children:a.jsx(b.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Position",to:"/utilities/position"}]})})}),a.jsx(j.Z,{children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-12 my-4",children:[a.jsx("h1",{children:"Position"}),a.jsx("p",{className:"lead",children:"Use these shorthand utilities for quickly configuring the position of an element."})]}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(v.ZP,{id:"position-values",className:"scroll-margin",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{tag:"h3",children:"Position values"})})}),(0,a.jsxs)(v.eW,{children:[a.jsx("p",{children:"Quick positioning classes are available, though they are not responsive"}),a.jsx(N.Z,{code:s,language:"jsx",className:"my-0"})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(v.ZP,{id:"arrange-elements",className:"scroll-margin",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{tag:"h3",children:"Arrange elements"})})}),(0,a.jsxs)(v.eW,{children:[(0,a.jsxs)("p",{children:["Arrange elements easily with the edge positioning utilities. The format is ",a.jsx("code",{children:"{property}-{position}"}),"."]}),(0,a.jsxs)("p",{children:["Where ",a.jsx("em",{children:"property"})," is one of:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[a.jsx("code",{children:"top"})," - for the vertical ",a.jsx("code",{children:"top"})," ","position"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"start"})," - for the horizontal ",a.jsx("code",{children:"left"})," ","position (in LTR)"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"bottom"})," - for the vertical ",a.jsx("code",{children:"bottom"})," ","position"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"end"})," - for the horizontal ",a.jsx("code",{children:"right"})," ","position (in LTR)"]})]}),(0,a.jsxs)("p",{children:["Where ",a.jsx("em",{children:"position"})," is one of:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[a.jsx("code",{children:"0"})," - for ",a.jsx("code",{children:"0"})," edge position"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"50"})," - for ",a.jsx("code",{children:"50%"})," edge position"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"100"})," - for ",a.jsx("code",{children:"100%"})," edge position"]})]}),(0,a.jsxs)("p",{children:["(You can add more position values by adding entries to the"," ",a.jsx("code",{children:"$position-values"})," Sass map variable.)"]}),a.jsx(g.Z,{code:t,children:(0,a.jsxs)("div",{className:m()("position-relative",e.example),children:[a.jsx("div",{className:"position-absolute top-0 start-0"}),a.jsx("div",{className:"position-absolute top-0 end-0"}),a.jsx("div",{className:"position-absolute top-50 start-50"}),a.jsx("div",{className:"position-absolute bottom-50 end-50"}),a.jsx("div",{className:"position-absolute bottom-0 start-0"}),a.jsx("div",{className:"position-absolute bottom-0 end-0"})]})})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(v.ZP,{id:"center-elements",className:"scroll-margin",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{tag:"h3",children:"Center elements"})})}),(0,a.jsxs)(v.eW,{children:[(0,a.jsxs)("p",{children:["In addition, you can also center the elements with the transform utility class ",a.jsx("code",{children:".translate-middle"}),"."]}),(0,a.jsxs)("p",{children:["This class applies the transformations"," ",a.jsx("code",{children:"translateX(-50%)"})," and ",a.jsx("code",{children:"translateY(-50%)"})," ","to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."]}),a.jsx(g.Z,{code:i,children:(0,a.jsxs)("div",{className:m()("position-relative",e.example),children:[a.jsx("div",{className:"position-absolute top-0 start-0 translate-middle"}),a.jsx("div",{className:"position-absolute top-0 start-50 translate-middle"}),a.jsx("div",{className:"position-absolute top-0 start-100 translate-middle"}),a.jsx("div",{className:"position-absolute top-50 start-0 translate-middle"}),a.jsx("div",{className:"position-absolute top-50 start-50 translate-middle"}),a.jsx("div",{className:"position-absolute top-50 start-100 translate-middle"}),a.jsx("div",{className:"position-absolute top-100 start-0 translate-middle"}),a.jsx("div",{className:"position-absolute top-100 start-50 translate-middle"}),a.jsx("div",{className:"position-absolute top-100 start-100 translate-middle"})]})}),(0,a.jsxs)("p",{children:["By adding ",a.jsx("code",{children:".translate-middle-x"})," or"," ",a.jsx("code",{children:".translate-middle-y"})," classes, elements can be positioned only in horizontal or vertical direction."]}),a.jsx(g.Z,{code:o,children:(0,a.jsxs)("div",{className:m()("position-relative",e.example),children:[a.jsx("div",{className:"position-absolute top-0 start-0"}),a.jsx("div",{className:"position-absolute top-0 start-50 translate-middle-x"}),a.jsx("div",{className:"position-absolute top-0 end-0"}),a.jsx("div",{className:"position-absolute top-50 start-0 translate-middle-y"}),a.jsx("div",{className:"position-absolute top-50 start-50 translate-middle"}),a.jsx("div",{className:"position-absolute top-50 end-0 translate-middle-y"}),a.jsx("div",{className:"position-absolute bottom-0 start-0"}),a.jsx("div",{className:"position-absolute bottom-0 start-50 translate-middle-x"}),a.jsx("div",{className:"position-absolute bottom-0 end-0"})]})})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(v.ZP,{id:"examples",className:"scroll-margin",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{tag:"h3",children:"Examples"})})}),(0,a.jsxs)(v.eW,{children:[a.jsx("p",{children:"Here are some real life examples of these classes:"}),a.jsx(g.Z,{code:l,children:(0,a.jsxs)("div",{className:"d-flex justify-content-around",children:[(0,a.jsxs)("button",{type:"button",className:"btn btn-primary position-relative",children:["Mails"," ",(0,a.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary",children:["+99"," ",a.jsx("span",{className:"visually-hidden",children:"unread messages"})]})]}),(0,a.jsxs)("button",{type:"button",className:"btn btn-dark position-relative",children:["Marker"," ",a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill",fill:"#212529",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})})]}),(0,a.jsxs)("button",{type:"button",className:"btn btn-primary position-relative",children:["Alerts"," ",a.jsx("span",{className:"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2",children:a.jsx("span",{className:"visually-hidden",children:"unread messages"})})]})]})}),(0,a.jsxs)("p",{children:["You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the ",a.jsx("code",{children:"$position-values"})," variable."]}),a.jsx(g.Z,{children:(0,a.jsxs)("div",{className:"position-relative m-4",children:[a.jsx("div",{className:"progress",style:{height:1},children:a.jsx("div",{className:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":25,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"progress"})}),a.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"},children:"1"}),a.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"},children:"2"}),a.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"},children:"3"})]})})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(v.ZP,{id:"sass",className:"scroll-margin",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{tag:"h3",children:"Sass"})})}),(0,a.jsxs)(v.eW,{children:[(0,a.jsxs)(v.ZP,{id:"map",className:"scroll-margin rounded-2",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{children:"Map"})})}),(0,a.jsxs)(v.eW,{children:[a.jsx("p",{children:"Default position utility values are declared in a Sass map, then used to generate our utilities."}),a.jsx(g.Z,{code:n,language:"scss"})]})]}),(0,a.jsxs)(v.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[a.jsx(v.Ol,{children:a.jsx(v.oL,{children:a.jsx(v.ll,{children:"Utilities API"})})}),(0,a.jsxs)(v.eW,{children:[(0,a.jsxs)("p",{children:["Overflow utilities are declared in our utilities API in"," ",a.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",a.jsx(d(),{href:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),a.jsx(g.Z,{code:c,language:"scss"})]})]})]})]})})]})})]})};i()}catch(e){i(e)}})},5244:(e,s)=>{var t;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},7495:e=>{e.exports=require("@reactour/tour")},9003:e=>{e.exports=require("classnames")},1635:e=>{e.exports=require("dayjs")},7424:e=>{e.exports=require("dayjs/plugin/localizedFormat")},4195:e=>{e.exports=require("dayjs/plugin/relativeTime")},2296:e=>{e.exports=require("formik")},3864:e=>{e.exports=require("jsx-to-string")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},8871:e=>{e.exports=require("prismjs")},2326:e=>{e.exports=require("prismjs/components/prism-jsx.min")},5512:e=>{e.exports=require("prismjs/components/prism-scss.min")},1414:e=>{e.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4648:e=>{e.exports=require("react-input-mask")},1191:e=>{e.exports=require("react-jss")},956:e=>{e.exports=require("react-notifications-component")},3554:e=>{e.exports=require("react-number-format")},2932:e=>{e.exports=require("react-popper")},727:e=>{e.exports=require("react-syntax-highlighter")},7079:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},2250:e=>{e.exports=require("screenfull")},271:e=>{e.exports=require("sweetalert2")},3810:e=>{e.exports=require("sweetalert2-react-content")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},9915:e=>{e.exports=import("js-cookie")},6257:e=>{e.exports=import("pascalcase")},3590:e=>{e.exports=import("react-toastify")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[4567,3914,6859,6814],()=>t(9594));module.exports=i})();