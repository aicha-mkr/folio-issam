export async function GET(request) {
    return new Response(JSON.stringify({ message: "Hello, world!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }