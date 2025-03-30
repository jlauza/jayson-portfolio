import nodemailer from "nodemailer";

const email_from = process.env.EMAIL_FROM;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const environment = process.env.NODE_ENV;

export async function POST(req, res) {
  try {
    const bodyText = await req.text(); // Read the body as text
    if (!bodyText) throw new Error("Request body is empty");

    // Parse the request body
    const body = JSON.parse(bodyText); // Parse the text into JSON

    const { to, subject, message } = body;

    if (!to || !subject || !message) {
      return Response.json(
        { message: "Missing required fields." },
        {
          status: 400,
        }
      );
    }

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(
      environment === "development"
        ? {
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
              user: user,
              pass: pass,
            },
          }
        : {
            host: "smtp.sendgrid.net",
            port: 587,
            auth: { user: "apikey", pass: process.env.SENDGRID_API_KEY },
          }
    );

    // Setup email data
    let mailOptions = {
      from: `"Pro Dance Suite" <${email_from}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: `<p>${message}</p>`, // html body
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Verify email sent successfully",
        data: info,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to send verification email." }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
