import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {

  return (
    <main>
      <h1 className="head-text">onboarding</h1>
    </main>
  );
}

export default Page;
