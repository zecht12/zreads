import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Home() {

  return (
    <>
      <h1 className='head-text text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10'>
      </section>
    </>
  );
}

export default Home;