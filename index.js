const express=require("express")
const nodemailer=require("nodemailer")
const app=express()

const port=process.env.port||5000
app.listen(port,()=>{
console.log("serber start");
}) 
app.get("/",(req,res)=>{
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'smtp.gmail.com',
        port:587,
        auth: {
          user: "contactsinghaniya@gmail.com",
          pass: "Bikash@7667",
        },
      }));
  
  // setup email data with unicode symbols
  let mailOptions = {
    from: "contactbikash2020@gmail.com",
    to: "contactbikash2020@gmail.com",
    subject: "Test Email",
    text: "This is a test email sent from Node.js using nodemailer.",
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.send("Message sent: %s", info.messageId);
  });
    res.send("first")
})