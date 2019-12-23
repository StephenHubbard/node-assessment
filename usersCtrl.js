let userData = require("./userData.json");

module.exports = {
    getUsers: (req, res) => {
        console.log(req.query)
        if (req.query.favorites) {
            let newArr = []
            for (let i = 0; i < userData.length; i++) {
                for (let k = 0; k < userData[i].favorites.length; k++) {
                    if (userData[i].favorites[k] === req.query.favorites) {
                        newArr.push(userData[i])
                    }
                }
            }
            res.status(200).send(newArr)
        }

        if (req.query.age) {
            let newArr = []
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].age < req.query.age) {
                    newArr.push(userData[i])
                }
            }
            res.status(200).send(newArr)
        }

        if (req.query.email) {
            let newArr = []
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].email === req.query.email){
                    newArr.push(userData[i])
                }
            }
            res.status(200).send(newArr)
        }
        res.status(200).send(userData)
    },

    getOneUser: async (req, res) => {
        console.log(req.params)
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id === +req.params.id) {
                res.status(200).send(userData[i])
            } 
        }
        await res.status(404).send({msg: 'no user found'})
    }, 

    getAdmin: async (req, res) => {
        let newArr = []
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].type === "admin") {
                newArr.push(userData[i])
            }
        }
        await res.status(200).send(newArr)
    }, 

    getNonAdmin: async (req, res) => {
        let newArr = []
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].type != "admin") {
                newArr.push(userData[i])
            }
        }
        await res.status(200).send(newArr)
    }, 

    getType: (req, res) => {
        let newArr =[]
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].type === req.params.type) {
                newArr.push(userData[i])
            }
        }
        res.status(200).send(newArr)
    }, 

    updateUser: (req, res) => {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id === +req.params.id) {
                userData[i].first_name = req.body.first_name
                userData[i].last_name = req.body.last_name
                userData[i].email = req.body.email
                userData[i].gender = req.body.gender
                userData[i].language = req.body.language
                userData[i].age = req.body.age
                userData[i].city = req.body.city
                userData[i].state = req.body.state
                userData[i].state = req.body.state
                userData[i].type = req.body.type
                userData[i].favorites = req.body.favorites
            }
        }
        res.status(200).send(userData)
    }, 

    addUser: (req, res) => {
        let newUser = req.body
        let counter = userData[userData.length].id + 1
        // newUser.id = userData[userData.length - 1].id + 1
        newUser.id = counter 
        userData.push(newUser)
        console.log(newUser)
        res.status(200).send(userData)
    }, 

    deleteUser: (req, res) => {
        console.log(req.params)
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id === +req.params.id) {
                userData.splice(i, 1)
            }
        }
        res.status(200).send(userData)
    }
}