const kv = await Deno.openKv();

const setFeedback = async (value) => {
  const feedback = await kv.get(["feedback", Number(value)]);
  const currentAmount = feedback.value ?? 0;
  await kv.set(["feedback", Number(value)], currentAmount + 1);
};

const getFeedbackCount = async (value) => { 
  const feedback = await kv.get(["feedback", Number(value)]); 
  return feedback.value ?? 0;
};

export { setFeedback, getFeedbackCount };
