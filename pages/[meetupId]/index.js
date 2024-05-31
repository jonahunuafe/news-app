import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://Jonah:B9DhfJLBmFAMjb8J@jonahdev.5dyhnme.mongodb.net/?retryWrites=true&w=majority&appName=Jonahdev');
    const db = client.db();

    const meetupsConnection = db.collection('meetups');

    const meetups = await meetupsConnection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ 
            params: {meetupId: meetup._id.toString()} 
        })),
    }
}

export async function getStaticProps(context) {    /* In this case context does not have the req object but the params */
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect('mongodb+srv://Jonah:B9DhfJLBmFAMjb8J@jonahdev.5dyhnme.mongodb.net/?retryWrites=true&w=majority&appName=Jonahdev');
    const db = client.db();

    const meetupsConnection = db.collection('meetups');

    const singleMeetup = await meetupsConnection.findOne({ 
        _id: ObjectId(meetupId)
    })

    client.close();

    return {
        props: {
            meetupData: {
                id: singleMeetup._id,
                title: singleMeetup.title,
                address: singleMeetup.address,
                image: singleMeetup.image,
                description: singleMeetup.description,
            }, 
        }
    }
}

export default MeetupDetails;