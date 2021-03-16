// Dependicies
const express = require("express");
const path = require("path")
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Notes = require('./db/db.json');

//Express stuff
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// HTMl Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//Display Notes
app.get('/api/notes', (req,res) => {
  fs.readFile('./db/db.json', 'utf8', function(err, data) {
    const displayText = JSON.parse(data);
    res.send(displayText);
  });
});

  
// Create Notes
app.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
   if (err) throw error ; 
   const newNotes = req.body;
    Notes.id = uuidv4(Notes.id);
     const textData = JSON.parse(data);
     textData.push(newNotes);
   fs.writeFile('./db/db.json', JSON.stringify(textData), 'utf8', (err) => {
     if(err) throw error;
      console.log('opps! Note not saved')
    });
    Notes.push(data)
  });  
});


// //Delete Note
// app.delete(`/api/notes/:id`, (req,res) =>{
//   const textID= req.params.id;
//   Note= Notes.filter((notes, index)=>{
//     return textID !== notes.id;
// });
//   fs.writeFile('./db/db.json', JSON.stringify(Note), (err)=>{
//   if (err) throw err;
//   });
//   res.json(true);
// });   

  
app.listen(PORT, () => console.log("App listening on " + PORT));