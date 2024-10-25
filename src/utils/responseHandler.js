// response pattern for success and error
const successResponse = (res, data, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
      status: "success",
      message,
      data
    });
  };
  
  const errorResponse = (
    res,
    message = "Error",
    statusCode = 400,
    details = null
  ) => {
    return res.status(statusCode).json({
      status: "error",
      message,
      ...(details && { details })
    });
  };
  
  const paginatedResponse = (
    res,
    data,
    page,
    pageSize,
    total,
    message = "Success"
  ) => {
    return res.status(200).json({
      status: "success",
      message,
      data,
      pagination: {
        page,
        pageSize,
        total
      }
    });
  };
  
  module.exports = {
    successResponse,
    errorResponse,
    paginatedResponse
  };
  

  