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
  
// Create Notes
app.post('/api/notes', (req, res) => {
  const newNotes = req.body;
 fs.readfile('./Develop/db/db.json', (err, data) => {
   if (err) {
     console.log('error');
     const textData = JSON.parse(data); 
   };
   textData.push(newNotes);
   fs.readfile('./Develop/db/db.json', JSON.stringify(textData), 'utf8' , (err) => {
  if(err){
    throw error;
  }
   console.log('opps! Note not saved')
  })
  })
});

//Display Notes
app.post('/api/notes', (req,res) => {
  fs.readFile('.Develop/db/db.json', 'utf8', function(err, data) {
    const displayData = JSON.parse(data);
    res.send(displayData);
  });
});
// //Delete Note
// app.delete(`/api/notes/${id}`, (req,res) =>{
//   fs.readFile("./model/db.json",'utf8', (err,data) => {
//     if(err) {
//          throw err;
//     }

// })

  
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));