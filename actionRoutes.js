const express = require('express');

const actions = require('./data/helpers/actionModel');

const router = express.Router();

// Endpoints
router.get('/', (req, res) => {
  actions
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve action data' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  actions
    .get(id)
    .then(action => {
      if (action) {
        res.json(action);
      } else {
        res
          .status(404)
          .json({ error: `Action with the id of ${id} does not exist.` });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not get action data' });
    });
});

router.post('/', (req, res) => {
  const action = req.body;
  if (
    action.project_id &&
    action.description &&
    action.notes &&
    (action.completed === true || action.completed === false)
  ) {
    actions
      .insert(action)
      .then(action => {
        res.json(action);
      })
      .catch(err => {
        res.status(500).json({ error: 'Could not add action data' });
      });
  } else {
    res.status(400).json({ message: 'Please provide all required data' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  actions
    .remove(id)
    .then(count => {
      if (count) {
        res.json(count);
      } else {
        res
          .status(404)
          .json({ error: `Action with the id of ${id} does not exist.` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Action could not be deleted.' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  if (
    action.project_id &&
    action.description &&
    action.notes &&
    (action.completed === true || action.completed === false)
  ) {
    actions
      .update(id, action)
      .then(action => {
        if (action) {
          res.json(action);
        } else {
          res.send(null);
          //   res
          //     .status(404)
          //     .json({ error: `Action with the id of ${id} does not exist.` });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Could not add action data' });
      });
  } else {
    res.status(400).json({ message: 'Please provide all required data' });
  }
});

module.exports = router;
