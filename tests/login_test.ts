import { app } from "../main.ts";
import {
  assertEquals,
  assertNotEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("login endpoint", async (t) => {
  await t.step("exists", async () => {
    const res = await app.request("/login");

    assertEquals(res.status, 200);
  });
  await t.step("responds in HTML format", async () => {
    const res = await app.request("/login");
    const contentType = await res.headers.get("Content-Type");

    assertNotEquals(contentType, null);
    assertStringIncludes(contentType!, "text/html");
  });
  await t.step("contains an HTML form to collect login details", async () => {
    const res = await app.request("/login");
    const content = await res.text();

    assertStringIncludes(content, "form");
  });
});
