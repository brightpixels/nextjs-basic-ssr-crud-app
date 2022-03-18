import db from "../../../../libs/firebase";
export default async function handler(req, res) {
  const { id } = req.query;
  const planet = await (await db.collection("planets").doc(id).get()).data();
  res.status(200).json({ ...planet, id });
}
