import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailController = async (req, res) => {
  try {
    const auth = process.env.auth || false;
    const pass = process.env.pass || false;
    if (!auth || !pass) {
      return res
        .status(500)
        .json({ error: "Please set auth and pass in .env file" });
    }

    const { name, fromMail, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: auth,
        pass: pass,
      },
    });

    const html = `
    <p>This message is sent from ${name} from ${fromMail}</p>
    <p class="color: #fff">${subject}</p>
    `;

    await transporter.sendMail({
      from: `${fromMail}`,
      to: auth,
      subject: "From " + name,
      html: html,
    });

    return res.status(200).json("Sent");
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Internal Server Error");
  }
};

export default mailController;
