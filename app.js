const fs = require('fs')
const argv = require('process')
const yargs = require('yargs')
const note = require('./note')

yargs.command ({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv) {
        note.addNote(argv.title,argv.body)
    }
})

yargs.command ({
    command: 'remove',
    describe: "Removes notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },        
    },
    handler: function(argv) {        
        note.removeNote(argv.title)
    }
})

yargs.command ({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },        
    },
    handler: function(argv) {        
        note.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function(argv) {
        note.listNotes ()
    }
})

console.log(yargs.argv)