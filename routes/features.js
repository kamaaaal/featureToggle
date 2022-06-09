const express = require('express');
const router = express.Router();
const featureModel = require('../models/features');

router.get('/',(req,res) => {
    featureModel.find().then(docs => res.json(docs));
})

router.get('/:feature',(req,res) => {
    const feature = req.params.feature;
    featureModel.findById(feature)
    .then(doc => res.json(doc))
    .catch(console.error);
})

router.post('/',(req,res) => {
    featureModel.create(req.body)
    .then(feature => {
        console.log('FEATURE HAS BEEN CREATED',feature); 
        res.json(feature)}
        )
    .catch(err => console.error('ERROR WHILE POSTING A FEATURE',err));
})
// router to get status of the feature whether its on or off
router.get('/status/:feature',(req,res) => {
    const feature = req.params.feature;
    const featureStatus = featureModel.findOne({name :feature}).select('isOn').then(docs => {
        ///
        console.log(docs);
        res.json(docs.isOn); 
    })   
})

router.patch('/:feature',(req,res) => {
    featureModel.findByIdAndUpdate(req.params.feature,req.body, {new : true})
    .then(doc => {
        console.log("FEATURE HAS BEEN UPDATED");
        res.send(doc);
    })
    .catch(err => console.error("ERROR WHILE UPDATING TTHE FEATURE"));
})
module.exports = router;