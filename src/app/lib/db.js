import mysql from 'serverless-mysql';

async function createDatabaseIfNotExists() {
  const db = mysql({
    config: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    }
  });

  try {
    await db.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE}\``);
    await db.end();
  } catch (error) {
    console.error("Error creating database:", error);
    await db.end();
  }
}

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

export default async function executeQuery({ query, values }) {
  try {
    // Ensure the database exists before setting it in the config
    await createDatabaseIfNotExists();

    // Split queries by semicolons and filter out empty strings
    const queries = query.split(';').filter(Boolean);
    console.log(queries);
    const results = [];

    for (const q of queries) {
      const result = await db.query(q.trim(), values);
      results.push(result);
    }

    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
