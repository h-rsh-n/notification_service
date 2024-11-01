const { StatusCodes } = require('http-status-codes');
const {TicketRepository} = require('../repositories');
const { AppError } = require('../utils/errors/app-error');
const ticketRepository = new TicketRepository();
const {mailerConfig} = require('../config')

async function sendMail(mailFrom,mailTo,subject,text){
  try {
    const response = await mailerConfig.sendMail({
      from:mailFrom,
      to:mailTo,
      subject:subject,
      text:text
    })
    return response;
  } catch (error) {
    throw new AppError(`Something went wrong while sending mail`,StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function createTicket(data) {
  try {
    const ticket = await ticketRepository.create(data);
    return ticket;
  } catch (error) {
    console.log(error);
    throw new AppError(`Something went wrong while creating ticker`,StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getPendingTickets(){
  try {
    const tickets = await ticketRepository.getPendingTickets();
    return tickets;
  } catch (error) {
    throw new AppError(`Something went wrong while getting pending tickets`,StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  sendMail,
  createTicket,
  getPendingTickets
}