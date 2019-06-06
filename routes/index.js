import express from 'express';
import multer from 'multer';
import ProjectController from '../controllers/project';
import GitController from '../controllers/git';
import AwsController from '../controllers/aws';
import passport from 'passport';

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});

function loggedIn(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    }
    else {
      next();
    }
  })(req, res, next);
}

/*
todo

const loggedIn = (req, res, next) => co(function* () {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {

    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    }
    else {
      next();
    }
  });
}).asCallback(next);
*/

/*
const Promise = require('bluebird')
const co = gen => Promise.coroutine(gen)()

const handler = (req, res, next) => co(function* () {
  // do your shit in here
}).asCallback(next)
*/


router.get('/api/v1/project', ProjectController.getAllProjects);
router.post('/api/v1/project', loggedIn, ProjectController.createProject);
router.put('/api/v1/project', loggedIn, ProjectController.updateProject);
router.delete('/api/v1/project', loggedIn, ProjectController.deleteProject);

router.get('/api/v1/git/commits', GitController.getAllCommits);

router.post('/api/v1/aws', loggedIn, upload.single('awsAction'), AwsController.createImage);
router.delete('/api/v1/aws', loggedIn, upload.single('awsAction'), AwsController.deleteImage);

export default router;