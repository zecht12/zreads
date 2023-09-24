"use client"

import React from 'react'

inter useData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  }

const AccountProfile = () => {
    return (
        <div>AccountProfile</div>
    )
}

export default AccountProfile
