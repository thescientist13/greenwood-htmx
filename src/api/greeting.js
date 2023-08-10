export async function handler(request) {
  console.log('API BODY@@@@', request.body);
  // TODO const formData = await request.formData()
  const formData = await request.json();
  console.log({ formData });
  const name = formData.name ? formData.name : 'Greenwood';
  const body = `Hello ${name}! 👋`;

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}