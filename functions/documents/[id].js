export async function onRequest(context) {
  const { id } = context.params;

  const data = await context.env.FILES_KV.get(id);

  return new Response(
    JSON.stringify({
      id: context.params.id,
      data,
    })
  );
}
