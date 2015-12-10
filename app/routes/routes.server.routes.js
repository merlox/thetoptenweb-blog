module.exports = function(app, express){
  app.use('/', express.static(rootPath+'/public'));
  app.all('/admin', function(req, res, next){
    if(req.session.username === 'Merunas Grincalaitis' || req.session.username === 'Merlox' || req.session.username === 'Merlox Gr'){
      next();
    }else{
      res.redirect('/');
    }
  });
  app.get('/api/cookie', function(req, res){
    return res.send(req.session);
  });

  require('../routes/thumbnail.server.routes.js')(app);
  require('../routes/user.server.routes.js')(app);
  require('../routes/mail.server.routes.js')(app);

  app.get('/public/js/directives/*', function(req, res){
    res.sendFile(rootPath+req.path);
  });
  app.get('/*', function(req, res){
    res.sendFile(rootPath+'/public/index.html');
  });
};
