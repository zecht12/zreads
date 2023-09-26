import { fetchUser } from '@/lib/actions/user.actions';
import React from 'react'

async function Page() {
    const user = await currentUser();
    if(!user){
        return null;
    }
    const userInfo = await fetchUser(user.id);
    return (
        <div>page</div>
    )
}

export default Page