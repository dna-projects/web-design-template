import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-36">
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  );
}
