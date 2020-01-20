const express = require('express');
let app = express();
const db = require('../database');
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let username = req.body.username;
  console.log('name', username)

  github.getReposByUsername(username, (error, repos) => {
    // console.log('array', repos);
    if (error) {
      console.error(error);
    }

    db.save(repos);
    res.sendStatus(201);
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  return db.getRepos().then(repos => {
    res.json(repos);
    }
  );

});



let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
