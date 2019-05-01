const fetch = require('node-fetch');
const {
  sendError,
} = require('../couch.js');

class GitController {

  getAllCommits(req, res) {
    fetch(`https://api.github.com/repos/kevinchoinj/rport19/commits`)
    .then(res => res.json())
      .then((body) => {
        res.status(200).send({
          success: 'true',
          message: 'git commits retrieved successfully',
          data: body,
        });
      })
      .catch((error) => {
        res.status(400).send({
          success: 'false',
          message: 'git commits retrieved failure',
          error,
        });
        sendError('Express', error, 'Git Get Error');
      });
  }
}

const gitController = new GitController();
export default gitController;