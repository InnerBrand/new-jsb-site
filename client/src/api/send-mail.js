import {sendEmail} from '../libs/mail';
// import {uploadFile} from '../libs/uploadFile';

export default function sendMail(req, res) {
  if (req.method === 'POST') {
    // console.log(JSON.stringify(req.body, null, 2));

    // Uploading file to google drive
    //   -> gives us a link
    const {contactMethod, email, phone, file, firstName, lastName} = req.body;
    console.log(req.files);

    // console.log(req.body);
    sendEmail({
      email: 'yourexpert@jsbpartners.com',
      subject: 'Happy Monday',
      body: `Pellentesque ut neque. Maecenas vestibulum mollis diam. Vestibulum fringilla pede sit amet augue. Etiam vitae tortor. Suspendisse potenti.\n
      In turpis. Praesent ac sem eget est egestas volutpat. Quisque malesuada placerat nisl. Curabitur turpis. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.\n
      Donec vitae sapien ut libero venenatis faucibus.. Nunc interdum lacus sit amet orci. Ut leo. Praesent venenatis metus at tortor pulvinar varius.\n
      Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Nam commodo suscipit quam. Nam commodo suscipit quam.`,
    });

    res.send('Success');
  }
}
