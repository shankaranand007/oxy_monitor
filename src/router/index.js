'use strict';

// const AuthStore = require('../stores/authentication.store');

module.exports = function(app) {
//   app.use('/api/v1', require('./routes.unauth'));
//   app.use('/api/v1/admin', [AuthStore.authenticate, AuthStore.isAdmin], require('./routes.admin'));
app.use('/api/upload',require('./routes.media_upload'))
app.use('/api/login',require('./user.router'))
app.use('/api/volunteer',require('./volunteers.router'))


};
