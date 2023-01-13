import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "Estetica",
     port: 3306,
    user: "root",
    password: "root",
    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
  try {
    //const query = "SELECT productid, productname, productimage FROM Estetica.products";
    const query = "SELECT * FROM Estetica.products";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ error: error.message });
  }
}
