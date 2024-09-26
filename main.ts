Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;
  switch (pathname) {
    case "/batches.js": {
      return new Response(Deno.readFileSync("batches.js"), { headers: { "Content-Type": "text/javascript" } });
    }
    case "/index.js": {
      return new Response(Deno.readFileSync("index.js"), { headers: { "Content-Type": "text/javascript" } });
    }
    case "/countdown.html": {
      return new Response(Deno.readFileSync("countdown.html"), { headers: { "Content-Type": "text/html" } });
    }
    case "/countdown.js": {
      return new Response(Deno.readFileSync("countdown.js"), { headers: { "Content-Type": "text/javascript" } });
    }
    case "/": {
      return new Response(Deno.readFileSync("index.html"), { headers: { "Content-Type": "text/html" } });
    }
    default: {
      return new Response(null, {
        status: 302,
        headers: new Headers({
          location: "/",
        }),
      });
    }
  }
});
