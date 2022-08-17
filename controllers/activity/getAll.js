const {Activity} = require('../../models');

module.exports = async  (req, res) => {
    const activities = await Activity.findAll();
    return res.json({
        status: "Success",
        message : 'Success',
        data : activities
    })
}