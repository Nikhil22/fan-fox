module.exports = function(app, dir) {
  app.get('/fb_login', function(req, res) {
      res.sendFile(dir + '/public/views/fb_login.html');
  });
}
