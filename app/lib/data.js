import { User } from "./models";
import { ITEM_PER_PAGE } from "./settings";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    await connectToDB();
    const usersFound = await User.find({ username: { $regex: regex } })
    const count = usersFound.count()
    const users = usersFound.limit(
      ITEM_PER_PAGE,
    ).skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};
