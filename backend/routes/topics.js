const router = require('express').Router();
let Topic = require('../models/topic.model');

router.route('/').get((req, res) => {
    Topic.find()
        .then(topics => res.status(200).json(topics))
        .catch(err => res.status(400).json('Something went wrong :( ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const headline = req.body.headline;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newTopic = new Topic({
        username,
        headline,
        description,
        date,
    });

    newTopic.save()
        .then(() => res.status(201).json('New Topic added :D'))
        .catch(err => res.status(400).json('Something went wrong :( ' + err))

})

router.route('/:id').get((req, res) => {
    Topic.findById(req.params.id)
        .then(topic => res.status(200).json(topic))
        .catch(err => res.status(400).json('Something went wrong :( ' + err))
});

router.route('/:id').put((req, res) => {
    Topic.findById(req.params.id)
        .then(topic => {
            topic.username = req.body.username;
            topic.headline = req.body.headline;
            topic.description = req.body.description;
            topic.date = Date.parse(req.body.date);

            topic.save()
                .then(() => res.status(200).json('Topic updated :>'))
                .catch(err => res.status(400).json('Something went wrong :( ' + err))

        })
        .catch(err => res.status(400).json('Something went wrong :( ' + err))
});


router.route('/:id').delete((req, res) => {
    Topic.findOneAndDelete(req.params.id)
        .then(() => res.status(200).json('Topic deleted :P'))
        .catch(err => res.status(400).json('Something went wrong :( ' + err))
})

module.exports = router;