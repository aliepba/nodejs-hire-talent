module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
        title : {
            type  : DataTypes.STRING,
            allowNull : false
        },
        activity_group_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        is_active : {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull : false
        },
        priority : {
            type : DataTypes.STRING,
            defaultValue : 'very-high'
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
          },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
          }
    },{
      tableName: 'todos',
      timestamps: true
    })

    return Todo;
}