// Dependicies
const express = require("express");
const path = require("path")
//Express stuff
const app = express();
const PORT = process.env.Port || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data 




// HTMl Route
// //  app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//   });

// //  app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'));
//   });

// CSS Route

//JS Route


// API routes
app.post('/api/index', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
});
  
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));