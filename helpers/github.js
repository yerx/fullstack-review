const request = require('request');
require('dotenv').config()
// const config = require('../config.js');
// var config;
// if(process.env.NODE_ENV === 'production') {
//   config = process.env.GITHUB_TOKEN;
// } else {
//   config = require('../config.js');
// }

// username
let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let githubAPI = `https://api.github.com/users/${username}/repos`

  let options = {
    url: githubAPI,
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `token ${config.TOKEN}`
      // 'Authorization': `token ${config.GITHUB_TOKEN} || ${config.GITHUB_TOKEN}`
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    }
  };
  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    let repoData = JSON.parse(body);
    // console.log(repoData)
    callback(null, repoData);
  });
}

module.exports.getReposByUsername = getReposByUsername;
