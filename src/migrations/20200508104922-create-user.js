/* eslint-disable @typescript-eslint/explicit-function-return-type */
async function migrationAddAgeRangeChildren(tableName, { queryInterface }) {
  await queryInterface.sequelize.query(
    `UPDATE ${tableName} SET aasba = 'asbtiiidfdfdfdfn' WHERE aasba IS NULL`,
  );
  // await queryInterface.renameColumn(tableName, 'age_range', 'aasba');
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = [migrationAddAgeRangeChildren('users', { queryInterface, Sequelize })];
    return Promise.all(migrations);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Posts'),
};
