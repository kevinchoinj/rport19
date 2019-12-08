const nano = require('nano')('http://localhost:5984');
const portfolioDatabase = nano.db.use('portfolio');

class ProjectsController {

  getAllProjects(req, res) {
    return portfolioDatabase.view('miscprojects', 'miscprojects', { include_docs: true })
    .then((data) => {
      res.status(200).send({
        success: 'true',
        message: 'projects retrieved successfully',
        data: data.rows,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: 'false',
        message: 'project retrieved failure',
        error,
      });
    });
  }

  createProject(req, res) {
    return portfolioDatabase.insert({
      name: req.body.name,
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
    },);
  }

  updateProject(req, res) {
    portfolioDatabase.view('miscprojects', 'miscprojects', { key: req.body.id, include_docs: true })
    .then(data => {
      if (data.rows[0]) {
        return portfolioDatabase.insert({
          _id: data.rows[0].doc._id,
          _rev: data.rows[0].doc._rev,
          name: req.body.name,
          link: req.body.link,
          position: req.body.position,
          createdAt: req.body.createdAt,
          url: req.body.url,
          awsKey: req.body.awsKey,
          updatedAt: Date.now(),
        }, req.body.id)
        .then((data) => {
          res.status(201).send({
            success: 'true',
            message: 'project edited successfully',
            data,
          })
        })
        .catch((error) => {
          res.status(400).send({
            success: 'false',
            message: 'project edited failure',
            error,
          });
        });
    }
  })
}

  deleteProject(req, res) {
    const rev = req.body.rev;
    return portfolioDatabase.destroy(req.body.id, rev)
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
    });
  }

}

const projectController = new ProjectsController();
module.exports = {
  projectController,
};