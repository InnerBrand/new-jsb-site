export default function upload(req, res) {
  if (req.method === 'POST') {
    res.json({status: 'ok'});
  }
}
