module.exports = app => {
  app.get('/logoutUser', (req, res, next) => {
    req.logout();
    res.json({
      status: "logout",
      msg:"Please Log In again"
    });
  })
};