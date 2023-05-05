const stripeMiddleware = async (req, res, next) => {
  console.log(req.body);
  const { requestDetails } = req.body;
  const { reqData } = requestDetails;
  const { hourlyRate, totalHrs } = reqData;
  console.log(hourlyRate, totalHrs);
};

module.exports = stripeMiddleware;
