const { StatusCodes } = require("http-status-codes");
const { mailService } = require("../service");
const { successMessage, errorMessage } = require("../utils/common");

async function createTicket(req,res) {
  try {
    const response = await mailService.createTicket({
      subject:req.body.subject,
      recepientEmails:req.body.recepientEmails,
      text:req.body.text,
      status:req.body.status
    })
    successMessage.data = response;
    return res.status(StatusCodes.CREATED).json(successMessage);
  } catch (error) {
    errorMessage.error = error;
    return res.status(error.statusCode).json(errorMessage);
  }
}

module.exports = {
  createTicket
}