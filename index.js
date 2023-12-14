const cluster = require("cluster");
const os = require("os");
const PORT = process.env.PORT || 5000; // Use PORT instead of Port
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running on Port ${PORT}`); // Corrected Port
  for (let index = 0; index < os.cpus().length; index++) { // Corrected os.cpus.length
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const express = require("express");
  const app = express();
  app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello");
  });
  app.get("/hi",(req,res)=>{
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

  from: 'contactsinghaniya@gmail.com',

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
  app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup", err);
    console.log("Server listening on Port", PORT);
  });
  console.log(`Worker ${process.pid} started`);
}
