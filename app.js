const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { describe, demandOption } = require('yargs')

yargs.version('1.1.0')

//creating a yargs command

yargs.command({
    command: "add",
    describe:"To add a new note",
    builder:{
        title:{
            describe: "Title of the note to be added",
            demandOption: true,
            type: 'string'
        },

        body:{
            describe: "The note to be added",
            demandOption : true,
            type : 'string'
        }
    },
    
    handler (argv) { notes.addNotes(argv.title, argv.body)}
    
})

yargs.command({
    command:"remove",
    describe: "This will remove the node",
    builder:{
        title:{
            describe: "The title of the node to be removed",
            demandOption:true,
            type: 'string'
        }
    },

    handler(argv) { notes.removeNote(argv.title)}
})

yargs.command({
    command: "list",
    describe: "Listing all the nodes here",
    handler() { notes.listNotes() }
})

yargs.command({
    command: "read",
    describe: "Read the notes",
    builder:{
        title:{
            describe: "Title of the note to be read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.readNotes(argv.title)}
    
})

yargs.parse()