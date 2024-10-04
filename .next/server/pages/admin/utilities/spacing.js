"use strict";(()=>{var e={};e.id=6539,e.ids=[6539,2888,660],e.modules={1323:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,r){return r in s?s[r]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,r)):"function"==typeof s&&"default"===r?s:void 0}}})},9146:(e,s,r)=>{r.a(e,async(e,i)=>{try{r.r(s),r.d(s,{config:()=>m,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>g,getStaticProps:()=>h,reportWebVitals:()=>u,routeModule:()=>P,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var a=r(7093),t=r(5244),n=r(1323),l=r(7645),d=r(6814),o=r(2812),c=e([d,o]);[d,o]=c.then?(await c)():c;let p=(0,n.l)(o,"default"),h=(0,n.l)(o,"getStaticProps"),g=(0,n.l)(o,"getStaticPaths"),x=(0,n.l)(o,"getServerSideProps"),m=(0,n.l)(o,"config"),u=(0,n.l)(o,"reportWebVitals"),j=(0,n.l)(o,"unstable_getStaticProps"),v=(0,n.l)(o,"unstable_getStaticPaths"),b=(0,n.l)(o,"unstable_getStaticParams"),f=(0,n.l)(o,"unstable_getServerProps"),y=(0,n.l)(o,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:t.x.PAGES,page:"/admin/utilities/spacing",pathname:"/admin/utilities/spacing",bundlePath:"",filename:""},components:{App:d.default,Document:l.default},userland:o});i()}catch(e){i(e)}})},4364:(e,s,r)=>{r.a(e,async(e,i)=>{try{r.d(s,{Z:()=>m});var a=r(997);r(6689);var t=r(580),n=r.n(t),l=r(3864),d=r.n(l),o=r(9003),c=r.n(o),p=r(6769),h=r(9467),g=e([p]);p=(g.then?(await g)():g)[0];let x=({children:e,className:s,code:r,language:i})=>e?(0,a.jsxs)(p.ZP,{shadow:"none",borderSize:1,className:c()("rounded-2",s),children:[a.jsx(p.eW,{children:e}),a.jsx(h.Z,{className:"my-0 rounded-bottom",code:r||d()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i,rounded:0})]}):a.jsx(h.Z,{className:c()("my-0",s),code:r||d()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i});x.propTypes={children:n().node,className:n().string,code:n().string,language:n().string},x.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"};let m=x;i()}catch(e){i(e)}})},4505:(e,s,r)=>{r.a(e,async(e,i)=>{try{r.d(s,{Z:()=>j});var a=r(997),t=r(6689),n=r(580),l=r.n(n),d=r(9003),o=r.n(d),c=r(1664),p=r.n(c),h=r(9680),g=r(9337),x=e([g]);g=(x.then?(await x)():x)[0];let m=({children:e,ariaLabel:s,className:r,tag:i,to:n,isActive:l,divider:d})=>(0,a.jsxs)(h.Z,{tag:i,className:o()("breadcrumb-item",{active:l},r),"aria-current":l?"page":null,"aria-label":s||e,children:[d&&"string"!=typeof d&&(0,t.cloneElement)(d,{className:o()("breadcrumb-icon",d.props.className)}),l?e:a.jsx(p(),{href:n,"aria-label":s,children:e})]});m.propTypes={children:l().node.isRequired,ariaLabel:l().string,className:l().string,tag:l().string,to:l().string.isRequired,isActive:l().bool,divider:l().node},m.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let u=({children:e,list:s,tag:r,listTag:i,itemTag:n,ariaLabel:l,autoActive:d,isToHome:o,divider:c})=>{let p="string"!==c&&c;return a.jsx(h.Z,{tag:r,"aria-label":l,style:c?{"--bs-breadcrumb-divider":"string"==typeof c?`'${c}'`:"none"}:null,children:(0,a.jsxs)(h.Z,{tag:i,className:"breadcrumb",children:[o&&a.jsx(m,{to:"/",ariaLabel:"Home",children:o}),s?s.map((e,r)=>a.jsx(m,{tag:e.tag||n,to:e.to,isActive:d&&s.length===r+1,divider:p,children:e.title},e.title)):t.Children.map(e,(s,r)=>(0,t.cloneElement)(s,{tag:s.props.tag||n,isActive:d&&e.length===r+1,divider:s.props.divider||p}))]})})};u.propTypes={children:l().node,tag:l().oneOf(["nav","div","section"]),listTag:l().oneOf(["div","ol","ul"]),itemTag:l().oneOf(["div","li"]),ariaLabel:l().string,list:l().arrayOf(l().shape({title:l().string.isRequired,to:l().string.isRequired})),autoActive:l().bool,isToHome:l().oneOfType([l().string,l().node]),divider:l().oneOfType([l().string,l().node])},u.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:a.jsx(g.Z,{icon:"HolidayVillage"}),divider:a.jsx(g.Z,{icon:"ChevronRight"})};let j=u;i()}catch(e){i(e)}})},7645:(e,s,r)=>{r.r(s),r.d(s,{default:()=>l,getStaticProps:()=>n});var i=r(997);r(6689);var a=r(6859),t=r(5460);let n=async({locale:e})=>({props:{...await (0,t.serverSideTranslations)(e,["translation","menu"])}}),l=()=>(0,i.jsxs)(a.Html,{children:[i.jsx(a.Head,{}),(0,i.jsxs)("body",{className:"modern-design subheader-enabled",children:[i.jsx(a.Main,{}),i.jsx("div",{id:"portal-root"}),i.jsx("div",{id:"portal-notification"}),i.jsx(a.NextScript,{})]})]})},2812:(e,s,r)=>{r.a(e,async(e,i)=>{try{r.r(s),r.d(s,{default:()=>b,getStaticProps:()=>v});var a=r(997);r(6689);var t=r(5460),n=r(968),l=r.n(n),d=r(1664),o=r.n(d),c=r(5792),p=r(6114),h=r(7942),g=r(4505),x=r(4570),m=r(6769),u=r(4364),j=e([g,m,u]);[g,m,u]=j.then?(await j)():j;let v=async({locale:e})=>({props:{...await (0,t.serverSideTranslations)(e,["common","menu"])}}),b=()=>{let e=`.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}`,s=`
<div className='mx-auto' style={{ width: 200, backgroundColor: 'rgba(86, 61, 124, 0.15)' }}>
	Centered element
</div>`,r=`
.mt-n1 {
	margin-top: -0.25rem !important;
}`,i=`
<div className='d-grid gap-3'>
	<div className='p-2 bg-light border'>Grid item 1</div>
	<div className='p-2 bg-light border'>Grid item 2</div>
	<div className='p-2 bg-light border'>Grid item 3</div>
</div>`,t=`
$spacer: 1rem;
$spacers: (
  	0: 0,
  	1: $spacer / 4,
  	2: $spacer / 2,
  	3: $spacer,
  	4: $spacer * 1.5,
  	5: $spacer * 3,
);

$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null);`,n=`
"margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: map-merge($spacers, (auto: auto))
),
"margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: map-merge($spacers, (auto: auto))
),
"margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: map-merge($spacers, (auto: auto))
),
"margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: map-merge($spacers, (auto: auto))
),
"margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: map-merge($spacers, (auto: auto))
),
"margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: map-merge($spacers, (auto: auto))
),
"margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: map-merge($spacers, (auto: auto))
),
// Negative margin utilities
"negative-margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: $negative-spacers
),
"negative-margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: $negative-spacers
),
"negative-margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: $negative-spacers
),
"negative-margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: $negative-spacers
),
"negative-margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: $negative-spacers
),
"negative-margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: $negative-spacers
),
"negative-margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: $negative-spacers
),
// Padding utilities
"padding": (
  	responsive: true,
  	property: padding,
  	class: p,
  	values: $spacers
),
"padding-x": (
  	responsive: true,
  	property: padding-right padding-left,
  	class: px,
  	values: $spacers
),
"padding-y": (
  	responsive: true,
  	property: padding-top padding-bottom,
  	class: py,
  	values: $spacers
),
"padding-top": (
  	responsive: true,
  	property: padding-top,
  	class: pt,
  	values: $spacers
),
"padding-end": (
  	responsive: true,
  	property: padding-right,
  	class: pe,
  	values: $spacers
),
"padding-bottom": (
  	responsive: true,
  	property: padding-bottom,
  	class: pb,
  	values: $spacers
),
"padding-start": (
  	responsive: true,
  	property: padding-left,
  	class: ps,
  	values: $spacers
),`;return(0,a.jsxs)(c.Z,{children:[a.jsx(l(),{children:a.jsx("title",{children:p.XZ.utilities.subMenu.spacing.text})}),a.jsx(h.ZP,{children:a.jsx(h.Vv,{children:a.jsx(g.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Spacing",to:"/utilities/spacing"}]})})}),a.jsx(x.Z,{children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-12 my-4",children:[a.jsx("h1",{children:"Spacing"}),a.jsx("p",{className:"lead",children:"Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance."})]}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(m.ZP,{id:"margin-and-padding",className:"scroll-margin",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{tag:"h3",children:"Margin and padding"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["Assign responsive-friendly ",a.jsx("code",{children:"margin"})," or"," ",a.jsx("code",{children:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from ",a.jsx("code",{children:".25rem"})," to ",a.jsx("code",{children:"3rem"}),"."]}),(0,a.jsxs)("p",{children:["Using the CSS Grid layout module? Consider using"," ",a.jsx(o(),{href:"/#gap",children:"the gap utility"}),"."]}),(0,a.jsxs)(m.ZP,{id:"notation",className:"scroll-margin rounded-2",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{children:"Notation"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["Spacing utilities that apply to all breakpoints, from"," ",a.jsx("code",{children:"xs"})," to ",a.jsx("code",{children:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",a.jsx("code",{children:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."]}),(0,a.jsxs)("p",{children:["The classes are named using the format"," ",a.jsx("code",{children:"{property}{sides}-{size}"})," for"," ",a.jsx("code",{children:"xs"})," and"," ",a.jsx("code",{children:"{property}{sides}-{breakpoint}-{size}"})," ","for ",a.jsx("code",{children:"sm"}),", ",a.jsx("code",{children:"md"}),", ",a.jsx("code",{children:"lg"}),","," ",a.jsx("code",{children:"xl"}),", and ",a.jsx("code",{children:"xxl"}),"."]}),(0,a.jsxs)("p",{children:["Where ",a.jsx("em",{children:"property"})," is one of:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[a.jsx("code",{children:"m"})," - for classes that set"," ",a.jsx("code",{children:"margin"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"p"})," - for classes that set"," ",a.jsx("code",{children:"padding"})]})]}),(0,a.jsxs)("p",{children:["Where ",a.jsx("em",{children:"sides"})," is one of:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[a.jsx("code",{children:"t"})," - for classes that set"," ",a.jsx("code",{children:"margin-top"})," or ",a.jsx("code",{children:"padding-top"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"b"})," - for classes that set"," ",a.jsx("code",{children:"margin-bottom"})," or"," ",a.jsx("code",{children:"padding-bottom"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"s"})," - for classes that set"," ",a.jsx("code",{children:"margin-left"})," or"," ",a.jsx("code",{children:"padding-left"})," in LTR,"," ",a.jsx("code",{children:"margin-right"})," or"," ",a.jsx("code",{children:"padding-right"})," in RTL"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"e"})," - for classes that set"," ",a.jsx("code",{children:"margin-right"})," or"," ",a.jsx("code",{children:"padding-right"})," in LTR,"," ",a.jsx("code",{children:"margin-left"})," or"," ",a.jsx("code",{children:"padding-left"})," in RTL"]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"x"})," - for classes that set both"," ",a.jsx("code",{children:"*-left"})," and ",a.jsx("code",{children:"*-right"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"y"})," - for classes that set both"," ",a.jsx("code",{children:"*-top"})," and ",a.jsx("code",{children:"*-bottom"})]}),(0,a.jsxs)("li",{children:["blank - for classes that set a ",a.jsx("code",{children:"margin"})," ","or ",a.jsx("code",{children:"padding"})," on all 4 sides of the element"]})]}),(0,a.jsxs)("p",{children:["Where ",a.jsx("em",{children:"size"})," is one of:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[a.jsx("code",{children:"0"})," - for classes that eliminate the"," ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," by setting it to ",a.jsx("code",{children:"0"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"1"})," - (by default) for classes that set the ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," to"," ",a.jsx("code",{children:"$spacer * .25"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"2"})," - (by default) for classes that set the ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," to"," ",a.jsx("code",{children:"$spacer * .5"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"3"})," - (by default) for classes that set the ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," to"," ",a.jsx("code",{children:"$spacer"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"4"})," - (by default) for classes that set the ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," to"," ",a.jsx("code",{children:"$spacer * 1.5"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"5"})," - (by default) for classes that set the ",a.jsx("code",{children:"margin"})," or ",a.jsx("code",{children:"padding"})," to"," ",a.jsx("code",{children:"$spacer * 3"})]}),(0,a.jsxs)("li",{children:[a.jsx("code",{children:"auto"})," - for classes that set the"," ",a.jsx("code",{children:"margin"})," to auto"]})]}),(0,a.jsxs)("p",{children:["(You can add more sizes by adding entries to the"," ",a.jsx("code",{children:"$spacers"})," Sass map variable.)"]})]})]}),(0,a.jsxs)(m.ZP,{id:"examples",className:"scroll-margin rounded-2",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{children:"Examples"})})}),(0,a.jsxs)(m.eW,{children:[a.jsx("p",{children:"Here are some representative examples of these classes:"}),a.jsx(u.Z,{code:e,language:"scss"})]})]}),(0,a.jsxs)(m.ZP,{id:"horizontal-centering",className:"scroll-margin rounded-2",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{children:"Horizontal centering"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["Additionally, Bootstrap also includes an"," ",a.jsx("code",{children:".mx-auto"})," class for horizontally centering fixed-width block level content—that is, content that has ",a.jsx("code",{children:"display: block"})," and a ",a.jsx("code",{children:"width"})," ","set—by setting the horizontal margins to"," ",a.jsx("code",{children:"auto"}),"."]}),a.jsx(u.Z,{code:s,children:a.jsx("div",{className:"mx-auto",style:{width:200,backgroundColor:"rgba(86, 61, 124, 0.15)"},children:"Centered element"})})]})]})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(m.ZP,{id:"negative-margin",className:"scroll-margin",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{tag:"h3",children:"Negative margin"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["In CSS, ",a.jsx("code",{children:"margin"})," properties can utilize negative values (",a.jsx("code",{children:"padding"})," cannot). These negative margins are"," ",a.jsx("strong",{children:"disabled by default"}),", but can be enabled in Sass by setting ",a.jsx("code",{children:"$enable-negative-margins: true"}),"."]}),(0,a.jsxs)("p",{children:["The syntax is nearly the same as the default, positive margin utilities, but with the addition of ",a.jsx("code",{children:"n"})," before the requested size. Here’s an example class that’s the opposite of"," ",a.jsx("code",{children:".mt-1"}),":"]}),a.jsx(u.Z,{code:r,language:"scss"})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(m.ZP,{id:"gap",className:"scroll-margin",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{tag:"h3",children:"Gap"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["When using ",a.jsx("code",{children:"display: grid"}),", you can make use of"," ",a.jsx("code",{children:"gap"})," utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a ",a.jsx("code",{children:"display: grid"})," container). Gap utilities are responsive by default, and are generated via our utilities API, based on the ",a.jsx("code",{children:"$spacers"})," Sass map."]}),a.jsx(u.Z,{code:i,children:(0,a.jsxs)("div",{className:"d-grid gap-3",children:[a.jsx("div",{className:"p-2 bg-light border",children:"Grid item 1"}),a.jsx("div",{className:"p-2 bg-light border",children:"Grid item 2"}),a.jsx("div",{className:"p-2 bg-light border",children:"Grid item 3"})]})}),(0,a.jsxs)("p",{children:["Support includes responsive options for all of Bootstrap’s grid breakpoints, as well as six sizes from the ",a.jsx("code",{children:"$spacers"})," ","map (",a.jsx("code",{children:"0"}),"–",a.jsx("code",{children:"5"}),"). There is no"," ",a.jsx("code",{children:".gap-auto"})," utility class as it’s effectively the same as ",a.jsx("code",{children:".gap-0"}),"."]})]})]})}),a.jsx("div",{className:"col-12",children:(0,a.jsxs)(m.ZP,{id:"sass",className:"scroll-margin",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{tag:"h3",children:"Sass"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)(m.ZP,{id:"map",className:"scroll-margin rounded-2",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{children:"Map"})})}),(0,a.jsxs)(m.eW,{children:[a.jsx("p",{children:"Spacing utilities are declared via Sass map and then generated with our utilities API."}),a.jsx(u.Z,{code:t,language:"scss"})]})]}),(0,a.jsxs)(m.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[a.jsx(m.Ol,{children:a.jsx(m.oL,{children:a.jsx(m.ll,{children:"Utilities API"})})}),(0,a.jsxs)(m.eW,{children:[(0,a.jsxs)("p",{children:["Sizing utilities are declared in our utilities API in"," ",a.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",a.jsx(o(),{href:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),a.jsx(u.Z,{code:n,language:"scss"})]})]})]})]})})]})})]})};i()}catch(e){i(e)}})},5244:(e,s)=>{var r;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},7495:e=>{e.exports=require("@reactour/tour")},9003:e=>{e.exports=require("classnames")},1635:e=>{e.exports=require("dayjs")},7424:e=>{e.exports=require("dayjs/plugin/localizedFormat")},4195:e=>{e.exports=require("dayjs/plugin/relativeTime")},2296:e=>{e.exports=require("formik")},3864:e=>{e.exports=require("jsx-to-string")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},8871:e=>{e.exports=require("prismjs")},2326:e=>{e.exports=require("prismjs/components/prism-jsx.min")},5512:e=>{e.exports=require("prismjs/components/prism-scss.min")},1414:e=>{e.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4648:e=>{e.exports=require("react-input-mask")},1191:e=>{e.exports=require("react-jss")},956:e=>{e.exports=require("react-notifications-component")},3554:e=>{e.exports=require("react-number-format")},2932:e=>{e.exports=require("react-popper")},727:e=>{e.exports=require("react-syntax-highlighter")},7079:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},2250:e=>{e.exports=require("screenfull")},271:e=>{e.exports=require("sweetalert2")},3810:e=>{e.exports=require("sweetalert2-react-content")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},9915:e=>{e.exports=import("js-cookie")},6257:e=>{e.exports=import("pascalcase")},3590:e=>{e.exports=import("react-toastify")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),i=s.X(0,[4567,3914,6859,6814],()=>r(9146));module.exports=i})();