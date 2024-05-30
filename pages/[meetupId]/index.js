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

export default MeetupDetails;