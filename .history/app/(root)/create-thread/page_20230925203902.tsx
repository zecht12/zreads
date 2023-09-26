import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function Page() {
    const user = await currentUser();
    if(!user){
        return nullll;
    }
    return (
        <div>page</div>
    )
}

export default Page