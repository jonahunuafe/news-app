import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Link from "next/link";
import {FiEdit} from "react-icons/fi";
// import Search from "@/components/Search";
import { getAllNews } from "@/lib/data";
// import ImagePicker from "@/components/ImagePicker";
import Card from "./ui/Card";



const HomePage  = async () => {
  const allNews = await getAllNews();

  const numOfPost = allNews.length;

  return (
    <main>
      {/* <Search  /> */}
      {<Navbar />}
      {<Heading
        title='Discover Latest News Around Your Community.'
        description='Alert your neighbours of current happenings around.'
      />}
      <div className="bg-gray-800 pb-8">
        <p className="text-white text-center">
          {numOfPost > 1 ? `There are ${numOfPost} News Posted` : `There is ${numOfPost} News Posted` }
        </p>
        <h1 className="text-center text-white font-medium text-xl md:text-3xl py-5 px-4">
          Create and share latest events and incident that your witness.
        </h1>
        <div className="flex flex-col gap-6">
          {
            allNews.map((news) => (                 
              <Card key={news.id}>
                <h2 className="text-center text-2xl font-bold py-4">{news.headline}</h2>
                <p>{news.description}</p>
                <div className="flex justify-between px-4 py-6">
                  <Link href={`editnews/${news.id}`}>
                    <FiEdit />
                  </Link>
                  <Link href={`/details/${news.id}`} className="text-orange-400 font-medium">View Details</Link>
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
