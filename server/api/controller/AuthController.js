import handleResponse from "../../middlewares/catchAsyncError.js";
import AuthHandler from "../handler/AuthHandler.js";

const AuthController = {
  checkUser: handleResponse(async (req, res) => {
    return await AuthHandler.checkUser(req);
  }),
};

export default AuthController;
