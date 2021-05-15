'use strict';

module.exports = function(app) {
app.use('/api/upload',require('./routes.media_upload'))
app.use('/api/login',require('./user.router'))
app.use('/api/volunteer',require('./volunteers.router'))
app.use('/api/ticket',require('./ticket.router'))

};
