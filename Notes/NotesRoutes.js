const express = require('express');
const router = express.Router();
const passport = require('passport');
const notesController = require('./notesController');
const validate = require('../Middleware/validate');
const { noteSchema } = require('./NotesValidation');
const ensureAuth = require('../Middleware/ensureAuth');
 require('../config/passport');

router.post('/', passport.authenticate('jwt', { session: false }),ensureAuth, validate(noteSchema), notesController.createNote);
router.get('/', passport.authenticate('jwt', { session: false }),ensureAuth, notesController.getNotes);
router.put('/:id', passport.authenticate('jwt', { session: false }), ensureAuth,validate(noteSchema), notesController.updateNote);
router.delete('/:id', passport.authenticate('jwt', { session: false }),ensureAuth, notesController.deleteNote);

module.exports = router;






































// const express = require('express');
// const router = express.Router();
// const notesController = require('./notesController');
// const validate = require('../Middleware/validate');
// const ensureAuth = require('../Middleware/ensureAuth');
// const { noteSchema } = require('./NotesValidation');

// router.post('/', ensureAuth, validate(noteSchema), notesController.createNote);
// router.get('/', ensureAuth, notesController.getNotes);
// router.put('/:id', ensureAuth, validate(noteSchema), notesController.updateNote);
// router.delete('/:id', ensureAuth, notesController.deleteNote);

// module.exports = router;




















