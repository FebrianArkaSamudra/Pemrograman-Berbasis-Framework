import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../utlis/db/servicefirebase";
type ProductData = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

type Data = {
  status: boolean;
  status_code: number;
  data: ProductData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retrieveProducts("produk");
  res.status(200).json({ status: true, status_code: 200, data });
}