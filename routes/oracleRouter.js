const { Router } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const data="";
// JSON.parse( fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`));
const getPage=(req,res)=>{
    var page = req.params.page;
    res.sendFile(path.join(__dirname, `../public/pages/oracle/oracle${page}.html`));
};
const getPrompt=(req,res)=>{
    res.status(200).json({
        'status': 'sent',
        'data': {
            data
        }
    });

};
const createPrompt=()=>{};
const updatePrompt=()=>{};
const deletePrompt=()=>{};


const getSpecificPrompt = (req, res) => {
    var id = req.params.id;
    var data = data.find(el => el.id === id);

    if (!tour)
        return res.status(404).json({
            'status': 'fail',
            'message': "No Id Match"
        });
    res.status(200).json({
        'status': 'sent',
        'data': {
            data
        }
    });

}

const serveStatic=(req,res)=>{

};

////////////////////////
router
    .route('/')
    .get(getPrompt)
    .post(createPrompt);

router
    .route('/:page')
    .get(getPage)
    .patch(updatePrompt)
    .delete(deletePrompt);


    module.exports = router;