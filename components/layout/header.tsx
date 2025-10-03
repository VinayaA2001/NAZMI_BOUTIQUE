export default function Header(){
return (
<header className="border-b">
<div className="container h-14 flex items-center justify-between">
<a href="/" className="font-semibold tracking-tight">Nazmi Boutique</a>
<nav className="hidden md:flex gap-6 text-sm">
<a href="/traditional">Traditional</a>
<a href="/western">Western</a>
<a href="/occasions/office">Occasions</a>
<a href="/sale/under-999" className="text-red-600">Sale</a>
</nav>
<div className="flex items-center gap-4 text-sm">
<a href="/search">Search</a>
<a href="/account">Account</a>
<a href="/cart">Cart</a>
</div>
</div>
</header>
);
}