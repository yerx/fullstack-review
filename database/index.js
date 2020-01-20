const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

// mongoose.connect(`${process.env.MONGODB_URI}`, {
//   useMongoClient: true,
// });

let db = mongoose.connection;

db.once('open', function() {
  console.log("database connected!")
});

db.on('error', console.error.bind(console, 'connection error: '));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  html_url: String,
  ownerLogin: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// pass in error and a new user to save to the db
let save = ((repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let repoArray = [];
    for (var i = 0; i < repos.length; i++) {
      let repo = repos[i];
      let repoData = {};
      repoData.id = repo.id;
      repoData.name = repo.name;
      repoData.html_url = repo.html_url;
      repoData.ownerLogin =  repo.owner.login;
      repoData.stargazers_count = repo.stargazers_count;
      repoData.watchers_count = repo.watchers_count;
      repoData.forks_count = repo.forks_count;
      repoArray.push(repoData);
    }

  // let doc = new Repo(repoArray);
  // doc.save((error, repo) => {
  //   if (error) {
  //     console.log(error)
  //   }
  //   console.log("saved to collection")
  // })

  Repo.create(repoArray, (error, repos) => {
    if (error) {
      console.error(error);
    }
    console.log("Added repos to collection");
  })
});

let getRepos = () => {
  return Repo.find()
    .select('ownerLogin name html_url  stargazers_count id')
    .limit(25)
    .sort('-stargazers_count')
}

module.exports.save = save;
module.exports.getRepos = getRepos;