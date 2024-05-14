import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";
import van from "https://deno.land/x/minivan@0.5.6/src/van-plate.js";

const { form } = van.tags;

export const login = new Hono();

login.get("/", (c) =>
  c.html(
    van.html(
      form({
        action: "/login",
        method: "POST",
      }, null),
    ),
  ));
