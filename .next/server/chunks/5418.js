"use strict";exports.id=5418,exports.ids=[5418],exports.modules={80130:(e,o,a)=>{a.d(o,{default:()=>c});var t=a(10326),r=a(10033),s=a(47548),i=a(75686),n=a(24061),l=a(38443),m=a(17577);let c=()=>{let{language:e}=(0,r.useLanguage)(),o="es"===e,a=[{name:"Ricardo",location:"Madrid",icaoCode:"LEMD",image:"/images/alumni/Ricardo_Madrid.jpg"},{name:"Jessica",location:"Barcelona",icaoCode:"LECB",image:"/images/alumni/Jessica_Barcelona.jpg"},{name:"Sergio",location:"Barcelona",icaoCode:"LEBL",image:"/images/alumni/Sergio_Barcelona.jpg"},{name:"Victor",location:"Lanzarote",icaoCode:"GCRR",image:"/images/alumni/Victor_Lanzarote.jpg"},{name:"Mar\xeda",location:"Canarias",icaoCode:"GCCC",image:"/images/alumni/Maria_Canarias.jpg",imagePosition:"object-left"},{name:"Juli\xe1n",location:"Canarias",icaoCode:"GCCC",image:"/images/alumni/Julian_Canarias.jpg",imagePosition:"object-left"},{name:"Regina",location:"Palma",icaoCode:"LECP",image:"/images/alumni/Regina_palma.jpg"},{name:"Olivia",location:"Lieja",icaoCode:"EBLG",image:"/images/alumni/Olivia_Dublin.jpg"},{name:"Dora",location:"La Palma",icaoCode:"GCLA",image:"/images/alumni/Dora_Canarias.jpg",imagePosition:"object-left"}],[c,d]=(0,m.useState)([]),g=e=>{let o=[...e];for(let e=o.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o};return(0,m.useEffect)(()=>{d(g(a))},[]),(0,t.jsxs)(i.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"py-16",children:[(0,t.jsxs)("div",{className:"text-center mb-12",children:[t.jsx("div",{className:"flex justify-center mb-2",children:(0,t.jsxs)(l.C,{className:"bg-primary/10 text-primary hover:bg-primary/20 border-none",children:[t.jsx(n.Z,{className:"mr-1 h-3.5 w-3.5"}),o?"Nuestros Alumnos":"Our Alumni"]})}),t.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4",children:o?"D\xf3nde trabajan nuestros alumnos":"Where our students work"}),t.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:o?"Descubre d\xf3nde han desarrollado su carrera profesional los alumnos que han pasado por nuestros cursos.":"Discover where students who have gone through our courses have developed their professional careers."})]}),(0,t.jsxs)(s.Carousel,{opts:{align:"start",loop:!0},className:"w-full max-w-6xl mx-auto",children:[t.jsx(s.CarouselContent,{className:"-ml-2 md:-ml-4",children:c.map((e,o)=>t.jsx(s.CarouselItem,{className:"pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4",children:t.jsx("div",{className:"rounded-lg overflow-hidden shadow-md bg-white",children:(0,t.jsxs)("div",{className:"aspect-[3/4] relative",children:[t.jsx("img",{src:e.image,alt:`${e.name} - ${e.location}`,className:`object-cover w-full h-full ${e.imagePosition||"object-center"}`,loading:"lazy"}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4",children:[t.jsx("h3",{className:"text-white text-lg font-semibold",children:e.name}),(0,t.jsxs)("p",{className:"text-white/90 text-sm",children:[e.location," - ",e.icaoCode]})]})]})})},o))}),(0,t.jsxs)("div",{className:"flex justify-center gap-2 mt-6",children:[t.jsx(s.CarouselPrevious,{className:"relative -left-4 border-gray-200 hover:bg-gray-100"}),t.jsx(s.CarouselNext,{className:"relative -right-4 border-gray-200 hover:bg-gray-100"})]})]}),t.jsx("div",{className:"text-center mt-8 text-gray-500 text-sm",children:t.jsx("p",{children:o?"Estos son solo algunos ejemplos de los destinos profesionales de nuestros alumnos.":"These are just some examples of the professional destinations of our students."})})]})}},50218:(e,o,a)=>{a.r(o),a.d(o,{default:()=>s,useTallyForm:()=>r});var t=a(17577);let r=e=>{(0,t.useEffect)(()=>{if(void 0===e||e){(()=>{let e=new URLSearchParams(window.location.search).get("gclid");e&&(localStorage.setItem("gclid",e),console.log("GCLID captured and stored:",e))})(),(()=>{if(!sessionStorage.getItem("origin_url")){let e=document.referrer;e&&e!==window.location.href&&(sessionStorage.setItem("origin_url",e),console.log("Origin URL captured and stored:",e))}})();let e=window.location.href,o=localStorage.getItem("gclid"),a=sessionStorage.getItem("origin_url");window.TallyConfig={hideTitle:!0,transparentBackground:!0,customCSS:`
          /* General form styling */
          .tally-form {
            font-family: Inter, system-ui, sans-serif !important;
          }
          
          /* Adjust page margins */
          .tally-page { 
            margin-top: 10px !important; 
            margin-bottom: 10px !important;
          }
          
          /* Container adjustments */
          .cxEjdi {
            margin-top: 10px !important;
            margin-bottom: 10px !important;
          }
          
          /* Input field styling */
          .tally-input {
            border-radius: 0.375rem !important;
            border: 1px solid #E2E8F0 !important;
            transition: border-color 0.2s ease-in-out !important;
          }
          
          .tally-input:focus, .tally-input:hover {
            border-color: #ba263a !important;
            box-shadow: 0 0 0 1px rgba(186, 38, 58, 0.2) !important;
          }
          
          /* Labels styling */
          .tally-label {
            font-weight: 500 !important;
            color: #222222 !important;
          }
          
          /* Radio and checkbox styling */
          .tally-radio-input, .tally-checkbox-input {
            accent-color: #ba263a !important;
          }
          
          /* Button styling to match your primary color */
          .tally-submit-button, .tally-next-button {
            background-color: #ba263a !important;
            border-radius: 0.375rem !important;
            font-weight: 500 !important;
            transition: background-color 0.2s ease-in-out !important;
          }
          
          .tally-submit-button:hover, .tally-next-button:hover {
            background-color: #9a1b2e !important;
          }
          
          /* Error message styling */
          .tally-error-message {
            color: #ba263a !important;
          }
          
          /* Drop shadow for form elements */
          .tally-form-wrapper {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          }
        `,onFormSubmit:()=>{console.log("Tally form submitted, redirecting to success page"),window.dataLayer&&(window.dataLayer.push({event:"formSubmission",formName:"tallyForm",formLocation:e}),console.log("GTM event pushed: formSubmission")),window.gtag&&(window.gtag("event","form_submit",{event_category:"form",event_label:"tally_form",value:1}),console.log("GA4 event sent: form_submit")),window.gtag&&(window.gtag("event","conversion",{send_to:"AW-971027451/4HPBCP2UnnUQ--eCzwM"}),console.log("Google Ads conversion event sent")),setTimeout(()=>{window.location.href="/exito"},1e3)}};let t=()=>{document.querySelectorAll("iframe[data-tally-src]").forEach(t=>{let r=t.getAttribute("data-tally-src");if(r){let s=r.split("?")[0],i=new URLSearchParams(r.includes("?")?r.split("?")[1]:"");i.set("page_url",e),console.log("Adding page_url to form:",e),o&&(i.set("gclid",o),console.log("Adding GCLID to form:",o)),a&&(i.set("origin_url",a),console.log("Adding origin_url to form:",a));let n=`${s}?${i.toString()}`;console.log("Updating Tally form URL with all parameters:",n),t.setAttribute("data-tally-src",n),t.src&&t.src.includes("tally.so")&&(t.src=n)}});let t=o=>{if("https://tally.so"===o.origin)try{let a="string"==typeof o.data?JSON.parse(o.data):o.data;a&&"tally-form-submission"===a.type&&(console.log("Tally form submitted via postMessage"),window.dataLayer&&(window.dataLayer.push({event:"formSubmission",formName:"tallyForm",formLocation:e}),console.log("GTM event pushed: formSubmission")),window.gtag&&(window.gtag("event","conversion",{send_to:"AW-971027451/4HPBCP2UnnUQ--eCzwM"}),console.log("Google Ads conversion event sent via postMessage")),setTimeout(()=>{window.location.href="/exito"},1e3))}catch(e){console.error("Error processing Tally message:",e)}};return window.addEventListener("message",t),window.Tally&&window.Tally.loadEmbeds(),()=>{window.removeEventListener("message",t)}},r=document.createElement("script");return r.src="https://tally.so/widgets/embed.js",r.async=!0,r.setAttribute("SameSite","None"),r.setAttribute("Secure","true"),document.body.appendChild(r),r.onload=()=>{setTimeout(()=>{t(),window.Tally&&window.Tally.loadEmbeds()},500)},window.Tally&&setTimeout(t,500),()=>{document.body.contains(r)&&document.body.removeChild(r)}}},[e])},s=r},41041:(e,o,a)=>{a.d(o,{Z:()=>t});let t=(0,a(68570).createProxy)(String.raw`C:\Users\pfara\OneDrive - Nelso Elite ATC Training\Documentos\web\nelsonext\src\components\courses\AlumniCarousel.tsx#default`)},21365:(e,o,a)=>{a.d(o,{n:()=>r});var t=a(68570);let r=(0,t.createProxy)(String.raw`C:\Users\pfara\OneDrive - Nelso Elite ATC Training\Documentos\web\nelsonext\src\hooks\useTallyForm.ts#useTallyForm`);(0,t.createProxy)(String.raw`C:\Users\pfara\OneDrive - Nelso Elite ATC Training\Documentos\web\nelsonext\src\hooks\useTallyForm.ts#default`)}};