import {google} from 'googleapis';
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

export const uploadFile = data => {
  const {fileName, mimeType, body} = data;
  try {
    const res = await drive.files.create({
      requestBody: {
        name: fileName,
        mimeType,
      },
      media: {
        mimeType,
        body: body,
      },
    });
  } catch (err) {}
};
