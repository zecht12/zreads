"use client"

import React from 'react'

interface props {
    user:{
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle:string
}

const AccountProfile = () => {
    return (
        <div>AccountProfile</div>
    )
}

export default AccountProfile
