import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchPosts } from "@/lib/actions/thread.actions";

async function Home() {
  const result = await fetchPosts(1,30);

  return (
    <>
      <h1 className='head-text text-left'>Home</h1>
      <section className='mt-9 flex flex-col gap-10'>
        {result.posts.length === 0 ?(
          <p classname="no-result">No thread founds</p>
        ):(
          
        )}
      </section>
    </>
  );
}

export default Home;