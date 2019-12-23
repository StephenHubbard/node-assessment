const express = require('express');
const ctrl = require('./usersCtrl');

const app = express()

const server = app.listen(3000, () => console.log(`Server is listening on port 3000.`))

app.use(express.json());


// ENDPOINTS
// 1
app.get('/api/user', ctrl.getUsers)

// 2
app.get('/api/user/:id', ctrl.getOneUser)

// 3 

app.get('/api/admin', ctrl.getAdmin)

// 4 

app.get('/api/nonAdmin', ctrl.getNonAdmin)

// 5 

app.get('/api/type/:type', ctrl.getType)

// 6 

app.put('/api/user/:id', ctrl.updateUser)

// 7 

app.post('/api/user', ctrl.addUser)

// 8 

app.delete('/api/user/:id', ctrl.deleteUser)