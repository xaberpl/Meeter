module.exports = (req, res, next) => {
    if (req.session.isAuth) {
    // if (true) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("../index.html");
    }
  };