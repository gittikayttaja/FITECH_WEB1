import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedback from "./feedbacks.js"

const app = new Hono();


app.get("/feedbacks/:value", async (c) => {
    const value = Number(c.req.param("value"));
    const count = await feedback.getFeedbackCount(value);
    return c.text(`Feedback ${value}: ${count}`);
  });

app.post("/feedbacks/:value", async (c) => {
  const value = Number(c.req.param("value"));
  await feedback.setFeedback(value);
  return c.text(`Feedback ${value} added.`)
   });

export default app;