import { products } from "../../../resources/data";

export default function specificProductHandler(req, res) {
  const productId = req.query.id;

  const filtered = products.filter((el) => {
    return String(el.id) === productId;
  });

  if (filtered.length <= 0) {
    return res
      .status(400)
      .json({ errMsg: `Product id : ${productId} not found` });
  } else {
    res.status(200).json(filtered[0]);
  }
}
