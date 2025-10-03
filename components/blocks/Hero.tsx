export default function Hero(){
return (
<section className="container py-12 md:py-16">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="title-1">Nazmi Boutique</h1>
<p className="mt-3 muted max-w-prose">Minimal, elegant silhouettes across Traditional & Western wear. Kerala roots, modern fits.</p>
<div className="mt-6 flex gap-3">
<a href="/traditional" className="btn btn-ghost">Shop Traditional</a>
<a href="/western" className="btn btn-primary">Shop Western</a>
</div>
</div>
<div className="aspect-[4/3] w-full rounded-2xl bg-neutral-100" aria-hidden />
</div>
</section>
);
}