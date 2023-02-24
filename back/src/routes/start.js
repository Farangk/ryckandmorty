const app = require('./index');
const saveApiData = require('../controllers/saveApiData');
const {sequelize} = require('../DB_connection')

sequelize.sync({force: true}).then(() => {
    console.log('Server On');
    saveApiData(); 
    app.listen(3001, () => {
   
        console.log('Server on port 3001');
    })
});
