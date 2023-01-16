export async function onRequestPost(context) {
  const body = await context.request.text();

  // generate new uuid
  const uuid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  console.log(body);

  await context.env.FILES_KV.put(uuid, body);

  return new Response(
    JSON.stringify({
      success: true,
      data: body,
      key: uuid,
    })
  );
}
