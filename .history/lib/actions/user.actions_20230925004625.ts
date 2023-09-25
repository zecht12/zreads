"use server"

import { connectToDB } from '../mongoose'

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser({userId,bio,name,path,username,image,}: Params): Promise<void> {
    
}