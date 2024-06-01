import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name='description' 
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    )
}

const uri = process.env.MONGODB_URI;

export async function getStaticPaths() {
    const client = await MongoClient.connect(uri);
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
    
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsConnection = db.collection('meetups');

    const singleMeetup = await meetupsConnection.findOne({ 
        _id: new ObjectId(meetupId)
    })

    client.close();

    return {
        props: {
            meetupData: {
                id: singleMeetup._id.toString(),
                title: singleMeetup.title,
                address: singleMeetup.address,
                image: singleMeetup.image,
                description: singleMeetup.description,
            }, 
        }
    }
}

export default MeetupDetails;