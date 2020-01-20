const request = require('request');
const config = require('../config.js');

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
      'Authorization': `token ${config.TOKEN}`
      // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  };
  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
    }
    let repoData = JSON.parse(body);
    callback(null, repoData);
  });
}

module.exports.getReposByUsername = getReposByUsername;
