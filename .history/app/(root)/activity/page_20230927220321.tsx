import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";
import Link from "next/link";

async function Page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(params.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    const activity = await getActivity(userInfo._id)
    return (
        <section>
            <h1 className='head-text mb-10'>Search</h1>
            <section className="mt-10 flex flex-col gap-5">
                {activity.length > 0 ? (
                    <>
                        {activity.map(() =>(
                            <Link href={``}></Link>
                        ))}
                    </>
                ) : (
                    <>
                        <p>No activity</p>
                    </>
                )}
            </section>
        </section>
    )
}