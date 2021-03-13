// Dependicies
const express = require("express");
const path = require("path")
const fs = require('fs');
//Express stuff
const app = express();
const PORT = process.env.Port || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// HTMl Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//Display Notes
app.get('/api/notes', (req,res) => {
  fs.readFile('Develop/db.json', 'utf8', function(err, data) {
    const displayText = JSON.parse(data);
    res.send(displayText);
  });
});

  
// Create Notes
app.post('/api/notes', (req, res) => {
  const newNotes = req.body;
  fs.readFile('Develop/db.json', (err, data) => {
   if (err) throw error ; 
     const textData = JSON.parse(data);
     textData.push(newNotes);
   fs.writeFile('Develop/db.json', JSON.stringify(textData), 'utf8', (err) => {
     if(err) throw error;
      console.log('opps! Note not saved')
    });
  });  
});


// //Delete Note
// app.delete(`/api/notes/:id`, (req,res) =>{
//   fs.readFile("./Develop/db.json",'utf8', (err,data) => {
//     if(err) {
//          throw err;
//     }
//     const textID = JSON.parse(data);
//     if(req.params.id == textID[i].id){
//       textID.splice(i,1);
//     }
//     fs.writeFile("./Develop/db.json", JSON.stringify(textID), (err)=>{
//       if (err) throw err;
//     });
//   });
//   res.send(textID);
// })

  
app.listen(PORT, () => console.log("App listening on" + PORT));