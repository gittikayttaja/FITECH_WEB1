const kv = await Deno.openKv();

const setVisits = async (s) => {
  const visits = await kv.get(["visits"]);
  const visitAmount = visits.value ?? 0;
  await kv.set(["visits"], visitAmount + 1);
};

const getVisits = async () => { 
  const amount = await kv.get(["visits"]); 
  return amount.value ?? 0;
};

export { setVisits, getVisits };
