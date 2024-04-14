import mongoose from "mongoose"
import { MONGO_URL } from './settings'

export const connectToDB = async () => {
  const connection = {}

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO_URL)
    connection.isConnected = db.connections[0].readyState
  } catch (err) {
    console.log(err)
    throw new Error(err)
  } finally {
    console.log('----------------------')
    console.log('Mongo URL:', MONGO_URL)
    console.log('Connected:', connection?.isConnected ? true : false)
    console.log('----------------------')
  }
}
