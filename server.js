//import modules
const express = require('express');
const helmet = require('helmet'); //import helmet for security
const bodyParser = require('body-parser');
const path = require('path');
require('isomorphic-fetch');

//initialise express
const app = express();

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
  
  // Test if server is working
  app.get('/', (req, res) => {
      res.send("Server is running");
  })

  // Post request passes data from frontend to the backend which then fetches the data from the API and then sends it back to the frontend
app.post('/search', (req, res) => {
    let rawSearch = req.body.search;
    let option = req.body.option;
    let term = rawSearch.split(" ").join("+");
    let url = `https://itunes.apple.com/search?term=${term}&media=${option}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send(data);
    })
    .catch(err => { //catch any errors
        res.send(err);
    });
});

// Server is listening on port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
