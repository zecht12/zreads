import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

async function Page() {
    const user = await currentUser();
    if(!user){
        return null;
    }
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) {
        redirect('/onboarding')
    }
    return (
        <section>
            <ProfileHeader
        </section>
    )
}

export default Page