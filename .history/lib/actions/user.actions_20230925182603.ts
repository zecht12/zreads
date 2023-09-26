"use server"

import { connectToDB } from '../mongoose'
import User from '../models/user.model';

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser(userId: string, image: string, path: string,bio: string,name: string,username: string,): Promise<void> {
    connectToDB();
    await User.findOneAndUpdate(
        {id: userId},
        {
            sernameL: username.toLowerCase(),
            name,
            bio,
            path,
            image,
            onboard: true,
        },
        {upsert: true},
    );
    if
}