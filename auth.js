import { authConfig } from "@/auth.config"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "@/app/lib/utils"
import { User } from '@/app/lib/models'
import bcrypt from 'bcrypt'

const login = async (credentials) => {
  try {
    connectToDB()

    console.log(credentials)

    const user = await User.findOne({
      username: credentials.username
    })

    const wrongCredentialsError = new Error("Wrong credentials!")

    if (!user) throw wrongCredentialsError

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw wrongCredentialsError

    return user
  } catch (err) {
    console.log(err)
    throw new Error("Failed to login!")
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorized(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (err) {
          console.log(err)
          return null
        }
      }
    })
  ]
})
