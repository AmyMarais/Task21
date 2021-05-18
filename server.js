//import all necessary modules
const express = require('express');
const helmet = require('helmet'); //import helmet to maintain security
const bodyParser = require('body-parser');
const path = require('path');

//require ('dotenv').config()
require('isomorphic-fetch');

//initialisen express
const app = express();

//use the bodyParser and helmet middleware to pass data from the frontend as well as have some basic security for the backend
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(helmet());

// app.use(
//     helmet.contentSecurityPolicy({
//       directives: {
//         ...helmet.contentSecurityPolicy.getDefaultDirectives(),
//         "script-src": ["'none'"],
//       },
//     })
//   );

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*',(req,res) =>
      {res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')); //read the file called 'index.html' in the frontend/build directory
  });
  }
  
  // Testing to see if the server is online
  app.get('/', (req, res) => {
      res.send("Server is running");
  })

  // Post request basically passing data from the frontend to the backend which then fetches the data from the API and then sends it back to the frontend
app.post('/search', (req, res) => {
    let rawSearch = req.body.search;
    let option = req.body.option;
    // This is so that the format of the search bar is correct for the api
    let term = rawSearch.split(" ").join("+");
    let url = `https://itunes.apple.com/search?term=${term}&media=${option}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});

// Server is listening on port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
