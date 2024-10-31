import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visits from "./visits.js"

const app = new Hono();


app.get("/", async (c) => {
		await visits.setVisits();
		return c.text("Hello world!")
	});

app.get("/visits", async (c) => {
		const visitsCount = await visits.getVisits();
	 return c.text(`Visit count: ${visitsCount}`)
	 });

export default app;
