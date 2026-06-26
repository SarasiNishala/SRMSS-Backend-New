const { sequelize } = require('../src/models/index');

sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ All tables synced!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Sync failed:', err);
    process.exit(1);
  });