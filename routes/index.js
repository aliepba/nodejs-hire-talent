var express = require('express');
var router = express.Router();

const activityController = require('../controllers/activity');
const todoController = require('../controllers/todo');

router.get('/activity-groups', activityController.getAll)
router.post('/activity-groups', activityController.create)
router.get('/activity-groups/:id', activityController.get)
router.put('/activity-groups/:id', activityController.update)
router.delete('/activity-groups/:id', activityController.deleteActivity)

router.get('/todo-items', todoController.getAll)
router.post('/todo-items', todoController.create)
router.put('/todo-items/:id', todoController.update)
router.get('/todo-items/:id', todoController.getOne)
router.delete('/todo-items/:id', todoController.deleteTodo)

module.exports = router;
