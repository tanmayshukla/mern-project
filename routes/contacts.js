const express = require('express');
const router = express.Router();

//  @route        GET api/contacts
//  @desc         Get all user contacts
//  @access       Private
router.get('/', (req, res)=>{
    res.send('Returns all user contacts');
});

//  @route        POST api/contacts
//  @desc         Get all user contacts
//  @access       Private
router.post('/', (req, res)=>{
    res.send('Add contact');
});

//  @route        PUT api/contacts/:id
//  @desc         Get all user contacts
//  @access       Private
router.put('/:id', (req, res)=>{
    res.send('Update contact');
});

//  @route        DELETE api/contacts/:id
//  @desc         Get all user contacts
//  @access       Private
router.delete('/:id', (req, res)=>{
    res.send('Delete a contact');
});

module.exports = router;