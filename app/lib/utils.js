import mongoose from "mongoose"

export const connectToDB = async () => {
  const connection = {}

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL)
    connection.isConnected = db.connections[0].readyState
  } catch (err) {
    console.log(err)
    throw new Error(err)
  } finally {
    console.log('----------------------')
    console.log('Mongo URL:', process.env.MONGO_URL)
    console.log('Connected:', connection?.isConnected ? true : false)
    console.log('----------------------')
  }
}
