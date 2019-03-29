import express from 'express';
import multer from 'multer';
import ProjectController from '../controllers/project';
import GitController from '../controllers/git';
import AwsController from '../controllers/aws';
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});

router.get('/api/v1/project', ProjectController.getAllProjects);
router.post('/api/v1/project', ProjectController.createProject);
router.put('/api/v1/project', ProjectController.updateProject);
router.delete('/api/v1/project', ProjectController.deleteProject);

router.get('/api/v1/git/commits', GitController.getAllCommits);

router.post('/api/v1/aws', upload.single('awsAction'), AwsController.createImage);
router.delete('/api/v1/aws', upload.single('awsAction'), AwsController.deleteImage);

export default router;