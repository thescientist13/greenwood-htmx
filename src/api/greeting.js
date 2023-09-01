export async function handler(request) {
  const formData = await request.formData();
  const name = formData.has('name') ? formData.get('name') : 'Greenwood';
  const body = `Hello ${name}! 👋`;

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}