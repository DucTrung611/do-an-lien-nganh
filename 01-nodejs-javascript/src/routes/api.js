const express = require('express');
const { createUser, handleLogin, getUser, getAccount } = require('../controllers/userController');
const delay = require('../middleware/delay');
const auth = require('../middleware/auth');
const { create, get, updateStock, Delete } = require('../controllers/stockController');
const { getAllFinancialData, getFinancialDataBySymbol } = require('../controllers/bctcController');
const { getAllTimeSeriesData, getTimeSeriesDataBySymbol } = require('../controllers/TimesController');


const routerAPI = express.Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);

routerAPI.all("*", auth)

routerAPI.get('/', (req, res) => {
    res.status(200).json("hello world api")
})

routerAPI.post('/register', createUser)
routerAPI.post('/login', handleLogin)
routerAPI.get('/user', getUser)
routerAPI.get('/account', getAccount)



routerAPI.post('/create', create)
routerAPI.get('/get', get)
routerAPI.put('/update', updateStock)
routerAPI.delete('/delete/:id', Delete)


routerAPI.get('/getalldata', getAllFinancialData)
routerAPI.post('/getdata', getFinancialDataBySymbol)
module.exports = routerAPI; //export default

routerAPI.get('/getalldata2', getAllTimeSeriesData)
routerAPI.post('/getdata2', getTimeSeriesDataBySymbol)
module.exports = routerAPI; //export default