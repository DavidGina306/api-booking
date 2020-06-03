'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Profiles', [{
                name: 'Administrator',
                description: 'Profile for users that go can management the system',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Customers',
                description: 'Profile for users that have permissions to make booking',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Profiles', null, {});
    }
};