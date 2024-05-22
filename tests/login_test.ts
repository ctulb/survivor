import { app } from "../main.ts";
import {
  assertEquals,
  assertNotEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("login endpoint GET", async (t) => {
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
  await t.step(
    "contains an input to collect an email address for login",
    async () => {
      const res = await app.request("/login");
      const content = await res.text();

      assertStringIncludes(content, 'input type="email"');
    },
  );
  await t.step(
    "contains a submit button to trigger login attempt",
    async () => {
      const res = await app.request("/login");
      const content = await res.text();

      assertStringIncludes(content, 'button type="submit"');
    },
  );
});
