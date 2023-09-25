"use server"

import { connectToDB } from '../mongoose'
import User from '../models/user.model';

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser(userId: string,bio: string,name: string,username: string,): Promise<void> {
    connectToDB();
    await User.findOneAndUpdate{
        {id}
    }
}