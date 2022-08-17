const {Activity, Todo} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator()

module.exports = async (req, res) => {
    const id = req.params.id;
    const {title, activity_group_id} = req.body;
    const activity = await Activity.findByPk(activity_group_id);
    const todo = await Todo.findByPk(id);

    if(!activity) return res.status(404).json({
        status: "not found",
        message : 'Activity with ID '+ activity_group_id +' Not Found',
        data : {}
    })

    if(!todo) return res.status(404).json({
        status: "not found",
        message : 'Todo with ID '+ id +' Not Found',
        data : {}
    })

    const schema = {
        title : 'string|max:255|empty:false',
    }

    const validate = v.validate(req.body, schema)

    if(validate.length) {
        return res.status(400).json({
            message : 'Invalid request',
            errors : validate
        })
    }

    const updatedTodo = await todo.update({title, activity_group_id});

    return res.json({
        status : "Success",
        message : "Success",
        data : updatedTodo
    })

}