const {Activity} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator()

module.exports = async (req, res) => {
    const {title, email} = req.body;

    const schema = {
        title : 'string|max:255|empty:false',
        email : 'email|empty:false',
    }
     
    const validate = v.validate(req.body, schema)

    if(validate.length) {
        return res.status(400).json({
            message : 'Invalid request',
            errors : validate
        })
    }

    const createActivity = await Activity.create({title, email})

    return res.status(200).json({
        status: 'Success',
        message : 'Success',
        data : createActivity
    })
}