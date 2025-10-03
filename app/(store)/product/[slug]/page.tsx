// app/(store)/product/[slug]/page.tsx
type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  return (
    <section className="container py-10">
      <h1 className="text-xl md:text-2xl font-semibold">
        Product: {decodeURIComponent(params.slug)}
      </h1>
      <p className="mt-2 text-neutral-600">PDP placeholder.</p>
    </section>
  );
}
