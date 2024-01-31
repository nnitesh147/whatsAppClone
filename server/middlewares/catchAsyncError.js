import { StatusCodes } from "http-status-codes";

const handleResponse = (controllerFunction) => async (req, res) => {
  try {
    const response = await controllerFunction(req, res);
    if (!response || !response?.success) {
      res.status(response?.status || StatusCodes.BAD_REQUEST).json({
        success: false,
        message: response?.message ?? "Something Went Wrong",
        data: response?.data ?? {},
      });
      return;
    }
    const codes = response?.status || StatusCodes.OK;
    delete response?.status;
    res.status(codes).json(response);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error?.message || "Internal Server Error",
    });
  }
};

export default handleResponse;
