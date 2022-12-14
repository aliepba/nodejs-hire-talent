'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        type : Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title : {
        type: Sequelize.STRING,
        allowNull : false
      },
      activity_group_id : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      is_active : {
        type : Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull : false,
      },
      priority : {
        type : Sequelize.STRING,
        defaultValue : 'very-high'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
       type: Sequelize.DATE,
       allowNull: false
     }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('todos')
  }
};
