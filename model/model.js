var DB = require('../db/db.js').DB;

var User = DB.Model.extend({
   tableName: 'tblUsers',
   idAttribute: 'userId',
});

module.exports = {
   User: User
};