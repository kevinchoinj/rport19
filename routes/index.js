const express = require('express');
const multer = require('multer');
const passport = require('passport');
const {projectController} = require('../controllers/project');
const {gitController} = require('../controllers/git');
const {awsController} = require('../controllers/aws');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});

function loggedIn(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (user.username === 'shodyra') {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.send(info.message);
      }
      else {
        next();
      }
    }
    else {
      res.status(400).send({
        success: 'false',
        message: 'wrong user'
      });
    }
  })(req, res, next);
}

router.get('/api/v1/project', projectController.getAllProjects);
router.post('/api/v1/project', loggedIn, projectController.createProject);
router.put('/api/v1/project', loggedIn, projectController.updateProject);
router.delete('/api/v1/project', loggedIn, projectController.deleteProject);

router.get('/api/v1/git/commits', gitController.getAllCommits);

router.post('/api/v1/aws', loggedIn, upload.single('awsAction'), awsController.createImage);
router.delete('/api/v1/aws', loggedIn, upload.single('awsAction'), awsController.deleteImage);

module.exports = {
  router,
};