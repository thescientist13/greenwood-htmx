import { getMessage } from '../services/message.js';

export async function handler(request) {
  console.log({ request });
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const name = params.has('name') ? params.get('name') : 'Greenwood';
  const body = getMessage(name);
  const headers = new Headers({
    'Content-Type': 'text/html'
  });

  return new Response(body, { headers });
}