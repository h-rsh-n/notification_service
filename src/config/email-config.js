const nodemailer = require('nodemailer')
const serverConfig = require('./server-config')

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: serverConfig.GMAIL_EMAIL, 
    pass: serverConfig.GMAIL_PASS,    
  },
})
module.exports =mailer