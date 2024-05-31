import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image="https://plus.unsplash.com/premium_photo-1705091307717-cac2e3ca3c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"
            alt="first meetup"
            title="A First Meetup"
            address="Some Street 5, Some city"
            description="This is a first meetup"
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ],
    }
}

export async function getStaticProps(context) {    /* In this case context does not have the req object but the params */
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetups: {
                image: "https://plus.unsplash.com/premium_photo-1705091307717-cac2e3ca3c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D",
                id: meetupId,
                title: "A First Meetup",
                address: "Some Street 5, Some city",
                description: "This is a first meetup"
            }
        }
    }
}

export default MeetupDetails;