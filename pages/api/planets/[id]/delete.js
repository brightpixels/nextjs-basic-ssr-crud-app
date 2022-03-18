import db from '../../../../libs/firebase'
export default async function handler(req, res) {
  const resp = await db.collection('planets').doc(req.query.id).delete()
  res.redirect(`/planets`)
}
