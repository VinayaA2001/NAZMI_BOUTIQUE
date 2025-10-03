export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-semibold">Nazmi Boutique</div>
          <p className="mt-2 muted max-w-xs">
            Minimal fashion from Kerala — Traditional & Western.
          </p>
        </div>

        <div>
          <div className="font-medium">Shop</div>
          <ul className="mt-2 space-y-2">
            <li><a href="/traditional">Traditional</a></li>
            <li><a href="/western">Western</a></li>
            <li><a href="/sale/under-999">Sale</a></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Help</div>
          <ul className="mt-2 space-y-2">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/policies/returns">Returns</a></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Follow</div>
          <ul className="mt-2 space-y-2">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs muted">
        © {new Date().getFullYear()} Nazmi Boutique
      </div>
    </footer>
  );
}
