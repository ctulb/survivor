import { Hono } from "https://deno.land/x/hono@v4.3.4/mod.ts";
import van from "https://deno.land/x/minivan@0.5.6/src/van-plate.js";

const { form, input, button, head, link, body, title, main } = van.tags;

export const login = new Hono();

login.get("/", (c) =>
  c.html(
    van.html(
      head([
        title("Survivor"),
        link({
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.violet.min.css",
        }),
      ]),
      body(
        main(
          {
            class: "container",
          },
          form(
            {
              action: "/login",
              method: "POST",
            },
            [
              input(
                {
                  type: "email",
                  required: true,
                  placeholder: "email address",
                },
              ),
              button({
                type: "submit",
              }, "Submit"),
            ],
          ),
        ),
      ),
    ),
  ));

login.post("/", (c) => {
  return c.html("ok");
});
