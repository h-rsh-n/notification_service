const { StatusCodes } = require("http-status-codes");
const { errorMessage } = require("../utils/common");
const { AppError } = require("../utils/errors/app-error");

function validate(req,res,next){
  const fields = ['subject','recepientEmails'];
  const missingField = [];
  fields.forEach((field)=>{
    if(!req.body[field]){
      missingField.push(`${field} is missing in the req body`);
    }
  })
  if(missingField.length){
    errorMessage.message = `Could not create ticket`;
    errorMessage.error = new AppError(missingField,StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(errorMessage)
  }
  next();
}

module.exports = {
  validate
}