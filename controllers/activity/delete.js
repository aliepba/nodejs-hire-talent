const {Activity} = require('../../models');

module.exports = async (req, res) => {
    const id = req.params.id

    const activity = await Activity.destroy({
        where : {id :id }
    })

    if(!activity) return res.status(404).json({
        status: "not found",
        message : 'Activity with ID '+ id +' Not Found',
        data : {}
    })

    return res.json({
        status: "Success",
        message : 'Success',
        data : {}
    })
}