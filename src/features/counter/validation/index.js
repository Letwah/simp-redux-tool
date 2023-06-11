import joi from "joi";
import { searchSchema } from "../validation/schemas";
export const validate = async (payload, type) => {
  let r;
  switch (type) {
    case "searchSchema":
      //call joi
      r = joi.object(searchSchema);
      break;
    //put other option here  such and another case like "register" from russell @ 20:01 video
    //https://drive.google.com/file/d/1E-yhdHYrSM2svb3pfKp6XiQZMkpnOxtb/view?ts=647fa987
    default:
      break;
  }

  try {
    const results = await r.validateAsync(payload);
    return null;
  } catch (errors) {
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });
    // console.log(errorsMod);
    return errorsMod;
  }
};
