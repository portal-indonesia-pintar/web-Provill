"use strict";(()=>{var e={};e.id=7764,e.ids=[7764,2888,660],e.modules={1323:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,t){return t in s?s[t]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,t)):"function"==typeof s&&"default"===t?s:void 0}}})},686:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{config:()=>g,default:()=>h,getServerSideProps:()=>p,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>u,routeModule:()=>y,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var r=t(7093),a=t(5244),l=t(1323),n=t(7645),o=t(6814),c=t(2981),d=e([o,c]);[o,c]=d.then?(await d)():d;let h=(0,l.l)(c,"default"),m=(0,l.l)(c,"getStaticProps"),x=(0,l.l)(c,"getStaticPaths"),p=(0,l.l)(c,"getServerSideProps"),g=(0,l.l)(c,"config"),u=(0,l.l)(c,"reportWebVitals"),f=(0,l.l)(c,"unstable_getStaticProps"),j=(0,l.l)(c,"unstable_getStaticPaths"),w=(0,l.l)(c,"unstable_getStaticParams"),b=(0,l.l)(c,"unstable_getServerProps"),v=(0,l.l)(c,"unstable_getServerSideProps"),y=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/admin/utilities/text",pathname:"/admin/utilities/text",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});i()}catch(e){i(e)}})},4364:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.d(s,{Z:()=>g});var r=t(997);t(6689);var a=t(580),l=t.n(a),n=t(3864),o=t.n(n),c=t(9003),d=t.n(c),h=t(6769),m=t(9467),x=e([h]);h=(x.then?(await x)():x)[0];let p=({children:e,className:s,code:t,language:i})=>e?(0,r.jsxs)(h.ZP,{shadow:"none",borderSize:1,className:d()("rounded-2",s),children:[r.jsx(h.eW,{children:e}),r.jsx(m.Z,{className:"my-0 rounded-bottom",code:t||o()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i,rounded:0})]}):r.jsx(m.Z,{className:d()("my-0",s),code:t||o()(e,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:i});p.propTypes={children:l().node,className:l().string,code:l().string,language:l().string},p.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"};let g=p;i()}catch(e){i(e)}})},5635:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.d(s,{Z:()=>m});var r=t(997);t(6689);var a=t(580),l=t.n(a),n=t(9003),o=t.n(n),c=t(1895),d=e([c]);c=(d.then?(await d)():d)[0];let h=({children:e,className:s,color:t})=>r.jsx(c.ZP,{color:t,isLight:!0,shadow:"md",borderWidth:0,icon:"Info",className:o()("flex-nowrap","w-100","mb-0",s),children:e});h.propTypes={children:l().node.isRequired,className:l().string,color:l().oneOf(["primary","secondary","success","info","warning","danger","light","dark"])},h.defaultProps={className:void 0,color:"warning"};let m=h;i()}catch(e){i(e)}})},4505:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.d(s,{Z:()=>f});var r=t(997),a=t(6689),l=t(580),n=t.n(l),o=t(9003),c=t.n(o),d=t(1664),h=t.n(d),m=t(9680),x=t(9337),p=e([x]);x=(p.then?(await p)():p)[0];let g=({children:e,ariaLabel:s,className:t,tag:i,to:l,isActive:n,divider:o})=>(0,r.jsxs)(m.Z,{tag:i,className:c()("breadcrumb-item",{active:n},t),"aria-current":n?"page":null,"aria-label":s||e,children:[o&&"string"!=typeof o&&(0,a.cloneElement)(o,{className:c()("breadcrumb-icon",o.props.className)}),n?e:r.jsx(h(),{href:l,"aria-label":s,children:e})]});g.propTypes={children:n().node.isRequired,ariaLabel:n().string,className:n().string,tag:n().string,to:n().string.isRequired,isActive:n().bool,divider:n().node},g.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};let u=({children:e,list:s,tag:t,listTag:i,itemTag:l,ariaLabel:n,autoActive:o,isToHome:c,divider:d})=>{let h="string"!==d&&d;return r.jsx(m.Z,{tag:t,"aria-label":n,style:d?{"--bs-breadcrumb-divider":"string"==typeof d?`'${d}'`:"none"}:null,children:(0,r.jsxs)(m.Z,{tag:i,className:"breadcrumb",children:[c&&r.jsx(g,{to:"/",ariaLabel:"Home",children:c}),s?s.map((e,t)=>r.jsx(g,{tag:e.tag||l,to:e.to,isActive:o&&s.length===t+1,divider:h,children:e.title},e.title)):a.Children.map(e,(s,t)=>(0,a.cloneElement)(s,{tag:s.props.tag||l,isActive:o&&e.length===t+1,divider:s.props.divider||h}))]})})};u.propTypes={children:n().node,tag:n().oneOf(["nav","div","section"]),listTag:n().oneOf(["div","ol","ul"]),itemTag:n().oneOf(["div","li"]),ariaLabel:n().string,list:n().arrayOf(n().shape({title:n().string.isRequired,to:n().string.isRequired})),autoActive:n().bool,isToHome:n().oneOfType([n().string,n().node]),divider:n().oneOfType([n().string,n().node])},u.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:r.jsx(x.Z,{icon:"HolidayVillage"}),divider:r.jsx(x.Z,{icon:"ChevronRight"})};let f=u;i()}catch(e){i(e)}})},7645:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n,getStaticProps:()=>l});var i=t(997);t(6689);var r=t(6859),a=t(5460);let l=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["translation","menu"])}}),n=()=>(0,i.jsxs)(r.Html,{children:[i.jsx(r.Head,{}),(0,i.jsxs)("body",{className:"modern-design subheader-enabled",children:[i.jsx(r.Main,{}),i.jsx("div",{id:"portal-root"}),i.jsx("div",{id:"portal-notification"}),i.jsx(r.NextScript,{})]})]})},2981:(e,s,t)=>{t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>b,getStaticProps:()=>w});var r=t(997);t(6689);var a=t(5460),l=t(968),n=t.n(l),o=t(1664),c=t.n(o),d=t(5792),h=t(6114),m=t(7942),x=t(4505),p=t(4570),g=t(6769),u=t(4364),f=t(5635),j=e([x,g,u,f]);[x,g,u,f]=j.then?(await j)():j;let w=async({locale:e})=>({props:{...await (0,a.serverSideTranslations)(e,["common","menu"])}}),b=()=>{let e=`
<p className='text-start'>Start aligned text on all viewport sizes.</p>
<p className='text-center'>Center aligned text on all viewport sizes.</p>
<p className='text-end'>End aligned text on all viewport sizes.</p>

<p className='text-sm-start'>Start aligned text on viewports sized SM (small) or wider.</p>
<p className='text-md-start'>Start aligned text on viewports sized MD (medium) or wider.</p>
<p className='text-lg-start'>Start aligned text on viewports sized LG (large) or wider.</p>
<p className='text-xl-start'>Start aligned text on viewports sized XL (extra-large) or wider.</p>`,s=`
<div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
	This text should wrap.
</div>`,t=`
<div className='text-nowrap bg-light' style={{ width: '8rem' }}>
	This text should overflow the parent.
</div>`,i=`
<p className='text-lowercase'>Lowercased text.</p>
<p className='text-uppercase'>Uppercased text.</p>
<p className='text-capitalize'>CapiTaliZed text.</p>`,a=`
<p className='fs-1'>.fs-1 text</p>
<p className='fs-2'>.fs-2 text</p>
<p className='fs-3'>.fs-3 text</p>
<p className='fs-4'>.fs-4 text</p>
<p className='fs-5'>.fs-5 text</p>
<p className='fs-6'>.fs-6 text</p>`,l=`
<p className='fw-bold'>Bold text.</p>
<p className='fw-bolder'>Bolder weight text (relative to the parent element).</p>
<p className='fw-normal'>Normal weight text.</p>
<p className='fw-light'>Light weight text.</p>
<p className='fw-lighter'>Lighter weight text (relative to the parent element).</p>
<p className='fst-italic'>Italic text.</p>
<p className='fst-normal'>Text with normal font style</p>`,o=`
<p className='lh-1'>...</p>
<p className='lh-sm'>...</p>
<p className='lh-base'>...</p>
<p className='lh-lg'>...</p>`,j=`
<p className='text-muted'>
	Muted text with a<a href='#' className='text-reset'>reset link</a>.
</p>`,w=`
<p className='text-decoration-underline'>This text has a line underneath it.</p>
<p className='text-decoration-line-through'>This text has a line going through it.</p>
<a href='#' className='text-decoration-none'>This link has its text decoration removed</a>`,b=`
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// stylelint-enable value-keyword-case
$font-family-base:            var(--#{$prefix}font-sans-serif);
$font-family-code:            var(--#{$prefix}font-monospace);

// $font-size-root effects the value of \`rem\`, which is used for as well font sizes, paddings and margins
// $font-size-base effects the font size of the body text
$font-size-root:              null;
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * .875;
$font-size-lg:                $font-size-base * 1.25;

$font-weight-lighter:         lighter;
$font-weight-light:           300;
$font-weight-normal:          400;
$font-weight-bold:            700;
$font-weight-bolder:          bolder;

$font-weight-base:            $font-weight-normal;

$line-height-base:            1.5;
$line-height-sm:              1.25;
$line-height-lg:              2;

$h1-font-size:                $font-size-base * 2.5;
$h2-font-size:                $font-size-base * 2;
$h3-font-size:                $font-size-base * 1.75;
$h4-font-size:                $font-size-base * 1.5;
$h5-font-size:                $font-size-base * 1.25;
$h6-font-size:                $font-size-base;`,v=`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// $font-family-base: 'Montserrat', sans-serif;
$font-family-base: 'Poppins', var(--bs-font-sans-serif);

$font-size-root:              0.8125rem; // \`13px\`
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * 0.875;
$font-size-lg:                $font-size-base * 1.25;`,y=`
$font-sizes: (
	1: $h1-font-size,
	2: $h2-font-size,
	3: $h3-font-size,
	4: $h4-font-size,
	5: $h5-font-size,
	6: $h6-font-size
);`,N=`
"font-family": (
	property: font-family,
	class: font,
	values: (monospace: var(--#{$prefix}font-monospace))
),
"font-size": (
	rfs: true,
	property: font-size,
	class: fs,
	values: $font-sizes
),
"font-style": (
	property: font-style,
	class: fst,
	values: italic normal
),
"font-weight": (
	property: font-weight,
	class: fw,
	values: (
		light: $font-weight-light,
		lighter: $font-weight-lighter,
		normal: $font-weight-normal,
		bold: $font-weight-bold,
		bolder: $font-weight-bolder
	)
),
"line-height": (
	property: line-height,
	class: lh,
	values: (
		1: 1,
		sm: $line-height-sm,
		base: $line-height-base,
		lg: $line-height-lg,
	)
),
"text-align": (
	responsive: true,
	property: text-align,
	class: text,
	values: (
		start: left,
		end: right,
		center: center,
	)
),
"text-decoration": (
	property: text-decoration,
	values: none underline line-through
),
"text-transform": (
	property: text-transform,
	class: text,
	values: lowercase uppercase capitalize
),
"white-space": (
	property: white-space,
	class: text,
	values: (
		wrap: normal,
		nowrap: nowrap,
	s
),
"word-wrap": (
	property: word-wrap word-break,
	class: text,
	values: (break: break-word),
	rtl: false
),`;return(0,r.jsxs)(d.Z,{children:[r.jsx(n(),{children:r.jsx("title",{children:h.XZ.utilities.subMenu.textPage.text})}),r.jsx(m.ZP,{children:r.jsx(m.Vv,{children:r.jsx(x.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Text",to:"/utilities/text"}]})})}),r.jsx(p.Z,{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 my-4",children:[r.jsx("h1",{children:"Text"}),r.jsx("p",{className:"lead",children:"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."})]}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"text-alignment",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Text alignment"})})}),(0,r.jsxs)(g.eW,{children:[r.jsx("p",{children:"Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."}),(0,r.jsxs)(u.Z,{code:e,children:[r.jsx("p",{className:"text-start",children:"Start aligned text on all viewport sizes."}),r.jsx("p",{className:"text-center",children:"Center aligned text on all viewport sizes."}),r.jsx("p",{className:"text-end",children:"End aligned text on all viewport sizes."}),r.jsx("p",{className:"text-sm-start",children:"Start aligned text on viewports sized SM (small) or wider."}),r.jsx("p",{className:"text-md-start",children:"Start aligned text on viewports sized MD (medium) or wider."}),r.jsx("p",{className:"text-lg-start",children:"Start aligned text on viewports sized LG (large) or wider."}),r.jsx("p",{className:"text-xl-start",children:"Start aligned text on viewports sized XL (extra-large) or wider."})]}),r.jsx(f.Z,{color:"info",children:"Note that we don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read."})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"text-wrapping-and-overflow",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Text wrapping and overflow"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Wrap text with a ",r.jsx("code",{children:".text-wrap"})," class."]}),r.jsx(u.Z,{code:s,children:r.jsx("div",{className:"badge bg-primary text-wrap",style:{width:"6rem"},children:"This text should wrap."})}),(0,r.jsxs)("p",{children:["Prevent text from wrapping with a ",r.jsx("code",{children:".text-nowrap"})," ","class."]}),r.jsx(u.Z,{code:t,children:r.jsx("div",{className:"text-nowrap bg-light",style:{width:"8rem"},children:"This text should overflow the parent."})})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"word-break",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Word break"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Prevent long strings of text from breaking your components' layout by using ",r.jsx("code",{children:".text-break"})," to set"," ",r.jsx("code",{children:"word-wrap: break-word"})," and"," ",r.jsx("code",{children:"word-break: break-word"}),". We use"," ",r.jsx("code",{children:"word-wrap"})," instead of the more common"," ",r.jsx("code",{children:"overflow-wrap"})," for wider browser support, and add the deprecated ",r.jsx("code",{children:"word-break: break-word"})," to avoid issues with flex containers."]}),r.jsx(u.Z,{children:r.jsx("p",{className:"text-break",children:"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"})}),(0,r.jsxs)(f.Z,{children:["Note that"," ",r.jsx("a",{href:"https://rtlstyling.com/posts/rtl-styling#3.-line-break",target:"_blank",rel:"noreferrer",children:"breaking words isn’t possible in Arabic"}),", which is the most used RTL language. Therefore"," ",r.jsx("code",{children:".text-break"})," is removed from our RTL compiled CSS."]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"text-transform",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Text transform"})})}),(0,r.jsxs)(g.eW,{children:[r.jsx("p",{children:"Transform text in components with text capitalization classes."}),(0,r.jsxs)(u.Z,{code:i,children:[r.jsx("p",{className:"text-lowercase",children:"Lowercased text."}),r.jsx("p",{className:"text-uppercase",children:"Uppercased text."}),r.jsx("p",{className:"text-capitalize",children:"CapiTaliZed text."})]}),(0,r.jsxs)("p",{children:["Note how ",r.jsx("code",{children:".text-capitalize"})," only changes the first letter of each word, leaving the case of any other letters unaffected."]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"font-size",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Font size"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Quickly change the ",r.jsx("code",{children:"font-size"})," of text. While our heading classes (e.g., ",r.jsx("code",{children:".h1"}),"–",r.jsx("code",{children:".h6"}),") apply"," ",r.jsx("code",{children:"font-size"}),", ",r.jsx("code",{children:"font-weight"}),", and"," ",r.jsx("code",{children:"line-height"}),", these utilities ",r.jsx("em",{children:"only"})," apply"," ",r.jsx("code",{children:"font-size"}),". Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases."]}),(0,r.jsxs)(u.Z,{code:a,children:[r.jsx("p",{className:"fs-1",children:".fs-1 text"}),r.jsx("p",{className:"fs-2",children:".fs-2 text"}),r.jsx("p",{className:"fs-3",children:".fs-3 text"}),r.jsx("p",{className:"fs-4",children:".fs-4 text"}),r.jsx("p",{className:"fs-5",children:".fs-5 text"}),r.jsx("p",{className:"fs-6",children:".fs-6 text"})]}),(0,r.jsxs)("p",{children:["Customize your available ",r.jsx("code",{children:"font-size"}),"s by modifying the ",r.jsx("code",{children:"$font-sizes"})," Sass map."]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"font-weight-and-italics",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Font weight and italics"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Quickly change the ",r.jsx("code",{children:"font-weight"})," or"," ",r.jsx("code",{children:"font-style"})," of text with these utilities."," ",r.jsx("code",{children:"font-style"})," utilities are abbreviated as"," ",r.jsx("code",{children:".fst-*"})," and ",r.jsx("code",{children:"font-weight"})," utilities are abbreviated as ",r.jsx("code",{children:".fw-*"}),"."]}),(0,r.jsxs)(u.Z,{code:l,children:[r.jsx("p",{className:"fw-bold",children:"Bold text."}),r.jsx("p",{className:"fw-bolder",children:"Bolder weight text (relative to the parent element)."}),r.jsx("p",{className:"fw-normal",children:"Normal weight text."}),r.jsx("p",{className:"fw-light",children:"Light weight text."}),r.jsx("p",{className:"fw-lighter",children:"Lighter weight text (relative to the parent element)."}),r.jsx("p",{className:"fst-italic",children:"Italic text."}),r.jsx("p",{className:"fst-normal",children:"Text with normal font style"})]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"line-height",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Line height"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Change the line height with ",r.jsx("code",{children:".lh-*"})," utilities."]}),(0,r.jsxs)(u.Z,{code:o,children:[r.jsx("p",{className:"lh-1",children:"Some placeholder content to show off the line height utilities. Happy birthday. You could've been the greatest. She ride me like a roller coaster. I messed around and got addicted. You just gotta ignite the light and let it shine! I'm intrigued, for a peek, heard it's fascinating. Catch her if you can. I should've told you what you meant to me 'Cause now I pay the price. Do you ever feel, feel so paper thin."}),r.jsx("p",{className:"lh-sm",children:"But you better choose carefully. Yo, shout out to all you kids, buying bottle service, with your rent money. She's sweet as pie but if you break her heart. Just own the night like the 4th of July! In another life I would be your girl. Playing ping pong all night long, everything's all neon and hazy. Shorty so bad, I’m sprung and I don’t care."}),r.jsx("p",{className:"lh-base",children:"I can feel a phoenix inside of me. Maybe a reason why all the doors are closed. We go higher and higher. Passport stamps, she's cosmopolitan. Someone said you had your tattoo removed. All my girls vintage Chanel baby. Someone said you had your tattoo removed."}),r.jsx("p",{className:"lh-lg",children:"But I will get there. This is real so take a chance and don't ever look back, don't ever look back. You could travel the world but nothing comes close to the golden coast. Of anything and everything. Venice beach and Palm Springs, summertime is everything. Do you ever feel already buried deep six feet under? It's time to bring out the big balloons. So cover your eyes, I have a surprise. So I don't have to say you were the one that got away."})]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"monospace",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Monospace"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Change a selection to our monospace font stack with"," ",r.jsx("code",{children:".font-monospace"}),"."]}),r.jsx(u.Z,{code:"<p className='font-monospace'>This is in monospace</p>",children:r.jsx("p",{className:"font-monospace",children:"This is in monospace"})})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"reset-color",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Reset color"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Reset a text or link’s color with ",r.jsx("code",{children:".text-reset"}),", so that it inherits the color from its parent."]}),r.jsx(u.Z,{code:j,children:(0,r.jsxs)("p",{className:"text-muted",children:["Muted text with a"," ",r.jsx("a",{href:"#",className:"text-reset",children:"reset link"}),"."]})})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"text-decoration",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Text decoration"})})}),(0,r.jsxs)(g.eW,{children:[r.jsx("p",{children:"Decorate text in components with text decoration classes."}),(0,r.jsxs)(u.Z,{code:w,children:[r.jsx("p",{className:"text-decoration-underline",children:"This text has a line underneath it."}),r.jsx("p",{className:"text-decoration-line-through",children:"This text has a line going through it."}),r.jsx("a",{href:"#",className:"text-decoration-none",children:"This link has its text decoration removed"})]})]})]})}),r.jsx("div",{className:"col-12",children:(0,r.jsxs)(g.ZP,{id:"sass",className:"scroll-margin",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{tag:"h3",children:"Sass"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)(g.ZP,{id:"variables",className:"scroll-margin rounded-2",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{children:"Variables"})})}),(0,r.jsxs)(g.eW,{children:[r.jsx("p",{children:"Spacing utilities are declared via Sass map and then generated with our utilities API."}),r.jsx(u.Z,{code:b,language:"scss",className:"mb-4"}),(0,r.jsxs)("p",{children:["You can overwrite the"," ",r.jsx("code",{children:"node_modules/bootstrap/scss/_variables.scss"})," ","file in the ",r.jsx("code",{children:"src/styles/settings/_index.scss"})," ","file."]}),r.jsx(u.Z,{code:v,language:"scss"})]})]}),(0,r.jsxs)(g.ZP,{id:"map",className:"scroll-margin rounded-2",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{children:"Map"})})}),(0,r.jsxs)(g.eW,{children:[r.jsx("p",{children:"Font-size utilities are generated from this map, in combination with our utilities API."}),r.jsx(u.Z,{code:y,language:"scss"})]})]}),(0,r.jsxs)(g.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[r.jsx(g.Ol,{children:r.jsx(g.oL,{children:r.jsx(g.ll,{children:"Utilities API"})})}),(0,r.jsxs)(g.eW,{children:[(0,r.jsxs)("p",{children:["Font and text utilities are declared in our utilities API in"," ",r.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",r.jsx(c(),{href:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),r.jsx(u.Z,{code:N,language:"scss"})]})]})]})]})})]})})]})};i()}catch(e){i(e)}})},5244:(e,s)=>{var t;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},7495:e=>{e.exports=require("@reactour/tour")},9003:e=>{e.exports=require("classnames")},1635:e=>{e.exports=require("dayjs")},7424:e=>{e.exports=require("dayjs/plugin/localizedFormat")},4195:e=>{e.exports=require("dayjs/plugin/relativeTime")},2296:e=>{e.exports=require("formik")},3864:e=>{e.exports=require("jsx-to-string")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},8871:e=>{e.exports=require("prismjs")},2326:e=>{e.exports=require("prismjs/components/prism-jsx.min")},5512:e=>{e.exports=require("prismjs/components/prism-scss.min")},1414:e=>{e.exports=require("prismjs/plugins/line-numbers/prism-line-numbers.min")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4648:e=>{e.exports=require("react-input-mask")},1191:e=>{e.exports=require("react-jss")},956:e=>{e.exports=require("react-notifications-component")},3554:e=>{e.exports=require("react-number-format")},2932:e=>{e.exports=require("react-popper")},727:e=>{e.exports=require("react-syntax-highlighter")},7079:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/hljs")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},2250:e=>{e.exports=require("screenfull")},271:e=>{e.exports=require("sweetalert2")},3810:e=>{e.exports=require("sweetalert2-react-content")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},9915:e=>{e.exports=import("js-cookie")},6257:e=>{e.exports=import("pascalcase")},3590:e=>{e.exports=import("react-toastify")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[4567,3914,6859,6814],()=>t(686));module.exports=i})();