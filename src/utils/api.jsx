export async function submitLifestyle(data) {
  const res = await fetch("https://ailifestylearch-backend.onrender.com/api/lifestyle/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("API Error");
  return res.json();
}
