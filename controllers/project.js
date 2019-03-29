const {
  couchGet,
  couchPost,
  couchPut,
  couchDelete,
} = require('../couch.js');
const {
  sendError,
} = require('../errors.js');

let jsonData = require('../config.json');
const dbName = jsonData.dbName;
const couchViewUrl = jsonData.couchViewUrl;

class ProjectsController {

  getAllProjects(req, res) {
    return couchGet(dbName, couchViewUrl)
    .then((data) => {
      res.status(200).send({
        success: 'true',
        message: 'projects retrieved successfully',
        data: data.data.rows,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: 'false',
        message: 'project retrieved failure',
        error,
      });
      sendError('Express', error, 'Project Get Error');
    });
  }

  createProject(req, res) {
    return couchPost(dbName, {
      name: req.body.text,
      link: req.body.link,
      position: req.body.position,
      awsKey: req.body.awsKey,
      url: req.body.url,
    })
    .then((data) => {
      res.status(201).send({
        success: 'true',
        message: 'project added successfully',
        data,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: 'false',
        message: 'project added failure',
        error,
      });
      sendError('Express', error, 'Project Post Error');
    });
  }

  updateProject(req, res) {
    return couchPut(dbName, {
      _id: req.body.id,
      _rev: req.body.rev,
      name: req.body.name,
      link: req.body.link,
      position: req.body.position,
      createdAt: req.body.createdAt,
      url: req.body.url,
      awsKey: req.body.awsKey,
      updatedAt: Date.now(),
    })
    .then((data) => {
      res.status(201).send({
        success: 'true',
        message: 'project edited successfully',
        data,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: 'false',
        message: 'project edited failure',
        error,
      });
      sendError('Express', error, 'Project Edit Error');
    });
  }

  deleteProject(req, res) {
    const id = req.body.id;
    const rev = req.body.rev;
    return couchDelete(dbName, id, rev)
    .then((data) => {
      res.status(201).send({
        success: 'true',
        message: 'project deleted successfully',
        data,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: 'false',
        message: 'project deleted failure',
        error,
      });
      sendError('Express', error, 'Project Delete Error');
    });
  }

}

const projectController = new ProjectsController();
export default projectController;