import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function Page() {
    const user = await currentUser();
    if(!user){
        return null;
    }
    const user
    return (
        <div>page</div>
    )
}

export default Page