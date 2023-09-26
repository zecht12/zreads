import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function Page() {
    const user = await currentUser();
    if(!user){
        return null;
    }
    const userInfo = await fetchUser(user.id);
    if (!use) {
        
    }
    return (
        <div>page</div>
    )
}

export default Page