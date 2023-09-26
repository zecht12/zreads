"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";
import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions";
import { ThreadValidation } from "@/lib/validations/Zreads";

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}

export default function PostThread({ userId }:{ userId : string }) {
    const router = useRouter();
    const pathname = usePathname();
    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread:'',
            accountId: userId,
        },
    });

    return (
        <Form {...form}>
            <form className='flex flex-col justify-start gap-10' onSubmit={form.handleSubmit(onSubmit)}>
            </form>
        </Form>
    )
}
