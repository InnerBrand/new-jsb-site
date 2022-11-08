import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GATSBY_G_CLIENT_ID,
    process.env.G_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.G_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token.');
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_EMAIL,
      accessToken,
      clientId: process.env.GATSBY_G_CLIENT_ID,
      clientSecret: process.env.G_CLIENT_SECRET,
      refreshToken: process.env.G_REFRESH_TOKEN,
    },
  });

  return transporter;
};

export const sendEmail = async data => {
  let transporter = await createTransporter();

  let mailOptions = {
    from: `${process.env.GMAIL_EMAIL} <${process.env.GMAIL_EMAIL}>`,
    to: data.email,
    subject: data.subject,
    text: data.body,
  };

  try {
    let response = await transporter.sendMail(mailOptions);
    if (response.rejected.length) {
      return false;
    } else {
      return response;
    }
  } catch (e) {
    return false;
  }
};
