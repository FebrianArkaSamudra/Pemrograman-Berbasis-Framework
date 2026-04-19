import { useRouter } from 'next/router';

export default function ShopPage() {
  const { query } = useRouter();

  const slug = query.slug;
  return (
    <div>
      <h1>Shop Page</h1>
      <p>
        Category: {slug ? (Array.isArray(slug) ? slug[0] : slug) : "All Categories"}
      </p>
    </div>
  );
}