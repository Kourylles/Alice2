import{_ as x}from"./Logo_Alice-71915089.js";import{o,c as s,a as c,b as e,d as t,w as m,e as r,r as _}from"./index-251e8da3.js";const u={class:"hidden flex-col items-center justify-center fixed left-3 top-1/2 w-12 h-40 rounded-xl bg-light-pink text-light-blue md:flex"},p=c('<img src="'+x+'" alt="" class="rounded-full w-8 h-8"><a href="mailto:aliceooudet@gmail.com"><i class="las la-envelope text-3xl"></i></a><a href="https://www.facebook.com/AliceOudetPro/" target="_blank"><i class="lab la-facebook text-3xl"></i></a><a href="https://www.instagram.com/alice_oudet/" target="_blank"><i class="lab la-instagram text-3xl"></i></a>',4),b=[p],f={__name:"ContactMe",setup(l){return(a,d)=>(o(),s("div",u,b))}},h="/assets/COCO9263-45a4009f.jpg",w=c('<div class="my-8 md:my-16"><div class="relative mb-8 mx-auto w-80 md:w-1/3"><img class="h-1/6 w-full rounded-3xl shadow-lg shadow-deep-blue" src="'+h+'" alt=""><div class="container absolute flex flex-col rounded-tl-3xl rounded-tr-3xl bg-deep-brown opacity-70 top-0"><span class="mt-2 mx-auto text-3xl text-light-brown font-extrabold md:text-5xl">Lady Oscar</span><span class="mx-auto text-xl text-light-pink font-extrabold mb-5 md:text-xl md:mb-2">Alice Oudet</span><span class="hidden mt-8 mb-2 mx-auto text-3xl text-light-brown font-black md:flex">COMEDIENNE</span><span class="hidden mt-2 mb-8 mx-auto text-3xl text-light-brown font-black md:flex">VOIX OFF</span></div></div></div>',1),g=[w],v={__name:"ThePresentation",setup(l){return(a,d)=>(o(),s("section",null,g))}},C="/assets/BLANC_DE_BLANC_CHAUD_72DPI-5-a2fc1af7.jpg",j="/assets/BLANC_DE_BLANC_CHAUD_72DPI-18-7b5f1346.jpg",i="/assets/BLANC_DE_BLANC_CHAUD_72DPI-20-2ab4bbcd.jpg",k={class:"flex flex-col mb-16 mx-auto items-center gap-8 md:flex-row md:justify-center"},N={class:"flex flex-row w-80 h-16 rounded-xl bg-light-brown overflow-hidden shadow-lg shadow-deep-blue md:w-64 md:h-20"},A=e("img",{class:"w-12 rounded-e-full object-center md:w-20 md:object-cover",src:C,alt:""},null,-1),D={class:"mx-auto text-xl text-deep-blue uppercase font-extrabold self-center md:text-xl"},$={class:"flex flex-row rounded-xl w-80 h-16 bg-light-brown overflow-hidden shadow-lg shadow-deep-blue md:w-64 md:h-20"},B=e("img",{class:"w-12 rounded-e-full object-center md:w-20 md:object-cover",src:j,alt:""},null,-1),O={class:"mx-auto text-xl text-deep-blue uppercase font-extrabold self-center md:text-xl"},E=c('<div class="flex flex-row rounded-xl w-80 h-16 bg-light-brown overflow-hidden shadow-lg shadow-deep-blue md:w-64 md:h-20"><img class="w-12 rounded-e-full object-center md:w-20 md:object-cover" src="'+i+'" alt=""><div class="mx-auto text-xl text-deep-blue uppercase font-extrabold self-center md:text-xl">solo</div></div><div class="flex flex-row rounded-xl w-80 h-16 bg-light-brown overflow-hidden shadow-lg shadow-deep-blue md:w-64 md:h-20"><img class="w-12 rounded-e-full object-center md:w-20 md:object-cover" src="'+i+'" alt=""><div class="mx-auto text-xl text-deep-blue uppercase font-extrabold self-center md:text-xl">voix off</div></div>',2),L={__name:"CardVue",setup(l){return(a,d)=>{const n=_("router-link");return o(),s("div",k,[e("div",N,[A,e("div",D,[t(n,{to:{name:"tout-public"}},{default:m(()=>[r("tout public")]),_:1})])]),e("div",$,[B,e("div",O,[t(n,{to:{name:"tout-public"}}),r(" jeune public ")])]),E])}}},I={__name:"Home",setup(l){return(a,d)=>(o(),s("div",null,[t(f),t(v),t(L)]))}};export{I as default};
