import { StatusCodes } from "http-status-codes";

const AuthHandler = {
  checkUser: (req, res) => {
    const { email } = req.body;
    return {
      success: true,
      data: {},
      message: "New User",
    };
  },
};

export default AuthHandler;
