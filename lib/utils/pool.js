const { Pool } = require('pg');
// I CHANGED THIS BELOW! from 'new pg.POOL'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});

pool.on('connect', () => console.log('Postgres connected'));

module.exports = pool;
