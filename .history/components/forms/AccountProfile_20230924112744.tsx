"use client"

import React from 'react'

interface props {
    user:{
        id: string,
        objectId: string,
        username: string,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }
}

const AccountProfile = () => {
    return (
        <div>AccountProfile</div>
    )
}

export default AccountProfile
