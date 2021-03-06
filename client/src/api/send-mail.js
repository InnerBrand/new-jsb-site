import {sendEmail} from '../libs/mail';
// import {uploadFile} from '../libs/uploadFile';

export default function sendMail(req, res) {
  if (req.method === 'POST') {
    // console.log(JSON.stringify(req.body, null, 2));

    // Uploading file to google drive
    //   -> gives us a link
    const {contactMethod, email, phone, firstName, lastName, shareLink} =
      req.body;
    console.log(req.files);

    const nameDisplay = `Name: ${firstName} ${lastName}`;
    const contactDisplay = () => {
      if (contactMethod === 'Phone') {
        return `Phone Number: ${phone}`;
      } else if (contactMethod === 'Email') {
        return `Email Address: ${email}`;
      } else {
        return `Email Address: ${email}\nPhone Number: ${phone}`;
      }
    };
    const resumeLinkDisplay = `Link to resume: ${shareLink}`;

    const body = `${nameDisplay}\n\n${contactDisplay()}\n\n${resumeLinkDisplay}`;

    console.log(body);

    sendEmail({
      email: 'yourexpert@jsbpartners.com',
      subject: `New Resume Submission from ${firstName} ${lastName}`,
      body,
    });

    res.send('Success');
  }
}
