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
      <Navbar />
      {<Heading
        title='Discover Latest News Around Your Community.'
        description='Alert your neighbours of current happenings around.'
      /> }
      <div className="bg-gray-700">
        <h1 className="text-center text-white font-semibold text-lg">Create and share the latest events and incident that your witness.</h1>
        <div className="flex flex-col px-4 py-4 gap-6">
          {
            contacts.map((contact) => (                 
              <Card key={contact.id}>
                <h2 className="text-center font-bold text-2xl">{contact.headline}</h2>
                <p className="text-center">{contact.description}</p>
                <div>
                  <Link href={`editcontact/${contact.id}`}>
                    <FiEdit />
                  </Link>
                </div>
                <div className="text-center text-green-600 cursor-pointer">
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
