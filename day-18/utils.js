const fs = require('fs');

const addNote = (title,body) => {
    debugger;
    const allNotes = loadNotes();

    const duplicateNotes = allNotes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        const note = {
            title: title,
            body: body
        };
    
        allNotes.push(note);
        const jsonMsg = JSON.stringify(allNotes);
        fs.writeFileSync('test.json',jsonMsg);
    } else {
        console.log('=== Duplicate Note ===');
    }
}

const removeNote = function(title) {
    const allNotes = loadNotes();
    const elementIndex = allNotes.filter((note,index) => {
    if(note.title === title){
        
        allNotes.splice(index, 1);
        const jsonMsg = JSON.stringify(allNotes);
        fs.writeFileSync('test.json',jsonMsg);
    }
    });
    
}

const loadNotes = () => {
    try {
        const noteBuffer = fs.readFileSync('test.json');
        const noteString = noteBuffer.toString();
        const noteJSON = JSON.parse(noteString);
        return noteJSON;
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote
}