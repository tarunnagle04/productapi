import { ProductModel } from "../model/ProductModel.js";

export const fetched = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json({
      message: "Products fetched successfully from Atlas",
      status: true,
      products: products,
    });
  } catch (e) {
    res.status(500).json({
      message: "An error Occured in DB",
    });
    console.log("An Error Occured in DB");
  }
};
