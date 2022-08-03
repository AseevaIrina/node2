const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes, removeNoteById} = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
      title: {
          type: 'string',
          describe: 'Note title',
          demandOption: true
      }
    },
    async handler({title}) {
        await addNote(title)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note by ID',
    builder: {
        id: {
            type: 'string',
            describe: 'Note ID',
            demandOption: true
        }
    },
    async handler({id}) {
        await removeNoteById(id)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        const notes = await printNotes()
        console.log(notes)
    }
})

yargs.parse()
