import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({

    //socketPath: '/var/run/mysqld/mysqld.sock',
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    console.log(results);
    return results;
  } catch (error) {
    throw Error(error.message);
    console.log(error);
    return { error };
  }
}
