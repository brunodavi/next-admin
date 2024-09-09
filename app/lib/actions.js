"use server"

import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { signIn } from "@/auth.js";
import { AuthError } from 'next-auth';

export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })

    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error("Falied to create user!")
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }

    Object.keys(updateFields).forEach(
      (key) => {
        if (updateFields[key] == "" || undefined) {
          delete updateFields[key]
        }
      }
    )

    await User.findByIdAndUpdate(id, updateFields)

  } catch (err) {
    console.log(err)
    throw new Error("Falied to create user!")
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await User.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)

    throw new Error("Falied to delete user!")
  }

  revalidatePath("/dashboard/users")
}

export const addProduct = async (formData) => {
  const {
    title,
    desc,
    price,
    stock,
    color,
    size
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size
    })

    await newProduct.save()
  } catch (err) {
    console.log(err)

    throw new Error("Falied to create product!")
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}


export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)

    throw new Error("Falied to delete product!")
  }

  revalidatePath("/dashboard/products")
}

export const updateProduct = async (formData) => {
  const {
    id,
    title,
    desc,
    price,
    stock,
    color,
    size
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size
    }

    Object.keys(updateFields).forEach(
      (key) => {
        if (updateFields[key] == "" || undefined) {
          delete updateFields[key]
        }
      }
    )

    await User.findByIdAndUpdate(id, updateFields)

  } catch (err) {
    console.log(err)
    throw new Error("Falied to create product!")
  }

  revalidatePath("/dashboard/products")
  redirect("/dashboard/products")
}

// export const authenticate = async (formData) => {
//   const { username, password } = Object.fromEntries(formData)
//
//   try {
//     await signIn("credentials", { username, password })
//   } catch (err) {
//     throw err
//   }
// }

export async function authenticate(_prevState, formData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    console.log(error)
    throw error;
  }
}