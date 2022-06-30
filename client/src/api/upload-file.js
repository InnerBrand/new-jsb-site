import {google} from 'googleapis';
import {Readable} from 'stream';
// import fs from 'fs';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.G_CLIENT_ID,
  process.env.G_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.G_REFRESH_TOKEN,
});

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

export default async function uploadFile(req, res) {
  if (req.method === 'POST') {
    // Uploading file to google drive
    console.log(req.files);

    const {originalname, mimetype, buffer} = req.files[0];
    try {
      // const buff = new Uint8Array(buffer);

      const readable = new Readable();
      readable.push(buffer);
      readable.push(null);
      console.log(typeof readable);

      // const res = await drive.files.create({
      //   requestBody: {
      //     name: originalname,
      //     mimeType: mimetype,
      //   },
      //   media: {
      //     mimeType: mimetype,
      //     body: readable,
      //   },
      // });

      return res;
    } catch (err) {
      console.log(err);
    }

    res.json(res);
  }
}
