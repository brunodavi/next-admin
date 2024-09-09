import { User, Product } from "./models";
import { ITEM_PER_PAGE } from "./settings";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  await connectToDB();

  try {
    let count = await User.countDocuments()

    const users = await User
      .find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .exec();

    return { count, users };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  await connectToDB();

  try {
    const user = await User.findById(id)
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  await connectToDB();

  try {
    let count = await Product.countDocuments()

    const products = await Product
      .find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .exec();

    return { count, products };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProduct = async (id) => {
  await connectToDB();

  try {
    const product = await Product.findById(id)
    return product;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch product!");
  }
};
