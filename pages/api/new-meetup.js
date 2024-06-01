import { MongoClient } from 'mongodb';

// api/new-meetup

// POST api/new-meetup
const uri = process.env.MONGODB_URI;

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(uri);
        const db = client.db();

        const meetupsConnection = db.collection('meetups');
        const result = await meetupsConnection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler;