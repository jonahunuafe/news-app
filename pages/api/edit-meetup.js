// import { MongoClient } from 'mongodb';
// import { ObjectId } from 'mongodb';

// // api/new-meetup

// // POST api/new-meetup
// const uri = process.env.MONGODB_URI;

// async function editHandler(req, res) {
//     const client = await MongoClient.connect(uri);
//     const db = client.db();

//     const { id } = req.query;

//     const { title, address,  image, description } = req.body;

//     const meetupsConnection = db.collection('meetups');

//     const meetups = await meetupsConnection.updateOne({ _id:  ObjectId(id)}, );

//     client.close();

// }


// export default editHandler;