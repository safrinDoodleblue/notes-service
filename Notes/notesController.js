const noteService = require('./NotesService');

exports.getNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(201).json({message: 'getting all notes',notes});
  } catch (err) {
    res.status(500).json({ message: 'Failed to get notes' });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await noteService.createNote(req.user.id, title, content);
    res.status(201).json({message: 'Note created',note});
  } catch (err) {
     console.error("creating notes error:", err.message);
    res.status(500).json({ message: 'Failed to create note' });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await noteService.updateNote(
      req.user.id,
      req.params.id,
      req.body
    );
    if (!updatedNote) return res.status(404).json({ message: 'Note not found' });
    res.status(201).json({message: 'Note updated',updatedNote});
  } catch (err) {
    console.error("updating notes error:", err.message);
    res.status(500).json({ message: 'Failed to update note' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await noteService.deleteNote(req.user.id, req.params.id);
    if (!deletedNote) return res.status(404).json({ message: 'Note not found' });
    res.status(201).json({ message: 'Note deleted' });
  } catch (err) {
    console.error("deleting notes error:", err.message);
    res.status(500).json({ message: 'Failed to delete note' });
  }
};
