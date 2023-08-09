export async function handler(request) {
  console.log('API BODY@@@@', request);
  // console.log('API BODY@@@@', await (request.clone()).formData());
  // const formData = new FormData(request.body);
  const formData = JSON.parse(request.body);
  const name = formData.name ? formData.name : 'Greenwood';
  const body = `Hello ${name}! 👋`;

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}