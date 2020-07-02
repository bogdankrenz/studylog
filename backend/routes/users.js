const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => { res.status(200).json(users) })
        .catch(err => {res.status(400).json('Something went wrong :( ' + err)})
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});

    newUser.save()
        .then(() => res.status(201).json('User added :)'))
        .catch(err => { res.status(400).json('Something went wrong :( ' + err)})
})

// No need for PUT because the user have only a username for now 
/* router.route('/:id').put((req, res) => {
    return console.log("This is a PUT from users")
}) */

router.route('/:id').delete((req, res) => {
    User.findOneAndDelete(req.params.id)
        .then(() => res.status(200).json('User deleted ;)'))
        .catch(err => res.status(400).json('Something went wrong :( ' + err))
})

module.exports = router;