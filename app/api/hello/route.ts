import { cookies } from 'next/headers';

export const runtime = 'edge';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  // Get all the headers from the request
  const headers = Object.fromEntries(request.headers.entries());

  return new Response(
    JSON.stringify({
      headers,
    }),
    {
      status: 200,
      headers: {
        'Set-Cookie': `token=${token}`,
      },
    }
  );
}
