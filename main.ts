import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";

export const app = new Hono();

app.get("/healthcheck", (c) => {
  return c.html("ok");
});

Deno.serve(app.fetch);
