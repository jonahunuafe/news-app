import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://plus.unsplash.com/premium_photo-1682146176956-756032bdc7c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
        address: "some address 5, 12345 some city",
        description: "This is a first meetup!"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://plus.unsplash.com/premium_photo-1682090424415-5ed6717907c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
        address: "some address 10, 56789 some city",
        description: "This is our Second meetup!"
    },
];

function HomePage() {
    return (
      <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;