import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "95.216.98.112",
    database: "appwebpizza",
    port: 3306,
    user: "hdcarias",
    password: "Osoloco_19911.",
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
