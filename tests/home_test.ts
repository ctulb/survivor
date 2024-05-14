import { app } from "../main.ts";
import { assertEquals, assertNotEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("home endpoint", async (t) => {
    await t.step("exists", async () => {
        const res = await app.request("/")

        assertNotEquals(res.status, 404)
    })
    await t.step("redirects to /login when no session cookie is received", async () => {
        const res = await app.request("/")

        assertEquals(res.status, 307)

        const redirect = res.headers.get("Location")

        assertEquals(redirect, "/login")
    })
})