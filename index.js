const express=require("express")
const nodemailer=require("nodemailer")
require('dotenv').config()
const app=express()

const port=process.env.port||5000
app.listen(port,()=>{
console.log("server start");
}) 
app.get("/",(req,res)=>{
   
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 587,
        
        auth: {
          user: process.env.Email,
          pass: process.env.Password,
        }, 
      });
  
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Smart Singhaniya"<contactsinghaniya@gmail.com>',
    to: "contactbikash2020@gmail.com",
    subject: "testing nodemailer",
    text: "This is a test email sent from Node.js using nodemailer.",
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }else{
        res.status(200).send("Email send successfully");
    }
    
  });
 
})