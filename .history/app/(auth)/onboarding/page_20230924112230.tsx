import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser  } from "@clerk/nextjs";

async function Page() {

  const user = await currentUser();
  const userInfo = {};
  const useData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name
  }

  return (
    <main className="max-w-3xl mx-auto flex flex-col px-10 py-20">
      <h1 className="head-text">onboarding</h1>
      <p className="text-base-regular mt-3 text-light-2">Complete your account to use Zreads</p>
      <section className="bg-dark-2 p-10 mt-9">
        <AccountProfile/>
      </section>
    </main>
  );
}

export default Page;
