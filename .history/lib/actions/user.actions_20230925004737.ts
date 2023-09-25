"use server"

import { connectToDB } from '../mongoose'

export async function fetchUser(userId: string) {
    connectToDB();
}

export async function updateUser({userId: string,bio,name,path,username: string,image,}: Params): Promise<void> {
    connectToDB();
}