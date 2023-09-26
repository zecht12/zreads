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
        <>
            <h1 className='text-heading1-bold text-slate-100'>Create Zreads</h1>
            <PostThread  />
        </>
    )
}

export default Page