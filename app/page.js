// import Navbar from "@/components/Navbar";
// import Heading from "@/components/Heading";
import Link from "next/link";
import {FiEdit} from "react-icons/fi";
// import Search from "@/components/Search";
import { getContacts } from "@/lib/data";
// import ImagePicker from "@/components/ImagePicker";
import Card from "./ui/Card";



const HomePage  = async () => {
  const contacts = await getContacts();

  return (
    <main>
      {/* <Search  /> */}
      {/* <Navbar /> */}
      {/* {<Heading */}
        {/* title='Discover Latest News Around Your Community.'
        description='Alert your neighbours of current happenings around.' */}
      {/* /> } */}
      <div>
        <h1>Create and share the latest events and incident that your witness.</h1>
        <div>
          {
            contacts.map((contact) => (                 
              <Card key={contact.id}>
                <h2>{contact.headline}</h2>
                <p>{contact.description}</p>
                <div>
                  <Link href={`editcontact/${contact.id}`}>
                    <FiEdit />
                  </Link>
                </div>
                <div>
                  <Link href={`/details/${contact.id}`}>View Details</Link>
                </div>
                {/* <ImagePicker label='Your image' name='image' /> */}
              </Card>
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default HomePage;
