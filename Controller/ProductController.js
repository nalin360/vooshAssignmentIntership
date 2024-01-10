import Products from "../model/product.js";
// import User from "../model/user";
import { oderSuccessMessage } from "../shared/constant.js";

export const addOrder = async(req, res) => {
 
    try {

        const userProduct = req.body;
        const {user_id , sub_total, phone_number} = userProduct;

        const newUserProduct = await Products.create({
            user_id,
            sub_total,
            phone_number
        });

        await newUserProduct.save()

        res.status(200).json({
            status: 201,
            success: true,
            message: oderSuccessMessage,
            user: newUserProduct,
        });
    } catch (error) {

    }
}
export const getOrder = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  