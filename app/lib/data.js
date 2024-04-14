import { User } from "./models";
import { ITEM_PER_PAGE } from "./settings";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  await connectToDB();

  try {
    let count = await User.countDocuments()
    count = await populateUser(count)

    if (count === null) {
      count = await User.countDocuments()
    }

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

async function populateUser(count) {
  if (count > 0) return count

  await User.create({
    img: 'https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=256&dpr=1',
    username: 'Steve Robert',
    email: 'steve_robert@gmail.com',
    password: '1234567890',
    phone: '2987654321',
    address: 'New York',
    createdAt: new Date(2023, 6, 15),
    isAdmin: true,
  })

  await User.create({
    img: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=256&dpr=1',
    username: 'John Due',
    email: 'john_due@gmail.com',
    password: '1234567890',
    phone: '0987654321',
    address: 'Londress',
  })

  await User.create({
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=256&dpr=1',
    username: 'Jena Due',
    email: 'jena_due@gmail.com',
    password: '1234567890',
    phone: '1987654321',
    address: 'Londress',
  })

  return null
}
