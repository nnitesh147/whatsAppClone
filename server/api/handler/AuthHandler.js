import { StatusCodes } from "http-status-codes";

const AuthHandler = {
  checkUser: (req) => {
    // const { email } = req.body;
    // if (!email) {
    //   return {
    //     success: false,
    //     message: "No Email of the User",
    //     status: StatusCodes.CONFLICT,
    //   };
    // }
    console.log("Calling");
  },
};

export default AuthHandler;
