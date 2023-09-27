import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";

async function Page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(params.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    const activity = await getActivity(userInfo.ts)
    return (
        <section>
            <h1 className='head-text mb-10'>Search</h1>
            <div className="mt-14 flex flex-col gap-9">
                {result.users.length === 0 ?(
                    <p className="no-result">No users</p>
                ):(
                    <>
                        {result.users.map((person) => (
                            <UserCard id={person.is} key={person.id} name={person.name} username ={person.username} imageUrl={person.image} personType="User" />
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}