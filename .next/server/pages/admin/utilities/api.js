"use strict";(()=>{var e={};e.id=6942,e.ids=[6942,2888,660],e.modules={1323:(e,i)=>{Object.defineProperty(i,"l",{enumerable:!0,get:function(){return function e(i,t){return t in i?i[t]:"then"in i&&"function"==typeof i.then?i.then(i=>e(i,t)):"function"==typeof i&&"default"===t?i:void 0}}})},9763:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.r(i),t.d(i,{config:()=>m,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>u,getStaticProps:()=>h,reportWebVitals:()=>j,routeModule:()=>w,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>y});var r=t(7093),a=t(5244),l=t(1323),o=t(7645),c=t(6814),n=t(9),d=e([c,n]);[c,n]=d.then?(await d)():d;let p=(0,l.l)(n,"default"),h=(0,l.l)(n,"getStaticProps"),u=(0,l.l)(n,"getStaticPaths"),x=(0,l.l)(n,"getServerSideProps"),m=(0,l.l)(n,"config"),j=(0,l.l)(n,"reportWebVitals"),y=(0,l.l)(n,"unstable_getStaticProps"),g=(0,l.l)(n,"unstable_getStaticPaths"),v=(0,l.l)(n,"unstable_getStaticParams"),f=(0,l.l)(n,"unstable_getServerProps"),b=(0,l.l)(n,"unstable_getServerSideProps"),w=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/admin/utilities/api",pathname:"/admin/utilities/api",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:n});s()}catch(e){s(e)}})},4505:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.d(i,{Z:()=>y});var r=t(997),a=t(6689),l=t(580),o=t.n(l),c=t(9003),n=t.n(c),d=t(1664),p=t.n(d),h=t(9680),u=t(9337),x=e([u]);u=(x.then?(await x)():x)[0];let m=({children:e,ariaLabel:i,className:t,tag:s,to:l,isActive:o,divider:c})=>(0,r.jsxs)(h.Z,{tag:s,className:n()("breadcrumb-item",{active:o},t),"aria-current":o?"page":null,"aria-label":i||e,children:[c&&"string"!=typeof c&&(0,a.cloneElement)(c,{className:n()("breadcrumb-icon",c.props.className)}),o?e:r.jsx(p(),{href:l,"aria-label":i,children:e})]});m.propTypes={children:o().node.isRequired,ariaLabel:o().string,className:o().string,tag:o().string,to:o().string.isRequired,isActive:o().bool,divider:o().node},m.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let j=({children:e,list:i,tag:t,listTag:s,itemTag:l,ariaLabel:o,autoActive:c,isToHome:n,divider:d})=>{let p="string"!==d&&d;return r.jsx(h.Z,{tag:t,"aria-label":o,style:d?{"--bs-breadcrumb-divider":"string"==typeof d?`'${d}'`:"none"}:null,children:(0,r.jsxs)(h.Z,{tag:s,className:"breadcrumb",children:[n&&r.jsx(m,{to:"/",ariaLabel:"Home",children:n}),i?i.map((e,t)=>r.jsx(m,{tag:e.tag||l,to:e.to,isActive:c&&i.length===t+1,divider:p,children:e.title},e.title)):a.Children.map(e,(i,t)=>(0,a.cloneElement)(i,{tag:i.props.tag||l,isActive:c&&e.length===t+1,divider:i.props.divider||p}))]})})};j.propTypes={children:o().node,tag:o().oneOf(["nav","div","section"]),listTag:o().oneOf(["div","ol","ul"]),itemTag:o().oneOf(["div","li"]),ariaLabel:o().string,list:o().arrayOf(o().shape({title:o().string.isRequired,to:o().string.isRequired})),autoActive:o().bool,isToHome:o().oneOfType([o().string,o().node]),divider:o().oneOfType([o().string,o().node])},j.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:r.jsx(u.Z,{icon:"HolidayVillage"}),divider:r.jsx(u.Z,{icon:"ChevronRight"})};let y=j;s()}catch(e){s(e)}})},7645:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o,getStaticProps:()=>l});var s=t(997);t(6689);var r=t(6859),a=t(5460);let l=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["translation","menu"])}}),o=()=>(0,s.jsxs)(r.Html,{children:[s.jsx(r.Head,{}),(0,s.jsxs)("body",{className:"modern-design subheader-enabled",children:[s.jsx(r.Main,{}),s.jsx("div",{id:"portal-root"}),s.jsx("div",{id:"portal-notification"}),s.jsx(r.NextScript,{})]})]})},9:(e,i,t)=>{t.a(e,async(e,s)=>{try{t.r(i),t.d(i,{default:()=>y,getStaticProps:()=>j});var r=t(997);t(6689);var a=t(5460),l=t(968),o=t.n(l),c=t(5792),n=t(6114),d=t(7942),p=t(4505),h=t(4570),u=t(6769),x=t(9467),m=e([p,u]);[p,u]=m.then?(await m)():m;let j=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["common","menu"])}}),y=()=>{let e=`
$utilities: (
	"opacity": (
		property: opacity,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
  	)
 );`,i=`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }`,t=`
$utilities: (
	"opacity": (
		property: opacity,
		class: o,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`,s=`
.o-0 { opacity: 0; }
.o-25 { opacity: .25; }
.o-50 { opacity: .5; }
.o-75 { opacity: .75; }
.o-100 { opacity: 1; }`,a=`
$utilities: (
	"opacity": (
		property: opacity,
		class: opacity,
		state: hover,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
);`,l=`
.opacity-0-hover:hover { opacity: 0; }
.opacity-25-hover:hover { opacity: .25; }
.opacity-50-hover:hover { opacity: .5; }
.opacity-75-hover:hover { opacity: .75; }
.opacity-100-hover:hover { opacity: 1; }`,m=`
$utilities: (
	"opacity": (
		property: opacity,
		responsive: true,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`,j=`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media (min-width: 576px) {
	.opacity-sm-0 { opacity: 0; }
	.opacity-sm-25 { opacity: .25; }
	.opacity-sm-50 { opacity: .5; }
	.opacity-sm-75 { opacity: .75; }
	.opacity-sm-100 { opacity: 1; }
}

@media (min-width: 768px) {
	.opacity-md-0 { opacity: 0; }
	.opacity-md-25 { opacity: .25; }
	.opacity-md-50 { opacity: .5; }
	.opacity-md-75 { opacity: .75; }
	.opacity-md-100 { opacity: 1; }
}

@media (min-width: 992px) {
	.opacity-lg-0 { opacity: 0; }
	.opacity-lg-25 { opacity: .25; }
	.opacity-lg-50 { opacity: .5; }
	.opacity-lg-75 { opacity: .75; }
	.opacity-lg-100 { opacity: 1; }
}

@media (min-width: 1200px) {
	.opacity-xl-0 { opacity: 0; }
	.opacity-xl-25 { opacity: .25; }
	.opacity-xl-50 { opacity: .5; }
	.opacity-xl-75 { opacity: .75; }
	.opacity-xl-100 { opacity: 1; }
}

@media (min-width: 1400px) {
	.opacity-xxl-0 { opacity: 0; }
	.opacity-xxl-25 { opacity: .25; }
	.opacity-xxl-50 { opacity: .5; }
	.opacity-xxl-75 { opacity: .75; }
	.opacity-xxl-100 { opacity: 1; }
}`,y=`
$utilities: (
	"overflow": (
		responsive: true,
		property: overflow,
		values: visible hidden scroll auto,
	),
);`,g=`
$utilities: (
	"opacity": (
    	property: opacity,
    	print: true,
    	values: (
      		0: 0,
      		25: .25,
      		50: .5,
      		75: .75,
      		100: 1,
    	)
  	)
 );`,v=`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media print {
  	.opacity-print-0 { opacity: 0; }
  	.opacity-print-25 { opacity: .25; }
  	.opacity-print-50 { opacity: .5; }
  	.opacity-print-75 { opacity: .75; }
  	.opacity-print-100 { opacity: 1; }
}`,f=`
$utilities: map-merge(
  	$utilities,
  	(
    	"cursor": (
      		property: cursor,
      		class: cursor,
      		responsive: true,
      		values: auto pointer grab,
    	)
  	)
);`,b=`
$utilities: map-merge(
	$utilities,
		(
			"width": map-merge(
				map-get($utilities, "width"),
			(
				values: map-merge(
					map-get(map-get($utilities, "width"), "values"),
					(10: 10%),
				),
			),
		),
	)
);`,w=`
$utilities: map-merge(
	$utilities, (
		"margin-start": map-merge(
			map-get($utilities, "margin-start"),
			( class: ml ),
		),
	)
);`,P=`
$utilities: map-merge(
	$utilities,
	(
		"width": null
	)
);`,N=`
$utilities: (
	"word-wrap": (
		property: word-wrap word-break,
		class: text,
		values: (break: break-word),
		rtl: false
	),
);`,S=`
/* rtl:begin:remove */
.text-break {
	word-wrap: break-word !important;
  	word-break: break-word !important;
}
/* rtl:end:remove */`;return(0,r.jsxs)(c.Z,{children:[r.jsx(o(),{children:r.jsx("title",{children:n.XZ.utilities.subMenu.api.text})}),r.jsx(d.ZP,{children:r.jsx(d.Vv,{children:r.jsx(p.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"API",to:"/utilities/api"}]})})}),r.jsx(h.Z,{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 my-4",children:[r.jsx("h1",{children:"Utility API"}),r.jsx("p",{className:"lead",children:"The utility API is a Sass-based tool to generate utility classes."})]}),r.jsx("div",{className:"col-12",children:r.jsx(u.ZP,{children:(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Bootstrap utilities are generated with our utility API and can be used to modify or extend our default set of utility classes via Sass. Our utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you’re unfamiliar with Sass maps, read up on the"," ",r.jsx("a",{href:"https://sass-lang.com/documentation/values/maps",target:"_blank",rel:"noreferrer",children:"official Sass docs"})," ","to get started."]}),(0,r.jsxs)("p",{children:["The ",r.jsx("code",{children:"$utilities"})," map contains all our utilities and is later merged with your custom ",r.jsx("code",{children:"$utilities"})," map, if present. The utility map contains a keyed list of utility groups which accept the following options:"]}),r.jsx(u.ZP,{shadow:"none",borderSize:1,stretch:!0,children:r.jsx(u.eW,{children:(0,r.jsxs)("table",{className:"table text-start mb-0",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Option"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"property"})}),r.jsx("td",{children:r.jsx("strong",{children:"Required"})}),r.jsx("td",{children:"Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins)."})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"values"})}),r.jsx("td",{children:r.jsx("strong",{children:"Required"})}),(0,r.jsxs)("td",{children:["List of values, or a map if you don’t want the class name to be the same as the value. If ",r.jsx("code",{children:"null"})," is used as map key, it isn’t compiled."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"class"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["Variable for the class name if you don’t want it to be the same as the property. In case you don’t provide the"," ",r.jsx("code",{children:"class"})," key and"," ",r.jsx("code",{children:"property"})," key is an array of strings, the class name will be the first element of the ",r.jsx("code",{children:"property"})," array."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"state"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["List of pseudo-class variants like"," ",r.jsx("code",{children:":hover"})," or ",r.jsx("code",{children:":focus"})," ","to generate for the utility. No default value."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"responsive"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["Boolean indicating if responsive classes need to be generated. ",r.jsx("code",{children:"false"})," by default."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"rfs"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["Boolean to enable fluid rescaling. Have a look at the"," ",r.jsx("a",{href:"https://getbootstrap.com/docs/5.0/getting-started/rfs/",target:"_blank",rel:"noreferrer",children:"RFS"})," ","page to find out how this works."," ",r.jsx("code",{children:"false"})," by default."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"print"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["Boolean indicating if print classes need to be generated. ",r.jsx("code",{children:"false"})," by default."]})]}),(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("code",{children:"rtl"})}),r.jsx("td",{children:"Optional"}),(0,r.jsxs)("td",{children:["Boolean indicating if utility should be kept in RTL. ",r.jsx("code",{children:"true"})," by default."]})]})]})]})})})]})})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(u.ZP,{id:"api-explained",className:"scroll-margin",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{tag:"h3",children:"API explained"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["All utility variables are added to the ",r.jsx("code",{children:"$utilities"})," ","variable within our ",r.jsx("code",{children:"_utilities.scss"})," stylesheet. Each group of utilities looks something like this:"]}),r.jsx(x.Z,{code:e,language:"scss"}),r.jsx("p",{children:"Which outputs the following:"}),r.jsx(x.Z,{code:i,language:"scss",className:"mb-4"}),(0,r.jsxs)(u.ZP,{id:"custom-class-prefix",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Custom class prefix"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Use the ",r.jsx("code",{children:"class"})," option to change the class prefix used in the compiled CSS:"]}),r.jsx(x.Z,{code:t,language:"scss",className:"mb-4"}),r.jsx("p",{children:"Output:"}),r.jsx(x.Z,{code:s,language:"scss",className:"mb-0"})]})]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(u.ZP,{id:"states",className:"scroll-margin",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{tag:"h3",children:"States"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Use the ",r.jsx("code",{children:"state"})," option to generate pseudo-class variations. Example pseudo-classes are ",r.jsx("code",{children:":hover"})," and"," ",r.jsx("code",{children:":focus"}),". When a list of states are provided, classnames are created for that pseudo-class. For example, to change opacity on hover, add ",r.jsx("code",{children:"state: hover"})," and you’ll get ",r.jsx("code",{children:".opacity-hover:hover"})," in your compiled CSS."]}),(0,r.jsxs)("p",{children:["Need multiple pseudo-classes? Use a space-separated list of states: ",r.jsx("code",{children:"state: hover focus"}),"."]}),r.jsx(x.Z,{code:a,language:"scss",className:"mb-4"}),r.jsx("p",{children:"Output:"}),r.jsx(x.Z,{code:l,language:"scss",className:"mb-4"}),(0,r.jsxs)(u.ZP,{id:"responsive-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Responsive utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Add the ",r.jsx("code",{children:"responsive"})," boolean to generate responsive utilities (e.g., ",r.jsx("code",{children:".opacity-md-25"}),") across"," ",r.jsx("a",{href:"https://getbootstrap.com/docs/5.0/layout/breakpoints/",target:"_blank",rel:"noreferrer",children:"all breakpoints"}),"."]}),r.jsx(x.Z,{code:m,language:"scss",className:"mb-4"}),r.jsx("p",{children:"Output:"}),r.jsx(x.Z,{code:j,language:"scss",className:"mb-0"})]})]}),(0,r.jsxs)(u.ZP,{id:"changing-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Changing utilities"})})}),(0,r.jsxs)(u.eW,{children:[r.jsx("p",{children:"Override existing utilities by using the same key. For example, if you want additional responsive overflow utility classes, you can do this:"}),r.jsx(x.Z,{code:y,language:"scss",className:"mb-0"})]})]}),(0,r.jsxs)(u.ZP,{id:"print-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Print utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Enabling the ",r.jsx("code",{children:"print"})," option will"," ",r.jsx("strong",{children:"also"})," generate utility classes for print, which are only applied within the"," ",r.jsx("code",{children:"@media print { ... }"})," media query."]}),r.jsx(x.Z,{code:g,language:"scss",className:"mb-4"}),r.jsx("p",{children:"Output:"}),r.jsx(x.Z,{code:v,language:"scss",className:"mb-0"})]})]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(u.ZP,{id:"using-the-api",className:"scroll-margin",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{tag:"h3",children:"Using the API"})})}),(0,r.jsxs)(u.eW,{children:[r.jsx("p",{children:"Now that you’re familiar with how the utilities API works, learn how to add your own custom classes and modify our default utilities."}),(0,r.jsxs)(u.ZP,{id:"add-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Add utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["New utilities can be added to the default"," ",r.jsx("code",{children:"$utilities"})," map with a"," ",r.jsx("code",{children:"map-merge"}),". Use the"," ",r.jsx("code",{children:"src/styles/utilities/_index.scss"})," file to write new, then use the ",r.jsx("code",{children:"map-merge"})," to add your additional utilities. For example, here’s how to add a responsive ",r.jsx("code",{children:"cursor"})," utility with three values."]}),r.jsx(x.Z,{code:f,language:"scss",className:"mb-0"})]})]}),(0,r.jsxs)(u.ZP,{id:"modify-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Modify utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Modify existing utilities in the default"," ",r.jsx("code",{children:"$utilities"})," map with ",r.jsx("code",{children:"map-get"})," ","and ",r.jsx("code",{children:"map-merge"})," functions. In the example below, we’re adding an additional value to the"," ",r.jsx("code",{children:"width"})," utilities. Start with an initial"," ",r.jsx("code",{children:"map-merge"})," and then specify which utility you want to modify. From there, fetch the nested"," ",r.jsx("code",{children:'"width"'})," map with ",r.jsx("code",{children:"map-get"})," to access and modify the utility’s options and values."]}),r.jsx(x.Z,{code:b,language:"scss",className:"mb-4"}),(0,r.jsxs)(u.ZP,{id:"rename-utilities",className:"scroll-margin rounded-1",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{tag:"h6",children:"Rename utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Missing v4 utilities, or used to another naming convention? The utilities API can be used to override the resulting ",r.jsx("code",{children:"class"})," of a given utility—for example, to rename"," ",r.jsx("code",{children:".ms-*"})," utilities to oldish"," ",r.jsx("code",{children:".ml-*"}),":"]}),r.jsx(x.Z,{code:w,language:"scss",className:"mb-0"})]})]})]})]}),(0,r.jsxs)(u.ZP,{id:"remove-utilities",className:"scroll-margin rounded-2",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{children:"Remove utilities"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Remove any of the default utilities by setting the group key to ",r.jsx("code",{children:"null"}),". For example, to remove all our"," ",r.jsx("code",{children:"width"})," utilities, create a"," ",r.jsx("code",{children:"$utilities"})," ",r.jsx("code",{children:"map-merge"})," and add"," ",r.jsx("code",{children:'"width": null'})," within."]}),r.jsx(x.Z,{code:P,language:"scss",className:"mb-4"}),(0,r.jsxs)(u.ZP,{id:"remove-utility-in-rtl",className:"scroll-margin rounded-1",children:[r.jsx(u.Ol,{children:r.jsx(u.oL,{children:r.jsx(u.ll,{tag:"h6",children:"Remove utility in RTL"})})}),(0,r.jsxs)(u.eW,{children:[(0,r.jsxs)("p",{children:["Some edge cases make"," ",r.jsx("a",{href:"https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl",target:"_blank",rel:"noreferrer",children:"RTL styling difficult"}),", such as line breaks in Arabic. Thus utilities can be dropped from RTL output by setting the"," ",r.jsx("code",{children:"rtl"})," option to ",r.jsx("code",{children:"false"}),":"]}),r.jsx(x.Z,{code:N,language:"scss",className:"mb-4"}),r.jsx("p",{children:"Output:"}),r.jsx(x.Z,{code:S,language:"scss",className:"mb-4"}),(0,r.jsxs)("p",{children:["This doesn’t output anything in RTL, thanks to"," ",(0,r.jsxs)("a",{href:"https://rtlcss.com/learn/usage-guide/control-directives/#remove",target:"_blank",rel:"noreferrer",children:["the RTLCSS ",r.jsx("code",{children:"remove"})," control directive"]}),"."]})]})]})]})]})]})]})})]})})]})};s()}catch(e){s(e)}})},5244:(e,i)=>{var t;Object.defineProperty(i,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},7495:e=>{e.exports=require("@reactour/tour")},9003:e=>{e.exports=require("classnames")},1635:e=>{e.exports=require("dayjs")},7424:e=>{e.exports=require("dayjs/plugin/localizedFormat")},4195:e=>{e.exports=require("dayjs/plugin/relativeTime")},2296:e=>{e.exports=require("formik")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},8871:e=>{e.exports=require("prismjs")},2326:e=>{e.exports=require("prismjs/components/prism-jsx.min")},5512:e=>{e.exports=require("prismjs/components/prism-scss.min")},1414:e=>{e.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4648:e=>{e.exports=require("react-input-mask")},1191:e=>{e.exports=require("react-jss")},956:e=>{e.exports=require("react-notifications-component")},3554:e=>{e.exports=require("react-number-format")},2932:e=>{e.exports=require("react-popper")},727:e=>{e.exports=require("react-syntax-highlighter")},7079:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},2250:e=>{e.exports=require("screenfull")},271:e=>{e.exports=require("sweetalert2")},3810:e=>{e.exports=require("sweetalert2-react-content")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},9915:e=>{e.exports=import("js-cookie")},6257:e=>{e.exports=import("pascalcase")},3590:e=>{e.exports=import("react-toastify")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),s=i.X(0,[4567,3914,6859,6814],()=>t(9763));module.exports=s})();