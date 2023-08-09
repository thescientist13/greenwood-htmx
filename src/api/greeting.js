export async function handler(request) {
  console.log('type of', typeof request.body);
  console.log('BODY', request.body);
  // const formData = new FormData(request.body);
  const formData = new Set(request.body);
  // console.log({ formData });
  const name = formData.has('name') ? formData.get('name') : 'Greenwood';
  const body = `Hello ${name}! 👋`;

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}