"use client";
import Image from "next/image";
export default function ProductCard({ product }: { product: any }){
const phone=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||"";
const msg=encodeURIComponent(`Hi Nazmi! I'm interested in "${product.title}" (₹${product.price}).`);
const wa=phone?`https://wa.me/${phone}?text=${msg}`:"#";
return (
<article className="card p-3 transition hover:shadow-lg">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
<Image src={product.image} alt={product.title} fill className="object-cover" />
</div>
<div className="mt-3">
<h3 className="text-sm font-medium">{product.title}</h3>
<p className="text-sm muted">₹{product.price}</p>
<div className="mt-2 flex gap-2">
<a href={`/product/${product.slug}`} className="btn btn-ghost px-3 py-1">View</a>
<a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-3 py-1">Ask on WhatsApp</a>
</div>
</div>
</article>
);
}