/* eslint-disable @typescript-eslint/explicit-function-return-type */
async function migrationAddAgeRangeChildren(tableName, { queryInterface }) {
  await queryInterface.sequelize.query(
    `UPDATE ${tableName} SET aasba = 'asbtiiidfdfdfdfn' WHERE aasba IS NULL`,
  );
  // await queryInterface.renameColumn(tableName, 'age_range', 'aasba');
}

async function migrationAddColumn(tableName, { queryInterface, Sequelize }) {
  queryInterface.addColumn(tableName, 'parent_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: tableName,
        key: 'id',
      },
      onDelete: 'CASCADE',
      defaultValue: null,
    });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = [migrationAddAgeRangeChildren('users', { queryInterface, Sequelize }),
    migrationAddColumn('categories', { queryInterface, Sequelize })];
    return Promise.all(migrations);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('messages'),
};
