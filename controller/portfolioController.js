const nodemailer = require("nodemailer");

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for security
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Send email
    transporter.sendMail(
      {
        to: "typeyouremailadresshere@gmail.com",
        from: "typeyouremailadresshere@gmail.com",
        subject: "Regarding Mern Portfolio App",
        html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
          </ul>
        `,
      },
      (err, info) => {
        if (err) {
          console.log(err);
          return res.status(500).send({
            success: false,
            message: "Failed to send email",
            error: err.message,
          });
        } else {
          return res.status(200).send({
            success: true,
            message: "Email sent successfully",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
