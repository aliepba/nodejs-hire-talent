const {Activity} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator()

module.exports = async (req, res) => {
    const id = req.params.id;
    const {title} = req.body;
    const activity = await Activity.findByPk(id);

    if(!activity) return res.status(404).json({
        status: "not found",
        message : 'Activity with ID '+ id +' Not Found',
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

    const updatedActivity = await activity.update({title});

    return res.json({
        status : "Success",
        message : "Success",
        data : updatedActivity
    })
    
}