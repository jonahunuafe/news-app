"use server"

import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Link from "next/link";
import {FiEdit} from "react-icons/fi";
import { getAllNews } from "@/lib/data";
import Card from "./ui/Card";



const HomePage  = async () => {
  const allNews = await getAllNews();

  const numOfPost = allNews.length;

  return (
    <>
      <header>
        <Navbar />
        <Heading
          title='Discover Latest News Around Your Community.'
          description='Alert your neighbours of current happenings around.'
        />
        <div className="pb-8">
          <h1 className="text-center text-white font-medium text-xl md:text-3xl py-5 px-4">
            Create and share latest events and incident that your witness.
          </h1>
          <p className="text-white text-center px-3 py-1 font-medium text-lg border-b-2 border-slate-300 w-max m-auto rounded-full mb-4">
            {
              numOfPost > 1 ? `There are ${numOfPost} News Posted` : 
              numOfPost === 1 ? `There is only ${numOfPost} News Posted` : 
              `There are ${numOfPost} News Posted`
            }
          </p>
        </div>
      </header>
      <main>
        <div className="flex flex-col gap-6 mb-6">
          {
            allNews.map((news) => (                 
              <Card key={news.id}>
                <h2 className="text-center text-2xl font-bold py-4 text-gray-800">{news.headline}</h2>
                <p 
                  className="text-gray-700 text-lg"
                  dangerouslySetInnerHTML={{
                    __html: news.description.replace(/\n/g, '<br />'),
                  }}></p>
              
                <div className="flex justify-between px-4 py-6">
                  <Link href={`editnews/${news.id}`}>
                    <FiEdit />
                  </Link>
                  <Link href={`/details/${news.id}`} className="text-orange-400 font-medium">View Details</Link>
                </div>
              </Card>
            ))
          }
        </div>
      </main>
    </>
  );
}

export default HomePage;