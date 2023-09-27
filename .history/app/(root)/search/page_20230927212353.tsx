import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { profileTabs } from "@/constants";
import ThreadsTab from "@/components/shared/ThreadTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";

async function Page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(params.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    const result = await fetchUsers({
        userId: user.id,
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    })
    return (
        <section>
            <h1 className='head-text mb-10'>Search</h1>
            <div className="mt-14 flex flex-col gap-9">
                {result.users.length === 0 ?(
                    <p className="no-result">No users</p>
                ):(
                    <>
                        {result.users.map((person) => (
                            <UserCard id={person.is} key={person.id} imageUrl={} />
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}