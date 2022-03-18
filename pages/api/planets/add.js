import db from "../../../libs/firebase";
export default async function handler(req, res) {
  const data = req.body;
  const newPlanet = await db.collection("planets").add({
    name: data.name,
    population: data.population,
  });
  console.log("newPlanet");
  console.log(newPlanet.id);
  res.redirect(`/planets/${newPlanet.id}`);
}
