const fs = require('fs')
const chalk = require('chalk')


const addNotes = (title, body) => {

    //loading previous notes
    const notes = loadNotes()
    
    //checking if already notes exist with the same title
    const duplicateNotes = notes.filter((note) => note.title === title
    )


    if(duplicateNotes.length == 0){
        //adding new notes to the already fetched notes data
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.inverse.green("New note added"))
    }
    else{
        console.log(chalk.inverse.red("Can't add a new note with the same title"))
    }

}

//function to save notes

const saveNotes = (notes) => {
    const dataStore = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataStore)
}

//function to load previous notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    }
    catch(e){
        return []
    }
}

// function to remove a note

const removeNote = (title) => {
    const exNotes = loadNotes();

    const notesToKeep = exNotes.filter(function(note){
        return note.title !== title
    })

    //letting our user know that notes are being added or removed
    if(exNotes.length != notesToKeep.length){
        console.log(chalk.inverse.green("Notes removed"))
    } else{
        console.log(chalk.inverse.red("No Notes removed"))
    }
    saveNotes(notesToKeep)

}

//function to list all the notes

const listNotes = () => {
    console.log(chalk.inverse("Your notes"))

    const notes = loadNotes()

    notes.forEach((element) => {
        console.log(element.title)
    })
}

// function to read a note

const readNotes = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse.grey(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.bgRed("No note found"))
    }
    

}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}