const {Todo} = require('../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    
    const todo = await Todo.findByPk(id);

    if(!todo) return res.status(404).json({
        status: "not found",
        message : 'Todo with ID '+ id +' Not Found',
        data : {}
    })

    return res.json({
        status: "Success",
        message : 'Success',
        data : todo
    })
}