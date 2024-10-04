"use strict";(()=>{var r={};r.id=8153,r.ids=[8153,2888,660],r.modules={1323:(r,e)=>{Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function r(e,s){return s in e?e[s]:"then"in e&&"function"==typeof e.then?e.then(e=>r(e,s)):"function"==typeof e&&"default"===s?e:void 0}}})},9548:(r,e,s)=>{s.a(r,async(r,a)=>{try{s.r(e),s.d(e,{config:()=>x,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>m,getStaticProps:()=>b,reportWebVitals:()=>h,routeModule:()=>$,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>j});var d=s(7093),i=s(5244),o=s(1323),l=s(7645),t=s(6814),n=s(5160),c=r([t,n]);[t,n]=c.then?(await c)():c;let u=(0,o.l)(n,"default"),b=(0,o.l)(n,"getStaticProps"),m=(0,o.l)(n,"getStaticPaths"),p=(0,o.l)(n,"getServerSideProps"),x=(0,o.l)(n,"config"),h=(0,o.l)(n,"reportWebVitals"),j=(0,o.l)(n,"unstable_getStaticProps"),g=(0,o.l)(n,"unstable_getStaticPaths"),N=(0,o.l)(n,"unstable_getStaticParams"),v=(0,o.l)(n,"unstable_getServerProps"),f=(0,o.l)(n,"unstable_getServerSideProps"),$=new d.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/admin/utilities/borders",pathname:"/admin/utilities/borders",bundlePath:"",filename:""},components:{App:t.default,Document:l.default},userland:n});a()}catch(r){a(r)}})},4364:(r,e,s)=>{s.a(r,async(r,a)=>{try{s.d(e,{Z:()=>x});var d=s(997);s(6689);var i=s(580),o=s.n(i),l=s(3864),t=s.n(l),n=s(9003),c=s.n(n),u=s(6769),b=s(9467),m=r([u]);u=(m.then?(await m)():m)[0];let p=({children:r,className:e,code:s,language:a})=>r?(0,d.jsxs)(u.ZP,{shadow:"none",borderSize:1,className:c()("rounded-2",e),children:[d.jsx(u.eW,{children:r}),d.jsx(b.Z,{className:"my-0 rounded-bottom",code:s||t()(r,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a,rounded:0})]}):d.jsx(b.Z,{className:c()("my-0",e),code:s||t()(r,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a});p.propTypes={children:o().node,className:o().string,code:o().string,language:o().string},p.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"};let x=p;a()}catch(r){a(r)}})},4505:(r,e,s)=>{s.a(r,async(r,a)=>{try{s.d(e,{Z:()=>j});var d=s(997),i=s(6689),o=s(580),l=s.n(o),t=s(9003),n=s.n(t),c=s(1664),u=s.n(c),b=s(9680),m=s(9337),p=r([m]);m=(p.then?(await p)():p)[0];let x=({children:r,ariaLabel:e,className:s,tag:a,to:o,isActive:l,divider:t})=>(0,d.jsxs)(b.Z,{tag:a,className:n()("breadcrumb-item",{active:l},s),"aria-current":l?"page":null,"aria-label":e||r,children:[t&&"string"!=typeof t&&(0,i.cloneElement)(t,{className:n()("breadcrumb-icon",t.props.className)}),l?r:d.jsx(u(),{href:o,"aria-label":e,children:r})]});x.propTypes={children:l().node.isRequired,ariaLabel:l().string,className:l().string,tag:l().string,to:l().string.isRequired,isActive:l().bool,divider:l().node},x.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let h=({children:r,list:e,tag:s,listTag:a,itemTag:o,ariaLabel:l,autoActive:t,isToHome:n,divider:c})=>{let u="string"!==c&&c;return d.jsx(b.Z,{tag:s,"aria-label":l,style:c?{"--bs-breadcrumb-divider":"string"==typeof c?`'${c}'`:"none"}:null,children:(0,d.jsxs)(b.Z,{tag:a,className:"breadcrumb",children:[n&&d.jsx(x,{to:"/",ariaLabel:"Home",children:n}),e?e.map((r,s)=>d.jsx(x,{tag:r.tag||o,to:r.to,isActive:t&&e.length===s+1,divider:u,children:r.title},r.title)):i.Children.map(r,(e,s)=>(0,i.cloneElement)(e,{tag:e.props.tag||o,isActive:t&&r.length===s+1,divider:e.props.divider||u}))]})})};h.propTypes={children:l().node,tag:l().oneOf(["nav","div","section"]),listTag:l().oneOf(["div","ol","ul"]),itemTag:l().oneOf(["div","li"]),ariaLabel:l().string,list:l().arrayOf(l().shape({title:l().string.isRequired,to:l().string.isRequired})),autoActive:l().bool,isToHome:l().oneOfType([l().string,l().node]),divider:l().oneOfType([l().string,l().node])},h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:d.jsx(m.Z,{icon:"HolidayVillage"}),divider:d.jsx(m.Z,{icon:"ChevronRight"})};let j=h;a()}catch(r){a(r)}})},7265:(r,e,s)=>{s.d(e,{Z:()=>n});var a=s(997);s(6689);var d=s(580),i=s.n(d),o=s(9003),l=s.n(o);let t=({width:r,height:e,text:s,className:d,ariaLabel:i})=>(0,a.jsxs)("svg",{className:l()("placeholder-img",d),width:r,height:e,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":i||`Example placeholder image: ${r}x${e}`,preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[a.jsx("title",{children:"Example placeholder image"}),a.jsx("rect",{width:"100%",height:"100%",fill:"var(--bs-gray)"}),a.jsx("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#dee2e6",fontSize:"1.25rem",dy:".1rem",children:s||`${r}x${e}`})]});t.propTypes={width:i().oneOfType([i().number,i().string]),height:i().oneOfType([i().number,i().string]),text:i().string,className:i().string,ariaLabel:i().string},t.defaultProps={width:75,height:75,text:void 0,className:void 0,ariaLabel:void 0};let n=t},7645:(r,e,s)=>{s.r(e),s.d(e,{default:()=>l,getStaticProps:()=>o});var a=s(997);s(6689);var d=s(6859),i=s(5460);let o=async({locale:r})=>({props:{...await (0,i.serverSideTranslations)(r,["translation","menu"])}}),l=()=>(0,a.jsxs)(d.Html,{children:[a.jsx(d.Head,{}),(0,a.jsxs)("body",{className:"modern-design subheader-enabled",children:[a.jsx(d.Main,{}),a.jsx("div",{id:"portal-root"}),a.jsx("div",{id:"portal-notification"}),a.jsx(d.NextScript,{})]})]})},5160:(r,e,s)=>{s.a(r,async(r,a)=>{try{s.r(e),s.d(e,{default:()=>$,getStaticProps:()=>f});var d=s(997);s(6689);var i=s(5460),o=s(968),l=s.n(o),t=s(1191),n=s(1664),c=s.n(n),u=s(5792),b=s(6114),m=s(7942),p=s(4505),x=s(4570),h=s(6769),j=s(4364),g=s(7265),N=r([p,h,j]);[p,h,j]=N.then?(await N)():N;let v=(0,t.createUseStyles)({example:{"& [class^='border']":{display:"inline-block",width:"5rem",height:"5rem",margin:"0.25rem",backgroundColor:"#f5f5f5"},"& [class*='rounded']":{marginRight:"0.5rem"}}}),f=async({locale:r})=>({props:{...await (0,i.serverSideTranslations)(r,["common","menu"])}}),$=()=>{let r=v(),e=`
<span className='border' />
<span className='border-top' />
<span className='border-end' />
<span className='border-bottom' />
<span className='border-start' />`,s=`
<span className='border-0' />
<span className='border border-top-0' />
<span className='border border-end-0' />
<span className='border border-bottom-0' />
<span className='border border-start-0' />`,a=`
<span className='border border-primary' />
<span className='border border-secondary' />
<span className='border border-success' />
<span className='border border-danger' />
<span className='border border-warning' />
<span className='border border-info' />
<span className='border border-light' />
<span className='border border-dark' />
<span className='border border-white' />`,i=`
<span className='border border-1' />
<span className='border border-2' />
<span className='border border-3' />
<span className='border border-4' />
<span className='border border-5' />`,o=`
<img src='...' className='rounded' alt='...'/>
<img src='...' className='rounded-top' alt='...'/>
<img src='...' className='rounded-end' alt='...'/>
<img src='...' className='rounded-bottom' alt='...'/>
<img src='...' className='rounded-start' alt='...'/>
<img src='...' className='rounded-circle' alt='...'/>
<img src='...' className='rounded-pill' alt='...'/>`,t=`
<img src='...' className='rounded-0' alt='...' />
<img src='...' className='rounded-1' alt='...' />
<img src='...' className='rounded-2' alt='...' />
<img src='...' className='rounded-3' alt='...' />`,n=`
$border-width:			1px;
$border-widths: (
	1: 1px,
	2: 2px,
	3: 3px,
	4: 4px,
	5: 5px
);

$border-color:			$gray-300;s`,N=`
$border-radius:			1rem;
$border-radius-sm:		$border-radius * 0.875;
$border-radius-lg:		$border-radius * 1.25;
$border-radius-pill:	50rem;`,f=`
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
	@if $enable-rounded {
		border-radius: valid-radius($radius);
	}
  	@else if $fallback-border-radius != false {
    	border-radius: $fallback-border-radius;
  	}
}

@mixin border-top-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
    	border-top-right-radius: valid-radius($radius);
  	}
}

@mixin border-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-right-radius: valid-radius($radius);
    	border-bottom-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-right-radius: valid-radius($radius);
    	border-bottom-left-radius: valid-radius($radius);
  	}
}

@mixin border-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
    	border-bottom-left-radius: valid-radius($radius);
  	}
}

@mixin border-top-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-left-radius: valid-radius($radius);
  	}
}

@mixin border-top-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-top-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-end-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-right-radius: valid-radius($radius);
  	}
}

@mixin border-bottom-start-radius($radius: $border-radius) {
  	@if $enable-rounded {
    	border-bottom-left-radius: valid-radius($radius);
  	}
}`,$=`
"border": (
  	property: border,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-top": (
  	property: border-top,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-end": (
  	property: border-right,
  	class: border-end,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-bottom": (
  	property: border-bottom,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-start": (
  	property: border-left,
  	class: border-start,
  	values: (
		null: $border-width solid $border-color,
		0: 0,
  	)
),
"border-color": (
  	property: border-color,
  	class: border,
  	values: map-merge($theme-colors, ("white": $white))
),
"border-width": (
  	property: border-width,
  	class: border,
  	values: $border-widths
),`,y=`
"rounded": (
	property: border-radius,
	class: rounded,
	values: (
		null: $border-radius,
		0: 0,
		1: $border-radius-sm,
		2: $border-radius,
		3: $border-radius-lg,
		circle: 50%,
		pill: $border-radius-pill
	)
),
"rounded-top": (
	property: border-top-left-radius border-top-right-radius,
	class: rounded-top,
	values: (null: $border-radius)
),
"rounded-end": (
	property: border-top-right-radius border-bottom-right-radius,
	class: rounded-end,
	values: (null: $border-radius)
),
"rounded-bottom": (
	property: border-bottom-right-radius border-bottom-left-radius,
	class: rounded-bottom,
	values: (null: $border-radius)
),
"rounded-start": (
	property: border-bottom-left-radius border-top-left-radius,
	class: rounded-start,
	values: (null: $border-radius)
),`;return(0,d.jsxs)(u.Z,{children:[d.jsx(l(),{children:d.jsx("title",{children:b.XZ.utilities.subMenu.borders.text})}),d.jsx(m.ZP,{children:d.jsx(m.Vv,{children:d.jsx(p.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Borders",to:"/utilities/borders"}]})})}),d.jsx(x.Z,{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-12 my-4",children:[d.jsx("h1",{children:"Borders"}),d.jsx("p",{className:"lead",children:"Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."})]}),d.jsx("div",{className:"col-12",children:(0,d.jsxs)(h.ZP,{id:"border",className:"scroll-margin",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{tag:"h3",children:"Border"})})}),(0,d.jsxs)(h.eW,{children:[d.jsx("p",{children:"Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time."}),(0,d.jsxs)(h.ZP,{id:"additive",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Additive"})})}),d.jsx(h.eW,{children:d.jsx(j.Z,{code:e,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx("span",{className:"border"}),d.jsx("span",{className:"border-top"}),d.jsx("span",{className:"border-end"}),d.jsx("span",{className:"border-bottom"}),d.jsx("span",{className:"border-start"})]})})})]}),(0,d.jsxs)(h.ZP,{id:"subtractive",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Subtractive"})})}),d.jsx(h.eW,{children:d.jsx(j.Z,{code:s,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx("span",{className:"border-0"}),d.jsx("span",{className:"border border-top-0"}),d.jsx("span",{className:"border border-end-0"}),d.jsx("span",{className:"border border-bottom-0"}),d.jsx("span",{className:"border border-start-0"})]})})})]})]})]})}),d.jsx("div",{className:"col-12",children:(0,d.jsxs)(h.ZP,{id:"border-color",className:"scroll-margin",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{tag:"h3",children:"Border color"})})}),(0,d.jsxs)(h.eW,{children:[d.jsx("p",{children:"Change the border color using utilities built on our theme colors."}),d.jsx(j.Z,{code:a,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx("span",{className:"border border-primary"}),d.jsx("span",{className:"border border-secondary"}),d.jsx("span",{className:"border border-success"}),d.jsx("span",{className:"border border-danger"}),d.jsx("span",{className:"border border-warning"}),d.jsx("span",{className:"border border-info"}),d.jsx("span",{className:"border border-light"}),d.jsx("span",{className:"border border-dark"}),d.jsx("span",{className:"border border-white"})]})})]})]})}),d.jsx("div",{className:"col-12",children:(0,d.jsxs)(h.ZP,{id:"border-width",className:"scroll-margin",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{tag:"h3",children:"Border width"})})}),d.jsx(h.eW,{children:d.jsx(j.Z,{code:i,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx("span",{className:"border border-1"}),d.jsx("span",{className:"border border-2"}),d.jsx("span",{className:"border border-3"}),d.jsx("span",{className:"border border-4"}),d.jsx("span",{className:"border border-5"})]})})})]})}),d.jsx("div",{className:"col-12",children:(0,d.jsxs)(h.ZP,{id:"border-radius",className:"scroll-margin",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{tag:"h3",children:"Border radius"})})}),(0,d.jsxs)(h.eW,{children:[d.jsx("p",{children:"Add classes to an element to easily round its corners."}),d.jsx(j.Z,{code:o,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx(g.Z,{className:"rounded"}),d.jsx(g.Z,{className:"rounded-top"}),d.jsx(g.Z,{className:"rounded-end"}),d.jsx(g.Z,{className:"rounded-bottom"}),d.jsx(g.Z,{className:"rounded-start"}),d.jsx(g.Z,{className:"rounded-circle"}),d.jsx(g.Z,{width:150,className:"rounded-pill"})]})}),(0,d.jsxs)(h.ZP,{id:"sizes",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Sizes"})})}),d.jsx(h.eW,{children:d.jsx(j.Z,{code:t,children:(0,d.jsxs)("div",{className:r.example,children:[d.jsx(g.Z,{className:"rounded-0"}),d.jsx(g.Z,{className:"rounded-1"}),d.jsx(g.Z,{className:"rounded-2"}),d.jsx(g.Z,{className:"rounded-3"})]})})})]})]})]})}),d.jsx("div",{className:"col-12",children:(0,d.jsxs)(h.ZP,{id:"sass",className:"scroll-margin",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{tag:"h3",children:"Sass"})})}),(0,d.jsxs)(h.eW,{children:[(0,d.jsxs)(h.ZP,{id:"variables",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Variables"})})}),(0,d.jsxs)(h.eW,{children:[d.jsx(j.Z,{code:n,language:"scss",className:"mb-4"}),d.jsx(j.Z,{code:N,language:"scss"})]})]}),(0,d.jsxs)(h.ZP,{id:"mixins",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Mixins"})})}),d.jsx(h.eW,{children:d.jsx(j.Z,{code:f,language:"scss"})})]}),(0,d.jsxs)(h.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[d.jsx(h.Ol,{children:d.jsx(h.oL,{children:d.jsx(h.ll,{children:"Utilities API"})})}),(0,d.jsxs)(h.eW,{children:[(0,d.jsxs)("p",{children:["Border utilities are declared in our utilities API in"," ",d.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",d.jsx(c(),{href:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),d.jsx(j.Z,{code:$,language:"scss",className:"mb-4"}),d.jsx(j.Z,{code:y,language:"scss"})]})]})]})]})})]})})]})};a()}catch(r){a(r)}})},5244:(r,e)=>{var s;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return s}}),function(r){r.PAGES="PAGES",r.PAGES_API="PAGES_API",r.APP_PAGE="APP_PAGE",r.APP_ROUTE="APP_ROUTE"}(s||(s={}))},7495:r=>{r.exports=require("@reactour/tour")},9003:r=>{r.exports=require("classnames")},1635:r=>{r.exports=require("dayjs")},7424:r=>{r.exports=require("dayjs/plugin/localizedFormat")},4195:r=>{r.exports=require("dayjs/plugin/relativeTime")},2296:r=>{r.exports=require("formik")},3864:r=>{r.exports=require("jsx-to-string")},1377:r=>{r.exports=require("next-i18next")},5460:r=>{r.exports=require("next-i18next/serverSideTranslations")},2785:r=>{r.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:r=>{r.exports=require("next/head")},8871:r=>{r.exports=require("prismjs")},2326:r=>{r.exports=require("prismjs/components/prism-jsx.min")},5512:r=>{r.exports=require("prismjs/components/prism-scss.min")},1414:r=>{r.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:r=>{r.exports=require("prop-types")},6689:r=>{r.exports=require("react")},6405:r=>{r.exports=require("react-dom")},4648:r=>{r.exports=require("react-input-mask")},1191:r=>{r.exports=require("react-jss")},956:r=>{r.exports=require("react-notifications-component")},3554:r=>{r.exports=require("react-number-format")},2932:r=>{r.exports=require("react-popper")},727:r=>{r.exports=require("react-syntax-highlighter")},7079:r=>{r.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:r=>{r.exports=require("react-transition-group")},997:r=>{r.exports=require("react/jsx-runtime")},2250:r=>{r.exports=require("screenfull")},271:r=>{r.exports=require("sweetalert2")},3810:r=>{r.exports=require("sweetalert2-react-content")},9648:r=>{r.exports=import("axios")},6197:r=>{r.exports=import("framer-motion")},9915:r=>{r.exports=import("js-cookie")},6257:r=>{r.exports=import("pascalcase")},3590:r=>{r.exports=import("react-toastify")},6912:r=>{r.exports=import("zustand")},7147:r=>{r.exports=require("fs")},1017:r=>{r.exports=require("path")},2781:r=>{r.exports=require("stream")},9796:r=>{r.exports=require("zlib")}};var e=require("../../../webpack-runtime.js");e.C(r);var s=r=>e(e.s=r),a=e.X(0,[4567,3914,6859,6814],()=>s(9548));module.exports=a})();