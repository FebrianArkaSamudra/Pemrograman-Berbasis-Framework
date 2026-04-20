import { useRouter } from 'next/router';

export default function CategoryPage() {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Category Catch-all Route</h1>
      <ul>
        {slug && Array.isArray(slug)
          ? slug.map((param, idx) => <li key={idx}>{param}</li>)
          : <li>No parameters</li>}
      </ul>
    </div>
  );
}
