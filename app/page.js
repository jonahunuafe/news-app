import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
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
      {<Navbar />}
      {<Heading
        title='Discover Latest News Around Your Community.'
        description='Alert your neighbours of current happenings around.'
      />}
      <div className="bg-gray-700 pb-8">
        <h1 className="text-center text-white font-medium text-xl md:text-3xl py-5 px-4">Create and share the latest events and incident that your witness.</h1>
        <div className="flex flex-col gap-6">
          {
            contacts.map((contact) => (                 
              <Card key={contact.id}>
                <h2 className="text-center text-2xl font-bold py-4">{contact.headline}</h2>
                <p>{contact.description}</p>
                <div className="flex justify-between px-4 py-6">
                  <Link href={`editcontact/${contact.id}`}>
                    <FiEdit />
                  </Link>
                  <Link href={`/details/${contact.id}`} className="text-orange-400 font-medium">View Details</Link>
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
