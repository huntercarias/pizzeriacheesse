import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const querySql =
      "SELECT * FROM Tienda.products";
    const valueParams = [];
    const data = await query({ query: querySql, values: [valueParams] });
    console.log(data);
    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    console.log(error);
     res.status(500).json({ error: error.message });
  }
}
