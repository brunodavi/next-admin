import mongoose from "mongoose"
import { MONGO_URL } from './settings'
import { User, Product } from './models'


export const connectToDB = async () => {
  const connection = {}

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO_URL)
    connection.isConnected = db.connections[0].readyState

    const userPopulate = (await User.countDocuments()) > 0
    const productPopulate = (await Product.countDocuments()) > 0

    if (!userPopulate) await populateUser()
    if (!productPopulate) await populateProducts()
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}


async function populateUser() {
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
}

async function populateProducts() {
  Product.create({
    title: "Iphone 14",
    desc: "Iphone 14 Pro Max",
    price: 10000,
    stock: 2,
    color: "white",
    size: 10
  })

  Product.create({
    title: "Galaxy S8",
    desc: "Samsung Galaxy S8 Pro",
    price: 200,
    stock: 100,
    color: "black",
    size: 10
  })

  Product.create({
    title: "Notebook Dell",
      desc: "Notebook Dell, 4G RAM, 256 SSD",
      price: 800,
      stock: 300,
      color: "black",
      size: 30
  })
}
