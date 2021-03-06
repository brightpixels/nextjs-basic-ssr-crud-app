import db from "../../../../libs/firebase";
export default async function handler(req, res) {
  const data = req.body;
  const resp = await db.collection("planets").doc(data.id).set({
    name: data.name,
    population: data.population,
  });
  res.redirect(`/planets/${data.id}`);
}
