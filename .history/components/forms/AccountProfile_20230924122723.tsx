"use client"

import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import {zodResolver } from "@hookform/resolvers/zod"
import { UserValidation } from '@/lib/validation/user'

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
    const form = useForm({ resolver: zodResolver(UserValidation), defaultValues: {
        profile_photo: '',
        name: '',
        username: '',
        bio: '',
    }});

    return (
        <Form>

        </Form>
    )
}

export default AccountProfile
