import mongoose from 'mongoose';


// const connectDB  = async () => {
//     try {
//        const conn =  await mongoose.connect(process.env.MONGODB_URL)
//        console.log(`MongoDB connected: ${conn.connection.host}`)
//     } catch(error) {
//         console.log(error)
//         process.exit(1)
//     }
// }

// module.exports = connectDB;


const connection = {};


async function connect() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
}



const db = { connect };
export default db;
