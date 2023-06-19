export const middleware = (req, res, next) => {
  let key = req.params.key;
  if (key == "API") {
    next();
  } else {
    res.status(400).json({
      message: "Invailid Request",
    });
  }
};
