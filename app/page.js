import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";


export default function Home() {
  return (
    <main>
      {<Heading
      title='Contact Book'
      description='All Contacts Below'
      /> }
      <Navbar />
    </main>
  );
}
