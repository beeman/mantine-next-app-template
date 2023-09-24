export const runtime = 'edge';

export default async function Page({ searchParams }: { searchParams: any }) {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-lg font-bold">
        Updating <code>searchParams</code>
      </h1>
      <p>
        <code>searchParams</code> is <code>{JSON.stringify(searchParams)}</code>
      </p>
    </div>
  );
}
