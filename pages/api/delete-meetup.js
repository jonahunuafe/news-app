// import { MongoClient } from "mongodb";
// import { ObjectId } from "mongodb";

// export async function deleteHandler() {
//     const client = await MongoClient.connect(uri);
//     const db = client.db();
    
//     const { id } = req.query;
    
//     const meetupsConnection = db.collection('meetups');
    
//     await meetupsConnection.deleteOne({ 
//         _id: new ObjectId(id)
//     })
    
//     client.close();
// }

