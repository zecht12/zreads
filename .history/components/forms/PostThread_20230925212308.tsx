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
    const { startUpload } = useUploadThing("media");

    const [files, setFiles] = useState<File[]>([]);

    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
        profile_photo: User?.image ? user.image : "",
        name: user?.name ? user.name : "",
        username: user?.username ? user.username : "",
        bio: user?.bio ? user.bio : "",
        },
    });

    return (
        <div>PostThread</div>
    )
}
