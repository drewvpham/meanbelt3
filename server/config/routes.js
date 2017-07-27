let path = require('path');
let Users = require('../controllers/users');


module.exports = function(app){
    app.post('/users', Users.create);



    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}
