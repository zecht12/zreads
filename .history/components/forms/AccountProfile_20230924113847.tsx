"use client"

import React from 'react'
import { Form } from '../ui/form'

interface props {
    user:{
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string,
}

const AccountProfile = ({ user, btnTitle} : props) => {
    return (
        <Form
    )
}

export default AccountProfile
