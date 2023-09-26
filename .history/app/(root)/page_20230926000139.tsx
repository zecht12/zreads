import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchPosts } from "@/lib/actions/thread.actions";

async function Home() {
  const result = await fetchPosts

  return (
    <>
      <h1 className='head-text text-left'>Home</h1>
      <section className='mt-9 flex flex-col gap-10'>
      </section>
    </>
  );
}

export default Home;