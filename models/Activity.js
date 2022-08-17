module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
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
        email : {
            type: DataTypes.STRING,
            allowNull : false
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
      tableName: 'activity_groups',
      timestamps: true
    })

    return Activity;
}