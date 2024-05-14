import { app } from "../main.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("healthcheck endpoint", async (t) => {
  await t.step("responds with status OK to GET request", async () => {
    const res = await app.request("/healthcheck");
    assertEquals(res.status, 200);
  });
  await t.step("responds with body ok to GET request", async () => {
    const res = await app.request("/healthcheck");
    assertEquals(await res.text(), "ok");
  });
});
