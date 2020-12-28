const notes = require('./utils.js');
const yargs = require('yargs');

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
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
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
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.parse();