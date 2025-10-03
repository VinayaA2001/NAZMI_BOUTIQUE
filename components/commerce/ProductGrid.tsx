import ProductCard from "./ProductCard";
const mock=[
{ slug:"floral-kurta", title:"Floral Kurta Set", price:1999, image:"/images/p1.jpg" },
{ slug:"anarkali-red", title:"Anarkali Dress", price:2999, image:"/images/p2.jpg" },
{ slug:"linen-coord", title:"Linen Co-ord", price:2499, image:"/images/p3.jpg" },
{ slug:"pleated-dress", title:"Pleated Dress", price:2799, image:"/images/p4.jpg" }
];
export default function ProductGrid(){
return (
<div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{mock.map(p=> <ProductCard key={p.slug} product={p}/>) }
</div>
);
}