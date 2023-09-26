import { currentUser } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
    const user = await currentUser()
    return (
        <div>page</div>
    )
}
