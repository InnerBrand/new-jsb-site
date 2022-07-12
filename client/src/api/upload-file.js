import {google} from 'googleapis';
import stream from 'stream';
import path from 'path';

const serviceAcctAuth = new google.auth.GoogleAuth({
  keyFile: path.resolve(__dirname, '../../jsb-nodemailer-ec5c847679e8.json'),
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({
  version: 'v3',
  auth: serviceAcctAuth,
});

const handleFileUpload = async fileObj => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObj.buffer);
  const {data} = await drive.files.create({
    requestBody: {
      name: fileObj.originalname,
      mimeType: fileObj.mimeType,
      parents: ['1bmrEZEyREw6ZObnk9khvURRmKf9CT7n1'],
    },
    media: {
      mimeType: fileObj.mimeType,
      body: bufferStream,
    },
  });
  return data;
};

export default async function uploadFile(req, res) {
  if (req.method === 'POST') {
    // Uploading file to google drive
    const file = req.files[0];

    try {
      const uploadRes = await handleFileUpload(file);
      res.json(uploadRes);
    } catch (err) {
      console.log(err);
    }
  }
}
