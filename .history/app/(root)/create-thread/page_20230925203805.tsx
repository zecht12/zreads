import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function Page() {
    const user = await currentUser();
    return (
        <div>page</div>
    )
}
