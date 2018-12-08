const express = require('express');

const projects = require('./data/helpers/projectModel');

const router = express.Router();

// Endpoints
router.get('/', (req, res) => {
  projects
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve project data' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projects
    .get(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ error: `Project with the id of ${id} does not exist.` });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not get project data' });
    });
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  projects
    .getProjectActions(id)
    .then(projectActions => {
      res.json(projectActions);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve project actions' });
    });
});

router.post('/', (req, res) => {
  const project = req.body;
  if (
    project.name &&
    project.description &&
    (project.completed === true || project.completed === false)
  ) {
    projects
      .insert(project)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ error: 'Could not add project data' });
      });
  } else {
    res.status(400).json({ message: 'Please provide all required data' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then(count => {
      if (count) {
        res.json(count);
      } else {
        res
          .status(404)
          .json({ error: `project with the id of ${id} does not exist.` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'project could not be deleted.' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  if (
    project.name &&
    project.description &&
    (project.completed === true || project.completed === false)
  ) {
    projects
      .update(id, project)
      .then(project => {
        if (project) {
          res.json(project);
        } else {
          res.send(null);
          //   res
          //     .status(404)
          //     .json({ error: `project with the id of ${id} does not exist.` });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Could not add project data' });
      });
  } else {
    res.status(400).json({ message: 'Please provide all required data' });
  }
});

module.exports = router;
