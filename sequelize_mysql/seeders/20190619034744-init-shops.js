'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'shops',
    [
      { id: 1, name: 'shop1', thumb_url: '1.png', ...timestamps },
      { id: 2, name: 'shop2', thumb_url: '2.png', ...timestamps },
      { id: 3, name: 'shop3', thumb_url: '3.png', ...timestamps },
      { id: 4, name: 'shop4', thumb_url: '4.png', ...timestamps }
    ]
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('shops', {
      id: {
        [Op.in]: [1,2,3,4]
      }
    }, {})
  }
};
