export function onRequest(context) {
  return new Response(
    JSON.stringify({
      id: context.params.id,
      data: "Test",
    })
  );
}
