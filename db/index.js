const fs = require('fs');
const path = require('path');
const db = require('../query');

const seedFilePath = path.join(__dirname, 'seeding.sql');

fs.readFile(seedFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  try {
    await db.query(data);
    console.log('Seeding successful');
  } catch (err) {
    console.error(err);
  }

  process.exit();
});
