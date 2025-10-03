"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
export type Slide={src:string;alt:string;href?:string;caption?:string};
export default function SlowMoSlider({slides,intervalMs=9000,fadeMs=2200}:{slides:Slide[];intervalMs?:number;fadeMs?:number}){
const [i,setI]=useState(0); const t=useRef<NodeJS.Timeout|null>(null); const ref=useRef<HTMLDivElement|null>(null);
const list=useMemo(()=>slides.filter(Boolean),[slides]); const n=list.length; if(!n) return null;
useEffect(()=>{ if(n<2) return; const rm=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches; if(rm) return; const start=()=>{stop(); t.current=setInterval(()=>setI(x=>(x+1)%n),intervalMs)}; const stop=()=>{if(t.current) clearInterval(t.current); t.current=null}; start(); const el=ref.current; el?.addEventListener("mouseenter",stop); el?.addEventListener("mouseleave",start); return()=>{stop(); el?.removeEventListener("mouseenter",stop); el?.removeEventListener("mouseleave",start)} },[n,intervalMs]);
useEffect(()=>{ const el=ref.current; if(!el) return; let sx=0; const ts=(e:TouchEvent)=>sx=e.touches[0].clientX; const te=(e:TouchEvent)=>{const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40) setI(x=>dx<0?(x+1)%n:(x-1+n)%n)}; el.addEventListener("touchstart",ts,{passive:true}); el.addEventListener("touchend",te,{passive:true}); return()=>{el.removeEventListener("touchstart",ts); el.removeEventListener("touchend",te)} },[n]);
return (
<section ref={ref} className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Showcase">
<div className="relative h-[56vw] max-h-[560px] w-full md:h-[480px] lg:h-[560px]">
{list.map((s,idx)=>{
const on=idx===i; return (
<a key={s.src} href={s.href||"#"} className="absolute inset-0" aria-hidden={!on} tabIndex={on?0:-1}>
<div className="absolute inset-0 transition-opacity ease-linear" style={{opacity:on?1:0,transitionDuration:`${fadeMs}ms`}}>
<Image src={s.src} alt={s.alt} fill priority={idx===0} className="object-cover" sizes="100vw"/>
{s.caption && (<div className="absolute bottom-4 left-4 md:left-6 rounded-full bg-black/40 text-white px-4 py-2 text-xs md:text-sm">{s.caption}</div>)}
</div>
</a>
)})}
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
{list.map((_,d)=>(<button key={d} onClick={()=>setI(d)} aria-label={`Go to slide ${d+1}`} className={`pointer-events-auto h-2 w-2 rounded-full border border-white/70 ${d===i?"bg-white":"bg-white/30"}`}/>))}
</div>
<div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
<button aria-label="Prev" className="rounded-full bg-black/30 text-white px-3 py-2 backdrop-blur" onClick={()=>setI(x=>(x-1+n)%n)}>‹</button>
<button aria-label="Next" className="rounded-full bg-black/30 text-white px-3 py-2 backdrop-blur" onClick={()=>setI(x=>(x+1)%n)}>›</button>
</div>
</section>
);
}