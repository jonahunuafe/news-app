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
      title='Contact Book'
      description='All Contacts Below'
      /> }
      <div className='flex flex-col md:flex-row px-4 py-4 gap-6 bg-green-300 has-[100]:'>
        {
          contacts.map((contact) => (                 
            <Card key={contact.id}>
              <h2>{contact.headline}</h2>
              <h4>{contact.creator}</h4>
              <p>{contact.description}</p>
              <span>{contact.email}</span>
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
    </main>
  );
}

export default HomePage;
