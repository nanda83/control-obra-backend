const adminMiddleware = (req, res, next) => {
  console.log("Solo valido para admin");
  next();
};

module.exports = adminMiddleware;
