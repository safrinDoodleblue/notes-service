const express=require('express');
const router=express.Router();

const notesRoutes=require('../Notes/NotesRoutes');


router.use('/notes',notesRoutes);

module.exports=router;