import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from "@/components/meetups/MeetupList";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Business Meetups</title>
                <meta 
                    name='description' 
                    content='Browse a huge list of highly active business meetups'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// This code execute during the build process. If you would want to load data from a backend 
// before your component render it.

// export async function getServerSideProps(context) {
//     // This is useful when you need access to the request object and your data changes so frequently that revalidate won't help
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

const uri = process.env.MONGODB_URI;

export async function getStaticProps() {
    // fetch data from an API or read data from a file system. This is important during the build process.
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsConnection = db.collection('meetups');

    const meetups = await meetupsConnection.find().toArray();

    client.close();
    
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        }, 
        revalidate: 1
    };
}

export default HomePage;