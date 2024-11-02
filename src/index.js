const express = require('express')
const {serverConfig} = require('./config')
const app = express();
const apiRouter = require('./routes');
const {Queue} = require('./utils/common')
const {mailService} = require('./service/')

const amqp = require('amqplib')
async function connectQueue(){
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    channel.assertQueue(serverConfig.QUEUE);
    channel.consume(serverConfig.QUEUE,async (msg)=>{
      const obj = JSON.parse(msg.content.toString())
      await mailService.sendMail(serverConfig.GMAIL_EMAIL,obj.email,`Confirmation of Booking`,obj)
      channel.ack(msg)
    })
  } catch (error) {
    throw error
  }
}

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',apiRouter);



app.listen(serverConfig.PORT,async ()=>{
  console.log(`Server started on port ${serverConfig.PORT}`);
  connectQueue();
})