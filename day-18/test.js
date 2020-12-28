//const yargs = require('yargs');
var notes = require('./utils.js');

notes.addNote('new title','new body');
/*
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const noteData = {
            title: argv.title,
            body: argv.body
        }
        console.log('noteData', noteData);
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing a new note!')
    }
})

yargs.parse();
*/