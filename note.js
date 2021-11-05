const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}


const addNote = function (title, body) {
    const notes = loadNotes()
    let noteAlreadyExist = false

    notes.forEach(note => {
        if(title==note.title) {
            noteAlreadyExist = true
            console.log(noteAlreadyExist)
        }
    });
    if(noteAlreadyExist == false){
    notes.push({
        title: title,
        body: body
    })}
    saveNotes(notes)

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log("Notes updated")
}


const removeNote = function(title) {
    const notes = loadNotes()
    let newNotes = notes.filter((note) => {
        return note.title != title
    })
    saveNotes(newNotes)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = function(title) {
    const notes = loadNotes()
    const noteRead = notes.find((note) => {
        return note.title === title
    })
    if(!noteRead) {
        return(console.log('note not found'))
    }
    else {
        console.log('the body of title ' + noteRead.title + ' is: \n' + noteRead.body)
    }
}

const listNotes = function() {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log('the note is:' + note.title)
    });
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes,
}