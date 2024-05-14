import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";
import { login } from "./pages/login.ts";

export const app = new Hono();

app.get("/", (c) => {
  return c.redirect("/login", 307);
});

app.get("/healthcheck", (c) => {
  return c.html("ok");
});

app.route("/login", login);

Deno.serve(app.fetch);
