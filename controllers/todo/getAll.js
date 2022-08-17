const {Activity, Todo} = require('../../models');

module.exports = async (req, res) => {
    const activity_group_id =  req.query;
    const activityId = activity_group_id.activity_group_id;

    if(!activityId){
        const todos = await Todo.findAll();

        return  res.json({
            status: 'Success',
            message : 'Success',
            data : todos
        })
    }

    const todoByActivity = await Todo.findAll({
        where : {activity_group_id : activityId}
    })

        return  res.json({
            status: 'Success',
            message : 'Success',
            data : todoByActivity
        })
    
    
    // if(activity_group_id){
    //     const todoByActivity = await Todo.findAll({
    //         where : {activity_group_id : activityId}
    //     })

    //     return  res.json({
    //         status: 'Success',
    //         message : 'Success',
    //         data : todoByActivity
    //     })
    // }

    


}