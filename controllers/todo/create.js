const {Activity, Todo} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator()

module.exports = async (req, res) => {
    const {title, activity_group_id} = req.body;
    const activity = await Activity.findByPk(activity_group_id);

    if(!activity) return res.status(404).json({
        status: "not found",
        message : 'Activity with ID '+ activity_group_id +' Not Found',
        data : activity
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

    const createTodo = await Todo.create({title, activity_group_id})

    return res.status(200).json({
        status: 'Success',
        message : 'Success',
        data : createTodo
    })

}