import db from "../../../libs/firebase";
export default async function handler(req, res) {
  const planets = (await db.collection("planets").get()).docs.map((i) => {
    return { ...i.data(), id: i.id };
  });
  res.status(200).json(planets);
}
