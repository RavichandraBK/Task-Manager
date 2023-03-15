const expr = require('express')
const router  = expr.Router()

const { getAllTasks,createTask,getTask,updateTask,deleteTask } = require('../Controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router